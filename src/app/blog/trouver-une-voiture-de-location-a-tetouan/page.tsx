import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, DollarSign, TrendingDown, Zap, Award, Calculator, Percent, Gift, CreditCard, Target, Coins, Mountain, Waves, Camera, Compass, Route, Building, Search, Filter, Eye, ThumbsUp, Bookmark, Navigation, Timer, Luggage, Globe } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trouver une Voiture de Location à Tétouan 2025 ✓ Guide Complet',
  description: 'Comment trouver une voiture de location à Tétouan ? ✓ Guide complet ✓ Comparatif agences ✓ Conseils experts ✓ Meilleurs prix ✓ Réservation facile.',
  keywords: 'trouver voiture location tétouan, comment louer voiture tétouan, guide location voiture tétouan, agences location tétouan',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/trouver-une-voiture-de-location-a-tetouan'
  },
  openGraph: {
    title: 'Trouver une Voiture de Location à Tétouan 2025 ✓ Guide Complet',
    description: 'Guide complet pour trouver une voiture de location à Tétouan ✓ Comparatif agences ✓ Conseils experts.',
    images: ['/tetouan-car-rental-guide.webp'],
  },
}

export default function TrouverVoitureLocationTetouanBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Search className="h-6 w-6 text-emerald-400 mr-2" />
              <span className="text-emerald-400 font-semibold text-lg">Guide Expert</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Trouver une Voiture de Location à Tétouan
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Guide complet pour choisir la meilleure voiture de location à Tétouan. 
              Comparatifs, conseils d'experts et astuces pour économiser !
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
                <span>Guide</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Voir Notre Flotte
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Search Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recherche de voiture à Tétouan</h2>
            <p className="text-xl text-gray-600">Les clés pour trouver la voiture parfaite</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Agences comparées</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Modèles disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-cyan-600 mb-2">24h/24</div>
              <div className="text-gray-600 font-medium">Disponibilité</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">175 DH</div>
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
                <Search className="h-8 w-8 text-emerald-600 mr-3" />
                Comment trouver une voiture de location à Tétouan ?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Trouver une voiture de location à Tétouan</strong> peut sembler complexe 
                avec toutes les options disponibles. Ce guide vous accompagne étape par étape 
                pour choisir la meilleure solution selon vos besoins, votre budget et vos destinations 
                dans cette magnifique région du Nord marocain.
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Filter className="h-6 w-6 text-emerald-600 mr-2" />
                  Étapes pour trouver votre voiture idéale
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Définir vos besoins</strong> : Durée, passagers, bagages</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Fixer votre budget</strong> : Location + carburant + extras</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Choisir les dates</strong> : Flexibilité = économies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Sélectionner le lieu</strong> : Aéroport, centre, port</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Comparer les agences</strong> : Prix, services, avis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Vérifier les conditions</strong> : Assurance, caution, km</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Lire les avis clients</strong> : Expériences réelles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Réserver en avance</strong> : Meilleurs prix garantis</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="h-6 w-6 text-emerald-600 mr-2" />
                Où chercher une voiture de location à Tétouan ?
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Plusieurs options s'offrent à vous pour <strong>trouver une voiture de location à Tétouan</strong>. 
                Voici les meilleurs endroits et méthodes :
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Agences locales Tétouan</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Avantages</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Prix compétitifs</strong> : Moins d'intermédiaires</li>
                            <li>• <strong>Service personnalisé</strong> : Contact direct</li>
                            <li>• <strong>Flexibilité</strong> : Négociation possible</li>
                            <li>• <strong>Connaissance locale</strong> : Conseils région</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Où les trouver</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Centre-ville</strong> : Avenue Mohammed V</li>
                            <li>• <strong>Aéroport</strong> : Terminal arrivées</li>
                            <li>• <strong>Gare routière</strong> : Proximité transport</li>
                            <li>• <strong>Hôtels</strong> : Partenariats établis</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Plateformes en ligne</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Sites spécialisés</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Comparateurs</strong> : Kayak, Skyscanner</li>
                            <li>• <strong>Agences directes</strong> : Sites officiels</li>
                            <li>• <strong>Plateformes locales</strong> : Spécialistes Maroc</li>
                            <li>• <strong>Applications mobiles</strong> : Réservation rapide</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Conseils recherche</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Dates flexibles</strong> : Meilleurs tarifs</li>
                            <li>• <strong>Filtres précis</strong> : Type, prix, équipements</li>
                            <li>• <strong>Avis vérifiés</strong> : Expériences clients</li>
                            <li>• <strong>Conditions détaillées</strong> : Pas de surprises</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Recommandations & Réseaux</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Sources fiables</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Hôtels</strong> : Partenaires recommandés</li>
                            <li>• <strong>Guides touristiques</strong> : Sélection qualité</li>
                            <li>• <strong>Forums voyage</strong> : Expériences partagées</li>
                            <li>• <strong>Réseaux sociaux</strong> : Avis récents</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Validation</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Licences officielles</strong> : Vérification légale</li>
                            <li>• <strong>Assurances valides</strong> : Couverture complète</li>
                            <li>• <strong>Références clients</strong> : Témoignages récents</li>
                            <li>• <strong>Transparence prix</strong> : Pas de frais cachés</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="h-6 w-6 text-emerald-600 mr-2" />
                Comparatif des agences à Tétouan
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Pour vous aider à <strong>trouver la meilleure voiture de location à Tétouan</strong>, 
                voici notre comparatif des principales agences :
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-emerald-50 to-teal-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Agence</th>
                      <th className="px-6 py-4 text-center font-semibold text-emerald-600">Prix dès</th>
                      <th className="px-6 py-4 text-center font-semibold text-teal-600">Flotte</th>
                      <th className="px-6 py-4 text-center font-semibold text-cyan-600">Services</th>
                      <th className="px-6 py-4 text-center font-semibold text-blue-600">Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-emerald-50 hover:bg-emerald-100">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        <div className="flex items-center">
                          <Award className="h-5 w-5 text-emerald-600 mr-2" />
                          <strong>Nassoh Car</strong>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold">175 DH/j</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-semibold">50+ modèles</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">Premium</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">★★★★★</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Agence Locale A</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold">190 DH/j</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-semibold">25 modèles</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">Standard</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">★★★★☆</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Internationale B</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold">220 DH/j</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-semibold">40 modèles</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">Complet</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">★★★★☆</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Budget C</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold">160 DH/j</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-semibold">15 modèles</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">Basique</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">★★★☆☆</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <ThumbsUp className="h-6 w-6 text-blue-600 mr-2" />
                  Pourquoi choisir Nassoh Car ?
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Avantages exclusifs</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Prix transparents</strong> : Pas de frais cachés</li>
                      <li>• <strong>Flotte récente</strong> : Véhicules 2020-2024</li>
                      <li>• <strong>Service 24h/24</strong> : Assistance permanente</li>
                      <li>• <strong>Livraison gratuite</strong> : Aéroport, hôtel, domicile</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Services inclus</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Assurance complète</strong> : Tous risques inclus</li>
                      <li>• <strong>Kilométrage illimité</strong> : Liberté totale</li>
                      <li>• <strong>GPS gratuit</strong> : Navigation incluse</li>
                      <li>• <strong>Carburant de départ</strong> : Réservoir plein</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-6 w-6 text-emerald-600 mr-2" />
                Critères de sélection essentiels
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Pour <strong>bien choisir votre voiture de location à Tétouan</strong>, 
                évaluez ces critères importants :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <DollarSign className="h-5 w-5 text-emerald-600 mr-2" />
                    Prix & Budget
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Tarif de base</strong> : Prix affiché par jour</li>
                    <li>• <strong>Frais supplémentaires</strong> : Assurance, GPS, siège bébé</li>
                    <li>• <strong>Caution</strong> : Montant bloqué sur carte</li>
                    <li>• <strong>Carburant</strong> : Politique plein/plein</li>
                    <li>• <strong>Frais cachés</strong> : Nettoyage, retard, km</li>
                  </ul>
                  <div className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Budget total = Base + Options + Carburant
                  </div>
                </div>

                <div className="bg-white border-2 border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Car className="h-5 w-5 text-teal-600 mr-2" />
                    Véhicule & Équipements
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Taille</strong> : Économique, compacte, familiale</li>
                    <li>• <strong>Transmission</strong> : Manuelle ou automatique</li>
                    <li>• <strong>Climatisation</strong> : Essentielle en été</li>
                    <li>• <strong>GPS</strong> : Navigation intégrée ou smartphone</li>
                    <li>• <strong>Bagages</strong> : Capacité coffre adaptée</li>
                  </ul>
                  <div className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Choisir selon vos besoins réels
                  </div>
                </div>

                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-cyan-600 mr-2" />
                    Assurance & Protection
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Responsabilité civile</strong> : Obligatoire au Maroc</li>
                    <li>• <strong>Collision Damage</strong> : Dommages au véhicule</li>
                    <li>• <strong>Vol & incendie</strong> : Protection complète</li>
                    <li>• <strong>Assistance 24h</strong> : Dépannage, remorquage</li>
                    <li>• <strong>Franchise</strong> : Montant à votre charge</li>
                  </ul>
                  <div className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Sécurité avant économie
                  </div>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    Service Client
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Disponibilité</strong> : Horaires, jours, urgences</li>
                    <li>• <strong>Langues</strong> : Français, arabe, anglais</li>
                    <li>• <strong>Réactivité</strong> : Temps de réponse</li>
                    <li>• <strong>Professionnalisme</strong> : Formation équipe</li>
                    <li>• <strong>Avis clients</strong> : Satisfaction générale</li>
                  </ul>
                  <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Support = tranquillité d'esprit
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className="h-6 w-6 text-emerald-600 mr-2" />
                Conseils pour économiser
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Astuces d'experts pour <strong>trouver une voiture de location pas chère à Tétouan</strong> :
              </p>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Coins className="h-6 w-6 text-yellow-600 mr-2" />
                  Stratégies d'économie
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Timing optimal</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Réservation anticipée</strong> : 2-4 semaines avant</li>
                      <li>• <strong>Éviter haute saison</strong> : Juillet-août plus chers</li>
                      <li>• <strong>Jours de semaine</strong> : Moins chers que weekend</li>
                      <li>• <strong>Durée optimale</strong> : 3-7 jours = meilleurs tarifs</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Optimisation coûts</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Catégorie adaptée</strong> : Ni trop petit, ni trop grand</li>
                      <li>• <strong>Options essentielles</strong> : Seulement le nécessaire</li>
                      <li>• <strong>Carburant malin</strong> : Faire le plein avant retour</li>
                      <li>• <strong>Comparaison active</strong> : Plusieurs devis</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-red-600 mr-2" />
                  Pièges à éviter
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Prix trompeurs</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Prix d'appel</strong> : Vérifier inclusions réelles</li>
                      <li>• <strong>Frais cachés</strong> : Lire conditions complètes</li>
                      <li>• <strong>Assurances doublons</strong> : Éviter sur-assurance</li>
                      <li>• <strong>Options forcées</strong> : Refuser le non-nécessaire</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Arnaques courantes</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Dommages inventés</strong> : Inspection minutieuse</li>
                      <li>• <strong>Carburant manquant</strong> : Photos niveau départ</li>
                      <li>• <strong>Retard facturé</strong> : Respecter horaires retour</li>
                      <li>• <strong>Agences fantômes</strong> : Vérifier légalité</li>
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
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Trouvé votre voiture !</h3>
                <p className="mb-6 text-emerald-100">
                  Plus de 50 modèles disponibles, prix transparents, service premium inclus !
                </p>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-emerald-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Voir Notre Flotte
                </Link>
              </div>

              {/* Search Checklist */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Checklist Recherche</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-emerald-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">Définir besoins</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    <span className="text-gray-700">Fixer budget</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-cyan-600 mr-3" />
                    <span className="text-gray-700">Comparer agences</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Vérifier conditions</span>
                  </div>
                </div>
              </div>

              {/* Price Ranges */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Gammes de Prix</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <span className="text-gray-700">Économique</span>
                    <span className="text-emerald-600 font-semibold">175-190 DH</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Compacte</span>
                    <span className="text-teal-600 font-semibold">200-220 DH</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Familiale</span>
                    <span className="text-cyan-600 font-semibold">240-280 DH</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">SUV/Premium</span>
                    <span className="text-blue-600 font-semibold">300-400 DH</span>
                  </div>
                </div>
              </div>

              {/* Best Locations */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Meilleurs Lieux</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <span className="text-gray-700">Aéroport</span>
                    <span className="text-emerald-600 font-semibold">24h/24</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Centre-ville</span>
                    <span className="text-teal-600 font-semibold">8h-20h</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Hôtels</span>
                    <span className="text-cyan-600 font-semibold">Livraison</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Gare</span>
                    <span className="text-blue-600 font-semibold">Proximité</span>
                  </div>
                </div>
              </div>

              {/* Contact Search Help */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Aide Recherche</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">conseil@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <Search className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                    <span className="text-gray-700">Conseils personnalisés gratuits</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-emerald-800 font-semibold">
                    🔍 Aide à la recherche 24h/24
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
            Questions fréquentes - Recherche voiture Tétouan
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Combien de temps avant pour réserver ?
              </h3>
              <p className="text-gray-600">
                Idéalement 2-4 semaines avant votre voyage pour bénéficier des meilleurs 
                tarifs et de la plus large sélection de véhicules.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quelle est la meilleure période pour louer ?
              </h3>
              <p className="text-gray-600">
                Évitez juillet-août (haute saison). Préférez mai-juin et septembre-octobre 
                pour des prix plus doux et moins de monde.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Comment éviter les frais cachés ?
              </h3>
              <p className="text-gray-600">
                Lisez attentivement les conditions, demandez le prix total final, 
                et choisissez des agences transparentes comme Nassoh Car.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Faut-il une carte de crédit obligatoirement ?
              </h3>
              <p className="text-gray-600">
                Généralement oui pour la caution. Certaines agences acceptent les cartes 
                de débit ou proposent des alternatives sans caution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}