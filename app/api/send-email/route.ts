import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: Request) {
    try {
        const { subject, text } = await req.json();
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
        });
        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error("Email error:", err);
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
