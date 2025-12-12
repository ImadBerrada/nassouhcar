import type { Metadata } from 'next'
import { MapPin, Clock, Star, Camera, Navigation, Car, Compass, Heart } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guía Tánger 2025: Atracciones Top con Coche de Alquiler | Nassoh Car',
  description: 'Descubre Tánger con tu coche de alquiler ✨ Guía completa 2025: Medina, Cuevas de Hércules, Cap Spartel, Asilah. Itinerarios optimizados, consejos de parking y rutas recomendadas.',
  keywords: [
    'guía Tánger 2025',
    'atracciones Tánger coche',
    'alquiler coche Tánger turismo',
    'medina Tánger parking',
    'cuevas Hércules coche',
    'Cap Spartel alquiler',
    'Asilah excursión coche',
    'itinerario Tánger coche',
    'Nassoh Car guía',
    'turismo Tánger automóvil',
    'coche económico Tánger',
    'alquiler barato Tánger',
    'Tánger atracciones 2025',
    'road trip Tánger'
  ].join(', '),
  openGraph: {
    title: 'Guía Tánger 2025: Atracciones Top con Coche de Alquiler | Nassoh Car',
    description: 'Descubre Tánger con tu coche de alquiler ✨ Itinerarios optimizados, consejos de parking, atracciones imprescindibles.',
    url: 'https://www.nassohcar.com/es/blog/guia-atracciones-tanger',
    images: [{ url: '/blog-guide-tanger.jpg', width: 1200, height: 630, alt: 'Guía atracciones Tánger con alquiler de coche - Nassoh Car' }],
    type: 'article',
    siteName: 'Nassoh Car'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guía Tánger 2025: Atracciones Top con Coche de Alquiler | Nassoh Car',
    description: 'Descubre Tánger con tu coche de alquiler ✨ Guía completa 2025 con itinerarios optimizados.',
    images: ['/blog-guide-tanger.jpg']
  },
  alternates: { canonical: 'https://www.nassohcar.com/es/blog/guia-atracciones-tanger' }
}

export default function BlogGuiaAtraccionesTangierES() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="relative bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-amber-400/20 to-orange-400/20 p-4 rounded-2xl backdrop-blur-sm border border-amber-400/30 shadow-xl inline-block mb-6">
            <Compass className="h-6 w-6 text-amber-300 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Descubre Tánger
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"> en Libertad</span>
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Guía completa 2025 de las atracciones imprescindibles de Tánger con tu coche de alquiler.
            Itinerarios optimizados, consejos de parking y rutas recomendadas.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center space-x-6 text-gray-600 mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center space-x-2"><Clock className="h-5 w-5 text-amber-600" /><span>Publicado el 12 Enero 2025</span></div>
          <div className="flex items-center space-x-2"><MapPin className="h-5 w-5 text-amber-600" /><span>12 min de lectura</span></div>
          <div className="flex items-center space-x-2"><Star className="h-5 w-5 text-yellow-500 fill-current" /><span>Guía Completa</span></div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-12 border border-amber-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Por qué explorar Tánger en coche?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Tánger, perla del estrecho de Gibraltar, revela sus secretos a quien se aventura más allá de lo típico. Con tu coche de alquiler de Nassoh Car, disfruta la libertad total para explorar esta ciudad fascinante a tu ritmo.</p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center"><div className="bg-amber-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center"><Navigation className="h-6 w-6 text-amber-600" /></div><p className="font-semibold text-gray-900">Libertad Total</p></div>
            <div className="text-center"><div className="bg-blue-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center"><Clock className="h-6 w-6 text-blue-600" /></div><p className="font-semibold text-gray-900">A tu Ritmo</p></div>
            <div className="text-center"><div className="bg-green-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center"><Heart className="h-6 w-6 text-green-600" /></div><p className="font-semibold text-gray-900">Experiencia Única</p></div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Clock className="h-8 w-8 text-amber-600 mr-3" />Itinerario 1 día: Lo esencial de Tánger</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4"><div className="bg-yellow-100 p-2 rounded-full mr-4"><span className="text-yellow-600 font-bold">🌅 MAÑANA</span></div><h3 className="text-xl font-semibold text-gray-900">9:00 - 12:00</h3></div>
              <div className="grid md:grid-cols-2 gap-6">
                <div><h4 className="font-semibold text-gray-900 mb-3">🏛️ Medina de Tánger</h4><ul className="space-y-2 text-gray-700"><li>• <strong>Parking:</strong> Plaza 9 de Abril (5 DH/h)</li><li>• <strong>Duración:</strong> 2-3 horas</li><li>• <strong>Qué ver:</strong> Kasbah, Museo de la Kasbah</li><li>• <strong>Compras:</strong> Zocos tradicionales</li></ul></div>
                <div className="bg-amber-50 p-4 rounded-lg"><h5 className="font-semibold text-amber-800 mb-2">💡 Consejo Nassoh Car</h5><p className="text-amber-700 text-sm">Aparca fuera de la medina. Las callejuelas son estrechas y restringidas a coches. El parking Plaza 9 de Abril es ideal.</p></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4"><div className="bg-orange-100 p-2 rounded-full mr-4"><span className="text-orange-600 font-bold">☀️ TARDE</span></div><h3 className="text-xl font-semibold text-gray-900">14:00 - 18:00</h3></div>
              <div className="grid md:grid-cols-2 gap-6">
                <div><h4 className="font-semibold text-gray-900 mb-3">🌊 Cuevas de Hércules y Cap Spartel</h4><ul className="space-y-2 text-gray-700"><li>• <strong>Distancia:</strong> 14 km desde Tánger (20 min)</li><li>• <strong>Parking:</strong> Gratuito en el sitio</li><li>• <strong>Entrada:</strong> 10 DH/persona</li><li>• <strong>Vista:</strong> Atlántico + Mediterráneo</li></ul></div>
                <div className="bg-blue-50 p-4 rounded-lg"><h5 className="font-semibold text-blue-800 mb-2">🗺️ Ruta Recomendada</h5><p className="text-blue-700 text-sm">Toma la carretera costera N1 hacia el oeste. Magnífica vista al océano. Parada obligatoria para fotos en el faro de Cap Spartel.</p></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4"><div className="bg-purple-100 p-2 rounded-full mr-4"><span className="text-purple-600 font-bold">🌆 NOCHE</span></div><h3 className="text-xl font-semibold text-gray-900">19:00 - 22:00</h3></div>
              <div className="grid md:grid-cols-2 gap-6">
                <div><h4 className="font-semibold text-gray-900 mb-3">🍽️ Corniche y Cena</h4><ul className="space-y-2 text-gray-700"><li>• <strong>Corniche:</strong> Paseo frente al mar</li><li>• <strong>Restaurantes:</strong> Vista del estrecho</li><li>• <strong>Parking:</strong> De pago a lo largo de la corniche</li><li>• <strong>Ambiente:</strong> Puesta de sol mágica</li></ul></div>
                <div className="bg-purple-50 p-4 rounded-lg"><h5 className="font-semibold text-purple-800 mb-2">🍴 Nuestras Recomendaciones</h5><p className="text-purple-700 text-sm">Saveur de Poisson, Restaurante Hamadi, o Café Hafa para un té a la menta con vistas a Gibraltar.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Navigation className="h-8 w-8 text-blue-600 mr-3" />Excursiones desde Tánger (2-3 días)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><div className="bg-blue-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center"><Camera className="h-6 w-6 text-blue-600" /></div><h3 className="text-xl font-semibold text-gray-900 mb-3">💙 Chefchaouen - La Ciudad Azul</h3><div className="space-y-3 text-gray-700"><div className="flex justify-between"><span><strong>Distancia:</strong></span><span>115 km (2h de ruta)</span></div><div className="flex justify-between"><span><strong>Mejor periodo:</strong></span><span>Abril - Octubre</span></div><div className="flex justify-between"><span><strong>Duración recomendada:</strong></span><span>1-2 días</span></div></div><div className="mt-4 p-3 bg-blue-50 rounded-lg"><p className="text-blue-700 text-sm"><strong>Ruta:</strong> A4 y luego N2. Carretera de montaña preciosa. Parking gratuito a la entrada de la medina.</p></div></div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><div className="bg-green-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center"><Heart className="h-6 w-6 text-green-600" /></div><h3 className="text-xl font-semibold text-gray-900 mb-3">🎨 Asilah - Perla Atlántica</h3><div className="space-y-3 text-gray-700"><div className="flex justify-between"><span><strong>Distancia:</strong></span><span>46 km (45 min)</span></div><div className="flex justify-between"><span><strong>Mejor periodo:</strong></span><span>Todo el año</span></div><div className="flex justify-between"><span><strong>Duración recomendada:</strong></span><span>Medio día</span></div></div><div className="mt-4 p-3 bg-green-50 rounded-lg"><p className="text-green-700 text-sm"><strong>Ruta:</strong> N1 costera. Vista oceánica espectacular. Perfecto para comer pescado fresco.</p></div></div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><div className="bg-amber-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center"><Star className="h-6 w-6 text-amber-600" /></div><h3 className="text-xl font-semibold text-gray-900 mb-3">🏛️ Tetuán - Patrimonio UNESCO</h3><div className="space-y-3 text-gray-700"><div className="flex justify-between"><span><strong>Distancia:</strong></span><span>60 km (1h15)</span></div><div className="flex justify-between"><span><strong>Mejor periodo:</strong></span><span>Marzo - Noviembre</span></div><div className="flex justify-between"><span><strong>Duración recomendada:</strong></span><span>1 día</span></div></div><div className="mt-4 p-3 bg-amber-50 rounded-lg"><p className="text-amber-700 text-sm"><strong>Ruta:</strong> A4 y luego N2. Medina patrimonio UNESCO. Artesanía excepcional y arquitectura andalusí.</p></div></div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><div className="bg-purple-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center"><MapPin className="h-6 w-6 text-purple-600" /></div><h3 className="text-xl font-semibold text-gray-900 mb-3">🏖️ Larache y Lixus</h3><div className="space-y-3 text-gray-700"><div className="flex justify-between"><span><strong>Distancia:</strong></span><span>92 km (1h30)</span></div><div className="flex justify-between"><span><strong>Mejor periodo:</strong></span><span>Abril - Octubre</span></div><div className="flex justify-between"><span><strong>Duración recomendada:</strong></span><span>1 día</span></div></div><div className="mt-4 p-3 bg-purple-50 rounded-lg"><p className="text-purple-700 text-sm"><strong>Qué ver:</strong> Ruinas romanas de Lixus, playa, centro histórico. Menos turístico, más auténtico.</p></div></div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Car className="h-8 w-8 text-green-600 mr-3" />Consejos prácticos de alquiler</h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div><h3 className="text-xl font-semibold text-gray-900 mb-4">🛣️ En la carretera</h3><ul className="space-y-3 text-gray-700"><li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>Combustible:</strong> Gasolineras frecuentes en autopistas</span></li><li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>Peajes:</strong> A4 Tánger-Tetuán (15 DH)</span></li><li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>GPS:</strong> Imprescindible para evitar rodeos</span></li><li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>Velocidad:</strong> 120 km/h autopista, 100 km/h carretera</span></li></ul></div>
              <div><h3 className="text-xl font-semibold text-gray-900 mb-4">🅿️ Parking y seguridad</h3><ul className="space-y-3 text-gray-700"><li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>Medinas:</strong> Aparcar siempre fuera</span></li><li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>Vigilancia:</strong> 2-5 DH para custodiar el coche</span></li><li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>Objetos:</strong> No dejar nada a la vista</span></li><li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>Documentos:</strong> Siempre en el vehículo</span></li></ul></div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">¿Listo para explorar Tánger?</h2>
          <p className="text-lg mb-6 opacity-90">Reserva tu coche de alquiler y sigue esta guía para vivir Tánger a tu ritmo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/es" className="bg-white text-amber-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">Reservar Ahora</Link><Link href="/es/fleet" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-700 transition-colors">Ver Nuestra Flota</Link></div>
        </div>
      </div>
    </div>
  )
}
