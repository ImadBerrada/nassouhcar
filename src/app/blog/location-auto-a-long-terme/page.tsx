import type { Metadata } from 'next'
import { MapPin, Clock, Shield, ArrowRight, Phone, Mail, Calendar, Tag, CheckCircle, BarChart3, TrendingUp, Calculator, Settings, FileText, TrendingDown, Briefcase, Star } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location Auto à Long Terme Maroc 2025 ✓ Contrats Flexibles dès 140 DH/jour',
  description: 'Location auto à long terme Maroc ✓ Contrats flexibles dès 140 DH/jour ✓ 3 mois minimum ✓ Tout inclus ✓ Véhicules récents ✓ Service premium.',
  keywords: 'location auto long terme, location auto long terme maroc, auto long terme, voiture long terme',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/location-auto-a-long-terme'
  },
  openGraph: {
    title: 'Location Auto à Long Terme Maroc 2025 ✓ Contrats Flexibles dès 140 DH/jour',
    description: 'Location auto à long terme Maroc ✓ Contrats flexibles dès 140 DH/jour ✓ 3 mois minimum.',
    images: ['/long-term-auto-rental-morocco.webp'],
  },
}

export default function LocationAutoLongTermeBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <BarChart3 className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold text-lg">Long Terme</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Location Auto à Long Terme
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Solutions automobiles long terme au Maroc. Contrats flexibles, 
              tarifs dégressifs, service premium dès 140 DH/jour !
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Mis à jour le 15 Janvier 2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>9 min de lecture</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>Long Terme</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Voir les Contrats
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Long Term Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Location auto long terme</h2>
            <p className="text-xl text-gray-600">Mobilité durable et économique</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">140 DH</div>
              <div className="text-gray-600 font-medium">Prix dès/jour</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">3 mois</div>
              <div className="text-gray-600 font-medium">Durée minimum</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">-50%</div>
              <div className="text-gray-600 font-medium">Économie vs court terme</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-pink-600 mb-2">800+</div>
              <div className="text-gray-600 font-medium">Contrats actifs</div>
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
                <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
                Location auto à long terme : L'alternative intelligente
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                La <strong>location auto à long terme</strong> avec Nassoh Car 
                révolutionne votre approche de la mobilité au Maroc. Plus flexible 
                qu'un achat, plus économique qu'une location traditionnelle, 
                nos contrats long terme s'adaptent parfaitement à vos besoins évolutifs.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
                  Avantages location auto long terme
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Flexibilité maximale</strong> : Adaptation selon vos besoins</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Économies substantielles</strong> : Jusqu'à -50% vs court terme</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Service tout inclus</strong> : Maintenance, assurance, assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Véhicules récents</strong> : Flotte renouvelée régulièrement</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="h-6 w-6 text-blue-600 mr-2" />
                Tarification long terme optimisée
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre <strong>location auto long terme Maroc</strong> propose 
                une grille tarifaire dégressive, plus vous restez, plus vous économisez :
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Durée</th>
                      <th className="px-6 py-4 text-center font-semibold text-blue-600">Citadine</th>
                      <th className="px-6 py-4 text-center font-semibold text-indigo-600">Compacte</th>
                      <th className="px-6 py-4 text-center font-semibold text-purple-600">Berline</th>
                      <th className="px-6 py-4 text-center font-semibold text-pink-600">SUV</th>
                      <th className="px-6 py-4 text-center font-semibold text-green-600">Économie</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">3-5 mois</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">190 DH/j</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">210 DH/j</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">270 DH/j</td>
                      <td className="px-6 py-4 text-center text-pink-600 font-semibold">340 DH/j</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">-25%</td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-100">
                      <td className="px-6 py-4 font-medium text-gray-900">6-8 mois</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">170 DH/j</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">190 DH/j</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">240 DH/j</td>
                      <td className="px-6 py-4 text-center text-pink-600 font-semibold">310 DH/j</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">-35%</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">9-11 mois</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">155 DH/j</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">175 DH/j</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">215 DH/j</td>
                      <td className="px-6 py-4 text-center text-pink-600 font-semibold">285 DH/j</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">-42%</td>
                    </tr>
                    <tr className="bg-green-50 hover:bg-green-100">
                      <td className="px-6 py-4 font-medium text-gray-900">12+ mois</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold">140 DH/j</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold">160 DH/j</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold">195 DH/j</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold">265 DH/j</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold">-50%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Settings className="h-6 w-6 text-blue-600 mr-2" />
                Types de contrats long terme
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Nos <strong>contrats location auto long terme</strong> s'adaptent 
                à différents profils et besoins :
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Contrat Flexible Standard</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Caractéristiques</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Durée</strong> : 3 à 24 mois</li>
                            <li>• <strong>Préavis</strong> : 30 jours pour résiliation</li>
                            <li>• <strong>Modification</strong> : Véhicule changeable</li>
                            <li>• <strong>Kilométrage</strong> : Illimité inclus</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Idéal pour</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Particuliers</strong> : Besoins évolutifs</li>
                            <li>• <strong>Expatriés</strong> : Installation progressive</li>
                            <li>• <strong>Étudiants</strong> : Cursus universitaire</li>
                            <li>• <strong>Retraités</strong> : Séjours saisonniers</li>
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
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Contrat Entreprise Pro</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Avantages business</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Flotte multiple</strong> : Plusieurs véhicules</li>
                            <li>• <strong>Facturation centralisée</strong> : Gestion simplifiée</li>
                            <li>• <strong>Gestionnaire dédié</strong> : Interlocuteur unique</li>
                            <li>• <strong>Reporting mensuel</strong> : Suivi détaillé</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Services inclus</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Maintenance préventive</strong> : Planifiée</li>
                            <li>• <strong>Véhicule de remplacement</strong> : Immédiat</li>
                            <li>• <strong>Assistance prioritaire</strong> : 24h/24</li>
                            <li>• <strong>Livraison/reprise</strong> : Sur site</li>
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
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Contrat Premium VIP</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Services exclusifs</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Véhicules haut de gamme</strong> : BMW, Mercedes, Audi</li>
                            <li>• <strong>Conciergerie auto</strong> : Services personnalisés</li>
                            <li>• <strong>Chauffeur occasionnel</strong> : Sur demande</li>
                            <li>• <strong>Nettoyage régulier</strong> : Intérieur/extérieur</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Clientèle cible</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Dirigeants</strong> : Image de marque</li>
                            <li>• <strong>Diplomates</strong> : Représentation officielle</li>
                            <li>• <strong>Célébrités</strong> : Discrétion assurée</li>
                            <li>• <strong>Investisseurs</strong> : Mobilité premium</li>
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
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Contrat Saisonnier</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Spécificités</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Périodes fixes</strong> : Été/hiver récurrents</li>
                            <li>• <strong>Réservation anticipée</strong> : Même véhicule</li>
                            <li>• <strong>Tarifs préférentiels</strong> : Fidélité récompensée</li>
                            <li>• <strong>Stockage gratuit</strong> : Affaires personnelles</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Profils typiques</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Hivernants européens</strong> : 4-6 mois/an</li>
                            <li>• <strong>Estivants MRE</strong> : Vacances prolongées</li>
                            <li>• <strong>Professionnels saisonniers</strong> : Tourisme</li>
                            <li>• <strong>Résidences secondaires</strong> : Propriétaires</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                Services inclus dans tous nos contrats
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Chaque <strong>contrat location auto long terme</strong> inclut 
                un ensemble complet de services pour votre tranquillité :
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  Package tout inclus
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Maintenance & Entretien</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Vidanges</strong> : Selon constructeur</li>
                      <li>• <strong>Révisions</strong> : Périodiques complètes</li>
                      <li>• <strong>Réparations</strong> : Toutes pannes</li>
                      <li>• <strong>Pneumatiques</strong> : Changement inclus</li>
                      <li>• <strong>Contrôle technique</strong> : Pris en charge</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Assurances & Protection</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Tous risques</strong> : Couverture maximale</li>
                      <li>• <strong>Vol/incendie</strong> : Protection totale</li>
                      <li>• <strong>Bris de glace</strong> : Remplacement gratuit</li>
                      <li>• <strong>Responsabilité civile</strong> : Illimitée</li>
                      <li>• <strong>Protection juridique</strong> : Défense incluse</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Services & Assistance</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Assistance 24h/24</strong> : Partout au Maroc</li>
                      <li>• <strong>Dépannage</strong> : Intervention rapide</li>
                      <li>• <strong>Remorquage</strong> : Vers garage agréé</li>
                      <li>• <strong>Véhicule de remplacement</strong> : Immédiat</li>
                      <li>• <strong>Rapatriement</strong> : Si nécessaire</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-6 w-6 text-blue-600 mr-2" />
                Processus de souscription
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Souscrire à notre <strong>location auto long terme</strong> 
                est simple et rapide :
              </p>

              <div className="grid md:grid-cols-1 gap-4 mb-8">
                <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 text-sm">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Étude de vos besoins</h4>
                      <p className="text-gray-600">
                        Entretien personnalisé pour comprendre vos besoins : durée, 
                        type de véhicule, usage, budget. Conseil expert gratuit.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-indigo-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 text-sm">2</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Proposition personnalisée</h4>
                      <p className="text-gray-600">
                        Devis détaillé avec véhicules disponibles, tarifs dégressifs, 
                        services inclus. Comparaison de plusieurs options.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-purple-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 text-sm">3</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Validation et signature</h4>
                      <p className="text-gray-600">
                        Signature du contrat, versement de la caution (réduite), 
                        planification de la livraison du véhicule.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-pink-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 text-sm">4</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Livraison et prise en main</h4>
                      <p className="text-gray-600">
                        Livraison à l'adresse souhaitée, état des lieux complet, 
                        formation aux équipements, remise des documents.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 text-sm">5</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Suivi et accompagnement</h4>
                      <p className="text-gray-600">
                        Suivi régulier par votre gestionnaire, maintenance planifiée, 
                        assistance permanente, facturation mensuelle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingDown className="h-6 w-6 text-blue-600 mr-2" />
                Analyse comparative des coûts
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Comparaison détaillée : <strong>location auto long terme</strong> 
                vs autres solutions de mobilité sur 12 mois :
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Solution</th>
                      <th className="px-6 py-4 text-center font-semibold text-blue-600">Coût initial</th>
                      <th className="px-6 py-4 text-center font-semibold text-indigo-600">Coût mensuel</th>
                      <th className="px-6 py-4 text-center font-semibold text-purple-600">Total 12 mois</th>
                      <th className="px-6 py-4 text-center font-semibold text-pink-600">Flexibilité</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-green-50 hover:bg-green-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Long terme Nassoh</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold">5 000 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold">4 200 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold">55 400 DH</td>
                      <td className="px-6 py-4 text-center text-green-600">★★★★★</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Achat véhicule neuf</td>
                      <td className="px-6 py-4 text-center text-red-600 font-semibold">200 000 DH</td>
                      <td className="px-6 py-4 text-center text-orange-600 font-semibold">2 500 DH</td>
                      <td className="px-6 py-4 text-center text-red-600 font-semibold">230 000 DH</td>
                      <td className="px-6 py-4 text-center text-red-600">★★☆☆☆</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Leasing classique</td>
                      <td className="px-6 py-4 text-center text-yellow-600 font-semibold">15 000 DH</td>
                      <td className="px-6 py-4 text-center text-yellow-600 font-semibold">5 500 DH</td>
                      <td className="px-6 py-4 text-center text-yellow-600 font-semibold">81 000 DH</td>
                      <td className="px-6 py-4 text-center text-yellow-600">★★★☆☆</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Location courte répétée</td>
                      <td className="px-6 py-4 text-center text-red-600 font-semibold">0 DH</td>
                      <td className="px-6 py-4 text-center text-red-600 font-semibold">8 500 DH</td>
                      <td className="px-6 py-4 text-center text-red-600 font-semibold">102 000 DH</td>
                      <td className="px-6 py-4 text-center text-green-600">★★★★★</td>
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
                <h3 className="text-2xl font-bold mb-4">Contrat Long Terme !</h3>
                <p className="mb-6 text-blue-100">
                  Contrats flexibles, tarifs dégressifs, service premium dès 140 DH/jour !
                </p>
                <Link 
                  href="/contact" 
                  className="block w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Demander un Contrat
                </Link>
              </div>

              {/* Contract Types */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Types de Contrats</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Settings className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Flexible Standard</span>
                  </div>
                  <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                    <Briefcase className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">Entreprise Pro</span>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <Star className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Premium VIP</span>
                  </div>
                  <div className="flex items-center p-3 bg-pink-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-pink-600 mr-3" />
                    <span className="text-gray-700">Saisonnier</span>
                  </div>
                </div>
              </div>

              {/* Duration Pricing */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tarifs par Durée</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">3-5 mois</span>
                    <span className="text-blue-600 font-semibold">190 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">6-8 mois</span>
                    <span className="text-indigo-600 font-semibold">170 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">9-11 mois</span>
                    <span className="text-purple-600 font-semibold">155 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">12+ mois</span>
                    <span className="text-green-600 font-bold">140 DH/j</span>
                  </div>
                </div>
              </div>

              {/* Included Services */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tout Inclus</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Maintenance complète</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Assurance tous risques</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Assistance 24h/24</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Véhicule de remplacement</span>
                  </div>
                </div>
              </div>

              {/* Savings Calculator */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Économies Réalisées</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">vs Court terme</span>
                    <span className="text-green-600 font-bold">-50%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">vs Achat neuf</span>
                    <span className="text-green-600 font-bold">-76%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">vs Leasing</span>
                    <span className="text-green-600 font-bold">-32%</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Long Terme</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">longterme@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">Boulevard Mohammed VI, Tanger</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 font-semibold">
                    📊 Contrats flexibles, tarifs dégressifs
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
            FAQ - Location auto long terme
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quelle est la durée minimum d'engagement ?
              </h3>
              <p className="text-gray-600">
                3 mois minimum pour bénéficier des tarifs long terme. 
                Plus la durée est longue, plus les économies sont importantes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Puis-je résilier mon contrat avant terme ?
              </h3>
              <p className="text-gray-600">
                Oui, avec un préavis de 30 jours. Des frais de résiliation 
                anticipée peuvent s'appliquer selon la durée restante.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Le kilométrage est-il vraiment illimité ?
              </h3>
              <p className="text-gray-600">
                Oui, totalement illimité ! Aucune restriction de kilométrage, 
                liberté totale de circulation au Maroc et à l'étranger.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Que se passe-t-il en cas de panne ?
              </h3>
              <p className="text-gray-600">
                Assistance 24h/24, dépannage sur place, véhicule de remplacement 
                immédiat si réparation &gt; 24h. Service complet inclus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}