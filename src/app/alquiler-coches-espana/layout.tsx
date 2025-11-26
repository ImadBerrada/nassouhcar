import type { Metadata } from 'next'
import { generateCityKeywords } from '../../lib/seo-keywords'
import { generateHreflangLinks } from '../../lib/hreflang-utils'

export const metadata: Metadata = {
  title: 'Alquiler de Coches en Marruecos desde España | Nassoh Car Tánger',
  description: 'Servicio premium de alquiler de coches en Marruecos especialmente diseñado para residentes españoles. Reserve su vehículo en Tánger desde España con facilidad.',
  keywords: generateCityKeywords('es', 'Tangier', true).join(', '),
  alternates: {
    canonical: 'https://www.nassohcar.com/alquiler-coches-espana',
    languages: {
      'es-ES': 'https://www.nassohcar.com/alquiler-coches-espana',
      'x-default': 'https://www.nassohcar.com/alquiler-coches-espana'
    }
  },
  openGraph: {
    title: 'Alquiler de Coches en Marruecos desde España | Nassoh Car',
    description: 'Servicio premium de alquiler de coches en Marruecos especialmente diseñado para residentes españoles. Reserve su vehículo en Tánger desde España con facilidad.',
    url: 'https://nassouhcar.com/alquiler-coches-espana',
    siteName: 'Nassoh Car',
    images: [
      {
        url: '/images/car-rental-spain-morocco.jpg',
        width: 1200,
        height: 630,
        alt: 'Alquiler de coches Marruecos España'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alquiler de Coches en Marruecos desde España | Nassoh Car',
    description: 'Servicio premium de alquiler de coches en Marruecos especialmente diseñado para residentes españoles.',
    images: ['/images/car-rental-spain-morocco.jpg']
  },
  other: {
    'geo.region': 'MA-01',
    'geo.placename': 'Tánger',
    'geo.position': '35.7595;-5.8340'
  }
}

export default function AlquilerCochesEspanaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}