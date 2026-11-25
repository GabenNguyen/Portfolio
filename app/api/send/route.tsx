import ContactNotiEmail from "@/app/component/ContactNotiEmail";
import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME = /^[\p{L}\p{M} .'-]+$/u;

const bounded = (value: unknown, max: number): value is string =>
  typeof value === "string" && value.trim().length > 0 && value.trim().length <= max;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const { name, email, message } = body as Record<string, unknown>;

    // Name and email land in the subject and Reply-To header; keep them to safe shapes.
    if (
      !bounded(name, 100) || !NAME.test(name.trim()) ||
      !bounded(email, 254) || !EMAIL.test(email.trim()) ||
      !bounded(message, 5000)
    ) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Contact form email is not configured");
      return NextResponse.json({ error: "Contact form is unavailable." }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["nguyenbahoa04@gmail.com"],
      subject: `Chat request from ${name.trim()}`,
      react: ContactNotiEmail({ name: name.trim(), email: email.trim(), message: message.trim() }),
      replyTo: email.trim(),
    });

    // Never return the provider's raw response to the caller.
    return NextResponse.json({ ok: true });
  } catch {
    console.error("Contact email delivery failed");
    return NextResponse.json(
      { error: "Failed to send your message. Please try again." },
      { status: 500 }
    );
  }
}
