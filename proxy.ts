import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Next.js 16 Proxy
 * Intercepts incoming requests to manage canonical redirects, security headers,
 * and routing before requests are completed.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Normalize and redirect common shorthand or legacy routes to canonical URLs
  const redirects: Record<string, string> = {
    '/privacy': '/privacy-policy',
    '/terms': '/terms-of-service',
    '/about': '/about-us',
    '/contact': '/contact-us',
    '/estimate': '/get-an-estimate',
    '/estimates': '/get-an-estimate',
  };

  const targetRedirect = redirects[pathname.toLowerCase()];
  if (targetRedirect) {
    const url = request.nextUrl.clone();
    url.pathname = targetRedirect;
    return NextResponse.redirect(url, 301);
  }

  // 2. Pass-through with enhanced security headers
  const response = NextResponse.next();

  // Forward pathname for downstream inspection if needed
  response.headers.set('x-pathname', pathname);

  // Security Headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );

  return response;
}

// Alternatively support default export
export default proxy;

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes (/api/*)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt
     * - static image & media assets (.png, .jpg, .jpeg, .gif, .webp, .svg, .ico)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};

