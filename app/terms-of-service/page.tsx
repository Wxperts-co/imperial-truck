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
  return <TermsOfServicePage />;
}
