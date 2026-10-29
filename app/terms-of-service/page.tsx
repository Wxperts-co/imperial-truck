import type { Metadata } from 'next';
import { TermsOfServicePage } from '@/components/pages/TermsOfServicePage';

export const metadata: Metadata = {
  title: 'Terms of Service | Imperial Truck Wash & Repair Manteca CA',
  description:
    'Read the commercial service terms, payment policies, warranties, and guidelines for Imperial Truck Wash & Repair at 2142 W Yosemite Ave, Manteca, CA 95337.',
  alternates: {
    canonical: 'https://imperialtruckwashrepair.com/terms-of-service',
  },
};

export default function Page() {
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service | Imperial Truck Wash & Repair',
    description:
      'Terms of Service for Imperial Truck Wash & Repair in Manteca, California. Covering commercial fleet servicing, payment terms, warranties, and vehicle conditions.',
    url: 'https://imperialtruckwashrepair.com/terms-of-service',
    publisher: {
      '@type': 'AutoRepair',
      name: 'Imperial Truck Wash & Repair',
      telephone: '+1 (209) 239-8111',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2142 W Yosemite Ave',
        addressLocality: 'Manteca',
        addressRegion: 'CA',
        postalCode: '95337',
        addressCountry: 'US',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <TermsOfServicePage />
    </>
  );
}

