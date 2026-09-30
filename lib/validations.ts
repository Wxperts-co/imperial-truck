import { z } from 'zod';

export const contactFormSchema = z.object({
    fullName: z.string().trim().min(2, { message: 'Full name must be at least 2 characters.' }),
    phone: z.string().trim().min(7, { message: 'Please provide a valid phone number.' }),
    email: z.string().trim().email({ message: 'Please provide a valid email address.' }),
    address: z.string().trim().min(3, { message: 'Please provide a valid address.' }),
    description: z.string().optional().default(''),
});

export const estimateFormSchema = z.object({
    fullName: z.string().trim().min(2, { message: 'Full name must be at least 2 characters.' }),
    phone: z.string().trim().min(7, { message: 'Please provide a valid phone number.' }),
    email: z.string().trim().email({ message: 'Please provide a valid email address.' }),
    address: z.string().trim().min(3, { message: 'Please provide a valid address.' }),
    selectedServices: z.array(z.string()).min(1, { message: 'Please select at least one service.' }),
    description: z.string().optional().default(''),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type EstimateFormData = z.infer<typeof estimateFormSchema>;
