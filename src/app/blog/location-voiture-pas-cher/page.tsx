import type { Metadata } from 'next'
import { MapPin, Clock, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Zap, Award, Percent, Gift, Target, Globe, Search, Filter } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location Voiture Pas Cher 2025 - Comparateur Prix Maroc dès 170 DH',
  description: 'Location voiture pas cher au Maroc ✓ Comparateur prix dès 170 DH/jour ✓ Toutes villes ✓ Meilleurs tarifs ✓ Service premium ✓ Réservation simple.',
  keywords: 'location voiture pas cher, location pas cher maroc, voiture pas cher maroc, location économique maroc',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/location-voiture-pas-cher'
  },
  openGraph: {
    title: 'Location Voiture Pas Cher 2025 - Comparateur Prix Maroc dès 170 DH',
    description: 'Location voiture pas cher au Maroc ✓ Comparateur prix dès 170 DH/jour ✓ Toutes villes ✓ Meilleurs tarifs.',
    images: ['/cheap-car-rental-morocco.webp'],
  },
}

export default function LocationVoiturePasCherBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold text-lg">Maroc Entier</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Location Voiture Pas Cher
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Location voiture pas cher dans tout le Maroc dès 170 DH/jour ! 
              Comparateur prix, toutes villes, service premium. Votre mobilité économique !
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Mis à jour le 15 Janvier 2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>8 min de lecture</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>National</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Comparer Prix
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* National Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leader location pas cher Maroc</h2>
            <p className="text-xl text-gray-600">Location voiture pas cher dans toutes les villes marocaines</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">170 DH</div>
              <div className="text-gray-600 font-medium">Prix mini national</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Villes couvertes</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">70%</div>
              <div className="text-gray-600 font-medium">Moins cher marché</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-pink-600 mb-2">24h/24</div>
              <div className="text-gray-600 font-medium">Service national</div>
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
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                Location voiture pas cher : Révolution mobilité Maroc
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Vous cherchez une <strong>location voiture pas cher</strong> au Maroc ? 
                Nassoh Car révolutionne le marché avec des tarifs à partir de 
                <strong>170 DH par jour</strong> dans toutes les villes marocaines. 
                Notre <strong>location pas cher Maroc</strong> vous garantit la mobilité 
                économique sans compromis sur la qualité !
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  Pourquoi choisir notre location pas cher ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Couverture nationale</strong> : 15+ villes, même service partout</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Prix transparents</strong> : Aucun frais caché, tout inclus</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Flotte moderne</strong> : Véhicules récents, bien entretenus</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Service premium</strong> : Assistance 24h, livraison gratuite</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Search className="h-6 w-6 text-blue-600 mr-2" />
                Comparateur prix par ville
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Découvrez nos tarifs pour une <strong>location voiture pas cher</strong> 
                dans les principales villes du Maroc :
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Ville</th>
                      <th className="px-6 py-4 text-center font-semibold text-blue-600">Économique</th>
                      <th className="px-6 py-4 text-center font-semibold text-indigo-600">Compacte</th>
                      <th className="px-6 py-4 text-center font-semibold text-purple-600">Berline</th>
                      <th className="px-6 py-4 text-center font-semibold text-pink-600">Disponibilité</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Tanger</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-bold">170 DH</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">190 DH</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">230 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ 24h/24</td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Casablanca</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-bold">180 DH</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">200 DH</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">240 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ 24h/24</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Rabat</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-bold">175 DH</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">195 DH</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">235 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ 24h/24</td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Marrakech</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-bold">185 DH</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">205 DH</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">245 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ 24h/24</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Fès</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-bold">175 DH</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">195 DH</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">235 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ 24h/24</td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Agadir</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-bold">180 DH</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">200 DH</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">240 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ 24h/24</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Gift className="h-6 w-6 text-green-600 mr-2" />
                  Inclus dans tous nos tarifs pas cher !
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
                      <span className="text-gray-700">Assistance nationale 24h/24</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Livraison gratuite centre-ville</span>
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
                      <span className="text-gray-700">Modification 1 fois gratuite</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Annulation flexible</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Filter className="h-6 w-6 text-blue-600 mr-2" />
                Guide choix véhicule pas cher
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Comment choisir le bon véhicule pour votre <strong>location voiture pas cher</strong> 
                selon vos besoins :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Car className="h-5 w-5 text-blue-600 mr-2" />
                    Économique (170-185 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Idéal pour</strong> : Ville, courts trajets</li>
                    <li>• <strong>Passagers</strong> : 2-4 personnes</li>
                    <li>• <strong>Bagages</strong> : 1-2 valises</li>
                    <li>• <strong>Consommation</strong> : 5-6L/100km</li>
                  </ul>
                  <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Maximum économies
                  </div>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-indigo-600 mr-2" />
                    Compacte (190-205 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Idéal pour</strong> : Famille, confort</li>
                    <li>• <strong>Passagers</strong> : 4-5 personnes</li>
                    <li>• <strong>Bagages</strong> : 2-3 valises</li>
                    <li>• <strong>Consommation</strong> : 6-7L/100km</li>
                  </ul>
                  <div className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Bon compromis
                  </div>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-purple-600 mr-2" />
                    Berline (230-245 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Idéal pour</strong> : Business, longs trajets</li>
                    <li>• <strong>Passagers</strong> : 4-5 personnes</li>
                    <li>• <strong>Bagages</strong> : 3-4 valises</li>
                    <li>• <strong>Consommation</strong> : 7-8L/100km</li>
                  </ul>
                  <div className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Confort premium
                  </div>
                </div>

                <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Zap className="h-5 w-5 text-pink-600 mr-2" />
                    SUV (290-320 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Idéal pour</strong> : Aventure, montagne</li>
                    <li>• <strong>Passagers</strong> : 5-7 personnes</li>
                    <li>• <strong>Bagages</strong> : 4-5 valises</li>
                    <li>• <strong>Consommation</strong> : 8-10L/100km</li>
                  </ul>
                  <div className="bg-pink-100 text-pink-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Polyvalence max
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Percent className="h-6 w-6 text-blue-600 mr-2" />
                Astuces pour économiser encore plus
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Maximisez vos économies pour une <strong>location voiture pas cher</strong> 
                avec nos conseils d'experts :
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Stratégies d'économies</h4>
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Réservez à l'avance</h5>
                      <p className="text-gray-600 text-sm">30 jours avant : -15% | 15 jours avant : -10% | 7 jours avant : -5%</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Choisissez la bonne période</h5>
                      <p className="text-gray-600 text-sm">Basse saison (Nov-Fév) : -25% | Jours semaine : -10% vs week-end</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Optez pour la longue durée</h5>
                      <p className="text-gray-600 text-sm">7+ jours : -10% | 14+ jours : -18% | 30+ jours : -30%</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Profitez des promotions</h5>
                      <p className="text-gray-600 text-sm">Offres flash, véhicule surprise, parrainage, fidélité</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Globe className="h-6 w-6 text-blue-600 mr-2" />
                Couverture nationale Maroc
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre réseau <strong>location voiture pas cher</strong> couvre 
                tout le territoire marocain :
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-lg text-gray-900 mb-4">Nord Maroc</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Tanger</strong> : Dès 170 DH/j</li>
                    <li>• <strong>Tétouan</strong> : Dès 175 DH/j</li>
                    <li>• <strong>Al Hoceima</strong> : Dès 180 DH/j</li>
                    <li>• <strong>Chefchaouen</strong> : Dès 185 DH/j</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-lg text-gray-900 mb-4">Centre Maroc</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Casablanca</strong> : Dès 180 DH/j</li>
                    <li>• <strong>Rabat</strong> : Dès 175 DH/j</li>
                    <li>• <strong>Fès</strong> : Dès 175 DH/j</li>
                    <li>• <strong>Meknès</strong> : Dès 180 DH/j</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-lg text-gray-900 mb-4">Sud Maroc</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Marrakech</strong> : Dès 185 DH/j</li>
                    <li>• <strong>Agadir</strong> : Dès 180 DH/j</li>
                    <li>• <strong>Ouarzazate</strong> : Dès 190 DH/j</li>
                    <li>• <strong>Essaouira</strong> : Dès 185 DH/j</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-teal-600 mr-2" />
                  Garanties qualité nationale
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Standards uniformes</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Même qualité</strong> : Partout au Maroc</li>
                      <li>• <strong>Même service</strong> : Assistance 24h nationale</li>
                      <li>• <strong>Même prix</strong> : Transparence totale</li>
                      <li>• <strong>Même garantie</strong> : Satisfaction 100%</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Avantages réseau</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Aller simple</strong> : Récupération/retour différents</li>
                      <li>• <strong>Échange véhicule</strong> : Possible entre villes</li>
                      <li>• <strong>Assistance mobile</strong> : Intervention rapide</li>
                      <li>• <strong>Réservation unique</strong> : Multi-destinations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Prix Imbattables !</h3>
                <p className="mb-6 text-blue-100">
                  Dès 170 DH/jour dans tout le Maroc. 70% moins cher que la concurrence !
                </p>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Comparer Prix
                </Link>
              </div>

              {/* City Selector */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Choisir ville</h3>
                <div className="space-y-3">
                  <Link href="/blog/location-voiture-tanger" className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="text-gray-700">Tanger</span>
                    <span className="text-blue-600 font-semibold">170 DH/j</span>
                  </Link>
                  <Link href="/blog/location-voiture-casablanca" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Casablanca</span>
                    <span className="text-indigo-600 font-semibold">180 DH/j</span>
                  </Link>
                  <Link href="/blog/location-voiture-rabat" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Rabat</span>
                    <span className="text-purple-600 font-semibold">175 DH/j</span>
                  </Link>
                  <Link href="/blog/location-voiture-marrakech" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Marrakech</span>
                    <span className="text-pink-600 font-semibold">185 DH/j</span>
                  </Link>
                </div>
              </div>

              {/* Savings Calculator */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Calculateur économies</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Prix marché moyen</span>
                    <span className="text-lg text-red-600 font-semibold line-through">570 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Notre tarif</span>
                    <span className="text-lg text-blue-600 font-bold">170 DH/j</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 font-semibold">Économie/jour</span>
                      <span className="text-xl text-green-600 font-bold">400 DH</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 font-semibold">
                    ✓ Soit 2800 DH d'économie/semaine !
                  </p>
                </div>
              </div>

              {/* Quick Benefits */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Avantages inclus</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Assurance RC</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">200km/jour</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Assistance 24h</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="h-5 w-5 text-pink-600 mr-3" />
                    <span className="text-gray-700">Livraison gratuite</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact national</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">national@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">Service dans 15+ villes</span>
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
            Questions fréquentes - Location pas cher
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Vos prix sont-ils vraiment les plus bas du Maroc ?
              </h3>
              <p className="text-gray-600">
                Oui ! Nous garantissons les prix les plus bas avec notre politique 
                "prix battu = remboursé". Gestion directe, aucun intermédiaire.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Le service est-il identique dans toutes les villes ?
              </h3>
              <p className="text-gray-600">
                Absolument ! Même qualité, même service, même assistance 24h/24 
                dans nos 15+ villes. Standards uniformes garantis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Puis-je récupérer dans une ville et rendre dans une autre ?
              </h3>
              <p className="text-gray-600">
                Oui ! Service aller simple disponible entre toutes nos villes. 
                Supplément modique selon distance, devis sur demande.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Comment bénéficier des réductions supplémentaires ?
              </h3>
              <p className="text-gray-600">
                Réservation anticipée, longue durée, basse saison, fidélité. 
                Cumul possible jusqu'à -40% ! Consultez nos promotions actuelles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}