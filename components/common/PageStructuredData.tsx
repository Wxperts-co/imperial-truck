'use client';

import { usePathname } from 'next/navigation';
import { getPageSchema } from '@/lib/schemas';

/**
 * Dynamically resolves and renders the appropriate JSON-LD structured data schema
 * into the document <head> based on the current page route.
 * Works seamlessly across static generation (SSG) and client transitions.
 */
export function PageStructuredData() {
  const pathname = usePathname();
  const schema = getPageSchema(pathname);

  if (!schema) {
    return null;
  }

  return (
    <script
      id="page-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

