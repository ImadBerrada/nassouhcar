import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Euro, Navigation, Zap, Award, Globe } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location de Voitures Tanger 2025 - Flotte Économique & Service Excellence | Nassoh Car',
  description: 'Location de voitures Tanger ✓ Flotte économique & service excellence ✓ Prix compétitifs ✓ Véhicules récents ✓ Livraison gratuite ✓ Réservation en ligne.',
  keywords: 'location de voitures tanger, location voitures tanger, car rental tangier, location auto tanger, voitures location tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/location-de-voitures-tanger'
  },
  openGraph: {
    title: 'Location de Voitures Tanger 2025 - Flotte Économique & Service Excellence | Nassoh Car',
    description: 'Location de voitures Tanger ✓ Flotte économique & service excellence ✓ Prix compétitifs.',
    images: ['/tangier-cars-rental-blog.jpg'],
  },
}

export default function LocationDeVoituresTangerBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-6 w-6 text-amber-400 mr-2" />
              <span className="text-amber-400 font-semibold text-lg">Flotte Économique 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">
              Location de Voitures Tanger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Découvrez la plus grande flotte de véhicules de location à Tanger. 
              Plus de 500 voitures récentes pour tous vos besoins de mobilité au Maroc.
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
                <span>Flotte Véhicules</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Découvrir Notre Flotte
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Fleet Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre flotte en chiffres</h2>
            <p className="text-xl text-gray-600">La plus grande sélection de véhicules de location à Tanger</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Véhicules disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Modèles différents</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">2024</div>
              <div className="text-gray-600 font-medium">Année moyenne</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-gray-600 font-medium">Disponibilité</div>
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
                <Car className="h-8 w-8 text-blue-600 mr-3" />
                Pourquoi choisir notre location de voitures Tanger ?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Nassoh Car</strong> révolutionne la <strong>location de voitures Tanger</strong> avec la plus grande 
                flotte du Maroc. Nos 500+ véhicules récents et notre service d'excellence font de nous le leader 
                incontesté de la location automobile à Tanger.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  Avantages de notre flotte économique
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Flotte récente</strong> : Véhicules de moins de 3 ans en moyenne</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Variété exceptionnelle</strong> : Plus de 25 modèles différents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Maintenance rigoureuse</strong> : Entretien professionnel régulier</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Disponibilité garantie</strong> : 99% de taux de disponibilité</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Navigation className="h-6 w-6 text-blue-600 mr-2" />
                Catégories de véhicules disponibles
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre <strong>location de voitures Tanger</strong> propose une gamme complète adaptée à tous les besoins :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Car className="h-5 w-5 text-blue-600 mr-2" />
                    Économiques
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Dacia Logan - 180 DH/jour</li>
                    <li>• Renault Symbol - 200 DH/jour</li>
                    <li>• Hyundai Grand i10 - 220 DH/jour</li>
                  </ul>
                  <p className="text-sm text-gray-500">Parfait pour les trajets urbains et les budgets serrés</p>
                </div>

                <div className="bg-white border-2 border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Star className="h-5 w-5 text-green-600 mr-2" />
                    Compactes
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Renault Clio - 250 DH/jour</li>
                    <li>• Peugeot 208 - 280 DH/jour</li>
                    <li>• Toyota Yaris - 300 DH/jour</li>
                  </ul>
                  <p className="text-sm text-gray-500">Idéal pour les couples et petites familles</p>
                </div>

                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-amber-600 mr-2" />
                    Familiales
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Dacia Lodgy - 350 DH/jour</li>
                    <li>• Renault Scenic - 400 DH/jour</li>
                    <li>• Toyota Avensis - 450 DH/jour</li>
                  </ul>
                  <p className="text-sm text-gray-500">Spacieux et confortable pour les familles</p>
                </div>

                <div className="bg-white border-2 border-purple-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-purple-600 mr-2" />
                    SUV & 4x4
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Dacia Duster - 400 DH/jour</li>
                    <li>• Hyundai Tucson - 500 DH/jour</li>
                    <li>• Toyota RAV4 - 600 DH/jour</li>
                  </ul>
                  <p className="text-sm text-gray-500">Pour l'aventure et les terrains difficiles</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Zap className="h-6 w-6 text-blue-600 mr-2" />
                Services inclus avec votre location de voitures Tanger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Chaque véhicule de notre flotte <strong>location de voitures Tanger</strong> inclut :
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
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
                      <span>Assistance 24h/24</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>GPS intégré</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Climatisation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Conducteur supplémentaire gratuit</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Livraison/récupération</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Nettoyage inclus</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                Destinations populaires depuis Tanger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Avec votre véhicule de notre <strong>location de voitures Tanger</strong>, explorez :
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Destinations proches (0-50 km)</h5>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Cap Spartel - 15 km</li>
                    <li>• Grottes d'Hercule - 20 km</li>
                    <li>• Asilah - 45 km</li>
                    <li>• Tétouan - 65 km</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Destinations lointaines (100+ km)</h5>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Chefchaouen - 115 km</li>
                    <li>• Rabat - 250 km</li>
                    <li>• Casablanca - 340 km</li>
                    <li>• Fès - 300 km</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Euro className="h-6 w-6 text-amber-600 mr-2" />
                  Tarification transparente
                </h3>
                <p className="text-gray-700 mb-4">
                  Notre <strong>location de voitures Tanger</strong> pratique une tarification claire et transparente :
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">Journalier</div>
                    <div className="text-sm text-gray-600">À partir de 180 DH</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">Hebdomadaire</div>
                    <div className="text-sm text-gray-600">-15% de réduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">Mensuel</div>
                    <div className="text-sm text-gray-600">-25% de réduction</div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Réservez dans notre flotte !</h3>
                <p className="mb-6 text-indigo-100">
                  Choisissez parmi plus de 500 véhicules disponibles pour votre location de voitures Tanger.
                </p>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-indigo-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Voir toute la flotte
                </Link>
              </div>

              {/* Fleet Highlights */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Points forts de notre flotte</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">Véhicules récents (2021-2024)</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Entretien professionnel</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Nettoyage après chaque location</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Réservation instantanée</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contactez-nous</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">contact@nassohcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">Avenue Mohammed V, Tanger</span>
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
            Questions fréquentes sur notre flotte
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Combien de véhicules avez-vous dans votre flotte ?
              </h3>
              <p className="text-gray-600">
                Notre flotte compte plus de 500 véhicules de différentes catégories, 
                des citadines économiques aux SUV familiaux, tous récents et bien entretenus.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quelle est l'âge moyen de vos véhicules ?
              </h3>
              <p className="text-gray-600">
                L'âge moyen de notre flotte est de 2 ans. Nous renouvelons régulièrement 
                nos véhicules pour garantir fiabilité, confort et sécurité.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Puis-je changer de véhicule pendant ma location ?
              </h3>
              <p className="text-gray-600">
                Oui, sous réserve de disponibilité et moyennant ajustement tarifaire si nécessaire. 
                Contactez notre service client pour organiser le changement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Vos véhicules sont-ils équipés de GPS ?
              </h3>
              <p className="text-gray-600">
                Oui, tous nos véhicules sont équipés de GPS intégré avec cartes du Maroc 
                mises à jour, pour vous guider facilement dans vos déplacements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}