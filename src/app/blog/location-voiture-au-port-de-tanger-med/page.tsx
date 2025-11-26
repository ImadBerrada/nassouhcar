import type { Metadata } from 'next'
import { MapPin, Clock, ArrowRight, Phone, Mail, Calendar, Tag, CheckCircle, Navigation, Zap, Award, Ship, Timer, Compass, Waves, Globe, Route, Truck, Car, Shield } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location Voiture au Port de Tanger Med 2025 - Ferry & Cargo | Service 24h/24',
  description: 'Location voiture au port de Tanger Med ✓ Service ferry 24h/24 ✓ Livraison gratuite ✓ Flotte adaptée aux voyageurs internationaux ✓ Coordination temps réel.',
  keywords: 'location voiture port tanger med, location voiture tanger med port, car rental tangier med port, location auto port med, voiture location ferry tanger med',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/location-voiture-au-port-de-tanger-med'
  },
  openGraph: {
    title: 'Location Voiture au Port de Tanger Med 2025 - Ferry & Cargo | Service 24h/24',
    description: 'Location voiture au port de Tanger Med ✓ Service ferry 24h/24 ✓ Livraison gratuite ✓ Flotte adaptée aux voyageurs internationaux.',
    images: ['/tangier-med-port-blog.jpg'],
  },
}

export default function LocationVoiturePortTangerMedBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-900 via-cyan-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Truck className="h-6 w-6 text-teal-400 mr-2" />
              <span className="text-teal-400 font-semibold text-lg">Port Tanger Med</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
              Location Voiture au Port de Tanger Med
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Location voiture au port de Tanger Med - Le plus grand complexe portuaire d'Afrique. 
              Service ferry 24h/24, livraison gratuite, flotte adaptée aux voyageurs internationaux !
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
                <span>Port International</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service au plus grand port d'Afrique</h2>
            <p className="text-xl text-gray-600">Votre partenaire mobilité au complexe portuaire Tanger Med</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-teal-600 mb-2">24h/24</div>
              <div className="text-gray-600 font-medium">Service ferry continu</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-cyan-600 mb-2">20min</div>
              <div className="text-gray-600 font-medium">Livraison au port</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Véhicules disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">5000+</div>
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
                <Ship className="h-8 w-8 text-teal-600 mr-3" />
                Location voiture au port de Tanger Med : Gateway vers l'Europe
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Le <strong>port de Tanger Med</strong> est le plus grand complexe portuaire d'Afrique 
                et la principale porte d'entrée maritime entre l'Europe et l'Afrique. 
                Notre service de <strong>location voiture au port de Tanger Med</strong> 
                vous permet de récupérer votre véhicule directement au port, 
                que vous arriviez par ferry d'Espagne, d'Italie ou de France.
              </p>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-teal-600 mr-2" />
                  Pourquoi choisir notre service Tanger Med ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Port international</strong> : Plus grand port d'Afrique</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Service ferry 24h/24</strong> : Tous ferries Europe-Maroc</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Équipe multilingue</strong> : Français, anglais, espagnol</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Flotte internationale</strong> : Adaptée aux voyageurs européens</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Waves className="h-6 w-6 text-teal-600 mr-2" />
                Ferries internationaux - Couverture complète
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre <strong>location voiture au port de Tanger Med</strong> couvre tous les ferries 
                en provenance d'Europe :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-teal-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Ship className="h-5 w-5 text-teal-600 mr-2" />
                    Ferries d'Espagne
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Algésiras - Tanger Med</strong> : 1h30 (fréquent)</li>
                    <li>• <strong>Tarifa - Tanger Med</strong> : 1h00 (rapide)</li>
                    <li>• <strong>Barcelone - Tanger Med</strong> : 30h (cargo)</li>
                    <li>• <strong>Motril - Tanger Med</strong> : 7h (nuit)</li>
                  </ul>
                  <div className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Service principal
                  </div>
                </div>

                <div className="bg-white border-2 border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Globe className="h-5 w-5 text-cyan-600 mr-2" />
                    Ferries d'Europe
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Sète - Tanger Med</strong> : 36h (France)</li>
                    <li>• <strong>Gênes - Tanger Med</strong> : 48h (Italie)</li>
                    <li>• <strong>Civitavecchia - Tanger Med</strong> : 52h (Rome)</li>
                    <li>• <strong>Livourne - Tanger Med</strong> : 44h (Toscane)</li>
                  </ul>
                  <div className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Liaisons longues
                  </div>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Timer className="h-5 w-5 text-blue-600 mr-2" />
                    Notre coordination
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Suivi temps réel</strong> : Tous les ferries</li>
                    <li>• <strong>Adaptation horaires</strong> : Retards gérés</li>
                    <li>• <strong>Équipe 24h/24</strong> : Service continu</li>
                    <li>• <strong>Communication</strong> : WhatsApp multilingue</li>
                  </ul>
                  <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Fiabilité totale
                  </div>
                </div>

                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-amber-600 mr-2" />
                    Points de livraison
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Terminal passagers</strong> : Sortie principale</li>
                    <li>• <strong>Zone commerciale</strong> : Tanger Med Zones</li>
                    <li>• <strong>Hôtels proches</strong> : Livraison possible</li>
                    <li>• <strong>Parking sécurisé</strong> : Zone dédiée</li>
                  </ul>
                  <div className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Flexibilité maximale
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-cyan-600 mr-2" />
                  Processus de récupération Tanger Med
                </h3>
                <p className="text-gray-700 mb-4">
                  Notre processus de <strong>location voiture au port de Tanger Med</strong> 
                  est spécialement conçu pour les voyageurs internationaux :
                </p>
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="flex items-start">
                    <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Réservation avec ferry</h5>
                      <p className="text-gray-600 text-sm">Indiquez votre compagnie, ferry et horaire d'arrivée prévue</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Suivi automatique</h5>
                      <p className="text-gray-600 text-sm">Nous suivons votre ferry en temps réel et nous adaptons</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Accueil multilingue</h5>
                      <p className="text-gray-600 text-sm">Notre équipe vous accueille dans votre langue</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Formalités internationales</h5>
                      <p className="text-gray-600 text-sm">Vérification permis international et documents voyage</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Départ vers votre destination</h5>
                      <p className="text-gray-600 text-sm">GPS programmé, briefing route, assistance 24h/24</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-teal-600 mr-2" />
                Flotte internationale Tanger Med
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre <strong>location voiture au port de Tanger Med</strong> propose une flotte 
                spécialement adaptée aux voyageurs internationaux :
              </p>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-3" />
                      <span><strong>Véhicules spacieux</strong> : Pour bagages ferry</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-3" />
                      <span><strong>GPS Europe-Maroc</strong> : Navigation complète</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-3" />
                      <span><strong>Climatisation</strong> : Confort garanti</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-3" />
                      <span><strong>Carburant plein</strong> : Prêt à partir</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-3" />
                      <span><strong>Assurance internationale</strong> : Couverture complète</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-3" />
                      <span><strong>Véhicules récents</strong> : Moins de 3 ans</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-3" />
                      <span><strong>Entretien premium</strong> : Standards européens</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-3" />
                      <span><strong>Nettoyage complet</strong> : Hygiène parfaite</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-3" />
                      <span><strong>Assistance multilingue</strong> : 24h/24 partout</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-3" />
                      <span><strong>Kilométrage illimité</strong> : Liberté totale</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Compass className="h-6 w-6 text-teal-600 mr-2" />
                Guide voyageurs internationaux
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Optimisez votre expérience de <strong>location voiture au port de Tanger Med</strong> 
                avec nos conseils pour voyageurs internationaux :
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Conseils voyageurs internationaux</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Avant l'embarquement</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Permis international</strong> : Obligatoire au Maroc</li>
                      <li>• <strong>Réservation confirmée</strong> : Email de confirmation</li>
                      <li>• <strong>Numéro ferry</strong> : Compagnie et horaire</li>
                      <li>• <strong>WhatsApp activé</strong> : Communication directe</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">À l'arrivée Tanger Med</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Cherchez "Nassoh Car"</strong> : Pancarte à votre nom</li>
                      <li>• <strong>Documents prêts</strong> : Permis + passeport</li>
                      <li>• <strong>Vérification véhicule</strong> : État et équipements</li>
                      <li>• <strong>Briefing route</strong> : Conseils circulation Maroc</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Route className="h-6 w-6 text-teal-600 mr-2" />
                Destinations depuis Tanger Med
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Depuis Tanger Med, explorez le Maroc avec votre <strong>location voiture</strong> :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-lg text-gray-900 mb-4">Nord du Maroc</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Tanger centre</strong> : 45 min</li>
                    <li>• <strong>Tétouan</strong> : 30 min</li>
                    <li>• <strong>Chefchaouen</strong> : 1h30</li>
                    <li>• <strong>Asilah</strong> : 1h15</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-lg text-gray-900 mb-4">Villes impériales</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Rabat</strong> : 2h30</li>
                    <li>• <strong>Casablanca</strong> : 3h30</li>
                    <li>• <strong>Fès</strong> : 3h00</li>
                    <li>• <strong>Meknès</strong> : 2h45</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Navigation className="h-6 w-6 text-teal-600 mr-2" />
                Tarifs internationaux Tanger Med
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Tarifs spéciaux pour la <strong>location voiture au port de Tanger Med</strong> :
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Catégorie</th>
                      <th className="px-6 py-4 text-center font-semibold text-teal-600">Prix/jour</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-600">Idéal pour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Économique</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-semibold">220 DH</td>
                      <td className="px-6 py-4 text-center text-gray-600">Couples, courts séjours</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Berline</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-semibold">320 DH</td>
                      <td className="px-6 py-4 text-center text-gray-600">Familles, confort</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">SUV</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-semibold">480 DH</td>
                      <td className="px-6 py-4 text-center text-gray-600">Groupes, bagages ferry</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Monospace</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-semibold">550 DH</td>
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
              <div className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Service Ferry International</h3>
                <p className="mb-6 text-teal-100">
                  Livraison gratuite au port Tanger Med. Service 24h/24 pour tous les ferries Europe-Maroc.
                </p>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-teal-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Réserver Tanger Med
                </Link>
              </div>

              {/* Ferry Routes */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ferries principaux</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Algésiras (ESP)</span>
                    <span className="text-sm text-teal-600 font-semibold">1h30</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Tarifa (ESP)</span>
                    <span className="text-sm text-teal-600 font-semibold">1h00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Sète (FRA)</span>
                    <span className="text-sm text-teal-600 font-semibold">36h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Gênes (ITA)</span>
                    <span className="text-sm text-teal-600 font-semibold">48h</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded-lg">
                  <p className="text-sm text-teal-800 font-semibold">
                    ✓ Tous ferries Europe couverts
                  </p>
                </div>
              </div>

              {/* International Services */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Services internationaux</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-teal-600 mr-3" />
                    <span className="text-gray-700">Équipe multilingue</span>
                  </div>
                  <div className="flex items-center">
                    <Timer className="h-5 w-5 text-cyan-600 mr-3" />
                    <span className="text-gray-700">Suivi ferry temps réel</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Assurance internationale</span>
                  </div>
                  <div className="flex items-center">
                    <Navigation className="h-5 w-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">GPS Europe-Maroc</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Tanger Med</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-teal-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-teal-600 mr-3" />
                    <span className="text-gray-700">tangermed@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-teal-600 mr-3 mt-1" />
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
            Questions fréquentes - Port Tanger Med
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Faut-il un permis international pour louer ?
              </h3>
              <p className="text-gray-600">
                Oui, le permis de conduire international est obligatoire au Maroc 
                pour les ressortissants étrangers. Assurez-vous de l'avoir avant votre voyage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Que faire si mon ferry a plusieurs heures de retard ?
              </h3>
              <p className="text-gray-600">
                Nous suivons tous les ferries en temps réel. Notre équipe s'adapte automatiquement 
                et vous attendra quel que soit le retard, sans frais supplémentaires.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                L'assurance couvre-t-elle tout le Maroc ?
              </h3>
              <p className="text-gray-600">
                Oui, notre assurance tous risques couvre l'ensemble du territoire marocain. 
                Vous pouvez voyager partout en toute sérénité.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Peut-on rendre la voiture dans une autre ville ?
              </h3>
              <p className="text-gray-600">
                Oui, retour possible dans toutes nos agences : Tanger, Tétouan, Rabat, Casablanca. 
                Flexibilité totale pour votre circuit au Maroc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}