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
  return <PrivacyPolicyPage />;
}
