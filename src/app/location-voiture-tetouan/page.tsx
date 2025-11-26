import type { Metadata } from 'next'
// SEO keywords removed - not used in this component
import { generateHreflangLinks } from '../../lib/hreflang-utils'
import Link from 'next/link'
import Image from 'next/image'
import PasCherFleet from '@/components/PasCherFleet'

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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Location Voiture Tétouan
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Explorez le Rif, Chefchaouen et la côte méditerranéenne avec Nassoh Car
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Prise en charge aéroport gratuite</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Véhicules 4x4 disponibles</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Guide local inclus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Notre Flotte à Tétouan (placée en premier) */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Notre Flotte à Tétouan
              </h2>
              <p className="text-gray-600 mb-6">
                Découvrez nos véhicules disponibles immédiatement à Tétouan. Réservez en ligne en quelques clics.
              </p>
              <PasCherFleet limit={6} />
            </div>

            {/* Why Choose Tetouan */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Pourquoi Louer une Voiture à Tétouan ?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-600 mb-3">
                    Porte d&apos;Entrée du Rif
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tétouan est le point de départ idéal pour explorer les montagnes du Rif, 
                    Chefchaouen la ville bleue, et les magnifiques plages de la côte méditerranéenne.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-600 mb-3">
                    Patrimoine UNESCO
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Découvrez la médina de Tétouan, classée au patrimoine mondial de l&apos;UNESCO, 
                    et les sites historiques de la région avec votre voiture de location.
                  </p>
                </div>
              </div>
            </div>

            {/* Destinations from Tetouan */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Destinations Depuis Tétouan
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <Image 
                      src="/tetouan.jpeg" 
                      alt="Chefchaouen ville bleue"
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover rounded"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-600 mb-2">
                    Chefchaouen (60 km)
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    La célèbre ville bleue du Rif. Route de montagne pittoresque d&apos;1h30.
                  </p>
                  <p className="text-xs text-emerald-600 font-semibold">
                    Recommandé: SUV ou 4x4
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <Image 
                      src="/tetouan.jpeg" 
                      alt="Plage de Martil"
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover rounded"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-600 mb-2">
                    Martil & M&apos;diq (10 km)
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Stations balnéaires méditerranéennes. Plages de sable fin à 15 minutes.
                  </p>
                  <p className="text-xs text-emerald-600 font-semibold">
                    Recommandé: Voiture économique
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <Image 
                      src="/tetouan.jpeg" 
                      alt="Ceuta frontière"
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover rounded"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-600 mb-2">
                    Ceuta (40 km)
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Enclave espagnole. Shopping duty-free et découverte culturelle.
                  </p>
                  <p className="text-xs text-emerald-600 font-semibold">
                    Recommandé: Berline confortable
                  </p>
                </div>
              </div>
            </div>
            

            {/* Services in Tetouan */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Nos Services à Tétouan
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-600 mb-3">
                      Prise en Charge
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="text-emerald-600 mr-2">✓</span>
                        Aéroport Tétouan Sania Ramel
                      </li>
                      <li className="flex items-center">
                        <span className="text-emerald-600 mr-2">✓</span>
                        Gare routière de Tétouan
                      </li>
                      <li className="flex items-center">
                        <span className="text-emerald-600 mr-2">✓</span>
                        Hôtels du centre-ville
                      </li>
                      <li className="flex items-center">
                        <span className="text-emerald-600 mr-2">✓</span>
                        Port de Tétouan
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-600 mb-3">
                      Services Inclus
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="text-emerald-600 mr-2">✓</span>
                        Assurance tous risques
                      </li>
                      <li className="flex items-center">
                        <span className="text-emerald-600 mr-2">✓</span>
                        Kilométrage illimité
                      </li>
                      <li className="flex items-center">
                        <span className="text-emerald-600 mr-2">✓</span>
                        Assistance 24h/24
                      </li>
                      <li className="flex items-center">
                        <span className="text-emerald-600 mr-2">✓</span>
                        Guide touristique local
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Itineraries */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Itinéraires Recommandés depuis Tétouan
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-emerald-600 mb-3">
                    Circuit Rif & Chefchaouen (2-3 jours)
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Tétouan → Chefchaouen → Akchour (cascades) → Ouazzane → Tétouan
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Distance: 280 km</span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Durée: 2-3 jours</span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Véhicule: SUV recommandé</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-emerald-600 mb-3">
                    Tour des Plages Méditerranéennes (1 jour)
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Tétouan → Martil → M&apos;diq → Fnideq → Ceuta → Tétouan
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Distance: 120 km</span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Durée: 1 jour</span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Véhicule: Économique</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Conseils pour Conduire à Tétouan
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-600 mb-3">
                      Circulation en Ville
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Médina accessible à pied uniquement</li>
                      <li>• Parkings payants dans le centre</li>
                      <li>• Circulation dense aux heures de pointe</li>
                      <li>• Respect des zones piétonnes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-600 mb-3">
                      Routes vers le Rif
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Routes de montagne sinueuses</li>
                      <li>• Prévoir plus de temps en hiver</li>
                      <li>• Vérifier météo avant départ</li>
                      <li>• Faire le plein avant les montagnes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Questions Fréquentes - Location Tétouan
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-emerald-600 mb-2">
                    Quel type de voiture pour aller à Chefchaouen ?
                  </h3>
                  <p className="text-gray-600">
                    Nous recommandons un SUV ou 4x4 pour les routes de montagne vers Chefchaouen, 
                    surtout en hiver.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-emerald-600 mb-2">
                    Y a-t-il une agence à l&apos;aéroport de Tétouan ?
                  </h3>
                  <p className="text-gray-600">
                    Oui, nous proposons un service de prise en charge gratuite à l&apos;aéroport 
                    Tétouan Sania Ramel.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-emerald-600 mb-2">
                    Peut-on aller en Espagne avec la voiture de location ?
                  </h3>
                  <p className="text-gray-600">
                    Les sorties du territoire marocain nécessitent une autorisation spéciale. 
                    Contactez-nous pour les formalités.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-emerald-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">
                Réservez Votre Voiture à Tétouan
              </h2>
              <p className="text-lg mb-6">
                Explorez le Rif et la côte méditerranéenne - Prise en charge aéroport gratuite
              </p>
              <Link 
                href="/#booking" 
                className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Réserver à Tétouan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}