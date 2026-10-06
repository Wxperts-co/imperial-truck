import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/homepage/HeroSection';
import { AeoDirectAnswerSnippet } from '@/components/homepage/AeoDirectAnswerSnippet';
import rawAcceleratorData from '@/data/ai-accelerator.json';

const AboutSection = dynamic(() => import('@/components/homepage/AboutSection').then((mod) => mod.AboutSection));
const ServiceSection = dynamic(() => import('@/components/homepage/ServiceSection').then((mod) => mod.ServiceSection));
const WhyChooseUsSection = dynamic(() => import('@/components/homepage/WhyChooseUsSection').then((mod) => mod.WhyChooseUsSection));
const TestimonialSection = dynamic(() => import('@/components/homepage/TestimonialSection').then((mod) => mod.TestimonialSection));
const CTA = dynamic(() => import('@/components/common/CTA').then((mod) => mod.CTA));
const MobileStickyActions = dynamic(() => import('@/components/common/MobileStickyActions').then((mod) => mod.MobileStickyActions));
const FloatingEstimateButton = dynamic(() => import('@/components/common/FloatingEstimateButton').then((mod) => mod.FloatingEstimateButton));

export const metadata: Metadata = {
  title: 'Imperial Truck & Trailer Repair & Wash | Manteca, CA',
  description:
    'Expert heavy-duty truck & trailer repair, commercial truck wash, diagnostics, and 24/7 roadside assistance in Manteca, CA. Call +1 (209) 239-8111.',
  keywords: [
    'truck repair Manteca CA',
    'trailer repair Manteca',
    'commercial truck wash Manteca',
    'heavy duty truck repair',
    'diesel truck mechanic',
    '24/7 roadside assistance',
    'semi truck repair',
    'fleet maintenance',
    'Imperial Truck Repair',
  ],
  alternates: {
    canonical: 'https://imperialtruckwashrepair.com',
  },
  openGraph: {
    title: 'Imperial Truck & Trailer Repair & Wash | Manteca, CA',
    description:
      'Expert heavy-duty truck & trailer repair, commercial truck wash, diagnostics, and 24/7 roadside assistance in Manteca, CA. Call +1 (209) 239-8111.',
    url: 'https://imperialtruckwashrepair.com',
    siteName: 'Imperial Truck & Trailer Repair and Wash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Imperial Truck & Trailer Repair and Wash Manteca CA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imperial Truck & Trailer Repair & Wash | Manteca, CA',
    description:
      'Expert heavy-duty truck & trailer repair, commercial truck wash, diagnostics, and 24/7 roadside assistance in Manteca, CA. Call +1 (209) 239-8111.',
    images: ['/logo/logo.png'],
  },
};

const dataList = Array.isArray(rawAcceleratorData)
  ? (rawAcceleratorData as Record<string, { front_loaded_aeo_direct_answer_snippet?: string; seo_keywords?: string[] }>[])
  : [rawAcceleratorData as Record<string, { front_loaded_aeo_direct_answer_snippet?: string; seo_keywords?: string[] }>];
const homeData = dataList[0]?.home;
const aeoSnippet = homeData?.front_loaded_aeo_direct_answer_snippet;

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Imperial Truck & Trailer Repair and Wash',
  description:
    aeoSnippet ||
    'Imperial Truck & Trailer Repair and Wash in Manteca, California provides 24/7 heavy-duty roadside rescue, master shop diesel diagnostics, and commercial fleet maintenance.',
  disambiguatingDescription: aeoSnippet,
  url: 'https://imperialtruckwashrepair.com',
  telephone: '+1 (209) 239-8111',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2142 W Yosemite Ave',
    addressLocality: 'Manteca',
    addressRegion: 'CA',
    postalCode: '95337',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '37.7974',
    longitude: '-121.2160',
  },
  foundingDate: '2012',
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  areaServed: [
    'Manteca',
    'San Joaquin County',
    'Northern California',
    'Highway 99',
    'I-5',
    'I-205',
  ],
  knowsAbout: homeData?.seo_keywords || [],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0b1120] relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <HeroSection />
      <AeoDirectAnswerSnippet />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <CTA />
      <MobileStickyActions />
      <FloatingEstimateButton />
    </div>
  );
}





