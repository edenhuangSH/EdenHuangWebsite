import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";

export async function POST(req: NextRequest) {
  try {
    const { email, name, interests } = (await req.json()) as {
      email: string;
      name?: string;
      interests: string[];
    };

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 }
      );
    }

    // Encode interests in first_name since Resend free tier has no custom fields.
    // Format: "Display Name [articles,insights,tech,weekly]"
    const interestTag = interests.length > 0 ? `[${interests.join(",")}]` : "[all]";
    const firstName = name ? `${name} ${interestTag}` : interestTag;

    const res = await fetch(
      `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          first_name: firstName,
          unsubscribed: false,
        }),
      }
    );

    if (!res.ok) {
      const err = await res.json();
      // Contact already exists is not a fatal error
      if (res.status === 409) {
        return NextResponse.json({ success: true, message: "already_subscribed" });
      }
      console.error("Resend error:", err);
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
