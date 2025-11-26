import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Anchor, Navigation, Zap, Award, Ship, Luggage, Timer, Compass, Waves, Globe } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location Voiture Tanger Med 2025 - Port & Ferry | Livraison Gratuite | Nassoh Car',
  description: 'Location voiture Tanger Med ✓ Port & ferry ✓ Livraison gratuite ✓ Service coordonné ✓ Flotte moderne ✓ Réservation en ligne ✓ Assistance 24h/24.',
  keywords: 'location voiture tanger med, location voiture med, car rental tangier med, location auto tanger med, voiture location med',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/location-voiture-tanger-med'
  },
  openGraph: {
    title: 'Location Voiture Tanger Med 2025 - Port & Ferry | Livraison Gratuite | Nassoh Car',
    description: 'Location voiture Tanger Med ✓ Port & ferry ✓ Livraison gratuite ✓ Service coordonné.',
    images: ['/tangier-med-blog.jpg'],
  },
}

export default function LocationVoitureTangerMedBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-cyan-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Anchor className="h-6 w-6 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-semibold text-lg">Port Tanger Med</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
              Location Voiture Tanger Med
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Location voiture Tanger Med - Port et ferry. Livraison gratuite au port, 
              service spécialisé ferry, flotte adaptée. Votre mobilité dès l'arrivée !
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
                <span>Port & Ferry</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Réserver pour Tanger Med
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Port Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service spécialisé Tanger Med</h2>
            <p className="text-xl text-gray-600">Votre partenaire mobilité au plus grand port d'Afrique</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-cyan-600 mb-2">24h/24</div>
              <div className="text-gray-600 font-medium">Service ferry</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">15min</div>
              <div className="text-gray-600 font-medium">Livraison au port</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Véhicules disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">3000+</div>
              <div className="text-gray-600 font-medium">Clients ferry/an</div>
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
                <Ship className="h-8 w-8 text-cyan-600 mr-3" />
                Location voiture Tanger Med : Votre mobilité au port
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Tanger Med</strong> est le plus grand port d'Afrique et la principale porte d'entrée 
                maritime du Maroc. Notre service de <strong>location voiture Tanger Med</strong> 
                vous permet de récupérer votre véhicule directement au port, 
                que vous arriviez par ferry d'Espagne ou que vous transitiez par cette zone stratégique.
              </p>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-cyan-600 mr-2" />
                  Pourquoi choisir notre service Tanger Med ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Spécialisation ferry</strong> : Service adapté aux horaires des ferries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Livraison au port</strong> : Récupération directe à Tanger Med</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Disponibilité 24h/24</strong> : Service continu pour tous les ferries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Flotte adaptée</strong> : Véhicules pour tous besoins et budgets</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Waves className="h-6 w-6 text-cyan-600 mr-2" />
                Service ferry - Horaires et coordination
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre <strong>location voiture Tanger Med</strong> s'adapte parfaitement 
                aux horaires des ferries en provenance d'Espagne :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Ship className="h-5 w-5 text-cyan-600 mr-2" />
                    Ferries d'Espagne
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Algésiras - Tanger Med</strong> : 1h30 de traversée</li>
                    <li>• <strong>Tarifa - Tanger Med</strong> : 1h de traversée</li>
                    <li>• <strong>Barcelone - Tanger Med</strong> : 30h de traversée</li>
                    <li>• <strong>Motril - Tanger Med</strong> : 7h de traversée</li>
                  </ul>
                  <div className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Coordination parfaite
                  </div>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Timer className="h-5 w-5 text-blue-600 mr-2" />
                    Notre service
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Suivi des ferries</strong> : Horaires en temps réel</li>
                    <li>• <strong>Attente garantie</strong> : Même en cas de retard</li>
                    <li>• <strong>Livraison rapide</strong> : 15 min après débarquement</li>
                    <li>• <strong>Service nuit</strong> : Disponible 24h/24</li>
                  </ul>
                  <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Fiabilité totale
                  </div>
                </div>

                <div className="bg-white border-2 border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-green-600 mr-2" />
                    Points de livraison
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Terminal passagers</strong> : Sortie principale</li>
                    <li>• <strong>Parking visiteurs</strong> : Zone dédiée</li>
                    <li>• <strong>Hôtels proches</strong> : Livraison possible</li>
                    <li>• <strong>Zone commerciale</strong> : Tanger Med Zones</li>
                  </ul>
                  <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Flexibilité maximale
                  </div>
                </div>

                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Globe className="h-5 w-5 text-amber-600 mr-2" />
                    Destinations populaires
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Tanger centre</strong> : 45 min de route</li>
                    <li>• <strong>Tétouan</strong> : 30 min de route</li>
                    <li>• <strong>Chefchaouen</strong> : 1h30 de route</li>
                    <li>• <strong>Rabat</strong> : 2h30 de route</li>
                  </ul>
                  <div className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Accès facilité
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-2" />
                  Processus de récupération à Tanger Med
                </h3>
                <p className="text-gray-700 mb-4">
                  Notre processus de <strong>location voiture Tanger Med</strong> est optimisé 
                  pour les voyageurs ferry :
                </p>
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="flex items-start">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Réservation avec horaire ferry</h5>
                      <p className="text-gray-600 text-sm">Indiquez votre ferry et horaire d'arrivée lors de la réservation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Suivi en temps réel</h5>
                      <p className="text-gray-600 text-sm">Nous suivons votre ferry et nous adaptons en cas de retard</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Accueil au débarquement</h5>
                      <p className="text-gray-600 text-sm">Notre équipe vous attend avec une pancarte à votre nom</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Formalités express</h5>
                      <p className="text-gray-600 text-sm">Vérification rapide des documents et signature du contrat</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Départ immédiat</h5>
                      <p className="text-gray-600 text-sm">Votre véhicule vous attend, GPS programmé pour votre destination</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-cyan-600 mr-2" />
                Flotte adaptée au port Tanger Med
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre <strong>location voiture Tanger Med</strong> propose une flotte 
                spécialement adaptée aux besoins des voyageurs :
              </p>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Véhicules spacieux</strong> : Pour bagages ferry</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>GPS Maroc inclus</strong> : Navigation complète</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Climatisation</strong> : Confort garanti</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Carburant plein</strong> : Prêt à partir</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Assurance complète</strong> : Tous risques inclus</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Véhicules récents</strong> : Moins de 3 ans</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Entretien régulier</strong> : Fiabilité maximale</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Nettoyage complet</strong> : Hygiène parfaite</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Assistance 24h/24</strong> : Partout au Maroc</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Kilométrage illimité</strong> : Liberté totale</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Compass className="h-6 w-6 text-cyan-600 mr-2" />
                Conseils pour votre arrivée à Tanger Med
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Optimisez votre expérience de <strong>location voiture Tanger Med</strong> 
                avec nos conseils pratiques :
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Conseils pratiques Tanger Med</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Avant l'embarquement</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Réservez à l'avance</strong> : Garantie de disponibilité</li>
                      <li>• <strong>Communiquez votre ferry</strong> : Suivi personnalisé</li>
                      <li>• <strong>Préparez vos documents</strong> : Permis + passeport</li>
                      <li>• <strong>Téléchargez WhatsApp</strong> : Communication directe</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">À l'arrivée</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Cherchez notre pancarte</strong> : "Nassoh Car + votre nom"</li>
                      <li>• <strong>Vérifiez votre téléphone</strong> : Messages d'accueil</li>
                      <li>• <strong>Suivez notre équipe</strong> : Vers le véhicule</li>
                      <li>• <strong>Programmez votre GPS</strong> : Destination immédiate</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Navigation className="h-6 w-6 text-cyan-600 mr-2" />
                Tarifs spéciaux Tanger Med
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Profitez de nos tarifs préférentiels pour la <strong>location voiture Tanger Med</strong> :
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Catégorie</th>
                      <th className="px-6 py-4 text-center font-semibold text-cyan-600">Prix/jour</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-600">Idéal pour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Économique</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">200 DH</td>
                      <td className="px-6 py-4 text-center text-gray-600">Couples, courts séjours</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Berline</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">300 DH</td>
                      <td className="px-6 py-4 text-center text-gray-600">Familles, confort</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">SUV</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">450 DH</td>
                      <td className="px-6 py-4 text-center text-gray-600">Groupes, bagages</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Monospace</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">500 DH</td>
                      <td className="px-6 py-4 text-center text-gray-600">Grandes familles</td>
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
              <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Service Ferry 24h/24</h3>
                <p className="mb-6 text-cyan-100">
                  Livraison gratuite au port Tanger Med. Coordination parfaite avec tous les ferries.
                </p>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-cyan-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Réserver pour Tanger Med
                </Link>
              </div>

              {/* Ferry Schedule */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ferries principaux</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Algésiras</span>
                    <span className="text-sm text-cyan-600 font-semibold">1h30</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Tarifa</span>
                    <span className="text-sm text-cyan-600 font-semibold">1h00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Motril</span>
                    <span className="text-sm text-cyan-600 font-semibold">7h00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Barcelone</span>
                    <span className="text-sm text-cyan-600 font-semibold">30h00</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-cyan-50 rounded-lg">
                  <p className="text-sm text-cyan-800 font-semibold">
                    ✓ Service disponible pour tous les ferries
                  </p>
                </div>
              </div>

              {/* Port Services */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Services port</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Ship className="h-5 w-5 text-cyan-600 mr-3" />
                    <span className="text-gray-700">Suivi ferry temps réel</span>
                  </div>
                  <div className="flex items-center">
                    <Timer className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Livraison 15 min</span>
                  </div>
                  <div className="flex items-center">
                    <Anchor className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Accueil personnalisé</span>
                  </div>
                  <div className="flex items-center">
                    <Compass className="h-5 w-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">GPS programmé</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Tanger Med</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-cyan-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-cyan-600 mr-3" />
                    <span className="text-gray-700">tangermed@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-cyan-600 mr-3 mt-1" />
                    <span className="text-gray-700">Port Tanger Med, Terminal Passagers</span>
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
            Questions fréquentes - Tanger Med
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Que se passe-t-il si mon ferry a du retard ?
              </h3>
              <p className="text-gray-600">
                Nous suivons votre ferry en temps réel et nous adaptons automatiquement. 
                Notre équipe vous attendra quel que soit le retard.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Où exactement récupère-t-on la voiture ?
              </h3>
              <p className="text-gray-600">
                Notre équipe vous attend à la sortie du terminal passagers avec une pancarte 
                à votre nom. Impossible de nous rater !
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Le service est-il disponible la nuit ?
              </h3>
              <p className="text-gray-600">
                Oui, notre service Tanger Med fonctionne 24h/24, 7j/7. 
                Nous couvrons tous les ferries, même ceux de nuit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Peut-on rendre la voiture ailleurs qu'à Tanger Med ?
              </h3>
              <p className="text-gray-600">
                Oui, retour possible dans toutes nos agences : Tanger centre, 
                aéroport, Tétouan. Flexibilité totale pour votre voyage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}