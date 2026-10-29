import type { Metadata } from 'next';
import { ServicesPage } from '@/components/pages/ServicesPage';
import rawAcceleratorData from '@/data/ai-accelerator.json';

const dataList = Array.isArray(rawAcceleratorData)
  ? (rawAcceleratorData as Record<string, { front_loaded_aeo_direct_answer_snippet?: string; seo_keywords?: string[] }>[])
  : [rawAcceleratorData as Record<string, { front_loaded_aeo_direct_answer_snippet?: string; seo_keywords?: string[] }>];
const servicesData = dataList[0]?.services;
const servicesSnippet = servicesData?.front_loaded_aeo_direct_answer_snippet;

export const metadata: Metadata = {
  title: 'Commercial Truck & Trailer Repair Services | Manteca, CA',
  description:
    servicesSnippet ||
    "Northern California's master 10-bay heavy-duty diesel truck repair, trailer maintenance, computer diagnostics, commercial tires, and high-pressure washout depot in Manteca, CA.",
  alternates: {
    canonical: 'https://imperialtruckwashrepair.com/services',
  },
};

export default function Page() {
  return <ServicesPage />;
}
