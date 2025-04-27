import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { subject, html, text } = await request.json();

    // Create a transporter using Gmail's SMTP configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: "unityproject4489@gmail.com",
        pass: process.env.EMAIL_PASSWORD, // Ensure EMAIL_PASSWORD is set in .env
      },
    });

    // Email options
    const mailOptions = {
      from: "Hamshine Electronics Website <unityproject4489@gmail.com>",
      to: "unityproject4489@gmail.com",
      subject,
      text,
      html,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
