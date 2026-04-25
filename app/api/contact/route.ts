import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER ?? "",
        pass: process.env.SMTP_PASS ?? "",
      },
    });

    await transporter.sendMail({
      from: `"UK Casino Picks" <${process.env.SMTP_USER ?? "noreply@ukcasinopicks.org"}>`,
      to: process.env.CONTACT_EMAIL ?? "hello@ukcasinopicks.org",
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#c9a84c;border-bottom:1px solid #c9a84c;padding-bottom:8px;">
            New Contact Form Submission
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#666;width:100px;"><strong>Name</strong></td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Email</strong></td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Subject</strong></td><td style="padding:8px 0;">${subject}</td></tr>
          </table>
          <h3 style="color:#333;margin-top:16px;">Message</h3>
          <div style="background:#f9f9f9;padding:16px;border-radius:8px;white-space:pre-wrap;">${message}</div>
          <p style="color:#999;font-size:12px;margin-top:24px;">Sent via ukcasinopicks.org contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] mail error:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
