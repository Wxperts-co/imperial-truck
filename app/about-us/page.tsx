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
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Imperial Truck & Trailer Repair and Wash',
    description: aboutSnippet,
    url: 'https://imperialtruckwashrepair.com/about-us',
    mainEntity: {
      '@type': 'AutoRepair',
      name: 'Imperial Truck & Trailer Repair and Wash',
      description: aboutSnippet,
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
      areaServed: [
        'Manteca',
        'San Joaquin County',
        'Northern California',
      ],
      knowsAbout: aboutData?.seo_keywords || [],
    },
  };

  return (
    <>
      {aboutSnippet && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      )}
      <AboutUsPage />
    </>
  );
}
