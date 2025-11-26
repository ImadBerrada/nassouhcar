import type { Metadata } from 'next'
import { MapPin, Clock, ArrowRight, Phone, Mail, Calendar, Tag, CheckCircle, Euro, Navigation, Zap, Car } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location Voiture à Tanger 2025 - Réservation Rapide & Prix Imbattables | Nassoh Car',
  description: 'Location voiture à Tanger avec Nassoh Car ✓ Prix compétitifs ✓ Véhicules récents ✓ Service 24h/24 ✓ Réservation en ligne instantanée. Découvrez nos offres exclusives !',
  keywords: 'location voiture à tanger, louer voiture tanger, location auto tanger, car rental tangier, voiture location tanger, nassoh car tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/location-voiture-a-tanger'
  },
  openGraph: {
    title: 'Location Voiture à Tanger 2025 - Réservation Rapide & Prix Imbattables',
    description: 'Location voiture à Tanger avec Nassoh Car ✓ Prix compétitifs ✓ Véhicules récents ✓ Service 24h/24 ✓ Réservation en ligne instantanée.',
    images: ['/tangier.webp'],
  },
}

export default function LocationVoitureATangerBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Car className="h-6 w-6 text-amber-400 mr-2" />
              <span className="text-amber-400 font-semibold text-lg">Location Premium 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">
              Location Voiture à Tanger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Réservez votre voiture à Tanger en quelques clics ! Service premium, prix transparents, 
              et une flotte moderne pour tous vos déplacements au Maroc.
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
                <span>Location Tanger</span>
              </div>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Réserver Maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Véhicules disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-green-600 mb-2">24h/24</div>
              <div className="text-gray-600">Service client</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-amber-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Note clients</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Années d'expérience</div>
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
                <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                Pourquoi choisir la location voiture à Tanger ?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Tanger</strong>, porte d'entrée du Maroc, est une ville fascinante qui mérite d'être explorée en toute liberté. 
                La <strong>location voiture à Tanger</strong> vous offre cette liberté de mouvement indispensable pour découvrir 
                cette perle du détroit de Gibraltar à votre rythme.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-2" />
                  Avantages de louer une voiture à Tanger
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Liberté totale</strong> : Explorez Tanger et ses environs sans contraintes d'horaires</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Économies</strong> : Plus rentable que les taxis pour plusieurs trajets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Confort</strong> : Climatisation et espace personnel garantis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Accessibilité</strong> : Accès facile aux plages et sites touristiques</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Car className="h-6 w-6 text-blue-600 mr-2" />
                Notre flotte de véhicules à Tanger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Chez <strong>Nassoh Car</strong>, nous proposons une large gamme de véhicules pour votre 
                <strong> location voiture à Tanger</strong>. Que vous soyez en voyage d'affaires, en vacances en famille, 
                ou en escapade romantique, nous avons le véhicule parfait pour vous.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Véhicules Économiques</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Dacia Logan - À partir de 200 DH/jour</li>
                    <li>• Renault Clio - À partir de 250 DH/jour</li>
                    <li>• Peugeot 208 - À partir de 280 DH/jour</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Véhicules Confort</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Toyota Yaris - À partir de 320 DH/jour</li>
                    <li>• Hyundai i20 - À partir de 350 DH/jour</li>
                    <li>• Volkswagen Polo - À partir de 380 DH/jour</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Navigation className="h-6 w-6 text-blue-600 mr-2" />
                Lieux incontournables à visiter avec votre voiture de location
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Avec votre <strong>location voiture à Tanger</strong>, découvrez les merveilles de la région :
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Médina de Tanger</strong> : Plongez dans l'histoire millénaire de la ville</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Cap Spartel</strong> : Admirez la rencontre entre Atlantique et Méditerranée</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Grottes d'Hercule</strong> : Explorez ces formations géologiques spectaculaires</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Asilah</strong> : Découvrez cette charmante ville côtière à 45 minutes</span>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Euro className="h-6 w-6 text-amber-600 mr-2" />
                  Tarifs transparents pour votre location voiture à Tanger
                </h3>
                <p className="text-gray-700 mb-4">
                  Chez Nassoh Car, nous pratiquons une politique de <strong>prix transparents</strong> sans frais cachés :
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Assurance tous risques incluse</li>
                  <li>✓ Kilométrage illimité</li>
                  <li>✓ Assistance 24h/24</li>
                  <li>✓ Carburant : retour avec le même niveau</li>
                  <li>✓ Conducteur supplémentaire gratuit</li>
                </ul>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Réservez votre voiture maintenant !</h3>
                <p className="mb-6 text-blue-100">
                  Profitez de nos tarifs préférentiels et de notre service premium pour votre location voiture à Tanger.
                </p>
                <Link 
                  href="/fleet" 
                  className="block w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Voir nos véhicules
                </Link>
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

              {/* Related Articles */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Articles connexes</h3>
                <div className="space-y-4">
                  <Link href="/blog/location-voiture-tanger-aeroport" className="block hover:text-blue-600 transition-colors">
                    → Location voiture Tanger aéroport
                  </Link>
                  <Link href="/blog/location-voiture-tanger-port-med" className="block hover:text-blue-600 transition-colors">
                    → Location voiture Tanger Med
                  </Link>
                  <Link href="/blog/conseils-location-voiture-tanger" className="block hover:text-blue-600 transition-colors">
                    → Conseils location voiture Tanger
                  </Link>
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                <Link href="/blog/location-voiture-tanger-pas-cher" className="hover:text-blue-600 transition-colors">
                  Location Pas Cher à Tanger
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Découvrez nos tarifs imbattables dès 170 DH/jour pour votre location de voiture à Tanger.
              </p>
              <Link href="/blog/location-voiture-tanger-pas-cher" className="text-blue-600 hover:text-blue-800 font-medium">
                Lire la suite →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                <Link href="/blog/location-voiture-au-port-de-tanger" className="hover:text-green-600 transition-colors">
                  Location au Port de Tanger
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Service express au port de Tanger avec livraison gratuite pour vos déplacements.
              </p>
              <Link href="/blog/location-voiture-au-port-de-tanger" className="text-green-600 hover:text-green-800 font-medium">
                Lire la suite →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                <Link href="/blog/location-voiture-tanger-boukhalef" className="hover:text-purple-600 transition-colors">
                  Location Tanger Boukhalef
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Location à l'aéroport Ibn Battuta avec service premium et véhicules récents.
              </p>
              <Link href="/blog/location-voiture-tanger-boukhalef" className="text-purple-600 hover:text-purple-800 font-medium">
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
            Questions fréquentes sur la location voiture à Tanger
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quel âge faut-il avoir pour louer une voiture à Tanger ?
              </h3>
              <p className="text-gray-600">
                L'âge minimum est de 21 ans avec au moins 1 an de permis de conduire. 
                Des frais supplémentaires peuvent s'appliquer pour les conducteurs de moins de 25 ans.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Quels documents sont nécessaires ?
              </h3>
              <p className="text-gray-600">
                Permis de conduire valide, carte d'identité ou passeport, et une carte de crédit 
                au nom du conducteur principal pour la caution.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Puis-je annuler ma réservation ?
              </h3>
              <p className="text-gray-600">
                Oui, vous pouvez annuler gratuitement jusqu'à 24h avant la prise en charge. 
                Consultez nos conditions d'annulation pour plus de détails.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                L'assurance est-elle incluse ?
              </h3>
              <p className="text-gray-600">
                Oui, tous nos véhicules incluent une assurance tous risques avec franchise. 
                Des options d'assurance complémentaire sont disponibles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}