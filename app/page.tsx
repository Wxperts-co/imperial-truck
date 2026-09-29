import React from 'react';
import { ScrollStickyNavbar } from '@/components/common/ScrollStickyNavbar';
import { HeroSection } from '@/components/homepage/HeroSection';
import { AboutSection } from '@/components/homepage/AboutSection';
import { ServiceSection } from '@/components/homepage/ServiceSection';
import { WhyChooseUsSection } from '@/components/homepage/WhyChooseUsSection';
import { TestimonialSection } from '@/components/homepage/TestimonialSection';
import { CTA } from '@/components/common/CTA';
import { Footer } from '@/components/common/Footer';
import { MobileStickyActions } from '@/components/common/MobileStickyActions';
import { FloatingEstimateButton } from '@/components/common/FloatingEstimateButton';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b1120] relative">
      <ScrollStickyNavbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <CTA />
      <Footer />
      <MobileStickyActions />
      <FloatingEstimateButton />
    </main>
  );
}





