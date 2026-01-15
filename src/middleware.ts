import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'es', 'fr'];
const defaultLocale = 'fr';

function getLocale(request: NextRequest) {
  // 1. Check if a locale cookie is set
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (localeCookie && locales.includes(localeCookie)) {
    return localeCookie;
  }

  // 2. Check Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language');
  if (acceptLanguage) {
    // Basic parsing: "en-US,en;q=0.9,es;q=0.8" -> ["en", "es"]
    const preferredLocales = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().split('-')[0].toLowerCase());
    
    for (const lang of preferredLocales) {
      if (locales.includes(lang)) {
        return lang;
      }
    }
  }

  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Handle legacy French slug by rewriting to root equivalents
  if (pathname === '/fr') {
    const url = req.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url, 308)
  }

  if (pathname.startsWith('/fr/')) {
    const url = req.nextUrl.clone()
    url.pathname = pathname.replace(/^\/fr/, '')
    return NextResponse.redirect(url, 308)
  }

  // Language Detection and Redirection for root path "/"
  // We only redirect if we are exactly at "/" and the detected language is not the default (fr)
  if (pathname === '/') {
    const locale = getLocale(req);
    if (locale && locale !== 'fr') {
      const url = req.nextUrl.clone();
      url.pathname = `/${locale}`;
      return NextResponse.redirect(url, 307); // 307 Temporary Redirect
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/((?!_next|api|admin|static|images|nassouhe\\.png).*)',
  ],
}
