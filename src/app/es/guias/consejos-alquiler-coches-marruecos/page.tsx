import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Car, Shield, CreditCard, AlertTriangle, CheckCircle, DollarSign, Calendar, Key, FileText } from 'lucide-react'
import StructuredData from '@/app/es/components/StructuredData'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

export const metadata: Metadata = {
  title: 'Consejos Alquiler Coche Marruecos 2024: Guía Completa | Nassoh Car',
  description: 'Guía experta para alquilar un coche en Marruecos: consejos prácticos, elección del vehículo, seguros, precios, trampas a evitar y trucos para ahorrar. Todo lo que necesita saber antes de reservar.',
  keywords: 'consejos alquiler coche Marruecos, alquilar coche Marruecos, seguro alquiler Marruecos, precio alquiler coche, evitar estafas alquiler, guía alquiler coche, comparador alquiler Marruecos, coche alquiler consejos',
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
    canonical: 'https://www.nassohcar.com/es/guías/consejos-alquiler-coches-marruecos',
    languages: generateHreflangLinks('/es/guías/consejos-alquiler-coches-marruecos')
  },
  openGraph: {
    title: 'Consejos Alquiler Coche Marruecos 2024: Guía Completa | Nassoh Car',
    description: 'Guía experta para alquilar un coche en Marruecos: consejos prácticos, seguros, precios y trampas a evitar. Ahorre hasta un 30% en su alquiler.',
    url: 'https://www.nassohcar.com/es/guías/consejos-alquiler-coches-marruecos',
    siteName: 'Nassoh Car - Alquiler de Coches en Marruecos',
    images: [
      {
        url: 'https://www.nassohcar.com/images/conseils-location-voiture-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Consejos para alquilar un coche en Marruecos - Guía completa 2024',
        type: 'image/jpeg',
      }
    ],
    locale: 'es_ES',
    type: 'article',
    publishedTime: '2024-01-10T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    section: 'Guías de Alquiler',
    tags: ['Alquiler Coche', 'Marruecos', 'Consejos', 'Seguro', 'Precio', 'Guía'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consejos Alquiler Coche Marruecos 2024: Guía Completa',
    description: 'Guía experta para alquilar un coche en Marruecos: consejos, seguros, precios y trampas a evitar.',
    images: ['https://www.nassohcar.com/images/conseils-location-voiture-twitter.jpg'],
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

const carTypes = [
  {
    type: "Coche Económico",
    examples: "Dacia Logan, Renault Symbol",
    bestFor: "Ciudad, trayectos cortos, presupuesto ajustado",
    pros: ["Precio asequible", "Consumo reducido", "Fácil de aparcar"],
    cons: ["Confort limitado", "Espacio restringido", "Potencia limitada"],
    price: "200-300 DH/día"
  },
  {
    type: "Coche Compacto",
    examples: "Renault Clio, Peugeot 208",
    bestFor: "Viajes medios, confort equilibrado",
    pros: ["Buen compromiso precio/confort", "Manejable en ciudad", "Maletero correcto"],
    cons: ["Espacio trasero limitado", "Menos adaptado a trayectos largos"],
    price: "300-450 DH/día"
  },
  {
    type: "SUV/4x4",
    examples: "Dacia Duster, Renault Kadjar",
    bestFor: "Montaña, pistas, familias",
    pros: ["Altura de conducción", "Tracción integral", "Espacio generoso"],
    cons: ["Consumo elevado", "Precio más alto", "Menos manejable"],
    price: "450-600 DH/día"
  },
  {
    type: "Monovolumen",
    examples: "Dacia Lodgy, Renault Scenic",
    bestFor: "Familias numerosas, viajes largos",
    pros: ["7 plazas", "Gran maletero", "Confort óptimo"],
    cons: ["Precio elevado", "Consumo importante", "Difícil de aparcar"],
    price: "500-700 DH/día"
  }
]

const insuranceTypes = [
  {
    name: "Responsabilidad Civil",
    coverage: "Daños causados a terceros",
    included: true,
    cost: "Incluida",
    recommendation: "Obligatoria por ley"
  },
  {
    name: "Exención de Daños por Colisión (CDW)",
    coverage: "Daños al vehículo alquilado",
    included: false,
    cost: "50-100 DH/día",
    recommendation: "Fuertemente recomendada"
  },
  {
    name: "Robo e Incendio",
    coverage: "Robo del vehículo e incendio",
    included: false,
    cost: "30-60 DH/día",
    recommendation: "Recomendada"
  },
  {
    name: "Asistencia en Carretera",
    coverage: "Asistencia 24h/24, vehículo de sustitución",
    included: false,
    cost: "40-80 DH/día",
    recommendation: "Muy útil"
  }
]

const bookingTips = [
  {
    title: "Reserve con Antelación",
    icon: Calendar,
    description: "Reserve 2-3 semanas antes para obtener las mejores tarifas",
    savings: "Hasta un 30% de ahorro",
    details: [
      "Mejor disponibilidad de vehículos",
      "Tarifas preferentes",
      "Posibilidad de cancelación gratuita",
      "Elección más amplia de vehículos"
    ]
  },
  {
    title: "Compare Precios",
    icon: DollarSign,
    description: "Utilice comparadores y negocie directamente",
    savings: "15-25% de ahorro",
    details: [
      "Verifique las inclusiones (seguro, kilometraje)",
      "Atención a los cargos ocultos",
      "Negocie para alquileres largos",
      "Pregunte por las promociones en curso"
    ]
  },
  {
    title: "Evite los Aeropuertos",
    icon: Car,
    description: "Las agencias en la ciudad suelen ser más baratas",
    savings: "10-20% de ahorro",
    details: [
      "Tasas de aeropuerto evitadas",
      "Más flexibilidad horaria",
      "Servicio más personalizado",
      "Negociación más fácil"
    ]
  },
  {
    title: "Verifique las Condiciones",
    icon: FileText,
    description: "Lea atentamente el contrato antes de firmar",
    savings: "Evita las malas sorpresas",
    details: [
      "Franquicia en caso de daño",
      "Kilometraje incluido",
      "Política de combustible",
      "Condiciones de cancelación"
    ]
  }
]

const commonTraps = [
  {
    trap: "Cargos Ocultos",
    description: "Cargos adicionales no mencionados al inicio",
    howToAvoid: [
      "Pida el precio total con impuestos",
      "Verifique todos los suplementos",
      "Lea las condiciones generales",
      "Confirme por escrito"
    ]
  },
  {
    trap: "Estado del Vehículo",
    description: "Daños existentes no señalados",
    howToAvoid: [
      "Inspeccione minuciosamente el vehículo",
      "Fotografíe todos los daños",
      "Haga anotar en el contrato",
      "Verifique el interior y el exterior"
    ]
  },
  {
    trap: "Combustible",
    description: "Política de combustible desfavorable",
    howToAvoid: [
      "Opte por 'lleno a lleno'",
      "Evite el prepago del combustible",
      "Guarde el ticket de la última gasolinera",
      "Devuelva con el mismo nivel"
    ]
  },
  {
    trap: "Seguro Excesivo",
    description: "Venta forzada de seguros inútiles",
    howToAvoid: [
      "Verifique su seguro personal",
      "Rechace educadamente los suplementos",
      "Negocie un paquete global",
      "Pida los detalles por escrito"
    ]
  }
]

const checklist = [
  {
    category: "Antes de Reservar",
    items: [
      "Comparar los precios de varias agencias",
      "Verificar las opiniones de clientes",
      "Leer las condiciones generales",
      "Confirmar las inclusiones (seguro, kilometraje)",
      "Verificar la política de cancelación"
    ]
  },
  {
    category: "En la Recogida",
    items: [
      "Verificar la identidad del arrendador",
      "Inspeccionar minuciosamente el vehículo",
      "Fotografiar los daños existentes",
      "Probar todos los equipamientos",
      "Verificar el nivel de combustible"
    ]
  },
  {
    category: "Durante el Alquiler",
    items: [
      "Respetar las condiciones del contrato",
      "Guardar todos los documentos en el vehículo",
      "Señalar inmediatamente cualquier problema",
      "Evitar las modificaciones no autorizadas",
      "Mantener el vehículo limpio"
    ]
  },
  {
    category: "En la Devolución",
    items: [
      "Limpiar el interior del vehículo",
      "Llenar el depósito de combustible",
      "Inspeccionar con el agente",
      "Recuperar todos sus efectos personales",
      "Conservar el acta de devolución"
    ]
  }
]

export default function ConsejosAlquilerCochePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.nassohcar.com/es/guías/consejos-alquiler-coches-marruecos#article",
        "isPartOf": {
          "@id": "https://www.nassohcar.com/es/guías/consejos-alquiler-coches-marruecos"
        },
        "author": {
          "@type": "Organization",
          "name": "Nassoh Car",
          "@id": "https://www.nassohcar.com/#organization"
        },
        "headline": "Consejos Alquiler Coche Marruecos 2024: Guía Completa",
        "description": "Guía experta para alquilar un coche en Marruecos: consejos prácticos, elección del vehículo, seguros, precios, trampas a evitar y trucos para ahorrar.",
        "datePublished": "2024-01-10T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.nassohcar.com/es/guías/consejos-alquiler-coches-marruecos"
        },
        "publisher": {
          "@id": "https://www.nassohcar.com/#organization"
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://www.nassohcar.com/images/conseils-location-voiture-og.jpg",
          "width": 1200,
          "height": 630
        },
        "articleSection": "Guías de Alquiler",
        "inLanguage": "es-ES",
        "keywords": ["consejos alquiler coche", "alquiler coche Marruecos", "seguro alquiler", "precio alquiler coche", "guía alquiler"]
      },
      {
        "@type": "HowTo",
        "@id": "https://www.nassohcar.com/es/guías/consejos-alquiler-coches-marruecos#howto",
        "name": "Cómo alquilar un coche en Marruecos",
        "description": "Guía paso a paso para alquilar un coche en Marruecos evitando las trampas",
        "image": "https://www.nassohcar.com/images/conseils-location-voiture-og.jpg",
        "totalTime": "PT30M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "MAD",
          "value": "200-700"
        },
        "supply": [
          {
            "@type": "HowToSupply",
            "name": "Permiso de conducir válido"
          },
          {
            "@type": "HowToSupply", 
            "name": "Tarjeta de crédito"
          },
          {
            "@type": "HowToSupply",
            "name": "Documento de identidad"
          }
        ],
        "step": [
          {
            "@type": "HowToStep",
            "name": "Comparar los precios",
            "text": "Utilice comparadores en línea y compare las ofertas de varias agencias",
            "url": "https://www.nassohcar.com/es/guías/consejos-alquiler-coches-marruecos#comparacion"
          },
          {
            "@type": "HowToStep",
            "name": "Elegir el vehículo",
            "text": "Seleccione el tipo de vehículo adaptado a sus necesidades y presupuesto",
            "url": "https://www.nassohcar.com/es/guías/consejos-alquiler-coches-marruecos#vehiculos"
          },
          {
            "@type": "HowToStep",
            "name": "Verificar los seguros",
            "text": "Examine las opciones de seguro y elija la cobertura apropiada",
            "url": "https://www.nassohcar.com/es/guías/consejos-alquiler-coches-marruecos#seguros"
          },
          {
            "@type": "HowToStep",
            "name": "Inspeccionar el vehículo",
            "text": "Verifique minuciosamente el estado del vehículo antes de la recogida",
            "url": "https://www.nassohcar.com/es/guías/consejos-alquiler-coches-marruecos#inspeccion"
          }
        ]
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
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nassohcar.com/es/guías/consejos-alquiler-coches-marruecos",
        "url": "https://www.nassohcar.com/es/guías/consejos-alquiler-coches-marruecos",
        "name": "Consejos Alquiler Coche Marruecos 2024: Guía Completa | Nassoh Car",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.nassohcar.com/#website"
        },
        "datePublished": "2024-01-10T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Guía experta para alquilar un coche en Marruecos: consejos prácticos, seguros, precios y trampas a evitar.",
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
              "name": "Consejos Alquiler Coche",
              "item": "https://www.nassohcar.com/es/guías/consejos-alquiler-coches-marruecos"
            }
          ]
        },
        "mainEntity": {
          "@id": "https://www.nassohcar.com/es/guías/consejos-alquiler-coches-marruecos#article"
        }
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
            <Link href="/es/guías" className="text-gray-500 hover:text-gray-700 transition-colors">
              Guías
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Consejos Alquiler Coche</span>
          </div>
        </div>
      </nav>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link href="/es/guías" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a las guías
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Consejos Alquiler Coche
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Guía completa para alquilar un coche en Marruecos con total tranquilidad: 
              elegir el vehículo adecuado, negociar los precios, evitar las trampas y optimizar su presupuesto.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-indigo-800/50 px-3 py-1 rounded-full">🚗 Tipos de Vehículos</span>
              <span className="bg-indigo-800/50 px-3 py-1 rounded-full">🛡️ Seguros</span>
              <span className="bg-indigo-800/50 px-3 py-1 rounded-full">💰 Ahorros</span>
              <span className="bg-indigo-800/50 px-3 py-1 rounded-full">⏱️ Lectura 12 min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Car Types */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Elegir el Vehículo Adecuado</h2>
            
            <div className="space-y-6">
              {carTypes.map((car, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.type}</h3>
                      <p className="text-gray-600 mb-2">Ejemplos: {car.examples}</p>
                      <p className="text-indigo-600 font-medium">Ideal para: {car.bestFor}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{car.price}</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3">✅ Ventajas</h4>
                      <ul className="space-y-1">
                        {car.pros.map((pro, idx) => (
                          <li key={idx} className="text-gray-700 text-sm">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3">❌ Desventajas</h4>
                      <ul className="space-y-1">
                        {car.cons.map((con, idx) => (
                          <li key={idx} className="text-gray-700 text-sm">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Insurance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Seguros y Protecciones</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                {insuranceTypes.map((insurance, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 flex items-center">
                          {insurance.name}
                          {insurance.included && (
                            <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                              Incluida
                            </span>
                          )}
                        </h3>
                        <p className="text-gray-600 text-sm">{insurance.coverage}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{insurance.cost}</div>
                      </div>
                    </div>
                    
                    <div className={`inline-block px-3 py-1 rounded-full text-sm ${
                      insurance.recommendation.includes('Obligatoria') ? 'bg-red-100 text-red-800' :
                      insurance.recommendation.includes('Fuertemente') ? 'bg-orange-100 text-orange-800' :
                      insurance.recommendation.includes('Muy') ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {insurance.recommendation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Booking Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Trucos para Ahorrar</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {bookingTips.map((tip, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <tip.icon className="w-8 h-8 text-green-600 mr-3" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{tip.title}</h3>
                      <p className="text-green-600 font-semibold text-sm">{tip.savings}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{tip.description}</p>
                  
                  <ul className="space-y-2">
                    {tip.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Common Traps */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-8">
              <div className="flex items-center mb-8">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Trampas a Evitar</h2>
              </div>
              
              <div className="space-y-6">
                {commonTraps.map((trap, index) => (
                  <div key={index} className="bg-white rounded-lg p-6">
                    <h3 className="text-lg font-bold text-red-700 mb-2">⚠️ {trap.trap}</h3>
                    <p className="text-gray-700 mb-4">{trap.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cómo evitarlo:</h4>
                      <ul className="space-y-1">
                        {trap.howToAvoid.map((solution, idx) => (
                          <li key={idx} className="flex items-start">
                            <Shield className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Checklist */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Lista de Verificación Completa</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {checklist.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{section.category}</h3>
                  
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Final Tips */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Consejos de Experto</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">🎯 Para Principiantes</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Comience con un coche económico</li>
                    <li>• Tome el seguro completo</li>
                    <li>• Evite los alquileres en el aeropuerto</li>
                    <li>• Pida una demostración del vehículo</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">💡 Para Experimentados</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Negocie las tarifas de larga duración</li>
                    <li>• Verifique su seguro personal</li>
                    <li>• Utilice los programas de fidelidad</li>
                    <li>• Reserve directamente con el arrendador</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">¿Listo para Alquilar su Coche?</h2>
              <p className="text-indigo-100 mb-6">
                Aproveche nuestras tarifas transparentes y nuestro servicio de calidad.
              </p>
              <Link 
                href="/es" 
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Ver Nuestras Ofertas
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
