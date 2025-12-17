import ContactNotiEmail from "@/app/component/ContactNotiEmail";
import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing field(s)!" }, { status: 500 });
    }

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["nbhapl128844@gmail.com"],
      subject: `Chat request from ${name}`,
      react: ContactNotiEmail({ name, email, message }),
      replyTo: email,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to send your message! Please try again" },
      { status: 500 }
    );
  }
}
