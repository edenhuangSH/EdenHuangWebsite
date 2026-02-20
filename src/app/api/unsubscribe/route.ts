import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";

export async function POST(req: NextRequest) {
  try {
    const { email } = (await req.json()) as { email: string };

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
      return NextResponse.json({ error: "Service not configured." }, { status: 503 });
    }

    // Resend supports unsubscribing by updating the contact's unsubscribed flag
    const res = await fetch(
      `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, unsubscribed: true }),
      }
    );

    if (!res.ok && res.status !== 409) {
      return NextResponse.json({ error: "Failed to unsubscribe." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unsubscribe error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
