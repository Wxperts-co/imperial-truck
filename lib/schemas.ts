import rawAcceleratorData from '@/data/ai-accelerator.json';
import servicesData from '@/data/services.json';

// Helper to extract front-loaded AEO snippets and SEO keywords
const acceleratorRecord = Array.isArray(rawAcceleratorData)
  ? (rawAcceleratorData[0] as Record<string, { front_loaded_aeo_direct_answer_snippet?: string; seo_keywords?: string[] }>)
  : (rawAcceleratorData as Record<string, { front_loaded_aeo_direct_answer_snippet?: string; seo_keywords?: string[] }>);

export const BASE_URL = 'https://imperialtruckwashrepair.com';

export const BASE_BUSINESS_DETAILS = {
  '@id': `${BASE_URL}/#localbusiness`,
  name: 'Imperial Truck & Trailer Repair and Wash',
  alternateName: 'Imperial Truck Wash & Repair',
  legalName: 'Imperial Truck & Trailer Repair and Wash',
  url: `${BASE_URL}/`,
  logo: `${BASE_URL}/logo/logo.png`,
  image: `${BASE_URL}/logo/logo.png`,
  telephone: '+1-209-239-8111',
  email: 'info@imperialtruckwashrepair.com',
  foundingDate: '2012',
  priceRange: '$$',
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
    latitude: 37.7974,
    longitude: -121.216,
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
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '17:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Manteca' },
    { '@type': 'AdministrativeArea', name: 'San Joaquin County' },
    { '@type': 'AdministrativeArea', name: 'Northern California' },
    { '@type': 'Place', name: 'Highway 99' },
    { '@type': 'Place', name: 'Interstate 5' },
    { '@type': 'Place', name: 'Interstate 205' },
  ],
  knowsAbout: [
    'Diesel Engine Repair',
    'Diesel Engine Diagnostics',
    'Commercial Truck Repair',
    'Heavy-Duty Trailer Repair',
    'Computer Diagnostics and ECM Scanning',
    'Brakes and Pneumatic Air Systems',
    'Commercial Tires and Wheel Mounting',
    'Wheel Seals, Shocks and Hub Assemblies',
    'Transmissions and Heavy-Duty Clutches',
    'King Pins, Bushings and Steering',
    'Electrical Systems and Alternators',
    'Air Conditioning and Cabin Climate Control',
    'Commercial Truck and RV Washing',
    'Heavy-Duty Roadside Assistance',
    'Commercial Fleet Maintenance',
    'Semi-Truck Parts',
  ],
};

export const BUSINESS_INFO = {
  '@type': ['AutomotiveBusiness', 'AutoRepair'] as const,
  ...BASE_BUSINESS_DETAILS,
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: `${BASE_URL}/`,
  name: 'Imperial Truck & Trailer Repair and Wash',
  description:
    'Commercial diesel repair, heavy duty truck and trailer wash, computer diagnostics, and 24/7 mobile recovery in Manteca, CA.',
  publisher: {
    '@id': `${BASE_URL}/#localbusiness`,
  },
};

// ============================================================================
// 1. HOME PAGE SCHEMA (/)
// ============================================================================
export const homePageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    websiteSchema,
    {
      '@type': ['AutomotiveBusiness', 'AutoRepair'] as const,
      ...BASE_BUSINESS_DETAILS,
      description:
        'Imperial Truck & Trailer Repair and Wash in Manteca, California provides heavy-duty truck and trailer repair, diesel engine diagnostics, commercial fleet maintenance, commercial truck and RV washing, and 24/7 heavy-duty roadside assistance. Established in 2012, the facility offers a 10-bay repair capacity and commercial truck repair services.',
      disambiguatingDescription:
        'Heavy-duty truck and trailer repair, diesel diagnostics, commercial fleet maintenance, truck washing, and emergency roadside assistance in Manteca, California.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Truck Repair, Roadside Assistance and Wash Services',
        itemListElement: servicesData.services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
            url: `${BASE_URL}/services/${service.id}`,
          },
        })),
      },
    },
  ],
};

// ============================================================================
// 2. ABOUT US PAGE SCHEMA (/about-us)
// ============================================================================
const aboutData = acceleratorRecord['about-us'];
const aboutSnippet = aboutData?.front_loaded_aeo_direct_answer_snippet ||
  'Commercial Diesel Repair, Heavy Duty Truck & Trailer Wash, Computer Diagnostics, and 24/7 Mobile Recovery at 2142 W Yosemite Ave, Manteca, CA 95337.';

export const aboutUsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${BASE_URL}/about-us#webpage`,
  name: 'About Imperial Truck & Trailer Repair and Wash',
  description: aboutSnippet,
  url: `${BASE_URL}/about-us`,
  mainEntity: {
    '@type': 'AutoRepair',
    ...BASE_BUSINESS_DETAILS,
    description: aboutSnippet,
    knowsAbout: aboutData?.seo_keywords || BASE_BUSINESS_DETAILS.knowsAbout,
  },
};

// ============================================================================
// 3. SERVICES INDEX PAGE SCHEMA (/services)
// ============================================================================
const servicesDataAccel = acceleratorRecord['services'];
const servicesSnippet = servicesDataAccel?.front_loaded_aeo_direct_answer_snippet ||
  "Northern California's master 10-bay heavy-duty diesel truck repair, trailer maintenance, computer diagnostics, commercial tires, and high-pressure washout depot in Manteca, CA.";

export const servicesIndexPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/services#service`,
  name: 'Imperial Heavy-Duty Truck & Trailer Repair Services',
  description: servicesSnippet,
  url: `${BASE_URL}/services`,
  provider: {
    '@type': 'AutoRepair',
    ...BASE_BUSINESS_DETAILS,
    description: servicesSnippet,
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Commercial Truck Repair Services',
    itemListElement: (servicesDataAccel?.seo_keywords || servicesData.services.map((s) => s.name)).map((keyword) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: keyword,
      },
    })),
  },
};

// ============================================================================
// 4. DYNAMIC SERVICE DETAIL PAGES (/services/[service])
// ============================================================================
export function getServiceDetailSchema(serviceSlug: string) {
  const service = servicesData.services.find((s) => s.id === serviceSlug);

  const keys = [
    `/services/${serviceSlug}`,
    `services/${serviceSlug}`,
    `services_${serviceSlug}`,
    serviceSlug,
  ];

  let accelData: { front_loaded_aeo_direct_answer_snippet?: string; seo_keywords?: string[] } | null = null;
  for (const k of keys) {
    if (acceleratorRecord[k]) {
      accelData = acceleratorRecord[k];
      break;
    }
  }

  const snippet = accelData?.front_loaded_aeo_direct_answer_snippet || service?.description || 'Commercial Truck and Trailer Repair Services';
  const serviceName = service?.name || 'Heavy-Duty Truck Service';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/services/${serviceSlug}#service`,
    name: `${serviceName} – Imperial Truck & Trailer Repair`,
    description: snippet,
    url: `${BASE_URL}/services/${serviceSlug}`,
    serviceType: serviceName,
    provider: {
      '@type': 'AutoRepair',
      ...BASE_BUSINESS_DETAILS,
      description: snippet,
    },
    areaServed: BASE_BUSINESS_DETAILS.areaServed,
  };
}

// ============================================================================
// 5. GALLERY PAGE SCHEMA (/gallery)
// ============================================================================
const galleryData = acceleratorRecord['gallery'];
const gallerySnippet = galleryData?.front_loaded_aeo_direct_answer_snippet ||
  'Explore our heavy-duty repair bays, computer diagnostics lab, precision engine overhauls, and high-pressure rig wash stations in Manteca, CA.';

export const galleryPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  '@id': `${BASE_URL}/gallery#gallery`,
  name: 'Imperial Truck & Trailer Facility Gallery',
  description: gallerySnippet,
  url: `${BASE_URL}/gallery`,
  publisher: {
    '@type': 'AutoRepair',
    ...BASE_BUSINESS_DETAILS,
    description: gallerySnippet,
  },
};

// ============================================================================
// 6. GET AN ESTIMATE PAGE SCHEMA (/get-an-estimate)
// ============================================================================
const estimateData = acceleratorRecord['get-an-estimate'];
const estimateSnippet = estimateData?.front_loaded_aeo_direct_answer_snippet ||
  'Request a transparent, itemized estimate for commercial truck diesel repair, air brakes, transmission overhauls, trailer repairs, or mobile roadside dispatch in Manteca, CA.';

export const estimatePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/get-an-estimate#webpage`,
  name: 'Get An Estimate – Imperial Truck & Trailer Repair',
  description: estimateSnippet,
  url: `${BASE_URL}/get-an-estimate`,
  mainEntity: {
    '@type': 'AutoRepair',
    ...BASE_BUSINESS_DETAILS,
    description: estimateSnippet,
    knowsAbout: estimateData?.seo_keywords || BASE_BUSINESS_DETAILS.knowsAbout,
  },
};

// ============================================================================
// 7. CONTACT US PAGE SCHEMA (/contact-us)
// ============================================================================
const contactData = acceleratorRecord['contact-us'];
const contactSnippet = contactData?.front_loaded_aeo_direct_answer_snippet ||
  'Fast 24/7 commercial road dispatch, shop scheduling, and fleet accounts. Located right off CA-120 / I-5 on W Yosemite Ave in Manteca, CA. Call (209) 239-8111.';

export const contactUsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${BASE_URL}/contact-us#webpage`,
  name: 'Contact Imperial Truck & Trailer Repair and Wash',
  description: contactSnippet,
  url: `${BASE_URL}/contact-us`,
  mainEntity: {
    '@type': 'AutoRepair',
    ...BASE_BUSINESS_DETAILS,
    description: contactSnippet,
    knowsAbout: contactData?.seo_keywords || BASE_BUSINESS_DETAILS.knowsAbout,
  },
};

// ============================================================================
// 8. PRIVACY POLICY PAGE SCHEMA (/privacy-policy)
// ============================================================================
export const privacyPolicyPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/privacy-policy#webpage`,
  name: 'Privacy Policy | Imperial Truck Wash & Repair',
  description:
    'Privacy Policy for Imperial Truck Wash & Repair in Manteca, California. Outlining data practices, cookies, security, and customer privacy.',
  url: `${BASE_URL}/privacy-policy`,
  publisher: {
    '@type': 'AutoRepair',
    ...BASE_BUSINESS_DETAILS,
  },
};

// ============================================================================
// 9. TERMS OF SERVICE PAGE SCHEMA (/terms-of-service)
// ============================================================================
export const termsOfServicePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/terms-of-service#webpage`,
  name: 'Terms of Service | Imperial Truck Wash & Repair',
  description:
    'Terms of Service for Imperial Truck Wash & Repair in Manteca, California. Covering commercial fleet servicing, payment terms, warranties, and vehicle conditions.',
  url: `${BASE_URL}/terms-of-service`,
  publisher: {
    '@type': 'AutoRepair',
    ...BASE_BUSINESS_DETAILS,
  },
};

// ============================================================================
// ORGANIZED PAGE-BY-PAGE SCHEMA DICTIONARY
// ============================================================================
export const pageSchemas = {
  home: homePageSchema,
  aboutUs: aboutUsPageSchema,
  services: servicesIndexPageSchema,
  gallery: galleryPageSchema,
  getAnEstimate: estimatePageSchema,
  contactUs: contactUsPageSchema,
  privacyPolicy: privacyPolicyPageSchema,
  termsOfService: termsOfServicePageSchema,
};

// ============================================================================
// ROUTE-TO-SCHEMA RESOLVER
// ============================================================================
export function getPageSchema(pathname: string | null | undefined): Record<string, unknown> {
  if (!pathname || pathname === '/') {
    return homePageSchema;
  }

  // Normalize pathname: remove trailing slash and convert to lowercase
  const cleanPath = pathname.replace(/\/$/, '').toLowerCase();

  switch (cleanPath) {
    case '':
    case '/':
      return homePageSchema;
    case '/about-us':
      return aboutUsPageSchema;
    case '/services':
      return servicesIndexPageSchema;
    case '/gallery':
      return galleryPageSchema;
    case '/get-an-estimate':
      return estimatePageSchema;
    case '/contact-us':
      return contactUsPageSchema;
    case '/privacy-policy':
      return privacyPolicyPageSchema;
    case '/terms-of-service':
      return termsOfServicePageSchema;
    default:
      if (cleanPath.startsWith('/services/')) {
        const slug = cleanPath.replace('/services/', '');
        return getServiceDetailSchema(slug);
      }
      return {
        '@context': 'https://schema.org',
        '@type': 'AutoRepair',
        ...BASE_BUSINESS_DETAILS,
      };
  }
}
