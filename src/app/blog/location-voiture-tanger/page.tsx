import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Location de Voiture Tanger 2025 - Guide Complet | Nassoh Car',
  description: 'Découvrez le guide ultime pour la location de voiture à Tanger. Conseils d\'experts, meilleurs tarifs, et service 24h/24. Réservez votre véhicule dès maintenant !',
  keywords: 'location voiture tanger, location de voiture tanger, voiture de location tanger, car rental tangier, location auto tanger, louer voiture tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/location-voiture-tanger'
  },
  openGraph: {
    title: 'Location de Voiture Tanger 2025 - Guide Complet | Nassoh Car',
    description: 'Découvrez le guide ultime pour la location de voiture à Tanger. Conseils d\'experts, meilleurs tarifs, et service 24h/24.',
    images: ['/tangier-blog.jpg'],
  },
}

export default function LocationVoitureTangerBlog() {
  return (
    <>
      <StructuredData type="Article" countryTarget="MA" language="fr" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Car className="h-6 w-6 text-amber-400 mr-2" />
              <span className="text-amber-400 font-semibold text-lg">Guide Expert 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">
              Location de Voiture Tanger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Le guide complet pour louer une voiture à Tanger en 2025. Découvrez nos conseils d'experts, 
              les meilleurs tarifs et notre service économique 24h/24.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Publié le 15 Janvier 2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>8 min de lecture</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>Guide Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir la Location de Voiture à Tanger ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tanger, porte d'entrée du Maroc, offre une liberté incomparable lorsque vous disposez de votre propre véhicule. 
              Que vous arriviez par l'aéroport Ibn Battouta, le port Tanger Med, ou que vous souhaitiez explorer la région, 
              la location de voiture à Tanger vous permet de découvrir cette magnifique ville à votre rythme.
            </p>
          </div>

          {/* Avantages Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Les Avantages de Louer une Voiture à Tanger
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Liberté de Mouvement</h3>
                </div>
                <p className="text-gray-700">
                  Explorez Tanger et ses environs sans contraintes d'horaires. Visitez les grottes d'Hercule, 
                  Cap Spartel, ou partez en excursion vers Chefchaouen quand vous le souhaitez.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Star className="h-8 w-8 text-amber-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Confort Familial</h3>
                </div>
                <p className="text-gray-700">
                  Nos véhicules sont entretenus selon les plus hauts standards. Climatisation, GPS, 
                  et assurance complète inclus pour votre sécurité et confort.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Service Sécurisé</h3>
                </div>
                <p className="text-gray-700">
                  Assurance tous risques, assistance 24h/24, et véhicules régulièrement contrôlés 
                  pour votre tranquillité d'esprit à Tanger.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Service Client Expert</h3>
                </div>
                <p className="text-gray-700">
                  Notre équipe locale à Tanger vous accompagne avec des conseils personnalisés 
                  et un support en français, arabe et anglais.
                </p>
              </div>
            </div>
          </section>

          {/* Guide Pratique */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Guide Pratique : Comment Louer une Voiture à Tanger
            </h2>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Étapes Simples pour Votre Location</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Réservation en Ligne</h4>
                    <p className="text-gray-700">
                      Visitez notre <Link href="/" className="text-blue-600 hover:underline font-medium">page d'accueil</Link> et 
                      sélectionnez vos dates, lieu de prise en charge à Tanger, et type de véhicule souhaité.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Choix du Véhicule</h4>
                    <p className="text-gray-700">
                      Explorez notre <Link href="/fleet" className="text-blue-600 hover:underline font-medium">flotte complète</Link> et 
                      choisissez parmi nos véhicules économiques, SUV, ou voitures familiales disponibles à Tanger.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Documents Requis</h4>
                    <p className="text-gray-700">
                      Préparez votre permis de conduire valide, passeport ou CIN, et une carte de crédit 
                      pour la caution de 5 000 DH (entièrement remboursable).
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Prise en Charge</h4>
                    <p className="text-gray-700">
                      Récupérez votre véhicule à notre agence de Tanger, à l'aéroport Ibn Battouta, 
                      au port Tanger Med, ou bénéficiez de notre service de livraison gratuit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Lieux de Prise en Charge */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Où Récupérer Votre Voiture de Location à Tanger ?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <MapPin className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Agence Tanger Centre</h3>
                <p className="text-gray-700 mb-4">
                  Notre agence principale au cœur de Tanger, facilement accessible depuis tous les quartiers de la ville.
                </p>
                <div className="text-sm text-gray-600">
                  <p>📍 Centre-ville de Tanger</p>
                  <p>🕒 9h00 - 20h00 (7j/7)</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <MapPin className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Aéroport Ibn Battouta</h3>
                <p className="text-gray-700 mb-4">
                  Service de location directement à l'aéroport de Tanger pour votre arrivée et départ en toute simplicité.
                </p>
                <div className="text-sm text-gray-600">
                  <p>📍 Aéroport Tanger Ibn Battouta</p>
                  <p>🕒 Service 24h/24 sur demande</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <MapPin className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Port Tanger Med</h3>
                <p className="text-gray-700 mb-4">
                  Récupération directe au port Tanger Med pour les voyageurs arrivant par ferry depuis l'Europe.
                </p>
                <div className="text-sm text-gray-600">
                  <p>📍 Terminal Port Tanger Med</p>
                  <p>🕒 Coordination avec horaires ferries</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conseils d'Expert */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Conseils d'Expert pour Votre Location à Tanger
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">💡 Astuces de Nos Experts Locaux</h3>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Meilleure période :</strong> Réservez votre location de voiture à Tanger au moins 48h à l'avance pour garantir la disponibilité.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Conduite à Tanger :</strong> La circulation est fluide en dehors des heures de pointe (8h-9h et 17h-19h).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Stationnement :</strong> Utilisez les parkings payants du centre-ville ou les zones bleues pour éviter les amendes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Carburant :</strong> Les stations-service sont nombreuses à Tanger. Rendez le véhicule avec le même niveau de carburant.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Excursions :</strong> Profitez de votre location pour visiter Asilah (45 min), Chefchaouen (2h), ou Tétouan (1h).</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Prêt à Explorer Tanger ?</h2>
              <p className="text-xl mb-8 opacity-90">
                Réservez votre voiture de location à Tanger dès maintenant et découvrez la liberté de voyager à votre rythme.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  <Car className="h-5 w-5 mr-2" />
                  Réserver Maintenant
                </Link>
                <Link 
                  href="/fleet" 
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Voir Notre Flotte
                </Link>
              </div>
            </div>
          </section>

          {/* Related Articles Section */}
          <section className="mb-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Articles Connexes sur Tanger
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/blog/location-voiture-tanger-pas-cher" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <Tag className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm text-green-600 font-medium">Économies</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Location Pas Cher à Tanger</h3>
                  <p className="text-gray-600 text-sm">Découvrez nos tarifs imbattables dès 170 DH/jour pour votre location à Tanger.</p>
                </Link>

                <Link href="/blog/location-voiture-aeroport-tanger" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-blue-600 font-medium">Aéroport</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Location à l'Aéroport</h3>
                  <p className="text-gray-600 text-sm">Service express de livraison directement à l'aéroport Ibn Battuta de Tanger.</p>
                </Link>

                <Link href="/blog/location-voiture-au-port-de-tanger" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <Car className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-sm text-purple-600 font-medium">Port</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Location au Port</h3>
                  <p className="text-gray-600 text-sm">Service express au port de Tanger avec livraison gratuite pour les voyageurs ferry.</p>
                </Link>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Besoin d'Aide pour Votre Location à Tanger ?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Téléphone</p>
                    <p className="text-gray-700">+212 631 63 00 13</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-700">contact@nassohcar.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </article>
      </div>
    </div>
    </>
  )
}