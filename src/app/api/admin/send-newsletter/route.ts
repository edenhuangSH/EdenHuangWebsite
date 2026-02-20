import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";
const ADMIN_SECRET = process.env.ADMIN_SECRET ?? "";
// The verified sender email address in your Resend account
const FROM_EMAIL = process.env.FROM_EMAIL ?? "Eden Huang <newsletter@edenhuang.com>";

// ─── Email HTML template ──────────────────────────────────────────────────────

function buildEmailHtml({
  subject,
  body,
  contentType,
  articleLink,
  unsubscribeUrl,
}: {
  subject: string;
  body: string;
  contentType: string;
  articleLink?: string;
  unsubscribeUrl: string;
}): string {
  const typeLabel: Record<string, string> = {
    articles: "New Article",
    insights: "New Insight",
    tech: "Tech Note",
    weekly: "Weekly Digest",
    custom: "From Eden",
  };
  const badge = typeLabel[contentType] ?? "Newsletter";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#fafaf9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#fafaf9;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border:1px solid #e7e5e4;border-radius:4px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="padding:32px 40px 24px;border-bottom:1px solid #f5f5f4;">
              <p style="margin:0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#a8a29e;font-weight:500;">Eden Huang</p>
              <div style="width:24px;height:1px;background:#d6d3d1;margin-top:6px;"></div>
            </td>
          </tr>

          <!-- Badge -->
          <tr>
            <td style="padding:24px 40px 0;">
              <span style="display:inline-block;font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:#78716c;border:1px solid #e7e5e4;padding:3px 10px;border-radius:999px;">${badge}</span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:20px 40px 28px;color:#44403c;font-size:15px;line-height:1.85;">
              ${body.replace(/\n/g, "<br/>")}
              ${articleLink ? `<div style="margin-top:24px;"><a href="${articleLink}" style="display:inline-block;font-size:12px;color:#57534e;border:1px solid #d6d3d1;padding:8px 20px;border-radius:3px;text-decoration:none;">Read the full piece →</a></div>` : ""}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px 32px;border-top:1px solid #f5f5f4;">
              <p style="margin:0;font-size:11px;color:#a8a29e;line-height:1.6;">
                You're receiving this because you subscribed at edenhuang.com.<br/>
                <a href="${unsubscribeUrl}" style="color:#a8a29e;text-decoration:underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-admin-secret");
  if (!ADMIN_SECRET || secret !== ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 503 });
  }

  const {
    subject,
    body,
    contentType,
    articleLink,
    filterByInterest,
  } = (await req.json()) as {
    subject: string;
    body: string;
    contentType: string;
    articleLink?: string;
    filterByInterest: boolean;
  };

  if (!subject || !body) {
    return NextResponse.json({ error: "Subject and body are required." }, { status: 400 });
  }

  // Fetch all subscribers
  const contactsRes = await fetch(
    `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`,
    { headers: { Authorization: `Bearer ${RESEND_API_KEY}` } }
  );

  if (!contactsRes.ok) {
    return NextResponse.json({ error: "Failed to fetch subscribers." }, { status: 500 });
  }

  const contactsData = await contactsRes.json();
  type RawContact = { id: string; email: string; first_name: string; unsubscribed: boolean };
  const allContacts: RawContact[] = contactsData.data ?? [];

  // Filter to active, non-unsubscribed contacts
  let recipients = allContacts.filter((c) => !c.unsubscribed);

  // Optionally filter by interest tag stored in first_name
  if (filterByInterest && contentType !== "custom") {
    recipients = recipients.filter((c) =>
      c.first_name?.includes(contentType) || c.first_name?.includes("all")
    );
  }

  if (recipients.length === 0) {
    return NextResponse.json({ error: "No matching subscribers found." }, { status: 400 });
  }

  const resend = new Resend(RESEND_API_KEY);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://edenhuang.com";

  // Resend batch endpoint: up to 100 emails per request
  const BATCH_SIZE = 100;
  let sent = 0;
  let failed = 0;

  for (let i = 0; i < recipients.length; i += BATCH_SIZE) {
    const chunk = recipients.slice(i, i + BATCH_SIZE);
    const emails = chunk.map((contact) => ({
      from: FROM_EMAIL,
      to: contact.email,
      subject,
      html: buildEmailHtml({
        subject,
        body,
        contentType,
        articleLink,
        unsubscribeUrl: `${baseUrl}/unsubscribe?email=${encodeURIComponent(contact.email)}`,
      }),
    }));

    const { error } = await resend.batch.send(emails);
    if (error) {
      console.error("Batch send error:", error);
      failed += chunk.length;
    } else {
      sent += chunk.length;
    }
  }

  return NextResponse.json({
    success: true,
    sent,
    failed,
    total: recipients.length,
  });
}
