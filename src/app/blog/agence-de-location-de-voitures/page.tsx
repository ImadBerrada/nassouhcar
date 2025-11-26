import type { Metadata } from 'next'
import { MapPin, Clock, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Crown, Trophy, UserCheck, Headphones, Building, Plane, Waves, Home, Wrench, Award, Camera, MapPin as Location } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agence de Location de Voitures Maroc 2025 ✓ Leader National depuis 2010',
  description: 'Agence de location de voitures Maroc ✓ Leader national depuis 2010 ✓ 15+ villes ✓ Service premium ✓ Flotte moderne ✓ Expertise reconnue.',
  keywords: 'agence de location de voitures maroc, agence location voitures maroc, car rental agency morocco, agence auto maroc, nassoh car maroc',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/agence-de-location-de-voitures'
  },
  openGraph: {
    title: 'Agence de Location de Voitures Maroc 2025 ✓ Leader National depuis 2010',
    description: 'Agence de location de voitures Maroc ✓ Leader national depuis 2010 ✓ 15+ villes ✓ Service premium.',
    images: ['/morocco-car-rental-agency-blog.jpg'],
  },
}

export default function AgenceLocationVoituresBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Building className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold text-lg">Agence Leader</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Agence de Location de Voitures
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Leader national depuis 2010. Plus de 15 villes, 500+ véhicules, 
              service premium et tarifs compétitifs !
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
                <span>Agence</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Découvrir l'Agence
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Agency Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nassoh Car en chiffres</h2>
            <p className="text-xl text-gray-600">L'agence de location de voitures de référence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Villes couvertes</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Véhicules disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">15 ans</div>
              <div className="text-gray-600 font-medium">D'expérience</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-pink-600 mb-2">50K+</div>
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
                <Building className="h-8 w-8 text-blue-600 mr-3" />
                Nassoh Car : Votre agence de location de voitures de confiance
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Depuis 2010, <strong>Nassoh Car</strong> s'impose comme l'<strong>agence 
                de location de voitures</strong> de référence au Maroc. Avec plus de 
                15 villes couvertes et une flotte de 500+ véhicules, nous offrons 
                des solutions de mobilité adaptées à tous vos besoins.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Crown className="h-6 w-6 text-blue-600 mr-2" />
                  Pourquoi choisir notre agence ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Expérience prouvée</strong> : 15 ans d'expertise dans la location</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Couverture nationale</strong> : Présence dans 15+ villes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Flotte diversifiée</strong> : 500+ véhicules récents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Service premium</strong> : Assistance 24h/24</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Location className="h-6 w-6 text-blue-600 mr-2" />
                Implantations de notre agence
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre <strong>agence de location de voitures</strong> rayonne 
                sur tout le territoire marocain avec des points de service 
                stratégiquement implantés :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Plane className="h-6 w-6 text-blue-600 mr-2" />
                    Aéroports principaux
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Tanger Ibn Battouta</strong> : Terminal 1 & 2</li>
                    <li>• <strong>Casablanca Mohammed V</strong> : Hall arrivées</li>
                    <li>• <strong>Marrakech Menara</strong> : Zone location</li>
                    <li>• <strong>Agadir Al Massira</strong> : Comptoir dédié</li>
                    <li>• <strong>Fès Saïss</strong> : Accueil personnalisé</li>
                    <li>• <strong>Rabat Salé</strong> : Service express</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Building className="h-6 w-6 text-indigo-600 mr-2" />
                    Centres-villes
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Tanger</strong> : Boulevard Mohammed VI</li>
                    <li>• <strong>Casablanca</strong> : Centre Maarif</li>
                    <li>• <strong>Rabat</strong> : Avenue Mohammed V</li>
                    <li>• <strong>Tétouan</strong> : Place Hassan II</li>
                    <li>• <strong>Oujda</strong> : Boulevard Zerktouni</li>
                    <li>• <strong>Nador</strong> : Avenue Youssef Ben Tachfine</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Waves className="h-6 w-6 text-purple-600 mr-2" />
                    Ports et frontières
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Port Tanger Ville</strong> : Terminal passagers</li>
                    <li>• <strong>Tanger Med</strong> : Zone d'accueil</li>
                    <li>• <strong>Port Nador</strong> : Liaison Almeria</li>
                    <li>• <strong>Fnideq</strong> : Frontière Ceuta</li>
                    <li>• <strong>Bab Sebta</strong> : Point de passage</li>
                    <li>• <strong>Oujda</strong> : Frontière algérienne</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Home className="h-6 w-6 text-pink-600 mr-2" />
                    Zones touristiques
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Chefchaouen</strong> : Centre historique</li>
                    <li>• <strong>Asilah</strong> : Médina et plages</li>
                    <li>• <strong>Larache</strong> : Port de plaisance</li>
                    <li>• <strong>Al Hoceima</strong> : Baie méditerranéenne</li>
                    <li>• <strong>Ouazzane</strong> : Ville sainte</li>
                    <li>• <strong>Ksar el Kebir</strong> : Patrimoine historique</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-blue-600 mr-2" />
                Notre flotte de véhicules
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                L'<strong>agence de location de voitures Nassoh Car</strong> 
                dispose d'une flotte moderne et diversifiée pour répondre 
                à tous vos besoins de mobilité :
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Citadines Économiques</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Modèles disponibles</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Dacia Logan</strong> : Fiable et économique</li>
                            <li>• <strong>Renault Clio</strong> : Confort urbain</li>
                            <li>• <strong>Peugeot 208</strong> : Design moderne</li>
                            <li>• <strong>Hyundai i10</strong> : Compacte pratique</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Avantages</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Consommation réduite</strong> : 4-5L/100km</li>
                            <li>• <strong>Facilité de stationnement</strong> : Urbain</li>
                            <li>• <strong>Tarifs attractifs</strong> : Dès 120 DH/jour</li>
                            <li>• <strong>Assurance incluse</strong> : Tous risques</li>
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
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Berlines Confort</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Gamme premium</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Mercedes Classe C</strong> : Luxe allemand</li>
                            <li>• <strong>BMW Série 3</strong> : Sportivité élégante</li>
                            <li>• <strong>Audi A4</strong> : Technologie avancée</li>
                            <li>• <strong>Volkswagen Passat</strong> : Confort familial</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Équipements</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Climatisation automatique</strong> : Bi-zone</li>
                            <li>• <strong>Navigation GPS</strong> : Intégrée</li>
                            <li>• <strong>Sièges cuir</strong> : Chauffants</li>
                            <li>• <strong>Système audio</strong> : Premium</li>
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
                      <h4 className="font-bold text-xl text-gray-900 mb-3">SUV & 4x4</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Tout-terrain</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Toyota Prado</strong> : Robustesse légendaire</li>
                            <li>• <strong>Nissan X-Trail</strong> : Polyvalence urbaine</li>
                            <li>• <strong>Hyundai Tucson</strong> : Design moderne</li>
                            <li>• <strong>Dacia Duster</strong> : Rapport qualité/prix</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Destinations</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Atlas</strong> : Montagnes et pistes</li>
                            <li>• <strong>Sahara</strong> : Expéditions désert</li>
                            <li>• <strong>Rif</strong> : Routes de montagne</li>
                            <li>• <strong>Côtes</strong> : Plages et falaises</li>
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
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Véhicules Utilitaires</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Solutions pro</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Renault Master</strong> : Grand volume</li>
                            <li>• <strong>Ford Transit</strong> : Polyvalence maximale</li>
                            <li>• <strong>Iveco Daily</strong> : Charge utile élevée</li>
                            <li>• <strong>Mercedes Sprinter</strong> : Confort pro</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Applications</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Déménagements</strong> : Particuliers/pros</li>
                            <li>• <strong>Livraisons</strong> : E-commerce</li>
                            <li>• <strong>Événements</strong> : Transport matériel</li>
                            <li>• <strong>Chantiers</strong> : Outils et équipements</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                Services de notre agence
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                En tant qu'<strong>agence de location de voitures</strong> leader, 
                nous proposons des services complets pour votre tranquillité :
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  Services inclus
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Assistance & Support</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Assistance 24h/24</strong> : Partout au Maroc</li>
                      <li>• <strong>Dépannage rapide</strong> : Intervention &lt; 1h</li>
                      <li>• <strong>Véhicule de remplacement</strong> : Immédiat</li>
                      <li>• <strong>Rapatriement</strong> : Si nécessaire</li>
                      <li>• <strong>Support multilingue</strong> : FR/AR/EN/ES</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Assurances & Protection</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Tous risques</strong> : Couverture maximale</li>
                      <li>• <strong>Vol/incendie</strong> : Protection totale</li>
                      <li>• <strong>Bris de glace</strong> : Remplacement gratuit</li>
                      <li>• <strong>Responsabilité civile</strong> : Illimitée</li>
                      <li>• <strong>Protection juridique</strong> : Défense incluse</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Services Premium</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Livraison/reprise</strong> : À domicile</li>
                      <li>• <strong>Nettoyage</strong> : Intérieur/extérieur</li>
                      <li>• <strong>Plein d'essence</strong> : Offert</li>
                      <li>• <strong>GPS inclus</strong> : Navigation gratuite</li>
                      <li>• <strong>Siège bébé</strong> : Sur demande</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                Notre équipe d'experts
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                L'<strong>agence Nassoh Car</strong> s'appuie sur une équipe 
                de professionnels expérimentés pour vous garantir un service 
                d'excellence :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <UserCheck className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-900">Conseillers Clientèle</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Expertise produit</strong> : Connaissance approfondie</li>
                    <li>• <strong>Conseil personnalisé</strong> : Selon vos besoins</li>
                    <li>• <strong>Multilingues</strong> : Communication facilitée</li>
                    <li>• <strong>Formation continue</strong> : Mise à jour permanente</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Wrench className="h-8 w-8 text-indigo-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-900">Équipe Technique</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Mécaniciens certifiés</strong> : Toutes marques</li>
                    <li>• <strong>Maintenance préventive</strong> : Planifiée</li>
                    <li>• <strong>Contrôles qualité</strong> : Avant chaque location</li>
                    <li>• <strong>Réparations express</strong> : Minimiser l'attente</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Headphones className="h-8 w-8 text-purple-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-900">Service Client</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Disponibilité 24h/24</strong> : Assistance permanente</li>
                    <li>• <strong>Résolution rapide</strong> : Problèmes traités</li>
                    <li>• <strong>Suivi personnalisé</strong> : Relation client</li>
                    <li>• <strong>Satisfaction garantie</strong> : Engagement qualité</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Trophy className="h-8 w-8 text-pink-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-900">Management</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Direction expérimentée</strong> : 15+ ans secteur</li>
                    <li>• <strong>Vision stratégique</strong> : Innovation continue</li>
                    <li>• <strong>Standards élevés</strong> : Qualité exigée</li>
                    <li>• <strong>Développement durable</strong> : Responsabilité sociale</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                Certifications et reconnaissances
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre <strong>agence de location de voitures</strong> est 
                reconnue par les autorités et certifiée par les organismes 
                professionnels :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Award className="h-6 w-6 text-blue-600 mr-2" />
                    Certifications officielles
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Licence transport</strong> : Ministère Transport</li>
                    <li>• <strong>Agrément tourisme</strong> : Ministère Tourisme</li>
                    <li>• <strong>Certification ISO</strong> : Qualité service</li>
                    <li>• <strong>Assurance professionnelle</strong> : RC complète</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Trophy className="h-6 w-6 text-indigo-600 mr-2" />
                    Récompenses secteur
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Prix Excellence</strong> : Chambre Commerce Tanger</li>
                    <li>• <strong>Trophée Innovation</strong> : Salon Auto 2023</li>
                    <li>• <strong>Label Qualité</strong> : Association Professionnelle</li>
                    <li>• <strong>Certification Verte</strong> : Développement durable</li>
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
                <h3 className="text-2xl font-bold mb-4">Agence Leader !</h3>
                <p className="mb-6 text-blue-100">
                  15 ans d'expérience, 15+ villes, 500+ véhicules, service premium !
                </p>
                <Link 
                  href="/contact" 
                  className="block w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Contacter l'Agence
                </Link>
              </div>

              {/* Agency Locations */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nos Implantations</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Plane className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">6 Aéroports</span>
                  </div>
                  <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                    <Building className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">15+ Centres-villes</span>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <Waves className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Ports & Frontières</span>
                  </div>
                  <div className="flex items-center p-3 bg-pink-50 rounded-lg">
                    <Camera className="h-5 w-5 text-pink-600 mr-3" />
                    <span className="text-gray-700">Zones Touristiques</span>
                  </div>
                </div>
              </div>

              {/* Fleet Categories */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Notre Flotte</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Citadines</span>
                    <span className="text-blue-600 font-semibold">120+ véhicules</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Berlines</span>
                    <span className="text-indigo-600 font-semibold">80+ véhicules</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">SUV & 4x4</span>
                    <span className="text-purple-600 font-semibold">150+ véhicules</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Utilitaires</span>
                    <span className="text-pink-600 font-semibold">150+ véhicules</span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Services Inclus</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Assistance 24h/24</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Assurance tous risques</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Livraison gratuite</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">GPS inclus</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Agence</h3>
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
                    <span className="text-gray-700">Boulevard Mohammed VI, Tanger</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 font-semibold">
                    🏆 Agence leader depuis 2010
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
            FAQ - Agence de location de voitures
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Pourquoi choisir l'agence Nassoh Car ?
              </h3>
              <p className="text-gray-600">
                15 ans d'expérience, présence dans 15+ villes, flotte de 500+ véhicules, 
                service premium et tarifs compétitifs. Agence leader au Maroc.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Dans quelles villes êtes-vous présents ?
              </h3>
              <p className="text-gray-600">
                Tanger, Casablanca, Rabat, Marrakech, Fès, Agadir, Tétouan, 
                Oujda, Nador, Chefchaouen et 5+ autres villes stratégiques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quels services sont inclus dans la location ?
              </h3>
              <p className="text-gray-600">
                Assurance tous risques, assistance 24h/24, GPS, livraison/reprise, 
                nettoyage, plein d'essence et véhicule de remplacement si nécessaire.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Comment réserver un véhicule ?
              </h3>
              <p className="text-gray-600">
                Réservation en ligne 24h/24, par téléphone ou directement 
                dans nos agences. Confirmation immédiate et paiement sécurisé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}