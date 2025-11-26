import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Building, Navigation, Zap, Award, Timer, Trophy, Target } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agence Location Voiture Aéroport Tanger 2025 - Nassoh Car | Service Premium',
  description: 'Agence location voiture aéroport Tanger ✓ Service premium ✓ Livraison express ✓ Flotte moderne ✓ Assistance 24h/24 ✓ Réservation en ligne.',
  keywords: 'agence location voiture aéroport tanger, agence location auto aéroport tanger, car rental agency tangier airport, nassoh car aéroport',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/agence-location-voiture-aeroport-tanger'
  },
  openGraph: {
    title: 'Agence Location Voiture Aéroport Tanger 2025 - Nassoh Car | Service Premium',
    description: 'Agence location voiture aéroport Tanger ✓ Service premium ✓ Livraison express ✓ Flotte moderne.',
    images: ['/tangier-airport-agency-blog.jpg'],
  },
}

export default function AgenceLocationVoitureAeroportTangerBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Building className="h-6 w-6 text-emerald-400 mr-2" />
              <span className="text-emerald-400 font-semibold text-lg">Agence Professionnelle</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Agence Location Voiture Aéroport Tanger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Votre agence de référence pour la location de voiture à l'aéroport de Tanger. 
              Service premium, flotte moderne, assistance 24h/24. L'excellence à votre service !
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
                <span>Agence Premium</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Découvrir Notre Agence
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
            <p className="text-xl text-gray-600">L'agence de confiance à l'aéroport de Tanger</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-emerald-600 mb-2">8+</div>
              <div className="text-gray-600 font-medium">Années d'expérience</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Véhicules en flotte</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">10k+</div>
              <div className="text-gray-600 font-medium">Clients satisfaits</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
              <div className="text-gray-600 font-medium">Note moyenne</div>
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
                <Trophy className="h-8 w-8 text-emerald-600 mr-3" />
                Nassoh Car : Votre agence de référence à l'aéroport de Tanger
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Nassoh Car</strong> est l'<strong>agence location voiture aéroport Tanger</strong> 
                de référence depuis plus de 8 ans. Spécialisée dans la location de véhicules 
                à l'aéroport Ibn Battuta, notre agence vous offre un service premium 
                avec une flotte moderne et un accompagnement personnalisé.
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-emerald-600 mr-2" />
                  Pourquoi choisir notre agence ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Expertise locale</strong> : 8 ans d'expérience à Tanger</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Présence aéroport</strong> : Bureau permanent à Ibn Battuta</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Flotte moderne</strong> : Plus de 150 véhicules récents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Service 24h/24</strong> : Assistance permanente</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Building className="h-6 w-6 text-emerald-600 mr-2" />
                Notre agence à l'aéroport de Tanger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre <strong>agence location voiture aéroport Tanger</strong> est stratégiquement 
                située pour vous offrir le meilleur service :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-emerald-600 mr-2" />
                    Localisation stratégique
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Hall d'arrivée</strong> : Accueil dès votre sortie</li>
                    <li>• <strong>Parking dédié</strong> : Véhicules à proximité</li>
                    <li>• <strong>Signalisation claire</strong> : Facile à trouver</li>
                    <li>• <strong>Accès 24h/24</strong> : Ouvert en permanence</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    Équipe professionnelle
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Conseillers experts</strong> : Formation continue</li>
                    <li>• <strong>Multilingues</strong> : FR, AR, EN, ES</li>
                    <li>• <strong>Service personnalisé</strong> : Écoute de vos besoins</li>
                    <li>• <strong>Disponibilité</strong> : Réponse immédiate</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Car className="h-5 w-5 text-amber-600 mr-2" />
                    Flotte diversifiée
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Économiques</strong> : Dacia, Hyundai, Renault</li>
                    <li>• <strong>Berlines</strong> : Toyota, Volkswagen</li>
                    <li>• <strong>SUV</strong> : Tucson, RAV4, Qashqai</li>
                    <li>• <strong>Luxe</strong> : Mercedes, BMW, Audi</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-purple-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-purple-600 mr-2" />
                    Services inclus
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Assurance complète</strong> : Tous risques</li>
                    <li>• <strong>Livraison gratuite</strong> : À l'aéroport</li>
                    <li>• <strong>GPS inclus</strong> : Navigation Maroc</li>
                    <li>• <strong>Assistance 24h/24</strong> : Partout au Maroc</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-2" />
                  Processus de location dans notre agence
                </h3>
                <p className="text-gray-700 mb-4">
                  Notre <strong>agence location voiture aéroport Tanger</strong> a optimisé 
                  le processus pour votre confort :
                </p>
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="flex items-start">
                    <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Réservation en ligne</h5>
                      <p className="text-gray-600 text-sm">Choisissez votre véhicule sur notre site, confirmation immédiate</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Accueil à l'aéroport</h5>
                      <p className="text-gray-600 text-sm">Notre équipe vous attend dans le hall d'arrivée avec votre nom</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Formalités express</h5>
                      <p className="text-gray-600 text-sm">Vérification des documents en 5 minutes, signature du contrat</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Remise du véhicule</h5>
                      <p className="text-gray-600 text-sm">État des lieux, explication des équipements, remise des clés</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Départ immédiat</h5>
                      <p className="text-gray-600 text-sm">Vous partez directement de l'aéroport, GPS programmé</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-6 w-6 text-emerald-600 mr-2" />
                Services exclusifs de notre agence
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                En tant qu'<strong>agence location voiture aéroport Tanger</strong> spécialisée, 
                nous proposons des services exclusifs :
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                      <span><strong>Accueil personnalisé</strong> avec votre nom</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                      <span><strong>Véhicule de remplacement</strong> en cas de panne</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                      <span><strong>Livraison à l'hôtel</strong> si besoin</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                      <span><strong>Extension de location</strong> possible</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                      <span><strong>Conseils touristiques</strong> gratuits</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                      <span><strong>Retour flexible</strong> : autres villes possibles</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                      <span><strong>Nettoyage gratuit</strong> en cours de location</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                      <span><strong>Cartes routières</strong> offertes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                      <span><strong>Programme fidélité</strong> avec avantages</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                      <span><strong>Assistance multilingue</strong> 24h/24</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Navigation className="h-6 w-6 text-emerald-600 mr-2" />
                Témoignages clients de notre agence
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Ce que disent nos clients de notre <strong>agence location voiture aéroport Tanger</strong> :
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-1 gap-6">
                  <div className="bg-white p-4 rounded-xl border-l-4 border-emerald-500">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                      <span className="ml-2 text-sm text-gray-500">5/5</span>
                    </div>
                    <p className="text-gray-700 italic mb-2">
                      "Agence exceptionnelle ! Accueil chaleureux dès l'arrivée, véhicule impeccable, 
                      service irréprochable. Je recommande vivement Nassoh Car !"
                    </p>
                    <div className="text-sm text-gray-500">
                      <strong>Marie Dubois</strong> - Touriste française - Janvier 2025
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border-l-4 border-blue-500">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                      <span className="ml-2 text-sm text-gray-500">5/5</span>
                    </div>
                    <p className="text-gray-700 italic mb-2">
                      "Professionnalisme exemplaire. L'équipe parle parfaitement français, 
                      les conseils sont précieux. Une agence de confiance à Tanger !"
                    </p>
                    <div className="text-sm text-gray-500">
                      <strong>Hassan Alami</strong> - Homme d'affaires - Décembre 2024
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border-l-4 border-purple-500">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                      <span className="ml-2 text-sm text-gray-500">5/5</span>
                    </div>
                    <p className="text-gray-700 italic mb-2">
                      "Service premium à prix raisonnable. Véhicule récent, bien entretenu, 
                      livraison ponctuelle. Cette agence mérite sa réputation !"
                    </p>
                    <div className="text-sm text-gray-500">
                      <strong>Carlos Rodriguez</strong> - Touriste espagnol - Novembre 2024
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Timer className="h-6 w-6 text-emerald-600 mr-2" />
                Horaires et contact de l'agence
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre <strong>agence location voiture aéroport Tanger</strong> est à votre disposition :
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Horaires d'ouverture</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Lundi - Dimanche</strong> : 24h/24</li>
                      <li>• <strong>Jours fériés</strong> : Service maintenu</li>
                      <li>• <strong>Accueil personnalisé</strong> : 6h - 23h</li>
                      <li>• <strong>Urgences</strong> : 24h/24 - 7j/7</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Coordonnées</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Téléphone</strong> : +212 631-630013</li>
                      <li>• <strong>WhatsApp</strong> : +212 631-630013</li>
                      <li>• <strong>Email</strong> : contact@nassohcar.com</li>
                      <li>• <strong>Adresse</strong> : 127 Av. Hafid Ibn Abdelbar</li>
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
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Agence Premium</h3>
                <p className="mb-6 text-emerald-100">
                  Service d'excellence, flotte moderne, assistance 24h/24. Votre satisfaction garantie !
                </p>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-emerald-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Contacter l'agence
                </Link>
              </div>

              {/* Agency Services */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Services agence</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Building className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">Bureau à l'aéroport</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Équipe multilingue</span>
                  </div>
                  <div className="flex items-center">
                    <Timer className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Service 24h/24</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">Assurance complète</span>
                  </div>
                </div>
              </div>

              {/* Fleet Categories */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Notre flotte</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Économique</span>
                    <span className="text-sm text-emerald-600 font-semibold">30+ véhicules</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Berline</span>
                    <span className="text-sm text-emerald-600 font-semibold">40+ véhicules</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">SUV</span>
                    <span className="text-sm text-emerald-600 font-semibold">50+ véhicules</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Premium</span>
                    <span className="text-sm text-emerald-600 font-semibold">30+ véhicules</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Agence</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">contact@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                    <span className="text-gray-700">Aéroport Ibn Battuta, Hall d'arrivée, Tanger</span>
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
            Questions fréquentes - Notre agence
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Où se trouve exactement votre agence à l'aéroport ?
              </h3>
              <p className="text-gray-600">
                Notre bureau se situe dans le hall d'arrivée de l'aéroport Ibn Battuta. 
                Cherchez les panneaux "Nassoh Car" dès votre sortie.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Votre agence est-elle ouverte 24h/24 ?
              </h3>
              <p className="text-gray-600">
                Oui, notre service est disponible 24h/24. L'accueil personnalisé est assuré 
                de 6h à 23h, avec un service d'urgence la nuit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Proposez-vous un service de livraison ?
              </h3>
              <p className="text-gray-600">
                Oui, livraison gratuite à l'aéroport et dans un rayon de 10 km. 
                Livraison possible dans tout Tanger avec supplément modique.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quelles langues parle votre équipe ?
              </h3>
              <p className="text-gray-600">
                Notre équipe parle couramment français, arabe, anglais et espagnol. 
                Communication fluide garantie avec tous nos clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}