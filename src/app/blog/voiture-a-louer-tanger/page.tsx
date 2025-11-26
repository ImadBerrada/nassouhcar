import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Euro, Navigation, Zap, Award, Search } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Voiture à Louer Tanger 2025 - Trouvez Votre Véhicule Idéal | Nassoh Car',
  description: 'Voiture à louer Tanger ✓ Trouvez votre véhicule idéal ✓ Large choix ✓ Prix compétitifs ✓ Service premium ✓ Réservation facile ✓ Livraison gratuite.',
  keywords: 'voiture à louer tanger, voiture louer tanger, car to rent tangier, auto à louer tanger, véhicule louer tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/voiture-a-louer-tanger'
  },
  openGraph: {
    title: 'Voiture à Louer Tanger 2025 - Trouvez Votre Véhicule Idéal | Nassoh Car',
    description: 'Voiture à louer Tanger ✓ Trouvez votre véhicule idéal ✓ Large choix ✓ Prix compétitifs.',
    images: ['/tangier-car-to-rent-blog.jpg'],
  },
}

export default function VoitureALouerTangerBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Search className="h-6 w-6 text-emerald-400 mr-2" />
              <span className="text-emerald-400 font-semibold text-lg">Recherche Simplifiée</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Voiture à Louer Tanger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Trouvez facilement la voiture parfaite à louer à Tanger. 
              Plus de 500 véhicules disponibles avec réservation instantanée et prix transparents.
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
                <span>Guide Location</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Trouver Ma Voiture
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Search Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trouvez votre voiture idéale</h2>
            <p className="text-xl text-gray-600">Recherche simplifiée parmi notre vaste sélection</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Voitures disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600 font-medium">Catégories</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">24h</div>
              <div className="text-gray-600 font-medium">Réservation</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Transparence prix</div>
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
                <Search className="h-8 w-8 text-emerald-600 mr-3" />
                Comment trouver la voiture à louer parfaite à Tanger ?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Chercher une <strong>voiture à louer Tanger</strong> n'a jamais été aussi simple ! 
                <strong>Nassoh Car</strong> vous propose un système de recherche intuitif pour trouver 
                le véhicule idéal parmi plus de 500 options disponibles.
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-emerald-600 mr-2" />
                  Pourquoi choisir notre service de recherche ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Recherche instantanée</strong> : Résultats en temps réel</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Filtres avancés</strong> : Prix, catégorie, équipements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Comparaison facile</strong> : Comparez plusieurs véhicules</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Réservation immédiate</strong> : Confirmez en 2 clics</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Navigation className="h-6 w-6 text-emerald-600 mr-2" />
                Guide de sélection par besoin
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Pour trouver la <strong>voiture à louer Tanger</strong> idéale, identifiez d'abord votre besoin :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Car className="h-5 w-5 text-emerald-600 mr-2" />
                    Voyage d'affaires
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Renault Symbol - Confort</li>
                    <li>• Toyota Corolla - Fiabilité</li>
                    <li>• Hyundai Elantra - Élégance</li>
                  </ul>
                  <p className="text-sm text-gray-500">Véhicules professionnels et confortables</p>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    Vacances famille
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Dacia Lodgy - 7 places</li>
                    <li>• Renault Scenic - Spacieux</li>
                    <li>• Toyota Avensis - Confort</li>
                  </ul>
                  <p className="text-sm text-gray-500">Espace et confort pour toute la famille</p>
                </div>

                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Euro className="h-5 w-5 text-amber-600 mr-2" />
                    Budget serré
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Dacia Logan - 180 DH/jour</li>
                    <li>• Hyundai Grand i10 - 220 DH/jour</li>
                    <li>• Renault Symbol - 200 DH/jour</li>
                  </ul>
                  <p className="text-sm text-gray-500">Économique sans compromis sur la qualité</p>
                </div>

                <div className="bg-white border-2 border-purple-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-purple-600 mr-2" />
                    Aventure
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Dacia Duster - 4x4</li>
                    <li>• Hyundai Tucson - SUV</li>
                    <li>• Toyota RAV4 - Premium</li>
                  </ul>
                  <p className="text-sm text-gray-500">Pour explorer le Maroc en toute liberté</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Zap className="h-6 w-6 text-emerald-600 mr-2" />
                Processus de réservation simplifié
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Réserver votre <strong>voiture à louer Tanger</strong> en 4 étapes simples :
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Recherchez</h5>
                      <p className="text-gray-600 text-sm">Utilisez nos filtres pour trouver votre véhicule idéal</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Comparez</h5>
                      <p className="text-gray-600 text-sm">Comparez les prix et équipements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Réservez</h5>
                      <p className="text-gray-600 text-sm">Confirmation instantanée en ligne</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Récupérez</h5>
                      <p className="text-gray-600 text-sm">Récupération rapide avec tous les documents</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-6 w-6 text-emerald-600 mr-2" />
                Conseils pour choisir votre voiture à Tanger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour optimiser votre choix de <strong>voiture à louer Tanger</strong> :
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Critères de sélection importants</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Nombre de passagers</strong> : Choisissez selon votre groupe</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Type de trajet</strong> : Urbain, autoroute ou tout-terrain</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Durée de location</strong> : Tarifs dégressifs disponibles</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Budget total</strong> : Incluant carburant et péages</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Équipements</strong> : GPS, climatisation, sièges bébé</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Assurance</strong> : Niveau de couverture souhaité</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Star className="h-6 w-6 text-green-600 mr-2" />
                  Avantages de réserver avec Nassoh Car
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Plus grand choix de Tanger</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Prix transparents sans surprise</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Réservation 24h/24</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Modification gratuite</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Véhicules récents et entretenus</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Service client réactif</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Livraison possible</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Assistance routière incluse</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Trouvez votre voiture !</h3>
                <p className="mb-6 text-emerald-100">
                  Recherchez parmi plus de 500 véhicules disponibles à Tanger.
                </p>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-emerald-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Commencer la recherche
                </Link>
              </div>

              {/* Search Tips */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Conseils de recherche</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Search className="h-5 w-5 text-emerald-500 mr-3 mt-1" />
                    <span className="text-gray-700 text-sm">Utilisez les filtres pour affiner votre recherche</span>
                  </div>
                  <div className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                    <span className="text-gray-700 text-sm">Consultez les avis clients</span>
                  </div>
                  <div className="flex items-start">
                    <Euro className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span className="text-gray-700 text-sm">Comparez les prix tout inclus</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                    <span className="text-gray-700 text-sm">Vérifiez les équipements inclus</span>
                  </div>
                </div>
              </div>

              {/* Popular Searches */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recherches populaires</h3>
                <div className="space-y-2">
                  <Link href="/fleet?category=economy" className="block text-emerald-600 hover:text-emerald-700 text-sm">
                    Voitures économiques
                  </Link>
                  <Link href="/fleet?category=family" className="block text-emerald-600 hover:text-emerald-700 text-sm">
                    Véhicules familiaux
                  </Link>
                  <Link href="/fleet?category=suv" className="block text-emerald-600 hover:text-emerald-700 text-sm">
                    SUV et 4x4
                  </Link>
                  <Link href="/fleet?category=luxury" className="block text-emerald-600 hover:text-emerald-700 text-sm">
                    Voitures de luxe
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Besoin d'aide ?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">contact@nassohcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
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
            Questions fréquentes sur la recherche de voiture
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Comment trouver la voiture la moins chère ?
              </h3>
              <p className="text-gray-600">
                Utilisez notre filtre de prix et triez par tarif croissant. Les voitures économiques 
                comme la Dacia Logan commencent à 180 DH/jour.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Puis-je réserver une voiture spécifique ?
              </h3>
              <p className="text-gray-600">
                Oui, vous pouvez réserver un modèle précis. Si indisponible, nous vous proposerons 
                un véhicule équivalent ou supérieur au même tarif.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Combien de temps à l'avance réserver ?
              </h3>
              <p className="text-gray-600">
                Vous pouvez réserver jusqu'à 1 an à l'avance ou même le jour même selon disponibilité. 
                Plus tôt vous réservez, plus vous avez de choix.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Les prix incluent-ils tout ?
              </h3>
              <p className="text-gray-600">
                Nos prix incluent l'assurance de base, le kilométrage illimité et les taxes. 
                Seul le carburant et les options supplémentaires sont en sus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}