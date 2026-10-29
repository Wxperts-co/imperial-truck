import type { Metadata } from 'next';
import { AboutUsPage } from '@/components/pages/AboutUsPage';
import rawAcceleratorData from '@/data/ai-accelerator.json';

const dataList = Array.isArray(rawAcceleratorData)
  ? (rawAcceleratorData as Record<string, { front_loaded_aeo_direct_answer_snippet?: string; seo_keywords?: string[] }>[])
  : [rawAcceleratorData as Record<string, { front_loaded_aeo_direct_answer_snippet?: string; seo_keywords?: string[] }>];
const aboutData = dataList[0]?.['about-us'];
const aboutSnippet = aboutData?.front_loaded_aeo_direct_answer_snippet;

export const metadata: Metadata = {
  title: 'About Us | Imperial Truck & Trailer Repair and Wash Manteca CA',
  description:
    aboutSnippet ||
    'Commercial Diesel Repair, Heavy Duty Truck & Trailer Wash, Computer Diagnostics, and 24/7 Mobile Recovery at 2142 W Yosemite Ave, Manteca, CA 95337.',
  alternates: {
    canonical: 'https://imperialtruckwashrepair.com/about-us',
  },
};

export default function Page() {
  return <AboutUsPage />;
}
