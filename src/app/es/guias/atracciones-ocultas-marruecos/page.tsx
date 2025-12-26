import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Eye, Mountain, Waves, TreePine, Camera, Star, Navigation } from 'lucide-react'
import StructuredData from '@/app/es/components/StructuredData'

export const metadata: Metadata = {
  title: 'Atracciones Ocultas de Marruecos 2024: Tesoros Secretos por Descubrir | Nassoh Car',
  description: 'Descubra las atracciones ocultas y lugares secretos de Marruecos: pueblos bereberes auténticos, oasis perdidos, playas salvajes, cascadas de Akchour, cuevas de Friouato y sitios desconocidos fuera de las rutas habituales. Guía completa con consejos de acceso y mejores épocas.',
  keywords: 'atracciones ocultas Marruecos, lugares secretos Marruecos, pueblos bereberes, oasis Marruecos, playas salvajes Marruecos, turismo alternativo Marruecos, sitios desconocidos, cascadas Akchour, cuevas Friouato, lago Bin el Ouidane, playa Legzira, oasis Fint, pueblos Rif, Atlas secreto, tesoros ocultos Marruecos 2024',
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
    canonical: 'https://www.nassohcar.com/es/guías/atracciones-ocultas-marruecos',
  },
  openGraph: {
    title: 'Atracciones Ocultas de Marruecos 2024: Tesoros Secretos y Lugares Desconocidos',
    description: 'Explore los tesoros ocultos de Marruecos: pueblos bereberes auténticos, oasis secretos, playas salvajes, cascadas espectaculares y paisajes preservados. Guía completa de atracciones desconocidas con su coche de alquiler.',
    url: 'https://www.nassohcar.com/es/guías/atracciones-ocultas-marruecos',
    siteName: 'Nassoh Car - Alquiler de Coches en Marruecos',
    images: [
      {
        url: 'https://www.nassohcar.com/images/guides/attractions-cachees-maroc.jpg',
        width: 1200,
        height: 630,
        alt: 'Atracciones ocultas de Marruecos 2024 - Tesoros secretos y lugares desconocidos'
      }
    ],
    locale: 'es_ES',
    type: 'article',
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    section: 'Guías de Viaje',
    tags: ['Atracciones Ocultas', 'Marruecos Secreto', 'Turismo Alternativo', 'Pueblos Bereberes', 'Oasis Marruecos', 'Alquiler Coche']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atracciones Ocultas de Marruecos 2024: Tesoros Secretos por Descubrir',
    description: 'Explore los tesoros ocultos de Marruecos: pueblos bereberes, oasis secretos, playas salvajes y sitios desconocidos.',
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
}

const hiddenGems = [
  {
    name: "Akchour y las Cascadas del Puente de Dios",
    region: "Región de Chefchaouen",
    category: "Naturaleza",
    icon: Waves,
    description: "Cascadas espectaculares y formaciones rocosas naturales en las montañas del Rif",
    highlights: [
      "Puente natural de 25 metros de altura",
      "Piscinas naturales de agua turquesa",
      "Caminata de 3h ida y vuelta",
      "Vista panorámica de las montañas"
    ],
    difficulty: "Moderado",
    access: "4x4 recomendado + caminata 1h30",
    bestTime: "Abril a Octubre",
    tips: "Lleve zapatos de senderismo y traje de baño"
  },
  {
    name: "Pueblo de Imlil y Valle de Ourika Secreto",
    region: "Alto Atlas",
    category: "Montaña",
    icon: Mountain,
    description: "Pueblos bereberes auténticos escondidos en los valles del Atlas",
    highlights: [
      "Arquitectura bereber tradicional",
      "Terrazas agrícolas escalonadas",
      "Hospitalidad local excepcional",
      "Punto de partida hacia el Toubkal"
    ],
    difficulty: "Fácil",
    access: "Carretera de montaña + caminata corta",
    bestTime: "Marzo a Noviembre",
    tips: "Respete las costumbres locales y pruebe el té bereber"
  },
  {
    name: "Playa de Legzira",
    region: "Región de Sidi Ifni",
    category: "Costa",
    icon: Waves,
    description: "Playa salvaje con arcos naturales espectaculares sobre el Atlántico",
    highlights: [
      "Arcos de arenisca roja únicos",
      "Playa de 8 km poco concurrida",
      "Puestas de sol mágicas",
      "Surf y deportes acuáticos"
    ],
    difficulty: "Fácil",
    access: "Carretera costera + pista 15 min",
    bestTime: "Todo el año",
    tips: "Atención a las mareas y lleve agua"
  },
  {
    name: "Oasis de Fint",
    region: "Región de Ouarzazate",
    category: "Desierto",
    icon: TreePine,
    description: "Oasis verde escondido en un escenario de cañón rojo",
    highlights: [
      "Palmeral exuberante",
      "Kasbah de adobe auténtica",
      "Escenarios de películas famosas",
      "Silencio y serenidad absolutos"
    ],
    difficulty: "Fácil",
    access: "Pista 4x4 de 20 min",
    bestTime: "Octubre a Abril",
    tips: "Visite temprano en la mañana para evitar el calor"
  },
  {
    name: "Lago de Bin el Ouidane",
    region: "Medio Atlas",
    category: "Naturaleza",
    icon: Waves,
    description: "Lago artificial de aguas turquesas rodeado de montañas",
    highlights: [
      "Aguas cristalinas para nadar",
      "Deportes acuáticos variados",
      "Pueblos bereberes circundantes",
      "Pesca de trucha"
    ],
    difficulty: "Fácil",
    access: "Carretera asfaltada",
    bestTime: "Mayo a Septiembre",
    tips: "Perfecto para un picnic en familia"
  },
  {
    name: "Cuevas de Friouato",
    region: "Región de Taza",
    category: "Espeleología",
    icon: Mountain,
    description: "La red de cuevas más grande de Marruecos con formaciones de piedra caliza",
    highlights: [
      "Galerías subterráneas de 272m",
      "Estalactitas y estalagmitas",
      "Temperatura constante de 12°C",
      "Iluminación natural única"
    ],
    difficulty: "Moderado",
    access: "Carretera + descenso guiado",
    bestTime: "Todo el año",
    tips: "Lleve ropa abrigada y una linterna"
  }
]

const regions = [
  {
    name: "Norte de Marruecos",
    attractions: ["Akchour", "Pueblos del Rif", "Playas salvajes"],
    description: "Montañas verdes y costas preservadas"
  },
  {
    name: "Atlas Central",
    attractions: ["Pueblos bereberes", "Lagos de montaña", "Cascadas"],
    description: "Cumbres nevadas y valles secretos"
  },
  {
    name: "Sur Atlántico",
    attractions: ["Playas de arcos", "Pueblos de pescadores", "Acantilados"],
    description: "Costa salvaje y auténtica"
  },
  {
    name: "Pre-Sahara",
    attractions: ["Oasis ocultos", "Kasbahs aisladas", "Cañones"],
    description: "Puertas del desierto y paisajes lunares"
  }
]

const travelTips = [
  {
    title: "Preparación del Viaje",
    tips: [
      "Alquile un 4x4 para acceder a sitios remotos",
      "Descargue mapas sin conexión",
      "Lleve agua y provisiones",
      "Infórmese sobre las condiciones meteorológicas"
    ]
  },
  {
    title: "Respeto al Medio Ambiente",
    tips: [
      "No deje rastro de su paso",
      "Respete la flora y fauna locales",
      "Utilice los senderos marcados",
      "Evite recoger plantas"
    ]
  },
  {
    title: "Interacción Local",
    tips: [
      "Aprenda algunas palabras en árabe o bereber",
      "Respete las costumbres y tradiciones",
      "Pida permiso antes de fotografiar",
      "Apoye la economía local"
    ]
  },
  {
    title: "Seguridad",
    tips: [
      "Viaje en grupo en zonas aisladas",
      "Informe a alguien de su itinerario",
      "Mantenga su teléfono cargado",
      "Lleve un botiquín de primeros auxilios"
    ]
  }
]

export default function AtraccionesOcultasMarruecosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <StructuredData type="@graph" data={[
        {
          "@type": "Article",
          "@id": "https://www.nassohcar.com/es/guías/atracciones-ocultas-marruecos#article",
          "headline": "Atracciones Ocultas de Marruecos 2024: Tesoros Secretos por Descubrir",
          "description": "Descubra las atracciones ocultas y lugares secretos de Marruecos: pueblos bereberes auténticos, oasis perdidos, playas salvajes, cascadas de Akchour, cuevas de Friouato y sitios desconocidos fuera de las rutas habituales.",
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
            "@id": "https://www.nassohcar.com/es/guías/atracciones-ocultas-marruecos"
          },
          "articleSection": "Guías de Viaje",
          "keywords": "atracciones ocultas Marruecos, lugares secretos Marruecos, pueblos bereberes, oasis Marruecos, playas salvajes Marruecos, turismo alternativo Marruecos, sitios desconocidos, cascadas Akchour, cuevas Friouato",
          "wordCount": 2800,
          "inLanguage": "es-ES",
          "about": [
            {
              "@type": "Place",
              "name": "Marruecos",
              "description": "Reino de Marruecos con sus atracciones ocultas y tesoros secretos"
            }
          ]
        },
        {
          "@type": "TravelGuide",
          "@id": "https://www.nassohcar.com/es/guías/atracciones-ocultas-marruecos#travelguide",
          "name": "Guía de Atracciones Ocultas de Marruecos 2024",
          "description": "Guía completa de atracciones ocultas y lugares secretos de Marruecos fuera de las rutas habituales",
          "url": "https://www.nassohcar.com/es/guías/atracciones-ocultas-marruecos",
          "author": {
            "@type": "Organization",
            "@id": "https://www.nassohcar.com#organization"
          },
          "datePublished": "2024-01-01T00:00:00.000Z",
          "dateModified": new Date().toISOString(),
          "inLanguage": "es-ES",
          "about": {
            "@type": "Place",
            "name": "Marruecos",
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
              "name": "Cascadas de Akchour",
              "description": "Cascadas espectaculares y formaciones rocosas naturales en las montañas del Rif"
            },
            {
              "@type": "TouristAttraction",
              "name": "Pueblos bereberes del Atlas",
              "description": "Pueblos auténticos escondidos en los valles del Atlas"
            },
            {
              "@type": "TouristAttraction",
              "name": "Playa de Legzira",
              "description": "Playa salvaje con arcos naturales espectaculares"
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
          "description": "Alquiler de coches en Marruecos - Servicio profesional y vehículos de calidad",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "MA",
            "addressLocality": "Marruecos"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+212-XXX-XXXXXX",
            "contactType": "customer service",
            "availableLanguage": ["French", "Arabic", "English", "Spanish"]
          },
          "sameAs": [
            "https://www.facebook.com/nassohcar",
            "https://www.instagram.com/nassohcar"
          ]
        },
        {
          "@type": "WebPage",
          "@id": "https://www.nassohcar.com/es/guías/atracciones-ocultas-marruecos",
          "url": "https://www.nassohcar.com/es/guías/atracciones-ocultas-marruecos",
          "name": "Atracciones Ocultas de Marruecos 2024: Tesoros Secretos por Descubrir | Nassoh Car",
          "description": "Descubra las atracciones ocultas y lugares secretos de Marruecos: pueblos bereberes auténticos, oasis perdidos, playas salvajes y sitios desconocidos fuera de las rutas habituales.",
          "inLanguage": "es-ES",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://www.nassohcar.com#website"
          },
          "about": {
            "@type": "Place",
            "name": "Marruecos"
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
                "name": "Inicio",
                "item": "https://www.nassohcar.com/es"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Guías",
                "item": "https://www.nassohcar.com/es/guías"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Atracciones Ocultas de Marruecos",
                "item": "https://www.nassohcar.com/es/guías/atracciones-ocultas-marruecos"
              }
            ]
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://www.nassohcar.com#website",
          "url": "https://www.nassohcar.com",
          "name": "Nassoh Car - Alquiler de Coches en Marruecos",
          "description": "Alquiler de coches en Marruecos con Nassoh Car. Vehículos de calidad, servicio profesional y precios competitivos para todos sus viajes.",
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.nassohcar.com#organization"
          },
          "inLanguage": "es-ES",
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
              <Link href="/es" className="text-gray-500 hover:text-gray-700 transition-colors">
                Inicio
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/es/guías" className="text-gray-500 hover:text-gray-700 transition-colors">
                Guías
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">Atracciones Ocultas de Marruecos</li>
          </ol>
        </div>
      </nav>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-800 to-green-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link href="/es/guías" className="inline-flex items-center text-emerald-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a las guías
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atracciones Ocultas de Marruecos
            </h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Descubra los tesoros secretos de Marruecos: pueblos bereberes auténticos, 
              oasis perdidos, playas salvajes y sitios naturales preservados lejos de las multitudes turísticas.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-emerald-800/50 px-3 py-1 rounded-full">🏔️ Montañas</span>
              <span className="bg-emerald-800/50 px-3 py-1 rounded-full">🏖️ Playas Salvajes</span>
              <span className="bg-emerald-800/50 px-3 py-1 rounded-full">🌴 Oasis</span>
              <span className="bg-emerald-800/50 px-3 py-1 rounded-full">⏱️ Lectura 15 min</span>
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
                <h2 className="text-2xl font-bold text-gray-900">¿Por qué Explorar las Atracciones Ocultas?</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Autenticidad Preservada</h3>
                  <p className="text-gray-700 mb-4">
                    Descubra el Marruecos auténtico, lejos del turismo de masas, 
                    donde las tradiciones y la cultura local permanecen intactas.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Experiencias Únicas</h3>
                  <p className="text-gray-700 mb-4">
                    Viva momentos excepcionales en paisajes preservados 
                    y cree recuerdos inolvidables.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Hidden Gems */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Tesoros Ocultos por Descubrir</h2>
            
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
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Lo Destacado</h4>
                        <ul className="space-y-1">
                          {gem.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-gray-600 text-sm">• {highlight}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-3 text-sm">
                          <span className="font-semibold text-gray-900">Acceso:</span> {gem.access}
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 text-sm">
                          <span className="font-semibold text-gray-900">Mejor Época:</span> {gem.bestTime}
                        </div>
                        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-sm">
                          <span className="font-semibold text-blue-900">Consejo:</span> <span className="text-blue-800">{gem.tips}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Regions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Explorar por Región</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {regions.map((region, index) => (
                <div key={index} className="bg-white rounded-xl shadow p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{region.name}</h3>
                  <p className="text-gray-600 mb-4">{region.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {region.attractions.map((attr, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {attr}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Travel Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos Prácticos</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {travelTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{tip.title}</h3>
                  <ul className="space-y-2">
                    {tip.tips.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-4">¿Listo para la Aventura?</h2>
              <p className="text-emerald-100 mb-8 text-lg max-w-2xl mx-auto">
                Alquile un vehículo robusto y fiable con Nassoh Car para explorar 
                los tesoros ocultos de Marruecos con total libertad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/es/flota" 
                  className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
                >
                  Ver Nuestros Vehículos
                </Link>
                <Link 
                  href="/es/contacto" 
                  className="bg-emerald-700 text-white border border-emerald-500 px-8 py-3 rounded-lg font-bold hover:bg-emerald-600 transition-colors"
                >
                  Contáctenos
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
