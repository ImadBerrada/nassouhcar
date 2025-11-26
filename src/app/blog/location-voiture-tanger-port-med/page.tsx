import type { Metadata } from 'next'
import { MapPin, Clock, Car, Phone, Mail, Calendar, Tag, Anchor, Navigation, Ship, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location Voiture Tanger Port Med 2025 - Service Ferry | Nassoh Car',
  description: 'Location de voiture au port Tanger Med. Service coordonné avec les ferries, livraison directe au terminal. Parfait pour les voyageurs venant d\'Europe !',
  keywords: 'location voiture tanger port med, location voiture port tanger med, car rental tangier med port, location auto port med, voiture location ferry tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/location-voiture-tanger-port-med'
  },
  openGraph: {
    title: 'Location Voiture Tanger Port Med 2025 - Service Ferry | Nassoh Car',
    description: 'Location de voiture au port Tanger Med. Service coordonné avec les ferries, livraison directe au terminal.',
    images: ['/tangier-port-med-blog.jpg'],
  },
}

export default function LocationVoitureTangerPortMedBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-900 via-cyan-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Ship className="h-6 w-6 text-amber-400 mr-2" />
              <span className="text-amber-400 font-semibold text-lg">Guide Expert 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">
              Location Voiture Tanger Port Med
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Service spécialisé de location de voiture au port Tanger Med. 
              Récupérez votre véhicule dès votre arrivée de ferry depuis l'Europe.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Publié le 15 Janvier 2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>9 min de lecture</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>Port Tanger Med</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 mb-12 border border-teal-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Votre Passerelle Automobile vers le Maroc
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Le port Tanger Med est le plus grand port de la Méditerranée et votre point d'entrée privilégié au Maroc 
              depuis l'Europe. Notre service de location de voiture au port Tanger Med vous permet de continuer votre 
              voyage en toute liberté dès votre débarquement du ferry, avec un service coordonné selon les horaires maritimes.
            </p>
          </div>

          {/* Avantages Port Med */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Pourquoi Choisir Notre Service au Port Tanger Med ?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Ship className="h-8 w-8 text-teal-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Coordination Ferry</h3>
                </div>
                <p className="text-gray-700">
                  Nous synchronisons nos services avec les horaires des ferries depuis Algésiras, Tarifa, et Gibraltar. 
                  Votre véhicule vous attend à votre débarquement.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Anchor className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Livraison au Terminal</h3>
                </div>
                <p className="text-gray-700">
                  Service de livraison directement au terminal passagers du port Med. 
                  Évitez les transports supplémentaires et prenez la route immédiatement.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Navigation className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Itinéraires Optimisés</h3>
                </div>
                <p className="text-gray-700">
                  GPS pré-configuré avec les meilleures routes vers Tanger, Tétouan, Chefchaouen, 
                  et toutes les destinations du nord du Maroc.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Équipe Multilingue</h3>
                </div>
                <p className="text-gray-700">
                  Notre équipe parle français, espagnol, anglais et arabe pour accueillir 
                  tous les voyageurs européens dans leur langue.
                </p>
              </div>
            </div>
          </section>

          {/* Processus Port Med */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Processus de Récupération au Port Tanger Med
            </h2>
            
            <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Service Coordonné avec les Ferries</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Réservation avec Horaire Ferry</h4>
                    <p className="text-gray-700">
                      Réservez sur notre <Link href="/" className="text-teal-600 hover:underline font-medium">site web</Link> en 
                      précisant votre compagnie de ferry, numéro de traversée et heure d'arrivée prévue au port Med.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Suivi en Temps Réel</h4>
                    <p className="text-gray-700">
                      Nous suivons votre ferry en temps réel et ajustons notre présence selon les éventuels retards 
                      ou avances de la traversée maritime.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Accueil au Terminal</h4>
                    <p className="text-gray-700">
                      Notre représentant vous attend à la sortie du terminal passagers avec votre véhicule 
                      préparé et tous les documents prêts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Départ Immédiat</h4>
                    <p className="text-gray-700">
                      Formalités express, briefing sur la conduite au Maroc, et départ direct 
                      vers votre destination depuis le port Med.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Informations Ferry */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Liaisons Ferry Compatibles
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Ship className="h-6 w-6 text-blue-600 mr-2" />
                  Depuis Algésiras
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🚢 FRS, Baleària, AML</li>
                  <li>⏱️ Traversée : 1h30</li>
                  <li>🕒 Départs fréquents</li>
                  <li>Service coordonné</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Ship className="h-6 w-6 text-green-600 mr-2" />
                  Depuis Tarifa
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🚢 FRS</li>
                  <li>⏱️ Traversée : 1h00</li>
                  <li>🕒 Plusieurs départs/jour</li>
                  <li>Accueil personnalisé</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Ship className="h-6 w-6 text-purple-600 mr-2" />
                  Depuis Gibraltar
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🚢 FRS</li>
                  <li>⏱️ Traversée : 1h20</li>
                  <li>🕒 Service saisonnier</li>
                  <li>Réservation recommandée</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Destinations depuis Port Med */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Destinations Populaires depuis le Port Med
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <p className="text-lg text-gray-700 mb-6">
                Avec votre véhicule de location, explorez facilement le nord du Maroc depuis le port Med :
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏙️ Villes Principales</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Tanger Centre :</strong> 45 minutes</li>
                    <li>• <strong>Tétouan :</strong> 30 minutes</li>
                    <li>• <strong>Chefchaouen :</strong> 1h30</li>
                    <li>• <strong>Asilah :</strong> 1h15</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏖️ Sites Touristiques</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Grottes d'Hercule :</strong> 1h00</li>
                    <li>• <strong>Cap Spartel :</strong> 1h10</li>
                    <li>• <strong>Plages de Martil :</strong> 20 minutes</li>
                    <li>• <strong>Médina de Tétouan :</strong> 35 minutes</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conseils Pratiques */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Conseils pour Votre Arrivée au Port Med
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">💡 Conseils de Nos Experts Port</h3>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Avant l'embarquement :</strong> Confirmez votre réservation 24h avant le départ du ferry depuis l'Europe.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Documents ferry :</strong> Gardez votre billet de ferry accessible, nous en avons besoin pour la coordination.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Retards maritimes :</strong> En cas de retard de ferry, nous ajustons automatiquement notre présence.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Première conduite :</strong> Le port Med dispose d'une zone d'essai pour vous familiariser avec la conduite à droite.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Autoroute :</strong> L'autoroute A1 depuis le port Med vous mène directement vers toutes les destinations.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Véhicules Recommandés */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Véhicules Recommandés pour le Nord du Maroc
            </h2>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <p className="text-lg text-gray-700 mb-6">
                Découvrez notre <Link href="/fleet" className="text-teal-600 hover:underline font-medium">sélection de véhicules</Link> 
                parfaitement adaptés aux routes du nord marocain :
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Citadines</h4>
                  <p className="text-sm text-gray-600 mb-2">Idéales pour Tanger et Tétouan</p>
                  <p className="text-teal-600 font-bold">À partir de 30€/jour</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">🚙 SUV Compacts</h4>
                  <p className="text-sm text-gray-600 mb-2">Parfaits pour Chefchaouen</p>
                  <p className="text-teal-600 font-bold">À partir de 50€/jour</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">🚐 Familiales</h4>
                  <p className="text-sm text-gray-600 mb-2">Groupes et familles</p>
                  <p className="text-teal-600 font-bold">À partir de 65€/jour</p>
                </div>
              </div>
            </div>
          </section>

          {/* Informations Pratiques Port */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Informations Pratiques - Port Tanger Med
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-6 w-6 text-teal-600 mr-2" />
                  Localisation & Services
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>📍 Port Tanger Med, Ksar Sghir</li>
                  <li>40 km de Tanger centre</li>
                  <li>🛣️ Accès direct autoroute A1</li>
                  <li>🅿️ Parking sécurisé disponible</li>
                  <li>🏪 Services et restauration sur place</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-6 w-6 text-green-600 mr-2" />
                  Horaires & Disponibilité
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🕒 Service selon horaires ferries</li>
                  <li>📞 Coordination temps réel</li>
                  <li>⏰ Présence garantie à l'arrivée</li>
                  <li>🌙 Service de nuit disponible</li>
                  <li>📱 Suivi par WhatsApp</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Réservez pour le Port Tanger Med</h2>
              <p className="text-xl mb-8 opacity-90">
                Service spécialisé ferry. Votre véhicule vous attend à votre débarquement 
                au port Med pour explorer le Maroc en liberté !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/" 
                  className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  <Ship className="h-5 w-5 mr-2" />
                  Réserver Port Med
                </Link>
                <Link 
                  href="/fleet" 
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-teal-600 transition-colors inline-flex items-center justify-center"
                >
                  <Car className="h-5 w-5 mr-2" />
                  Choisir un Véhicule
                </Link>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Service Client Port Med
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Coordination Ferry</p>
                    <p className="text-gray-700">+212 631 63 00 13</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email Port Med</p>
                    <p className="text-gray-700">portmed@nassouhcar.com</p>
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