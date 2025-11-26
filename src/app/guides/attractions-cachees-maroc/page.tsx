import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Eye, Mountain, Waves, TreePine, Camera, Star, Navigation } from 'lucide-react'
import StructuredData from '@/components/StructuredData'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

export const metadata: Metadata = {
  title: 'Attractions Cachées du Maroc 2024 : Trésors Secrets à Découvrir | Nassoh Car',
  description: 'Découvrez les attractions cachées et lieux secrets du Maroc : villages berbères authentiques, oasis perdues, plages sauvages, cascades d\'Akchour, grottes de Friouato et sites méconnus hors des sentiers battus. Guide complet avec conseils d\'accès et périodes optimales.',
  keywords: 'attractions cachées Maroc, lieux secrets Maroc, villages berbères, oasis Maroc, plages sauvages Maroc, tourisme alternatif Maroc, sites méconnus, cascades Akchour, grottes Friouato, lac Bin el Ouidane, plage Legzira, oasis Fint, villages Rif, Atlas secret, trésors cachés Maroc 2024',
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
    canonical: 'https://www.nassohcar.com/guides/attractions-cachees-maroc',
    languages: generateHreflangLinks('/guides/attractions-cachees-maroc')
  },
  openGraph: {
    title: 'Attractions Cachées du Maroc 2024 : Trésors Secrets et Lieux Méconnus',
    description: 'Explorez les trésors cachés du Maroc : villages berbères authentiques, oasis secrètes, plages sauvages, cascades spectaculaires et paysages préservés. Guide complet des attractions méconnues avec votre voiture de location.',
    url: 'https://www.nassohcar.com/guides/attractions-cachees-maroc',
    siteName: 'Nassoh Car - Location de Voiture au Maroc',
    images: [
      {
        url: 'https://www.nassohcar.com/images/guides/attractions-cachees-maroc.jpg',
        width: 1200,
        height: 630,
        alt: 'Attractions cachées du Maroc 2024 - Trésors secrets et lieux méconnus'
      }
    ],
    locale: 'fr_FR',
    type: 'article',
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    section: 'Guides de Voyage',
    tags: ['Attractions Cachées', 'Maroc Secret', 'Tourisme Alternatif', 'Villages Berbères', 'Oasis Maroc', 'Location Voiture']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Attractions Cachées du Maroc 2024 : Trésors Secrets à Découvrir',
    description: 'Explorez les trésors cachés du Maroc : villages berbères, oasis secrètes, plages sauvages et sites méconnus.',
    images: ['https://www.nassohcar.com/images/guides/attractions-cachees-maroc.jpg'],
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

const hiddenGems = [
  {
    name: "Akchour et les Cascades du Pont de Dieu",
    region: "Région de Chefchaouen",
    category: "Nature",
    icon: Waves,
    description: "Cascades spectaculaires et formations rocheuses naturelles dans les montagnes du Rif",
    highlights: [
      "Pont naturel de 25 mètres de haut",
      "Piscines naturelles d'eau turquoise",
      "Randonnée de 3h aller-retour",
      "Vue panoramique sur les montagnes"
    ],
    difficulty: "Modéré",
    access: "4x4 recommandé + marche 1h30",
    bestTime: "Avril à Octobre",
    tips: "Apportez des chaussures de randonnée et un maillot de bain"
  },
  {
    name: "Village d'Imlil et Vallée de l'Ourika Secrète",
    region: "Haut Atlas",
    category: "Montagne",
    icon: Mountain,
    description: "Villages berbères authentiques cachés dans les vallées de l'Atlas",
    highlights: [
      "Architecture berbère traditionnelle",
      "Terrasses agricoles en escalier",
      "Hospitalité locale exceptionnelle",
      "Point de départ vers le Toubkal"
    ],
    difficulty: "Facile",
    access: "Route de montagne + marche courte",
    bestTime: "Mars à Novembre",
    tips: "Respectez les coutumes locales et goûtez le thé berbère"
  },
  {
    name: "Plage de Legzira",
    region: "Région de Sidi Ifni",
    category: "Côte",
    icon: Waves,
    description: "Plage sauvage avec arches naturelles spectaculaires sur l'Atlantique",
    highlights: [
      "Arches de grès rouge uniques",
      "Plage de 8 km peu fréquentée",
      "Couchers de soleil magiques",
      "Surf et sports nautiques"
    ],
    difficulty: "Facile",
    access: "Route côtière + piste 15 min",
    bestTime: "Toute l'année",
    tips: "Attention aux marées et apportez de l'eau"
  },
  {
    name: "Oasis de Fint",
    region: "Région d'Ouarzazate",
    category: "Désert",
    icon: TreePine,
    description: "Oasis verdoyante cachée dans un décor de canyon rouge",
    highlights: [
      "Palmeraie luxuriante",
      "Kasbah en pisé authentique",
      "Décors de films célèbres",
      "Silence et sérénité absolus"
    ],
    difficulty: "Facile",
    access: "Piste 4x4 de 20 min",
    bestTime: "Octobre à Avril",
    tips: "Visitez tôt le matin pour éviter la chaleur"
  },
  {
    name: "Lac de Bin el Ouidane",
    region: "Moyen Atlas",
    category: "Nature",
    icon: Waves,
    description: "Lac artificiel aux eaux turquoise entouré de montagnes",
    highlights: [
      "Eaux cristallines pour la baignade",
      "Sports nautiques variés",
      "Villages berbères environnants",
      "Pêche à la truite"
    ],
    difficulty: "Facile",
    access: "Route goudronnée",
    bestTime: "Mai à Septembre",
    tips: "Parfait pour un pique-nique en famille"
  },
  {
    name: "Grottes de Friouato",
    region: "Région de Taza",
    category: "Spéléologie",
    icon: Mountain,
    description: "Plus grand réseau de grottes du Maroc avec formations calcaires",
    highlights: [
      "Galeries souterraines de 272m",
      "Stalactites et stalagmites",
      "Température constante de 12°C",
      "Éclairage naturel unique"
    ],
    difficulty: "Modéré",
    access: "Route + descente guidée",
    bestTime: "Toute l'année",
    tips: "Prévoyez des vêtements chauds et une lampe"
  }
]

const regions = [
  {
    name: "Nord du Maroc",
    attractions: ["Akchour", "Villages du Rif", "Plages sauvages"],
    description: "Montagnes verdoyantes et côtes préservées"
  },
  {
    name: "Atlas Central",
    attractions: ["Villages berbères", "Lacs de montagne", "Cascades"],
    description: "Sommets enneigés et vallées secrètes"
  },
  {
    name: "Sud Atlantique",
    attractions: ["Plages d'arches", "Villages de pêcheurs", "Falaises"],
    description: "Côte sauvage et authentique"
  },
  {
    name: "Pré-Sahara",
    attractions: ["Oasis cachées", "Kasbahs isolées", "Canyons"],
    description: "Portes du désert et paysages lunaires"
  }
]

const travelTips = [
  {
    title: "Préparation du Voyage",
    tips: [
      "Louez un 4x4 pour accéder aux sites reculés",
      "Téléchargez des cartes offline",
      "Prévoyez de l'eau et des provisions",
      "Informez-vous sur les conditions météo"
    ]
  },
  {
    title: "Respect de l'Environnement",
    tips: [
      "Ne laissez aucune trace de votre passage",
      "Respectez la faune et la flore locales",
      "Utilisez les sentiers balisés",
      "Évitez de cueillir les plantes"
    ]
  },
  {
    title: "Interaction Locale",
    tips: [
      "Apprenez quelques mots d'arabe ou berbère",
      "Respectez les coutumes et traditions",
      "Demandez permission avant de photographier",
      "Soutenez l'économie locale"
    ]
  },
  {
    title: "Sécurité",
    tips: [
      "Voyagez en groupe dans les zones isolées",
      "Informez quelqu'un de votre itinéraire",
      "Gardez votre téléphone chargé",
      "Emportez une trousse de premiers secours"
    ]
  }
]

export default function AttractionsCacheesMarocPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <StructuredData type="@graph" data={[
        {
          "@type": "Article",
          "@id": "https://www.nassohcar.com/guides/attractions-cachees-maroc#article",
          "headline": "Attractions Cachées du Maroc 2024 : Trésors Secrets à Découvrir",
          "description": "Découvrez les attractions cachées et lieux secrets du Maroc : villages berbères authentiques, oasis perdues, plages sauvages, cascades d'Akchour, grottes de Friouato et sites méconnus hors des sentiers battus.",
          "image": "https://www.nassohcar.com/images/guides/attractions-cachees-maroc.jpg",
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
            "@id": "https://www.nassohcar.com/guides/attractions-cachees-maroc"
          },
          "articleSection": "Guides de Voyage",
          "keywords": "attractions cachées Maroc, lieux secrets Maroc, villages berbères, oasis Maroc, plages sauvages Maroc, tourisme alternatif Maroc, sites méconnus, cascades Akchour, grottes Friouato",
          "wordCount": 2800,
          "inLanguage": "fr-FR",
          "about": [
            {
              "@type": "Place",
              "name": "Maroc",
              "description": "Royaume du Maroc avec ses attractions cachées et trésors secrets"
            }
          ]
        },
        {
          "@type": "TravelGuide",
          "@id": "https://www.nassohcar.com/guides/attractions-cachees-maroc#travelguide",
          "name": "Guide des Attractions Cachées du Maroc 2024",
          "description": "Guide complet des attractions cachées et lieux secrets du Maroc hors des sentiers battus",
          "url": "https://www.nassohcar.com/guides/attractions-cachees-maroc",
          "author": {
            "@type": "Organization",
            "@id": "https://www.nassohcar.com#organization"
          },
          "datePublished": "2024-01-01T00:00:00.000Z",
          "dateModified": new Date().toISOString(),
          "inLanguage": "fr-FR",
          "about": {
            "@type": "Place",
            "name": "Maroc",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 31.7917,
              "longitude": -7.0926
            }
          },
          "touristType": ["Adventure Tourist", "Cultural Tourist", "Nature Tourist", "Off-the-beaten-path Tourist"],
          "itinerary": [
            {
              "@type": "TouristAttraction",
              "name": "Cascades d'Akchour",
              "description": "Cascades spectaculaires et formations rocheuses naturelles dans les montagnes du Rif"
            },
            {
              "@type": "TouristAttraction",
              "name": "Villages berbères de l'Atlas",
              "description": "Villages authentiques cachés dans les vallées de l'Atlas"
            },
            {
              "@type": "TouristAttraction",
              "name": "Plage de Legzira",
              "description": "Plage sauvage avec arches naturelles spectaculaires"
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
          "@id": "https://www.nassohcar.com/guides/attractions-cachees-maroc",
          "url": "https://www.nassohcar.com/guides/attractions-cachees-maroc",
          "name": "Attractions Cachées du Maroc 2024 : Trésors Secrets à Découvrir | Nassoh Car",
          "description": "Découvrez les attractions cachées et lieux secrets du Maroc : villages berbères authentiques, oasis perdues, plages sauvages et sites méconnus hors des sentiers battus.",
          "inLanguage": "fr-FR",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://www.nassohcar.com#website"
          },
          "about": {
            "@type": "Place",
            "name": "Maroc"
          },
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://www.nassohcar.com/images/guides/attractions-cachees-maroc.jpg"
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
                "name": "Attractions Cachées du Maroc",
                "item": "https://www.nassohcar.com/guides/attractions-cachees-maroc"
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
            <li className="text-gray-900 font-medium">Attractions Cachées du Maroc</li>
          </ol>
        </div>
      </nav>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-800 to-green-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link href="/guides" className="inline-flex items-center text-emerald-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux guides
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Attractions Cachées du Maroc
            </h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Partez à la découverte des trésors secrets du Maroc : villages berbères authentiques, 
              oasis perdues, plages sauvages et sites naturels préservés loin des foules touristiques.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-emerald-800/50 px-3 py-1 rounded-full">🏔️ Montagnes</span>
              <span className="bg-emerald-800/50 px-3 py-1 rounded-full">🏖️ Plages Sauvages</span>
              <span className="bg-emerald-800/50 px-3 py-1 rounded-full">🌴 Oasis</span>
              <span className="bg-emerald-800/50 px-3 py-1 rounded-full">⏱️ Lecture 15 min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Pourquoi Explorer les Attractions Cachées ?</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Authenticité Préservée</h3>
                  <p className="text-gray-700 mb-4">
                    Découvrez le Maroc authentique, loin du tourisme de masse, 
                    où les traditions et la culture locale restent intactes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Expériences Uniques</h3>
                  <p className="text-gray-700 mb-4">
                    Vivez des moments exceptionnels dans des paysages préservés 
                    et créez des souvenirs inoubliables.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Hidden Gems */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Trésors Cachés à Découvrir</h2>
            
            <div className="space-y-8">
              {hiddenGems.map((gem, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <gem.icon className="w-8 h-8 text-emerald-600 mr-3" />
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{gem.name}</h3>
                          <div className="flex items-center mt-1">
                            <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                            <span className="text-gray-600">{gem.region}</span>
                          </div>
                        </div>
                      </div>
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                        {gem.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{gem.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Points Forts</h4>
                        <ul className="space-y-2">
                          {gem.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-900 mb-2">Informations Pratiques</h4>
                          <div className="space-y-2 text-sm">
                            <div><strong>Difficulté :</strong> {gem.difficulty}</div>
                            <div><strong>Accès :</strong> {gem.access}</div>
                            <div><strong>Meilleure période :</strong> {gem.bestTime}</div>
                          </div>
                        </div>
                        
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="font-semibold text-green-900 mb-2">💡 Conseil</h4>
                          <p className="text-green-800 text-sm">{gem.tips}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Regions Map */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Attractions par Région</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {regions.map((region, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{region.name}</h3>
                  <p className="text-gray-700 mb-4">{region.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Attractions principales :</h4>
                    <ul className="space-y-1">
                      {region.attractions.map((attraction, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 text-sm">
                          <Navigation className="w-3 h-3 text-indigo-600 mr-2" />
                          {attraction}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Travel Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Conseils pour l'Exploration</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {travelTips.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{section.title}</h3>
                  
                  <ul className="space-y-3">
                    {section.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Equipment Checklist */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Équipement Recommandé</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">🚗 Transport</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Véhicule 4x4 ou SUV</li>
                    <li>• GPS et cartes offline</li>
                    <li>• Pneu de secours</li>
                    <li>• Outils de base</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">🎒 Équipement</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Chaussures de randonnée</li>
                    <li>• Vêtements adaptés</li>
                    <li>• Chapeau et lunettes</li>
                    <li>• Crème solaire</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">🍽️ Provisions</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Eau en abondance</li>
                    <li>• Snacks énergétiques</li>
                    <li>• Trousse de premiers secours</li>
                    <li>• Lampe de poche</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Partez à l'Aventure !</h2>
              <p className="text-emerald-100 mb-6">
                Louez un 4x4 robuste pour explorer les trésors cachés du Maroc en toute sécurité.
              </p>
              <Link 
                href="/" 
                className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
              >
                Réserver un 4x4
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}