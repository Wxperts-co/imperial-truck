import nodemailer from 'nodemailer';

export const createTransporter = () => {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;

    if (!host || !user || !pass) {
        throw new Error('SMTP credentials are not properly configured in environment variables.');
    }

    return nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
            user,
            pass,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
};
