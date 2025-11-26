import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, DollarSign, TrendingDown, Zap, Award, Calculator, Percent, Gift, CreditCard, Target, Coins, Mountain, Waves, Camera, Compass, Route, Building, Key, Settings, Fuel, Navigation, Timer, Luggage, Globe, Trophy, ThumbsUp, Heart, Medal, Crown } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location Voiture Tanger Les Mieux Notés 2025 ⭐ Note 4.9/5 ✓ N°1',
  description: 'Location voiture Tanger les mieux notés ⭐ Note 4.9/5 ✓ +2500 avis clients ✓ Service primé ✓ Flotte premium ✓ Prix transparents ✓ Satisfaction garantie.',
  keywords: 'location voiture tanger mieux notés, meilleure agence location tanger, location voiture tanger avis, top location voiture tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/location-voiture-tanger-les-mieux-notes'
  },
  openGraph: {
    title: 'Location Voiture Tanger Les Mieux Notés 2025 ⭐ Note 4.9/5 ✓ N°1',
    description: 'Location voiture Tanger les mieux notés ⭐ Note 4.9/5 ✓ +2500 avis clients ✓ Service primé.',
    images: ['/tanger-best-rated-car-rental.webp'],
  },
}

export default function LocationVoitureTangerMieuxNotesBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Trophy className="h-6 w-6 text-amber-400 mr-2" />
              <span className="text-amber-400 font-semibold text-lg">N°1 à Tanger</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-300 to-red-400 bg-clip-text text-transparent leading-tight">
              Location Voiture Tanger<br />Les Mieux Notés
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              ⭐ Note 4.9/5 avec +2500 avis clients ! Découvrez pourquoi nous sommes 
              l'agence de location de voitures la mieux notée à Tanger.
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
                <span>Avis Clients</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Réserver Maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Rating Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi sommes-nous les mieux notés ?</h2>
            <p className="text-xl text-gray-600">Des chiffres qui parlent d'eux-mêmes</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">4.9/5</div>
              <div className="text-gray-600 font-medium">Note moyenne</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">2500+</div>
              <div className="text-gray-600 font-medium">Avis clients</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Satisfaction</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-pink-600 mb-2">N°1</div>
              <div className="text-gray-600 font-medium">Classement Tanger</div>
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
                <Crown className="h-8 w-8 text-amber-600 mr-3" />
                Nassoh Car : L'excellence reconnue à Tanger
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Avec une <strong>note de 4.9/5 basée sur plus de 2500 avis clients</strong>, 
                Nassoh Car s'impose comme la référence en <strong>location voiture Tanger les mieux notés</strong>. 
                Cette reconnaissance n'est pas le fruit du hasard, mais le résultat d'un engagement 
                constant vers l'excellence du service.
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Medal className="h-6 w-6 text-amber-600 mr-2" />
                  Nos distinctions et reconnaissances
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Trophy className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Prix Excellence 2024</strong> : Meilleure agence location Tanger</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Certificat Qualité</strong> : Service client exceptionnel</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Top Rated 2024</strong> : Note 4.9/5 maintenue toute l'année</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Clients Fidèles</strong> : 85% de clients qui reviennent</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ThumbsUp className="h-6 w-6 text-amber-600 mr-2" />
                Ce que disent nos clients
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Nos <strong>avis clients authentiques</strong> témoignent de la qualité 
                de notre service. Voici pourquoi nous sommes les mieux notés :
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-amber-600 font-bold text-lg">MH</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h4 className="font-bold text-gray-900 mr-3">Mohammed H.</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 italic mb-2">
                        "Service exceptionnel ! Voiture impeccable, équipe professionnelle, 
                        prix transparent. Je recommande vivement Nassoh Car à Tanger."
                      </p>
                      <div className="text-sm text-gray-500">Vérifié • Janvier 2025</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-lg">SF</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h4 className="font-bold text-gray-900 mr-3">Sarah F.</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 italic mb-2">
                        "Première fois au Maroc, service parfait ! Livraison à l'aéroport, 
                        voiture récente, assistance 24h. Merci pour cette expérience !"
                      </p>
                      <div className="text-sm text-gray-500">Vérifié • Janvier 2025</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-lg">AB</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h4 className="font-bold text-gray-900 mr-3">Ahmed B.</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 italic mb-2">
                        "Client fidèle depuis 3 ans. Toujours la même qualité, 
                        prix compétitifs, véhicules entretenus. La référence à Tanger !"
                      </p>
                      <div className="text-sm text-gray-500">Vérifié • Décembre 2024</div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Settings className="h-6 w-6 text-amber-600 mr-2" />
                Les critères de notre excellence
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre position de <strong>location voiture Tanger les mieux notés</strong> 
                repose sur 8 piliers fondamentaux :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Flotte Premium</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Véhicules récents</strong> : 2020-2024</li>
                        <li>• <strong>Entretien rigoureux</strong> : Contrôles fréquents</li>
                        <li>• <strong>Propreté impeccable</strong> : Nettoyage professionnel</li>
                        <li>• <strong>Équipements modernes</strong> : GPS, climatisation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Service Client</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Équipe formée</strong> : Professionnels expérimentés</li>
                        <li>• <strong>Multilingue</strong> : Français, arabe, anglais</li>
                        <li>• <strong>Disponibilité</strong> : 24h/24 - 7j/7</li>
                        <li>• <strong>Réactivité</strong> : Réponse en moins de 5 min</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Transparence Prix</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Tarifs clairs</strong> : Aucun frais caché</li>
                        <li>• <strong>Devis détaillé</strong> : Tout inclus</li>
                        <li>• <strong>Prix compétitifs</strong> : Meilleur rapport qualité/prix</li>
                        <li>• <strong>Promotions</strong> : Offres régulières</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Flexibilité</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Horaires adaptés</strong> : Selon vos besoins</li>
                        <li>• <strong>Lieux multiples</strong> : Récupération/retour</li>
                        <li>• <strong>Modifications</strong> : Réservation flexible</li>
                        <li>• <strong>Annulation</strong> : Conditions souples</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Sécurité</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Assurance complète</strong> : Tous risques incluse</li>
                        <li>• <strong>Véhicules sûrs</strong> : Contrôles techniques</li>
                        <li>• <strong>Assistance route</strong> : Dépannage 24h</li>
                        <li>• <strong>Remplacement</strong> : Véhicule de courtoisie</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">6</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Innovation</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Réservation en ligne</strong> : Simple et rapide</li>
                        <li>• <strong>App mobile</strong> : Gestion complète</li>
                        <li>• <strong>Paiement sécurisé</strong> : Multiples options</li>
                        <li>• <strong>Suivi temps réel</strong> : Localisation véhicule</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">7</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Expérience</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>15 ans d'expertise</strong> : Connaissance du marché</li>
                        <li>• <strong>Réseau étendu</strong> : Présence nationale</li>
                        <li>• <strong>Partenariats</strong> : Hôtels, agences voyage</li>
                        <li>• <strong>Réputation</strong> : Référence reconnue</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">8</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Engagement</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Satisfaction garantie</strong> : Engagement qualité</li>
                        <li>• <strong>Amélioration continue</strong> : Écoute client</li>
                        <li>• <strong>Responsabilité</strong> : Environnement, société</li>
                        <li>• <strong>Valeurs</strong> : Intégrité, respect, excellence</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="h-6 w-6 text-amber-600 mr-2" />
                Analyse comparative : Pourquoi nous sommes N°1
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Comparaison objective avec la concurrence à Tanger :
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-amber-50 to-orange-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Critère</th>
                      <th className="px-6 py-4 text-center font-semibold text-amber-600">Nassoh Car</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-500">Concurrent A</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-500">Concurrent B</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-500">Concurrent C</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Note moyenne</td>
                      <td className="px-6 py-4 text-center text-amber-600 font-bold">4.9/5 ⭐</td>
                      <td className="px-6 py-4 text-center text-gray-500">4.2/5</td>
                      <td className="px-6 py-4 text-center text-gray-500">3.8/5</td>
                      <td className="px-6 py-4 text-center text-gray-500">4.1/5</td>
                    </tr>
                    <tr className="bg-amber-50 hover:bg-amber-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Nombre d'avis</td>
                      <td className="px-6 py-4 text-center text-amber-600 font-bold">2500+</td>
                      <td className="px-6 py-4 text-center text-gray-500">800</td>
                      <td className="px-6 py-4 text-center text-gray-500">450</td>
                      <td className="px-6 py-4 text-center text-gray-500">1200</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Flotte (véhicules)</td>
                      <td className="px-6 py-4 text-center text-amber-600 font-bold">200+</td>
                      <td className="px-6 py-4 text-center text-gray-500">80</td>
                      <td className="px-6 py-4 text-center text-gray-500">45</td>
                      <td className="px-6 py-4 text-center text-gray-500">120</td>
                    </tr>
                    <tr className="bg-amber-50 hover:bg-amber-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Service 24h/24</td>
                      <td className="px-6 py-4 text-center text-amber-600 font-bold">✓ Oui</td>
                      <td className="px-6 py-4 text-center text-gray-500">✗ Non</td>
                      <td className="px-6 py-4 text-center text-gray-500">✗ Non</td>
                      <td className="px-6 py-4 text-center text-gray-500">✓ Limité</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Assurance incluse</td>
                      <td className="px-6 py-4 text-center text-amber-600 font-bold">✓ Complète</td>
                      <td className="px-6 py-4 text-center text-gray-500">✓ Basique</td>
                      <td className="px-6 py-4 text-center text-gray-500">✗ Option</td>
                      <td className="px-6 py-4 text-center text-gray-500">✓ Basique</td>
                    </tr>
                    <tr className="bg-amber-50 hover:bg-amber-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Prix transparents</td>
                      <td className="px-6 py-4 text-center text-amber-600 font-bold">✓ 100%</td>
                      <td className="px-6 py-4 text-center text-gray-500">✗ Frais cachés</td>
                      <td className="px-6 py-4 text-center text-gray-500">✗ Suppléments</td>
                      <td className="px-6 py-4 text-center text-gray-500">✓ Partiels</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Trophy className="h-6 w-6 text-green-600 mr-2" />
                  Résultat : Pourquoi nous dominons le classement
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                    <div className="text-gray-700">Taux de satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                    <div className="text-gray-700">Clients fidèles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                    <div className="text-gray-700">Recommandations</div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Gift className="h-6 w-6 text-amber-600 mr-2" />
                Avantages exclusifs clients VIP
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                En tant qu'agence <strong>la mieux notée à Tanger</strong>, 
                nous offrons des privilèges uniques :
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Crown className="h-6 w-6 text-purple-600 mr-2" />
                  Programme Fidélité Premium
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-gray-700">Réductions progressives jusqu'à 25%</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-gray-700">Surclassement gratuit selon disponibilité</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-gray-700">Priorité réservation haute saison</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-gray-700">Service conciergerie personnalisé</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-gray-700">Livraison VIP gratuite</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-gray-700">Assistance dédiée 24h/24</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-gray-700">Accès véhicules premium</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-gray-700">Conditions préférentielles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Rating Card */}
              <div className="bg-gradient-to-br from-amber-600 to-orange-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Trophy className="h-6 w-6 mr-2" />
                  N°1 à Tanger !
                </h3>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold mb-2">4.9/5</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-amber-300 fill-current" />
                    ))}
                  </div>
                  <p className="text-amber-100">Basé sur 2500+ avis</p>
                </div>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-amber-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Réserver Maintenant
                </Link>
              </div>

              {/* Recent Reviews */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Avis Récents</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-amber-400 pl-4">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">Karim M.</span>
                    </div>
                    <p className="text-sm text-gray-600">"Service parfait, voiture impeccable !"</p>
                  </div>
                  <div className="border-l-4 border-amber-400 pl-4">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">Lisa R.</span>
                    </div>
                    <p className="text-sm text-gray-600">"Équipe professionnelle, je recommande !"</p>
                  </div>
                  <div className="border-l-4 border-amber-400 pl-4">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">Omar T.</span>
                    </div>
                    <p className="text-sm text-gray-600">"Meilleure agence de Tanger, sans hésiter !"</p>
                  </div>
                </div>
              </div>

              {/* Awards */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nos Récompenses</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                    <Trophy className="h-5 w-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">Prix Excellence 2024</span>
                  </div>
                  <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                    <Award className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Certificat Qualité</span>
                  </div>
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <Medal className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-700">Top Rated 2024</span>
                  </div>
                  <div className="flex items-center p-3 bg-pink-50 rounded-lg">
                    <Crown className="h-5 w-5 text-pink-600 mr-3" />
                    <span className="text-gray-700">N°1 Tanger</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact VIP</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">vip@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                    <span className="text-gray-700">Boulevard Mohammed VI, Tanger</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                  <p className="text-sm text-amber-800 font-semibold">
                    🏆 Service primé disponible 24h/24
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
            FAQ - Location voiture Tanger les mieux notés
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Pourquoi êtes-vous les mieux notés ?
              </h3>
              <p className="text-gray-600">
                Note 4.9/5 basée sur 2500+ avis clients authentiques. Excellence du service, 
                flotte premium, prix transparents, assistance 24h/24. Qualité reconnue depuis 15 ans.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Comment vérifier vos avis clients ?
              </h3>
              <p className="text-gray-600">
                Avis vérifiés sur Google, TripAdvisor, Booking. Chaque avis est authentique, 
                contrôlé et daté. Transparence totale sur notre réputation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quels avantages en tant que N°1 ?
              </h3>
              <p className="text-gray-600">
                Programme fidélité premium, surclassements gratuits, service conciergerie, 
                priorité réservation, conditions préférentielles. Excellence récompensée.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Garantissez-vous la satisfaction ?
              </h3>
              <p className="text-gray-600">
                Engagement satisfaction 100% ou remboursement. Si vous n'êtes pas satisfait, 
                nous trouvons une solution ou remboursons intégralement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}