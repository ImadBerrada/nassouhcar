import Link from 'next/link'

export default function CarRentalFrancePage() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/es' },
    { label: 'Servicios', href: '/es#services' },
    { label: 'Alquiler de Coches para Viajeros Franceses', href: '/es/alquiler-coches-francia' },
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center mt-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Alquiler de Coches en Tánger
                <span className="block text-blue-600">para Viajeros de Francia</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                ¿Viene de Francia? Alquile su coche en Tánger con Nassoh Car. Servicio premium, flota moderna y asistencia francófona para su estancia en Marruecos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/es/flota" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">Ver Nuestra Flota</Link>
                <Link href="#benefits" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">Nuestras Ventajas</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">¿Por qué elegir Nassoh Car en Tánger?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Precios Transparentes</h3>
                <p className="text-gray-600">Tarifas claras sin cargos ocultos. Desde 200 MAD/día con seguro incluido y kilometraje ilimitado.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Asistencia Francófona</h3>
                <p className="text-gray-600">Nuestro equipo habla francés y entiende las necesidades de los viajeros de Francia en Marruecos.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Servicio Premium</h3>
                <p className="text-gray-600">Vehículos nuevos, entrega gratuita en el Aeropuerto Ibn Battouta y servicio 24/7.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Servicios Especiales para Viajeros Franceses</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🛬 Bienvenida en el Aeropuerto</h3>
                <p className="text-gray-600 mb-4">Recogida gratuita en el Aeropuerto Tánger Ibn Battouta. Nuestro equipo le recibe con un cartel y le guía a su vehículo.</p>
                <ul className="space-y-2 text-gray-600"><li>✓ Entrega gratuita en la terminal</li><li>✓ Bienvenida personal</li><li>✓ Trámites rápidos (15 minutos)</li></ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🗺️ Consejos Locales</h3>
                <p className="text-gray-600 mb-4">Obtenga consejos de expertos locales: itinerarios, buenas direcciones, normas de conducción en Marruecos y recomendaciones a medida.</p>
                <ul className="space-y-2 text-gray-600"><li>✓ Guía de conducción en Marruecos</li><li>✓ Itinerarios recomendados</li><li>✓ Asistencia 24/7</li></ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📱 Reserva Fácil</h3>
                <p className="text-gray-600 mb-4">Reserve desde Francia en unos pocos clics. Confirmación instantánea por email y WhatsApp con todos los detalles del alquiler.</p>
                <ul className="space-y-2 text-gray-600"><li>✓ Reserva online 24/7</li><li>✓ Confirmación instantánea</li><li>✓ Modificaciones gratuitas</li></ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🚗 Flota Moderna</h3>
                <p className="text-gray-600 mb-4">Vehículos 2023–2025: coches urbanos, SUVs, sedanes y coches premium. Todos con aire acondicionado y GPS.</p>
                <ul className="space-y-2 text-gray-600"><li>✓ Últimos modelos</li><li>✓ GPS incluido</li><li>✓ Seguro a todo riesgo</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para Explorar Tánger y Marruecos?</h2>
            <p className="text-xl mb-8">Descubra nuestra flota completa y reserve su vehículo ahora</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/es/flota" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">🚗 Ver Nuestra Flota</Link>
              <a href="tel:+212631630013" className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">📞 +212 631 63 00 13</a>
              <a href="https://wa.me/212539325080" className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">💬 WhatsApp</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
