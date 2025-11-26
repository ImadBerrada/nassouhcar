import type { Metadata } from 'next'
import { MapPin, Clock, Car, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Crown, Trophy, UserCheck, Headphones, MapPin as Location, Anchor, Building, Mountain, Briefcase, Wrench, Route, Waves, Globe, Plane, Home } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agence Location Voiture Tanger 2025 ✓ Leader Local depuis 2010',
  description: 'Agence location voiture Tanger ✓ Leader local depuis 2010 ✓ Service premium ✓ Flotte moderne ✓ Expertise reconnue ✓ Satisfaction garantie.',
  keywords: 'agence location voiture tanger, agence location tanger, car rental agency tangier, agence auto tanger, nassoh car tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/agence-location-voiture-tanger'
  },
  openGraph: {
    title: 'Agence Location Voiture Tanger 2025 ✓ Leader Local depuis 2010',
    description: 'Agence location voiture Tanger ✓ Leader local depuis 2010 ✓ Service premium ✓ Flotte moderne.',
    images: ['/tangier-car-rental-agency-blog.jpg'],
  },
}

export default function AgenceLocationVoitureTangerBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Building className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold text-lg">Agence Tanger</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Agence Location Voiture Tanger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Leader local depuis 2010. Aéroport, port, centre-ville. 
              200+ véhicules, service premium, tarifs compétitifs !
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
                <span>Tanger</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Découvrir l'Agence Tanger
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Tangier Agency Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nassoh Car Tanger en chiffres</h2>
            <p className="text-xl text-gray-600">L'agence de référence à Tanger</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Véhicules Tanger</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">5</div>
              <div className="text-gray-600 font-medium">Points de service</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">15 ans</div>
              <div className="text-gray-600 font-medium">Présence locale</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-pink-600 mb-2">25K+</div>
              <div className="text-gray-600 font-medium">Clients Tanger</div>
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
                <Building className="h-8 w-8 text-blue-600 mr-3" />
                Nassoh Car Tanger : Votre agence locale de confiance
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Depuis 2010, l'<strong>agence location voiture Tanger</strong> 
                Nassoh Car est le partenaire privilégié de vos déplacements 
                dans la région. Implantée stratégiquement à l'aéroport, au port 
                et en centre-ville, notre agence vous offre un service de proximité 
                avec plus de 200 véhicules disponibles.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Crown className="h-6 w-6 text-blue-600 mr-2" />
                  Pourquoi choisir notre agence à Tanger ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Implantation stratégique</strong> : Aéroport, port, centre-ville</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Connaissance locale</strong> : 15 ans d'expérience à Tanger</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Flotte adaptée</strong> : 200+ véhicules pour tous besoins</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Service personnalisé</strong> : Équipe locale dédiée</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Location className="h-6 w-6 text-blue-600 mr-2" />
                Nos points de service à Tanger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                L'<strong>agence location voiture Tanger</strong> Nassoh Car 
                dispose de 5 points de service stratégiquement positionnés 
                pour votre commodité :
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Aéroport Ibn Battouta</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Localisation</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Terminal 1</strong> : Hall des arrivées</li>
                            <li>• <strong>Terminal 2</strong> : Zone location</li>
                            <li>• <strong>Parking</strong> : P1 niveau -1</li>
                            <li>• <strong>Horaires</strong> : 24h/24, 7j/7</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Services</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Accueil personnalisé</strong> : Arrivée vol</li>
                            <li>• <strong>Remise express</strong> : 15 minutes</li>
                            <li>• <strong>Flotte complète</strong> : 80+ véhicules</li>
                            <li>• <strong>Navette gratuite</strong> : Vers parking</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-indigo-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Port de Tanger Ville</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Emplacement</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Terminal passagers</strong> : Sortie ferry</li>
                            <li>• <strong>Gare maritime</strong> : Niveau principal</li>
                            <li>• <strong>Parking sécurisé</strong> : Surveillance 24h</li>
                            <li>• <strong>Accès direct</strong> : Depuis quais</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Spécialités</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Coordination ferry</strong> : Horaires adaptés</li>
                            <li>• <strong>Véhicules familiaux</strong> : Groupes nombreux</li>
                            <li>• <strong>Service bagages</strong> : Assistance transport</li>
                            <li>• <strong>Multilingue</strong> : FR/ES/EN/AR</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-purple-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Tanger Med</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Position</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Zone d'accueil</strong> : Sortie port</li>
                            <li>• <strong>Parking visiteurs</strong> : P2 couvert</li>
                            <li>• <strong>Liaison rapide</strong> : 5 min à pied</li>
                            <li>• <strong>Signalisation</strong> : Fléchage clair</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Avantages</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Ferries européens</strong> : Algésiras, Gênes</li>
                            <li>• <strong>Véhicules premium</strong> : Clientèle internationale</li>
                            <li>• <strong>Service VIP</strong> : Accueil personnalisé</li>
                            <li>• <strong>Réservation prioritaire</strong> : Garantie véhicule</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-pink-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Centre-ville Tanger</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Adresse principale</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Boulevard Mohammed VI</strong> : Siège social</li>
                            <li>• <strong>Quartier Maarif</strong> : Facilement accessible</li>
                            <li>• <strong>Parking client</strong> : 20 places gratuites</li>
                            <li>• <strong>Transport public</strong> : Arrêt bus proche</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Services étendus</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Showroom</strong> : Présentation flotte</li>
                            <li>• <strong>Conseil expert</strong> : Équipe expérimentée</li>
                            <li>• <strong>Contrats long terme</strong> : Solutions pro</li>
                            <li>• <strong>SAV complet</strong> : Maintenance, réparations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Livraison à Domicile</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Zones couvertes</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Grand Tanger</strong> : Toutes zones urbaines</li>
                            <li>• <strong>Hôtels</strong> : Partenariats établis</li>
                            <li>• <strong>Résidences</strong> : Complexes touristiques</li>
                            <li>• <strong>Entreprises</strong> : Livraison sur site</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Modalités</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Gratuit</strong> : Locations 3 jours</li>
                            <li>• <strong>Horaires flexibles</strong> : 7h-22h</li>
                            <li>• <strong>État des lieux</strong> : Sur place</li>
                            <li>• <strong>Paiement sécurisé</strong> : CB, espèces</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-blue-600 mr-2" />
                Flotte spécialisée Tanger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre <strong>agence location voiture Tanger</strong> propose 
                une flotte de 200+ véhicules adaptée aux spécificités locales 
                et aux besoins de notre clientèle diversifiée :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Car className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-900">Citadines Urbaines</h4>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Disponibilité</span>
                      <span className="text-blue-600 font-semibold">60+ véhicules</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Dacia Logan</strong> : Économique et fiable</li>
                    <li>• <strong>Renault Clio</strong> : Confort urbain</li>
                    <li>• <strong>Peugeot 208</strong> : Design moderne</li>
                    <li>• <strong>Hyundai i10</strong> : Compacte pratique</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Crown className="h-8 w-8 text-indigo-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-900">Berlines Premium</h4>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Disponibilité</span>
                      <span className="text-indigo-600 font-semibold">40+ véhicules</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Mercedes Classe C</strong> : Luxe allemand</li>
                    <li>• <strong>BMW Série 3</strong> : Sportivité élégante</li>
                    <li>• <strong>Audi A4</strong> : Technologie avancée</li>
                    <li>• <strong>Volkswagen Passat</strong> : Confort familial</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Mountain className="h-8 w-8 text-purple-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-900">SUV & 4x4</h4>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Disponibilité</span>
                      <span className="text-purple-600 font-semibold">70+ véhicules</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Toyota Prado</strong> : Robustesse légendaire</li>
                    <li>• <strong>Nissan X-Trail</strong> : Polyvalence urbaine</li>
                    <li>• <strong>Hyundai Tucson</strong> : Design moderne</li>
                    <li>• <strong>Dacia Duster</strong> : Rapport qualité/prix</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Briefcase className="h-8 w-8 text-pink-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-900">Utilitaires Pro</h4>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Disponibilité</span>
                      <span className="text-pink-600 font-semibold">30+ véhicules</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-pink-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Renault Master</strong> : Grand volume</li>
                    <li>• <strong>Ford Transit</strong> : Polyvalence maximale</li>
                    <li>• <strong>Iveco Daily</strong> : Charge utile élevée</li>
                    <li>• <strong>Mercedes Sprinter</strong> : Confort pro</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                Équipe locale experte
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                L'<strong>agence location voiture Tanger</strong> s'appuie 
                sur une équipe de 25 professionnels locaux, parfaitement 
                formés et connaissant la région :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <UserCheck className="h-6 w-6 text-blue-600 mr-2" />
                    Conseillers Tanger
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Connaissance locale</strong> : Routes, attractions</li>
                    <li>• <strong>Conseil personnalisé</strong> : Selon destination</li>
                    <li>• <strong>Multilingues</strong> : FR/AR/EN/ES</li>
                    <li>• <strong>Disponibilité</strong> : 7j/7, 8h-20h</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Wrench className="h-6 w-6 text-indigo-600 mr-2" />
                    Équipe Technique
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Mécaniciens certifiés</strong> : Toutes marques</li>
                    <li>• <strong>Atelier sur site</strong> : Réparations rapides</li>
                    <li>• <strong>Contrôles qualité</strong> : Avant chaque location</li>
                    <li>• <strong>Maintenance préventive</strong> : Planifiée</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Headphones className="h-6 w-6 text-purple-600 mr-2" />
                    Service Client
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Assistance 24h/24</strong> : Urgences couvertes</li>
                    <li>• <strong>Résolution rapide</strong> : Problèmes traités</li>
                    <li>• <strong>Suivi personnalisé</strong> : Relation client</li>
                    <li>• <strong>Satisfaction garantie</strong> : Engagement qualité</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Trophy className="h-6 w-6 text-pink-600 mr-2" />
                    Management Local
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Direction expérimentée</strong> : 15+ ans Tanger</li>
                    <li>• <strong>Vision locale</strong> : Besoins spécifiques</li>
                    <li>• <strong>Standards élevés</strong> : Qualité exigée</li>
                    <li>• <strong>Innovation continue</strong> : Amélioration service</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Route className="h-6 w-6 text-blue-600 mr-2" />
                Destinations recommandées depuis Tanger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Avec votre véhicule de l'<strong>agence location voiture Tanger</strong>, 
                découvrez les merveilles de la région et au-delà :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Waves className="h-6 w-6 text-blue-600 mr-2" />
                    Côte Méditerranéenne
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Asilah</strong> : 45 min - Médina et plages</li>
                    <li>• <strong>Larache</strong> : 1h - Port de plaisance</li>
                    <li>• <strong>Ksar el Kebir</strong> : 1h15 - Patrimoine</li>
                    <li>• <strong>Al Hoceima</strong> : 4h - Baie paradisiaque</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Mountain className="h-6 w-6 text-indigo-600 mr-2" />
                    Montagnes du Rif
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Chefchaouen</strong> : 2h - Perle bleue</li>
                    <li>• <strong>Tétouan</strong> : 1h - Patrimoine UNESCO</li>
                    <li>• <strong>Ouazzane</strong> : 2h30 - Ville sainte</li>
                    <li>• <strong>Akchour</strong> : 2h30 - Cascades naturelles</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Building className="h-6 w-6 text-purple-600 mr-2" />
                    Villes Impériales
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Rabat</strong> : 3h - Capitale moderne</li>
                    <li>• <strong>Fès</strong> : 4h - Médina millénaire</li>
                    <li>• <strong>Meknès</strong> : 4h30 - Cité ismaélienne</li>
                    <li>• <strong>Casablanca</strong> : 4h - Métropole économique</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Globe className="h-6 w-6 text-pink-600 mr-2" />
                    International
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Ceuta</strong> : 45 min - Enclave espagnole</li>
                    <li>• <strong>Gibraltar</strong> : 2h - Rocher britannique</li>
                    <li>• <strong>Algésiras</strong> : Ferry + 30 min</li>
                    <li>• <strong>Andalousie</strong> : Ferry + 2h</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Agence Tanger !</h3>
                <p className="mb-6 text-blue-100">
                  Leader local depuis 2010. 5 points de service, 200+ véhicules !
                </p>
                <Link 
                  href="/contact" 
                  className="block w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Contacter Tanger
                </Link>
              </div>

              {/* Service Points */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Points de Service</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Plane className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Aéroport Ibn Battouta</span>
                  </div>
                  <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                    <Anchor className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">Port Tanger Ville</span>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <Waves className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Tanger Med</span>
                  </div>
                  <div className="flex items-center p-3 bg-pink-50 rounded-lg">
                    <Building className="h-5 w-5 text-pink-600 mr-3" />
                    <span className="text-gray-700">Centre-ville</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <Home className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Livraison domicile</span>
                  </div>
                </div>
              </div>

              {/* Fleet Tanger */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Flotte Tanger</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Citadines</span>
                    <span className="text-blue-600 font-semibold">60+ véhicules</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Berlines</span>
                    <span className="text-indigo-600 font-semibold">40+ véhicules</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">SUV & 4x4</span>
                    <span className="text-purple-600 font-semibold">70+ véhicules</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Utilitaires</span>
                    <span className="text-pink-600 font-semibold">30+ véhicules</span>
                  </div>
                </div>
              </div>

              {/* Local Team */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Équipe Locale</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <UserCheck className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Conseillers experts</span>
                  </div>
                  <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                    <Wrench className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">Équipe technique</span>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <Headphones className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Service client 24h</span>
                  </div>
                  <div className="flex items-center p-3 bg-pink-50 rounded-lg">
                    <Trophy className="h-5 w-5 text-pink-600 mr-3" />
                    <span className="text-gray-700">Management local</span>
                  </div>
                </div>
              </div>

              {/* Contact Tanger */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Tanger</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">tanger@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">Boulevard Mohammed VI, Tanger</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 font-semibold">
                    🏆 Leader local depuis 2010
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
            FAQ - Agence location voiture Tanger
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Où se trouvent vos points de service à Tanger ?
              </h3>
              <p className="text-gray-600">
                5 points : Aéroport Ibn Battouta, Port Tanger Ville, Tanger Med, 
                centre-ville Boulevard Mohammed VI, et livraison à domicile.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Combien de véhicules disponibles à Tanger ?
              </h3>
              <p className="text-gray-600">
                Plus de 200 véhicules : 60 citadines, 40 berlines, 70 SUV/4x4, 
                30 utilitaires. Flotte renouvelée régulièrement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Vos équipes parlent-elles plusieurs langues ?
              </h3>
              <p className="text-gray-600">
                Oui, nos 25 collaborateurs à Tanger parlent français, arabe, 
                anglais et espagnol pour vous servir au mieux.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Proposez-vous la livraison à Tanger ?
              </h3>
              <p className="text-gray-600">
                Oui, livraison gratuite dans tout le Grand Tanger pour les 
                locations de plus de 3 jours. Horaires 7h-22h.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}