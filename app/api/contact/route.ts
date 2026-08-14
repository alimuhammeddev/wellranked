import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const {
      fullName,
      email,
      phone,
      website,
      businessName,
      businessType,
      message,
      subject,
    } = await request.json();

    // Validate required inputs
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required" },
        { status: 400 }
      );
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Build email content with all form fields
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "wellrankedmarketing@gmail.com",
      subject: subject || `New enquiry from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #145EEE; border-bottom: 2px solid #145EEE; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px; color: #102A56;">Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #102A56;">Business Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${businessName || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #102A56;">Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #102A56;">Phone</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #102A56;">Website</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${website || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #102A56;">Business Type</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${businessType || "Not provided"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <h3 style="color: #102A56; margin-bottom: 10px;">Message</h3>
            <div style="background: #f8fafc; padding: 15px; border-radius: 8px; line-height: 1.6; color: #374151;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>

          <p style="margin-top: 30px; font-size: 12px; color: #9ca3af;">
            Sent from the Wellranked contact form
          </p>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}