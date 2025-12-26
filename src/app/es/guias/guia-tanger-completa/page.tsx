import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Clock, Star, Camera, Utensils, Car, Compass, Info } from 'lucide-react'
import StructuredData from '@/app/es/components/StructuredData'

export const metadata: Metadata = {
  title: 'Guía Completa de Tánger 2024: Qué Ver y Hacer | Nassoh Car',
  description: 'Descubra Tánger con nuestra guía completa 2024: atracciones imprescindibles (Medina, Kasbah, Cabo Espartel), mejores restaurantes, alojamientos recomendados, consejos prácticos e itinerarios detallados con coche de alquiler. Todo lo que necesita para una estancia perfecta en Tánger.',
  keywords: 'guía Tánger, qué hacer Tánger, atracciones Tánger, restaurantes Tánger, alojamiento Tánger, alquiler coche Tánger, visitar Tánger, medina Tánger, kasbah Tánger, Cabo Espartel, Cuevas de Hércules, itinerario Tánger, consejos viaje Tánger, turismo Tánger 2024',
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
    canonical: 'https://www.nassohcar.com/es/guias/guia-tanger-completa',
  },
  openGraph: {
    title: 'Guía Completa de Tánger 2024: Atracciones, Restaurantes y Consejos Prácticos',
    description: 'Guía completa 2024 para visitar Tánger: atracciones imprescindibles, mejores restaurantes, estancias, itinerarios detallados y consejos prácticos. Descubra la Perla del Estrecho con su coche de alquiler.',
    url: 'https://www.nassohcar.com/es/guias/guia-tanger-completa',
    siteName: 'Nassoh Car - Alquiler de Coches en Marruecos',
    images: [
      {
        url: 'https://www.nassohcar.com/images/guides/guide-tanger-complet.jpg',
        width: 1200,
        height: 630,
        alt: 'Guía completa Tánger 2024 - Atracciones y consejos de visita'
      }
    ],
    locale: 'es_ES',
    type: 'article',
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    section: 'Guías de Viaje',
    tags: ['Tánger', 'Guía de Viaje', 'Atracciones Marruecos', 'Turismo Tánger', 'Alquiler Coche']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guía Completa de Tánger 2024: Qué Ver y Hacer',
    description: 'Guía completa para visitar Tánger: atracciones, restaurantes, estancias y consejos prácticos.',
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
}

const attractions = [
  {
    name: 'Medina de Tánger',
    description: 'Laberinto de callejuelas estrechas, zocos coloridos y arquitectura tradicional',
    duration: '3–4 horas',
    rating: 4.8,
    highlights: ['Gran Zoco', 'Plaza del Petit Socco', 'Mezquita Sidi Bou Abib'],
    tips: 'Visite temprano por la mañana para evitar multitudes'
  },
  {
    name: 'Kasbah de Tánger',
    description: 'Antigua ciudadela con vistas panorámicas sobre el Estrecho de Gibraltar',
    duration: '2–3 horas',
    rating: 4.7,
    highlights: ['Museo de la Kasbah', 'Jardines de la Mendoubia', 'Café Hafa'],
    tips: 'Lugar perfecto para el atardecer'
  },
  {
    name: 'Cabo Espartel',
    description: 'Punta noroeste de África con un faro histórico',
    duration: '1–2 horas',
    rating: 4.6,
    highlights: ['Faro de Cabo Espartel', 'Vistas al Océano Atlántico', 'Cuevas de Hércules'],
    tips: 'Mejor acceso en coche'
  },
  {
    name: 'Cuevas de Hércules',
    description: 'Cuevas marinas legendarias con una abertura hacia el océano',
    duration: '1 hora',
    rating: 4.5,
    highlights: ['Formación rocosa única', 'Leyenda de Hércules', 'Playa cercana'],
    tips: 'Combine con la visita a Cabo Espartel'
  },
  {
    name: 'Playa de Tánger',
    description: 'Larga playa de arena a lo largo de la Bahía de Tánger',
    duration: 'Medio día',
    rating: 4.3,
    highlights: ['Paseo marítimo', 'Deportes acuáticos', 'Cafés de playa'],
    tips: 'Ideal para relajarse después de hacer turismo'
  }
]

const restaurants = [
  {
    name: 'El Morocco Club',
    cuisine: 'Marroquí refinada',
    price: '€€€',
    specialty: 'Tajín con ciruelas y almendras',
    location: 'Kasbah'
  },
  {
    name: 'Saveur de Poisson',
    cuisine: 'Mariscos',
    price: '€€',
    specialty: 'Pesca del día a la parrilla',
    location: 'Puerto pesquero'
  },
  {
    name: 'Café Central',
    cuisine: 'Internacional',
    price: '€€',
    specialty: 'Pastela de pescado',
    location: 'Place de France'
  },
  {
    name: 'Restaurante Popular',
    cuisine: 'Local auténtica',
    price: '€',
    specialty: 'Cuscús de los viernes',
    location: 'Medina'
  }
]


const practicalTips = [
  {
    category: 'Transporte',
    icon: Car,
    tips: [
      'Alquiler de coche recomendado para Cabo Espartel',
      'Aparcamiento de pago en el centro (5–10 DH/hora)',
      'Petit taxis disponibles para trayectos cortos',
      'Evite conducir dentro de la medina (peatonal)',
      'Servicio de alquiler disponible desde Francia'
    ]
  },
  {
    category: 'Seguridad',
    icon: Info,
    tips: [
      'Mantenga seguros sus objetos de valor',
      'Negocie precios en los zocos',
      'Cuidado con los guías falsos',
      'Respete las costumbres locales'
    ]
  },
  {
    category: 'Mejor Época',
    icon: Clock,
    tips: [
      'Primavera (Mar–May): clima ideal',
      'Otoño (Sep–Nov): temperaturas agradables',
      'Verano: caluroso pero animado',
      'Invierno: suave con lluvias ocasionales'
    ]
  }
]

const itinerarios = [
  {
    day: 'Día 1',
    title: 'Descubrimiento de la Medina',
    activities: [
      'Mañana: Explore la Medina y los zocos',
      'Almuerzo: Restaurante en el Petit Socco',
      'Tarde: Visite la Kasbah y el Museo',
      'Noche: Atardecer en Café Hafa'
    ]
  },
  {
    day: 'Día 2',
    title: 'Cabo Espartel y Cuevas',
    activities: [
      'Mañana: Conduzca a Cabo Espartel (30 min en coche)',
      'Visite el faro y alrededores',
      'Almuerzo: Restaurante con vistas al océano',
      'Tarde: Explore las Cuevas de Hércules',
      'Regreso: Relájese en la Playa de Tánger'
    ]
  },
  {
    day: 'Día 3',
    title: 'Cultura y Relajación',
    activities: [
      'Mañana: Museo del Legado Americano',
      'Paseo por la Ville Nouvelle',
      'Almuerzo: Cocina internacional',
      'Tarde: Compras y hammam tradicional',
      'Noche: Cena en un restaurante de mariscos'
    ]
  }
]

export default function GuiaTangerCompletaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <StructuredData type="@graph" data={[
        {
          '@type': 'Article',
          '@id': 'https://www.nassohcar.com/es/guias/guia-tanger-completa#article',
          headline: 'Guía Completa de Tánger 2024: Qué Ver y Hacer',
          description: 'Guía completa 2024 para visitar Tánger: atracciones imprescindibles (Medina, Kasbah, Cabo Espartel), mejores restaurantes, alojamientos recomendados, consejos prácticos e itinerarios detallados con coche de alquiler.',
          image: 'https://www.nassohcar.com/images/guides/guide-tanger-complet.jpg',
          author: {
            '@type': 'Organization',
            '@id': 'https://www.nassohcar.com#organization'
          },
          publisher: {
            '@type': 'Organization',
            '@id': 'https://www.nassohcar.com#organization'
          },
          datePublished: '2024-01-01T00:00:00.000Z',
          dateModified: new Date().toISOString(),
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://www.nassohcar.com/es/guias/guia-tanger-completa'
          },
          articleSection: 'Guías de Viaje',
          keywords: 'guía Tánger, atracciones Tánger, restaurantes Tánger, medina Tánger, kasbah Tánger, Cabo Espartel, Cuevas de Hércules, itinerario Tánger, consejos viaje Tánger, turismo Tánger 2024',
          wordCount: 2500,
          inLanguage: 'es-ES',
          about: [
            {
              '@type': 'Place',
              name: 'Tánger',
              description: 'Ciudad en el norte de Marruecos en el Estrecho de Gibraltar'
            }
          ]
        },
        {
          '@type': 'TravelGuide',
          '@id': 'https://www.nassohcar.com/es/guias/guia-tanger-completa#travelguide',
          name: 'Guía Completa de Tánger 2024',
          description: 'Guía completa para visitar Tánger con atracciones, restaurantes, estancias y consejos prácticos',
          url: 'https://www.nassohcar.com/es/guias/guia-tanger-completa',
          author: {
            '@type': 'Organization',
            '@id': 'https://www.nassohcar.com#organization'
          },
          datePublished: '2024-01-01T00:00:00.000Z',
          dateModified: new Date().toISOString(),
          inLanguage: 'es-ES',
          about: {
            '@type': 'Place',
            name: 'Tánger, Marruecos',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 35.7595,
              longitude: -5.8340
            }
          },
          touristType: ['Cultural Tourist', 'Adventure Tourist', 'Family Tourist'],
          itinerary: [
            {
              '@type': 'TouristTrip',
              name: 'Día 1 - Descubrimiento de la Medina',
              description: 'Explore la Medina, zocos, Kasbah y atardecer en Café Hafa'
            },
            {
              '@type': 'TouristTrip',
              name: 'Día 2 - Cabo Espartel y Cuevas',
              description: 'Visite Cabo Espartel, faro, Cuevas de Hércules y Playa de Tánger'
            }
          ]
        },
        {
          '@type': 'Organization',
          '@id': 'https://www.nassohcar.com#organization',
          name: 'Nassoh Car',
          url: 'https://www.nassohcar.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.nassohcar.com/logo.png',
            width: 300,
            height: 100
          },
          description: 'Alquiler de coches en Marruecos - Servicio profesional y vehículos de calidad',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'MA',
            addressLocality: 'Marruecos'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+212-XXX-XXXXXX',
            contactType: 'customer service',
            availableLanguage: ['French', 'Arabic', 'English', 'Spanish']
          },
          sameAs: [
            'https://www.facebook.com/nassohcar',
            'https://www.instagram.com/nassohcar'
          ]
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.nassohcar.com/es/guias/guia-tanger-completa',
          url: 'https://www.nassohcar.com/es/guias/guia-tanger-completa',
          name: 'Guía Completa de Tánger 2024: Qué Ver y Hacer | Nassoh Car',
          description: 'Guía completa 2024 para visitar Tánger: atracciones imprescindibles, mejores restaurantes, estancias, itinerarios detallados y consejos prácticos.',
          inLanguage: 'es-ES',
          isPartOf: {
            '@type': 'WebSite',
            '@id': 'https://www.nassohcar.com#website'
          },
          about: {
            '@type': 'Place',
            name: 'Tánger'
          },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: 'https://www.nassohcar.com/images/guides/guide-tanger-complet.jpg'
          },
          datePublished: '2024-01-01T00:00:00.000Z',
          dateModified: new Date().toISOString(),
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Inicio',
                item: 'https://www.nassohcar.com/es'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Guías',
                item: 'https://www.nassohcar.com/es/guias'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Guía Completa de Tánger',
                item: 'https://www.nassohcar.com/es/guias/guia-tanger-completa'
              }
            ]
          }
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.nassohcar.com#website',
          url: 'https://www.nassohcar.com',
          name: 'Nassoh Car - Alquiler de Coches en Marruecos',
          description: 'Alquiler de coches en Marruecos con Nassoh Car. Vehículos de calidad, servicio profesional y precios competitivos para todos sus viajes.',
          publisher: {
            '@type': 'Organization',
            '@id': 'https://www.nassohcar.com#organization'
          },
          inLanguage: 'es-ES',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.nassohcar.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }
      ]} />

      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/guides/guide-tanger-complet.jpg"
          alt="Tánger Marruecos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <Link
            href="/es/guias"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a las Guías
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Guía Completa de Tánger
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Descubra la Perla del Norte de Marruecos: atracciones imprescindibles, restaurantes auténticos,
              estancias de calidad y consejos prácticos para un viaje inolvidable.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">🏛️ Atracciones</span>
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">🍽️ Restaurantes</span>
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">🗺️ Itinerarios</span>
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">⏱️ Lectura 12 min</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          <section className="mb-12">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tánger de un Vistazo</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Ubicación</h3>
                  <p className="text-gray-600">Norte de Marruecos, Estrecho de Gibraltar</p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Duración Recomendada</h3>
                  <p className="text-gray-600">Al menos 2–3 días</p>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Lo Destacado</h3>
                  <p className="text-gray-600">Medina, Kasbah, Cabo Espartel</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Atracciones Imprescindibles</h2>
            
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
                      <h4 className="font-semibold text-gray-900 mb-2">Lo Destacado</h4>
                      <ul className="space-y-1">
                        {attraction.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-gray-600 text-sm">• {highlight}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <Clock className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-gray-700">Duración: {attraction.duration}</span>
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

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Dónde Comer en Tánger</h2>
            
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
                      <span className="text-gray-700">Especialidad: {restaurant.specialty}</span>
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

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Itinerarios Sugeridos</h2>
            
            <div className="space-y-6">
              {itinerarios.map((itinerary: { day: string; title: string; activities: string[] }, index: number) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{itinerary.day}: {itinerary.title}</h3>
                  <ul className="space-y-2">
                    {itinerary.activities.map((activity: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos Prácticos</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {practicalTips.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <category.icon className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {category.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">¿Listo para Descubrir Tánger?</h2>
              <p className="text-blue-100 mb-6">
                Reserve su coche de alquiler ideal para explorar la ciudad y sus alrededores con total libertad.
              </p>
              <Link 
                href="/es" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Ver Vehículos Disponibles
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
