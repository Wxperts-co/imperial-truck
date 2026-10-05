import { ServiceDetailPage } from '@/components/pages/ServiceDetailPage';
import servicesData from '@/data/services.json';
import rawAcceleratorData from '@/data/ai-accelerator.json';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ service: string }> | { service: string };
}

export async function generateStaticParams() {
  return servicesData.services.map((s) => ({
    service: s.id,
  }));
}

function getServiceAcceleratorData(serviceSlug: string) {
  const dataList = Array.isArray(rawAcceleratorData)
    ? (rawAcceleratorData as Record<string, { front_loaded_aeo_direct_answer_snippet?: string; seo_keywords?: string[] }>[])
    : [rawAcceleratorData as Record<string, { front_loaded_aeo_direct_answer_snippet?: string; seo_keywords?: string[] }>];

  const keys = [
    `/services/${serviceSlug}`,
    `services/${serviceSlug}`,
    `services_${serviceSlug}`,
    serviceSlug,
  ];

  for (const k of keys) {
    for (const item of dataList) {
      if (item && item[k]) {
        return item[k];
      }
    }
  }
  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const service = servicesData.services.find((s) => s.id === resolvedParams.service);
  const accelData = getServiceAcceleratorData(resolvedParams.service);

  if (!service) {
    return {
      title: 'Commercial Service | Imperial Truck & Trailer Repair',
    };
  }

  const description = accelData?.front_loaded_aeo_direct_answer_snippet || service.description;

  return {
    title: `${service.name} | Imperial Truck & Trailer Repair & Wash Manteca CA`,
    description,
    alternates: {
      canonical: `https://imperialtruckwashrepair.com/services/${resolvedParams.service}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  const service = servicesData.services.find((s) => s.id === resolvedParams.service);
  const accelData = getServiceAcceleratorData(resolvedParams.service);
  const snippet = accelData?.front_loaded_aeo_direct_answer_snippet || service?.description;

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service?.name || 'Heavy-Duty Truck Service'} – Imperial Truck & Trailer Repair`,
    description: snippet,
    url: `https://imperialtruckwashrepair.com/services/${resolvedParams.service}`,
    provider: {
      '@type': 'AutoRepair',
      name: 'Imperial Truck & Trailer Repair and Wash',
      description: snippet,
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
      knowsAbout: accelData?.seo_keywords || [],
    },
  };

  return (
    <>
      {snippet && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      )}
      <ServiceDetailPage serviceSlug={resolvedParams.service} />
    </>
  );
}
