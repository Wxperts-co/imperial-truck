import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/homepage/HeroSection';
import { AeoDirectAnswerSnippet } from '@/components/homepage/AeoDirectAnswerSnippet';

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

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': ['AutomotiveBusiness', 'AutoRepair'],
  '@id': 'https://www.imperialtruckwashrepair.com/#localbusiness',
  name: 'Imperial Truck & Trailer Repair and Wash',
  url: 'https://www.imperialtruckwashrepair.com/',
  description:
    'Imperial Truck & Trailer Repair and Wash in Manteca, California provides heavy-duty truck and trailer repair, diesel engine diagnostics, commercial fleet maintenance, commercial truck and RV washing, and 24/7 heavy-duty roadside assistance. Established in 2012, the facility offers a 10-bay repair capacity and commercial truck repair services.',
  disambiguatingDescription:
    'Heavy-duty truck and trailer repair, diesel diagnostics, commercial fleet maintenance, truck washing, and emergency roadside assistance in Manteca, California.',
  logo: 'https://www.imperialtruckwashrepair.com/assets/logo.png',
  image: 'https://www.imperialtruckwashrepair.com/assets/facility-exterior.jpg',
  telephone: '+1-209-239-8111',
  foundingDate: '2012',
  priceRange: '$$',
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
    latitude: 37.7974,
    longitude: -121.216,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '17:00',
    },
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Manteca',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'San Joaquin County',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Northern California',
    },
    {
      '@type': 'Place',
      name: 'Highway 99',
    },
    {
      '@type': 'Place',
      name: 'Interstate 5',
    },
    {
      '@type': 'Place',
      name: 'Interstate 205',
    },
  ],
  knowsAbout: [
    'Diesel Engine Repair',
    'Diesel Engine Diagnostics',
    'Commercial Truck Repair',
    'Heavy-Duty Trailer Repair',
    'Computer Diagnostics and ECM Scanning',
    'Brakes and Pneumatic Air Systems',
    'Commercial Tires and Wheel Mounting',
    'Wheel Seals, Shocks and Hub Assemblies',
    'Transmissions and Heavy-Duty Clutches',
    'King Pins, Bushings and Steering',
    'Electrical Systems and Alternators',
    'Air Conditioning and Cabin Climate Control',
    'Commercial Truck and RV Washing',
    'Heavy-Duty Roadside Assistance',
    'Commercial Fleet Maintenance',
    'Semi-Truck Parts',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Truck Repair, Roadside Assistance and Wash Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Diesel Engine Repair and Overhauls',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Computer Diagnostics and ECM Scanning',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Brakes and Pneumatic Air Systems',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Tires and Wheel Mounting',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wheel Seals, Shocks and Hub Assemblies',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Transmissions and Heavy-Duty Clutch Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'King Pins, Bushings and Steering Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Electrical Systems and Alternators',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Air Conditioning and Cabin Climate Control',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Eco-Friendly Commercial Truck and RV Wash',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 Mobile Emergency Roadside Assistance and Recovery',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Fleet Maintenance',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Heavy-Duty Trailer Repair',
        },
      },
    ],
  },
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





