import type { Metadata } from 'next'
import { MapPin, Clock, ArrowRight, Phone, Mail, Calendar, Tag, CheckCircle, Settings, Zap, Car, Gauge, Wrench, Battery, Route, Navigation } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Location Auto Tanger 2025 ✓ Véhicules Automatiques dès 200 DH/jour',
  description: 'Location auto Tanger ✓ Véhicules automatiques récents ✓ Dès 200 DH/jour ✓ Boîte automatique ✓ Conduite facile ✓ Flotte moderne ✓ Service premium.',
  keywords: 'location auto tanger, location voiture automatique tanger, auto tanger, voiture automatique tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/location-auto-tanger'
  },
  openGraph: {
    title: 'Location Auto Tanger 2025 ✓ Véhicules Automatiques dès 200 DH/jour',
    description: 'Location auto Tanger ✓ Véhicules automatiques récents ✓ Dès 200 DH/jour ✓ Boîte automatique.',
    images: ['/tanger-automatic-cars-rental.webp'],
  },
}

export default function LocationAutoTangerBlog() {
  return (
    <>
      <StructuredData type="Article" countryTarget="MA" language="fr" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Settings className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold text-lg">Boîte Automatique</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Location Auto Tanger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Découvrez notre flotte de véhicules automatiques à Tanger. 
              Conduite facile, confort optimal, prix attractifs dès 200 DH/jour !
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
                <span>Automatique</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Voir les Autos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Auto Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos véhicules automatiques</h2>
            <p className="text-xl text-gray-600">Conduite simplifiée à Tanger</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">80+</div>
              <div className="text-gray-600 font-medium">Autos disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">200 DH</div>
              <div className="text-gray-600 font-medium">Prix dès/jour</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Boîte automatique</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-pink-600 mb-2">24h/24</div>
              <div className="text-gray-600 font-medium">Service disponible</div>
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
                <Settings className="h-8 w-8 text-blue-600 mr-3" />
                Location auto Tanger : La conduite simplifiée
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                La <strong>location auto Tanger</strong> avec Nassoh Car vous offre 
                le confort de la conduite automatique dans la perle du détroit. 
                Notre flotte de plus de 80 véhicules automatiques récents vous garantit 
                une expérience de conduite fluide et sans stress à Tanger.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-2" />
                  Pourquoi choisir une auto à Tanger ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Conduite facile</strong> : Idéal pour les embouteillages de Tanger</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Moins de fatigue</strong> : Parfait pour les longs trajets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Sécurité renforcée</strong> : Concentration sur la route</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Confort optimal</strong> : Conduite détendue</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-blue-600 mr-2" />
                Notre flotte d'autos à Tanger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Découvrez notre sélection de <strong>véhicules automatiques à Tanger</strong>, 
                adaptés à tous vos besoins :
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Citadines Automatiques (200-220 DH/jour)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Modèles disponibles</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Renault Clio Automatique</strong> : CVT moderne</li>
                            <li>• <strong>Peugeot 208 Auto</strong> : Boîte EAT6</li>
                            <li>• <strong>Citroën C3 Auto</strong> : Confort urbain</li>
                            <li>• <strong>Nissan Micra CVT</strong> : Technologie japonaise</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Avantages</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Parking facile</strong> : Taille compacte</li>
                            <li>• <strong>Économique</strong> : Consommation réduite</li>
                            <li>• <strong>Maniable</strong> : Parfait centre-ville</li>
                            <li>• <strong>Moderne</strong> : Équipements récents</li>
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
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Berlines Automatiques (250-300 DH/jour)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Modèles disponibles</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Renault Mégane Auto</strong> : EDC 7 rapports</li>
                            <li>• <strong>Peugeot 308 EAT8</strong> : Boîte 8 vitesses</li>
                            <li>• <strong>Volkswagen Golf DSG</strong> : Double embrayage</li>
                            <li>• <strong>Toyota Corolla CVT</strong> : Hybride disponible</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Caractéristiques</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Confort</strong> : Sièges ergonomiques</li>
                            <li>• <strong>Espace</strong> : 5 passagers confortables</li>
                            <li>• <strong>Coffre</strong> : Bagages généreux</li>
                            <li>• <strong>Équipements</strong> : GPS, climatisation auto</li>
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
                      <h4 className="font-bold text-xl text-gray-900 mb-3">SUV Automatiques (320-380 DH/jour)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Modèles disponibles</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Renault Captur CVT</strong> : SUV urbain</li>
                            <li>• <strong>Peugeot 3008 EAT8</strong> : SUV premium</li>
                            <li>• <strong>Nissan Qashqai CVT</strong> : Référence segment</li>
                            <li>• <strong>Dacia Duster Auto</strong> : 4x4 automatique</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Destinations idéales</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Chefchaouen</strong> : Routes montagneuses</li>
                            <li>• <strong>Côte atlantique</strong> : Longs trajets</li>
                            <li>• <strong>Casablanca</strong> : Autoroute A1</li>
                            <li>• <strong>Rabat</strong> : Confort autoroutier</li>
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
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Premium Automatiques (400-500 DH/jour)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Modèles disponibles</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>BMW Série 3 Steptronic</strong> : Boîte 8 vitesses</li>
                            <li>• <strong>Mercedes Classe C 9G-Tronic</strong> : 9 rapports</li>
                            <li>• <strong>Audi A4 S-Tronic</strong> : Double embrayage</li>
                            <li>• <strong>Volvo XC60 Geartronic</strong> : SUV premium</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Services VIP</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Livraison VIP</strong> : Où vous voulez</li>
                            <li>• <strong>Conciergerie</strong> : Service personnalisé</li>
                            <li>• <strong>Assistance premium</strong> : Dédiée 24h/24</li>
                            <li>• <strong>Véhicule de courtoisie</strong> : En cas de panne</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Gauge className="h-6 w-6 text-blue-600 mr-2" />
                Types de boîtes automatiques
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre flotte <strong>location auto Tanger</strong> propose 
                différentes technologies de transmission automatique :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center">
                    <Settings className="h-6 w-6 text-blue-600 mr-2" />
                    CVT (Variation Continue)
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Principe</strong> : Transmission à variation continue</li>
                    <li>• <strong>Avantages</strong> : Douceur, économie carburant</li>
                    <li>• <strong>Marques</strong> : Nissan, Renault, Toyota</li>
                    <li>• <strong>Idéal pour</strong> : Conduite urbaine, économie</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center">
                    <Wrench className="h-6 w-6 text-indigo-600 mr-2" />
                    EAT (Efficient Automatic Transmission)
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Principe</strong> : Boîte automatique classique optimisée</li>
                    <li>• <strong>Avantages</strong> : Fiabilité, performances</li>
                    <li>• <strong>Marques</strong> : Peugeot, Citroën (6, 8 vitesses)</li>
                    <li>• <strong>Idéal pour</strong> : Polyvalence, confort</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center">
                    <Zap className="h-6 w-6 text-purple-600 mr-2" />
                    DSG/EDC (Double Embrayage)
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Principe</strong> : Double embrayage robotisé</li>
                    <li>• <strong>Avantages</strong> : Rapidité, sportivité</li>
                    <li>• <strong>Marques</strong> : Volkswagen, Renault, Audi</li>
                    <li>• <strong>Idéal pour</strong> : Conduite dynamique</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center">
                    <Battery className="h-6 w-6 text-pink-600 mr-2" />
                    Hybride Automatique
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Principe</strong> : Moteur essence + électrique</li>
                    <li>• <strong>Avantages</strong> : Écologie, économie</li>
                    <li>• <strong>Marques</strong> : Toyota, Lexus, Honda</li>
                    <li>• <strong>Idéal pour</strong> : Environnement, ville</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Route className="h-6 w-6 text-blue-600 mr-2" />
                Conseils conduite automatique à Tanger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Optimisez votre expérience de <strong>location auto Tanger</strong> 
                avec nos conseils pratiques :
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Navigation className="h-6 w-6 text-green-600 mr-2" />
                  Guide de conduite automatique
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Démarrage et arrêt</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Position P</strong> : Toujours à l'arrêt</li>
                      <li>• <strong>Frein à main</strong> : Engager systématiquement</li>
                      <li>• <strong>Pied gauche</strong> : Ne jamais utiliser</li>
                      <li>• <strong>Démarrage</strong> : Position P ou N uniquement</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Conduite en ville</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Mode D</strong> : Position normale</li>
                      <li>• <strong>Embouteillages</strong> : Laisser faire la boîte</li>
                      <li>• <strong>Côtes</strong> : Mode S si disponible</li>
                      <li>• <strong>Parking</strong> : Position P obligatoire</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Position</th>
                      <th className="px-6 py-4 text-center font-semibold text-blue-600">Utilisation</th>
                      <th className="px-6 py-4 text-center font-semibold text-indigo-600">Quand l'utiliser</th>
                      <th className="px-6 py-4 text-center font-semibold text-purple-600">Conseil</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">P (Park)</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">Stationnement</td>
                      <td className="px-6 py-4 text-center text-indigo-600">Arrêt complet</td>
                      <td className="px-6 py-4 text-center text-purple-600">Toujours + frein à main</td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-100">
                      <td className="px-6 py-4 font-medium text-gray-900">R (Reverse)</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">Marche arrière</td>
                      <td className="px-6 py-4 text-center text-indigo-600">Manœuvres</td>
                      <td className="px-6 py-4 text-center text-purple-600">Vitesse réduite</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">N (Neutral)</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">Point mort</td>
                      <td className="px-6 py-4 text-center text-indigo-600">Remorquage</td>
                      <td className="px-6 py-4 text-center text-purple-600">Éviter en conduite</td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-100">
                      <td className="px-6 py-4 font-medium text-gray-900">D (Drive)</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">Conduite normale</td>
                      <td className="px-6 py-4 text-center text-indigo-600">Toutes situations</td>
                      <td className="px-6 py-4 text-center text-purple-600">Position principale</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">S (Sport)</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">Mode sportif</td>
                      <td className="px-6 py-4 text-center text-indigo-600">Dépassements</td>
                      <td className="px-6 py-4 text-center text-purple-600">Consommation +</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Réservez une Auto !</h3>
                <p className="mb-6 text-blue-100">
                  80+ véhicules automatiques, conduite facile, prix attractifs dès 200 DH/jour !
                </p>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Voir les Autos
                </Link>
              </div>

              {/* Auto Categories */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Catégories Auto</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Citadine Auto</span>
                    <span className="text-blue-600 font-semibold">200 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Berline Auto</span>
                    <span className="text-indigo-600 font-semibold">250 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">SUV Auto</span>
                    <span className="text-purple-600 font-semibold">320 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Premium Auto</span>
                    <span className="text-pink-600 font-semibold">400 DH/j</span>
                  </div>
                </div>
              </div>

              {/* Transmission Types */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Types de Boîtes</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Settings className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">CVT</span>
                  </div>
                  <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                    <Wrench className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">EAT6/EAT8</span>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <Zap className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">DSG/EDC</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <Battery className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Hybride</span>
                  </div>
                </div>
              </div>

              {/* Advantages */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Avantages Auto</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Conduite facile</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Moins de fatigue</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Sécurité renforcée</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Confort optimal</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Auto</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">auto@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">Boulevard Mohammed VI, Tanger</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 font-semibold">
                    ⚙️ Spécialiste boîtes automatiques
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
            FAQ - Location auto Tanger
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quelle différence entre CVT et EAT ?
              </h3>
              <p className="text-gray-600">
                CVT = variation continue, plus doux et économique. EAT = boîte classique optimisée, 
                plus de sensations. Les deux sont fiables et adaptés à Tanger.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Puis-je conduire une auto sans expérience ?
              </h3>
              <p className="text-gray-600">
                Oui ! C'est même plus facile qu'une manuelle. Briefing inclus à la remise, 
                conseils personnalisés selon votre niveau. Idéal pour débuter.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Les autos consomment-elles plus ?
              </h3>
              <p className="text-gray-600">
                Non ! Les boîtes modernes (CVT, EAT8) sont même plus économiques que les manuelles. 
                Optimisation électronique, conduite fluide = économies carburant.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Supplément pour boîte automatique ?
              </h3>
              <p className="text-gray-600">
                Prix transparents dès 200 DH/jour, automatique inclus. Pas de supplément caché, 
                tarif global avec assurance, GPS et assistance 24h/24.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}