import type { Metadata } from "next"
import { seoKeywords } from '../lib/seo-keywords'
import { generateHreflangLinks } from '../lib/hreflang-utils'

// Update seoKeywords type to include new European languages
type SeoKeywordsType = {
  fr: { primary: string[]; secondary: string[]; local: string[] };
  en: { primary: string[]; secondary: string[]; local: string[] };
  ar: { primary: string[]; secondary: string[]; local: string[] };
  es: { primary: string[]; secondary: string[]; local: string[] };
  nl: { primary: string[]; secondary: string[]; local: string[] };
  de: { primary: string[]; secondary: string[]; local: string[] };
  it: { primary: string[]; secondary: string[]; local: string[] };
}

// Generate comprehensive keywords from our multilingual strategy
const generateKeywords = () => {
  const allKeywords: string[] = []
  
  // French keywords - optimized for Tangier
  allKeywords.push(...(seoKeywords as SeoKeywordsType).fr.primary)
  allKeywords.push(...(seoKeywords as SeoKeywordsType).fr.local)
  allKeywords.push(
    'location de voiture économique Tanger',
    'location de voiture aéroport Tanger Ibn Battouta',
    'location de voiture port Tanger Med',
    'location de voiture centre-ville Tanger',
    'meilleure location de voiture Tanger',
    'voiture économique Tanger',
    'location auto pas cher Tanger',
    'réservation voiture Tanger',
    'livraison gratuite aéroport Tanger',
    'service 24h/24 Tanger'
  )
  
  // English keywords - optimized for Tangier
  allKeywords.push(...(seoKeywords as SeoKeywordsType).en.primary)
  allKeywords.push(...(seoKeywords as SeoKeywordsType).en.local)
  allKeywords.push(
    'cheap car rental Tangier',
    'airport car rental Tangier Ibn Battouta',
    'port car rental Tanger Med',
    'city center car rental Tangier',
    'best car rental Tangier',
    'affordable car rental Tangier',
    'affordable car hire Tangier',
    'car booking Tangier',
    'free airport delivery Tangier',
    '24/7 service Tangier'
  )
  
  // Arabic keywords - optimized for Tangier
  allKeywords.push(...(seoKeywords as SeoKeywordsType).ar.primary)
  allKeywords.push(...(seoKeywords as SeoKeywordsType).ar.local)
  allKeywords.push(
    'تأجير سيارات رخيصة طنجة',
    'تأجير سيارات مطار طنجة ابن بطوطة',
    'تأجير سيارات ميناء طنجة المتوسط',
    'تأجير سيارات وسط مدينة طنجة',
    'أفضل تأجير سيارات طنجة'
  )
  
  // Spanish keywords - optimized for Tangier
  allKeywords.push(...(seoKeywords as SeoKeywordsType).es.primary)
  allKeywords.push(...(seoKeywords as SeoKeywordsType).es.local)
  allKeywords.push(
    'alquiler de coches barato Tánger',
    'alquiler de coches aeropuerto Tánger Ibn Battouta',
    'alquiler de coches puerto Tánger Med',
    'mejor alquiler de coches Tánger'
  )
  
  // Dutch keywords - optimized for Tangier
  allKeywords.push(...(seoKeywords as SeoKeywordsType).nl.primary)
  allKeywords.push(...(seoKeywords as SeoKeywordsType).nl.local)
  allKeywords.push(
    'goedkope autoverhuur Tanger',
    'luchthaven autoverhuur Tanger Ibn Battouta',
    'haven autoverhuur Tanger Med',
    'stadscentrum autoverhuur Tanger',
    'beste autoverhuur Tanger',
    'betaalbare autoverhuur Tanger',
    'betaalbare autoverhuur Tanger',
    'auto reservering Tanger',
    'gratis luchthaven bezorging Tanger',
    '24/7 service Tanger'
  )
  
  // German keywords - optimized for Tangier
  allKeywords.push(...(seoKeywords as SeoKeywordsType).de.primary)
  allKeywords.push(...(seoKeywords as SeoKeywordsType).de.local)
  allKeywords.push(
    'günstige Autovermietung Tanger',
    'Flughafen Autovermietung Tanger Ibn Battouta',
    'Hafen Autovermietung Tanger Med',
    'Stadtzentrum Autovermietung Tanger',
    'beste Autovermietung Tanger',
    'Luxus Autovermietung Tanger',
    'erschwingliche Autovermietung Tanger',
    'Auto Buchung Tanger',
    'kostenlose Flughafen Lieferung Tanger',
    '24/7 Service Tanger'
  )
  
  // Italian keywords - optimized for Tangier
  allKeywords.push(...(seoKeywords as SeoKeywordsType).it.primary)
  allKeywords.push(...(seoKeywords as SeoKeywordsType).it.local)
  allKeywords.push(
    'noleggio auto economico Tangeri',
    'aeroporto noleggio auto Tangeri Ibn Battouta',
    'porto noleggio auto Tangeri Med',
    'centro città noleggio auto Tangeri',
    'miglior noleggio auto Tangeri',
    'noleggio auto di lusso Tangeri',
    'noleggio auto conveniente Tangeri',
    'prenotazione auto Tangeri',
    'consegna gratuita aeroporto Tangeri',
    'servizio 24/7 Tangeri'
  )
  
  return allKeywords.join(', ')
}

export const metadata: Metadata = {
  title: "Location Voiture Tanger Aéroport – Nassoh Car",
  description: "Location voiture à Tanger Ibn Battouta & Port Med. Voitures économiques dès 200DH/jour, service 24h/24, livraison gratuite, assurance incluse. Réservez en ligne.",
  keywords: generateKeywords(),
  authors: [{ name: "Nassoh Car - Location Voiture Tanger" }],
  creator: "Nassoh Car",
  publisher: "Nassoh Car - Car Rental Tangier Morocco",
  category: "Car Rental Services",
  classification: "Business",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.nassohcar.com'),
  alternates: {
    canonical: 'https://www.nassohcar.com/',
    languages: generateHreflangLinks('/'),
  },
  openGraph: {
    title: "Location Voiture Tanger Aéroport – Nassoh Car",
    description: "Location voiture à Tanger Ibn Battouta & Port Med. Voitures économiques dès 200DH/jour, service 24h/24, livraison gratuite, assurance incluse.",
    url: 'https://www.nassohcar.com',
    siteName: 'Nassoh Car - Location Voiture Tanger',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nassoh Car - Location de Voiture Tanger Aéroport Ibn Battouta, Port Med - Car Rental Service Morocco',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
    alternateLocale: ['en_US', 'ar_MA', 'es_ES', 'nl_NL', 'de_DE', 'it_IT'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Location Voiture Tanger Aéroport – Nassoh Car",
    description: "Location voiture Tanger aéroport & port. Économique dès 200DH/jour, 24/7, livraison gratuite, assurance incluse.",
    images: ['/twitter-image.jpg'],
    creator: '@nassouhcar',
    site: '@nassouhcar',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// 1. Add 'es' to the type and object if you want to support Spanish:
// const keywords = {
//   fr: { primary: [], secondary: [] },
//   en: { primary: [], secondary: [] },
//   ar: { primary: [], secondary: [] },
//   es: { primary: [], secondary: [] } // Added Spanish support
// };

// 2. Update all calls to getSeoKeywords to provide the required arguments.
// Example: getSeoKeywords(keyword, lang, city?)
// Replace the following (incorrect):
// getSeoKeywords('car');
// getSeoKeywords('car', 'en');
// getSeoKeywords('car', 'en', 'Paris');

// With the correct number of arguments:
