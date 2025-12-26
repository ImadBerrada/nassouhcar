import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calculator, Car, Home, Utensils, MapPin, CreditCard, TrendingUp, AlertCircle } from 'lucide-react'
import StructuredData from '@/app/es/components/StructuredData'

export const metadata: Metadata = {
  title: 'Presupuesto Viaje Marruecos 2024: Guía Completa de Costos y Consejos | Nassoh Car',
  description: 'Guía completa del presupuesto de viaje a Marruecos 2024: costos detallados de alojamiento, transporte, comida, actividades. Consejos para ahorrar y planificar su presupuesto según su estilo de viaje.',
  keywords: 'presupuesto viaje Marruecos, costo viaje Marruecos, precio viaje Marruecos, presupuesto vacaciones Marruecos, cuánto cuesta viaje Marruecos, presupuesto mochilero Marruecos, viaje barato Marruecos, ahorrar viaje Marruecos, planificar presupuesto Marruecos',
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
    canonical: 'https://www.nassohcar.com/es/guias/presupuesto-viaje-marruecos',
  },
  openGraph: {
    title: 'Presupuesto Viaje Marruecos 2024: Guía Completa de Costos y Consejos de Ahorro',
    description: 'Guía completa 2024 para planificar su presupuesto de viaje a Marruecos: costos detallados de alquiler de coche, alojamiento, comidas, actividades. Consejos prácticos para ahorrar y optimizar su presupuesto de vacaciones.',
    url: 'https://www.nassohcar.com/es/guias/presupuesto-viaje-marruecos',
    siteName: 'Nassoh Car - Alquiler de Coches en Marruecos',
    images: [
      {
        url: 'https://www.nassohcar.com/images/guides/budget-voyage-maroc.jpg',
        width: 1200,
        height: 630,
        alt: 'Guía presupuesto viaje Marruecos 2024 - Costos y consejos de ahorro'
      }
    ],
    locale: 'es_ES',
    type: 'article',
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    section: 'Guías de Viaje',
    tags: ['Presupuesto Marruecos', 'Viaje Marruecos', 'Alquiler Coche', 'Ahorro Viaje', 'Costos Marruecos']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Presupuesto Viaje Marruecos 2024: Guía Completa de Costos',
    description: 'Guía completa para planificar su presupuesto de viaje a Marruecos: costos detallados y consejos de ahorro.',
    images: ['https://www.nassohcar.com/images/guides/budget-voyage-maroc.jpg'],
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

const budgetCategories = [
  {
    category: "Alquiler de Coches",
    icon: Car,
    items: [
      { item: "Coche económico", price: "200-300 DH/día", euro: "18-27€/día" },
      { item: "Coche compacto", price: "300-450 DH/día", euro: "27-40€/día" },
      { item: "SUV familiar", price: "450-600 DH/día", euro: "40-54€/día" },
      { item: "Coche premium", price: "600-1000 DH/día", euro: "54-90€/día" },
      { item: "Seguro completo", price: "+50-100 DH/día", euro: "+4-9€/día" }
    ]
  },
  {
    category: "Combustible",
    icon: TrendingUp,
    items: [
      { item: "Gasolina (litro)", price: "14-16 DH", euro: "1.25-1.45€" },
      { item: "Diésel (litro)", price: "12-14 DH", euro: "1.10-1.25€" },
      { item: "Tanque lleno (50L)", price: "600-800 DH", euro: "54-72€" },
      { item: "Consumo medio", price: "100km = 60-80 DH", euro: "100km = 5-7€" }
    ]
  },
  {
    category: "Alojamiento",
    icon: Home,
    items: [
      { item: "Albergue juvenil", price: "80-150 DH/noche", euro: "7-14€/noche" },
      { item: "Hotel 2-3 estrellas", price: "200-400 DH/noche", euro: "18-36€/noche" },
      { item: "Hotel 4 estrellas", price: "500-800 DH/noche", euro: "45-72€/noche" },
      { item: "Riad premium", price: "800-1500 DH/noche", euro: "72-135€/noche" },
      { item: "Camping", price: "50-100 DH/noche", euro: "4-9€/noche" }
    ]
  },
  {
    category: "Restauración",
    icon: Utensils,
    items: [
      { item: "Comida callejera", price: "10-30 DH", euro: "1-3€" },
      { item: "Restaurante local", price: "50-100 DH", euro: "4-9€" },
      { item: "Restaurante turístico", price: "100-200 DH", euro: "9-18€" },
      { item: "Restaurante de gama alta", price: "200-400 DH", euro: "18-36€" },
      { item: "Té a la menta", price: "5-15 DH", euro: "0.5-1.5€" }
    ]
  }
]

const budgetTips = [
  {
    title: "Reserve con antelación",
    description: "Ahorre hasta un 30% en el alquiler de coches reservando 2-3 semanas antes.",
    savings: "Ahorro: 30%"
  },
  {
    title: "Evite los aeropuertos",
    description: "Las agencias en la ciudad suelen ser un 20% más baratas que las de los aeropuertos.",
    savings: "Ahorro: 20%"
  },
  {
    title: "Coma local",
    description: "Los restaurantes locales ofrecen comidas auténticas a precios reducidos.",
    savings: "Ahorro: 50%"
  },
  {
    title: "Negocie los precios",
    description: "En los zocos y mercados, la negociación puede reducir los precios un 30-50%.",
    savings: "Ahorro: 30-50%"
  }
]

export default function PresupuestoViajeMarruecosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData type="@graph" data={[
        {
          "@type": "Article",
          "@id": "https://www.nassohcar.com/es/guias/presupuesto-viaje-marruecos#article",
          "headline": "Presupuesto Viaje Marruecos 2024: Guía Completa de Costos",
          "description": "Planifique su presupuesto de viaje a Marruecos 2024 con nuestra guía detallada: costos de alquiler de coche, gasolina, alojamiento, comidas, actividades, transportes. Consejos para ahorrar y optimizar su presupuesto de vacaciones en Marruecos.",
          "image": "https://www.nassohcar.com/images/guides/budget-voyage-maroc.jpg",
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
            "@id": "https://www.nassohcar.com/es/guias/presupuesto-viaje-marruecos"
          },
          "articleSection": "Guías de Viaje",
          "keywords": "Presupuesto Marruecos, Viaje Marruecos, Alquiler Coche, Ahorro Viaje, Costos Marruecos",
          "inLanguage": "es-ES",
          "about": [
            {
              "@type": "Thing",
              "name": "Presupuesto Viaje Marruecos",
              "description": "Guía completa de costos para viajar a Marruecos"
            },
            {
              "@type": "Thing", 
              "name": "Alquiler Coche Marruecos",
              "description": "Costos y consejos para alquilar un coche en Marruecos"
            }
          ]
        },
        {
          "@type": "TravelGuide",
          "@id": "https://www.nassohcar.com/es/guias/presupuesto-viaje-marruecos#travelguide",
          "name": "Guía Presupuesto Viaje Marruecos 2024",
          "description": "Guía completa para planificar y optimizar su presupuesto de viaje a Marruecos",
          "url": "https://www.nassohcar.com/es/guias/presupuesto-viaje-marruecos",
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
          "audience": {
            "@type": "Audience",
            "audienceType": "Viajeros"
          }
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
          "@id": "https://www.nassohcar.com/es/guias/presupuesto-viaje-marruecos",
          "url": "https://www.nassohcar.com/es/guias/presupuesto-viaje-marruecos",
          "name": "Presupuesto Viaje Marruecos 2024: Guía Completa de Costos | Nassoh Car",
          "description": "Planifique su presupuesto de viaje a Marruecos 2024 con nuestra guía detallada: costos de alquiler de coche, gasolina, alojamiento, comidas, actividades, transportes.",
          "inLanguage": "es-ES",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://www.nassohcar.com#website"
          },
          "about": {
            "@id": "https://www.nassohcar.com/es/guias/presupuesto-viaje-marruecos#article"
          },
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
                "name": "Presupuesto Viaje Marruecos",
                "item": "https://www.nassohcar.com/es/guias/presupuesto-viaje-marruecos"
              }
            ]
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://www.nassohcar.com#website",
          "url": "https://www.nassohcar.com",
          "name": "Nassoh Car - Alquiler de Coches en Marruecos",
          "description": "Alquiler de coches en Marruecos con Nassoh Car. Vehículos recientes, precios competitivos y servicio de calidad.",
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
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/es" className="text-blue-600 hover:text-blue-800">
              Inicio
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/es/guias" className="text-blue-600 hover:text-blue-800">
              Guías
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Presupuesto Viaje Marruecos</span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link href="/es/guias" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a las guías
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Presupuesto Viaje Marruecos 2024
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Planifique su presupuesto de viaje a Marruecos con nuestra guía detallada. Descubra todos los costos: 
              alquiler de coche, gasolina, alojamiento, comidas y actividades.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">📊 Guía Presupuesto</span>
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">💰 Consejos Ahorro</span>
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">🚗 Alquiler Coche</span>
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">⏱️ Lectura 8 min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Budget Overview */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Calculator className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Presupuesto Estimado por Día</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold text-green-600 mb-2">Presupuesto Económico</h3>
                  <div className="text-3xl font-bold text-gray-900">400-600 DH</div>
                  <div className="text-lg text-gray-600">36-54€ / día</div>
                  <p className="text-sm text-gray-500 mt-2">Albergue + coche económico + comidas locales</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold text-blue-600 mb-2">Presupuesto Confort</h3>
                  <div className="text-3xl font-bold text-gray-900">800-1200 DH</div>
                  <div className="text-lg text-gray-600">72-108€ / día</div>
                  <p className="text-sm text-gray-500 mt-2">Hotel 3* + coche compacto + restaurantes</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold text-purple-600 mb-2">Presupuesto Premium</h3>
                  <div className="text-3xl font-bold text-gray-900">1500-2500 DH</div>
                  <div className="text-lg text-gray-600">135-225€ / día</div>
                  <p className="text-sm text-gray-500 mt-2">Riad premium + SUV + restaurantes de gama alta</p>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Budget Categories */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Detalle de Costos por Categoría</h2>
            
            <div className="space-y-8">
              {budgetCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                  
                  <div className="grid gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-700 font-medium">{item.item}</span>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">{item.price}</div>
                          <div className="text-sm text-gray-500">{item.euro}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Money Saving Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos para Ahorrar</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {budgetTips.map((tip, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">{tip.title}</h3>
                  <p className="text-gray-700 mb-4">{tip.description}</p>
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tip.savings}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Costs */}
          <section className="mb-12">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <AlertCircle className="w-8 h-8 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Costos Adicionales a Prever</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Gastos de Ruta</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Peajes autopistas: 5-20 DH por tramo</li>
                    <li>• Aparcamiento: 5-10 DH/hora en ciudad</li>
                    <li>• Lavado coche: 20-50 DH</li>
                    <li>• Propinas guardias: 2-5 DH</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Actividades y Visitas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Entrada monumentos: 10-70 DH</li>
                    <li>• Guía turístico: 200-500 DH/día</li>
                    <li>• Excursiones: 300-800 DH/persona</li>
                    <li>• Hammam: 50-200 DH</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">¿Listo para Explorar Marruecos?</h2>
              <p className="text-blue-100 mb-6">
                Reserve su coche de alquiler ahora y aproveche nuestras tarifas preferenciales.
              </p>
              <Link 
                href="/es" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Reservar Ahora
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
