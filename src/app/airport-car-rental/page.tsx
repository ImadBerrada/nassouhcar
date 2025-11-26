import type { Metadata } from 'next'
// SEO keywords removed - not used in this component
import { generateHreflangLinks } from '../../lib/hreflang-utils'
import Link from 'next/link'
import Image from 'next/image'

// Generate SEO metadata for airport car rental page
export const metadata: Metadata = {
  title: 'Location Voiture Aéroport | Nassoh Car - Tanger, Tétouan, Casablanca',
  description: 'Location de voiture à l\'aéroport au Maroc. Service de prise en charge aéroport Tanger Ibn Battouta, Tétouan, Casablanca. Réservez votre voiture dès l\'arrivée!',
  keywords: [
    'location voiture aéroport',
    'location voiture aéroport Tanger',
    'location voiture aéroport Tétouan',
    'location voiture aéroport Casablanca',
    'car rental airport Morocco',
    'airport car rental Tangier',
    'Tangier Ibn Battouta airport',
    'تأجير السيارات المطار',
    'تأجير السيارات مطار طنجة',
    'alquiler coches aeropuerto',
    'alquiler coches aeropuerto Tánger',
    'prise en charge aéroport'
  ].join(', '),
  openGraph: {
    title: 'Location Voiture Aéroport | Nassoh Car - Service Économique',
    description: 'Location de voiture à l\'aéroport au Maroc. Service de prise en charge aéroport Tanger Ibn Battouta, Tétouan, Casablanca.',
    url: 'https://www.nassohcar.com/airport-car-rental',
    images: [{
      url: '/cars/TOYOTA RAV4.avif',
      width: 1200,
      height: 630,
      alt: 'Location voiture aéroport Maroc - Nassoh Car'
    }]
  },
  alternates: {
    canonical: 'https://www.nassohcar.com/airport-car-rental',
    languages: generateHreflangLinks('/airport-car-rental')
  }
}

export default function AirportCarRentalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Location Voiture Aéroport au Maroc
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Service de prise en charge directement à l&apos;aéroport - Tanger, Tétouan, Casablanca
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Prise en charge gratuite</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Service 24h/24</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Réservation en ligne</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Airport Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Nos Services Aéroport
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl text-blue-600 mb-4">✈️</div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    Prise en Charge Aéroport
                  </h3>
                  <p className="text-gray-600">
                    Notre équipe vous accueille directement à l&apos;aéroport avec votre véhicule prêt.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl text-blue-600 mb-4"></div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    Véhicule Prêt
                  </h3>
                  <p className="text-gray-600">
                    Votre voiture est nettoyée, vérifiée et prête à partir dès votre arrivée.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl text-blue-600 mb-4">📋</div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    Formalités Rapides
                  </h3>
                  <p className="text-gray-600">
                    Procédure de prise en charge simplifiée pour gagner du temps.
                  </p>
                </div>
              </div>
            </div>

            {/* Airport Locations */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Aéroports Desservis
              </h2>
              
              {/* Tanger Airport */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <Image 
                      src="/images/tanger-airport.jpg" 
                      alt="Aéroport Tanger Ibn Battouta"
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                      Aéroport Tanger Ibn Battouta (TNG)
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Location de voiture aéroport Tanger avec service de prise en charge gratuite. 
                      Notre équipe vous attend dans le hall d&apos;arrivée avec votre véhicule.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        Prise en charge gratuite 24h/24
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        Point de rencontre: Hall d&apos;arrivée
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        Temps d&apos;attente: Maximum 15 minutes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tetouan Airport */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <Image 
                      src="/images/tetouan-airport.jpg" 
                      alt="Aéroport Tétouan Sania Ramel"
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                      Aéroport Tétouan Sania Ramel (TTU)
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Service de location voiture aéroport Tétouan pour explorer le Rif et 
                      les plages méditerranéennes dès votre arrivée.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        Service disponible tous les jours
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        Livraison directe à l&apos;aéroport
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        Assistance multilingue
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Casablanca Airport */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <Image 
                      src="/images/casablanca-airport.jpg" 
                      alt="Aéroport Casablanca Mohammed V"
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                      Aéroport Casablanca Mohammed V (CMN)
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Location voiture aéroport Casablanca, le plus grand aéroport du Maroc. 
                      Service économique pour les voyageurs d&apos;affaires et de loisirs.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        Terminal 1 et Terminal 2
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        Service VIP disponible
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        Flotte économique et familiale
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Comment Ça Marche ?
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Réservez</h3>
                  <p className="text-gray-600 text-sm">
                    Réservez votre voiture en ligne en précisant votre vol d&apos;arrivée
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Atterrissez</h3>
                  <p className="text-gray-600 text-sm">
                    À votre arrivée, notre équipe vous attend dans le hall
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Signez</h3>
                  <p className="text-gray-600 text-sm">
                    Formalités rapides et signature du contrat de location
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Partez</h3>
                  <p className="text-gray-600 text-sm">
                    Récupérez votre voiture et commencez votre voyage
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Avantages du Service Aéroport
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-3">
                      Gain de Temps
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        Pas de navette vers l&apos;agence
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        Formalités simplifiées
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        Départ immédiat
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-3">
                      Confort et Sécurité
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        Véhicule nettoyé et désinfecté
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        Contrôle technique à jour
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        Assistance 24h/24
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Questions Fréquentes - Location Aéroport
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">
                    La prise en charge à l&apos;aéroport est-elle gratuite ?
                  </h3>
                  <p className="text-gray-600">
                    Oui, la prise en charge à l&apos;aéroport est entièrement gratuite pour toutes nos locations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">
                    Combien de temps dois-je attendre ?
                  </h3>
                  <p className="text-gray-600">
                    Notre équipe vous attend maximum 15 minutes après votre sortie du hall d&apos;arrivée.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">
                    Que faire si mon vol a du retard ?
                  </h3>
                  <p className="text-gray-600">
                    Nous suivons les horaires de vol en temps réel. Notre équipe s&apos;adapte automatiquement aux retards.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">
                Réservez Votre Location Aéroport
              </h2>
              <p className="text-lg mb-6">
                Service de prise en charge gratuite - Disponible 24h/24 dans tous nos aéroports
              </p>
              <Link 
                href="/#booking" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Réserver avec Prise en Charge Aéroport
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}