import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Euro, Navigation, Zap, Award, Plane, Luggage, Timer } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location Voiture à l\'Aéroport de Tanger 2025 - Livraison Express | Nassoh Car',
  description: 'Location voiture aéroport Tanger ✓ Livraison express ✓ Service 24h/24 ✓ Flotte moderne ✓ Prix compétitifs ✓ Réservation en ligne.',
  keywords: 'location voiture aéroport tanger, location voiture tanger aéroport, car rental tangier airport, location auto aéroport tanger, voiture location aéroport tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/location-voiture-aeroport-tanger'
  },
  openGraph: {
    title: 'Location Voiture à l\'Aéroport de Tanger 2025 - Livraison Express | Nassoh Car',
    description: 'Location voiture aéroport Tanger ✓ Livraison express ✓ Service 24h/24 ✓ Flotte moderne.',
    images: ['/tangier-airport-blog.jpg'],
  },
}

export default function LocationVoitureAeroportTangerBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Timer className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold text-lg">Express Service</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Location Voiture à l'Aéroport de Tanger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Service express de location de voitures à l'aéroport Ibn Battuta de Tanger. 
              Récupérez votre véhicule en 15 minutes avec livraison gratuite au terminal.
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
                <span>Service Express</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Réserver Express
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Express Service Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service express à l'aéroport</h2>
            <p className="text-xl text-gray-600">La solution la plus rapide pour votre arrivée</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">15min</div>
              <div className="text-gray-600 font-medium">Livraison express</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Disponibilité</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Véhicules</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">0€</div>
              <div className="text-gray-600 font-medium">Frais cachés</div>
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
                <Plane className="h-8 w-8 text-blue-600 mr-3" />
                Location voiture à l'aéroport de Tanger : Le guide complet
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Vous cherchez une <strong>location voiture à l'aéroport de Tanger</strong> ? 
                <strong>Nassoh Car</strong> vous propose le service le plus pratique et rapide 
                pour récupérer votre véhicule dès votre arrivée à l'<strong>aéroport Ibn Battuta</strong>.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  Pourquoi choisir notre service aéroport ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Livraison express 15 minutes</strong> : Le plus rapide du marché</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Service 24h/24, 7j/7</strong> : Même les jours fériés</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Livraison gratuite</strong> : Directement au terminal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Plus de 500 véhicules</strong> : Toujours disponible</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Timer className="h-6 w-6 text-blue-600 mr-2" />
                Service express en 4 étapes
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre <strong>location voiture à l'aéroport de Tanger</strong> est optimisée pour votre confort :
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Réservation en ligne</h5>
                      <p className="text-gray-600 text-sm">Réservez votre véhicule et indiquez votre numéro de vol</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Arrivée à l'aéroport</h5>
                      <p className="text-gray-600 text-sm">Récupérez vos bagages et appelez-nous</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Livraison express</h5>
                      <p className="text-gray-600 text-sm">Votre véhicule arrive en 15 minutes maximum</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Départ immédiat</h5>
                      <p className="text-gray-600 text-sm">Signez et partez directement</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-blue-600 mr-2" />
                Flotte disponible à l'aéroport
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Pour votre <strong>location voiture à l'aéroport de Tanger</strong>, choisissez parmi :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Euro className="h-5 w-5 text-blue-600 mr-2" />
                    Économique
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Dacia Logan</strong> - À partir de 180 DH/jour</li>
                    <li>• <strong>Hyundai Grand i10</strong> - À partir de 220 DH/jour</li>
                    <li>• <strong>Renault Clio</strong> - À partir de 250 DH/jour</li>
                  </ul>
                  <p className="text-sm text-gray-500">Parfait pour les courts séjours</p>
                </div>

                <div className="bg-white border-2 border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-green-600 mr-2" />
                    Confort
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Renault Symbol</strong> - À partir de 200 DH/jour</li>
                    <li>• <strong>Toyota Corolla</strong> - À partir de 280 DH/jour</li>
                    <li>• <strong>Hyundai Elantra</strong> - À partir de 320 DH/jour</li>
                  </ul>
                  <p className="text-sm text-gray-500">Idéal pour les voyages d'affaires</p>
                </div>

                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Luggage className="h-5 w-5 text-amber-600 mr-2" />
                    Familial
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Dacia Lodgy</strong> - À partir de 350 DH/jour</li>
                    <li>• <strong>Renault Scenic</strong> - À partir de 400 DH/jour</li>
                    <li>• <strong>Toyota Avensis</strong> - À partir de 450 DH/jour</li>
                  </ul>
                  <p className="text-sm text-gray-500">Espace pour toute la famille</p>
                </div>

                <div className="bg-white border-2 border-purple-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-purple-600 mr-2" />
                    Premium
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Hyundai Tucson</strong> - À partir de 500 DH/jour</li>
                    <li>• <strong>Toyota RAV4</strong> - À partir de 600 DH/jour</li>
                    <li>• <strong>Mercedes Classe A</strong> - À partir de 700 DH/jour</li>
                  </ul>
                  <p className="text-sm text-gray-500">Luxe et technologie avancée</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Navigation className="h-6 w-6 text-blue-600 mr-2" />
                Destinations depuis l'aéroport Ibn Battuta
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Avec votre <strong>location voiture à l'aéroport de Tanger</strong>, explorez facilement :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                    Tanger et environs
                  </h5>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• <strong>Centre-ville Tanger</strong> - 15 km (20 min)</li>
                    <li>• <strong>Médina de Tanger</strong> - 18 km (25 min)</li>
                    <li>• <strong>Port de Tanger Med</strong> - 45 km (45 min)</li>
                    <li>• <strong>Cap Spartel</strong> - 30 km (35 min)</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Star className="h-4 w-4 text-amber-600 mr-2" />
                    Excursions populaires
                  </h5>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• <strong>Asilah</strong> - 45 km (45 min)</li>
                    <li>• <strong>Tétouan</strong> - 65 km (1h)</li>
                    <li>• <strong>Chefchaouen</strong> - 115 km (1h30)</li>
                    <li>• <strong>Casablanca</strong> - 340 km (3h30)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-amber-600 mr-2" />
                  Services inclus dans votre location
                </h3>
                <p className="text-gray-700 mb-4">
                  Votre <strong>location voiture à l'aéroport de Tanger</strong> inclut :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Livraison gratuite à l'aéroport</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Assurance tous risques</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Kilométrage illimité</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>GPS avec cartes du Maroc</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Assistance routière 24h/24</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Conducteur supplémentaire gratuit</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Modification gratuite</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Véhicule propre et désinfecté</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="h-6 w-6 text-blue-600 mr-2" />
                Informations pratiques aéroport
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Tout ce qu'il faut savoir sur notre <strong>location voiture à l'aéroport de Tanger</strong> :
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Horaires de service</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Tous les jours</strong> : 24h/24</li>
                      <li>• <strong>Jours fériés</strong> : Service maintenu</li>
                      <li>• <strong>Vols de nuit</strong> : Disponible</li>
                      <li>• <strong>Vols retardés</strong> : Suivi automatique</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Temps de livraison</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Réservation confirmée</strong> : 15 minutes</li>
                      <li>• <strong>Dernière minute</strong> : 30 minutes</li>
                      <li>• <strong>Véhicule spécial</strong> : 45 minutes</li>
                      <li>• <strong>Groupe</strong> : 1 heure maximum</li>
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
                <h3 className="text-2xl font-bold mb-4">Service Express !</h3>
                <p className="mb-6 text-blue-100">
                  Livraison en 15 minutes à l'aéroport Ibn Battuta. Service 24h/24.
                </p>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Réserver maintenant
                </Link>
              </div>

              {/* Airport Quick Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Infos Rapides</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Timer className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Livraison 15 min</span>
                  </div>
                  <div className="flex items-center">
                    <Plane className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Aéroport Ibn Battuta</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-amber-500 mr-3" />
                    <span className="text-gray-700">Service 24h/24</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Livraison gratuite</span>
                  </div>
                </div>
              </div>

              {/* Popular Airport Cars */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Véhicules populaires</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Dacia Logan</span>
                    <span className="text-sm text-green-600 font-semibold">180 DH/j</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Renault Symbol</span>
                    <span className="text-sm text-green-600 font-semibold">200 DH/j</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Toyota Corolla</span>
                    <span className="text-sm text-green-600 font-semibold">280 DH/j</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Dacia Lodgy</span>
                    <span className="text-sm text-green-600 font-semibold">350 DH/j</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Express</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">express@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">Aéroport Ibn Battuta, Terminal Arrivées</span>
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
            Questions fréquentes - Service Express
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Combien de temps pour recevoir ma voiture ?
              </h3>
              <p className="text-gray-600">
                Notre service express garantit une livraison en 15 minutes maximum 
                après votre appel depuis le terminal des arrivées.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Le service est-il disponible la nuit ?
              </h3>
              <p className="text-gray-600">
                Oui, notre service de location voiture à l'aéroport de Tanger 
                fonctionne 24h/24, 7j/7, même pour les vols de nuit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Y a-t-il des frais de livraison ?
              </h3>
              <p className="text-gray-600">
                Non, la livraison et la récupération à l'aéroport Ibn Battuta 
                sont entièrement gratuites, sans minimum de location.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Puis-je modifier ma réservation ?
              </h3>
              <p className="text-gray-600">
                Oui, vous pouvez modifier gratuitement votre réservation 
                jusqu'à 2 heures avant votre arrivée prévue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}