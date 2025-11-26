import type { Metadata } from 'next'
import { MapPin, Clock, Shield, ArrowRight, Phone, Mail, Calendar, Tag, CheckCircle, Timer, Zap, Calculator, Briefcase, FileText, Percent, Home, Users, Plane } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location Voiture Longue Durée Maroc 2025 ✓ Tarifs Dégressifs dès 150 DH/jour',
  description: 'Location voiture longue durée Maroc ✓ Tarifs dégressifs dès 150 DH/jour ✓ Contrats flexibles ✓ Véhicules récents ✓ Service premium.',
  keywords: 'location voiture longue durée, location voiture longue durée maroc, voiture longue durée, location auto longue durée',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/location-voiture-longue-duree'
  },
  openGraph: {
    title: 'Location Voiture Longue Durée Maroc 2025 ✓ Tarifs Dégressifs dès 150 DH/jour',
    description: 'Location voiture longue durée Maroc ✓ Tarifs dégressifs dès 150 DH/jour ✓ Contrats flexibles.',
    images: ['/long-term-car-rental-morocco.jpg'],
  },
}

export default function LocationVoitureLongueDureeBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Timer className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold text-lg">Longue Durée</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Location Voiture Longue Durée
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Solutions de mobilité longue durée au Maroc. Tarifs dégressifs, 
              maintenance incluse, flotte récente dès 150 DH/jour !
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
                <span>Longue Durée</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Voir les Offres
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Long Term Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Location longue durée au Maroc</h2>
            <p className="text-xl text-gray-600">Solutions flexibles et économiques</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">150 DH</div>
              <div className="text-gray-600 font-medium">Prix dès/jour</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">1 mois</div>
              <div className="text-gray-600 font-medium">Durée minimum</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">-40%</div>
              <div className="text-gray-600 font-medium">Économie vs court terme</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Clients satisfaits</div>
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
                <Timer className="h-8 w-8 text-blue-600 mr-3" />
                Location voiture longue durée : La solution économique
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                La <strong>location voiture longue durée</strong> avec Nassoh Car 
                représente la solution idéale pour vos besoins de mobilité étendus au Maroc. 
                Que ce soit pour un projet professionnel, un séjour prolongé ou une mission, 
                nos tarifs dégressifs vous garantissent des économies substantielles.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-2" />
                  Pourquoi choisir la longue durée ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Économies importantes</strong> : Jusqu'à -40% vs location courte</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Maintenance incluse</strong> : Entretien et réparations comprises</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Flexibilité</strong> : Changement de véhicule possible</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Service dédié</strong> : Gestionnaire personnel attitré</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="h-6 w-6 text-blue-600 mr-2" />
                Grille tarifaire longue durée
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Découvrez nos <strong>tarifs dégressifs location longue durée</strong>, 
                adaptés à la durée de votre besoin :
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Durée</th>
                      <th className="px-6 py-4 text-center font-semibold text-blue-600">Économique</th>
                      <th className="px-6 py-4 text-center font-semibold text-indigo-600">Compacte</th>
                      <th className="px-6 py-4 text-center font-semibold text-purple-600">Berline</th>
                      <th className="px-6 py-4 text-center font-semibold text-pink-600">SUV</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">1-2 mois</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">200 DH/j</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">220 DH/j</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">280 DH/j</td>
                      <td className="px-6 py-4 text-center text-pink-600 font-semibold">350 DH/j</td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-100">
                      <td className="px-6 py-4 font-medium text-gray-900">3-5 mois</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">180 DH/j</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">200 DH/j</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">250 DH/j</td>
                      <td className="px-6 py-4 text-center text-pink-600 font-semibold">320 DH/j</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">6-11 mois</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">160 DH/j</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">180 DH/j</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">220 DH/j</td>
                      <td className="px-6 py-4 text-center text-pink-600 font-semibold">290 DH/j</td>
                    </tr>
                    <tr className="bg-green-50 hover:bg-green-100">
                      <td className="px-6 py-4 font-medium text-gray-900">12+ mois</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold">150 DH/j</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold">170 DH/j</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold">200 DH/j</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold">270 DH/j</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
                Profils clients longue durée
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Nos solutions de <strong>location voiture longue durée Maroc</strong> 
                s'adaptent à tous les profils :
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Professionnels & Entreprises</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Besoins typiques</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Missions longues</strong> : Projets 3-12 mois</li>
                            <li>• <strong>Équipes mobiles</strong> : Commerciaux, consultants</li>
                            <li>• <strong>Expatriés</strong> : Installation progressive</li>
                            <li>• <strong>Entreprises</strong> : Flotte temporaire</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Avantages spécifiques</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Facturation mensuelle</strong> : Gestion simplifiée</li>
                            <li>• <strong>Contrat cadre</strong> : Conditions négociées</li>
                            <li>• <strong>Véhicules multiples</strong> : Flotte homogène</li>
                            <li>• <strong>Service B2B</strong> : Gestionnaire dédié</li>
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
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Particuliers & Familles</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Situations courantes</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Séjours prolongés</strong> : Vacances étendues</li>
                            <li>• <strong>Véhicule en panne</strong> : Remplacement temporaire</li>
                            <li>• <strong>Nouveaux résidents</strong> : Le temps de s'équiper</li>
                            <li>• <strong>Saisonniers</strong> : Hivernage, estivage</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Solutions adaptées</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Véhicules familiaux</strong> : SUV, monospaces</li>
                            <li>• <strong>Assurance tous risques</strong> : Sérénité totale</li>
                            <li>• <strong>Kilométrage illimité</strong> : Liberté de mouvement</li>
                            <li>• <strong>Assistance 24h/24</strong> : Support permanent</li>
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
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Étudiants & Stagiaires</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Profils concernés</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Étudiants Erasmus</strong> : Semestre/année</li>
                            <li>• <strong>Stagiaires longue durée</strong> : 3-6 mois</li>
                            <li>• <strong>Doctorants</strong> : Recherches terrain</li>
                            <li>• <strong>Jeunes professionnels</strong> : Premier emploi</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Offres spéciales</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Tarifs étudiants</strong> : Remises spéciales</li>
                            <li>• <strong>Caution réduite</strong> : Facilités de paiement</li>
                            <li>• <strong>Véhicules économiques</strong> : Budget maîtrisé</li>
                            <li>• <strong>Flexibilité</strong> : Adaptation aux études</li>
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
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Retraités & Séniors</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Besoins spécifiques</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Hivernage Maroc</strong> : 3-6 mois/an</li>
                            <li>• <strong>Voyages prolongés</strong> : Découverte du pays</li>
                            <li>• <strong>Visites familiales</strong> : Séjours étendus</li>
                            <li>• <strong>Soins médicaux</strong> : Traitements longs</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Services premium</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Véhicules confort</strong> : Automatiques, climatisés</li>
                            <li>• <strong>Livraison/reprise</strong> : À domicile/hôtel</li>
                            <li>• <strong>Assistance renforcée</strong> : Support prioritaire</li>
                            <li>• <strong>Tarifs préférentiels</strong> : Fidélité récompensée</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                Services inclus longue durée
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre <strong>location voiture longue durée</strong> inclut 
                tous les services essentiels pour votre tranquillité :
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  Tout inclus dans votre contrat
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Maintenance & Entretien</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Vidanges régulières</strong> : Selon préconisations</li>
                      <li>• <strong>Révisions périodiques</strong> : Entretien complet</li>
                      <li>• <strong>Réparations</strong> : Pièces et main d'œuvre</li>
                      <li>• <strong>Pneumatiques</strong> : Changement si usure</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Assurances & Services</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Tous risques</strong> : Couverture maximale</li>
                      <li>• <strong>Assistance 24h/24</strong> : Dépannage, remorquage</li>
                      <li>• <strong>Véhicule de remplacement</strong> : En cas d'immobilisation</li>
                      <li>• <strong>Kilométrage illimité</strong> : Liberté totale</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-6 w-6 text-blue-600 mr-2" />
                Processus de location longue durée
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Découvrez notre processus simplifié pour votre 
                <strong>location voiture longue durée Maroc</strong> :
              </p>

              <div className="grid md:grid-cols-1 gap-4 mb-8">
                <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 text-sm">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Demande de devis personnalisé</h4>
                      <p className="text-gray-600">
                        Contactez-nous avec vos besoins : durée, type de véhicule, dates. 
                        Devis gratuit sous 2h avec tarifs dégressifs adaptés.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-indigo-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 text-sm">2</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Validation et réservation</h4>
                      <p className="text-gray-600">
                        Validation du devis, signature du contrat longue durée, 
                        versement de la caution (réduite pour longue durée).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-purple-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 text-sm">3</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Préparation du véhicule</h4>
                      <p className="text-gray-600">
                        Préparation complète : nettoyage, vérifications techniques, 
                        plein de carburant, équipements spécifiques si demandés.
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
                        Livraison où vous voulez, état des lieux détaillé, 
                        formation aux équipements, remise des documents.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 text-sm">5</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Suivi et maintenance</h4>
                      <p className="text-gray-600">
                        Suivi régulier par votre gestionnaire, maintenance programmée, 
                        assistance 24h/24, facturation mensuelle simplifiée.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Percent className="h-6 w-6 text-blue-600 mr-2" />
                Comparaison économique
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Découvrez les économies réalisées avec notre 
                <strong>location longue durée</strong> vs autres solutions :
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Solution</th>
                      <th className="px-6 py-4 text-center font-semibold text-blue-600">6 mois</th>
                      <th className="px-6 py-4 text-center font-semibold text-indigo-600">12 mois</th>
                      <th className="px-6 py-4 text-center font-semibold text-purple-600">Avantages</th>
                      <th className="px-6 py-4 text-center font-semibold text-pink-600">Inconvénients</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-green-50 hover:bg-green-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Longue durée Nassoh</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold">28 800 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold">54 750 DH</td>
                      <td className="px-6 py-4 text-center text-green-600">Tout inclus</td>
                      <td className="px-6 py-4 text-center text-gray-500">Engagement durée</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Location courte répétée</td>
                      <td className="px-6 py-4 text-center text-red-600 font-semibold">45 000 DH</td>
                      <td className="px-6 py-4 text-center text-red-600 font-semibold">90 000 DH</td>
                      <td className="px-6 py-4 text-center text-blue-600">Flexibilité</td>
                      <td className="px-6 py-4 text-center text-red-600">Coût élevé</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Achat véhicule neuf</td>
                      <td className="px-6 py-4 text-center text-orange-600 font-semibold">150 000 DH</td>
                      <td className="px-6 py-4 text-center text-orange-600 font-semibold">180 000 DH</td>
                      <td className="px-6 py-4 text-center text-blue-600">Propriété</td>
                      <td className="px-6 py-4 text-center text-red-600">Investissement lourd</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Leasing automobile</td>
                      <td className="px-6 py-4 text-center text-yellow-600 font-semibold">35 000 DH</td>
                      <td className="px-6 py-4 text-center text-yellow-600 font-semibold">65 000 DH</td>
                      <td className="px-6 py-4 text-center text-blue-600">Véhicule neuf</td>
                      <td className="px-6 py-4 text-center text-red-600">Engagement long</td>
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
                <h3 className="text-2xl font-bold mb-4">Devis Longue Durée !</h3>
                <p className="mb-6 text-blue-100">
                  Tarifs dégressifs, maintenance incluse, service dédié dès 150 DH/jour !
                </p>
                <Link 
                  href="/contact" 
                  className="block w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Demander un Devis
                </Link>
              </div>

              {/* Duration Pricing */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tarifs par Durée</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">1-2 mois</span>
                    <span className="text-blue-600 font-semibold">200 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">3-5 mois</span>
                    <span className="text-indigo-600 font-semibold">180 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">6-11 mois</span>
                    <span className="text-purple-600 font-semibold">160 DH/j</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">12+ mois</span>
                    <span className="text-green-600 font-bold">150 DH/j</span>
                  </div>
                </div>
              </div>

              {/* Client Profiles */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Profils Clients</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Briefcase className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Professionnels</span>
                  </div>
                  <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                    <Home className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">Particuliers</span>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Étudiants</span>
                  </div>
                  <div className="flex items-center p-3 bg-pink-50 rounded-lg">
                    <Plane className="h-5 w-5 text-pink-600 mr-3" />
                    <span className="text-gray-700">Retraités</span>
                  </div>
                </div>
              </div>

              {/* Included Services */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Services Inclus</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Maintenance</span>
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
                    <span className="text-gray-700">Kilométrage illimité</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Longue Durée</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">longue-duree@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">Boulevard Mohammed VI, Tanger</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 font-semibold">
                    ⏱️ Devis sous 2h, service dédié
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
            FAQ - Location longue durée
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quelle est la durée minimum ?
              </h3>
              <p className="text-gray-600">
                1 mois minimum pour bénéficier des tarifs longue durée. 
                Plus la durée est longue, plus les tarifs sont avantageux.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                La maintenance est-elle vraiment incluse ?
              </h3>
              <p className="text-gray-600">
                Oui, entièrement ! Vidanges, révisions, réparations, pneumatiques. 
                Seul le carburant reste à votre charge.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Puis-je changer de véhicule en cours ?
              </h3>
              <p className="text-gray-600">
                Oui, sous conditions. Changement possible selon disponibilités, 
                avec ajustement tarifaire si nécessaire.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Comment se passe la facturation ?
              </h3>
              <p className="text-gray-600">
                Facturation mensuelle, prélèvement automatique possible. 
                Factures détaillées, TVA récupérable pour les entreprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}