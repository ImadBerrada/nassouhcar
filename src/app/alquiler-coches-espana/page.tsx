import Breadcrumb, { BreadcrumbStructuredData } from '../../components/Breadcrumb'
import StructuredData from '../../components/StructuredData'
import Link from 'next/link'

export default function AlquilerCochesEspanaPage() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/#services' },
    { label: 'Alquiler Coches España', href: '/alquiler-coches-espana' }
  ]

  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <StructuredData 
        type="LocalBusiness" 
        countryTarget="ES" 
        language="es"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="text-center mt-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Alquiler de Coches en Tánger
                <span className="block text-red-600">para Españoles</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                ¿Vienes desde España? ¡Alquila tu coche en Tánger con Nassoh Car! 
                Servicio premium, flota moderna y asistencia en español para tu estancia en Marruecos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/fleet"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Ver Nuestra Flota
                </Link>
                <Link
                  href="#ventajas"
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-colors"
                >
                  Nuestras Ventajas
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section id="ventajas" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              ¿Por Qué Elegir Nassoh Car en Tánger?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Precios Transparentes</h3>
                <p className="text-gray-600">
                  Tarifas claras sin costes ocultos. Desde 170 DH/día con seguro incluido y kilometraje ilimitado.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Asistencia en Español</h3>
                <p className="text-gray-600">
                  Nuestro equipo habla español y conoce perfectamente las necesidades de los viajeros españoles en Marruecos.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Servicio Premium</h3>
                <p className="text-gray-600">
                  Vehículos recientes, entrega gratuita en el aeropuerto Ibn Battuta y servicio 24h/24.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Servicios Especiales para Españoles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🛬 Recogida en Aeropuerto</h3>
                <p className="text-gray-600 mb-4">
                  Recogida gratuita en el aeropuerto Ibn Battuta de Tánger. Nuestro equipo te recibe 
                  con un cartel con tu nombre y te acompaña hasta tu vehículo.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Entrega gratuita en terminal</li>
                  <li>✓ Recibimiento personalizado</li>
                  <li>✓ Trámites rápidos (15 minutos)</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🗺️ Consejos Locales</h3>
                <p className="text-gray-600 mb-4">
                  Benefíciate de nuestros consejos de expertos locales: itinerarios, buenas direcciones, 
                  normas de conducción en Marruecos y recomendaciones personalizadas.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Guía de conducción en Marruecos</li>
                  <li>✓ Itinerarios recomendados</li>
                  <li>✓ Asistencia 24h/24</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📱 Reserva Simplificada</h3>
                <p className="text-gray-600 mb-4">
                  Reserva desde España en pocos clics. Confirmación inmediata por email 
                  y WhatsApp con todos los detalles de tu alquiler.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Reserva online 24h/24</li>
                  <li>✓ Confirmación inmediata</li>
                  <li>✓ Modificación gratuita</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🚗 Flota Moderna</h3>
                <p className="text-gray-600 mb-4">
                  Más de 500 vehículos recientes: urbanos, SUV, berlinas y vehículos de lujo. 
                  Todos equipados con aire acondicionado y GPS en español.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Vehículos 2023-2024</li>
                  <li>✓ GPS en español incluido</li>
                  <li>✓ Seguro a todo riesgo</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Listo para Explorar Tánger y Marruecos?
            </h2>
            <p className="text-xl mb-8">
              Descubre nuestra flota completa y reserva tu vehículo ahora mismo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/fleet"
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                🚗 Ver Nuestra Flota
              </Link>
              <a
                href="tel:+212631630013"
                className="bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-800 transition-colors"
              >
                📞 +212 631 63 00 13
              </a>
              <a
                href="https://wa.me/212539325080"
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}