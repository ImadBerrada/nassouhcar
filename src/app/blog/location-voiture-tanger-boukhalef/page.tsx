import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Euro, Navigation, Zap, Award, Plane, Luggage, Timer, Building } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location Voiture Tanger Boukhalef 2025 - Aéroport Ibn Battuta | Nassoh Car',
  description: 'Location voiture Tanger Boukhalef (aéroport Ibn Battuta) ✓ Service express 15min ✓ Livraison gratuite ✓ 500+ véhicules ✓ Réservation 24h/24.',
  keywords: 'location voiture tanger boukhalef, location voiture aéroport boukhalef, car rental tangier boukhalef, location auto tanger boukhalef, nassoh car boukhalef',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/location-voiture-tanger-boukhalef'
  },
  openGraph: {
    title: 'Location Voiture Tanger Boukhalef 2025 - Aéroport Ibn Battuta',
    description: 'Location voiture Tanger Boukhalef (aéroport Ibn Battuta) ✓ Service express 15min ✓ Livraison gratuite ✓ 500+ véhicules disponibles.',
    images: ['/tangier-boukhalef-airport.webp'],
  },
}

export default function LocationVoitureTangerBoukhalefBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Building className="h-6 w-6 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-semibold text-lg">Aéroport Boukhalef</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
              Location Voiture Tanger Boukhalef
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Service premium de location de voitures à l'aéroport Tanger-Boukhalef (Ibn Battuta). 
              Livraison express en 15 minutes, service 24h/24 et flotte de plus de 500 véhicules.
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
                <span>Aéroport Boukhalef</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Réserver à Boukhalef
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Boukhalef Airport Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service aéroport Tanger-Boukhalef</h2>
            <p className="text-xl text-gray-600">L'aéroport international Ibn Battuta à votre service</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-cyan-600 mb-2">15min</div>
              <div className="text-gray-600 font-medium">Livraison express</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Service continu</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Véhicules disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">0€</div>
              <div className="text-gray-600 font-medium">Frais de livraison</div>
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
                <Building className="h-8 w-8 text-cyan-600 mr-3" />
                Location voiture Tanger Boukhalef : Guide complet 2025
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                L'<strong>aéroport Tanger-Boukhalef</strong> (officiellement aéroport Ibn Battuta) est la porte d'entrée 
                principale du nord du Maroc. <strong>Nassoh Car</strong> vous propose le service de 
                <strong>location voiture Tanger Boukhalef</strong> le plus pratique et efficace.
              </p>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-cyan-600 mr-2" />
                  Pourquoi choisir Nassoh Car à Boukhalef ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Présence officielle</strong> : Partenaire agréé de l'aéroport</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Livraison express</strong> : 15 minutes maximum</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Service 24h/24</strong> : Tous les vols couverts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Flotte moderne</strong> : Plus de 500 véhicules récents</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Plane className="h-6 w-6 text-cyan-600 mr-2" />
                Informations sur l'aéroport Tanger-Boukhalef
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                L'<strong>aéroport Tanger-Boukhalef Ibn Battuta</strong> est situé à 15 km du centre-ville de Tanger. 
                Voici tout ce qu'il faut savoir pour votre <strong>location voiture Tanger Boukhalef</strong> :
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Caractéristiques de l'aéroport</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Informations générales</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Code IATA</strong> : TNG</li>
                      <li>• <strong>Nom officiel</strong> : Ibn Battuta</li>
                      <li>• <strong>Distance centre-ville</strong> : 15 km</li>
                      <li>• <strong>Temps de trajet</strong> : 20 minutes</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Services disponibles</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Terminal moderne</strong> : Rénové en 2020</li>
                      <li>• <strong>Parking gratuit</strong> : 2 heures</li>
                      <li>• <strong>WiFi gratuit</strong> : Dans tout l'aéroport</li>
                      <li>• <strong>Restaurants</strong> : Cuisine locale et internationale</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Timer className="h-6 w-6 text-cyan-600 mr-2" />
                Processus de récupération à Boukhalef
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre service <strong>location voiture Tanger Boukhalef</strong> est optimisé pour votre confort :
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Réservation en ligne</h5>
                      <p className="text-gray-600 text-sm">Réservez sur notre site avec votre numéro de vol TNG</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Arrivée à Boukhalef</h5>
                      <p className="text-gray-600 text-sm">Récupérez vos bagages au terminal</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Appel de confirmation</h5>
                      <p className="text-gray-600 text-sm">Appelez notre équipe aéroport</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Livraison express</h5>
                      <p className="text-gray-600 text-sm">Votre véhicule arrive en 15 minutes</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-cyan-600 mr-2" />
                Véhicules recommandés pour Boukhalef
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Pour votre <strong>location voiture Tanger Boukhalef</strong>, nous recommandons :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Euro className="h-5 w-5 text-cyan-600 mr-2" />
                    Économique
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Dacia Logan</strong> - 180 DH/jour</li>
                    <li>• <strong>Hyundai Grand i10</strong> - 220 DH/jour</li>
                    <li>• <strong>Renault Clio</strong> - 250 DH/jour</li>
                  </ul>
                  <p className="text-sm text-gray-500">Parfait pour les courts séjours</p>
                </div>

                <div className="bg-white border-2 border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-green-600 mr-2" />
                    Affaires
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Renault Symbol</strong> - 200 DH/jour</li>
                    <li>• <strong>Toyota Corolla</strong> - 280 DH/jour</li>
                    <li>• <strong>Hyundai Elantra</strong> - 320 DH/jour</li>
                  </ul>
                  <p className="text-sm text-gray-500">Confort professionnel</p>
                </div>

                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Luggage className="h-5 w-5 text-amber-600 mr-2" />
                    Familial
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Dacia Lodgy</strong> - 350 DH/jour</li>
                    <li>• <strong>Renault Scenic</strong> - 400 DH/jour</li>
                    <li>• <strong>Toyota Avensis</strong> - 450 DH/jour</li>
                  </ul>
                  <p className="text-sm text-gray-500">Espace pour toute la famille</p>
                </div>

                <div className="bg-white border-2 border-purple-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-purple-600 mr-2" />
                    Premium
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Hyundai Tucson</strong> - 500 DH/jour</li>
                    <li>• <strong>Toyota RAV4</strong> - 600 DH/jour</li>
                    <li>• <strong>Mercedes Classe A</strong> - 700 DH/jour</li>
                  </ul>
                  <p className="text-sm text-gray-500">Luxe et technologie</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Navigation className="h-6 w-6 text-cyan-600 mr-2" />
                Destinations depuis Boukhalef
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Avec votre <strong>location voiture Tanger Boukhalef</strong>, explorez facilement :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-4 w-4 text-cyan-600 mr-2" />
                    Tanger et région
                  </h5>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• <strong>Centre-ville Tanger</strong> - 15 km (20 min)</li>
                    <li>• <strong>Médina de Tanger</strong> - 18 km (25 min)</li>
                    <li>• <strong>Port Tanger Med</strong> - 45 km (45 min)</li>
                    <li>• <strong>Plages de Tanger</strong> - 25 km (30 min)</li>
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
                    <li>• <strong>Rabat</strong> - 250 km (2h30)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-amber-600 mr-2" />
                  Services inclus à Boukhalef
                </h3>
                <p className="text-gray-700 mb-4">
                  Votre <strong>location voiture Tanger Boukhalef</strong> inclut automatiquement :
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
                      <span>GPS avec cartes Maroc</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Assistance 24h/24</span>
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
                <Clock className="h-6 w-6 text-cyan-600 mr-2" />
                Horaires et disponibilité à Boukhalef
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Notre service <strong>location voiture Tanger Boukhalef</strong> s'adapte à tous les vols :
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Couverture des vols</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Vols domestiques</strong> : RAM, Air Arabia</li>
                      <li>• <strong>Vols européens</strong> : Ryanair, easyJet</li>
                      <li>• <strong>Vols charter</strong> : Tous opérateurs</li>
                      <li>• <strong>Vols privés</strong> : Service VIP</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Temps de livraison</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Réservation confirmée</strong> : 15 minutes</li>
                      <li>• <strong>Dernière minute</strong> : 30 minutes</li>
                      <li>• <strong>Véhicule spécial</strong> : 45 minutes</li>
                      <li>• <strong>Groupe (5+ véhicules)</strong> : 1 heure</li>
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
              <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Réservez à Boukhalef !</h3>
                <p className="mb-6 text-cyan-100">
                  Service express à l'aéroport Tanger-Boukhalef Ibn Battuta. Livraison en 15 minutes.
                </p>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-cyan-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Réserver maintenant
                </Link>
              </div>

              {/* Airport Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Infos Aéroport</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Building className="h-5 w-5 text-cyan-500 mr-3" />
                    <span className="text-gray-700">Tanger-Boukhalef</span>
                  </div>
                  <div className="flex items-center">
                    <Plane className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Code TNG</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">15 km centre-ville</span>
                  </div>
                  <div className="flex items-center">
                    <Timer className="h-5 w-5 text-amber-500 mr-3" />
                    <span className="text-gray-700">Livraison 15min</span>
                  </div>
                </div>
              </div>

              {/* Popular Cars */}
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Boukhalef</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-cyan-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-cyan-600 mr-3" />
                    <span className="text-gray-700">boukhalef@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-cyan-600 mr-3 mt-1" />
                    <span className="text-gray-700">Aéroport Tanger-Boukhalef Ibn Battuta</span>
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
            Questions fréquentes - Aéroport Boukhalef
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quelle est la différence entre Boukhalef et Ibn Battuta ?
              </h3>
              <p className="text-gray-600">
                C'est le même aéroport ! Tanger-Boukhalef est le nom géographique, 
                Ibn Battuta est le nom officiel. Notre service couvre cet aéroport unique.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Combien de temps pour aller au centre-ville ?
              </h3>
              <p className="text-gray-600">
                Depuis l'aéroport Tanger-Boukhalef, comptez 20 minutes en voiture 
                pour rejoindre le centre-ville de Tanger (15 km de distance).
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Le service fonctionne-t-il pour tous les vols ?
              </h3>
              <p className="text-gray-600">
                Oui, notre service de location voiture Tanger Boukhalef couvre 
                tous les vols : domestiques, internationaux, charter et privés.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Y a-t-il un parking à l'aéroport ?
              </h3>
              <p className="text-gray-600">
                Oui, l'aéroport Tanger-Boukhalef dispose d'un parking gratuit 
                pour 2 heures, puis payant. Notre service évite ces frais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}