import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Euro, Navigation, Zap, Award, Globe, Flag } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location Voiture Tanger Maroc 2025 - Service National Premium | Nassoh Car',
  description: 'Location voiture Tanger Maroc : Leader national avec 500+ véhicules ✓ Couverture tout le Maroc ✓ Service premium ✓ Prix compétitifs ✓ Réservation 24h/24.',
  keywords: 'location voiture tanger maroc, location voiture maroc tanger, car rental morocco tangier, location auto maroc, nassoh car maroc',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/location-voiture-tanger-maroc'
  },
  openGraph: {
    title: 'Location Voiture Tanger Maroc 2025 - Service National Premium',
    description: 'Location voiture Tanger Maroc : Leader national avec 500+ véhicules ✓ Couverture tout le Maroc ✓ Service premium ✓ Prix compétitifs.',
    images: ['/tangier.webp'],
  },
}

export default function LocationVoitureTangerMarocBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 via-green-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Flag className="h-6 w-6 text-red-400 mr-2" />
              <span className="text-red-400 font-semibold text-lg">Service National</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-green-300 to-red-400 bg-clip-text text-transparent leading-tight">
              Location Voiture Tanger Maroc
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Leader de la location de voitures au Maroc depuis Tanger. 
              Service premium national avec plus de 500 véhicules et couverture dans tout le royaume.
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
                <span>Service National</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-red-500 to-green-500 hover:from-red-600 hover:to-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explorer Notre Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* National Coverage Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre couverture nationale</h2>
            <p className="text-xl text-gray-600">Le plus grand réseau de location de voitures au Maroc</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Villes couvertes</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Véhicules disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Années d'expérience</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Service client</div>
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
                <Globe className="h-8 w-8 text-red-600 mr-3" />
                Pourquoi choisir notre location voiture Tanger Maroc ?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Nassoh Car</strong> est le leader incontesté de la <strong>location voiture Tanger Maroc</strong>. 
                Depuis plus de 10 ans, nous offrons un service premium qui s'étend dans tout le royaume, 
                avec une expertise unique dans le secteur automobile marocain.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-green-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-red-600 mr-2" />
                  Avantages de notre service national
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Couverture nationale</strong> : Service dans 15+ villes du Maroc</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Expertise locale</strong> : Connaissance approfondie du marché marocain</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Flotte adaptée</strong> : Véhicules parfaits pour les routes marocaines</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Support multilingue</strong> : Service en français, arabe et anglais</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-red-600 mr-2" />
                Villes desservies au Maroc
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre service de <strong>location voiture Tanger Maroc</strong> couvre les principales destinations :
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border-2 border-red-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-red-600 mr-2" />
                    Nord du Maroc
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Tanger - Siège principal</li>
                    <li>• Tétouan - Service complet</li>
                    <li>• Chefchaouen - Livraison</li>
                    <li>• Al Hoceima - Partenaire</li>
                  </ul>
                  <p className="text-sm text-gray-500">Couverture complète du nord</p>
                </div>

                <div className="bg-white border-2 border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Star className="h-5 w-5 text-green-600 mr-2" />
                    Centre du Maroc
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Rabat - Agence</li>
                    <li>• Casablanca - Hub principal</li>
                    <li>• Fès - Service étendu</li>
                    <li>• Meknès - Partenaire</li>
                  </ul>
                  <p className="text-sm text-gray-500">Centres économiques majeurs</p>
                </div>

                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-amber-600 mr-2" />
                    Sud du Maroc
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Marrakech - Agence</li>
                    <li>• Agadir - Service complet</li>
                    <li>• Ouarzazate - Livraison</li>
                    <li>• Essaouira - Partenaire</li>
                  </ul>
                  <p className="text-sm text-gray-500">Destinations touristiques</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Car className="h-6 w-6 text-red-600 mr-2" />
                Flotte adaptée au Maroc
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre <strong>location voiture Tanger Maroc</strong> propose des véhicules spécialement sélectionnés 
                pour les conditions de conduite marocaines :
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Véhicules recommandés pour le Maroc</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Routes urbaines</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Dacia Logan</strong> - Économique et fiable</li>
                      <li>• <strong>Renault Symbol</strong> - Confort urbain</li>
                      <li>• <strong>Hyundai Grand i10</strong> - Compact et agile</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Routes montagneuses</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Dacia Duster</strong> - 4x4 robuste</li>
                      <li>• <strong>Hyundai Tucson</strong> - SUV performant</li>
                      <li>• <strong>Toyota RAV4</strong> - Fiabilité éprouvée</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Zap className="h-6 w-6 text-red-600 mr-2" />
                Services spéciaux Maroc
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                En tant que spécialiste <strong>location voiture Tanger Maroc</strong>, nous offrons :
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Livraison inter-villes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Guide des routes marocaines</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Assistance en cas de panne</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Conseils itinéraires</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Support multilingue</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Tarifs préférentiels longue durée</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Équipements spéciaux (GPS Maroc)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Partenariats hôteliers</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Navigation className="h-6 w-6 text-red-600 mr-2" />
                Circuits populaires au départ de Tanger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Avec votre véhicule de <strong>location voiture Tanger Maroc</strong>, découvrez :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-4 w-4 text-red-600 mr-2" />
                    Circuit Nord (3-5 jours)
                  </h5>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Jour 1 : Tanger → Asilah (45 km)</li>
                    <li>• Jour 2 : Asilah → Tétouan (65 km)</li>
                    <li>• Jour 3 : Tétouan → Chefchaouen (60 km)</li>
                    <li>• Jour 4 : Chefchaouen → Tanger (115 km)</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">Distance totale : ~285 km</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Star className="h-4 w-4 text-green-600 mr-2" />
                    Grand Tour (7-10 jours)
                  </h5>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Tanger → Fès (300 km)</li>
                    <li>• Fès → Marrakech (530 km)</li>
                    <li>• Marrakech → Casablanca (240 km)</li>
                    <li>• Casablanca → Tanger (340 km)</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">Distance totale : ~1410 km</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Euro className="h-6 w-6 text-amber-600 mr-2" />
                  Tarification spéciale Maroc
                </h3>
                <p className="text-gray-700 mb-4">
                  Notre <strong>location voiture Tanger Maroc</strong> propose des tarifs adaptés aux longs trajets :
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-amber-600">Journalier</div>
                    <div className="text-sm text-gray-600">À partir de 180 DH</div>
                    <div className="text-xs text-gray-500">Parfait pour découvrir</div>
                  </div>
                  <div className="text-center bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-amber-600">Circuit 7j</div>
                    <div className="text-sm text-gray-600">-20% de réduction</div>
                    <div className="text-xs text-gray-500">Idéal pour les vacances</div>
                  </div>
                  <div className="text-center bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-amber-600">Mensuel</div>
                    <div className="text-sm text-gray-600">-30% de réduction</div>
                    <div className="text-xs text-gray-500">Pour les longs séjours</div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-red-600 to-green-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Explorez le Maroc !</h3>
                <p className="mb-6 text-red-100">
                  Découvrez tout le royaume avec notre service national de location.
                </p>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-red-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Réserver maintenant
                </Link>
              </div>

              {/* Morocco Highlights */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Avantages Maroc</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Flag className="h-5 w-5 text-red-500 mr-3" />
                    <span className="text-gray-700">Expertise locale 10+ ans</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Couverture nationale</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Assistance 24h/24</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Service multilingue</span>
                  </div>
                </div>
              </div>

              {/* Popular Destinations */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Destinations populaires</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Casablanca</span>
                    <span className="text-sm text-gray-500">340 km</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Marrakech</span>
                    <span className="text-sm text-gray-500">580 km</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Fès</span>
                    <span className="text-sm text-gray-500">300 km</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Chefchaouen</span>
                    <span className="text-sm text-gray-500">115 km</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service National</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-700">contact@nassohcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-red-600 mr-3 mt-1" />
                    <span className="text-gray-700">Siège : Avenue Mohammed V, Tanger</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Articles Connexes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-green-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                <Link href="/blog/location-voiture-a-tanger" className="hover:text-red-600 transition-colors">
                  Location Voiture à Tanger
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Guide complet pour louer une voiture à Tanger avec réservation rapide et prix imbattables.
              </p>
              <Link href="/blog/location-voiture-a-tanger" className="text-red-600 hover:text-red-800 font-medium">
                Lire la suite →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                <Link href="/blog/location-voiture-tanger-pas-cher" className="hover:text-blue-600 transition-colors">
                  Location Pas Cher Tanger
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Découvrez nos tarifs imbattables dès 170 DH/jour pour votre location de voiture.
              </p>
              <Link href="/blog/location-voiture-tanger-pas-cher" className="text-blue-600 hover:text-blue-800 font-medium">
                Lire la suite →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                <Link href="/blog/location-voiture-tetouan" className="hover:text-purple-600 transition-colors">
                  Location Voiture Tétouan
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Service économique à Tétouan dès 175 DH/jour pour explorer la région du Rif.
              </p>
              <Link href="/blog/location-voiture-tetouan" className="text-purple-600 hover:text-purple-800 font-medium">
                Lire la suite →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Questions fréquentes sur notre service Maroc
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Puis-je récupérer à Tanger et rendre dans une autre ville ?
              </h3>
              <p className="text-gray-600">
                Oui, nous proposons la location aller simple entre nos agences. 
                Des frais supplémentaires peuvent s'appliquer selon la destination.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Vos véhicules sont-ils adaptés aux routes marocaines ?
              </h3>
              <p className="text-gray-600">
                Absolument ! Notre flotte est spécialement sélectionnée pour les conditions 
                de conduite au Maroc, avec des véhicules robustes et fiables.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Proposez-vous des circuits organisés ?
              </h3>
              <p className="text-gray-600">
                Nous fournissons des suggestions d'itinéraires et pouvons vous mettre en contact 
                avec des guides locaux partenaires pour enrichir votre expérience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Que faire en cas de problème loin de Tanger ?
              </h3>
              <p className="text-gray-600">
                Notre assistance 24h/24 couvre tout le Maroc. Nous avons des partenaires 
                dans toutes les grandes villes pour vous dépanner rapidement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}