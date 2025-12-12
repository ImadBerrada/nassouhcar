import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const enToFrMap: Record<string, string> = {
  '/en': '/fr',
  '/en/fleet': '/fleet',
  '/en/economy-cars': '/economy-cars',
  '/en/contact': '/contact',
  '/en/faq': '/faq',
  '/en/privacy': '/privacy',
  '/en/terms': '/terms',
  '/en/blog': '/blog',
  '/en/guides': '/guides',
  '/en/car-rental-tangier': '/location-voiture-tanger',
  '/en/car-rental-tetouan': '/location-voiture-tetouan',
  '/en/car-rental-tangier-airport': '/location-voiture-tanger-aeroport',
  '/en/car-rental-tangier-port': '/location-voiture-tanger-port',
  '/en/car-rental-tangier-port-med': '/location-voiture-tanger-port-med',
  '/en/guides/tangier-complete-guide': '/guides/guide-tanger-complet',
  '/en/guides/driving-in-morocco': '/guides/conduire-maroc-guide',
  '/en/guides/car-rental-tips-morocco': '/guides/conseils-location-voiture',
  '/en/guides/morocco-travel-budget': '/guides/budget-voyage-maroc',
  '/en/guides/hidden-attractions-morocco': '/guides/attractions-cachees-maroc',
  '/en/guides/morocco-itineraries': '/guides/itineraires-maroc',
  '/en/airport-car-rental': '/airport-car-rental',
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

  // Do not rewrite English paths; serve pages under /en directly

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/((?!_next|api|admin|static|images|nassouhe\.png).*)',
  ],
}
