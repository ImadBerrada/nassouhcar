import type { Metadata } from 'next'
export { default } from '../../car-rental-france/page'

export const metadata: Metadata = {
  title: 'Car Rental from France to Tangier | Book Online | Nassoh Car',
  description: 'Book your car rental from France for Tangier and Morocco ✓ Instant confirmation ✓ Modern fleet ✓ French GPS ✓ 24/7 support.',
  keywords: 'car rental france to tangier, rent a car from france, tangier car hire france booking',
  alternates: { canonical: 'https://www.nassohcar.com/en/blog/car-rental-france' },
  openGraph: {
    title: 'Car Rental from France to Tangier | Book Online | Nassoh Car',
    description: 'Book from France in a few clicks. Instant confirmation, modern fleet, French GPS.',
    images: ['/car-rental-france.jpg']
  }
}
