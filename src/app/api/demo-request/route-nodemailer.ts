import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Configure Nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Validation schema
const demoFormSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  propertyName: z.string().min(2, 'Property name is required'),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate form data
    const validatedData = demoFormSchema.parse(body);

    // Store in Firestore
    const docRef = await addDoc(collection(db, 'demo_requests'), {
      ...validatedData,
      timestamp: serverTimestamp(),
      userAgent: req.headers.get('user-agent'),
      ipAddress: req.headers.get('x-forwarded-for') || req.ip,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: `ORION Demo <${process.env.GMAIL_USER}>`,
      to: validatedData.email,
      subject: 'Demo Request Received - ORION HOTEL SUITE',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #1f2937;">Thank you for requesting a demo!</h2>
          
          <p>Hi <strong>${validatedData.fullName}</strong>,</p>
          
          <p>We've received your request for a personalized demonstration of ORION HOTEL SUITE. Our team will review your submission and contact you within 24 hours.</p>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Request Details:</strong></p>
            <p style="margin: 8px 0;"><strong>Company:</strong> ${validatedData.company}</p>
            <p style="margin: 8px 0;"><strong>Property:</strong> ${validatedData.propertyName}</p>
          </div>
          
          <p>In the meantime, you can learn more about ORION's features at <a href="https://kimi-web-seven.vercel.app" style="color: #2563eb;">kimi-web-seven.vercel.app</a></p>
          
          <p>Questions? Reach out to us at:</p>
          <ul style="list-style: none; padding: 0;">
            <li>📧 <a href="mailto:graham@oriondevcore.com" style="color: #2563eb;">graham@oriondevcore.com</a></li>
            <li>📱 WhatsApp: <a href="https://wa.me/27724971840" style="color: #2563eb;">+27 72 497 1840</a></li>
          </ul>
          
          <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">Built in Africa. Engineered for Impact. 🚀</p>
        </div>
      `,
    });

    // Send notification email to admin (single email to Graham)
    await transporter.sendMail({
      from: `ORION Demo <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // mikehunt7099@gmail.com (forwarded from Cloudflare)
      subject: `🎉 New Demo Request: ${validatedData.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #1f2937;">🎉 New Demo Request Received</h2>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Full Name:</strong> ${validatedData.fullName}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${validatedData.email}" style="color: #2563eb;">${validatedData.email}</a></p>
            <p style="margin: 8px 0;"><strong>Company:</strong> ${validatedData.company}</p>
            <p style="margin: 8px 0;"><strong>Property:</strong> ${validatedData.propertyName}</p>
            ${validatedData.message ? `<p style="margin: 8px 0;"><strong>Message:</strong> ${validatedData.message}</p>` : ''}
          </div>
          
          <p><strong>📋 Quick Actions:</strong></p>
          <ul style="list-style: none; padding: 0;">
            <li>📧 <a href="mailto:${validatedData.email}" style="color: #2563eb;">Reply via Email</a></li>
            <li>💬 <a href="https://wa.me/27724971840" style="color: #2563eb;">WhatsApp Contact</a></li>
          </ul>
          
          <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">Firestore Doc ID: <strong>${docRef.id}</strong></p>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Demo request submitted successfully',
        id: docRef.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Form submission error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit demo request',
      },
      { status: 500 }
    );
  }
}
