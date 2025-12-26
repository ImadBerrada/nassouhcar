import { Metadata } from 'next'
import ClientPage from './ClientPage'

export const metadata: Metadata = {
  title: 'Alquiler de Coches Tánger Centro | Nassoh Car',
  description: 'Alquiler de coches en el centro de Tánger. Recogida fácil cerca de la medina y atracciones. Flota moderna, precios transparentes y servicio de calidad.',
  keywords: 'alquiler coches tanger centro, rent a car tangier city center, coches centro tanger, nassoh car tanger, alquiler coches medina tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/alquiler-coches-tanger-centro',
  },
}

export default function Page() {
  return <ClientPage />
}
