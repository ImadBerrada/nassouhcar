import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, DollarSign, TrendingDown, Zap, Award, Calculator, Percent, Gift, CreditCard, Target, Coins, Mountain, Waves, Camera, Compass, Route, Building, Key, Settings, Fuel, Navigation, Timer, Luggage, Globe } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Voiture de Location à Tétouan 2025 ✓ Flotte Premium dès 175 DH',
  description: 'Voiture de location à Tétouan ✓ Flotte premium récente ✓ Dès 175 DH/jour ✓ Service 24h/24 ✓ Livraison gratuite ✓ Assurance incluse ✓ Réservation simple.',
  keywords: 'voiture de location tétouan, voiture location tétouan, car rental tetouan, location auto tétouan',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/voiture-de-location-a-tetouan'
  },
  openGraph: {
    title: 'Voiture de Location à Tétouan 2025 ✓ Flotte Premium dès 175 DH',
    description: 'Voiture de location à Tétouan ✓ Flotte premium récente ✓ Dès 175 DH/jour ✓ Service 24h/24.',
    images: ['/tetouan-car-rental-fleet.webp'],
  },
}

export default function VoitureLocationTetouanBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Car className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold text-lg">Flotte Premium</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Voiture de Location à Tétouan
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Découvrez notre flotte premium de voitures de location à Tétouan. 
              Véhicules récents, service 24h/24, prix transparents dès 175 DH/jour !
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
                <span>Flotte</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Découvrir la Flotte
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Fleet Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre flotte à Tétouan</h2>
            <p className="text-xl text-gray-600">Des véhicules pour tous vos besoins</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Véhicules disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">2024</div>
              <div className="text-gray-600 font-medium">Modèles récents</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">24h/24</div>
              <div className="text-gray-600 font-medium">Service disponible</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-pink-600 mb-2">175 DH</div>
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
                <Car className="h-8 w-8 text-blue-600 mr-3" />
                Voiture de location à Tétouan : Notre expertise
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Choisir une <strong>voiture de location à Tétouan</strong> avec Nassoh Car, 
                c'est opter pour l'excellence et la tranquillité d'esprit. Notre flotte 
                premium de plus de 50 véhicules récents vous garantit le véhicule parfait 
                pour découvrir Tétouan et le magnifique Nord marocain.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  Pourquoi choisir notre flotte ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Véhicules récents</strong> : Flotte 2020-2024, entretien rigoureux</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Diversité complète</strong> : Économique, familiale, SUV, premium</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Équipements modernes</strong> : Climatisation, GPS, Bluetooth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Sécurité maximale</strong> : Contrôles techniques à jour</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Settings className="h-6 w-6 text-blue-600 mr-2" />
                Catégories de voitures disponibles
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre <strong>flotte de voitures de location à Tétouan</strong> 
                couvre tous vos besoins de mobilité :
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Économique (175-190 DH/jour)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Modèles disponibles</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Renault Clio</strong> : Citadine parfaite</li>
                            <li>• <strong>Dacia Logan</strong> : Spacieuse et économique</li>
                            <li>• <strong>Dacia Sandero</strong> : Moderne et fiable</li>
                            <li>• <strong>Peugeot 208</strong> : Confort et style</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Caractéristiques</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Passagers</strong> : 4-5 personnes</li>
                            <li>• <strong>Bagages</strong> : 2-3 valises</li>
                            <li>• <strong>Consommation</strong> : 5-6L/100km</li>
                            <li>• <strong>Idéal pour</strong> : Couple, city-trip</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Compacte (200-220 DH/jour)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Modèles disponibles</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Renault Mégane</strong> : Confort supérieur</li>
                            <li>• <strong>Peugeot 308</strong> : Technologie avancée</li>
                            <li>• <strong>Citroën C4</strong> : Design moderne</li>
                            <li>• <strong>Volkswagen Golf</strong> : Référence qualité</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Avantages</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Confort</strong> : Sièges ergonomiques</li>
                            <li>• <strong>Équipements</strong> : GPS, Bluetooth</li>
                            <li>• <strong>Sécurité</strong> : Airbags multiples</li>
                            <li>• <strong>Performance</strong> : Moteurs efficaces</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Familiale (240-280 DH/jour)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Modèles disponibles</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Renault Scenic</strong> : Monospace compact</li>
                            <li>• <strong>Dacia Lodgy</strong> : 7 places économique</li>
                            <li>• <strong>Citroën C4 Picasso</strong> : Espace modulable</li>
                            <li>• <strong>Peugeot 5008</strong> : SUV 7 places</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Spécificités</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Capacité</strong> : 5-7 passagers</li>
                            <li>• <strong>Bagages</strong> : Coffre XXL</li>
                            <li>• <strong>Confort</strong> : Climatisation arrière</li>
                            <li>• <strong>Sécurité</strong> : Systèmes avancés</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">SUV & 4x4 (300-350 DH/jour)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Modèles disponibles</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Dacia Duster</strong> : 4x4 robuste</li>
                            <li>• <strong>Renault Captur</strong> : SUV urbain</li>
                            <li>• <strong>Peugeot 3008</strong> : SUV premium</li>
                            <li>• <strong>Fiat Panda 4x4</strong> : Montagne</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Destinations idéales</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Chefchaouen</strong> : Routes montagneuses</li>
                            <li>• <strong>Rif marocain</strong> : Pistes rurales</li>
                            <li>• <strong>Plages sauvages</strong> : Accès difficile</li>
                            <li>• <strong>Aventure</strong> : Tout-terrain</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Premium & Luxe (400-500 DH/jour)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Modèles disponibles</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>BMW Série 3</strong> : Berline premium</li>
                            <li>• <strong>Mercedes Classe C</strong> : Luxe allemand</li>
                            <li>• <strong>Audi A4</strong> : Technologie avancée</li>
                            <li>• <strong>Cabriolets</strong> : Plaisir de conduite</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Services inclus</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Conciergerie</strong> : Service personnalisé</li>
                            <li>• <strong>Livraison VIP</strong> : Où vous voulez</li>
                            <li>• <strong>Priorité</strong> : Réservation garantie</li>
                            <li>• <strong>Assistance</strong> : Dédiée 24h/24</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                Services inclus avec votre voiture
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Chaque <strong>voiture de location à Tétouan</strong> inclut 
                nos services premium sans supplément :
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Gift className="h-6 w-6 text-green-600 mr-2" />
                  Inclus dans toutes nos locations
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Assurance tous risques complète</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Kilométrage illimité au Maroc</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">GPS navigation gratuit</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Assistance 24h/24 - 7j/7</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Livraison gratuite Tétouan</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Carburant de départ inclus</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Nettoyage intérieur/extérieur</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Contrôles techniques à jour</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Support multilingue</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Flexibilité horaires retour</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Route className="h-6 w-6 text-blue-600 mr-2" />
                Destinations recommandées depuis Tétouan
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Avec votre <strong>voiture de location à Tétouan</strong>, 
                explorez les merveilles du Nord marocain :
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Destination</th>
                      <th className="px-6 py-4 text-center font-semibold text-blue-600">Distance</th>
                      <th className="px-6 py-4 text-center font-semibold text-indigo-600">Temps</th>
                      <th className="px-6 py-4 text-center font-semibold text-purple-600">Véhicule recommandé</th>
                      <th className="px-6 py-4 text-center font-semibold text-pink-600">Intérêt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Chefchaouen</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">70 km</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">1h20</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">Compacte+</td>
                      <td className="px-6 py-4 text-center text-pink-600 font-semibold">★★★★★</td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Martil (plage)</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">15 km</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">20 min</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">Économique</td>
                      <td className="px-6 py-4 text-center text-pink-600 font-semibold">★★★★☆</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Cabo Negro</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">20 km</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">25 min</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">Cabriolet</td>
                      <td className="px-6 py-4 text-center text-pink-600 font-semibold">★★★★☆</td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Tanger</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">65 km</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">1h00</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">Tout type</td>
                      <td className="px-6 py-4 text-center text-pink-600 font-semibold">★★★★★</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Ceuta (ESP)</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">45 km</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">50 min</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">Compacte</td>
                      <td className="px-6 py-4 text-center text-pink-600 font-semibold">★★★★☆</td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Ouezzane</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">85 km</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">1h30</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">SUV</td>
                      <td className="px-6 py-4 text-center text-pink-600 font-semibold">★★★☆☆</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Compass className="h-6 w-6 text-cyan-600 mr-2" />
                  Circuits recommandés avec votre voiture
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Circuit Montagne (2-3 jours)</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Jour 1</strong> : Tétouan → Chefchaouen (nuit)</li>
                      <li>• <strong>Jour 2</strong> : Chefchaouen → Cascades Akchour</li>
                      <li>• <strong>Jour 3</strong> : Retour via Ouezzane</li>
                      <li>• <strong>Véhicule</strong> : SUV ou Compacte robuste</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Circuit Côtier (1-2 jours)</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Matin</strong> : Tétouan → Martil (plage)</li>
                      <li>• <strong>Midi</strong> : Cabo Negro (déjeuner vue mer)</li>
                      <li>• <strong>Après-midi</strong> : M'diq → Fnideq</li>
                      <li>• <strong>Véhicule</strong> : Cabriolet ou Économique</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Key className="h-6 w-6 text-blue-600 mr-2" />
                Processus de location simplifié
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Louer une <strong>voiture à Tétouan</strong> avec nous 
                est simple et rapide :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Réservation
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>En ligne</strong> : Site web 24h/24</li>
                    <li>• <strong>Téléphone</strong> : +212 631-630013</li>
                    <li>• <strong>WhatsApp</strong> : Réponse immédiate</li>
                    <li>• <strong>Sur place</strong> : Agences Tétouan</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Documents
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Permis de conduire</strong> : Valide</li>
                    <li>• <strong>Pièce d'identité</strong> : CIN ou passeport</li>
                    <li>• <strong>Carte bancaire</strong> : Pour caution</li>
                    <li>• <strong>Âge minimum</strong> : 21 ans</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                    Récupération
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Livraison gratuite</strong> : Hôtel, aéroport</li>
                    <li>• <strong>Agences</strong> : Centre-ville, aéroport</li>
                    <li>• <strong>Inspection</strong> : État véhicule ensemble</li>
                    <li>• <strong>Briefing</strong> : Fonctionnement, routes</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                    Retour
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Flexible</strong> : Même lieu ou différent</li>
                    <li>• <strong>Horaires</strong> : Adaptation possible</li>
                    <li>• <strong>État final</strong> : Vérification rapide</li>
                    <li>• <strong>Caution</strong> : Déblocage immédiat</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Réservez Maintenant !</h3>
                <p className="mb-6 text-blue-100">
                  Plus de 50 véhicules disponibles, prix transparents, service premium inclus !
                </p>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Voir la Flotte
                </Link>
              </div>

              {/* Fleet Categories */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Catégories Disponibles</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Économique</span>
                    <span className="text-blue-600 font-semibold">175 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Compacte</span>
                    <span className="text-indigo-600 font-semibold">200 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Familiale</span>
                    <span className="text-purple-600 font-semibold">240 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">SUV</span>
                    <span className="text-pink-600 font-semibold">300 DH/j</span>
                  </div>
                </div>
              </div>

              {/* Popular Models */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Modèles Populaires</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Renault Clio</span>
                    <span className="text-blue-600 font-semibold">★★★★★</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Dacia Duster</span>
                    <span className="text-indigo-600 font-semibold">★★★★☆</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Peugeot 308</span>
                    <span className="text-purple-600 font-semibold">★★★★★</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">BMW Série 3</span>
                    <span className="text-pink-600 font-semibold">★★★★★</span>
                  </div>
                </div>
              </div>

              {/* Services Included */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Services Inclus</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Assurance complète</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Kilométrage illimité</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">GPS gratuit</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Assistance 24h/24</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Tétouan</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">tetouan@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">Avenue Mohammed V, Tétouan</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 font-semibold">
                    🚗 Livraison gratuite Tétouan
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
            Questions fréquentes - Voiture de location Tétouan
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quelle voiture choisir pour Tétouan ?
              </h3>
              <p className="text-gray-600">
                Pour la ville : économique ou compacte. Pour Chefchaouen : SUV recommandé. 
                Pour la côte : cabriolet idéal. Notre équipe vous conseille selon vos destinations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Puis-je récupérer à l'aéroport de Tétouan ?
              </h3>
              <p className="text-gray-600">
                Oui ! Service aéroport 24h/24 avec accueil personnalisé. Votre véhicule 
                vous attend dès l'atterrissage, formalités express en 5 minutes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quels sont les tarifs réels ?
              </h3>
              <p className="text-gray-600">
                Prix transparents dès 175 DH/jour tout inclus : assurance, GPS, kilométrage 
                illimité, assistance. Aucun frais caché, devis détaillé avant réservation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Puis-je conduire vers l'Espagne ?
              </h3>
              <p className="text-gray-600">
                Oui, avec autorisation préalable pour Ceuta/Melilla. Documents spéciaux 
                requis. Nous nous occupons des formalités pour votre tranquillité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}