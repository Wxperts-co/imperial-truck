import type { Metadata } from 'next';
import { GalleryPage } from '@/components/pages/GalleryPage';
import rawAcceleratorData from '@/data/ai-accelerator.json';

const dataList = Array.isArray(rawAcceleratorData)
  ? (rawAcceleratorData as Record<string, { front_loaded_aeo_direct_answer_snippet?: string; seo_keywords?: string[] }>[])
  : [rawAcceleratorData as Record<string, { front_loaded_aeo_direct_answer_snippet?: string; seo_keywords?: string[] }>];
const galleryData = dataList[0]?.gallery;
const gallerySnippet = galleryData?.front_loaded_aeo_direct_answer_snippet;

export const metadata: Metadata = {
  title: 'Gallery | Imperial Truck & Trailer Repair and Wash Manteca CA',
  description:
    gallerySnippet ||
    'Explore our heavy-duty repair bays, computer diagnostics lab, precision engine overhauls, and high-pressure rig wash stations in Manteca, CA.',
  alternates: {
    canonical: 'https://imperialtruckwashrepair.com/gallery',
  },
};

export default function Page() {
  return <GalleryPage />;
}
