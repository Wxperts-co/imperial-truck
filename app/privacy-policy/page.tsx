import type { Metadata } from 'next';
import { PrivacyPolicyPage } from '@/components/pages/PrivacyPolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Imperial Truck Wash & Repair Manteca CA',
  description:
    'Read the Privacy Policy for Imperial Truck Wash & Repair. Learn how we collect, safeguard, and use your information at 2142 W Yosemite Ave, Manteca, CA 95337.',
  alternates: {
    canonical: 'https://imperialtruckwashrepair.com/privacy-policy',
  },
};

export default function Page() {
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy | Imperial Truck Wash & Repair',
    description:
      'Privacy Policy for Imperial Truck Wash & Repair in Manteca, California. Outlining data practices, cookies, security, and customer privacy.',
    url: 'https://imperialtruckwashrepair.com/privacy-policy',
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
      <PrivacyPolicyPage />
    </>
  );
}

