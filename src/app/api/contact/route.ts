import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to you
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: subject,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("OWNER EMAIL SENT");

    // Auto reply to user
    const userEmail = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting me",
      html: `
        <h2>Hello ${name}</h2>
        <p>
        Thank you for reaching out. I have received your message successfully.
        </p>
        <p>
        I will review your inquiry and get back to you as soon as possible.
        </p>

<br/>
      <p>Regards,<br/> Bilal Raza</p>
      `,
    });

    console.log("USER EMAIL SENT:", userEmail);

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Email sending failed",
      },
      {
        status: 500,
      }
    );
  }
}