import type { Metadata } from 'next'
import { generateHreflangLinks } from '../../../lib/hreflang-utils'
import { generateCityKeywords } from '../../../lib/seo-keywords'

export const metadata: Metadata = {
  title: "Alquiler de Coches Marruecos desde Europa - Nassoh Car Tánger",
  description: "Alquiler de coches en Marruecos para residentes europeos (Francia, España, Bélgica, Alemania). Servicio premium en Tánger, entrega en el aeropuerto Ibn Battouta y el puerto Med. Reserva online desde Europa.",
  keywords: [...generateCityKeywords('es', 'Tánger').primary, ...generateCityKeywords('es', 'Tánger').longTail].join(', ') + ", alquiler coches europa marruecos, alquilar coche marruecos desde españa, alquiler coche bélgica marruecos",
  authors: [{ name: "Nassoh Car - Alquiler Coches Marruecos Europa" }],
  creator: "Nassoh Car",
  publisher: "Nassoh Car - Car Rental Morocco Europe",
  category: "Car Rental Services",
  classification: "Business",
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
  alternates: {
    canonical: 'https://www.nassohcar.com/es/alquiler-coches-europa',
    languages: generateHreflangLinks('/es/alquiler-coches-europa'),
  },
  openGraph: {
    title: "Alquiler de Coches Marruecos desde Europa - Nassoh Car",
    description: "Servicio de alquiler de coches en Marruecos especialmente diseñado para residentes europeos. Aeropuerto y puerto de Tánger, vehículos premium, servicio 24/7.",
    url: 'https://www.nassohcar.com/es/alquiler-coches-europa',
    siteName: 'Nassoh Car - Alquiler Coches Marruecos Europa',
    images: [
      {
        url: '/og-image-europe.jpg',
        width: 1200,
        height: 630,
        alt: 'Alquiler Coches Marruecos Europa - Nassoh Car Tánger Servicio Premium',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alquiler de Coches Marruecos desde Europa - Nassoh Car",
    description: "Servicio premium de alquiler de coches en Marruecos para residentes europeos. Tánger aeropuerto y puerto, entrega gratuita, seguro incluido.",
    images: ['/twitter-image-europe.jpg'],
    creator: '@nassouhcar',
    site: '@nassouhcar',
  },
  other: {
    'geo.region': 'MA-01',
    'geo.placename': 'Tánger',
    'geo.position': '35.7595;-5.8340',
    'ICBM': '35.7595, -5.8340',
    'target-country': 'Europe',
    'target-language': 'Spanish',
  },
}

export default function EuropeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
