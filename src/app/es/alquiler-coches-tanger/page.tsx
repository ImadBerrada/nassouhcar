import type { Metadata } from 'next'
import CarRentalTangierClient from './ClientPage'

export const metadata: Metadata = {
  title: 'Alquiler de Coches en Tánger | Nassoh Car - Aeropuerto, Puerto y Centro',
  description: 'Alquiler de coches en Tánger con Nassoh Car. Servicio 24/7 en el Aeropuerto Ibn Battouta, Puerto Tanger Med y centro de la ciudad. Coches económicos y premium.',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/alquiler-coches-tanger',
  },
  keywords: 'alquiler coches tanger, rent car tangier, alquiler coche aeropuerto tanger, alquiler coche puerto tanger med, nassoh car tanger'
}

export default function CarRentalTangierPage() {
  return <CarRentalTangierClient />
}
