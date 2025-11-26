import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, DollarSign, TrendingDown, Zap, Award, Calculator, Percent, Gift, CreditCard, Target, Coins, Mountain, Waves, Camera, Compass, Route, Building, Key, Settings, Fuel, Navigation, Timer, Luggage, Globe, Wrench, Battery, Gauge, FileText, Briefcase, Home, Plane, TrendingUp, BarChart3, Crown, Trophy, Handshake, ThumbsUp, UserCheck, Headphones, Clock3, MapPin as Location, Flag, Sun, Palmtree, Sunset, Sunrise, CloudSun } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location Voiture Maroc 2025 ✓ 15+ Villes ✓ Aéroports & Centres',
  description: 'Location voiture Maroc ✓ 15+ villes ✓ Aéroports & centres ✓ Flotte nationale ✓ Service premium ✓ Couverture complète ✓ Réservation en ligne.',
  keywords: 'location voiture maroc, location voiture au maroc, car rental morocco, location auto maroc, voiture location maroc',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/location-voiture-maroc'
  },
  openGraph: {
    title: 'Location Voiture Maroc 2025 ✓ 15+ Villes ✓ Aéroports & Centres',
    description: 'Location voiture Maroc ✓ 15+ villes ✓ Aéroports & centres ✓ Flotte nationale ✓ Service premium.',
    images: ['/morocco-car-rental-blog.jpg'],
  },
}

export default function LocationVoitureMarocBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 via-green-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Flag className="h-6 w-6 text-red-400 mr-2" />
              <span className="text-red-400 font-semibold text-lg">Maroc National</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-green-300 to-red-400 bg-clip-text text-transparent leading-tight">
              Location Voiture Maroc
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              15+ villes couvertes. Aéroports, centres-villes. 
              500+ véhicules, service national économique !
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
                <span>National</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-red-500 to-green-500 hover:from-red-600 hover:to-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Découvrir le Maroc
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Morocco National Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nassoh Car Maroc en chiffres</h2>
            <p className="text-xl text-gray-600">Votre partenaire mobilité national</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-red-50 to-green-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Villes couvertes</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Véhicules Maroc</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">25</div>
              <div className="text-gray-600 font-medium">Points de service</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">100K+</div>
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
                <Flag className="h-8 w-8 text-red-600 mr-3" />
                Location voiture Maroc : Votre liberté de mouvement
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                La <strong>location voiture Maroc</strong> avec Nassoh Car vous 
                ouvre les portes d'un royaume aux mille facettes. De Tanger à 
                Agadir, de Casablanca à Marrakech, découvrez le Maroc à votre 
                rythme avec notre réseau national de 15+ villes et 500+ véhicules.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-green-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Crown className="h-6 w-6 text-red-600 mr-2" />
                  Pourquoi choisir Nassoh Car au Maroc ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Couverture nationale</strong> : 15+ villes, 25 points de service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Flotte diversifiée</strong> : 500+ véhicules adaptés au Maroc</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Expertise locale</strong> : Connaissance parfaite du terrain</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Service économique</strong> : Standards internationaux</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Location className="h-6 w-6 text-red-600 mr-2" />
                Villes couvertes par notre réseau
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre réseau de <strong>location voiture Maroc</strong> s'étend 
                sur l'ensemble du territoire, des villes impériales aux stations 
                balnéaires, en passant par les centres économiques :
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-l-4 border-red-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Nord du Maroc</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Tanger</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Aéroport Ibn Battouta</strong></li>
                            <li>• <strong>Port Tanger Ville</strong></li>
                            <li>• <strong>Tanger Med</strong></li>
                            <li>• <strong>Centre-ville</strong></li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Tétouan</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Aéroport Sania Ramel</strong></li>
                            <li>• <strong>Centre historique</strong></li>
                            <li>• <strong>Port Fnideq</strong></li>
                            <li>• <strong>Martil plage</strong></li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Autres villes</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Chefchaouen</strong></li>
                            <li>• <strong>Al Hoceima</strong></li>
                            <li>• <strong>Nador</strong></li>
                            <li>• <strong>Oujda</strong></li>
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
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Centre du Maroc</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Casablanca</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Aéroport Mohammed V</strong></li>
                            <li>• <strong>Centre-ville</strong></li>
                            <li>• <strong>Quartier Maarif</strong></li>
                            <li>• <strong>Ain Diab</strong></li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Rabat</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Aéroport Rabat-Salé</strong></li>
                            <li>• <strong>Agdal</strong></li>
                            <li>• <strong>Gare centrale</strong></li>
                            <li>• <strong>Quartier Hassan</strong></li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Fès & Meknès</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Fès Saïss</strong></li>
                            <li>• <strong>Médina Fès</strong></li>
                            <li>• <strong>Meknès centre</strong></li>
                            <li>• <strong>Ifrane</strong></li>
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
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Sud du Maroc</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Marrakech</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Aéroport Menara</strong></li>
                            <li>• <strong>Médina</strong></li>
                            <li>• <strong>Gueliz</strong></li>
                            <li>• <strong>Hivernage</strong></li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Agadir</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Aéroport Al Massira</strong></li>
                            <li>• <strong>Front de mer</strong></li>
                            <li>• <strong>Souk El Had</strong></li>
                            <li>• <strong>Taghazout</strong></li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Désert & Atlas</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Ouarzazate</strong></li>
                            <li>• <strong>Zagora</strong></li>
                            <li>• <strong>Merzouga</strong></li>
                            <li>• <strong>Tinghir</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-red-600 mr-2" />
                Flotte adaptée au Maroc
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre flotte de <strong>location voiture Maroc</strong> de 500+ 
                véhicules est spécialement sélectionnée pour s'adapter aux 
                conditions marocaines : routes de montagne, désert, villes :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Car className="h-8 w-8 text-red-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-900">Citadines Urbaines</h4>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Disponibilité nationale</span>
                      <span className="text-red-600 font-semibold">150+ véhicules</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Dacia Logan</strong> : Robuste et économique</li>
                    <li>• <strong>Renault Clio</strong> : Confort urbain</li>
                    <li>• <strong>Peugeot 208</strong> : Moderne et efficace</li>
                    <li>• <strong>Hyundai i10</strong> : Compacte pratique</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Mountain className="h-8 w-8 text-green-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-900">SUV & 4x4 Maroc</h4>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Flotte spécialisée</span>
                      <span className="text-green-600 font-semibold">200+ véhicules</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Toyota Prado</strong> : Légende du désert</li>
                    <li>• <strong>Nissan Patrol</strong> : Puissance extrême</li>
                    <li>• <strong>Dacia Duster</strong> : Rapport qualité/prix</li>
                    <li>• <strong>Hyundai Tucson</strong> : Confort moderne</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Crown className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-900">Berlines Familiales</h4>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Confort et espace</span>
                      <span className="text-blue-600 font-semibold">100+ véhicules</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Mercedes Classe C</strong> : Élégance allemande</li>
                    <li>• <strong>BMW Série 3</strong> : Plaisir de conduire</li>
                    <li>• <strong>Audi A4</strong> : Technologie avancée</li>
                    <li>• <strong>Volkswagen Passat</strong> : Confort familial</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Briefcase className="h-8 w-8 text-indigo-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-900">Utilitaires Pro</h4>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Solutions professionnelles</span>
                      <span className="text-indigo-600 font-semibold">50+ véhicules</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Renault Master</strong> : Grand volume</li>
                    <li>• <strong>Ford Transit</strong> : Polyvalence maximale</li>
                    <li>• <strong>Iveco Daily</strong> : Charge utile élevée</li>
                    <li>• <strong>Mercedes Sprinter</strong> : Confort professionnel</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Route className="h-6 w-6 text-red-600 mr-2" />
                Circuits recommandés au Maroc
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Avec votre <strong>location voiture Maroc</strong>, partez à la 
                découverte des trésors du royaume. Voici nos circuits les plus 
                populaires :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Crown className="h-6 w-6 text-red-600 mr-2" />
                    Circuit Villes Impériales
                  </h4>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Durée recommandée</span>
                      <span className="text-red-600 font-semibold">7-10 jours</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Casablanca</strong> : Mosquée Hassan II</li>
                    <li>• <strong>Rabat</strong> : Capitale moderne</li>
                    <li>• <strong>Meknès</strong> : Cité ismaélienne</li>
                    <li>• <strong>Fès</strong> : Médina millénaire</li>
                    <li>• <strong>Marrakech</strong> : Perle du Sud</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Sun className="h-6 w-6 text-green-600 mr-2" />
                    Circuit Désert & Oasis
                  </h4>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Durée recommandée</span>
                      <span className="text-green-600 font-semibold">5-7 jours</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Marrakech</strong> : Point de départ</li>
                    <li>• <strong>Ouarzazate</strong> : Hollywood du Maroc</li>
                    <li>• <strong>Zagora</strong> : Porte du désert</li>
                    <li>• <strong>Merzouga</strong> : Dunes de l'Erg Chebbi</li>
                    <li>• <strong>Tinghir</strong> : Gorges du Todra</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Waves className="h-6 w-6 text-blue-600 mr-2" />
                    Circuit Côte Atlantique
                  </h4>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Durée recommandée</span>
                      <span className="text-blue-600 font-semibold">4-6 jours</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Casablanca</strong> : Métropole économique</li>
                    <li>• <strong>El Jadida</strong> : Cité portugaise</li>
                    <li>• <strong>Essaouira</strong> : Perle de l'Atlantique</li>
                    <li>• <strong>Agadir</strong> : Station balnéaire</li>
                    <li>• <strong>Taghazout</strong> : Paradis du surf</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Mountain className="h-6 w-6 text-indigo-600 mr-2" />
                    Circuit Atlas & Rif
                  </h4>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Durée recommandée</span>
                      <span className="text-indigo-600 font-semibold">6-8 jours</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Tanger</strong> : Porte de l'Afrique</li>
                    <li>• <strong>Chefchaouen</strong> : Perle bleue</li>
                    <li>• <strong>Ifrane</strong> : Suisse marocaine</li>
                    <li>• <strong>Azrou</strong> : Forêt de cèdres</li>
                    <li>• <strong>Midelt</strong> : Capitale des pommes</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-red-600 mr-2" />
                Services inclus Maroc
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Votre <strong>location voiture Maroc</strong> inclut un ensemble 
                de services économiques pour votre sécurité et votre confort :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-red-50 to-green-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Shield className="h-6 w-6 text-red-600 mr-2" />
                    Assurances & Protection
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Assurance tous risques</strong> : Couverture complète</li>
                    <li>• <strong>Protection vol</strong> : Véhicule sécurisé</li>
                    <li>• <strong>Assistance 24h/24</strong> : Partout au Maroc</li>
                    <li>• <strong>Dépannage gratuit</strong> : Intervention rapide</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Settings className="h-6 w-6 text-green-600 mr-2" />
                    Équipements Inclus
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>GPS Maroc</strong> : Cartographie complète</li>
                    <li>• <strong>Climatisation</strong> : Confort garanti</li>
                    <li>• <strong>Kit de sécurité</strong> : Trousse obligatoire</li>
                    <li>• <strong>Carburant</strong> : Plein à plein</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-6 w-6 text-blue-600 mr-2" />
                    Services Personnalisés
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Livraison gratuite</strong> : Hôtels, aéroports</li>
                    <li>• <strong>Chauffeur disponible</strong> : Sur demande</li>
                    <li>• <strong>Guide touristique</strong> : Conseils locaux</li>
                    <li>• <strong>Itinéraires personnalisés</strong> : Selon vos goûts</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Headphones className="h-6 w-6 text-indigo-600 mr-2" />
                    Support Client
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Hotline nationale</strong> : 24h/24, 7j/7</li>
                    <li>• <strong>Équipes multilingues</strong> : FR/AR/EN/ES</li>
                    <li>• <strong>Résolution rapide</strong> : Problèmes traités</li>
                    <li>• <strong>Satisfaction garantie</strong> : Engagement qualité</li>
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
                <h3 className="text-2xl font-bold mb-4">Découvrez le Maroc !</h3>
                <p className="mb-6 text-red-100">
                  15+ villes, 500+ véhicules, service économique national !
                </p>
                <Link 
                  href="/contact" 
                  className="block w-full bg-white text-red-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Réserver Maintenant
                </Link>
              </div>

              {/* Cities Coverage */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Villes Couvertes</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <Flag className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-700">Tanger, Tétouan, Chefchaouen</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <Building className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Casablanca, Rabat, Fès</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Sun className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Marrakech, Agadir, Essaouira</span>
                  </div>
                  <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                    <Mountain className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">Ouarzazate, Merzouga, Ifrane</span>
                  </div>
                </div>
              </div>

              {/* Fleet Morocco */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Flotte Maroc</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-gray-700">Citadines</span>
                    <span className="text-red-600 font-semibold">150+ véhicules</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">SUV & 4x4</span>
                    <span className="text-green-600 font-semibold">200+ véhicules</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Berlines</span>
                    <span className="text-blue-600 font-semibold">100+ véhicules</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Utilitaires</span>
                    <span className="text-indigo-600 font-semibold">50+ véhicules</span>
                  </div>
                </div>
              </div>

              {/* Popular Circuits */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Circuits Populaires</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <Crown className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-700">Villes Impériales</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <Sun className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Désert & Oasis</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Waves className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Côte Atlantique</span>
                  </div>
                  <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                    <Mountain className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">Atlas & Rif</span>
                  </div>
                </div>
              </div>

              {/* Contact National */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact National</h3>
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
                    <span className="text-gray-700">Réseau national 15+ villes</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-800 font-semibold">
                    🇲🇦 Service économique national
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
            FAQ - Location voiture Maroc
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Combien de villes couvrez-vous au Maroc ?
              </h3>
              <p className="text-gray-600">
                Plus de 15 villes avec 25 points de service : Tanger, Casablanca, 
                Marrakech, Fès, Agadir, Rabat, Tétouan, Chefchaouen, et plus.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quelle est la taille de votre flotte au Maroc ?
              </h3>
              <p className="text-gray-600">
                500+ véhicules adaptés au Maroc : 150 citadines, 200 SUV/4x4, 
                100 berlines, 50 utilitaires. Flotte renouvelée régulièrement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Proposez-vous des circuits organisés ?
              </h3>
              <p className="text-gray-600">
                Oui, circuits Villes Impériales, Désert & Oasis, Côte Atlantique, 
                Atlas & Rif. Itinéraires personnalisés selon vos préférences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                L'assistance est-elle disponible partout au Maroc ?
              </h3>
              <p className="text-gray-600">
                Assistance 24h/24, 7j/7 sur tout le territoire marocain. 
                Équipes multilingues et dépannage gratuit inclus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}