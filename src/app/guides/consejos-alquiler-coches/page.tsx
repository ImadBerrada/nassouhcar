import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Car, Shield, CreditCard, MapPin, CheckCircle, AlertTriangle, Info, Clock } from 'lucide-react'
import StructuredData from '@/components/StructuredData'
import Breadcrumb from '@/components/Breadcrumb'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

export const metadata: Metadata = {
  title: 'Consejos Alquiler de Coches 2024: Guía Completa para Ahorrar | Nassoh Car',
  description: 'Guía completa de consejos para alquiler de coches en 2024: comparación de precios, seguros, documentos necesarios, inspección del vehículo, conducción segura. Evita trampas y ahorra en tu alquiler.',
  keywords: 'consejos alquiler coches, guía alquiler auto, seguro alquiler coche, documentos alquiler coche, inspección vehículo alquiler, ahorrar alquiler coche, alquiler coche barato, consejos conducción alquiler, evitar gastos ocultos alquiler, alquiler coche seguro',
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
    canonical: 'https://www.nassohcar.com/guides/consejos-alquiler-coches',
    languages: generateHreflangLinks('/guides/consejos-alquiler-coches')
  }
}

const carRentalTips = [
  {
    category: 'Reserva y Planificación',
    icon: 'Clock',
    tips: [
      {
        title: 'Reserva con Anticipación',
        description: 'Reserve su vehículo con al menos 2-3 semanas de anticipación para obtener mejores precios y disponibilidad.',
        importance: 'high'
      },
      {
        title: 'Compare Precios',
        description: 'Compare precios entre diferentes compañías de alquiler y plataformas de reserva online.',
        importance: 'high'
      },
      {
        title: 'Lea los Términos y Condiciones',
        description: 'Revise cuidadosamente la política de combustible, kilometraje y restricciones de edad.',
        importance: 'medium'
      },
      {
        title: 'Verifique los Requisitos de Licencia',
        description: 'Asegúrese de tener una licencia de conducir internacional válida y todos los documentos necesarios.',
        importance: 'high'
      }
    ]
  },
  {
    category: 'Seguros y Protección',
    icon: 'Shield',
    tips: [
      {
        title: 'Seguro de Responsabilidad Civil',
        description: 'Siempre incluya seguro de responsabilidad civil - es obligatorio en Marruecos.',
        importance: 'high'
      },
      {
        title: 'Seguro de Colisión (CDW)',
        description: 'Considere el seguro de colisión para protegerse contra daños al vehículo.',
        importance: 'medium'
      },
      {
        title: 'Protección contra Robo',
        description: 'El seguro contra robo es recomendado, especialmente en áreas urbanas.',
        importance: 'medium'
      },
      {
        title: 'Revise su Seguro Personal',
        description: 'Verifique si su seguro de auto personal o tarjeta de crédito cubren alquileres internacionales.',
        importance: 'low'
      }
    ]
  },
  {
    category: 'Inspección del Vehículo',
    icon: 'Car',
    tips: [
      {
        title: 'Inspección Exterior Completa',
        description: 'Documente todos los arañazos, abolladuras y daños existentes con fotos antes de salir.',
        importance: 'high'
      },
      {
        title: 'Revise los Neumáticos',
        description: 'Verifique el estado de los neumáticos, incluyendo la rueda de repuesto y herramientas.',
        importance: 'high'
      },
      {
        title: 'Pruebe Todas las Funciones',
        description: 'Teste luces, aire acondicionado, radio, GPS y todos los controles antes de partir.',
        importance: 'medium'
      },
      {
        title: 'Verifique los Niveles de Fluidos',
        description: 'Confirme que los niveles de aceite, refrigerante y líquido de frenos estén adecuados.',
        importance: 'medium'
      }
    ]
  },
  {
    category: 'Conducción en Marruecos',
    icon: 'MapPin',
    tips: [
      {
        title: 'Conozca las Reglas de Tráfico',
        description: 'Familiarícese con las reglas de tráfico locales y límites de velocidad.',
        importance: 'high'
      },
      {
        title: 'Conduzca Defensivamente',
        description: 'Manténgase alerta - los estilos de conducción pueden ser diferentes a los de su país.',
        importance: 'high'
      },
      {
        title: 'Use GPS o Mapas Offline',
        description: 'Tenga navegación confiable - descargue mapas offline como respaldo.',
        importance: 'medium'
      },
      {
        title: 'Planifique Paradas de Combustible',
        description: 'Las estaciones de servicio pueden ser escasas en áreas rurales - planifique en consecuencia.',
        importance: 'medium'
      }
    ]
  },
  {
    category: 'Gestión de Costos',
    icon: 'CreditCard',
    tips: [
      {
        title: 'Entienda la Política de Combustible',
        description: 'Opte por "lleno a lleno" para evitar cargos excesivos por combustible.',
        importance: 'high'
      },
      {
        title: 'Evite Extras Innecesarios',
        description: 'Decline extras costosos como GPS si tiene smartphone con mapas offline.',
        importance: 'medium'
      },
      {
        title: 'Revise los Cargos de Devolución',
        description: 'Devuelva el vehículo a tiempo y en la ubicación acordada para evitar cargos adicionales.',
        importance: 'high'
      },
      {
        title: 'Use Tarjeta de Crédito',
        description: 'Pague con tarjeta de crédito para mejor protección y para cubrir el depósito de seguridad.',
        importance: 'medium'
      }
    ]
  },
  {
    category: 'Seguridad y Emergencias',
    icon: 'AlertTriangle',
    tips: [
      {
        title: 'Números de Emergencia',
        description: 'Guarde los números de emergencia locales y de la compañía de alquiler en su teléfono.',
        importance: 'high'
      },
      {
        title: 'Kit de Emergencia',
        description: 'Verifique que el vehículo tenga triángulo de advertencia, botiquín de primeros auxilios y herramientas básicas.',
        importance: 'medium'
      },
      {
        title: 'Estacionamiento Seguro',
        description: 'Estacione en áreas bien iluminadas y seguras, especialmente por la noche.',
        importance: 'medium'
      },
      {
        title: 'Mantenga Documentos Seguros',
        description: 'Lleve copias de documentos importantes y mantenga los originales en lugar seguro.',
        importance: 'low'
      }
    ]
  }
]

const commonMistakes = [
  {
    mistake: 'No inspeccionar el vehículo completamente',
    consequence: 'Puede ser responsable de daños preexistentes',
    solution: 'Tome fotos detalladas antes de salir'
  },
  {
    mistake: 'No entender la política de combustible',
    consequence: 'Cargos excesivos por combustible',
    solution: 'Opte por "lleno a lleno" y reposte antes de devolver'
  },
  {
    mistake: 'Rechazar todo el seguro',
    consequence: 'Exposición a costos altos en caso de accidente',
    solution: 'Al menos tome seguro básico de responsabilidad civil'
  },
  {
    mistake: 'No leer el contrato de alquiler',
    consequence: 'Sorpresas desagradables con cargos ocultos',
    solution: 'Lea todos los términos y condiciones cuidadosamente'
  }
]

export default function CarRentalTipsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Consejos para Alquiler de Coches en Marruecos 2024",
    "description": "Guía completa con consejos esenciales para alquilar coches en Marruecos: mejores prácticas, seguros, inspección del vehículo, conducción segura y ahorro de costos.",
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
    "url": "https://www.nassohcar.com/guides/consejos-alquiler-coches",
    "image": "https://www.nassohcar.com/tangier.webp",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.nassohcar.com/guides/consejos-alquiler-coches"
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
          { label: 'Consejos Alquiler Coches', href: '/guides/consejos-alquiler-coches' }
        ]} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Car className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">
              Consejos para Alquiler de Coches en Marruecos
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guía completa con consejos esenciales para una experiencia de alquiler de coches exitosa y segura en Marruecos.
          </p>
        </div>

        {/* Tips by Category */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Consejos Esenciales por Categoría
          </h2>
          <div className="space-y-8">
            {carRentalTips.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  {category.icon === 'Clock' && <Clock className="h-8 w-8 text-blue-600 mr-4" />}
                  {category.icon === 'Shield' && <Shield className="h-8 w-8 text-green-600 mr-4" />}
                  {category.icon === 'Car' && <Car className="h-8 w-8 text-purple-600 mr-4" />}
                  {category.icon === 'MapPin' && <MapPin className="h-8 w-8 text-red-600 mr-4" />}
                  {category.icon === 'CreditCard' && <CreditCard className="h-8 w-8 text-yellow-600 mr-4" />}
                  {category.icon === 'AlertTriangle' && <AlertTriangle className="h-8 w-8 text-orange-600 mr-4" />}
                  <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className={`p-4 rounded-lg border-l-4 ${
                      tip.importance === 'high' ? 'border-red-500 bg-red-50' :
                      tip.importance === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                      'border-green-500 bg-green-50'
                    }`}>
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{tip.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          tip.importance === 'high' ? 'bg-red-100 text-red-800' :
                          tip.importance === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {tip.importance === 'high' ? 'Alta' : tip.importance === 'medium' ? 'Media' : 'Baja'}
                        </span>
                      </div>
                      <p className="text-gray-700">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Errores Comunes a Evitar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonMistakes.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.mistake}</h3>
                    <p className="text-red-600 text-sm mb-2">
                      <strong>Consecuencia:</strong> {item.consequence}
                    </p>
                    <p className="text-green-700 text-sm">
                      <strong>Solución:</strong> {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Checklist */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Lista de Verificación Pre-Alquiler
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Licencia de conducir internacional válida',
                'Tarjeta de crédito con límite suficiente',
                'Pasaporte o documento de identidad',
                'Confirmación de reserva impresa',
                'Información del seguro personal',
                'Números de contacto de emergencia',
                'Aplicación de mapas offline descargada',
                'Cámara para documentar el vehículo',
                'Conocimiento básico de francés/árabe'
              ].map((item, index) => (
                <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Contactos de Emergencia en Marruecos
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { service: 'Policía', number: '19' },
                { service: 'Bomberos', number: '15' },
                { service: 'Emergencias Médicas', number: '15' },
                { service: 'Asistencia Carretera', number: '177' }
              ].map((contact, index) => (
                <div key={index} className="text-center p-4 bg-red-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">{contact.service}</h3>
                  <p className="text-2xl font-bold text-red-600">{contact.number}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Alquilar su Coche?</h2>
          <p className="text-xl mb-6 opacity-90">
            Alquile un vehículo confiable de nuestra flota y explore Marruecos con confianza.
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