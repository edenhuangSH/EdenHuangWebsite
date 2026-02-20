import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";
const ADMIN_SECRET = process.env.ADMIN_SECRET ?? "";

export type Contact = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at: string;
  unsubscribed: boolean;
};

export async function GET(req: NextRequest) {
  const secret = req.headers.get("x-admin-secret");
  if (!ADMIN_SECRET || secret !== ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 503 });
  }

  const res = await fetch(
    `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`,
    {
      headers: { Authorization: `Bearer ${RESEND_API_KEY}` },
    }
  );

  if (!res.ok) {
    const err = await res.json();
    return NextResponse.json({ error: err.message }, { status: 500 });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
