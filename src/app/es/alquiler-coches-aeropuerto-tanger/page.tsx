import { Metadata } from 'next'
import ClientPage from './ClientPage'

export const metadata: Metadata = {
  title: 'Alquiler de Coches Aeropuerto Tánger (Ibn Battouta) | Nassoh Car',
  description: 'Alquiler de coches en el Aeropuerto de Tánger Ibn Battouta. Recogida inmediata, servicio 24/7 y precios económicos. Reserve su coche nada más aterrizar.',
  keywords: 'alquiler coches aeropuerto tanger, rent a car tangier airport, coche alquiler ibn battouta, nassoh car aeropuerto',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/alquiler-coches-aeropuerto-tanger',
  },
}

export default function Page() {
  return <ClientPage />
}
