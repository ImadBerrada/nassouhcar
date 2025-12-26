import type { Metadata } from 'next'
import { Car, Shield, MapPin, Clock, Users, Star, Calendar, Navigation } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/app/es/components/StructuredData'

// SEO Metadata optimized for car rental tips in Tangier
export const metadata: Metadata = {
  title: "Consejos de Alquiler de Coches en Tánger 2025 | Guía Experta Nassoh Car",
  description: "Guía experta de alquiler de coches en Tánger 2025 | Nassoh Car ✨ Consejos profesionales, trucos de ahorro, mejores tarifas, documentos necesarios. ¡Evite trampas y ahorre hasta un 40%!",
  keywords: [
    'consejos alquiler coches Tanger',
    'guía alquiler coches Tanger 2025',
    'trucos alquiler coches Marruecos',
    'ahorrar alquiler coches Tanger',
    'mejores precios alquiler Tanger',
    'documentos alquiler coches Marruecos',
    'seguro alquiler coches Tanger',
    'consejos Nassoh Car',
    'guía experta alquiler Tanger',
    'evitar trampas alquiler coches'
  ].join(', '),
  openGraph: {
    title: "Consejos de Alquiler de Coches en Tánger 2025 | Guía Experta Nassoh Car",
    description: "Guía experta completa para su alquiler de coches en Tánger ✨ Consejos profesionales, trucos de ahorro, evite las trampas.",
    url: 'https://www.nassohcar.com/es/blog/consejos-alquiler-coches-tanger',
    images: [{
      url: '/blog-conseils-tanger.jpg',
      width: 1200,
      height: 630,
      alt: 'Consejos alquiler coches Tánger - Guía experta Nassoh Car'
    }]
  },
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/consejos-alquiler-coches-tanger'
  }
}

export default function ConsejosAlquilerTangerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-teal-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-400/20 to-teal-400/20 p-4 rounded-2xl backdrop-blur-sm border border-blue-400/30 shadow-xl inline-block mb-6">
            <Car className="h-6 w-6 text-blue-300 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Consejos Expertos Alquiler Coches 
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Tánger 2025
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Guía completa por los expertos de Nassoh Car: ahorre hasta un 40%, evite trampas, 
            y disfrute plenamente de su alquiler de coches en Tánger.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Meta */}
        <div className="flex items-center space-x-6 text-gray-600 mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span>Publicado el 15 de Enero de 2025</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <span>8 min de lectura</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
            <span>Guía Experta</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 mb-12 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🎯 ¿Por qué esta Guía es Diferente?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Después de 5 años de experiencia en el alquiler de coches en Tánger y más de 10.000 clientes satisfechos, 
            compartimos nuestros secretos para garantizarle la mejor experiencia posible.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-900">Evite Trampas</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Star className="h-6 w-6 text-green-600" />
              </div>
              <p className="font-semibold text-gray-900">Ahorre 40%</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Navigation className="h-6 w-6 text-purple-600" />
              </div>
              <p className="font-semibold text-gray-900">Consejos Locales</p>
            </div>
          </div>
        </div>

        {/* Section 1: Documents et Préparation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <MapPin className="h-8 w-8 text-blue-600 mr-3" />
            1. Documentos Necesarios en Tánger
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 Lista Completa de Documentos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🇲🇦 Residentes Marroquíes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Documento Nacional de Identidad (CIN)</li>
                  <li>• Permiso de conducir marroquí válido</li>
                  <li>• Tarjeta bancaria (crédito o débito)</li>
                  <li>• Comprobante de domicilio reciente</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🌍 Visitantes Internacionales</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pasaporte válido</li>
                  <li>• Permiso de conducir internacional</li>
                  <li>• Tarjeta de crédito internacional</li>
                  <li>• Prueba de seguro de viaje (recomendada)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
            <h4 className="font-semibold text-yellow-800 mb-2">💡 Consejo Experto Nassoh Car</h4>
            <p className="text-yellow-700">
              Prepare copias de todos sus documentos. En caso de pérdida, esto facilitará enormemente los trámites 
              y le evitará gastos adicionales.
            </p>
          </div>
        </section>

        {/* Section 2: Choisir le Bon Véhicule */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Car className="h-8 w-8 text-blue-600 mr-3" />
            2. Elegir el Vehículo Perfecto para Tánger
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                <Car className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🏙️ Ciudad de Tánger</h3>
              <p className="text-gray-600 mb-4">Medina, centro ciudad, compras</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Urbanos compactos</li>
                <li>• Fáciles de aparcar</li>
                <li>• Económicos en combustible</li>
                <li>• Dacia Sandero, Renault Clio</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">👨‍👩‍👧‍👦 Familia</h3>
              <p className="text-gray-600 mb-4">Confort, espacio, seguridad</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Berlinas o SUV</li>
                <li>• 5-7 plazas</li>
                <li>• Maletero espacioso</li>
                <li>• Toyota Corolla, Dacia Duster</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                <Navigation className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🗺️ Excursiones</h3>
              <p className="text-gray-600 mb-4">Chefchaouen, Tetuán, Asilah</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• SUV o 4x4</li>
                <li>• Confort en larga distancia</li>
                <li>• Aire acondicionado</li>
                <li>• Dacia Duster, Renault Captur</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Save on your Rental */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Star className="h-8 w-8 text-green-600 mr-3" />
            3. Ahorrar hasta un 40% en su Alquiler
          </h2>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">💰 Nuestros Trucos de Experto</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">🕒 Momento Óptimo</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Reserve con 2-3 semanas de antelación</strong> para las mejores tarifas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Evite julio-agosto</strong>: tarifas hasta un 60% más altas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Prefiera mayo-junio y septiembre</strong>: excelente relación calidad-precio</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">💳 Negociación y Pago</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Alquileres largos (7+ días)</strong>: pida un descuento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Pago en efectivo</strong>: ahorre las comisiones bancarias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Compare los seguros</strong>: su seguro personal puede ser suficiente</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Conduite à Tanger */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Navigation className="h-8 w-8 text-blue-600 mr-3" />
            4. Conducir en Tánger: Guía Práctica
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Especificidades de la Conducción en Tánger</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-green-600">✅ Qué Hacer</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Respetar los límites de velocidad (50 km/h en ciudad)</li>
                  <li>• Utilizar los parkings de pago vigilados</li>
                  <li>• Guardar los documentos en el coche</li>
                  <li>• Prever tiempo para los atascos</li>
                  <li>• Utilizar el GPS para evitar la medina en coche</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-red-600">❌ Qué Evitar</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Entrar en la medina con el coche</li>
                  <li>• Aparcar en zonas prohibidas</li>
                  <li>• Dejar objetos visibles en el coche</li>
                  <li>• Conducir sin seguro válido</li>
                  <li>• Ignorar las señales de tráfico</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
            <h4 className="font-semibold text-blue-800 mb-2">🅿️ Aparcamiento en Tánger - Consejo Experto</h4>
            <p className="text-blue-700 mb-3">
              Los mejores parkings vigilados en Tánger:
            </p>
            <ul className="text-blue-700 space-y-1">
              <li>• <strong>Plaza del 9 de Abril</strong>: Centro ciudad, 5 DH/hora</li>
              <li>• <strong>Parking Ibn Battouta</strong>: Cerca de la medina, 3 DH/hora</li>
              <li>• <strong>Morocco Mall Tánger</strong>: Gratis 2h, luego 2 DH/hora</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para Alquilar su Coche en Tánger?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Aproveche nuestros consejos de experto y reserve ahora con Nassoh Car
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/es/flota" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Ver Nuestra Flota
            </Link>
            <Link 
              href="/es/contacto" 
              className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors inline-flex items-center justify-center border-2 border-blue-400"
            >
              Pedir un Presupuesto
            </Link>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <StructuredData type="Article" countryTarget="MA" language="es" />
    </div>
  )
}
