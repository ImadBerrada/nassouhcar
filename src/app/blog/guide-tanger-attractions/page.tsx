import type { Metadata } from 'next'
import { MapPin, Clock, Star, Camera, Navigation, Car, Compass, Heart } from 'lucide-react'
import Link from 'next/link'

// SEO Metadata optimized for Tangier attractions and car rental
export const metadata: Metadata = {
  title: "Guide Tanger 2025 : Top Attractions avec Location Voiture | Nassoh Car",
  description: "🏛️ Découvrez Tanger avec votre voiture de location ✨ Guide complet 2025 : Médina, Grottes d'Hercule, Cap Spartel, Asilah. Itinéraires optimisés, conseils parking, tarifs préférentiels Nassoh Car. Réservez maintenant!",
  keywords: [
    'guide Tanger 2025',
    'attractions Tanger voiture',
    'location voiture Tanger tourisme',
    'médina Tanger parking',
    'grottes Hercule voiture',
    'Cap Spartel location',
    'Asilah excursion voiture',
    'itinéraire Tanger voiture',
    'Nassoh Car guide',
    'tourisme Tanger automobile',
    'voiture économique Tanger',
    'location voiture pas cher Tanger',
    'Tanger attractions 2025',
    'road trip Tanger'
  ].join(', '),
  openGraph: {
    title: "Guide Tanger 2025 : Top Attractions avec Location Voiture | Nassoh Car",
    description: "🏛️ Découvrez les merveilles de Tanger avec votre voiture de location ✨ Itinéraires optimisés, conseils parking, attractions incontournables. Réservez maintenant!",
    url: 'https://www.nassohcar.com/blog/guide-tanger-attractions',
    images: [{
      url: '/blog-guide-tanger.jpg',
      width: 1200,
      height: 630,
      alt: 'Guide attractions Tanger avec location voiture - Nassoh Car'
    }],
    type: 'article',
    siteName: 'Nassoh Car'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Guide Tanger 2025 : Top Attractions avec Location Voiture | Nassoh Car",
    description: "🏛️ Découvrez Tanger avec votre voiture de location ✨ Guide complet 2025 avec itinéraires optimisés.",
    images: ['/blog-guide-tanger.jpg']
  },
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/guide-tanger-attractions'
  }
}

export default function GuideTangerAttractionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-amber-400/20 to-orange-400/20 p-4 rounded-2xl backdrop-blur-sm border border-amber-400/30 shadow-xl inline-block mb-6">
            <Compass className="h-6 w-6 text-amber-300 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Découvrez Tanger 
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              en Liberté
            </span>
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Guide complet 2025 des attractions incontournables de Tanger avec votre voiture de location. 
            Itinéraires optimisés, conseils parking et tarifs préférentiels.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Meta */}
        <div className="flex items-center space-x-6 text-gray-600 mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-amber-600" />
            <span>Publié le 12 Janvier 2025</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-amber-600" />
            <span>12 min de lecture</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
            <span>Guide Complet</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-12 border border-amber-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Pourquoi Explorer Tanger en Voiture ?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tanger, perle du détroit de Gibraltar, révèle ses secrets à ceux qui osent s'aventurer au-delà 
            des sentiers battus. Avec votre voiture de location Nassoh Car, découvrez la liberté totale 
            d'explorer cette ville fascinante à votre rythme.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="bg-amber-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Navigation className="h-6 w-6 text-amber-600" />
              </div>
              <p className="font-semibold text-gray-900">Liberté Totale</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-900">À Votre Rythme</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <p className="font-semibold text-gray-900">Expérience Unique</p>
            </div>
          </div>
        </div>

        {/* Itinéraire 1 Jour */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Clock className="h-8 w-8 text-amber-600 mr-3" />
            Itinéraire 1 Jour : L'Essentiel de Tanger
          </h2>
          
          <div className="space-y-6">
            {/* Matin */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-full mr-4">
                  <span className="text-yellow-600 font-bold">🌅 MATIN</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">9h00 - 12h00</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">🏛️ Médina de Tanger</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Parking :</strong> Place du 9 Avril (5 DH/h)</li>
                    <li>• <strong>Durée :</strong> 2-3 heures</li>
                    <li>• <strong>À voir :</strong> Kasbah, Musée de la Kasbah</li>
                    <li>• <strong>Shopping :</strong> Souks traditionnels</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-amber-800 mb-2">💡 Conseil Nassoh Car</h5>
                  <p className="text-amber-700 text-sm">
                    Garez-vous à l'extérieur de la médina. Les ruelles sont étroites et 
                    interdites aux voitures. Le parking Place du 9 Avril est idéal.
                  </p>
                </div>
              </div>
            </div>

            {/* Après-midi */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-2 rounded-full mr-4">
                  <span className="text-orange-600 font-bold">☀️ APRÈS-MIDI</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">14h00 - 18h00</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">🌊 Grottes d'Hercule & Cap Spartel</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Distance :</strong> 14 km de Tanger (20 min)</li>
                    <li>• <strong>Parking :</strong> Gratuit sur site</li>
                    <li>• <strong>Entrée :</strong> 10 DH/personne</li>
                    <li>• <strong>Vue :</strong> Atlantique + Méditerranée</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">🗺️ Itinéraire Recommandé</h5>
                  <p className="text-blue-700 text-sm">
                    Prenez la route côtière N1 vers l'ouest. Magnifique vue sur l'océan. 
                    Arrêt photo obligatoire au phare du Cap Spartel !
                  </p>
                  <p className="text-blue-700 text-sm mt-3">
                    Pour immortaliser votre vue mer-méd, pensez à un outil comme l’
                    <a href="https://indzu.com/tools/instagram-post-generator/" target="_blank" rel="noopener noreferrer">
                      <strong>Instagram Post generator</strong>
                    </a>
                    {' '}pour créer un visuel accrocheur avant de partager sur Instagram.
                  </p>
                </div>
              </div>
            </div>

            {/* Soirée */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-full mr-4">
                  <span className="text-purple-600 font-bold">🌆 SOIRÉE</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">19h00 - 22h00</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">🍽️ Corniche & Dîner</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Corniche :</strong> Promenade en bord de mer</li>
                    <li>• <strong>Restaurants :</strong> Vue sur détroit</li>
                    <li>• <strong>Parking :</strong> Payant le long de la corniche</li>
                    <li>• <strong>Ambiance :</strong> Coucher de soleil magique</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-800 mb-2">🍴 Nos Recommandations</h5>
                  <p className="text-purple-700 text-sm">
                    Le Saveur de Poisson, Restaurant Hamadi, ou Café Hafa pour 
                    un thé à la menthe avec vue imprenable sur Gibraltar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Excursions 2-3 Jours */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Navigation className="h-8 w-8 text-blue-600 mr-3" />
            Excursions depuis Tanger (2-3 jours)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Chefchaouen */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                <Camera className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">💙 Chefchaouen - La Ville Bleue</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span><strong>Distance :</strong></span>
                  <span>115 km (2h de route)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Meilleure période :</strong></span>
                  <span>Avril - Octobre</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Durée conseillée :</strong></span>
                  <span>1-2 jours</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-blue-700 text-sm">
                  <strong>Route :</strong> A4 puis N2. Route de montagne magnifique. 
                  Parking gratuit à l'entrée de la médina.
                </p>
              </div>
            </div>

            {/* Asilah */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🎨 Asilah - Perle Atlantique</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span><strong>Distance :</strong></span>
                  <span>46 km (45 min)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Meilleure période :</strong></span>
                  <span>Toute l'année</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Durée conseillée :</strong></span>
                  <span>Demi-journée</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-green-700 text-sm">
                  <strong>Route :</strong> N1 côtière. Vue océan spectaculaire. 
                  Parfait pour un déjeuner de poissons frais.
                </p>
              </div>
            </div>

            {/* Tétouan */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-amber-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                <Star className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🏛️ Tétouan - Patrimoine UNESCO</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span><strong>Distance :</strong></span>
                  <span>60 km (1h15)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Meilleure période :</strong></span>
                  <span>Mars - Novembre</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Durée conseillée :</strong></span>
                  <span>1 jour</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                <p className="text-amber-700 text-sm">
                  <strong>Route :</strong> A4 puis N2. Médina classée UNESCO. 
                  Artisanat exceptionnel et architecture andalouse.
                </p>
              </div>
            </div>

            {/* Larache */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🏖️ Larache & Lixus</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span><strong>Distance :</strong></span>
                  <span>92 km (1h30)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Meilleure période :</strong></span>
                  <span>Avril - Octobre</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Durée conseillée :</strong></span>
                  <span>1 jour</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <p className="text-purple-700 text-sm">
                  <strong>À voir :</strong> Ruines romaines de Lixus, plage, 
                  centre historique. Moins touristique, plus authentique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conseils Pratiques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Car className="h-8 w-8 text-green-600 mr-3" />
            Conseils Pratiques Location Voiture
          </h2>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🛣️ Sur la Route</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Carburant :</strong> Stations fréquentes sur autoroutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Péages :</strong> A4 Tanger-Tétouan (15 DH)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>GPS :</strong> Indispensable pour éviter les détours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Vitesse :</strong> 120 km/h autoroute, 100 km/h route</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🅿️ Parking & Sécurité</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Médinas :</strong> Toujours garer à l'extérieur</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Gardiennage :</strong> 2-5 DH pour surveiller la voiture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Objets :</strong> Ne rien laisser visible dans l'habitacle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Documents :</strong> Toujours dans la voiture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Explorez Tanger en Toute Liberté !
          </h2>
          <p className="text-xl mb-6 text-amber-100">
            Réservez votre voiture avec Nassoh Car et découvrez les merveilles de Tanger et sa région
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/fleet" 
              className="bg-white text-amber-600 px-8 py-4 rounded-xl font-bold hover:bg-amber-50 transition-colors inline-flex items-center justify-center"
            >
              Choisir ma Voiture
            </Link>
            <Link 
              href="/blog/conseils-location-voiture-tanger" 
              className="bg-amber-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-800 transition-colors inline-flex items-center justify-center border-2 border-amber-400"
            >
              Conseils Location
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}