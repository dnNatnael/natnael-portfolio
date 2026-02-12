import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'tell@gmail.com',
      replyTo: email,
      subject: `Contact Form: ${subject || 'New Message from ' + name}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject || 'No subject'}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong style="color: #555;">Name:</strong> ${name}</p>
            <p><strong style="color: #555;">Email:</strong> ${email}</p>
            <p><strong style="color: #555;">Subject:</strong> ${subject || 'No subject'}</p>
            
            <h3 style="color: #333; margin-top: 20px;">Message:</h3>
            <p style="background: white; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Failed to send email:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}