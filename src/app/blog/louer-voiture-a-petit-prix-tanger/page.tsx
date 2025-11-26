import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, DollarSign, TrendingDown, Zap, Award, Calculator, Percent, Gift, CreditCard, Target, Coins } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Louer Voiture à Petit Prix Tanger 2025 - Tarifs Mini dès 170 DH/jour',
  description: 'Louer voiture à petit prix Tanger ✓ Tarifs mini dès 170 DH/jour ✓ Offres économiques ✓ Flotte récente ✓ Service de qualité ✓ Réservation facile.',
  keywords: 'louer voiture petit prix tanger, voiture petit prix tanger, location économique tanger, louer pas cher tanger, car rental cheap tangier',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/louer-voiture-a-petit-prix-tanger'
  },
  openGraph: {
    title: 'Louer Voiture à Petit Prix Tanger 2025 - Tarifs Mini dès 170 DH/jour',
    description: 'Louer voiture à petit prix Tanger ✓ Tarifs mini dès 170 DH/jour ✓ Offres économiques.',
    images: ['/tangier-budget-car-rental-blog.jpg'],
  },
}

export default function LouerVoiturePetitPrixTangerBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-900 via-amber-800 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Coins className="h-6 w-6 text-orange-400 mr-2" />
              <span className="text-orange-400 font-semibold text-lg">Petit Prix</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent leading-tight">
              Louer Voiture à Petit Prix Tanger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Louer voiture à petit prix Tanger dès 170 DH/jour ! 
              Économies maximales, qualité garantie, service complet. Votre budget maîtrisé !
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
                <span>Petit Budget</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Voir Petits Prix
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Budget Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Petits prix, grandes économies</h2>
            <p className="text-xl text-gray-600">Louer voiture à petit prix sans compromis sur la qualité</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">170 DH</div>
              <div className="text-gray-600 font-medium">Prix mini/jour</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">50%</div>
              <div className="text-gray-600 font-medium">Économies vs autres</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Qualité maintenue</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">24h/24</div>
              <div className="text-gray-600 font-medium">Support inclus</div>
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
                <Target className="h-8 w-8 text-orange-600 mr-3" />
                Louer voiture à petit prix Tanger : Budget maîtrisé
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Vous souhaitez <strong>louer voiture à petit prix Tanger</strong> sans sacrifier 
                la qualité ? Nassoh Car vous propose des tarifs mini à partir de 
                <strong>170 DH par jour</strong> avec tous les services inclus. 
                Notre approche <strong>petit prix</strong> vous garantit des économies 
                substantielles tout en maintenant un service de qualité !
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-orange-600 mr-2" />
                  Notre philosophie petit prix
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Économies intelligentes</strong> : Réduction des coûts sans impact qualité</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Volume optimisé</strong> : Achats groupés pour meilleurs prix</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Gestion directe</strong> : Aucun intermédiaire, prix au plus juste</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Transparence totale</strong> : Prix affichés = prix payés</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="h-6 w-6 text-orange-600 mr-2" />
                Grille tarifaire petit prix Tanger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Découvrez nos tarifs pour <strong>louer voiture à petit prix Tanger</strong> 
                avec un excellent rapport qualité-prix :
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-orange-50 to-amber-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Catégorie</th>
                      <th className="px-6 py-4 text-center font-semibold text-orange-600">Prix/jour</th>
                      <th className="px-6 py-4 text-center font-semibold text-amber-600">Prix/semaine</th>
                      <th className="px-6 py-4 text-center font-semibold text-yellow-600">Économie</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Mini économique</td>
                      <td className="px-6 py-4 text-center text-orange-600 font-bold">170 DH</td>
                      <td className="px-6 py-4 text-center text-amber-600 font-semibold">1000 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">-190 DH</td>
                    </tr>
                    <tr className="bg-orange-50 hover:bg-orange-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Économique</td>
                      <td className="px-6 py-4 text-center text-orange-600 font-bold">190 DH</td>
                      <td className="px-6 py-4 text-center text-amber-600 font-semibold">1200 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">-130 DH</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Compacte</td>
                      <td className="px-6 py-4 text-center text-orange-600 font-bold">230 DH</td>
                      <td className="px-6 py-4 text-center text-amber-600 font-semibold">1450 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">-160 DH</td>
                    </tr>
                    <tr className="bg-orange-50 hover:bg-orange-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Berline</td>
                      <td className="px-6 py-4 text-center text-orange-600 font-bold">290 DH</td>
                      <td className="px-6 py-4 text-center text-amber-600 font-semibold">1850 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">-180 DH</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Gift className="h-6 w-6 text-green-600 mr-2" />
                  Inclus dans nos petits prix !
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
                      <span className="text-gray-700">Assistance téléphonique</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Livraison Tanger centre</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Carburant de départ</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Nettoyage de base</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Modification 1 fois gratuite</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Annulation 48h avant</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Percent className="h-6 w-6 text-orange-600 mr-2" />
                Stratégies d'économies supplémentaires
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Maximisez vos économies pour <strong>louer voiture à petit prix Tanger</strong> 
                avec nos astuces d'experts :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Calendar className="h-5 w-5 text-orange-600 mr-2" />
                    Timing optimal
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Basse saison</strong> : Nov-Fév (-20%)</li>
                    <li>• <strong>Jours semaine</strong> : Lun-Jeu (-15%)</li>
                    <li>• <strong>Réservation anticipée</strong> : 30j avant (-10%)</li>
                    <li>• <strong>Last minute</strong> : J-1 (-12%)</li>
                  </ul>
                  <div className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Timing parfait
                  </div>
                </div>

                <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-amber-600 mr-2" />
                    Durée intelligente
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>3-6 jours</strong> : Prix de base</li>
                    <li>• <strong>7-13 jours</strong> : -8% automatique</li>
                    <li>• <strong>14-29 jours</strong> : -15% dégressif</li>
                    <li>• <strong>30+ jours</strong> : -25% longue durée</li>
                  </ul>
                  <div className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Durée optimale
                  </div>
                </div>

                <div className="bg-white border-2 border-yellow-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Zap className="h-5 w-5 text-yellow-600 mr-2" />
                    Options économiques
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Véhicule surprise</strong> : -20% sur catégorie</li>
                    <li>• <strong>Récupération agence</strong> : Pas de livraison</li>
                    <li>• <strong>Carburant retour vide</strong> : Prix station</li>
                    <li>• <strong>Nettoyage client</strong> : -30 DH</li>
                  </ul>
                  <div className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Options flexibles
                  </div>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <CreditCard className="h-5 w-5 text-green-600 mr-2" />
                    Programmes fidélité
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Carte fidélité</strong> : -5% permanent</li>
                    <li>• <strong>Parrainage ami</strong> : -50 DH chacun</li>
                    <li>• <strong>Avis client</strong> : -30 DH prochaine location</li>
                    <li>• <strong>Newsletter</strong> : Offres exclusives</li>
                  </ul>
                  <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Avantages durables
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="h-6 w-6 text-orange-600 mr-2" />
                  Comparatif budget vs qualité
                </h3>
                <p className="text-gray-700 mb-4">
                  Comment <strong>louer voiture à petit prix Tanger</strong> 
                  sans compromettre l'essentiel :
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900">Critère</th>
                        <th className="px-4 py-3 text-center font-semibold text-orange-600">Notre approche</th>
                        <th className="px-4 py-3 text-center font-semibold text-gray-600">Impact budget</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-900">Âge véhicules</td>
                        <td className="px-4 py-3 text-center text-orange-600">2-5 ans</td>
                        <td className="px-4 py-3 text-center text-green-600">Économie 40%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">Entretien</td>
                        <td className="px-4 py-3 text-center text-orange-600">Régulier garanti</td>
                        <td className="px-4 py-3 text-center text-green-600">Sécurité maintenue</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-900">Assurance</td>
                        <td className="px-4 py-3 text-center text-orange-600">RC incluse</td>
                        <td className="px-4 py-3 text-center text-green-600">Protection essentielle</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">Support</td>
                        <td className="px-4 py-3 text-center text-orange-600">Téléphonique 24h</td>
                        <td className="px-4 py-3 text-center text-green-600">Assistance garantie</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-orange-600 mr-2" />
                Qualité préservée malgré les petits prix
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre engagement pour <strong>louer voiture à petit prix Tanger</strong> 
                sans sacrifier la qualité :
              </p>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Standards qualité maintenus</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Véhicules</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Contrôle technique</strong> : À jour obligatoire</li>
                      <li>• <strong>Révisions régulières</strong> : Tous les 10 000 km</li>
                      <li>• <strong>Nettoyage systématique</strong> : Entre chaque location</li>
                      <li>• <strong>Vérification sécurité</strong> : Pneus, freins, éclairage</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Service</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Accueil professionnel</strong> : Équipe formée</li>
                      <li>• <strong>Remise en main propre</strong> : Explication complète</li>
                      <li>• <strong>Assistance rapide</strong> : Intervention sous 30min</li>
                      <li>• <strong>Transparence totale</strong> : Aucune surprise</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Car className="h-6 w-6 text-orange-600 mr-2" />
                Guide du petit budget malin
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Conseils d'experts pour <strong>louer voiture à petit prix Tanger</strong> 
                en optimisant chaque dirham :
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Stratégie petit budget</h4>
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Définissez vos besoins réels</h5>
                      <p className="text-gray-600 text-sm">Choisissez la catégorie juste nécessaire. Une économique suffit souvent</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Surveillez les promotions</h5>
                      <p className="text-gray-600 text-sm">Offres flash, véhicules surprise, réductions saisonnières</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Optimisez la durée</h5>
                      <p className="text-gray-600 text-sm">Les tarifs dégressifs commencent dès 7 jours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Évitez les extras inutiles</h5>
                      <p className="text-gray-600 text-sm">GPS smartphone, assurance carte bancaire suffisent souvent</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-orange-600 to-amber-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Petits Prix Garantis !</h3>
                <p className="mb-6 text-orange-100">
                  Dès 170 DH/jour avec service complet. Économisez jusqu'à 50% vs concurrence !
                </p>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-orange-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Réserver Petit Prix
                </Link>
              </div>

              {/* Budget Calculator */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Calculateur budget</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Prix standard marché</span>
                    <span className="text-lg text-gray-600 font-semibold">340 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Notre petit prix</span>
                    <span className="text-lg text-orange-600 font-bold">170 DH/j</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 font-semibold">Économie/jour</span>
                      <span className="text-xl text-green-600 font-bold">170 DH</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-800 font-semibold">
                    ✓ Soit 1190 DH d'économie/semaine !
                  </p>
                </div>
              </div>

              {/* Included Basic */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Inclus petit prix</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Assurance RC</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">200km/jour</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-yellow-600 mr-3" />
                    <span className="text-gray-700">Assistance téléphone</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Livraison centre</span>
                  </div>
                </div>
              </div>

              {/* Budget Tips */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Astuces économies</h3>
                <div className="space-y-4">
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="font-semibold text-orange-800">Basse saison</div>
                    <div className="text-sm text-orange-600">Nov-Fév : -20%</div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <div className="font-semibold text-amber-800">Longue durée</div>
                    <div className="text-sm text-amber-600">7+ jours : -8%</div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <div className="font-semibold text-yellow-800">Véhicule surprise</div>
                    <div className="text-sm text-yellow-600">Catégorie sup : -20%</div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Devis petit prix</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">budget@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-orange-600 mr-3 mt-1" />
                    <span className="text-gray-700">Tanger Centre, Maroc</span>
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
            Questions fréquentes - Petit prix
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Comment maintenez-vous la qualité avec des petits prix ?
              </h3>
              <p className="text-gray-600">
                Gestion directe, achats groupés, optimisation des coûts sans impact 
                sur la sécurité et l'entretien. Économies intelligentes !
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Que comprend exactement le tarif petit prix ?
              </h3>
              <p className="text-gray-600">
                Assurance RC, 200km/jour, assistance téléphonique, livraison centre Tanger, 
                carburant de départ, nettoyage de base.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Puis-je avoir des réductions supplémentaires ?
              </h3>
              <p className="text-gray-600">
                Oui ! Réductions longue durée, basse saison, réservation anticipée, 
                fidélité. Cumul possible jusqu'à -35% !
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Les véhicules sont-ils fiables malgré les petits prix ?
              </h3>
              <p className="text-gray-600">
                Absolument ! Véhicules 2-5 ans, entretien régulier, contrôle technique à jour. 
                Petit prix ne signifie pas compromis sécurité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}