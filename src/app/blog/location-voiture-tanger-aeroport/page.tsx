import type { Metadata } from 'next'
import { MapPin, Clock, Car, Shield, Phone, Mail, Calendar, Tag, Plane, Navigation } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location Voiture Tanger Aéroport 2025 - Service 24h/24 | Nassoh Car',
  description: 'Location de voiture à l\'aéroport de Tanger Ibn Battouta. Service 24h/24, livraison gratuite, large choix de véhicules. Réservez dès votre arrivée !',
  keywords: 'location voiture tanger aéroport, location voiture aéroport tanger, car rental tangier airport, location auto aéroport tanger, voiture location tanger ibn battouta',
  openGraph: {
    title: 'Location Voiture Tanger Aéroport 2025 - Service 24h/24 | Nassoh Car',
    description: 'Location de voiture à l\'aéroport de Tanger Ibn Battouta. Service 24h/24, livraison gratuite, large choix de véhicules.',
    images: ['/tangier-airport-blog.jpg'],
  },
}

export default function LocationVoitureTangerAeroportBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Plane className="h-6 w-6 text-amber-400 mr-2" />
              <span className="text-amber-400 font-semibold text-lg">Guide Expert 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">
              Location Voiture Tanger Aéroport
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Service premium de location de voiture à l'aéroport Ibn Battouta de Tanger. 
              Récupérez votre véhicule dès votre arrivée avec notre service 24h/24.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Publié le 15 Janvier 2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>7 min de lecture</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>Aéroport Tanger</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 mb-12 border border-cyan-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Notre Service à l'Aéroport de Tanger ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              L'aéroport Ibn Battouta de Tanger est votre porte d'entrée vers le Maroc du Nord. Notre service de location 
              de voiture à l'aéroport de Tanger vous permet de commencer votre aventure marocaine dès votre atterrissage, 
              avec un véhicule qui vous attend et une équipe dédiée pour vous accueillir.
            </p>
          </div>

          {/* Avantages Aéroport */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Avantages Exclusifs de Notre Service Aéroport
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Plane className="h-8 w-8 text-cyan-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Accueil Personnalisé</h3>
                </div>
                <p className="text-gray-700">
                  Notre équipe vous accueille directement à l'aéroport Ibn Battouta avec une pancarte à votre nom. 
                  Service disponible 24h/24 pour tous les vols, même les arrivées tardives.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Gain de Temps</h3>
                </div>
                <p className="text-gray-700">
                  Évitez les files d'attente et les formalités longues. Votre véhicule est préparé et vous pouvez 
                  prendre la route en moins de 15 minutes après votre arrivée.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Navigation className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">GPS Pré-configuré</h3>
                </div>
                <p className="text-gray-700">
                  Tous nos véhicules à l'aéroport sont équipés d'un GPS avec les principales destinations 
                  de Tanger déjà programmées pour faciliter votre première conduite.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Assurance Premium</h3>
                </div>
                <p className="text-gray-700">
                  Assurance tous risques incluse, assistance routière 24h/24, et véhicule de remplacement 
                  en cas de problème technique pendant votre séjour.
                </p>
              </div>
            </div>
          </section>

          {/* Processus Aéroport */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Comment Récupérer Votre Voiture à l'Aéroport de Tanger
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Processus Simple en 4 Étapes</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Réservation Confirmée</h4>
                    <p className="text-gray-700">
                      Réservez votre véhicule sur notre <Link href="/" className="text-cyan-600 hover:underline font-medium">site web</Link> en 
                      précisant votre numéro de vol et heure d'arrivée à l'aéroport Ibn Battouta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Arrivée à l'Aéroport</h4>
                    <p className="text-gray-700">
                      À votre sortie de l'aéroport, cherchez notre représentant avec une pancarte "Nassoh Car" 
                      et votre nom dans la zone d'accueil des arrivées.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Formalités Express</h4>
                    <p className="text-gray-700">
                      Présentation rapide de vos documents (permis, passeport, carte de crédit), 
                      signature du contrat et remise des clés en moins de 10 minutes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Prise en Main</h4>
                    <p className="text-gray-700">
                      Inspection rapide du véhicule, explication du GPS et des équipements, 
                      puis départ direct depuis le parking de l'aéroport.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Informations Pratiques */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Informations Pratiques - Aéroport Ibn Battouta
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                  Localisation & Accès
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>📍 Aéroport Ibn Battouta, Tanger</li>
                  <li>15 km du centre-ville de Tanger</li>
                  <li>🛣️ Accès direct autoroute A1</li>
                  <li>🅿️ Parking gratuit pendant les formalités</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-6 w-6 text-green-600 mr-2" />
                  Horaires & Disponibilité
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🕒 Service 24h/24, 7j/7</li>
                  <li>✈️ Accueil pour tous les vols</li>
                  <li>⏰ Délai minimum : 2h avant arrivée</li>
                  <li>📞 Suivi en temps réel des vols</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Véhicules Disponibles */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Véhicules Disponibles à l'Aéroport de Tanger
            </h2>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <p className="text-lg text-gray-700 mb-6">
                Notre <Link href="/fleet" className="text-blue-600 hover:underline font-medium">flotte complète</Link> est 
                disponible directement à l'aéroport Ibn Battouta :
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Économiques</h4>
                  <p className="text-sm text-gray-600 mb-2">Parfaites pour la ville</p>
                  <p className="text-blue-600 font-bold">À partir de 25€/jour</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">🚙 SUV & Familiales</h4>
                  <p className="text-sm text-gray-600 mb-2">Confort et espace</p>
                  <p className="text-blue-600 font-bold">À partir de 45€/jour</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">🏎️ Luxe & Premium</h4>
                  <p className="text-sm text-gray-600 mb-2">Expérience haut de gamme</p>
                  <p className="text-blue-600 font-bold">À partir de 80€/jour</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conseils Aéroport */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Conseils pour Votre Arrivée à l'Aéroport de Tanger
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">💡 Conseils de Nos Experts</h3>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Documents :</strong> Ayez votre permis de conduire, passeport et carte de crédit facilement accessibles.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Communication :</strong> Enregistrez notre numéro +212 631 63 00 13 dans votre téléphone avant le vol.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Retard de vol :</strong> Nous suivons votre vol en temps réel, pas d'inquiétude en cas de retard.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Première conduite :</strong> Prenez quelques minutes pour vous familiariser avec le véhicule avant de quitter l'aéroport.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Direction Tanger :</strong> Suivez les panneaux "Tanger Centre" pour rejoindre le centre-ville en 20 minutes.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Destinations depuis l'Aéroport */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Principales Destinations depuis l'Aéroport de Tanger
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🏙️ Vers le Centre-ville</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Centre-ville Tanger : 20 minutes</li>
                  <li>• Médina de Tanger : 25 minutes</li>
                  <li>• Port Tanger Ville : 30 minutes</li>
                  <li>• Plages de Tanger : 25 minutes</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🗺️ Excursions Régionales</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Asilah : 45 minutes</li>
                  <li>• Tétouan : 1h15</li>
                  <li>• Chefchaouen : 2h00</li>
                  <li>• Port Tanger Med : 45 minutes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Réservez Votre Voiture à l'Aéroport</h2>
              <p className="text-xl mb-8 opacity-90">
                Service premium 24h/24 à l'aéroport Ibn Battouta de Tanger. 
                Votre véhicule vous attend dès votre arrivée !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/" 
                  className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  <Plane className="h-5 w-5 mr-2" />
                  Réserver à l'Aéroport
                </Link>
                <Link 
                  href="/fleet" 
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center justify-center"
                >
                  <Car className="h-5 w-5 mr-2" />
                  Voir les Véhicules
                </Link>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Service Client Aéroport 24h/24
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-6 w-6 text-cyan-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Urgence Aéroport</p>
                    <p className="text-gray-700">+212 631 63 00 13</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-6 w-6 text-cyan-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email Support</p>
                    <p className="text-gray-700">contact@nassohcar.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </article>
      </div>
    </div>
  )
}