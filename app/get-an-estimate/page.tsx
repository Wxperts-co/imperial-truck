import { GetAnEstimatePage } from '@/components/pages/GetAnEstimatePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get An Estimate | Imperial Truck & Trailer Repair',
  description: 'Request a transparent, itemized estimate for commercial truck diesel repair, air brakes, transmission overhauls, trailer repairs, or mobile roadside dispatch in Manteca, CA.',
};

export default function Page() {
  return <GetAnEstimatePage />;
}
