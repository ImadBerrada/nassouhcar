import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Clock, Car, Star, Calendar, Route, Camera, Mountain, Waves } from 'lucide-react'
import StructuredData from '@/components/StructuredData'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

export const metadata: Metadata = {
  title: 'Itinéraires Maroc 2024 : Circuits et Road Trips Complets | Nassoh Car',
  description: 'Découvrez les meilleurs itinéraires au Maroc : circuits 7, 10 et 15 jours, road trips, villes impériales, désert du Sahara, montagnes de l\'Atlas et côte atlantique avec voiture de location. Guide complet avec conseils pratiques.',
  keywords: 'itinéraires Maroc, circuit Maroc, road trip Maroc, voyage Maroc, villes impériales, désert Sahara, côte atlantique, Atlas, location voiture Maroc, guide voyage Maroc, circuits touristiques Maroc',
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
    canonical: 'https://www.nassohcar.com/guides/itineraires-maroc',
    languages: generateHreflangLinks('/guides/itineraires-maroc')
  },
  openGraph: {
    title: 'Itinéraires Maroc 2024 : Circuits et Road Trips Complets | Nassoh Car',
    description: 'Guide complet des meilleurs circuits au Maroc : villes impériales, désert du Sahara, montagnes de l\'Atlas et côte atlantique. Itinéraires détaillés avec location de voiture.',
    url: 'https://www.nassohcar.com/guides/itineraires-maroc',
    siteName: 'Nassoh Car - Location de Voiture au Maroc',
    images: [
      {
        url: 'https://www.nassohcar.com/images/itineraires-maroc-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Itinéraires et circuits au Maroc - Guide complet 2024',
        type: 'image/jpeg',
      }
    ],
    locale: 'fr_FR',
    type: 'article',
    publishedTime: '2024-01-15T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    section: 'Guides de Voyage',
    tags: ['Maroc', 'Itinéraires', 'Road Trip', 'Circuits', 'Voyage', 'Location Voiture'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Itinéraires Maroc 2024 : Circuits et Road Trips Complets',
    description: 'Découvrez les meilleurs circuits au Maroc avec notre guide complet : villes impériales, désert, Atlas et côte atlantique.',
    images: ['https://www.nassohcar.com/images/itineraires-maroc-twitter.jpg'],
    creator: '@nassohcar',
    site: '@nassohcar',
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
  },
}

const itineraries = [
  {
    title: "Circuit Villes Impériales",
    duration: "7 jours",
    distance: "1200 km",
    difficulty: "Facile",
    highlights: ["Rabat", "Meknès", "Fès", "Marrakech"],
    description: "Découverte des quatre villes impériales du Maroc",
    days: [
      {
        day: 1,
        city: "Casablanca - Rabat",
        distance: "90 km - 1h",
        activities: [
          "Arrivée à Casablanca, récupération de la voiture",
          "Visite de la Mosquée Hassan II",
          "Route vers Rabat",
          "Tour de la Kasbah des Oudayas",
          "Nuit à Rabat"
        ]
      },
      {
        day: 2,
        city: "Rabat - Meknès",
        distance: "140 km - 1h30",
        activities: [
          "Visite du Mausolée Mohammed V",
          "Tour Hassan",
          "Route vers Meknès",
          "Découverte de Bab Mansour",
          "Nuit à Meknès"
        ]
      },
      {
        day: 3,
        city: "Meknès - Fès",
        distance: "60 km - 1h",
        activities: [
          "Visite des Écuries Royales",
          "Route vers Fès",
          "Exploration de la Médina de Fès",
          "Quartier des tanneurs",
          "Nuit à Fès"
        ]
      },
      {
        day: 4,
        city: "Fès",
        distance: "0 km",
        activities: [
          "Journée complète à Fès",
          "Université Al Quaraouiyine",
          "Palais Royal",
          "Artisanat local",
          "Nuit à Fès"
        ]
      },
      {
        day: 5,
        city: "Fès - Beni Mellal",
        distance: "280 km - 3h",
        activities: [
          "Route vers le Moyen Atlas",
          "Arrêt à Ifrane (Petite Suisse)",
          "Déjeuner à Beni Mellal",
          "Paysages de montagne",
          "Nuit à Beni Mellal"
        ]
      },
      {
        day: 6,
        city: "Beni Mellal - Marrakech",
        distance: "210 km - 2h30",
        activities: [
          "Route vers Marrakech",
          "Arrivée et installation",
          "Place Jemaa el-Fna",
          "Souks de Marrakech",
          "Nuit à Marrakech"
        ]
      },
      {
        day: 7,
        city: "Marrakech - Casablanca",
        distance: "240 km - 2h30",
        activities: [
          "Jardins de Majorelle",
          "Palais de la Bahia",
          "Route retour vers Casablanca",
          "Restitution de la voiture",
          "Départ"
        ]
      }
    ]
  },
  {
    title: "Grand Tour Désert et Montagnes",
    duration: "10 jours",
    distance: "2500 km",
    difficulty: "Modéré",
    highlights: ["Marrakech", "Atlas", "Sahara", "Gorges du Dadès"],
    description: "Circuit complet combinant montagnes de l'Atlas et désert du Sahara",
    days: [
      {
        day: 1,
        city: "Marrakech",
        distance: "0 km",
        activities: [
          "Arrivée et récupération de la voiture",
          "Découverte de la Médina",
          "Place Jemaa el-Fna",
          "Souks traditionnels",
          "Nuit à Marrakech"
        ]
      },
      {
        day: 2,
        city: "Marrakech - Aït Benhaddou",
        distance: "190 km - 3h",
        activities: [
          "Traversée du Haut Atlas",
          "Col du Tizi n'Tichka (2260m)",
          "Visite de la Kasbah Aït Benhaddou",
          "Coucher de soleil",
          "Nuit à Aït Benhaddou"
        ]
      },
      {
        day: 3,
        city: "Aït Benhaddou - Ouarzazate - Gorges du Dadès",
        distance: "180 km - 3h",
        activities: [
          "Studios de cinéma d'Ouarzazate",
          "Route des Mille Kasbahs",
          "Vallée des Roses",
          "Gorges du Dadès",
          "Nuit dans les gorges"
        ]
      },
      {
        day: 4,
        city: "Gorges du Dadès - Merzouga",
        distance: "280 km - 4h",
        activities: [
          "Gorges du Todra",
          "Oasis de Tinghir",
          "Route vers Merzouga",
          "Arrivée aux dunes de l'Erg Chebbi",
          "Nuit en bivouac dans le désert"
        ]
      },
      {
        day: 5,
        city: "Merzouga - Désert",
        distance: "0 km",
        activities: [
          "Lever de soleil sur les dunes",
          "Excursion en 4x4",
          "Rencontre avec les nomades",
          "Balade à dos de chameau",
          "Nuit sous les étoiles"
        ]
      },
      {
        day: 6,
        city: "Merzouga - Midelt",
        distance: "300 km - 4h30",
        activities: [
          "Route vers le Moyen Atlas",
          "Paysages de transition",
          "Ville de Midelt",
          "Montagnes de l'Atlas",
          "Nuit à Midelt"
        ]
      },
      {
        day: 7,
        city: "Midelt - Fès",
        distance: "200 km - 3h",
        activities: [
          "Route vers Fès",
          "Forêts de cèdres",
          "Arrivée à Fès",
          "Première découverte de la Médina",
          "Nuit à Fès"
        ]
      },
      {
        day: 8,
        city: "Fès",
        distance: "0 km",
        activities: [
          "Journée complète à Fès",
          "Médina et ses artisans",
          "Université Al Quaraouiyine",
          "Quartier des tanneurs",
          "Nuit à Fès"
        ]
      },
      {
        day: 9,
        city: "Fès - Chefchaouen",
        distance: "200 km - 3h30",
        activities: [
          "Route vers les montagnes du Rif",
          "Arrivée à Chefchaouen",
          "Ville bleue",
          "Médina pittoresque",
          "Nuit à Chefchaouen"
        ]
      },
      {
        day: 10,
        city: "Chefchaouen - Casablanca",
        distance: "350 km - 4h30",
        activities: [
          "Dernière promenade dans Chefchaouen",
          "Route retour vers Casablanca",
          "Restitution de la voiture",
          "Départ"
        ]
      }
    ]
  },
  {
    title: "Circuit Côte Atlantique",
    duration: "7 jours",
    distance: "1400 km",
    difficulty: "Facile",
    highlights: ["Casablanca", "Rabat", "Essaouira", "Agadir"],
    description: "Découverte de la côte atlantique marocaine",
    days: [
      {
        day: 1,
        city: "Casablanca",
        distance: "0 km",
        activities: [
          "Arrivée et récupération de la voiture",
          "Mosquée Hassan II",
          "Corniche Ain Diab",
          "Centre-ville Art Déco",
          "Nuit à Casablanca"
        ]
      },
      {
        day: 2,
        city: "Casablanca - Rabat",
        distance: "90 km - 1h",
        activities: [
          "Route vers Rabat",
          "Kasbah des Oudayas",
          "Mausolée Mohammed V",
          "Médina de Rabat",
          "Nuit à Rabat"
        ]
      },
      {
        day: 3,
        city: "Rabat - El Jadida",
        distance: "140 km - 1h30",
        activities: [
          "Route côtière vers El Jadida",
          "Cité portugaise",
          "Citerne portugaise",
          "Plage d'El Jadida",
          "Nuit à El Jadida"
        ]
      },
      {
        day: 4,
        city: "El Jadida - Essaouira",
        distance: "180 km - 2h",
        activities: [
          "Route vers Essaouira",
          "Médina fortifiée",
          "Port de pêche",
          "Artisanat local",
          "Nuit à Essaouira"
        ]
      },
      {
        day: 5,
        city: "Essaouira - Agadir",
        distance: "170 km - 2h",
        activities: [
          "Matinée libre à Essaouira",
          "Route vers Agadir",
          "Plage d'Agadir",
          "Marina moderne",
          "Nuit à Agadir"
        ]
      },
      {
        day: 6,
        city: "Agadir - Marrakech",
        distance: "250 km - 3h",
        activities: [
          "Route vers Marrakech",
          "Paysages de l'Atlas",
          "Arrivée à Marrakech",
          "Place Jemaa el-Fna",
          "Nuit à Marrakech"
        ]
      },
      {
        day: 7,
        city: "Marrakech - Casablanca",
        distance: "240 km - 2h30",
        activities: [
          "Jardins de Majorelle",
          "Derniers achats",
          "Route retour",
          "Restitution de la voiture",
          "Départ"
        ]
      }
    ]
  }
]

const practicalTips = [
  {
    category: "Préparation",
    icon: Calendar,
    tips: [
      "Réservez votre voiture 2-3 semaines à l'avance",
      "Vérifiez la validité de votre permis",
      "Téléchargez des cartes offline",
      "Préparez un budget pour l'essence et les péages"
    ]
  },
  {
    category: "Conduite",
    icon: Car,
    tips: [
      "Respectez les limitations de vitesse",
      "Attention aux animaux sur les routes de montagne",
      "Évitez de conduire la nuit",
      "Gardez toujours de l'eau dans le véhicule"
    ]
  },
  {
    category: "Hébergement",
    icon: Star,
    tips: [
      "Réservez à l'avance en haute saison",
      "Négociez les prix pour les séjours longs",
      "Essayez les riads traditionnels",
      "Vérifiez les avis clients"
    ]
  },
  {
    category: "Budget",
    icon: Clock,
    tips: [
      "Comptez 50-100€/jour pour 2 personnes",
      "L'essence coûte environ 1.30€/litre",
      "Les péages d'autoroute sont peu chers",
      "Négociez dans les souks"
    ]
  }
]

const bestTimes = [
  {
    season: "Printemps (Mars-Mai)",
    weather: "Températures idéales 20-25°C",
    pros: ["Climat parfait", "Paysages verts", "Moins de touristes"],
    cons: ["Prix légèrement plus élevés"],
    recommendation: "Excellent"
  },
  {
    season: "Automne (Sept-Nov)",
    weather: "Températures agréables 18-28°C",
    pros: ["Temps stable", "Mer encore chaude", "Tarifs modérés"],
    cons: ["Quelques pluies possibles"],
    recommendation: "Très bon"
  },
  {
    season: "Hiver (Déc-Fév)",
    weather: "Doux sur la côte 15-20°C",
    pros: ["Tarifs bas", "Peu de foule", "Neige dans l'Atlas"],
    cons: ["Froid en montagne", "Jours courts"],
    recommendation: "Bon"
  },
  {
    season: "Été (Juin-Août)",
    weather: "Chaud à très chaud 25-40°C",
    pros: ["Longues journées", "Mer chaude"],
    cons: ["Chaleur intense", "Foule touristique", "Prix élevés"],
    recommendation: "Difficile"
  }
]

export default function ItinerairesMarocPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.nassohcar.com/guides/itineraires-maroc#article",
        "isPartOf": {
          "@id": "https://www.nassohcar.com/guides/itineraires-maroc"
        },
        "author": {
          "@type": "Organization",
          "name": "Nassoh Car",
          "@id": "https://www.nassohcar.com/#organization"
        },
        "headline": "Itinéraires Maroc 2024 : Circuits et Road Trips Complets",
        "description": "Guide complet des meilleurs circuits au Maroc : villes impériales, désert du Sahara, montagnes de l'Atlas et côte atlantique. Itinéraires détaillés avec location de voiture.",
        "datePublished": "2024-01-15T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.nassohcar.com/guides/itineraires-maroc"
        },
        "publisher": {
          "@id": "https://www.nassohcar.com/#organization"
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://www.nassohcar.com/images/itineraires-maroc-og.jpg",
          "width": 1200,
          "height": 630
        },
        "articleSection": "Guides de Voyage",
        "inLanguage": "fr-FR",
        "keywords": ["itinéraires Maroc", "circuit Maroc", "road trip Maroc", "voyage Maroc", "villes impériales", "désert Sahara", "côte atlantique", "Atlas", "location voiture Maroc"]
      },
      {
        "@type": "TravelGuide",
        "@id": "https://www.nassohcar.com/guides/itineraires-maroc#travelguide",
        "name": "Guide des Itinéraires au Maroc 2024",
        "description": "Guide complet pour planifier votre voyage au Maroc avec des itinéraires détaillés de 7 à 15 jours",
        "about": {
          "@type": "Place",
          "name": "Maroc",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 31.7917,
            "longitude": -7.0926
          }
        },
        "author": {
          "@id": "https://www.nassohcar.com/#organization"
        },
        "datePublished": "2024-01-15T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "inLanguage": "fr-FR"
      },
      {
        "@type": "Organization",
        "@id": "https://www.nassohcar.com/#organization",
        "name": "Nassoh Car",
        "url": "https://www.nassohcar.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.nassohcar.com/logo.png",
          "width": 300,
          "height": 100
        },
        "description": "Location de voiture au Maroc - Service professionnel et fiable",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "MA",
          "addressLocality": "Tanger"
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
        "@id": "https://www.nassohcar.com/guides/itineraires-maroc",
        "url": "https://www.nassohcar.com/guides/itineraires-maroc",
        "name": "Itinéraires Maroc 2024 : Circuits et Road Trips Complets | Nassoh Car",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.nassohcar.com/#website"
        },
        "datePublished": "2024-01-15T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Guide complet des meilleurs circuits au Maroc : villes impériales, désert du Sahara, montagnes de l'Atlas et côte atlantique. Itinéraires détaillés avec location de voiture.",
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
              "name": "Itinéraires Maroc",
              "item": "https://www.nassohcar.com/guides/itineraires-maroc"
            }
          ]
        },
        "mainEntity": {
          "@id": "https://www.nassohcar.com/guides/itineraires-maroc#article"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", ".highlight"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.nassohcar.com/#website",
        "url": "https://www.nassohcar.com",
        "name": "Nassoh Car - Location de Voiture au Maroc",
        "description": "Service de location de voiture au Maroc avec les meilleurs tarifs et un service client exceptionnel",
        "publisher": {
          "@id": "https://www.nassohcar.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.nassohcar.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "fr-FR"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <StructuredData type="@graph" data={structuredData["@graph"]} />
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-gray-200" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 py-4">
            <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/guides" className="text-gray-500 hover:text-gray-700 transition-colors">
              Guides
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Itinéraires Maroc</span>
          </div>
        </div>
      </nav>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-900 via-red-800 to-pink-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link href="/guides" className="inline-flex items-center text-orange-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux guides
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Itinéraires Maroc
            </h1>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Découvrez les meilleurs circuits et road trips au Maroc : villes impériales, 
              désert du Sahara, montagnes de l'Atlas et côte atlantique avec votre voiture de location.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-orange-800/50 px-3 py-1 rounded-full">🏛️ Villes Impériales</span>
              <span className="bg-orange-800/50 px-3 py-1 rounded-full">🏜️ Désert</span>
              <span className="bg-orange-800/50 px-3 py-1 rounded-full">🏔️ Montagnes</span>
              <span className="bg-orange-800/50 px-3 py-1 rounded-full">⏱️ Lecture 15 min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Itineraries Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Circuits Recommandés</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {itineraries.map((itinerary, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{itinerary.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {itinerary.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Route className="w-4 h-4 mr-2" />
                      {itinerary.distance}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 mr-2" />
                      {itinerary.difficulty}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4">{itinerary.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {itinerary.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Itineraries */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Itinéraires Détaillés</h2>
            
            <div className="space-y-12">
              {itineraries.map((itinerary, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">{itinerary.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {itinerary.duration}
                      </span>
                      <span className="flex items-center">
                        <Route className="w-4 h-4 mr-1" />
                        {itinerary.distance}
                      </span>
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {itinerary.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-6">
                      {itinerary.days.map((day, dayIndex) => (
                        <div key={dayIndex} className="border-l-4 border-orange-200 pl-6">
                          <div className="flex items-center mb-3">
                            <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3">
                              {day.day}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">{day.city}</h4>
                              <p className="text-sm text-gray-600">{day.distance}</p>
                            </div>
                          </div>
                          
                          <ul className="space-y-2">
                            {day.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Best Times to Visit */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Quand Partir ?</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {bestTimes.map((time, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{time.season}</h3>
                      <p className="text-gray-600 text-sm">{time.weather}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      time.recommendation === 'Excellent' ? 'bg-green-100 text-green-800' :
                      time.recommendation === 'Très bon' ? 'bg-blue-100 text-blue-800' :
                      time.recommendation === 'Bon' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {time.recommendation}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">✅ Avantages</h4>
                      <ul className="space-y-1">
                        {time.pros.map((pro, idx) => (
                          <li key={idx} className="text-gray-700 text-sm">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">❌ Inconvénients</h4>
                      <ul className="space-y-1">
                        {time.cons.map((con, idx) => (
                          <li key={idx} className="text-gray-700 text-sm">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Practical Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Conseils Pratiques</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {practicalTips.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <section.icon className="w-6 h-6 text-orange-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900">{section.category}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Packing Checklist */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Check-list Voyage</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">📋 Documents</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Passeport valide</li>
                    <li>• Permis de conduire</li>
                    <li>• Assurance voyage</li>
                    <li>• Réservations hôtels</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">🎒 Équipement</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Vêtements adaptés</li>
                    <li>• Chaussures confortables</li>
                    <li>• Crème solaire</li>
                    <li>• Appareil photo</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">🚗 Voiture</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• GPS ou cartes</li>
                    <li>• Chargeur téléphone</li>
                    <li>• Trousse de secours</li>
                    <li>• Bouteilles d'eau</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Prêt pour l'Aventure ?</h2>
              <p className="text-orange-100 mb-6">
                Réservez votre voiture de location et partez découvrir les merveilles du Maroc.
              </p>
              <Link 
                href="/" 
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Réserver Maintenant
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}