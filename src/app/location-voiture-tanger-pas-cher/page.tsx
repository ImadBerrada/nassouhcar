import type { Metadata } from 'next'
// SEO keywords removed - not used in this component
import { generateHreflangLinks } from '../../lib/hreflang-utils'
import Link from 'next/link'
import PasCherFleet from '@/components/PasCherFleet'

// Generate SEO metadata for economy cars page
export const metadata: Metadata = {
  title: 'Location Voiture Économique | Nassoh Car - Meilleurs Prix Maroc',
  description: 'Location voiture tanger pas cher. Voitures pas cher à Tanger, Tétouan, Casablanca. Réservez votre voiture économique dès maintenant!',
  keywords: [
    'location voiture économique',
    'location de voiture pas cher',
    'voiture économique Tanger',
    'voiture économique Tétouan',
    'location auto pas cher Maroc',
    'cheap car rental Morocco',
    'economy car rental Tangier',
    'budget car rental Morocco',
    'تأجير السيارات الاقتصادية',
    'تأجير السيارات الرخيص',
    'alquiler coches económico',
    'alquiler coches barato Marruecos'
  ].join(', '),
  openGraph: {
    title: 'Location Voiture Économique | Nassoh Car - Meilleurs Prix',
    description: 'Location de voiture économique au Maroc avec Nassoh Car. Voitures pas cher à Tanger, Tétouan, Casablanca.',
    url: 'https://www.nassohcar.com/economy-cars',
    images: [{
      url: '/cars/DACIA LOGAN.png',
      width: 1200,
      height: 630,
      alt: 'Location voiture économique Maroc - Nassoh Car'
    }]
  },
  alternates: {
    canonical: 'https://www.nassohcar.com/economy-cars',
    languages: generateHreflangLinks('/economy-cars')
  }
}

export default function EconomyCarsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Location Voiture Tanger pas cher
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Voitures économiques et pas cher avec Nassoh Car - Qualité garantie aux meilleurs prix
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ À partir de 18.95 EUR/jour</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Assurance Incluse</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Kilométrage Illimité</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Why Choose Économique Cars */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Pourquoi Choisir une Voiture Économique ?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-3">
                    Location Voiture Tanger Pas Cher 
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Nos voitures économiques offrent le meilleur rapport qualité-prix pour votre 
                    location de voiture au Maroc. Idéales pour les budgets serrés sans compromettre 
                    la qualité et la sécurité.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-3">
                    Économie de Carburant
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Nos véhicules économiques consomment moins de carburant, vous permettant 
                    d&apos;économiser encore plus sur vos déplacements à Tanger, Tétouan et dans tout le Maroc.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Économique Fleet */}
            <div className="mb-12" id="fleet">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Notre Flotte de Voitures Économiques
              </h2>
              <PasCherFleet />
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Avantages de Nos Voitures Économiques
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-green-600 mb-3">
                      Inclus dans Votre Location
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        Assurance tous risques (franchise de 500EUR)
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        Kilométrage illimité
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        Assistance 24h/24
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        Deuxième conducteur gratuit
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-600 mb-3">
                      Services Additionnels
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        Livraison gratuite à l&apos;hôtel
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        Prise en charge aéroport
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        GPS disponible
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        Siège bébé sur demande
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Disponible dans Toutes Nos Agences
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-green-600 mb-3">
                    Location Voiture Tanger Pas Cher
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Location de voiture économique à Tanger avec prise en charge à l&apos;aéroport 
                    Ibn Battouta ou dans notre agence du centre-ville.
                  </p>
                  <Link href="/location-voiture-tanger" className="text-green-600 hover:underline">
                    En savoir plus →
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-green-600 mb-3">
                    Location Voiture Tétouan Pas Cher
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Louez une voiture économique à Tétouan pour explorer la région du Rif 
                    et les plages de la côte méditerranéenne.
                  </p>
                  <Link href="/location-voiture-tetouan" className="text-green-600 hover:underline">
                    En savoir plus →
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Questions Fréquentes - Location Voiture Pas Cher
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-green-600 mb-2">
                    Quel est le prix d&apos;une location de voiture pas cher ?
                  </h3>
                  <p className="text-gray-600">
                    Nos voitures de location pas cher commencent à partir de 18.95 EUR par jour, 
                    assurance et kilométrage illimité inclus.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-green-600 mb-2">
                    Quelle est la consommation de carburant ?
                  </h3>
                  <p className="text-gray-600">
                    Nos voitures de location pas cher consomment entre 4.0L et 5.0L aux 100km, 
                    vous permettant d&apos;économiser sur le carburant.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-green-600 text-white p-8 rounded-lg text-center max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">
                Réservez Votre Voiture Économique Maintenant
              </h2>
              <p className="text-lg mb-6">
                Choisissez un véhicule ci-dessus pour réserver immédiatement.
              </p>
              <Link 
                href="#fleet" 
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Voir la Flotte Disponible
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}