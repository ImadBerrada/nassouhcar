import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Star, Car, ArrowLeft, MapPin, Navigation } from 'lucide-react'
import Breadcrumb, { BreadcrumbStructuredData } from '@/app/es/components/Breadcrumb'
import StructuredData from '@/app/es/components/StructuredData'

interface CityPageProps {
  params: Promise<{
    ciudad: string
  }>
}

interface CityData {
  name: string
  title: string
  description: string
  image: string
  readTime: string
  category: string
  date: string
  content: {
    introduction: string
    sections: {
      title: string
      content: string
      tips?: string[]
    }[]
    conclusion: string
  }
  highlights: string[]
  carRentalTips: string[]
  attractions: {
    name: string
    description: string
    distance: string
  }[]
}

const cityData: Record<string, CityData> = {
  tanger: {
    name: 'Tánger',
    title: 'Alquiler de Coches en Tánger: 5 Joyas Ocultas para Explorar en 2025',
    description: 'Descubra los secretos mejor guardados de Tánger con un coche de alquiler asequible y consejos locales.',
    image: '/tangier.webp',
    readTime: '6 min de lectura',
    category: 'Guías de Viaje',
    date: 'Enero 2025',
    content: {
      introduction:
        "Tánger, puerta de entrada entre Europa y África, se vuelve verdaderamente mágica con su propio vehículo. Desde cuevas antiguas hasta playas tranquilas, desbloquee lugares que solo los lugareños conocen.",
      sections: [
        {
          title: '1. Cuevas de Hércules – Misterios Antiguos',
          content:
            "A solo 14 km del centro de Tánger, las Cuevas de Hércules ofrecen una experiencia mística. La abertura natural frente al Atlántico se asemeja al mapa de África.",
          tips: ['Visite temprano para evitar multitudes', 'Lleve una linterna pequeña', 'Aparcamiento disponible en la entrada']
        },
        {
          title: '2. Cabo Espartel – Donde Dos Mares se Encuentran',
          content:
            "Conduzca hasta la punta noroeste de África donde el Atlántico se encuentra con el Mediterráneo. El faro histórico y las vistas costeras lo hacen perfecto para la fotografía al atardecer.",
          tips: ['Mejor al atardecer', 'Cafeterías cercanas', 'Fácil trayecto de 20 minutos desde el centro']
        },
        {
          title: '3. Arcila – El Paraíso de los Artistas',
          content:
            "A unos 46 km al sur de Tánger, Arcila es famosa por sus paredes encaladas y murales coloridos. La medina tiene fortificaciones portuguesas y un ambiente costero relajante.",
          tips: ['Festival anual de artes en verano', 'Aparcamiento gratuito cerca de la medina', 'Pruebe mariscos frescos']
        },
        {
          title: '4. Tetuán – La Paloma Blanca',
          content:
            "A unos 60 km de Tánger, Tetuán ofrece cultura auténtica y una de las medinas mejor conservadas de Marruecos con arquitectura andalusí.",
          tips: ['Visitas guiadas disponibles', 'Hammams tradicionales para relajarse', 'Gran artesanía en cuero y textiles']
        },
        {
          title: '5. Chefchaouen – La Perla Azul',
          content:
            "Dos horas a través de las montañas del Rif conducen a la icónica ciudad azul de Marruecos. El viaje es tan hermoso como el destino, con miradores a lo largo del camino.",
          tips: ['Las carreteras de montaña requieren conducción cuidadosa', 'Quédese a pasar la noche para la experiencia completa', 'Mejor luz temprano en la mañana']
        }
      ],
      conclusion:
        'Con un coche de alquiler, Tánger se convierte en su puerta de entrada a destinos extraordinarios del norte de Marruecos. Cada lugar ofrece experiencias únicas más allá del transporte público.'
    },
    highlights: [
      'Explore 5 joyas ocultas alrededor de Tánger',
      'Direcciones de conducción detalladas e información de aparcamiento',
      'Consejos de expertos locales',
      'Mejores momentos para visitar cada lugar'
    ],
    carRentalTips: [
      'Reserve con antelación para mejores tarifas',
      'Elija un vehículo adecuado para carreteras de montaña',
      'La navegación GPS es esencial',
      'Lleve su licencia e identificación con usted',
      'Estaciones de servicio disponibles en todas las rutas'
    ],
    attractions: [
      { name: "Cuevas de Hércules", description: 'Cuevas antiguas con vistas al Atlántico', distance: '14 km del centro' },
      { name: "Cabo Espartel", description: 'Faro en la punta noroeste de África', distance: '20 km del centro' },
      { name: "Arcila", description: 'Pueblo costero de arte con murales', distance: '46 km al sur de Tánger' },
      { name: "Tetuán", description: 'Medina listada por la UNESCO y herencia andalusí', distance: '60 km de Tánger' },
      { name: "Chefchaouen", description: 'Icónica ciudad azul en el Rif', distance: '120 km (unas 2 horas)' }
    ]
  }
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const resolved = await params
  const city = cityData[resolved.ciudad]
  if (!city) {
    return {
      title: 'Ciudad no encontrada | Nassoh Car Blog',
      description: 'Este destino no existe en nuestra guía.'
    }
  }
  return {
    title: `${city.title} | Nassoh Car`,
    description: city.description,
    keywords: `${resolved.ciudad}, alquiler coches, guía Tánger, Nassoh Car, viaje Marruecos`,
    openGraph: {
      title: `${city.title} | Nassoh Car`,
      description: city.description,
      type: 'article',
      url: `https://www.nassohcar.com/es/blog/${resolved.ciudad}`,
      images: [{ url: city.image }]
    },
    alternates: {
      canonical: `https://www.nassohcar.com/es/blog/${resolved.ciudad}`
    }
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const resolved = await params
  const city = cityData[resolved.ciudad]
  if (!city) {
    notFound()
  }

  const structuredData = {
    title: city.title,
    description: city.description,
    image: `https://www.nassohcar.com${city.image}`,
    url: `https://www.nassohcar.com/es/blog/${resolved.ciudad}`,
    datePublished: city.date,
    dateModified: new Date().toISOString().split('T')[0],
    keywords: `${resolved.ciudad}, alquiler coches, guía viaje, Nassoh Car, ${city.name}, Marruecos, atracciones, viaje por carretera`
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb items={[{ label: 'Inicio', href: '/es' }, { label: 'Blog', href: '/es/blog' }, { label: city.name }]} />
        </div>
      </div>

      <div className="relative h-96 bg-gradient-to-r from-slate-900 to-slate-700">
        <Image src={city.image} alt={city.title} fill className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <div className="flex items-center mb-3 text-sm text-gray-200">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{city.date}</span>
              <span className="mx-3">•</span>
              <Clock className="h-4 w-4 mr-2" />
              <span>{city.readTime}</span>
              <span className="mx-3">•</span>
              <Star className="h-4 w-4 mr-2 text-amber-400" />
              <span>{city.category}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{city.title}</h1>
            <p className="text-gray-200 max-w-3xl">{city.description}</p>
            <div className="mt-6 flex gap-4">
              <Link href="/es" className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors inline-flex items-center">
                <Car className="h-5 w-5 mr-2" />
                Reservar Ahora
              </Link>
              <Link href="/es/blog" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors inline-flex items-center">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Leer Más Guías
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {city.highlights.map((h, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-3">
                <Navigation className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Destacado</h3>
              </div>
              <p className="text-gray-700 text-sm">{h}</p>
            </div>
          ))}
        </div>

        <article className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-8">{city.content.introduction}</p>
          {city.content.sections.map((section, idx) => (
            <div key={idx} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-gray-700 mb-4">{section.content}</p>
              {section.tips && (
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <h3 className="font-semibold text-blue-700 mb-2">Consejos</h3>
                  <ul className="list-disc ml-5 text-gray-700">
                    {section.tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Conclusión</h3>
            <p className="text-gray-700">{city.content.conclusion}</p>
          </div>
        </article>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Consejos de Alquiler</h3>
            <ul className="space-y-2 text-gray-700">
              {city.carRentalTips.map((t, i) => (
                <li key={i} className="flex items-start"><span className="text-green-600 font-bold mr-2">✓</span>{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Atracciones Cercanas</h3>
            <div className="space-y-3">
              {city.attractions.map((a, i) => (
                <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">{a.name}</p>
                    <p className="text-gray-700 text-sm">{a.description} • {a.distance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BreadcrumbStructuredData items={[{ label: 'Blog', href: '/es/blog' }, { label: city.title }]} />
      <StructuredData type="Article" data={structuredData} />
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(cityData).map((ciudad) => ({ ciudad }))
}
