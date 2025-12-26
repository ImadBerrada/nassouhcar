import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Clock, Car, Star, Calendar, Route, Camera, Mountain, Waves } from 'lucide-react'
import StructuredData from '@/components/StructuredData'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

export const metadata: Metadata = {
  title: 'Itinerarios Marruecos 2025: Circuitos y Road Trips Completos | Nassoh Car',
  description: 'Descubre los mejores itinerarios en Marruecos: circuitos de 7, 10 y 15 días, road trips, ciudades imperiales, desierto del Sahara, montañas del Atlas y costa atlántica con coche de alquiler. Guía completa con consejos prácticos.',
  keywords: 'itinerarios Marruecos, circuito Marruecos, road trip Marruecos, viaje Marruecos, ciudades imperiales, desierto Sahara, costa atlántica, Atlas, alquiler coche Marruecos, guía viaje Marruecos, circuitos turísticos Marruecos',
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
    canonical: 'https://www.nassohcar.com/es/guias/itinerarios-marruecos',
    languages: generateHreflangLinks('/es/guias/itinerarios-marruecos')
  },
  openGraph: {
    title: 'Itinerarios Imprescindibles en Coche por Marruecos | Nassoh Car',
    description: 'Descubra los circuitos más bellos de Marruecos en coche de alquiler. De Tánger al Atlas, explore el reino con nuestras rutas detalladas.',
    url: 'https://www.nassohcar.com/es/guias/itinerarios-marruecos',
    siteName: 'Nassoh Car - Alquiler de Coches en Marruecos',
    images: [
      {
        url: 'https://www.nassohcar.com/images/itineraires-maroc-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Itinerarios y circuitos en Marruecos - Guía completa 2025',
        type: 'image/jpeg',
      }
    ],
    locale: 'es_ES',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    section: 'Guías de Viaje',
    tags: ['Marruecos', 'Itinerarios', 'Road Trip', 'Circuitos', 'Viaje', 'Alquiler Coche'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Itinerarios Marruecos 2025: Circuitos y Road Trips Completos',
    description: 'Descubre los mejores circuitos en Marruecos con nuestra guía completa: ciudades imperiales, desierto, Atlas y costa atlántica.',
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
}

const itineraries = [
  {
    title: "Circuito Ciudades Imperiales",
    duration: "7 días",
    distance: "1200 km",
    difficulty: "Fácil",
    highlights: ["Rabat", "Meknes", "Fez", "Marrakech"],
    description: "Descubrimiento de las cuatro ciudades imperiales de Marruecos",
    days: [
      {
        day: 1,
        city: "Casablanca - Rabat",
        distance: "90 km - 1h",
        activities: [
          "Llegada a Casablanca, recogida del coche",
          "Visita de la Mezquita Hassan II",
          "Ruta hacia Rabat",
          "Tour de la Kasbah de los Oudayas",
          "Noche en Rabat"
        ]
      },
      {
        day: 2,
        city: "Rabat - Meknes",
        distance: "140 km - 1h30",
        activities: [
          "Visita del Mausoleo Mohammed V",
          "Torre Hassan",
          "Ruta hacia Meknes",
          "Descubrimiento de Bab Mansour",
          "Noche en Meknes"
        ]
      },
      {
        day: 3,
        city: "Meknes - Fez",
        distance: "60 km - 1h",
        activities: [
          "Visita de las Caballerizas Reales",
          "Ruta hacia Fez",
          "Exploración de la Medina de Fez",
          "Barrio de los curtidores",
          "Noche en Fez"
        ]
      },
      {
        day: 4,
        city: "Fez",
        distance: "0 km",
        activities: [
          "Día completo en Fez",
          "Universidad Al Quaraouiyine",
          "Palacio Real",
          "Artesanía local",
          "Noche en Fez"
        ]
      },
      {
        day: 5,
        city: "Fez - Beni Mellal",
        distance: "280 km - 3h",
        activities: [
          "Ruta hacia el Medio Atlas",
          "Parada en Ifrane (La Pequeña Suiza)",
          "Almuerzo en Beni Mellal",
          "Paisajes de montaña",
          "Noche en Beni Mellal"
        ]
      },
      {
        day: 6,
        city: "Beni Mellal - Marrakech",
        distance: "210 km - 2h30",
        activities: [
          "Ruta hacia Marrakech",
          "Llegada e instalación",
          "Plaza Jemaa el-Fna",
          "Zocos de Marrakech",
          "Noche en Marrakech"
        ]
      },
      {
        day: 7,
        city: "Marrakech - Casablanca",
        distance: "240 km - 2h30",
        activities: [
          "Jardines de Majorelle",
          "Palacio de la Bahía",
          "Ruta de regreso a Casablanca",
          "Devolución del coche",
          "Salida"
        ]
      }
    ]
  },
  {
    title: "Gran Tour Desierto y Montañas",
    duration: "10 días",
    distance: "2500 km",
    difficulty: "Moderado",
    highlights: ["Marrakech", "Atlas", "Sahara", "Gargantas del Dades"],
    description: "Circuito completo combinando montañas del Atlas y desierto del Sahara",
    days: [
      {
        day: 1,
        city: "Marrakech",
        distance: "0 km",
        activities: [
          "Llegada y recogida del coche",
          "Descubrimiento de la Medina",
          "Plaza Jemaa el-Fna",
          "Zocos tradicionales",
          "Noche en Marrakech"
        ]
      },
      {
        day: 2,
        city: "Marrakech - Ait Ben Haddou",
        distance: "190 km - 3h",
        activities: [
          "Travesía del Alto Atlas",
          "Paso de Tizi n'Tichka (2260m)",
          "Visita de la Kasbah Ait Ben Haddou",
          "Puesta de sol",
          "Noche en Ait Ben Haddou"
        ]
      },
      {
        day: 3,
        city: "Ait Ben Haddou - Ouarzazate - Gargantas del Dades",
        distance: "180 km - 3h",
        activities: [
          "Estudios de cine de Ouarzazate",
          "Ruta de las Mil Kasbahs",
          "Valle de las Rosas",
          "Gargantas del Dades",
          "Noche en las gargantas"
        ]
      },
      {
        day: 4,
        city: "Gargantas del Dades - Merzouga",
        distance: "280 km - 4h",
        activities: [
          "Gargantas del Todra",
          "Oasis de Tinghir",
          "Ruta hacia Merzouga",
          "Llegada a las dunas de Erg Chebbi",
          "Noche en vivac en el desierto"
        ]
      },
      {
        day: 5,
        city: "Merzouga - Desierto",
        distance: "0 km",
        activities: [
          "Amanecer sobre las dunas",
          "Excursión en 4x4",
          "Encuentro con nómadas",
          "Paseo en camello",
          "Noche bajo las estrellas"
        ]
      },
      {
        day: 6,
        city: "Merzouga - Midelt",
        distance: "300 km - 4h30",
        activities: [
          "Ruta hacia el Medio Atlas",
          "Paisajes de transición",
          "Ciudad de Midelt",
          "Montañas del Atlas",
          "Noche en Midelt"
        ]
      },
      {
        day: 7,
        city: "Midelt - Fez",
        distance: "200 km - 3h",
        activities: [
          "Ruta hacia Fez",
          "Bosques de cedros",
          "Llegada a Fez",
          "Primera visita de la Medina",
          "Noche en Fez"
        ]
      },
      {
        day: 8,
        city: "Fez",
        distance: "0 km",
        activities: [
          "Día completo en Fez",
          "Medina y sus artesanos",
          "Universidad Al Quaraouiyine",
          "Barrio de los curtidores",
          "Noche en Fez"
        ]
      },
      {
        day: 9,
        city: "Fez - Chefchaouen",
        distance: "200 km - 3h30",
        activities: [
          "Ruta hacia las montañas del Rif",
          "Llegada a Chefchaouen",
          "Ciudad azul",
          "Medina pintoresca",
          "Noche en Chefchaouen"
        ]
      },
      {
        day: 10,
        city: "Chefchaouen - Casablanca",
        distance: "350 km - 4h30",
        activities: [
          "Último paseo por Chefchaouen",
          "Ruta de regreso a Casablanca",
          "Devolución del coche",
          "Salida"
        ]
      }
    ]
  },
  {
    title: "Circuito Costa Atlántica",
    duration: "7 días",
    distance: "1400 km",
    difficulty: "Fácil",
    highlights: ["Casablanca", "Rabat", "Essaouira", "Agadir"],
    description: "Descubrimiento de la costa atlántica marroquí",
    days: [
      {
        day: 1,
        city: "Casablanca",
        distance: "0 km",
        activities: [
          "Llegada y recogida del coche",
          "Mezquita Hassan II",
          "Corniche Ain Diab",
          "Centro ciudad Art Déco",
          "Noche en Casablanca"
        ]
      },
      {
        day: 2,
        city: "Casablanca - Rabat",
        distance: "90 km - 1h",
        activities: [
          "Ruta hacia Rabat",
          "Kasbah de los Oudayas",
          "Mausoleo Mohammed V",
          "Medina de Rabat",
          "Noche en Rabat"
        ]
      },
      {
        day: 3,
        city: "Rabat - El Jadida",
        distance: "140 km - 1h30",
        activities: [
          "Ruta costera hacia El Jadida",
          "Ciudad portuguesa",
          "Cisterna portuguesa",
          "Playa de El Jadida",
          "Noche en El Jadida"
        ]
      },
      {
        day: 4,
        city: "El Jadida - Essaouira",
        distance: "180 km - 2h",
        activities: [
          "Ruta hacia Essaouira",
          "Medina fortificada",
          "Puerto pesquero",
          "Artesanía local",
          "Noche en Essaouira"
        ]
      },
      {
        day: 5,
        city: "Essaouira - Agadir",
        distance: "170 km - 2h",
        activities: [
          "Mañana libre en Essaouira",
          "Ruta hacia Agadir",
          "Playa de Agadir",
          "Marina moderna",
          "Noche en Agadir"
        ]
      },
      {
        day: 6,
        city: "Agadir - Marrakech",
        distance: "250 km - 3h",
        activities: [
          "Ruta hacia Marrakech",
          "Paisajes del Atlas",
          "Llegada a Marrakech",
          "Plaza Jemaa el-Fna",
          "Noche en Marrakech"
        ]
      },
      {
        day: 7,
        city: "Marrakech - Casablanca",
        distance: "240 km - 2h30",
        activities: [
          "Jardines de Majorelle",
          "Últimas compras",
          "Ruta de regreso",
          "Devolución del coche",
          "Salida"
        ]
      }
    ]
  }
]

const practicalTips = [
  {
    category: "Preparación",
    icon: Calendar,
    tips: [
      "Reserve su coche con 2-3 semanas de antelación",
      "Verifique la validez de su permiso",
      "Descargue mapas offline",
      "Prepare un presupuesto para gasolina y peajes"
    ]
  },
  {
    category: "Conducción",
    icon: Car,
    tips: [
      "Respete los límites de velocidad",
      "Cuidado con los animales en carreteras de montaña",
      "Evite conducir de noche",
      "Lleve siempre agua en el vehículo"
    ]
  },
  {
    category: "Alojamiento",
    icon: Star,
    tips: [
      "Reserve con antelación en temporada alta",
      "Negocie precios para estancias largas",
      "Pruebe los riads tradicionales",
      "Verifique las opiniones de clientes"
    ]
  },
  {
    category: "Presupuesto",
    icon: Clock,
    tips: [
      "Calcule 50-100€/día para 2 personas",
      "La gasolina cuesta alrededor de 1.30€/litro",
      "Los peajes de autopista son económicos",
      "Negocie en los zocos"
    ]
  }
]

const bestTimes = [
  {
    season: "Primavera (Marzo-Mayo)",
    weather: "Temperaturas ideales 20-25°C",
    pros: ["Clima perfecto", "Paisajes verdes", "Menos turistas"],
    cons: ["Precios ligeramente más altos"],
    recommendation: "Excelente"
  },
  {
    season: "Otoño (Sept-Nov)",
    weather: "Temperaturas agradables 18-28°C",
    pros: ["Tiempo estable", "Mar aún cálido", "Tarifas moderadas"],
    cons: ["Posibles lluvias"],
    recommendation: "Muy bueno"
  },
  {
    season: "Invierno (Dic-Feb)",
    weather: "Suave en la costa 15-20°C",
    pros: ["Tarifas bajas", "Poca gente", "Nieve en el Atlas"],
    cons: ["Frío en montaña", "Días cortos"],
    recommendation: "Bueno"
  },
  {
    season: "Verano (Jun-Ago)",
    weather: "Caluroso a muy caluroso 25-40°C",
    pros: ["Días largos", "Mar cálido"],
    cons: ["Calor intenso", "Multitudes turísticas", "Precios altos"],
    recommendation: "Difícil"
  }
]

export default function ItinerariosMarruecosPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.nassohcar.com/es/guias/itinerarios-marruecos#article",
        "isPartOf": {
          "@id": "https://www.nassohcar.com/es/guias/itinerarios-marruecos"
        },
        "author": {
          "@type": "Organization",
          "name": "Nassoh Car",
          "@id": "https://www.nassohcar.com/#organization"
        },
        "headline": "Itinerarios Marruecos 2025: Circuitos y Road Trips Completos",
        "description": "Guía completa de los mejores circuitos en Marruecos: ciudades imperiales, desierto del Sahara, montañas del Atlas y costa atlántica. Itinerarios detallados con alquiler de coche.",
        "datePublished": "2025-01-15T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.nassohcar.com/es/guias/itinerarios-marruecos"
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
        "articleSection": "Guías de Viaje",
        "inLanguage": "es-ES",
        "keywords": ["itinerarios Marruecos", "circuito Marruecos", "road trip Marruecos", "viaje Marruecos", "ciudades imperiales", "desierto Sahara", "costa atlántica", "Atlas", "alquiler coche Marruecos"]
      },
      {
        "@type": "TravelGuide",
        "@id": "https://www.nassohcar.com/es/guias/itinerarios-marruecos#travelguide",
        "name": "Guía de Itinerarios en Marruecos 2025",
        "description": "Guía completa para planificar su viaje a Marruecos con itinerarios detallados de 7 a 15 días",
        "about": {
          "@type": "Place",
          "name": "Marruecos",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 31.7917,
            "longitude": -7.0926
          }
        },
        "author": {
          "@id": "https://www.nassohcar.com/#organization"
        },
        "datePublished": "2025-01-15T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "inLanguage": "es-ES"
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
        "description": "Alquiler de coches en Marruecos - Servicio profesional y fiable",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "MA",
          "addressLocality": "Tánger"
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
        "@id": "https://www.nassohcar.com/es/guias/itinerarios-marruecos",
        "url": "https://www.nassohcar.com/es/guias/itinerarios-marruecos",
        "name": "Itinerarios Marruecos 2025: Circuitos y Road Trips Completos | Nassoh Car",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.nassohcar.com/#website"
        },
        "datePublished": "2025-01-15T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Guía completa de los mejores circuitos en Marruecos: ciudades imperiales, desierto del Sahara, montañas del Atlas y costa atlántica. Itinerarios detallados con alquiler de coche.",
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
              "item": "https://www.nassohcar.com/es/guias"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Itinerarios Marruecos",
              "item": "https://www.nassohcar.com/es/guias/itinerarios-marruecos"
            }
          ]
        },
        "mainEntity": {
          "@id": "https://www.nassohcar.com/es/guias/itinerarios-marruecos#article"
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
        "name": "Nassoh Car - Alquiler de Coches en Marruecos",
        "description": "Servicio de alquiler de coches en Marruecos con las mejores tarifas y un servicio al cliente excepcional",
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
        "inLanguage": "es-ES"
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
            <Link href="/es" className="text-gray-500 hover:text-gray-700 transition-colors">
              Inicio
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/es/guias" className="text-gray-500 hover:text-gray-700 transition-colors">
              Guías
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Itinerarios Marruecos</span>
          </div>
        </div>
      </nav>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-900 via-red-800 to-pink-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link href="/es/guias" className="inline-flex items-center text-orange-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a las guías
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Itinerarios Marruecos
            </h1>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Descubra la magia de Marruecos con nuestros itinerarios detallados. Desde las ciudades imperiales hasta las dunas del Sahara,
              pasando por las montañas del Atlas y la costa atlántica.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/10 px-3 py-1 rounded-full flex items-center">
                <Route className="w-4 h-4 mr-2" /> 3 Circuitos Detallados
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-full flex items-center">
                <Car className="w-4 h-4 mr-2" /> Road Trips
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-full flex items-center">
                <Mountain className="w-4 h-4 mr-2" /> Atlas & Desierto
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Article */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Itineraries List */}
            <div className="space-y-8">
              {itineraries.map((itinerary, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 text-white">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-bold">{itinerary.title}</h2>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        {itinerary.duration}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-orange-50">
                      <span className="flex items-center"><Route className="w-4 h-4 mr-1" /> {itinerary.distance}</span>
                      <span className="flex items-center"><Mountain className="w-4 h-4 mr-1" /> {itinerary.difficulty}</span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-600 mb-8 italic">{itinerary.description}</p>
                    
                    <div className="space-y-8">
                      {itinerary.days.map((day, dayIndex) => (
                        <div key={dayIndex} className="relative pl-8 border-l-2 border-orange-100 last:border-0 pb-8 last:pb-0">
                          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-white"></div>
                          <div className="mb-2">
                            <span className="text-orange-600 font-bold text-sm uppercase tracking-wider">Día {day.day}</span>
                            <h3 className="text-lg font-bold text-gray-900 mt-1">{day.city}</h3>
                            <div className="text-sm text-gray-500 flex items-center mt-1">
                              <Car className="w-3 h-3 mr-1" />
                              {day.distance}
                            </div>
                          </div>
                          <ul className="space-y-2 mt-4">
                            {day.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-start text-gray-700 text-sm">
                                <span className="w-1.5 h-1.5 bg-orange-300 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                {activity}
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

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Practical Tips */}
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="w-5 h-5 text-orange-500 mr-2" />
                Consejos Prácticos
              </h3>
              <div className="space-y-6">
                {practicalTips.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-sm uppercase tracking-wide">
                      <category.icon className="w-4 h-4 text-orange-500 mr-2" />
                      {category.category}
                    </h4>
                    <ul className="space-y-2">
                      {category.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-sm text-gray-600 pl-6 relative">
                          <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Time to Visit */}
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Calendar className="w-5 h-5 text-blue-400 mr-2" />
                Mejor Época
              </h3>
              <div className="space-y-4">
                {bestTimes.map((time, index) => (
                  <div key={index} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-blue-200">{time.season}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        time.recommendation === 'Excelente' ? 'bg-green-500/20 text-green-300' :
                        time.recommendation === 'Muy bueno' ? 'bg-blue-500/20 text-blue-300' :
                        time.recommendation === 'Bueno' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {time.recommendation}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-1">{time.weather}</p>
                    <div className="text-xs text-gray-500">
                      <span className="text-green-400">+ {time.pros[0]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl shadow-lg p-8 text-white text-center">
              <h3 className="text-xl font-bold mb-4">¿Listo para el Viaje?</h3>
              <p className="text-orange-100 mb-6 text-sm">
                Reserve su coche ideal para explorar estos magníficos itinerarios.
              </p>
              <Link 
                href="/es" 
                className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors w-full"
              >
                Reservar un Coche
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
