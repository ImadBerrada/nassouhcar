import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Clock, Star, Camera, Utensils, Car, Compass, Info } from 'lucide-react'
import StructuredData from '@/components/StructuredData'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

export const metadata: Metadata = {
  title: 'Guide Complet de Tanger 2024 : Que Voir et Faire | Nassoh Car',
  description: 'Découvrez Tanger avec notre guide complet 2024 : attractions incontournables (Médina, Kasbah, Cap Spartel), meilleurs restaurants, hébergements recommandés, conseils pratiques et itinéraires détaillés avec voiture de location. Tout pour réussir votre séjour à Tanger.',
  keywords: 'guide Tanger, que faire Tanger, attractions Tanger, restaurants Tanger, hébergement Tanger, location voiture Tanger, visite Tanger, médina Tanger, kasbah Tanger, Cap Spartel, grottes Hercule, itinéraire Tanger, conseils voyage Tanger, tourisme Tanger 2024',
  authors: [{ name: 'Nassoh Car' }],
  creator: 'Nassoh Car',
  publisher: 'Nassoh Car',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.nassohcar.com'),
  alternates: {
    canonical: 'https://www.nassohcar.com/guides/guide-tanger-complet',
    languages: generateHreflangLinks('/guides/guide-tanger-complet')
  },
  openGraph: {
    title: 'Guide Complet de Tanger 2024 : Attractions, Restaurants et Conseils Pratiques',
    description: 'Guide complet 2024 pour visiter Tanger : attractions incontournables, meilleurs restaurants, hébergements, itinéraires détaillés et conseils pratiques. Découvrez la perle du détroit avec votre voiture de location.',
    url: 'https://www.nassohcar.com/guides/guide-tanger-complet',
    siteName: 'Nassoh Car - Location de Voiture au Maroc',
    images: [
      {
        url: 'https://www.nassohcar.com/images/guides/guide-tanger-complet.jpg',
        width: 1200,
        height: 630,
        alt: 'Guide complet Tanger 2024 - Attractions et conseils de visite'
      }
    ],
    locale: 'fr_FR',
    type: 'article',
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    section: 'Guides de Voyage',
    tags: ['Tanger', 'Guide Voyage', 'Attractions Maroc', 'Tourisme Tanger', 'Location Voiture']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide Complet de Tanger 2024 : Que Voir et Faire',
    description: 'Guide complet pour visiter Tanger : attractions, restaurants, hébergements et conseils pratiques.',
    images: ['https://www.nassohcar.com/images/guides/guide-tanger-complet.jpg'],
    creator: '@nassohcar'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  }
}

const attractions = [
  {
    name: "Médina de Tanger",
    description: "Labyrinthe de ruelles étroites, souks colorés et architecture traditionnelle",
    duration: "3-4 heures",
    rating: 4.8,
    highlights: ["Souk Grand", "Place du Petit Socco", "Mosquée Sidi Bou Abib"],
    tips: "Visitez tôt le matin pour éviter la foule"
  },
  {
    name: "Kasbah de Tanger",
    description: "Ancienne citadelle avec vue panoramique sur le détroit de Gibraltar",
    duration: "2-3 heures",
    rating: 4.7,
    highlights: ["Musée de la Kasbah", "Jardins de la Mendoubia", "Café Hafa"],
    tips: "Parfait pour le coucher du soleil"
  },
  {
    name: "Cap Spartel",
    description: "Point le plus au nord-ouest de l'Afrique avec phare historique",
    duration: "1-2 heures",
    rating: 4.6,
    highlights: ["Phare du Cap Spartel", "Vue sur l'Atlantique", "Grottes d'Hercule"],
    tips: "Accessible uniquement en voiture"
  },
  {
    name: "Grottes d'Hercule",
    description: "Grottes naturelles légendaires avec ouverture sur l'océan",
    duration: "1 heure",
    rating: 4.5,
    highlights: ["Formation rocheuse unique", "Légende d'Hercule", "Plage adjacente"],
    tips: "Combinez avec la visite du Cap Spartel"
  },
  {
    name: "Plage de Tanger",
    description: "Longue plage de sable fin le long de la baie de Tanger",
    duration: "Demi-journée",
    rating: 4.3,
    highlights: ["Promenade en bord de mer", "Sports nautiques", "Cafés de plage"],
    tips: "Idéale pour la détente après les visites"
  }
]

const restaurants = [
  {
    name: "El Morocco Club",
    cuisine: "Marocaine raffinée",
    price: "€€€",
    specialty: "Tajine aux pruneaux et amandes",
    location: "Kasbah"
  },
  {
    name: "Restaurant Saveur de Poisson",
    cuisine: "Fruits de mer",
    price: "€€",
    specialty: "Poisson grillé du jour",
    location: "Port de pêche"
  },
  {
    name: "Café Central",
    cuisine: "Internationale",
    price: "€€",
    specialty: "Pastilla au poisson",
    location: "Place de France"
  },
  {
    name: "Restaurant Populaire",
    cuisine: "Locale authentique",
    price: "€",
    specialty: "Couscous du vendredi",
    location: "Médina"
  }
]

const itineraries = [
  {
    day: "Jour 1",
    title: "Découverte de la Médina",
    activities: [
      "Matin : Exploration de la Médina et des souks",
      "Déjeuner : Restaurant dans le Petit Socco",
      "Après-midi : Visite de la Kasbah et du Musée",
      "Soirée : Coucher de soleil au Café Hafa"
    ]
  },
  {
    day: "Jour 2",
    title: "Cap Spartel et Grottes",
    activities: [
      "Matin : Route vers le Cap Spartel (30 min en voiture)",
      "Visite du phare et des environs",
      "Déjeuner : Restaurant avec vue sur l'océan",
      "Après-midi : Exploration des Grottes d'Hercule",
      "Retour : Détente sur la plage de Tanger"
    ]
  },
  {
    day: "Jour 3",
    title: "Culture et Détente",
    activities: [
      "Matin : Musée de la Légation Américaine",
      "Promenade dans la Ville Nouvelle",
      "Déjeuner : Cuisine internationale",
      "Après-midi : Shopping et hammam traditionnel",
      "Soirée : Dîner dans un restaurant de fruits de mer"
    ]
  }
]

const practicalTips = [
  {
    category: "Transport",
    icon: Car,
    tips: [
      "Location de voiture recommandée pour Cap Spartel",
      "Parking payant dans le centre-ville (5-10 DH/heure)",
      "Taxis petits disponibles pour trajets courts",
      "Évitez de conduire dans la médina (piétonne)",
      "Service de location depuis la France disponible"
    ]
  },
  {
    category: "Sécurité",
    icon: Info,
    tips: [
      "Gardez vos objets de valeur en sécurité",
      "Négociez les prix dans les souks",
      "Méfiez-vous des faux guides",
      "Respectez les coutumes locales"
    ]
  },
  {
    category: "Meilleure Période",
    icon: Clock,
    tips: [
      "Printemps (mars-mai) : temps idéal",
      "Automne (septembre-novembre) : températures agréables",
      "Été : chaud mais animé",
      "Hiver : doux mais parfois pluvieux"
    ]
  }
]

export default function GuideTangerCompletPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <StructuredData type="@graph" data={[
        {
          "@type": "Article",
          "@id": "https://www.nassohcar.com/guides/guide-tanger-complet#article",
          "headline": "Guide Complet de Tanger 2024 : Que Voir et Faire",
          "description": "Guide complet 2024 pour visiter Tanger : attractions incontournables (Médina, Kasbah, Cap Spartel), meilleurs restaurants, hébergements recommandés, conseils pratiques et itinéraires détaillés avec voiture de location.",
          "image": "https://www.nassohcar.com/images/guides/guide-tanger-complet.jpg",
          "author": {
            "@type": "Organization",
            "@id": "https://www.nassohcar.com#organization"
          },
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.nassohcar.com#organization"
          },
          "datePublished": "2024-01-01T00:00:00.000Z",
          "dateModified": new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.nassohcar.com/guides/guide-tanger-complet"
          },
          "articleSection": "Guides de Voyage",
          "keywords": "guide Tanger, attractions Tanger, restaurants Tanger, médina Tanger, kasbah Tanger, Cap Spartel, grottes Hercule, itinéraire Tanger, conseils voyage Tanger, tourisme Tanger 2024",
          "wordCount": 2500,
          "inLanguage": "fr-FR",
          "about": [
            {
              "@type": "Place",
              "name": "Tanger",
              "description": "Ville du nord du Maroc située sur le détroit de Gibraltar"
            }
          ]
        },
        {
          "@type": "TravelGuide",
          "@id": "https://www.nassohcar.com/guides/guide-tanger-complet#travelguide",
          "name": "Guide Complet de Tanger 2024",
          "description": "Guide complet pour visiter Tanger avec attractions, restaurants, hébergements et conseils pratiques",
          "url": "https://www.nassohcar.com/guides/guide-tanger-complet",
          "author": {
            "@type": "Organization",
            "@id": "https://www.nassohcar.com#organization"
          },
          "datePublished": "2024-01-01T00:00:00.000Z",
          "dateModified": new Date().toISOString(),
          "inLanguage": "fr-FR",
          "about": {
            "@type": "Place",
            "name": "Tanger, Maroc",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 35.7595,
              "longitude": -5.8340
            }
          },
          "touristType": ["Cultural Tourist", "Adventure Tourist", "Family Tourist"],
          "itinerary": [
            {
              "@type": "TouristTrip",
              "name": "Jour 1 - Découverte de la Médina",
              "description": "Exploration de la Médina, souks, Kasbah et coucher de soleil au Café Hafa"
            },
            {
              "@type": "TouristTrip", 
              "name": "Jour 2 - Cap Spartel et Grottes",
              "description": "Visite du Cap Spartel, phare, Grottes d'Hercule et plage de Tanger"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://www.nassohcar.com#organization",
          "name": "Nassoh Car",
          "url": "https://www.nassohcar.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.nassohcar.com/logo.png",
            "width": 300,
            "height": 100
          },
          "description": "Location de voiture au Maroc - Service professionnel et véhicules de qualité",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "MA",
            "addressLocality": "Maroc"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+212-XXX-XXXXXX",
            "contactType": "customer service",
            "availableLanguage": ["French", "Arabic", "English"]
          },
          "sameAs": [
            "https://www.facebook.com/nassohcar",
            "https://www.instagram.com/nassohcar"
          ]
        },
        {
          "@type": "WebPage",
          "@id": "https://www.nassohcar.com/guides/guide-tanger-complet",
          "url": "https://www.nassohcar.com/guides/guide-tanger-complet",
          "name": "Guide Complet de Tanger 2024 : Que Voir et Faire | Nassoh Car",
          "description": "Guide complet 2024 pour visiter Tanger : attractions incontournables, meilleurs restaurants, hébergements, itinéraires détaillés et conseils pratiques.",
          "inLanguage": "fr-FR",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://www.nassohcar.com#website"
          },
          "about": {
            "@type": "Place",
            "name": "Tanger"
          },
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://www.nassohcar.com/images/guides/guide-tanger-complet.jpg"
          },
          "datePublished": "2024-01-01T00:00:00.000Z",
          "dateModified": new Date().toISOString(),
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://www.nassohcar.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Guides",
                "item": "https://www.nassohcar.com/guides"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Guide Complet de Tanger",
                "item": "https://www.nassohcar.com/guides/guide-tanger-complet"
              }
            ]
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://www.nassohcar.com#website",
          "url": "https://www.nassohcar.com",
          "name": "Nassoh Car - Location de Voiture au Maroc",
          "description": "Location de voiture au Maroc avec Nassoh Car. Véhicules de qualité, service professionnel et prix compétitifs pour tous vos déplacements.",
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.nassohcar.com#organization"
          },
          "inLanguage": "fr-FR",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.nassohcar.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      ]} />
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-gray-200" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                Accueil
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/guides" className="text-gray-500 hover:text-gray-700 transition-colors">
                Guides
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">Guide Complet de Tanger</li>
          </ol>
        </div>
      </nav>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link href="/guides" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux guides
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Guide Complet de Tanger
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Découvrez la perle du nord du Maroc : attractions incontournables, restaurants authentiques, 
              hébergements de qualité et conseils pratiques pour un séjour inoubliable.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">🏛️ Attractions</span>
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">🍽️ Restaurants</span>
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">🗺️ Itinéraires</span>
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">⏱️ Lecture 12 min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Quick Overview */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tanger en Bref</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Localisation</h3>
                  <p className="text-gray-600">Nord du Maroc, détroit de Gibraltar</p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Durée Recommandée</h3>
                  <p className="text-gray-600">2-3 jours minimum</p>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Points Forts</h3>
                  <p className="text-gray-600">Médina, Kasbah, Cap Spartel</p>
                </div>
              </div>
            </div>
          </section>

          {/* Top Attractions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Attractions Incontournables</h2>
            
            <div className="space-y-6">
              {attractions.map((attraction, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{attraction.name}</h3>
                    <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-semibold text-yellow-700">{attraction.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{attraction.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Points Forts</h4>
                      <ul className="space-y-1">
                        {attraction.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-gray-600 text-sm">• {highlight}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <Clock className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-gray-700">Durée : {attraction.duration}</span>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-blue-800 text-sm font-medium">💡 {attraction.tips}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Restaurants */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Où Manger à Tanger</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {restaurants.map((restaurant, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                    <span className="text-green-600 font-semibold">{restaurant.price}</span>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Utensils className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-700">{restaurant.cuisine}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-700">Spécialité : {restaurant.specialty}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-700">{restaurant.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Itineraries */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Itinéraires Suggérés</h2>
            
            <div className="space-y-6">
              {itineraries.map((itinerary, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{itinerary.day}</h3>
                      <p className="text-purple-600 font-semibold">{itinerary.title}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {itinerary.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <Compass className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Practical Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Conseils Pratiques</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {practicalTips.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <section.icon className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900">{section.category}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {section.tips.map((tip, idx) => (
                      <li key={idx} className="text-gray-700 text-sm">• {tip}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          {/* Related Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Services Connexes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Location depuis la France</h3>
                <p className="text-gray-600 mb-4">
                  Organisez votre voyage au Maroc depuis la France avec notre service de location de voiture.
                </p>
                <Link 
                  href="/location-voiture-france" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  En savoir plus <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Link>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Autres Destinations</h3>
                <p className="text-gray-600 mb-4">
                  Découvrez nos guides pour d'autres destinations au Maroc et nos services internationaux.
                </p>
                <Link 
                  href="/guides" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Voir tous les guides <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Explorez Tanger en Toute Liberté</h2>
              <p className="text-blue-100 mb-6">
                Louez une voiture pour découvrir Tanger et ses environs à votre rythme.
              </p>
              <Link 
                href="/location-voiture-tanger" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Louer une Voiture à Tanger
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}