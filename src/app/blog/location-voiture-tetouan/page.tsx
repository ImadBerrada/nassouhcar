import type { Metadata } from 'next'
import { MapPin, Clock, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Gift, Award, Mountain, Waves, Compass, Route, Building, Plane, Ship } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location Voiture Tétouan 2025 - Dès 175 DH/jour ✓ Service Économique',
  description: 'Location voiture Tétouan ✓ Dès 175 DH/jour ✓ Aéroport & centre-ville ✓ Flotte moderne ✓ Assistance 24h ✓ Réservation simple ✓ Livraison gratuite.',
  keywords: 'location voiture tétouan, location voiture tetouan, car rental tetouan, location auto tétouan',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/location-voiture-tetouan'
  },
  openGraph: {
    title: 'Location Voiture Tétouan 2025 - Dès 175 DH/jour ✓ Service Économique',
    description: 'Location voiture Tétouan ✓ Dès 175 DH/jour ✓ Aéroport & centre-ville ✓ Flotte moderne ✓ Assistance 24h.',
    images: ['/tetouan-car-rental.webp'],
  },
}

export default function LocationVoitureTetouanBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Mountain className="h-6 w-6 text-emerald-400 mr-2" />
              <span className="text-emerald-400 font-semibold text-lg">Perle du Nord</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Location Voiture Tétouan
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Location voiture Tétouan dès 175 DH/jour ! Explorez la perle du Nord, 
              ses montagnes du Rif et la côte méditerranéenne en toute liberté.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Mis à jour le 15 Janvier 2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>7 min de lecture</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>Tétouan</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Réserver Tétouan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Tetouan Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Votre location voiture à Tétouan</h2>
            <p className="text-xl text-gray-600">Service économique dans la capitale du Nord marocain</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-emerald-600 mb-2">175 DH</div>
              <div className="text-gray-600 font-medium">Prix dès/jour</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-teal-600 mb-2">3</div>
              <div className="text-gray-600 font-medium">Points récupération</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-cyan-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Véhicules disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">24h/24</div>
              <div className="text-gray-600 font-medium">Service assistance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Mountain className="h-8 w-8 text-emerald-600 mr-3" />
                Pourquoi choisir Tétouan pour votre location ?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Tétouan</strong>, surnommée la "Colombe Blanche" et "Perle du Nord", 
                est une destination exceptionnelle pour votre <strong>location voiture Tétouan</strong>. 
                Classée au patrimoine mondial de l'UNESCO, cette ville historique offre un 
                accès privilégié aux montagnes du Rif, à la côte méditerranéenne et à l'Andalousie espagnole.
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-emerald-600 mr-2" />
                  Avantages location voiture Tétouan
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Position stratégique</strong> : Entre mer, montagne et Espagne</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Patrimoine UNESCO</strong> : Médina authentique préservée</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Accès privilégié</strong> : Chefchaouen, Ceuta, Fnideq</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Diversité paysages</strong> : Plages, montagnes, forêts</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-emerald-600 mr-2" />
                Points de récupération Tétouan
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Récupérez votre véhicule de <strong>location voiture Tétouan</strong> 
                dans nos 3 points stratégiques :
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Building className="h-5 w-5 text-emerald-600 mr-2" />
                    Centre-ville Tétouan
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <ul className="text-gray-600 space-y-2 mb-4">
                        <li>• <strong>Adresse</strong> : Avenue Mohammed V</li>
                        <li>• <strong>Horaires</strong> : 8h-20h (7j/7)</li>
                        <li>• <strong>Services</strong> : Livraison hôtel gratuite</li>
                        <li>• <strong>Proximité</strong> : Médina, gare routière</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-gray-600 space-y-2 mb-4">
                        <li>• <strong>Parking</strong> : Sécurisé gratuit</li>
                        <li>• <strong>Accès</strong> : Transport public</li>
                        <li>• <strong>Langues</strong> : Arabe, Français, Espagnol</li>
                        <li>• <strong>Paiement</strong> : Espèces, carte, virement</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Point principal
                  </div>
                </div>

                <div className="bg-white border-2 border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Plane className="h-5 w-5 text-teal-600 mr-2" />
                    Aéroport Tétouan Sania Ramel
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <ul className="text-gray-600 space-y-2 mb-4">
                        <li>• <strong>Terminal</strong> : Arrivées internationales</li>
                        <li>• <strong>Horaires</strong> : Selon vols (24h/24)</li>
                        <li>• <strong>Services</strong> : Accueil personnalisé</li>
                        <li>• <strong>Distance</strong> : 5km du centre</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-gray-600 space-y-2 mb-4">
                        <li>• <strong>Réservation</strong> : 2h avant arrivée</li>
                        <li>• <strong>Attente</strong> : Gratuite 1h</li>
                        <li>• <strong>Suivi vol</strong> : Automatique</li>
                        <li>• <strong>Urgence</strong> : Contact direct</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Service aéroport
                  </div>
                </div>

                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Ship className="h-5 w-5 text-cyan-600 mr-2" />
                    Port Fnideq (Ceuta)
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <ul className="text-gray-600 space-y-2 mb-4">
                        <li>• <strong>Localisation</strong> : Sortie ferry Ceuta</li>
                        <li>• <strong>Horaires</strong> : 6h-23h (7j/7)</li>
                        <li>• <strong>Services</strong> : Coordination ferry</li>
                        <li>• <strong>Distance</strong> : 40km Tétouan</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-gray-600 space-y-2 mb-4">
                        <li>• <strong>Douane</strong> : Assistance formalités</li>
                        <li>• <strong>Attente</strong> : Zone dédiée</li>
                        <li>• <strong>International</strong> : Permis européen OK</li>
                        <li>• <strong>Retour</strong> : Même point possible</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Service international
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-emerald-600 mr-2" />
                Flotte adaptée à Tétouan
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre flotte pour la <strong>location voiture Tétouan</strong> est 
                spécialement adaptée aux spécificités de la région :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Car className="h-5 w-5 text-emerald-600 mr-2" />
                    Citadines (175-190 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Idéal pour</strong> : Médina, centre-ville</li>
                    <li>• <strong>Modèles</strong> : Clio, Sandero, Logan</li>
                    <li>• <strong>Avantages</strong> : Parking facile, économique</li>
                    <li>• <strong>Capacité</strong> : 2-4 personnes</li>
                  </ul>
                  <div className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Ville & économie
                  </div>
                </div>

                <div className="bg-white border-2 border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Mountain className="h-5 w-5 text-teal-600 mr-2" />
                    SUV Montagne (280-320 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Idéal pour</strong> : Rif, Chefchaouen</li>
                    <li>• <strong>Modèles</strong> : Duster, Captur, Panda 4x4</li>
                    <li>• <strong>Avantages</strong> : Traction, garde au sol</li>
                    <li>• <strong>Capacité</strong> : 4-5 personnes</li>
                  </ul>
                  <div className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Aventure montagne
                  </div>
                </div>

                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-cyan-600 mr-2" />
                    Familiales (220-250 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Idéal pour</strong> : Famille, confort</li>
                    <li>• <strong>Modèles</strong> : Scenic, Lodgy, C4 Picasso</li>
                    <li>• <strong>Avantages</strong> : Espace, bagages</li>
                    <li>• <strong>Capacité</strong> : 5-7 personnes</li>
                  </ul>
                  <div className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Confort famille
                  </div>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Waves className="h-5 w-5 text-blue-600 mr-2" />
                    Cabriolets (350-400 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Idéal pour</strong> : Côte, romantique</li>
                    <li>• <strong>Modèles</strong> : 208 CC, Clio CC</li>
                    <li>• <strong>Avantages</strong> : Plaisir, prestige</li>
                    <li>• <strong>Capacité</strong> : 2-4 personnes</li>
                  </ul>
                  <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Plaisir & prestige
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Compass className="h-6 w-6 text-emerald-600 mr-2" />
                Destinations incontournables depuis Tétouan
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Avec votre <strong>location voiture Tétouan</strong>, explorez les 
                merveilles du Nord marocain :
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-emerald-50 to-teal-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Destination</th>
                      <th className="px-6 py-4 text-center font-semibold text-emerald-600">Distance</th>
                      <th className="px-6 py-4 text-center font-semibold text-teal-600">Temps</th>
                      <th className="px-6 py-4 text-center font-semibold text-cyan-600">Intérêt</th>
                      <th className="px-6 py-4 text-center font-semibold text-blue-600">Véhicule</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Chefchaouen</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold">65 km</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-semibold">1h15</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">★★★★★</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">SUV</td>
                    </tr>
                    <tr className="bg-emerald-50 hover:bg-emerald-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Ceuta (Espagne)</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold">40 km</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-semibold">45min</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">★★★★☆</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">Tous</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Cabo Negro</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold">15 km</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-semibold">20min</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">★★★★☆</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">Cabriolet</td>
                    </tr>
                    <tr className="bg-emerald-50 hover:bg-emerald-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Martil</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold">10 km</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-semibold">15min</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">★★★☆☆</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">Citadine</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Tanger</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold">60 km</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-semibold">1h00</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">★★★★★</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">Tous</td>
                    </tr>
                    <tr className="bg-emerald-50 hover:bg-emerald-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Ouezzane</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold">45 km</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-semibold">50min</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">★★★☆☆</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">SUV</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Route className="h-6 w-6 text-blue-600 mr-2" />
                  Circuits recommandés depuis Tétouan
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Circuit Montagne (2-3 jours)</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Jour 1</strong> : Tétouan → Chefchaouen (nuit)</li>
                      <li>• <strong>Jour 2</strong> : Chefchaouen → Akchour → Ouezzane</li>
                      <li>• <strong>Jour 3</strong> : Ouezzane → Tétouan</li>
                      <li>• <strong>Véhicule</strong> : SUV recommandé</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Circuit Côte (1-2 jours)</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Matin</strong> : Tétouan → Cabo Negro</li>
                      <li>• <strong>Midi</strong> : Cabo Negro → Martil</li>
                      <li>• <strong>Soir</strong> : Martil → Tétouan</li>
                      <li>• <strong>Véhicule</strong> : Cabriolet idéal</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-emerald-600 mr-2" />
                Services inclus Tétouan
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Votre <strong>location voiture Tétouan</strong> inclut tous nos 
                services économiques :
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Gift className="h-6 w-6 text-green-600 mr-2" />
                  Inclus dans votre location Tétouan
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Assurance responsabilité civile</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Kilométrage 200km/jour</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Assistance 24h/24 région Nord</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Livraison gratuite Tétouan</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">GPS avec cartes Rif</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Carburant de départ</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Nettoyage désinfection</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Guide destinations Nord</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Support multilingue</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Modification gratuite 1 fois</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Réservez Tétouan !</h3>
                <p className="mb-6 text-emerald-100">
                  Dès 175 DH/jour. Explorez la perle du Nord et les montagnes du Rif !
                </p>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-emerald-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Réserver Maintenant
                </Link>
              </div>

              {/* Tetouan Highlights */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights Tétouan</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <span className="text-gray-700">Médina UNESCO</span>
                    <span className="text-emerald-600 font-semibold">★★★★★</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Chefchaouen</span>
                    <span className="text-teal-600 font-semibold">65 km</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Cabo Negro</span>
                    <span className="text-cyan-600 font-semibold">15 km</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Ceuta (ESP)</span>
                    <span className="text-blue-600 font-semibold">40 km</span>
                  </div>
                </div>
              </div>

              {/* Vehicle Selector */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Véhicules Tétouan</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <span className="text-gray-700">Citadine</span>
                    <span className="text-emerald-600 font-semibold">175 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Familiale</span>
                    <span className="text-teal-600 font-semibold">220 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">SUV</span>
                    <span className="text-cyan-600 font-semibold">280 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Cabriolet</span>
                    <span className="text-blue-600 font-semibold">350 DH/j</span>
                  </div>
                </div>
              </div>

              {/* Weather Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Météo Tétouan</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Température</span>
                    <span className="text-lg text-emerald-600 font-semibold">18-25°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Saison idéale</span>
                    <span className="text-lg text-teal-600 font-semibold">Avr-Oct</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Pluies</span>
                    <span className="text-lg text-cyan-600 font-semibold">Nov-Mar</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-emerald-800 font-semibold">
                    ☀️ Climat méditerranéen doux toute l'année
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Tétouan</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">tetouan@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                    <span className="text-gray-700">Avenue Mohammed V, Tétouan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Questions fréquentes - Location Tétouan
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Puis-je aller en Espagne avec ma location Tétouan ?
              </h3>
              <p className="text-gray-600">
                Oui ! Avec autorisation préalable et assurance internationale. 
                Nous facilitons les formalités pour Ceuta et l'Espagne.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quel véhicule pour aller à Chefchaouen ?
              </h3>
              <p className="text-gray-600">
                SUV recommandé pour les routes de montagne. Citadine possible 
                mais SUV plus confortable et sécurisé pour le Rif.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Y a-t-il un service à l'aéroport de Tétouan ?
              </h3>
              <p className="text-gray-600">
                Oui ! Service 24h/24 à l'aéroport Sania Ramel. Accueil personnalisé 
                et suivi automatique des vols pour votre confort.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quelles sont les spécialités de Tétouan à découvrir ?
              </h3>
              <p className="text-gray-600">
                Médina UNESCO, artisanat andalou, École des Beaux-Arts, 
                musée archéologique. Proximité Chefchaouen et côte méditerranéenne.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}