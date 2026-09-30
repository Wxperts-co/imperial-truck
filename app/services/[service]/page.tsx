import { ServiceDetailPage } from '@/components/pages/ServiceDetailPage';
import servicesData from '@/data/services.json';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ service: string }> | { service: string };
}

export async function generateStaticParams() {
  return servicesData.services.map((s) => ({
    service: s.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const service = servicesData.services.find((s) => s.id === resolvedParams.service);
  if (!service) {
    return {
      title: 'Commercial Service | Imperial Truck & Trailer Repair',
    };
  }
  return {
    title: `${service.name} | Imperial Truck & Trailer Repair`,
    description: service.description,
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  return <ServiceDetailPage serviceSlug={resolvedParams.service} />;
}
