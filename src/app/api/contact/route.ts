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
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body style="margin:0;padding:40px;background:#f4f4f4;font-family:Arial,sans-serif;">

<table align="center" width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.12);">

<tr>
<td style="background:#111827;padding:35px;text-align:center;">
<h1 style="margin:0;color:#FFD700;font-size:34px;">
Next Tech Soul
</h1>

<p style="margin-top:12px;color:#d1d5db;font-size:15px;">
New Contact Form Submission
</p>
</td>
</tr>

<tr>
<td style="padding:35px;">

<table width="100%" cellspacing="0" cellpadding="12">

<tr style="background:#fafafa;">
<td width="30%"><b>👤 Name</b></td>
<td>${name}</td>
</tr>

<tr>
<td><b>📧 Email</b></td>
<td>${email}</td>
</tr>

<tr style="background:#fafafa;">
<td><b>📝 Subject</b></td>
<td>${subject}</td>
</tr>

</table>

<div style="margin-top:35px;padding:25px;background:#fff8dc;border-left:6px solid #FFD700;border-radius:10px;">
<h3 style="margin-top:0;">Message</h3>

<p style="line-height:1.8;color:#555;font-size:15px;">
${message}
</p>

</div>

</td>
</tr>

<tr>
<td style="background:#111827;color:#999;text-align:center;padding:25px;">
© 2026 Next Tech Soul
</td>
</tr>

</table>

</body>
</html>
`,
    });

    console.log("OWNER EMAIL SENT");

    // Auto reply to user
    const userEmail = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting me",
      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>

<body style="margin:0;padding:40px;background:#f4f4f4;font-family:Arial,sans-serif;">

<table align="center" width="650" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 12px 35px rgba(0,0,0,.12);">

<tr>

<td style="background:linear-gradient(135deg,#111827,#1f2937);padding:45px;text-align:center;">

<h1 style="margin:0;color:#FFD700;font-size:36px;">
Next Tech Soul
</h1>

<p style="color:#d1d5db;margin-top:10px;">
Professional Web Development Solutions
</p>

</td>

</tr>

<tr>

<td style="padding:45px;">

<h2 style="color:#111827;">
Hello ${name},
</h2>

<p style="font-size:16px;line-height:1.8;color:#555;">
Thank you for contacting <strong>Next Tech Soul</strong>.
</p>

<p style="font-size:16px;line-height:1.8;color:#555;">
We have successfully received your message and truly appreciate your interest in our services.
</p>

<div style="margin:35px 0;background:#fff8dc;border-left:6px solid #FFD700;padding:22px;border-radius:10px;">

<p style="margin:0;font-size:16px;">
✅ Your inquiry has been received.
</p>

<p style="margin-top:12px;">
Our team will carefully review your request and respond within <strong>24 hours</strong>.
</p>

</div>

<h3 style="margin-top:40px;">
Your Submission
</h3>

<table width="100%" cellpadding="12" cellspacing="0">

<tr style="background:#fafafa;">
<td><b>Subject</b></td>
<td>${subject}</td>
</tr>

<tr>
<td><b>Email</b></td>
<td>${email}</td>
</tr>

</table>

<div style="margin-top:35px;padding:25px;background:#f8fafc;border-radius:10px;border:1px solid #eee;">

${message}

</div>

<p style="margin-top:45px;font-size:16px;">
Best Regards,
</p>

<h2 style="margin-bottom:0;color:#111827;">
Bilal Raza
</h2>

<p style="margin-top:6px;color:#FFD700;font-weight:bold;">
Founder • Next Tech Soul
</p>

</td>

</tr>

<tr>

<td style="background:#111827;padding:28px;text-align:center;color:#9ca3af;font-size:14px;">

© 2026 Next Tech Soul

<br><br>

Thank you for choosing us.

</td>

</tr>

</table>

</body>

</html>
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