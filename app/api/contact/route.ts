import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { contactFormSchema } from '@/lib/validations';
import { createTransporter } from '@/lib/nodemailer';
import { getAdminContactEmailHtml, getCustomerContactEmailHtml } from '@/lib/email-templates';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // 1. Zod validation
        const validation = contactFormSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { success: false, errors: validation.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const data = validation.data;
        const transporter = createTransporter();

        const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER || 'no-reply@imperialtruckwashrepair.com';
        const adminEmail = process.env.ADMIN_EMAIL || 'imperialtruckrepair13@gmail.com';
        const bccEmail = process.env.BCC_EMAIL || undefined;

        const logoPath = path.join(process.cwd(), 'public', 'logo', 'logo.png');
        const attachments = [
            {
                filename: 'logo.png',
                path: logoPath,
                cid: 'companylogo',
            },
        ];

        // 2. Admin Mail Options (with BCC)
        const adminMailOptions = {
            from: fromAddress,
            to: adminEmail,
            bcc: bccEmail,
            replyTo: data.email,
            subject: `[Website Contact] New message from ${data.fullName}`,
            html: getAdminContactEmailHtml(data),
            attachments,
        };

        // 3. Customer Confirmation Mail Options
        const customerMailOptions = {
            from: fromAddress,
            to: data.email,
            subject: `Thank you for contacting Imperial Truck & Trailer Repair`,
            html: getCustomerContactEmailHtml(data),
            attachments,
        };

        // 4. Send emails in parallel
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(customerMailOptions),
        ]);

        return NextResponse.json({
            success: true,
            message: 'Inquiry received and emails dispatched successfully.',
        });
    } catch (error: unknown) {
        console.error('Error sending contact email:', error);
        return NextResponse.json(
            {
                success: false,
                message: error instanceof Error ? error.message : 'Failed to send email. Please try again later.',
            },
            { status: 500 }
        );
    }
}
