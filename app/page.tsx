import type { Metadata } from 'next';
import React from 'react';
import { HeroSection } from '@/components/homepage/HeroSection';
import { AboutSection } from '@/components/homepage/AboutSection';
import { ServiceSection } from '@/components/homepage/ServiceSection';
import { WhyChooseUsSection } from '@/components/homepage/WhyChooseUsSection';
import { TestimonialSection } from '@/components/homepage/TestimonialSection';
import { CTA } from '@/components/common/CTA';
import { MobileStickyActions } from '@/components/common/MobileStickyActions';
import { FloatingEstimateButton } from '@/components/common/FloatingEstimateButton';

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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b1120] relative">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <CTA />
      <MobileStickyActions />
      <FloatingEstimateButton />
    </main>
  );
}





