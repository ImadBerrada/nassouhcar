import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, DollarSign, TrendingDown, Zap, Award, Calculator, Percent, Gift, CreditCard, Target, Coins, Mountain, Waves, Camera, Compass, Route, Building, Plane, Ship, Navigation, Timer, Luggage, Globe } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location Voiture Tétouan Aéroport 2025 - Service Express ✓ Dès 175 DH',
  description: 'Location voiture Tétouan aéroport ✓ Service express ✓ Accueil terminal ✓ Dès 175 DH/jour ✓ Suivi vols ✓ Assistance 24h ✓ Réservation simple.',
  keywords: 'location voiture tétouan aéroport, location voiture aéroport tétouan, car rental tetouan airport, location auto tétouan aéroport',
  openGraph: {
    title: 'Location Voiture Tétouan Aéroport 2025 - Service Express ✓ Dès 175 DH',
    description: 'Location voiture Tétouan aéroport ✓ Service express ✓ Accueil terminal ✓ Dès 175 DH/jour ✓ Suivi vols.',
    images: ['/tetouan-airport-car-rental.webp'],
  },
}

export default function LocationVoitureTetouanAeroportBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-sky-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Plane className="h-6 w-6 text-sky-400 mr-2" />
              <span className="text-sky-400 font-semibold text-lg">Aéroport Sania Ramel</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
              Location Voiture Tétouan Aéroport
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Service express à l'aéroport de Tétouan ! Accueil terminal, suivi vols, 
              véhicule prêt dès votre arrivée. Explorez le Nord marocain immédiatement !
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Mis à jour le 15 Janvier 2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>6 min de lecture</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>Aéroport</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Réserver Aéroport
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Airport Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service express aéroport Tétouan</h2>
            <p className="text-xl text-gray-600">Votre voiture vous attend dès l'atterrissage</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-sky-600 mb-2">5 min</div>
              <div className="text-gray-600 font-medium">Récupération express</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">24h/24</div>
              <div className="text-gray-600 font-medium">Service vols</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Suivi automatique</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">175 DH</div>
              <div className="text-gray-600 font-medium">Prix dès/jour</div>
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
                <Plane className="h-8 w-8 text-sky-600 mr-3" />
                Aéroport Tétouan Sania Ramel : Votre porte d'entrée
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                L'<strong>aéroport de Tétouan Sania Ramel</strong> est votre porte d'entrée 
                vers le Nord marocain. Avec notre service de <strong>location voiture Tétouan aéroport</strong>, 
                vous bénéficiez d'un accueil personnalisé et d'une récupération express 
                pour commencer immédiatement votre découverte de cette région exceptionnelle.
              </p>

              <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-sky-600 mr-2" />
                  Pourquoi choisir notre service aéroport ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Accueil terminal</strong> : Agent vous attend avec panneau nominatif</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Suivi vols</strong> : Adaptation automatique aux retards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Récupération 5 min</strong> : Formalités ultra-rapides</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Service 24h/24</strong> : Tous vols, même tardifs</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Navigation className="h-6 w-6 text-sky-600 mr-2" />
                Processus récupération aéroport
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre processus de <strong>location voiture Tétouan aéroport</strong> 
                est optimisé pour votre confort :
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-2 border-sky-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-sky-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Réservation & Confirmation</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="text-gray-600 space-y-2">
                          <li>• <strong>Réservation</strong> : En ligne ou téléphone</li>
                          <li>• <strong>Infos vol</strong> : Numéro, heure, compagnie</li>
                          <li>• <strong>Confirmation</strong> : SMS + email détaillé</li>
                        </ul>
                        <ul className="text-gray-600 space-y-2">
                          <li>• <strong>Contact agent</strong> : 24h avant arrivée</li>
                          <li>• <strong>Instructions</strong> : Point de rendez-vous</li>
                          <li>• <strong>Urgence</strong> : Numéro direct 24h/24</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Arrivée & Accueil</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="text-gray-600 space-y-2">
                          <li>• <strong>Suivi vol</strong> : Automatique temps réel</li>
                          <li>• <strong>Accueil terminal</strong> : Sortie bagages</li>
                          <li>• <strong>Panneau nominatif</strong> : Votre nom visible</li>
                        </ul>
                        <ul className="text-gray-600 space-y-2">
                          <li>• <strong>Agent dédié</strong> : Multilingue disponible</li>
                          <li>• <strong>Assistance bagages</strong> : Si nécessaire</li>
                          <li>• <strong>Transfert véhicule</strong> : Parking sécurisé</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Formalités Express</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="text-gray-600 space-y-2">
                          <li>• <strong>Documents</strong> : Permis + passeport/CIN</li>
                          <li>• <strong>Contrat</strong> : Pré-rempli, signature rapide</li>
                          <li>• <strong>Paiement</strong> : Carte, espèces, virement</li>
                        </ul>
                        <ul className="text-gray-600 space-y-2">
                          <li>• <strong>État véhicule</strong> : Inspection ensemble</li>
                          <li>• <strong>Remise clés</strong> : + documents bord</li>
                          <li>• <strong>Durée totale</strong> : 5 minutes maximum</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Départ & Assistance</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="text-gray-600 space-y-2">
                          <li>• <strong>Briefing</strong> : Routes, destinations, conseils</li>
                          <li>• <strong>GPS configuré</strong> : Destinations populaires</li>
                          <li>• <strong>Guide région</strong> : Tétouan et environs</li>
                        </ul>
                        <ul className="text-gray-600 space-y-2">
                          <li>• <strong>Contact 24h</strong> : Assistance permanente</li>
                          <li>• <strong>Retour flexible</strong> : Aéroport ou ville</li>
                          <li>• <strong>Suivi location</strong> : Support continu</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-sky-600 mr-2" />
                Flotte disponible aéroport Tétouan
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre flotte à l'<strong>aéroport de Tétouan</strong> est adaptée 
                à tous vos besoins de voyage :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-sky-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Car className="h-5 w-5 text-sky-600 mr-2" />
                    Économique (175-190 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Modèles</strong> : Clio, Logan, Sandero</li>
                    <li>• <strong>Idéal pour</strong> : Couple, city-trip</li>
                    <li>• <strong>Bagages</strong> : 2 valises cabine</li>
                    <li>• <strong>Consommation</strong> : 5-6L/100km</li>
                  </ul>
                  <div className="bg-sky-100 text-sky-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Disponible immédiatement
                  </div>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    Familiale (220-250 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Modèles</strong> : Scenic, Lodgy, C4 Picasso</li>
                    <li>• <strong>Idéal pour</strong> : Famille, groupe</li>
                    <li>• <strong>Bagages</strong> : 4-5 valises</li>
                    <li>• <strong>Confort</strong> : Climatisation, GPS</li>
                  </ul>
                  <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Confort famille
                  </div>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Mountain className="h-5 w-5 text-indigo-600 mr-2" />
                    SUV (280-320 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Modèles</strong> : Duster, Captur, Panda 4x4</li>
                    <li>• <strong>Idéal pour</strong> : Montagne, aventure</li>
                    <li>• <strong>Avantages</strong> : 4x4, garde au sol</li>
                    <li>• <strong>Destinations</strong> : Rif, Chefchaouen</li>
                  </ul>
                  <div className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Aventure montagne
                  </div>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-purple-600 mr-2" />
                    Premium (350-400 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Modèles</strong> : Passat, Accord, Cabriolets</li>
                    <li>• <strong>Idéal pour</strong> : Business, prestige</li>
                    <li>• <strong>Équipements</strong> : Cuir, GPS premium</li>
                    <li>• <strong>Service</strong> : Priorité, conciergerie</li>
                  </ul>
                  <div className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Luxe & prestige
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Route className="h-6 w-6 text-sky-600 mr-2" />
                Destinations depuis l'aéroport Tétouan
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Dès votre sortie de l'<strong>aéroport de Tétouan</strong>, 
                explorez les merveilles du Nord :
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-sky-50 to-blue-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Destination</th>
                      <th className="px-6 py-4 text-center font-semibold text-sky-600">Distance</th>
                      <th className="px-6 py-4 text-center font-semibold text-blue-600">Temps</th>
                      <th className="px-6 py-4 text-center font-semibold text-indigo-600">Route</th>
                      <th className="px-6 py-4 text-center font-semibold text-purple-600">Intérêt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Centre Tétouan</td>
                      <td className="px-6 py-4 text-center text-sky-600 font-semibold">5 km</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">10 min</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">Directe</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">★★★★★</td>
                    </tr>
                    <tr className="bg-sky-50 hover:bg-sky-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Martil (plage)</td>
                      <td className="px-6 py-4 text-center text-sky-600 font-semibold">15 km</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">20 min</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">Côtière</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">★★★☆☆</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Cabo Negro</td>
                      <td className="px-6 py-4 text-center text-sky-600 font-semibold">20 km</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">25 min</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">Panoramique</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">★★★★☆</td>
                    </tr>
                    <tr className="bg-sky-50 hover:bg-sky-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Chefchaouen</td>
                      <td className="px-6 py-4 text-center text-sky-600 font-semibold">70 km</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">1h20</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">Montagne</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">★★★★★</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Ceuta (ESP)</td>
                      <td className="px-6 py-4 text-center text-sky-600 font-semibold">45 km</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">50 min</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">Frontière</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">★★★★☆</td>
                    </tr>
                    <tr className="bg-sky-50 hover:bg-sky-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Tanger</td>
                      <td className="px-6 py-4 text-center text-sky-600 font-semibold">65 km</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">1h00</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">Autoroute</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">★★★★★</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Compass className="h-6 w-6 text-emerald-600 mr-2" />
                  Itinéraires recommandés depuis l'aéroport
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Premier jour (Découverte)</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Arrivée</strong> : Récupération véhicule (10 min)</li>
                      <li>• <strong>Centre Tétouan</strong> : Médina UNESCO (2h)</li>
                      <li>• <strong>Déjeuner</strong> : Restaurant traditionnel</li>
                      <li>• <strong>Martil</strong> : Détente plage (après-midi)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Excursion montagne</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Départ matinal</strong> : Aéroport → Chefchaouen</li>
                      <li>• <strong>Visite</strong> : Ville bleue, médina</li>
                      <li>• <strong>Randonnée</strong> : Cascades Akchour (optionnel)</li>
                      <li>• <strong>Retour</strong> : Via Ouezzane ou direct</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-sky-600 mr-2" />
                Services inclus aéroport Tétouan
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Votre <strong>location voiture Tétouan aéroport</strong> inclut 
                tous nos services premium :
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Gift className="h-6 w-6 text-green-600 mr-2" />
                  Inclus dans votre service aéroport
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Accueil personnalisé terminal</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Suivi automatique des vols</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Attente gratuite 1 heure</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Formalités express 5 min</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">GPS configuré destinations</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Guide région Nord offert</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Assistance 24h/24 région</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Carburant de départ inclus</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Retour flexible (aéroport/ville)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Support multilingue</span>
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
              <div className="bg-gradient-to-br from-sky-600 to-blue-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Service Express !</h3>
                <p className="mb-6 text-sky-100">
                  Accueil terminal, récupération 5 min, départ immédiat vers vos destinations !
                </p>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-sky-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Réserver Aéroport
                </Link>
              </div>

              {/* Flight Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Infos Aéroport</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
                    <span className="text-gray-700">Code IATA</span>
                    <span className="text-sky-600 font-semibold">TTU</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Distance centre</span>
                    <span className="text-blue-600 font-semibold">5 km</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Temps trajet</span>
                    <span className="text-indigo-600 font-semibold">10 min</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Service</span>
                    <span className="text-purple-600 font-semibold">24h/24</span>
                  </div>
                </div>
              </div>

              {/* Quick Destinations */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Destinations Express</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
                    <span className="text-gray-700">Tétouan centre</span>
                    <span className="text-sky-600 font-semibold">10 min</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Martil plage</span>
                    <span className="text-blue-600 font-semibold">20 min</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Chefchaouen</span>
                    <span className="text-indigo-600 font-semibold">1h20</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Tanger</span>
                    <span className="text-purple-600 font-semibold">1h00</span>
                  </div>
                </div>
              </div>

              {/* Vehicle Quick Select */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Véhicules Aéroport</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
                    <span className="text-gray-700">Économique</span>
                    <span className="text-sky-600 font-semibold">175 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Familiale</span>
                    <span className="text-blue-600 font-semibold">220 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">SUV</span>
                    <span className="text-indigo-600 font-semibold">280 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Premium</span>
                    <span className="text-purple-600 font-semibold">350 DH/j</span>
                  </div>
                </div>
              </div>

              {/* Contact Airport */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Aéroport</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-sky-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-sky-600 mr-3" />
                    <span className="text-gray-700">aeroport@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <Plane className="h-5 w-5 text-sky-600 mr-3 mt-1" />
                    <span className="text-gray-700">Terminal Arrivées Sania Ramel</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-sky-50 rounded-lg">
                  <p className="text-sm text-sky-800 font-semibold">
                    ✈️ Service 24h/24 tous vols
                  </p>
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
            Questions fréquentes - Aéroport Tétouan
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Que faire si mon vol a du retard ?
              </h3>
              <p className="text-gray-600">
                Aucun souci ! Notre système suit automatiquement votre vol. 
                Notre agent s'adapte et vous attend, même pour les vols très tardifs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Où exactement récupérer la voiture ?
              </h3>
              <p className="text-gray-600">
                Sortie bagages du terminal. Notre agent vous attend avec un panneau 
                à votre nom. Parking sécurisé à 2 minutes à pied.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Puis-je rendre la voiture à l'aéroport ?
              </h3>
              <p className="text-gray-600">
                Oui ! Retour possible à l'aéroport ou en centre-ville Tétouan. 
                Prévenez-nous 2h avant pour organiser la récupération.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Y a-t-il des frais supplémentaires aéroport ?
              </h3>
              <p className="text-gray-600">
                Aucun frais caché ! Le service aéroport est inclus dans nos tarifs. 
                Accueil, attente et formalités express sans supplément.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}