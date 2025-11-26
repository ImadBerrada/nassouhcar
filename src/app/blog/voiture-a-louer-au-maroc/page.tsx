import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, DollarSign, TrendingDown, Zap, Award, Calculator, Percent, Gift, CreditCard, Target, Coins, Mountain, Waves, Camera, Compass, Route, Building, Key, Settings, Fuel, Navigation, Timer, Luggage, Globe, Wrench, Battery, Gauge, FileText, Briefcase, Home, Plane, TrendingUp, BarChart3, Crown, Trophy, Handshake, ThumbsUp, UserCheck, Headphones, Clock3, MapPin as Location, Flag, Sun, Palmtree, Sunset, Sunrise, CloudSun, Search, Filter, BookOpen, Heart, Bookmark } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Voiture à Louer au Maroc 2025 ✓ Guide Complet ✓ Meilleurs Prix',
  description: 'Voiture à louer au Maroc ✓ Guide complet 2025 ✓ 15+ villes ✓ 500+ véhicules ✓ Conseils experts ✓ Comparatif prix ✓ Réservation facile.',
  keywords: 'voiture à louer au maroc, voiture louer maroc, auto à louer maroc, location auto maroc',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/voiture-a-louer-au-maroc'
  },
  openGraph: {
    title: 'Voiture à Louer au Maroc 2025 ✓ Guide Complet ✓ Meilleurs Prix',
    description: 'Voiture à louer au Maroc ✓ Guide complet 2025 ✓ 15+ villes ✓ 500+ véhicules.',
    images: ['/car-rental-guide-morocco.webp'],
  },
}

export default function VoitureALouerAuMarocBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 via-green-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="h-6 w-6 text-red-400 mr-2" />
              <span className="text-red-400 font-semibold text-lg">Guide Complet</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-green-300 to-red-400 bg-clip-text text-transparent leading-tight">
              Voiture à Louer au Maroc
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Guide complet 2025. Comment trouver, comparer et réserver 
              la voiture parfaite pour votre séjour au Maroc !
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Mis à jour le 15 Janvier 2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>10 min de lecture</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>Guide Expert</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-red-500 to-green-500 hover:from-red-600 hover:to-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Trouver ma Voiture
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Guide Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Votre guide expert pour louer au Maroc</h2>
            <p className="text-xl text-gray-600">Tout ce qu'il faut savoir en 2025</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-red-50 to-green-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Villes analysées</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Agences comparées</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Conseils experts</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">2025</div>
              <div className="text-gray-600 font-medium">Guide actualisé</div>
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
                <Search className="h-8 w-8 text-red-600 mr-3" />
                Comment trouver une voiture à louer au Maroc ?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Trouver une <strong>voiture à louer au Maroc</strong> peut sembler 
                complexe avec la multitude d'options disponibles. Ce guide complet 
                vous accompagne étape par étape pour faire le meilleur choix selon 
                vos besoins, votre budget et votre destination.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-green-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="h-6 w-6 text-red-600 mr-2" />
                  Les étapes essentielles
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Définir ses besoins</strong> : Durée, nombre de passagers, destinations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Comparer les agences</strong> : Prix, services, avis clients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Choisir le véhicule</strong> : Adapté aux routes marocaines</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Réserver en avance</strong> : Meilleurs prix et disponibilité</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Filter className="h-6 w-6 text-red-600 mr-2" />
                Où chercher une voiture à louer au Maroc ?
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Plusieurs options s'offrent à vous pour trouver une <strong>voiture 
                à louer au Maroc</strong>. Chaque canal a ses avantages selon 
                votre profil et vos priorités :
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-l-4 border-red-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Agences Locales Spécialisées</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Avantages</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Connaissance locale</strong> : Routes, destinations</li>
                            <li>• <strong>Prix compétitifs</strong> : Pas d'intermédiaires</li>
                            <li>• <strong>Service personnalisé</strong> : Conseils experts</li>
                            <li>• <strong>Flexibilité</strong> : Négociation possible</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Recommandations</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Nassoh Car</strong> : Leader 15+ villes</li>
                            <li>• <strong>Vérifier les avis</strong> : Google, TripAdvisor</li>
                            <li>• <strong>Comparer les tarifs</strong> : Plusieurs devis</li>
                            <li>• <strong>Visiter l'agence</strong> : Voir la flotte</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Plateformes de Comparaison</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Avantages</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Comparaison facile</strong> : Tous les prix</li>
                            <li>• <strong>Réservation en ligne</strong> : 24h/24</li>
                            <li>• <strong>Avis clients</strong> : Retours d'expérience</li>
                            <li>• <strong>Promotions</strong> : Offres spéciales</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Précautions</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Lire les conditions</strong> : Frais cachés</li>
                            <li>• <strong>Vérifier l'agence</strong> : Réputation locale</li>
                            <li>• <strong>Assurances incluses</strong> : Couverture réelle</li>
                            <li>• <strong>Support client</strong> : Disponibilité</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Agences Internationales</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Avantages</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Marques reconnues</strong> : Confiance établie</li>
                            <li>• <strong>Standards uniformes</strong> : Qualité garantie</li>
                            <li>• <strong>Programmes fidélité</strong> : Points, réductions</li>
                            <li>• <strong>Présence aéroports</strong> : Facilité d'accès</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Inconvénients</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Prix plus élevés</strong> : Marges importantes</li>
                            <li>• <strong>Moins de flexibilité</strong> : Procédures strictes</li>
                            <li>• <strong>Connaissance limitée</strong> : Spécificités locales</li>
                            <li>• <strong>Service standardisé</strong> : Moins personnalisé</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-indigo-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Recommandations & Bouche-à-Oreille</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Sources fiables</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Hôtels partenaires</strong> : Recommandations testées</li>
                            <li>• <strong>Guides touristiques</strong> : Expérience terrain</li>
                            <li>• <strong>Forums voyage</strong> : Retours récents</li>
                            <li>• <strong>Réseaux sociaux</strong> : Avis authentiques</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Validation</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Croiser les sources</strong> : Plusieurs avis</li>
                            <li>• <strong>Vérifier la date</strong> : Informations récentes</li>
                            <li>• <strong>Contacter directement</strong> : Confirmer disponibilité</li>
                            <li>• <strong>Visiter si possible</strong> : Validation sur place</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-red-600 mr-2" />
                Quel type de voiture choisir au Maroc ?
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Le choix de votre <strong>voiture à louer au Maroc</strong> dépend 
                de votre itinéraire, du nombre de passagers et de votre budget. 
                Voici notre guide par catégorie :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Car className="h-8 w-8 text-red-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-900">Citadines Économiques</h4>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Prix moyen/jour</span>
                      <span className="text-red-600 font-semibold">200-350 DH</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Idéal pour :</h5>
                    <ul className="space-y-1 text-gray-600">
                      <li>• <strong>Villes</strong> : Casablanca, Rabat, Fès</li>
                      <li>• <strong>Couples</strong> : 2 personnes + bagages</li>
                      <li>• <strong>Budget serré</strong> : Économies carburant</li>
                      <li>• <strong>Courts séjours</strong> : 2-5 jours</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm text-red-800">
                      <strong>Modèles recommandés :</strong> Dacia Logan, Renault Clio, Peugeot 208
                    </p>
                  </div>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Mountain className="h-8 w-8 text-green-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-900">SUV & 4x4</h4>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Prix moyen/jour</span>
                      <span className="text-green-600 font-semibold">500-900 DH</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Idéal pour :</h5>
                    <ul className="space-y-1 text-gray-600">
                      <li>• <strong>Désert</strong> : Merzouga, Zagora</li>
                      <li>• <strong>Montagnes</strong> : Atlas, Rif</li>
                      <li>• <strong>Familles</strong> : 4-7 personnes</li>
                      <li>• <strong>Aventure</strong> : Pistes, off-road</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Modèles recommandés :</strong> Toyota Prado, Nissan Patrol, Dacia Duster
                    </p>
                  </div>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Crown className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-900">Berlines Confort</h4>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Prix moyen/jour</span>
                      <span className="text-blue-600 font-semibold">400-700 DH</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Idéal pour :</h5>
                    <ul className="space-y-1 text-gray-600">
                      <li>• <strong>Longs trajets</strong> : Confort optimal</li>
                      <li>• <strong>Voyages d'affaires</strong> : Image professionnelle</li>
                      <li>• <strong>Familles</strong> : 4-5 personnes</li>
                      <li>• <strong>Routes principales</strong> : Autoroutes</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Modèles recommandés :</strong> Mercedes Classe C, BMW Série 3, VW Passat
                    </p>
                  </div>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Briefcase className="h-8 w-8 text-indigo-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-900">Utilitaires</h4>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Prix moyen/jour</span>
                      <span className="text-indigo-600 font-semibold">450-800 DH</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Idéal pour :</h5>
                    <ul className="space-y-1 text-gray-600">
                      <li>• <strong>Déménagements</strong> : Transport objets</li>
                      <li>• <strong>Groupes nombreux</strong> : 8-9 personnes</li>
                      <li>• <strong>Matériel</strong> : Équipements volumineux</li>
                      <li>• <strong>Professionnels</strong> : Livraisons</li>
                    </ul>
                  </div>
                  <div className="bg-indigo-50 p-3 rounded-lg">
                    <p className="text-sm text-indigo-800">
                      <strong>Modèles recommandés :</strong> Renault Master, Ford Transit, Mercedes Sprinter
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="h-6 w-6 text-red-600 mr-2" />
                Comparatif des prix par ville
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Les tarifs pour une <strong>voiture à louer au Maroc</strong> 
                varient selon la ville, la saison et la demande. Voici notre 
                comparatif actualisé 2025 :
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
                  <thead className="bg-gradient-to-r from-red-500 to-green-500 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Ville</th>
                      <th className="px-6 py-4 text-center font-semibold">Économique</th>
                      <th className="px-6 py-4 text-center font-semibold">Confort</th>
                      <th className="px-6 py-4 text-center font-semibold">SUV</th>
                      <th className="px-6 py-4 text-center font-semibold">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Casablanca</td>
                      <td className="px-6 py-4 text-center text-red-600 font-semibold">250 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">450 DH</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">650 DH</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">900 DH</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Marrakech</td>
                      <td className="px-6 py-4 text-center text-red-600 font-semibold">280 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">480 DH</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">700 DH</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">950 DH</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Tanger</td>
                      <td className="px-6 py-4 text-center text-red-600 font-semibold">220 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">420 DH</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">600 DH</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">850 DH</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Agadir</td>
                      <td className="px-6 py-4 text-center text-red-600 font-semibold">260 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">460 DH</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">680 DH</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">920 DH</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Fès</td>
                      <td className="px-6 py-4 text-center text-red-600 font-semibold">200 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">400 DH</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">580 DH</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">800 DH</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-green-50 p-6 rounded-2xl mb-8">
                <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                  <TrendingDown className="h-6 w-6 text-red-600 mr-2" />
                  Conseils pour économiser
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Timing optimal</h5>
                    <ul className="space-y-1 text-gray-600">
                      <li>• <strong>Réservation anticipée</strong> : 2-4 semaines avant</li>
                      <li>• <strong>Basse saison</strong> : Novembre-Mars (hors fêtes)</li>
                      <li>• <strong>Éviter les weekends</strong> : Tarifs majorés</li>
                      <li>• <strong>Durée optimale</strong> : 7+ jours = réductions</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Stratégies prix</h5>
                    <ul className="space-y-1 text-gray-600">
                      <li>• <strong>Comparer 3-5 agences</strong> : Écarts significatifs</li>
                      <li>• <strong>Négocier directement</strong> : Agences locales</li>
                      <li>• <strong>Éviter les extras</strong> : GPS, sièges enfants</li>
                      <li>• <strong>Carburant plein</strong> : Éviter les frais</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-red-600 mr-2" />
                Documents et assurances nécessaires
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Pour louer une <strong>voiture au Maroc</strong>, vous devez 
                préparer certains documents et choisir les bonnes assurances :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <FileText className="h-6 w-6 text-red-600 mr-2" />
                    Documents Obligatoires
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Permis de conduire</strong>
                        <p className="text-sm">International ou français (+ de 1 an)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Carte d'identité/Passeport</strong>
                        <p className="text-sm">Document d'identité valide</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Carte bancaire</strong>
                        <p className="text-sm">Visa/Mastercard pour caution</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Âge minimum</strong>
                        <p className="text-sm">21 ans (25 ans pour premium)</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Shield className="h-6 w-6 text-green-600 mr-2" />
                    Assurances Recommandées
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Tous risques</strong>
                        <p className="text-sm">Couverture complète accidents</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Vol et incendie</strong>
                        <p className="text-sm">Protection contre le vol</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Assistance 24h</strong>
                        <p className="text-sm">Dépannage partout au Maroc</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Conducteur additionnel</strong>
                        <p className="text-sm">Partage de la conduite</p>
                      </div>
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
              <div className="bg-gradient-to-br from-red-600 to-green-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Trouvez Votre Voiture !</h3>
                <p className="mb-6 text-red-100">
                  Guide expert, comparatif prix, conseils personnalisés !
                </p>
                <Link 
                  href="/contact" 
                  className="block w-full bg-white text-red-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Obtenir un Devis
                </Link>
              </div>

              {/* Quick Guide */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Guide Rapide</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <Search className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-700">1. Définir ses besoins</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <Filter className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">2. Comparer les agences</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Car className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">3. Choisir le véhicule</span>
                  </div>
                  <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                    <Bookmark className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">4. Réserver en avance</span>
                  </div>
                </div>
              </div>

              {/* Price Comparison */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Prix Moyens/Jour</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-gray-700">Économique</span>
                    <span className="text-red-600 font-semibold">200-350 DH</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Confort</span>
                    <span className="text-green-600 font-semibold">400-700 DH</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">SUV</span>
                    <span className="text-blue-600 font-semibold">500-900 DH</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Premium</span>
                    <span className="text-indigo-600 font-semibold">800-1200 DH</span>
                  </div>
                </div>
              </div>

              {/* Top Cities */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Villes Populaires</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <Building className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-700">Casablanca</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <Sun className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Marrakech</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Flag className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Tanger</span>
                  </div>
                  <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                    <Waves className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">Agadir</span>
                  </div>
                </div>
              </div>

              {/* Expert Tips */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Conseils Expert</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-800 font-semibold">
                      💡 Réservez 2-4 semaines à l'avance
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800 font-semibold">
                      🔍 Comparez au moins 3 agences
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800 font-semibold">
                      🛡️ Prenez l'assurance tous risques
                    </p>
                  </div>
                  <div className="p-3 bg-indigo-50 rounded-lg">
                    <p className="text-sm text-indigo-800 font-semibold">
                      📱 Vérifiez les avis clients récents
                    </p>
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
            FAQ - Voiture à louer au Maroc
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quel est le meilleur moment pour réserver ?
              </h3>
              <p className="text-gray-600">
                2-4 semaines à l'avance pour les meilleurs prix. Évitez les 
                périodes de forte demande (été, fêtes) sauf réservation très anticipée.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Faut-il un permis international au Maroc ?
              </h3>
              <p className="text-gray-600">
                Le permis français est accepté pour les courts séjours. Le permis 
                international est recommandé pour éviter tout malentendu.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quelle assurance choisir au Maroc ?
              </h3>
              <p className="text-gray-600">
                L'assurance tous risques est fortement recommandée. Vérifiez 
                la couverture vol, assistance 24h et conducteur additionnel.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Comment éviter les frais cachés ?
              </h3>
              <p className="text-gray-600">
                Lisez attentivement le contrat, vérifiez l'état du véhicule, 
                rendez avec le plein, évitez les extras non nécessaires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}