import type { Metadata } from 'next'
import { generateCityKeywords } from '../../lib/seo-keywords'

export const metadata: Metadata = {
  title: 'Noleggio Auto Marocco dall\'Italia | Nassoh Car Tangeri',
  description: 'Servizio premium di noleggio auto in Marocco appositamente progettato per i residenti italiani. Prenota il tuo veicolo a Tangeri dall\'Italia con facilità.',
  keywords: generateCityKeywords('it', 'Tangier', true).join(', '),
  alternates: {
    canonical: 'https://www.nassohcar.com/noleggio-auto-italia',
    languages: {
      'it-IT': 'https://www.nassohcar.com/noleggio-auto-italia',
      'x-default': 'https://www.nassohcar.com/noleggio-auto-italia'
    }
  },
  openGraph: {
    title: 'Noleggio Auto in Marocco dall\'Italia | Nassoh Car',
    description: 'Servizio premium di noleggio auto in Marocco appositamente progettato per i residenti italiani. Prenota il tuo veicolo a Tangeri dall\'Italia con facilità.',
    url: 'https://nassouhcar.com/noleggio-auto-italia',
    siteName: 'Nassoh Car',
    images: [
      {
        url: '/images/car-rental-italy-morocco.jpg',
        width: 1200,
        height: 630,
        alt: 'Noleggio auto Marocco Italia'
      }
    ],
    locale: 'it_IT',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noleggio Auto in Marocco dall\'Italia | Nassoh Car',
    description: 'Servizio premium di noleggio auto in Marocco appositamente progettato per i residenti italiani.',
    images: ['/images/car-rental-italy-morocco.jpg']
  },
  other: {
    'geo.region': 'MA-01',
    'geo.placename': 'Tangeri',
    'geo.position': '35.7595;-5.8340'
  }
}

export default function NoleggioAutoItaliaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}