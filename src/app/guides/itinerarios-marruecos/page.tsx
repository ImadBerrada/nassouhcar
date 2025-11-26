import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Camera, Clock, Star, Mountain, Waves, TreePine, Building, Users } from 'lucide-react'
import StructuredData from '@/components/StructuredData'
import Breadcrumb from '@/components/Breadcrumb'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

export const metadata: Metadata = {
  title: 'Itinerarios Marruecos 2024 : Rutas Completas de 7 a 15 Días | Nassoh Car',
  description: 'Descubre los mejores itinerarios de Marruecos 2024 : circuitos de 7, 10 y 15 días incluyendo Marrakech, Fez, Sahara, costa atlántica. Guías detalladas con consejos prácticos y alquiler de coches.',
  keywords: 'itinerarios Marruecos, circuitos Marruecos, viaje Marruecos, road trip Marruecos, itinerario 7 días Marruecos, circuito 10 días Marruecos, viaje 15 días Marruecos, Marrakech Fez Sahara, costa atlántica Marruecos, alquiler coche Marruecos',
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
    canonical: 'https://www.nassohcar.com/guides/itinerarios-marruecos',
    languages: generateHreflangLinks('/guides/itinerarios-marruecos')
  }
}

const itineraries = [
  {
    duration: '7 Días',
    title: 'Ciudades Imperiales Clásicas',
    description: 'Perfecto para primera visita - explora las cuatro ciudades imperiales históricas',
    difficulty: 'Fácil',
    distance: '1,200 km',
    highlights: ['Casablanca', 'Rabat', 'Meknes', 'Fez', 'Marrakech'],
    days: [
      {
        day: 1,
        city: 'Casablanca',
        activities: ['Llegada al aeropuerto', 'Mezquita Hassan II', 'Corniche de Casablanca'],
        accommodation: 'Hotel en Casablanca'
      },
      {
        day: 2,
        city: 'Rabat',
        activities: ['Kasbah de los Udayas', 'Torre Hassan', 'Mausoleo Mohammed V'],
        accommodation: 'Hotel en Rabat'
      },
      {
        day: 3,
        city: 'Meknes',
        activities: ['Bab Mansour', 'Mausoleo Moulay Ismail', 'Ruinas de Volubilis'],
        accommodation: 'Hotel en Meknes'
      },
      {
        day: 4,
        city: 'Fez',
        activities: ['Medina de Fez', 'Universidad Al Quaraouiyine', 'Curtidurías'],
        accommodation: 'Riad en Fez'
      },
      {
        day: 5,
        city: 'Fez - Marrakech',
        activities: ['Viaje por las montañas del Atlas Medio', 'Llegada a Marrakech'],
        accommodation: 'Riad en Marrakech'
      },
      {
        day: 6,
        city: 'Marrakech',
        activities: ['Plaza Jemaa el-Fnaa', 'Palacio Bahia', 'Jardines Majorelle'],
        accommodation: 'Riad en Marrakech'
      },
      {
        day: 7,
        city: 'Marrakech - Casablanca',
        activities: ['Últimas compras', 'Traslado al aeropuerto', 'Salida'],
        accommodation: 'Vuelo de salida'
      }
    ]
  },
  {
    duration: '10 Días',
    title: 'Gran Tour con Desierto',
    description: 'Combina ciudades imperiales con la experiencia del desierto del Sahara',
    difficulty: 'Moderado',
    distance: '2,100 km',
    highlights: ['Ciudades Imperiales', 'Desierto Sahara', 'Gargantas del Todra', 'Kasbah Ait Ben Haddou'],
    days: [
      {
        day: 1,
        city: 'Casablanca',
        activities: ['Llegada', 'Mezquita Hassan II', 'Paseo por la ciudad'],
        accommodation: 'Hotel en Casablanca'
      },
      {
        day: 2,
        city: 'Casablanca - Fez',
        activities: ['Viaje a Fez vía Meknes', 'Visita rápida a Meknes'],
        accommodation: 'Riad en Fez'
      },
      {
        day: 3,
        city: 'Fez',
        activities: ['Día completo explorando la medina de Fez'],
        accommodation: 'Riad en Fez'
      },
      {
        day: 4,
        city: 'Fez - Merzouga',
        activities: ['Viaje al desierto vía Ifrane y Midelt'],
        accommodation: 'Campamento en el desierto'
      },
      {
        day: 5,
        city: 'Merzouga - Tinghir',
        activities: ['Amanecer en dunas', 'Gargantas del Todra'],
        accommodation: 'Hotel en Tinghir'
      },
      {
        day: 6,
        city: 'Tinghir - Ouarzazate',
        activities: ['Valle del Dadès', 'Kasbah Ait Ben Haddou'],
        accommodation: 'Hotel en Ouarzazate'
      },
      {
        day: 7,
        city: 'Ouarzazate - Marrakech',
        activities: ['Cruce del Alto Atlas', 'Llegada a Marrakech'],
        accommodation: 'Riad en Marrakech'
      },
      {
        day: 8,
        city: 'Marrakech',
        activities: ['Exploración completa de Marrakech'],
        accommodation: 'Riad en Marrakech'
      },
      {
        day: 9,
        city: 'Marrakech - Rabat',
        activities: ['Viaje a Rabat', 'Visita de la capital'],
        accommodation: 'Hotel en Rabat'
      },
      {
        day: 10,
        city: 'Rabat - Casablanca',
        activities: ['Regreso a Casablanca', 'Salida'],
        accommodation: 'Vuelo de salida'
      }
    ]
  },
  {
    duration: '14 Días',
    title: 'Marruecos Completo',
    description: 'Experiencia completa incluyendo costa, montañas, desierto y ciudades',
    difficulty: 'Avanzado',
    distance: '3,500 km',
    highlights: ['Todo Marruecos', 'Costa Atlántica', 'Montañas Atlas', 'Desierto Sahara', 'Ciudades Imperiales'],
    days: [
      {
        day: 1,
        city: 'Casablanca',
        activities: ['Llegada', 'Mezquita Hassan II'],
        accommodation: 'Hotel en Casablanca'
      },
      {
        day: 2,
        city: 'Casablanca - Rabat',
        activities: ['Capital de Marruecos', 'Sitios UNESCO'],
        accommodation: 'Hotel en Rabat'
      },
      {
        day: 3,
        city: 'Rabat - Tánger',
        activities: ['Ciudad del Estrecho', 'Cuevas de Hércules'],
        accommodation: 'Hotel en Tánger'
      },
      {
        day: 4,
        city: 'Tánger - Chefchaouen',
        activities: ['Ciudad Azul', 'Montañas del Rif'],
        accommodation: 'Hotel en Chefchaouen'
      },
      {
        day: 5,
        city: 'Chefchaouen - Fez',
        activities: ['Viaje a Fez', 'Primera exploración'],
        accommodation: 'Riad en Fez'
      },
      {
        day: 6,
        city: 'Fez',
        activities: ['Día completo en la medina'],
        accommodation: 'Riad en Fez'
      },
      {
        day: 7,
        city: 'Fez - Merzouga',
        activities: ['Viaje al desierto'],
        accommodation: 'Campamento desierto'
      },
      {
        day: 8,
        city: 'Merzouga',
        activities: ['Experiencia completa del desierto'],
        accommodation: 'Campamento desierto'
      },
      {
        day: 9,
        city: 'Merzouga - Tinghir',
        activities: ['Gargantas del Todra'],
        accommodation: 'Hotel en Tinghir'
      },
      {
        day: 10,
        city: 'Tinghir - Ouarzazate',
        activities: ['Valle del Dadès', 'Estudios de cine'],
        accommodation: 'Hotel en Ouarzazate'
      },
      {
        day: 11,
        city: 'Ouarzazate - Marrakech',
        activities: ['Ait Ben Haddou', 'Alto Atlas'],
        accommodation: 'Riad en Marrakech'
      },
      {
        day: 12,
        city: 'Marrakech',
        activities: ['Exploración completa'],
        accommodation: 'Riad en Marrakech'
      },
      {
        day: 13,
        city: 'Marrakech - Essaouira',
        activities: ['Ciudad costera', 'Puerto pesquero'],
        accommodation: 'Hotel en Essaouira'
      },
      {
        day: 14,
        city: 'Essaouira - Casablanca',
        activities: ['Regreso y salida'],
        accommodation: 'Vuelo de salida'
      }
    ]
  }
]

const themes = [
  {
    title: 'Aventura y Naturaleza',
    icon: 'Mountain',
    description: 'Para amantes del trekking, escalada y actividades al aire libre',
    destinations: ['Alto Atlas', 'Todra Gorges', 'Desierto Sahara', 'Costa Atlántica'],
    activities: ['Trekking en Atlas', 'Sandboarding', 'Escalada en roca', 'Surf en Essaouira']
  },
  {
    title: 'Cultura e Historia',
    icon: 'Building',
    description: 'Inmersión profunda en la rica historia y cultura marroquí',
    destinations: ['Fez', 'Meknes', 'Marrakech', 'Rabat'],
    activities: ['Visitas a medinas', 'Museos', 'Sitios arqueológicos', 'Talleres artesanales']
  },
  {
    title: 'Relajación y Bienestar',
    icon: 'Waves',
    description: 'Enfoque en relajación, spas y experiencias de bienestar',
    destinations: ['Marrakech', 'Essaouira', 'Agadir', 'Atlas'],
    activities: ['Hammams tradicionales', 'Yoga', 'Spas de lujo', 'Retiros de bienestar']
  },
  {
    title: 'Gastronomía',
    icon: 'Users',
    description: 'Descubre la increíble cocina marroquí y sus tradiciones',
    destinations: ['Marrakech', 'Fez', 'Casablanca', 'Tánger'],
    activities: ['Clases de cocina', 'Tours gastronómicos', 'Mercados locales', 'Cenas tradicionales']
  }
]

const planningTips = [
  {
    category: 'Mejor Época para Viajar',
    tips: [
      'Primavera (marzo-mayo): Clima ideal, flores en el Atlas',
      'Otoño (septiembre-noviembre): Temperaturas agradables',
      'Invierno (diciembre-febrero): Fresco pero soleado, ideal para el sur',
      'Verano (junio-agosto): Caluroso, mejor para la costa y montañas'
    ]
  },
  {
    category: 'Transporte',
    tips: [
      'Alquiler de coche: Máxima flexibilidad para itinerarios personalizados',
      'Trenes: Cómodos entre ciudades principales',
      'Autobuses: Económicos pero menos flexibles',
      'Vuelos domésticos: Para distancias largas'
    ]
  },
  {
    category: 'Alojamiento',
    tips: [
      'Riads: Experiencia auténtica en medinas',
      'Hoteles modernos: Comodidades occidentales',
      'Campamentos del desierto: Experiencia única',
      'Kasbahs: Alojamiento histórico en el sur'
    ]
  },
  {
    category: 'Presupuesto Diario',
    tips: [
      'Económico: 30-50€ por persona',
      'Medio: 50-100€ por persona',
      'Lujo: 100-200€ por persona',
      'Ultra-lujo: 200€+ por persona'
    ]
  }
]

export default function MoroccoItinerariesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Itinerarios de Marruecos 2024: Guía Completa de Rutas de Viaje",
    "description": "Descubre los mejores itinerarios para viajar por Marruecos: rutas de 7, 10 y 14 días, ciudades imperiales, desierto del Sahara, costa atlántica y montañas del Atlas.",
    "author": {
      "@type": "Organization",
      "name": "Nassoh Car"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nassoh Car",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nassohcar.com/nassouh.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-12-01",
    "url": "https://www.nassohcar.com/guides/itinerarios-marruecos",
    "image": "https://www.nassohcar.com/tangier.webp",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.nassohcar.com/guides/itinerarios-marruecos"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <StructuredData type="@graph" data={[structuredData]} />
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Inicio', href: '/' },
          { label: 'Guías', href: '/guides' },
          { label: 'Itinerarios Marruecos', href: '/guides/itinerarios-marruecos' }
        ]} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">
              Itinerarios de Marruecos 2024
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre los mejores itinerarios para explorar Marruecos, desde rutas clásicas hasta aventuras épicas que combinan ciudades imperiales, desierto del Sahara y paisajes espectaculares.
          </p>
        </div>

        {/* Main Itineraries */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Itinerarios Principales
          </h2>
          <div className="space-y-8">
            {itineraries.map((itinerary, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {itinerary.title} - {itinerary.duration}
                      </h3>
                      <p className="text-gray-600 mb-4">{itinerary.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center text-blue-600">
                          <Clock className="h-4 w-4 mr-1" />
                          {itinerary.duration}
                        </span>
                        <span className="flex items-center text-green-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          {itinerary.distance}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          itinerary.difficulty === 'Fácil' ? 'bg-green-100 text-green-800' :
                          itinerary.difficulty === 'Moderado' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {itinerary.difficulty}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <div className="flex flex-wrap gap-2">
                        {itinerary.highlights.map((highlight, hIndex) => (
                          <span key={hIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {itinerary.days.map((day, dayIndex) => (
                      <div key={dayIndex} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full mr-2">
                            Día {day.day}
                          </span>
                          <h4 className="font-semibold text-gray-900 text-sm">{day.city}</h4>
                        </div>
                        <ul className="text-xs text-gray-600 space-y-1 mb-2">
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              {activity}
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-gray-500 italic">{day.accommodation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Themes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Temas de Viaje
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {themes.map((theme, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {theme.icon === 'Mountain' && <Mountain className="h-8 w-8 text-green-600 mr-3" />}
                  {theme.icon === 'Building' && <Building className="h-8 w-8 text-purple-600 mr-3" />}
                  {theme.icon === 'Waves' && <Waves className="h-8 w-8 text-blue-600 mr-3" />}
                  {theme.icon === 'Users' && <Users className="h-8 w-8 text-orange-600 mr-3" />}
                  <h3 className="text-xl font-bold text-gray-900">{theme.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{theme.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Destinos Principales:</h4>
                  <div className="flex flex-wrap gap-2">
                    {theme.destinations.map((destination, destIndex) => (
                      <span key={destIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                        {destination}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Actividades:</h4>
                  <ul className="space-y-1">
                    {theme.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="text-sm text-gray-600 flex items-start">
                        <div className="w-1 h-1 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Planning Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Consejos de Planificación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {planningTips.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start text-sm text-gray-700">
                      <Star className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Distance Matrix */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Distancias entre Ciudades Principales
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Ciudad</th>
                  <th className="text-center p-2 font-semibold">Casablanca</th>
                  <th className="text-center p-2 font-semibold">Marrakech</th>
                  <th className="text-center p-2 font-semibold">Fez</th>
                  <th className="text-center p-2 font-semibold">Tánger</th>
                  <th className="text-center p-2 font-semibold">Ouarzazate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Casablanca', '-', '240km', '300km', '350km', '440km'],
                  ['Marrakech', '240km', '-', '530km', '590km', '200km'],
                  ['Fez', '300km', '530km', '-', '200km', '730km'],
                  ['Tánger', '350km', '590km', '200km', '-', '790km'],
                  ['Ouarzazate', '440km', '200km', '730km', '790km', '-']
                ].map((row, index) => (
                  <tr key={index} className="border-b">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className={`p-2 ${cellIndex === 0 ? 'font-semibold' : 'text-center'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Listo para su Aventura Marroquí?</h2>
          <p className="text-xl mb-6 opacity-90">
            Alquile un vehículo confiable y explore Marruecos siguiendo nuestros itinerarios recomendados.
          </p>
          <Link 
            href="/fleet"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Ver Nuestra Flota
            <ArrowLeft className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}