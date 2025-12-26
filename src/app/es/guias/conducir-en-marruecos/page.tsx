import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Car, AlertTriangle, MapPin, Shield, CreditCard, Navigation, Info, CheckCircle } from 'lucide-react'
import StructuredData from '@/app/es/components/StructuredData'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

export const metadata: Metadata = {
  title: 'Guía Conducir en Marruecos 2024: Permiso, Código y Consejos | Nassoh Car',
  description: 'Guía completa para conducir en Marruecos en 2024: permiso internacional, código de circulación marroquí, seguros obligatorios, consejos de seguridad vial, reglas de tráfico, límites de velocidad, costes de combustible y peajes. Todo para una conducción segura en Marruecos.',
  keywords: 'conducir Marruecos, permiso internacional Marruecos, código circulación Marruecos, seguro coche Marruecos, seguridad vial Marruecos, tráfico Marruecos, límites velocidad Marruecos, peajes autopista Marruecos, conducción montaña Marruecos, reglas circulación Marruecos, permiso conducir español Marruecos, alquiler coche Marruecos, consejos conducción Marruecos',
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
    canonical: 'https://www.nassohcar.com/es/guías/conducir-en-marruecos',
    languages: generateHreflangLinks('/es/guías/conducir-en-marruecos')
  },
  openGraph: {
    title: 'Guía Conducir en Marruecos 2024: Permiso, Código y Consejos Prácticos',
    description: 'Guía completa 2024 para conducir con seguridad en Marruecos: permiso internacional, código de circulación, seguros, reglas de tráfico, consejos prácticos para ciudad, montaña y autopistas. Costes de combustible y peajes incluidos.',
    url: 'https://www.nassohcar.com/es/guías/conducir-en-marruecos',
    siteName: 'Nassoh Car - Alquiler de Coches en Marruecos',
    images: [
      {
        url: 'https://www.nassohcar.com/images/guides/conduire-maroc-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'Guía completa para conducir en Marruecos - Permiso, reglas y consejos'
      }
    ],
    locale: 'es_ES',
    type: 'article',
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    section: 'Guías de Conducción',
    tags: ['Conducción Marruecos', 'Permiso Internacional', 'Código Circulación Marruecos', 'Seguridad Vial', 'Alquiler Coche']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guía Conducir en Marruecos 2024: Permiso y Consejos',
    description: 'Guía completa para conducir con seguridad en Marruecos: permiso, código de circulación, seguros y consejos prácticos.',
    images: ['https://www.nassohcar.com/images/guides/conduire-maroc-guide.jpg'],
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

const requirements = [
  {
    title: "Permiso de Conducir",
    icon: CreditCard,
    items: [
      "Permiso de conducir español válido",
      "Permiso internacional (recomendado)",
      "Edad mínima: 21 años para el alquiler",
      "Experiencia de conducción: 1 año mínimo"
    ],
    note: "El permiso español es aceptado pero el permiso internacional facilita los trámites"
  },
  {
    title: "Documentos Obligatorios",
    icon: Shield,
    items: [
      "Pasaporte en vigor",
      "Permiso de circulación del vehículo",
      "Certificado de seguro",
      "Contrato de alquiler (si aplica)"
    ],
    note: "Guarde siempre estos documentos en el vehículo"
  },
  {
    title: "Seguro",
    icon: CheckCircle,
    items: [
      "Seguro de responsabilidad civil obligatorio",
      "Seguro a todo riesgo recomendado",
      "Asistencia en carretera 24h/24",
      "Cobertura de robo e incendio"
    ],
    note: "Verifique las condiciones de su seguro antes de salir"
  }
]

const trafficRules = [
  {
    category: "Límites de Velocidad",
    rules: [
      "Ciudad: 60 km/h",
      "Carretera nacional: 100 km/h", 
      "Autopista: 120 km/h",
      "Zona residencial: 40 km/h"
    ]
  },
  {
    category: "Reglas de Circulación",
    rules: [
      "Circulación por la derecha",
      "Adelantamiento por la izquierda",
      "Cinturón obligatorio delante",
      "Teléfono prohibido al volante"
    ]
  },
  {
    category: "Prioridades",
    rules: [
      "Prioridad a la derecha en ciudad",
      "Rotonda: prioridad a la izquierda",
      "Semáforos respetados",
      "Pasos de peatones prioritarios"
    ]
  },
  {
    category: "Estacionamiento",
    rules: [
      "Zonas azules de pago",
      "Vigilantes de aparcamiento",
      "Prohibición en aceras",
      "Respeto de plazas para discapacitados"
    ]
  }
]

const drivingTips = [
  {
    title: "Conducción en Ciudad",
    icon: Navigation,
    tips: [
      "Sea paciente en los atascos",
      "Atención a las motos y bicicletas",
      "Respete a los peatones",
      "Utilice los aparcamientos vigilados",
      "Evite las horas punta (8h-9h, 17h-19h)"
    ],
    difficulty: "Moderado"
  },
  {
    title: "Carreteras de Montaña",
    icon: AlertTriangle,
    tips: [
      "Verifique el estado del vehículo",
      "Conduzca con prudencia en las curvas",
      "Respete las distancias de seguridad",
      "Atención a los animales en la carretera",
      "Lleve agua y provisiones"
    ],
    difficulty: "Difícil"
  },
  {
    title: "Conducción Nocturna",
    icon: Shield,
    tips: [
      "Evite si es posible los trayectos nocturnos",
      "Reduzca su velocidad",
      "Atención a los animales",
      "Verifique la iluminación del vehículo",
      "Haga pausas regulares"
    ],
    difficulty: "Difícil"
  },
  {
    title: "Autopistas",
    icon: Car,
    tips: [
      "Respete los límites de velocidad",
      "Pague los peajes en efectivo",
      "Utilice las áreas de descanso",
      "Mantenga sus distancias",
      "Señale sus cambios de carril"
    ],
    difficulty: "Fácil"
  }
]

const emergencyInfo = [
  {
    service: "Policía",
    number: "19",
    description: "Emergencias y accidentes"
  },
  {
    service: "Gendarmería Real",
    number: "177",
    description: "Carreteras nacionales y autopistas"
  },
  {
    service: "Bomberos",
    number: "15",
    description: "Incendios y socorro"
  },
  {
    service: "Ambulancia",
    number: "141",
    description: "Emergencias médicas"
  }
]

const costs = [
  {
    item: "Gasolina Sin Plomo",
    price: "14-16 DH/L",
    euro: "1.25-1.45€/L"
  },
  {
    item: "Diésel",
    price: "12-14 DH/L", 
    euro: "1.10-1.25€/L"
  },
  {
    item: "Peaje Autopista",
    price: "5-20 DH",
    euro: "0.45-1.80€"
  },
  {
    item: "Aparcamiento Ciudad",
    price: "5-10 DH/h",
    euro: "0.45-0.90€/h"
  },
  {
    item: "Lavado Coche",
    price: "20-50 DH",
    euro: "1.80-4.50€"
  }
]

export default function ConducirMarruecosGuidePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.nassohcar.com/es/guías/conducir-en-marruecos#article",
        "isPartOf": {
          "@id": "https://www.nassohcar.com/es/guías/conducir-en-marruecos#webpage"
        },
        "author": {
          "@id": "https://www.nassohcar.com/#organization"
        },
        "headline": "Guía Conducir en Marruecos 2024: Permiso, Código y Consejos",
        "description": "Guía completa para conducir en Marruecos en 2024: permiso internacional, código de circulación marroquí, seguros obligatorios, consejos de seguridad vial, reglas de tráfico, límites de velocidad, costes de combustible y peajes.",
        "datePublished": "2024-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "mainEntityOfPage": {
          "@id": "https://www.nassohcar.com/es/guías/conducir-en-marruecos#webpage"
        },
        "publisher": {
          "@id": "https://www.nassohcar.com/#organization"
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://www.nassohcar.com/images/guides/conduire-maroc-guide.jpg",
          "width": 1200,
          "height": 630
        },
        "articleSection": "Guías de Conducción",
        "keywords": ["Conducción Marruecos", "Permiso Internacional", "Código Circulación Marruecos", "Seguridad Vial", "Alquiler Coche"],
        "about": [
          {
            "@type": "Thing",
            "name": "Conducción en Marruecos",
            "description": "Reglas y consejos para conducir con seguridad en Marruecos"
          },
          {
            "@type": "Thing", 
            "name": "Permiso Internacional",
            "description": "Documentos necesarios para conducir en Marruecos"
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://www.nassohcar.com/es/guías/conducir-en-marruecos#howto",
        "name": "Cómo conducir en Marruecos",
        "description": "Guía paso a paso para conducir con seguridad en Marruecos",
        "image": "https://www.nassohcar.com/images/guides/conduire-maroc-guide.jpg",
        "totalTime": "PT30M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "EUR",
          "value": "50"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Obtener los documentos necesarios",
            "text": "Prepare su permiso de conducir español, permiso internacional, pasaporte y certificado de seguro.",
            "image": "https://www.nassohcar.com/images/guides/documents-conduite.jpg"
          },
          {
            "@type": "HowToStep", 
            "name": "Conocer el código de circulación marroquí",
            "text": "Familiarícese con los límites de velocidad, reglas de prioridad y señalización vial en Marruecos.",
            "image": "https://www.nassohcar.com/images/guides/code-route-maroc.jpg"
          },
          {
            "@type": "HowToStep",
            "name": "Preparar su vehículo",
            "text": "Verifique el estado del vehículo, los neumáticos, la iluminación y los niveles antes de salir a la carretera.",
            "image": "https://www.nassohcar.com/images/guides/verification-vehicule.jpg"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.nassohcar.com/#organization",
        "name": "Nassoh Car",
        "url": "https://www.nassohcar.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.nassohcar.com/logo.png",
          "width": 300,
          "height": 100
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
        "@id": "https://www.nassohcar.com/es/guías/conducir-en-marruecos#webpage",
        "url": "https://www.nassohcar.com/es/guías/conducir-en-marruecos",
        "name": "Guía Conducir en Marruecos 2024: Permiso, Código y Consejos",
        "isPartOf": {
          "@id": "https://www.nassohcar.com/#website"
        },
        "about": {
          "@id": "https://www.nassohcar.com/es/guías/conducir-en-marruecos#article"
        },
        "description": "Guía completa para conducir en Marruecos en 2024: permiso internacional, código de circulación marroquí, seguros obligatorios, consejos de seguridad vial.",
        "breadcrumb": {
          "@id": "https://www.nassohcar.com/es/guías/conducir-en-marruecos#breadcrumb"
        },
        "inLanguage": "es-ES",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": ["https://www.nassohcar.com/es/guías/conducir-en-marruecos"]
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.nassohcar.com/#website",
        "url": "https://www.nassohcar.com/",
        "name": "Nassoh Car - Alquiler de Coches en Marruecos",
        "description": "Alquiler de coches en Marruecos con Nassoh Car. Vehículos recientes, precios competitivos y servicio de calidad.",
        "publisher": {
          "@id": "https://www.nassohcar.com/#organization"
        },
        "inLanguage": "es-ES"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.nassohcar.com/es/guías/conducir-en-marruecos#breadcrumb",
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
            "name": "Guía Conducir en Marruecos",
            "item": "https://www.nassohcar.com/es/guías/conducir-en-marruecos"
          }
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData type="@graph" data={structuredData["@graph"]} />
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/es" className="text-blue-600 hover:text-blue-800">
              Inicio
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/es/guías" className="text-blue-600 hover:text-blue-800">
              Guías
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Guía Conducir en Marruecos</span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-orange-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link href="/es/guías" className="inline-flex items-center text-red-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a las guías
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Guía Conducir en Marruecos
            </h1>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Todo lo que necesita saber para conducir con seguridad en Marruecos: 
              permiso, código de circulación, seguros, consejos prácticos y reglas de tráfico.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-red-800/50 px-3 py-1 rounded-full">🚗 Permiso y Documentos</span>
              <span className="bg-red-800/50 px-3 py-1 rounded-full">⚖️ Código de Circulación</span>
              <span className="bg-red-800/50 px-3 py-1 rounded-full">🛡️ Seguridad</span>
              <span className="bg-red-800/50 px-3 py-1 rounded-full">⏱️ Lectura 10 min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Requirements */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Documentos y Requisitos</h2>
            
            <div className="space-y-6">
              {requirements.map((req, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <req.icon className="w-8 h-8 text-red-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">{req.title}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-3">
                        {req.items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <Info className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-blue-800 text-sm">{req.note}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Traffic Rules */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Código de Circulación</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {trafficRules.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{section.category}</h3>
                  
                  <ul className="space-y-3">
                    {section.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Driving Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos de Conducción</h2>
            
            <div className="space-y-6">
              {drivingTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <tip.icon className="w-8 h-8 text-orange-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">{tip.title}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      tip.difficulty === 'Fácil' ? 'bg-green-100 text-green-800' :
                      tip.difficulty === 'Moderado' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {tip.difficulty}
                    </span>
                  </div>
                  
                  <ul className="grid md:grid-cols-2 gap-3">
                    {tip.tips.map((tipItem, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{tipItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Emergency Numbers */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-8">
              <div className="flex items-center mb-8">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Números de Emergencia</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {emergencyInfo.map((emergency, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{emergency.service}</h3>
                      <span className="text-2xl font-bold text-red-600">{emergency.number}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{emergency.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Importante:</strong> En caso de accidente, mantenga la calma, asegure la zona, 
                  llame a los servicios de socorro y no mueva los vehículos salvo peligro inmediato.
                </p>
              </div>
            </div>
          </section>

          {/* Costs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Costes de Conducción</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid gap-4">
                {costs.map((cost, index) => (
                  <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700 font-medium">{cost.item}</span>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{cost.price}</div>
                      <div className="text-sm text-gray-500">{cost.euro}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Safety Checklist */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Lista de Seguridad</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Antes de Salir</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm">Verificar neumáticos y presión</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm">Controlar niveles (aceite, agua)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm">Probar la iluminación</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm">Verificar los documentos</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Equipamiento Obligatorio</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm">Triángulo de señalización</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm">Chaleco de seguridad</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm">Botiquín de primeros auxilios</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm">Extintor (recomendado)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">¿Listo para Salir a la Carretera?</h2>
              <p className="text-red-100 mb-6">
                Reserve su coche de alquiler con seguro completo y asistencia 24h/24.
              </p>
              <Link 
                href="/es" 
                className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
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
