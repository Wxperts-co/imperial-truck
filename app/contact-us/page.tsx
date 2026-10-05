import type { Metadata } from 'next';
import { ContactUsPage } from '@/components/pages/ContactUsPage';
import rawAcceleratorData from '@/data/ai-accelerator.json';

const dataList = Array.isArray(rawAcceleratorData)
  ? (rawAcceleratorData as Record<string, { front_loaded_aeo_direct_answer_snippet?: string; seo_keywords?: string[] }>[])
  : [rawAcceleratorData as Record<string, { front_loaded_aeo_direct_answer_snippet?: string; seo_keywords?: string[] }>];
const contactData = dataList[0]?.['contact-us'];
const contactSnippet = contactData?.front_loaded_aeo_direct_answer_snippet;

export const metadata: Metadata = {
  title: 'Contact Us | Imperial Truck & Trailer Repair and Wash Manteca CA',
  description:
    contactSnippet ||
    'Fast 24/7 commercial road dispatch, shop scheduling, and fleet accounts. Located right off CA-120 / I-5 on W Yosemite Ave in Manteca, CA. Call (209) 239-8111.',
  alternates: {
    canonical: 'https://imperialtruckwashrepair.com/contact-us',
  },
};

export default function Page() {
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Imperial Truck & Trailer Repair and Wash',
    description: contactSnippet,
    url: 'https://imperialtruckwashrepair.com/contact-us',
    mainEntity: {
      '@type': 'AutoRepair',
      name: 'Imperial Truck & Trailer Repair and Wash',
      description: contactSnippet,
      telephone: '+1 (209) 239-8111',
      email: 'info@imperialtruckwashrepair.com',
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
      ],
      knowsAbout: contactData?.seo_keywords || [],
    },
  };

  return (
    <>
      {contactSnippet && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      )}
      <ContactUsPage />
    </>
  );
}
