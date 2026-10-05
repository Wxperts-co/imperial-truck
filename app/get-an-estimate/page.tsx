import type { Metadata } from 'next';
import { GetAnEstimatePage } from '@/components/pages/GetAnEstimatePage';
import rawAcceleratorData from '@/data/ai-accelerator.json';

const dataList = Array.isArray(rawAcceleratorData)
  ? (rawAcceleratorData as Record<string, { front_loaded_aeo_direct_answer_snippet?: string; seo_keywords?: string[] }>[])
  : [rawAcceleratorData as Record<string, { front_loaded_aeo_direct_answer_snippet?: string; seo_keywords?: string[] }>];
const estimateData = dataList[0]?.['get-an-estimate'];
const estimateSnippet = estimateData?.front_loaded_aeo_direct_answer_snippet;

export const metadata: Metadata = {
  title: 'Get An Estimate | Imperial Truck & Trailer Repair',
  description:
    estimateSnippet ||
    'Request a transparent, itemized estimate for commercial truck diesel repair, air brakes, transmission overhauls, trailer repairs, or mobile roadside dispatch in Manteca, CA.',
  alternates: {
    canonical: 'https://imperialtruckwashrepair.com/get-an-estimate',
  },
};

export default function Page() {
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Get An Estimate – Imperial Truck & Trailer Repair',
    description: estimateSnippet,
    url: 'https://imperialtruckwashrepair.com/get-an-estimate',
    mainEntity: {
      '@type': 'AutoRepair',
      name: 'Imperial Truck & Trailer Repair',
      description: estimateSnippet,
      telephone: '+1 (209) 239-8111',
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
        latitude: '37.7974',
        longitude: '-121.2160',
      },
      areaServed: [
        'Manteca',
        'San Joaquin County',
        'Northern California',
      ],
      knowsAbout: estimateData?.seo_keywords || [],
    },
  };

  return (
    <>
      {estimateSnippet && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      )}
      <GetAnEstimatePage />
    </>
  );
}
