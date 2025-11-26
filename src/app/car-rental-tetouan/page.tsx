import type { Metadata } from 'next'
// SEO keywords removed - not used in this component
import { generateHreflangLinks } from '../../lib/hreflang-utils'
import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'

// Generate SEO metadata for Tetouan car rental page
export const metadata: Metadata = {
  title: 'Location Voiture Tétouan | Nassoh Car - Meilleurs Prix Rif & Méditerranée',
  description: 'Location de voiture à Tétouan avec Nassoh Car. Explorez le Rif, Chefchaouen, les plages méditerranéennes. Prise en charge aéroport Tétouan gratuite!',
  keywords: [
    'location voiture Tétouan',
    'location de voiture Tétouan',
    'agence location voiture Tétouan',
    'location voiture aéroport Tétouan',
    'location voiture Chefchaouen',
    'car rental Tetouan',
    'car rental Tetouan airport',
    'Tetouan car hire',
    'تأجير السيارات تطوان',
    'تأجير السيارات مطار تطوان',
    'alquiler coches Tetuán',
    'alquiler coches aeropuerto Tetuán',
    'location voiture Rif',
    'location voiture Martil'
  ].join(', '),
  openGraph: {
    title: 'Location Voiture Tétouan | Nassoh Car - Explorez le Rif',
    description: 'Location de voiture à Tétouan avec Nassoh Car. Explorez le Rif, Chefchaouen, les plages méditerranéennes.',
    url: 'https://www.nassohcar.com/car-rental-tetouan',
    images: [{
      url: '/cars/DACIA DUSTER.avif',
      width: 1200,
      height: 630,
      alt: 'Location voiture Tétouan - Nassoh Car'
    }]
  },
  alternates: {
    canonical: 'https://www.nassohcar.com/car-rental-tetouan',
    languages: generateHreflangLinks('/car-rental-tetouan')
  }
}

export default function CarRentalTetouanPage() {
  redirect('/location-voiture-tetouan')
}