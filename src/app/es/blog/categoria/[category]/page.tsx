import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, Eye, Clock } from 'lucide-react'
import Breadcrumb from '@/app/es/components/Breadcrumb'
import StructuredData from '@/app/es/components/StructuredData'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

const categoryData = {
  'aventura': {
    title: 'Aventura',
    description: 'Descubra aventuras extraordinarias en Marruecos con su coche de alquiler',
    keywords: 'aventura Marruecos, viaje por carretera aventura, exploración Marruecos, aventura coche alquiler'
  },
  'secretos-locales': {
    title: 'Secretos Locales',
    description: 'Los secretos mejor guardados de Marruecos revelados por expertos locales',
    keywords: 'secretos Marruecos, consejos locales, trucos viaje Marruecos, guías secretas'
  },
  'consejos-ahorro': {
    title: 'Consejos de Ahorro',
    description: 'Ahorre en su viaje a Marruecos con nuestros consejos expertos',
    keywords: 'ahorrar dinero Marruecos, consejos presupuesto, alquiler coches barato, consejos ahorro'
  },
  'transporte': {
    title: 'Transporte',
    description: 'Todo sobre transporte y alquiler de coches en Marruecos',
    keywords: 'transporte Marruecos, alquiler coches, consejos conducción Marruecos, movilidad'
  },
  'resenas-coches': {
    title: 'Reseñas de Coches',
    description: 'Reseñas detalladas de nuestra flota de vehículos de alquiler',
    keywords: 'reseñas alquiler coches, pruebas vehículos, comparativas coches Marruecos'
  },
  'exploracion-ciudad': {
    title: 'Exploración de la Ciudad',
    description: 'Explore las ciudades marroquíes con nuestras guías detalladas',
    keywords: 'exploración ciudades marruecos, guías urbanas, visitas ciudades marruecos'
  },
  'guias-viaje': {
    title: 'Guías de Viaje',
    description: 'Guías completas para viajar por Marruecos con confianza',
    keywords: 'guías viaje Marruecos, itinerarios Marruecos, consejos viaje'
  },
  'fotografia': {
    title: 'Fotografía',
    description: 'Consejos fotográficos y lugares para capturar su viaje',
    keywords: 'fotografía Marruecos, lugares fotos, consejos fotos viaje'
  },
  'consejos-seguridad': {
    title: 'Consejos de Seguridad',
    description: 'Viaje seguro en Marruecos con consejos de expertos',
    keywords: 'seguridad Marruecos, consejos seguridad viaje, conducción segura Marruecos'
  },
  'cultura-local': {
    title: 'Cultura Local',
    description: 'Descubra la rica cultura de Marruecos',
    keywords: 'cultura marroquí, tradiciones, patrimonio marroquí'
  }
} as const

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const category = categoryData[resolvedParams.category as keyof typeof categoryData]
  if (!category) {
    return {
      title: 'Categoría no encontrada | Nassoh Car Blog',
      description: 'Esta categoría no existe en nuestro blog.'
    }
  }
  return {
    title: `${category.title} | Nassoh Car Blog`,
    description: category.description,
    keywords: category.keywords,
    openGraph: {
      title: `${category.title} | Nassoh Car Blog`,
      description: category.description,
      type: 'website',
      url: `https://www.nassohcar.com/es/blog/categoria/${resolvedParams.category}`,
      siteName: 'Nassoh Car'
    },
    alternates: {
      canonical: `https://www.nassohcar.com/es/blog/categoria/${resolvedParams.category}`
    }
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params
  const category = categoryData[resolvedParams.category as keyof typeof categoryData]
  if (!category) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${category.title} - Nassoh Car Blog`,
    "description": category.description,
    "url": `https://www.nassohcar.com/es/blog/categoria/${resolvedParams.category}`,
    "inLanguage": "es"
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <StructuredData type="@graph" data={[structuredData]} />
      <Breadcrumb
        items={[
          { label: 'Blog', href: '/es/blog' },
          { label: category.title, href: `/es/blog/categoria/${resolvedParams.category}` }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{category.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{category.description}</p>
        </div>

        <div className="flex justify-center mb-12">
          <Link 
            href="/es/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al Blog
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Aquí deberíamos filtrar y mostrar los posts de esta categoría */}
          {/* Por ahora mostraremos un mensaje si no hay posts o los posts estáticos si los tuviéramos */}
          <div className="col-span-full text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-200">
            <p className="text-gray-500 text-lg">Explora nuestros artículos sobre {category.title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
