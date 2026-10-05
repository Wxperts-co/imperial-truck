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
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Imperial Heavy-Duty Truck & Trailer Repair Services',
    description: servicesSnippet,
    url: 'https://imperialtruckwashrepair.com/services',
    provider: {
      '@type': 'AutoRepair',
      name: 'Imperial Truck & Trailer Repair and Wash',
      description: servicesSnippet,
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
      areaServed: [
        'Manteca',
        'San Joaquin County',
        'Northern California',
      ],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Commercial Truck Repair Services',
      itemListElement: (servicesData?.seo_keywords || []).map((keyword, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: keyword,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <>
      {servicesSnippet && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      )}
      <ServicesPage />
    </>
  );
}
