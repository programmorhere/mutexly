import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: Request) {
    try {
        const { subject, text } = await req.json();
        const origin =
            req.headers.get("origin") ||
            process.env.NEXT_PUBLIC_SITE_URL ||
            "https://mutexly.com";

        const html = `
          <div style="margin:0;padding:0;background:#0c0a14;font-family:Inter,Segoe UI,Arial,sans-serif;color:#ede9fe;">
            <div style="max-width:640px;margin:0 auto;padding:32px 20px;">
              <div style="background:#140f24;border:1px solid rgba(167,139,250,0.25);border-radius:14px;overflow:hidden;">
                <div style="padding:20px 24px;border-bottom:1px solid rgba(167,139,250,0.2);display:flex;align-items:center;gap:12px;">
                  <img src="${origin}/logo/icon-app-purple.png" alt="Mutexly" width="28" height="28" style="border-radius:8px;display:block;" />
                  <div style="font-size:18px;font-weight:700;letter-spacing:0.02em;">Mutexly</div>
                </div>
                <div style="padding:22px 24px;">
                  <p style="margin:0 0 12px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#a78bfa;">New project inquiry</p>
                  <h2 style="margin:0 0 14px;font-size:22px;line-height:1.2;color:#ffffff;">${subject}</h2>
                  <div style="margin-top:14px;padding:14px;border-radius:10px;background:#0f0b1d;border:1px solid rgba(167,139,250,0.2);white-space:pre-wrap;line-height:1.55;color:#d7cff8;">${text}</div>
                </div>
              </div>
              <p style="margin:16px 6px 0;font-size:12px;color:#9c90cc;">Mutexly · Enterprise AI made practical</p>
            </div>
          </div>
        `;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true, // use true for port 465
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: "info@mutexly.com",
            subject,
            text,
            html,
        });
        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error("Email error:", err);
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
