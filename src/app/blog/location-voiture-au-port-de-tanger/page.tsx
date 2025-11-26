import type { Metadata } from 'next'
import { MapPin, Clock, ArrowRight, Phone, Mail, Calendar, Tag, CheckCircle, Anchor, Navigation, Zap, Award, Ship, Timer, Compass, Waves, Globe, Route, Car } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location Voiture au Port de Tanger 2025 - Service Express | Livraison Gratuite',
  description: 'Location voiture au port de Tanger ✓ Service express ✓ Livraison gratuite ✓ Coordination ferry ✓ Flotte moderne ✓ Réservation en ligne.',
  keywords: 'location voiture port tanger, location voiture au port de tanger, car rental tangier port, location auto port tanger, voiture location port tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/location-voiture-au-port-de-tanger'
  },
  openGraph: {
    title: 'Location Voiture au Port de Tanger 2025 - Service Express | Livraison Gratuite',
    description: 'Location voiture au port de Tanger ✓ Service express ✓ Livraison gratuite ✓ Coordination ferry.',
    images: ['/tangier-port-blog.jpg'],
  },
}

export default function LocationVoiturePortTangerBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Ship className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold text-lg">Port de Tanger</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Location Voiture au Port de Tanger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Location voiture au port de Tanger - Service express et livraison gratuite. 
              Votre mobilité dès l'arrivée au port historique de Tanger !
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
                <span>Port Historique</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Réserver au Port de Tanger
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Port Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service port de Tanger</h2>
            <p className="text-xl text-gray-600">Votre partenaire mobilité au cœur de la ville blanche</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">10min</div>
              <div className="text-gray-600 font-medium">Livraison express</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24h/24</div>
              <div className="text-gray-600 font-medium">Service continu</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">80+</div>
              <div className="text-gray-600 font-medium">Véhicules port</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">2500+</div>
              <div className="text-gray-600 font-medium">Clients port/an</div>
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
                <Anchor className="h-8 w-8 text-blue-600 mr-3" />
                Location voiture au port de Tanger : Votre mobilité immédiate
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Le <strong>port de Tanger</strong> est le port historique de la ville, situé en plein centre-ville. 
                Notre service de <strong>location voiture au port de Tanger</strong> 
                vous permet de récupérer votre véhicule directement au port, 
                que vous arriviez par ferry ou que vous souhaitiez explorer la région depuis ce point central.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  Pourquoi choisir notre service au port de Tanger ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Localisation centrale</strong> : En plein cœur de Tanger</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Livraison express</strong> : 10 minutes maximum</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Accès immédiat</strong> : Médina et centre-ville à pied</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Service personnalisé</strong> : Équipe dédiée au port</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Route className="h-6 w-6 text-blue-600 mr-2" />
                Avantages du port de Tanger vs Tanger Med
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre <strong>location voiture au port de Tanger</strong> offre des avantages uniques 
                par rapport au port Tanger Med :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    Port de Tanger (Centre)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Centre-ville</strong> : Accès immédiat à pied</li>
                    <li>• <strong>Médina</strong> : 5 minutes de marche</li>
                    <li>• <strong>Hôtels</strong> : Proximité des hébergements</li>
                    <li>• <strong>Restaurants</strong> : Quartier gastronomique</li>
                  </ul>
                  <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Localisation idéale
                  </div>
                </div>

                <div className="bg-white border-2 border-indigo-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Zap className="h-5 w-5 text-indigo-600 mr-2" />
                    Notre service express
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Livraison 10 min</strong> : Service ultra-rapide</li>
                    <li>• <strong>Équipe dédiée</strong> : Spécialistes du port</li>
                    <li>• <strong>Formalités express</strong> : Procédure simplifiée</li>
                    <li>• <strong>Véhicule prêt</strong> : GPS programmé</li>
                  </ul>
                  <div className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Efficacité maximale
                  </div>
                </div>

                <div className="bg-white border-2 border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Compass className="h-5 w-5 text-green-600 mr-2" />
                    Destinations proches
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Médina de Tanger</strong> : 5 min à pied</li>
                    <li>• <strong>Kasbah</strong> : 10 min à pied</li>
                    <li>• <strong>Corniche</strong> : 15 min en voiture</li>
                    <li>• <strong>Cap Spartel</strong> : 30 min en voiture</li>
                  </ul>
                  <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Accès privilégié
                  </div>
                </div>

                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Globe className="h-5 w-5 text-amber-600 mr-2" />
                    Circuits recommandés
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Tour de Tanger</strong> : Journée complète</li>
                    <li>• <strong>Tétouan</strong> : 1h de route</li>
                    <li>• <strong>Chefchaouen</strong> : 2h de route</li>
                    <li>• <strong>Asilah</strong> : 45 min de route</li>
                  </ul>
                  <div className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Découverte facilitée
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Timer className="h-6 w-6 text-indigo-600 mr-2" />
                  Processus de récupération au port de Tanger
                </h3>
                <p className="text-gray-700 mb-4">
                  Notre processus de <strong>location voiture au port de Tanger</strong> est optimisé 
                  pour une récupération ultra-rapide :
                </p>
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Réservation avec localisation</h5>
                      <p className="text-gray-600 text-sm">Précisez "Port de Tanger centre" lors de votre réservation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Confirmation et contact</h5>
                      <p className="text-gray-600 text-sm">Nous vous contactons 30 min avant pour confirmer le point de rencontre</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Rencontre au port</h5>
                      <p className="text-gray-600 text-sm">Notre équipe vous attend à l'entrée principale du port</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Formalités express</h5>
                      <p className="text-gray-600 text-sm">Vérification rapide et signature du contrat (5 minutes max)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Départ immédiat</h5>
                      <p className="text-gray-600 text-sm">Votre véhicule vous attend, prêt à explorer Tanger</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-blue-600 mr-2" />
                Flotte adaptée au port de Tanger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre <strong>location voiture au port de Tanger</strong> propose une flotte 
                parfaitement adaptée à la découverte de la ville et de la région :
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>Citadines</strong> : Parfaites pour la médina</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>Berlines confort</strong> : Idéales pour les circuits</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>SUV familiaux</strong> : Espace et confort</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>GPS Tanger inclus</strong> : Navigation optimisée</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>Climatisation</strong> : Confort toute l'année</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>Véhicules récents</strong> : Moins de 2 ans</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>Entretien professionnel</strong> : Fiabilité garantie</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>Nettoyage complet</strong> : Hygiène parfaite</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>Assistance locale</strong> : Support Tanger 24h/24</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>Kilométrage libre</strong> : Explorez sans limite</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Navigation className="h-6 w-6 text-blue-600 mr-2" />
                Guide pratique - Port de Tanger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Maximisez votre expérience de <strong>location voiture au port de Tanger</strong> 
                avec nos conseils d'expert :
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Conseils pratiques port de Tanger</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Avant votre arrivée</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Réservez à l'avance</strong> : Garantie de disponibilité</li>
                      <li>• <strong>Précisez "port centre"</strong> : Éviter la confusion avec Tanger Med</li>
                      <li>• <strong>Téléchargez nos contacts</strong> : Communication directe</li>
                      <li>• <strong>Préparez vos documents</strong> : Permis + pièce d'identité</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">À votre arrivée</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Appelez-nous</strong> : Confirmation de votre présence</li>
                      <li>• <strong>Rendez-vous entrée principale</strong> : Point de rencontre fixe</li>
                      <li>• <strong>Vérification rapide</strong> : État du véhicule</li>
                      <li>• <strong>Briefing Tanger</strong> : Conseils de circulation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Waves className="h-6 w-6 text-blue-600 mr-2" />
                Tarifs préférentiels port de Tanger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Profitez de nos tarifs spéciaux pour la <strong>location voiture au port de Tanger</strong> :
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Catégorie</th>
                      <th className="px-6 py-4 text-center font-semibold text-blue-600">Prix/jour</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-600">Idéal pour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Citadine</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">180 DH</td>
                      <td className="px-6 py-4 text-center text-gray-600">Ville, médina</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Berline</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">280 DH</td>
                      <td className="px-6 py-4 text-center text-gray-600">Confort, circuits</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">SUV</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">420 DH</td>
                      <td className="px-6 py-4 text-center text-gray-600">Familles, bagages</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Confort</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">600 DH</td>
                      <td className="px-6 py-4 text-center text-gray-600">Confort, affaires</td>
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
                <h3 className="text-2xl font-bold mb-4">Service Express Port</h3>
                <p className="mb-6 text-blue-100">
                  Livraison gratuite au port de Tanger centre. Récupération en 10 minutes maximum.
                </p>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Réserver au Port
                </Link>
              </div>

              {/* Port Advantages */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Avantages port centre</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Médina</span>
                    <span className="text-sm text-blue-600 font-semibold">5 min à pied</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Kasbah</span>
                    <span className="text-sm text-blue-600 font-semibold">10 min à pied</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Centre-ville</span>
                    <span className="text-sm text-blue-600 font-semibold">Immédiat</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Corniche</span>
                    <span className="text-sm text-blue-600 font-semibold">15 min</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 font-semibold">
                    ✓ Localisation centrale idéale
                  </p>
                </div>
              </div>

              {/* Quick Services */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Services express</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Timer className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Livraison 10 min</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">Formalités express</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Localisation centrale</span>
                  </div>
                  <div className="flex items-center">
                    <Navigation className="h-5 w-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">GPS programmé</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Port Tanger</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">port@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">Port de Tanger, Entrée Principale</span>
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
            Questions fréquentes - Port de Tanger
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quelle est la différence avec Tanger Med ?
              </h3>
              <p className="text-gray-600">
                Le port de Tanger est en centre-ville, idéal pour visiter la médina et la kasbah. 
                Tanger Med est à 45 km, plus adapté aux ferries internationaux.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Où exactement se fait la remise des clés ?
              </h3>
              <p className="text-gray-600">
                À l'entrée principale du port de Tanger, près des guichets. 
                Notre équipe vous attend avec une pancarte à votre nom.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Peut-on se garer facilement près du port ?
              </h3>
              <p className="text-gray-600">
                Oui, plusieurs parkings sont disponibles près du port. 
                Nous vous indiquons les meilleurs emplacements lors de la remise.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Le service fonctionne-t-il le weekend ?
              </h3>
              <p className="text-gray-600">
                Oui, notre service au port de Tanger fonctionne 7j/7, 
                y compris les weekends et jours fériés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}