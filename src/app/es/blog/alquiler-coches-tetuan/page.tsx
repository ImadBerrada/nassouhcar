import type { Metadata } from 'next'
import { MapPin, Clock, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Gift, Award, Mountain, Waves, Compass, Route, Building, Plane, Ship } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alquiler de Coches en Tetuán 2025 - Desde 175 DH/día ✓ Servicio Económico',
  description: 'Alquiler de coches en Tetuán ✓ Desde 175 DH/día ✓ Aeropuerto y centro ✓ Flota moderna ✓ Asistencia 24/7 ✓ Reserva sencilla ✓ Entrega gratuita.',
  keywords: 'alquiler coche tetuan, car rental tetouan, alquiler auto tetuan, alquiler coches tetuan',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-tetuan'
  },
  openGraph: {
    title: 'Alquiler de Coches en Tetuán 2025 - Desde 175 DH/día ✓ Servicio Económico',
    description: 'Alquiler de coches en Tetuán ✓ Desde 175 DH/día ✓ Aeropuerto y centro ✓ Flota moderna ✓ Asistencia 24/7.',
    images: ['/tetouan-car-rental.webp'],
  },
}

export default function BlogAlquilerCochesTetuanES() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Mountain className="h-6 w-6 text-emerald-400 mr-2" /><span className="text-emerald-400 font-semibold text-lg">Perla del Norte</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent leading-tight">Alquiler de Coches en Tetuán</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Alquiler en Tetuán desde 175 DH/día. Explora la Perla del Norte, las montañas del Rif y la costa mediterránea con total libertad.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8"><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Actualizado el 15 Enero 2025</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>7 min de lectura</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Tetuán</span></div></div>
            <Link href="/es/fleet" className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">Reservar Tetuán<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">Tu alquiler de coche en Tetuán</h2><p className="text-xl text-gray-600">Servicio económico en la capital del norte marroquí</p></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-emerald-600 mb-2">175 DH</div><div className="text-gray-600 font-medium">Precio desde/día</div></div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-teal-600 mb-2">3</div><div className="text-gray-600 font-medium">Puntos de recogida</div></div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-cyan-600 mb-2">50+</div><div className="text-gray-600 font-medium">Vehículos disponibles</div></div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-blue-600 mb-2">24/7</div><div className="text-gray-600 font-medium">Asistencia</div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Award className="h-8 w-8 text-emerald-600 mr-3" />¿Por qué elegir Tetuán para tu alquiler?</h2>
              <p className="text-gray-700 leading-relaxed mb-6"><strong>Tetuán</strong>, conocida como la "Paloma Blanca" y "Perla del Norte", es una elección excelente para tu <strong>alquiler de coche en Tetuán</strong>. Ciudad Patrimonio de la UNESCO, ofrece acceso privilegiado a las montañas del Rif, la costa mediterránea y la vecina Andalucía.</p>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl mb-8"><h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Award className="h-6 w-6 text-emerald-600 mr-2" />Ventajas del alquiler en Tetuán</h3><ul className="space-y-3"><li className="flex items-start"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Posición estratégica</strong>: entre mar, montaña y España</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Patrimonio UNESCO</strong>: medina auténtica</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Acceso privilegiado</strong>: Chefchaouen, Ceuta, Fnideq</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Diversidad paisajes</strong>: playas, montañas, bosques</span></li></ul></div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><MapPin className="h-6 w-6 text-emerald-600 mr-2" />Puntos de recogida en Tetuán</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Recoge tu vehículo de <strong>alquiler en Tetuán</strong> en nuestros 3 puntos estratégicos:</p>
              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Building className="h-5 w-5 text-emerald-600 mr-2" />Centro de Tetuán</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><ul className="text-gray-600 space-y-2 mb-4"><li>• <strong>Dirección</strong>: Avenida Mohammed V</li><li>• <strong>Horario</strong>: 8h-20h (7/7)</li><li>• <strong>Servicios</strong>: entrega hotel gratuita</li><li>• <strong>Cercanía</strong>: medina, estación</li></ul></div>
                    <div><ul className="text-gray-600 space-y-2 mb-4"><li>• <strong>Parking</strong>: seguro gratuito</li><li>• <strong>Acceso</strong>: transporte público</li><li>• <strong>Idiomas</strong>: árabe, francés, español</li><li>• <strong>Pago</strong>: efectivo, tarjeta, transferencia</li></ul></div>
                  </div>
                  <div className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Punto principal</div>
                </div>

                <div className="bg-white border-2 border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Plane className="h-5 w-5 text-teal-600 mr-2" />Aeropuerto Tetuán Sania Ramel</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><ul className="text-gray-600 space-y-2 mb-4"><li>• <strong>Terminal</strong>: llegadas internacionales</li><li>• <strong>Horario</strong>: según vuelos (24/7)</li><li>• <strong>Servicios</strong>: acogida personalizada</li><li>• <strong>Distancia</strong>: 5 km al centro</li></ul></div>
                    <div><ul className="text-gray-600 space-y-2 mb-4"><li>• <strong>Reserva</strong>: 2h antes de llegada</li><li>• <strong>Espera</strong>: gratuita 1h</li><li>• <strong>Seguimiento</strong>: automático del vuelo</li><li>• <strong>Urgencias</strong>: contacto directo</li></ul></div>
                  </div>
                  <div className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Servicio aeropuerto</div>
                </div>

                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Ship className="h-5 w-5 text-cyan-600 mr-2" />Puerto Fnideq (Ceuta)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><ul className="text-gray-600 space-y-2 mb-4"><li>• <strong>Ubicación</strong>: salida ferries Ceuta</li><li>• <strong>Horario</strong>: 6h-23h (7/7)</li><li>• <strong>Servicios</strong>: coordinación ferry</li><li>• <strong>Distancia</strong>: 40 km a Tetuán</li></ul></div>
                    <div><ul className="text-gray-600 space-y-2 mb-4"><li>• <strong>Aduanas</strong>: asistencia formalidades</li><li>• <strong>Espera</strong>: zona dedicada</li><li>• <strong>Internacional</strong>: permiso europeo OK</li><li>• <strong>Devolución</strong>: mismo punto posible</li></ul></div>
                  </div>
                  <div className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Servicio internacional</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><Car className="h-6 w-6 text-emerald-600 mr-2" />Flota adaptada a Tetuán</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Nuestra flota para la <strong>alquiler de coches en Tetuán</strong> está adaptada a la región:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Car className="h-5 w-5 text-emerald-600 mr-2" />Citadinos (175-190 DH)</h4><ul className="text-gray-600 space-y-2 mb-4"><li>• <strong>Ideal</strong>: medina, centro</li><li>• <strong>Modelos</strong>: Clio, Sandero, Logan</li><li>• <strong>Ventajas</strong>: aparcamiento fácil</li><li>• <strong>Capacidad</strong>: 2-4 personas</li></ul><div className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Ciudad y ahorro</div></div>
                <div className="bg-white border-2 border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Mountain className="h-5 w-5 text-teal-600 mr-2" />SUV Montaña (280-320 DH)</h4><ul className="text-gray-600 space-y-2 mb-4"><li>• <strong>Ideal</strong>: Rif, Chefchaouen</li><li>• <strong>Modelos</strong>: Duster, Captur, Panda 4x4</li><li>• <strong>Ventajas</strong>: tracción, altura</li><li>• <strong>Capacidad</strong>: 4-5 personas</li></ul><div className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Aventura montaña</div></div>
                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Users className="h-5 w-5 text-cyan-600 mr-2" />Familiares (220-250 DH)</h4><ul className="text-gray-600 space-y-2 mb-4"><li>• <strong>Ideal</strong>: familia, confort</li><li>• <strong>Modelos</strong>: Scenic, Lodgy, C4 Picasso</li><li>• <strong>Ventajas</strong>: espacio y equipaje</li><li>• <strong>Capacidad</strong>: 5-7 personas</li></ul><div className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Confort familiar</div></div>
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Waves className="h-5 w-5 text-blue-600 mr-2" />Cabriolets (350-400 DH)</h4><ul className="text-gray-600 space-y-2 mb-4"><li>• <strong>Ideal</strong>: costa, romántico</li><li>• <strong>Modelos</strong>: 208 CC, Clio CC</li><li>• <strong>Ventajas</strong>: placer, prestigio</li><li>• <strong>Capacidad</strong>: 2-4 personas</li></ul><div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Placer y prestigio</div></div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><Compass className="h-6 w-6 text-emerald-600 mr-2" />Destinos imprescindibles desde Tetuán</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Con tu <strong>alquiler de coche en Tetuán</strong>, explora el norte marroquí:</p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-emerald-50 to-teal-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Destino</th>
                      <th className="px-6 py-4 text-center font-semibold text-emerald-600">Distancia</th>
                      <th className="px-6 py-4 text-center font-semibold text-teal-600">Tiempo</th>
                      <th className="px-6 py-4 text-center font-semibold text-cyan-600">Interés</th>
                      <th className="px-6 py-4 text-center font-semibold text-blue-600">Vehículo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-medium text-gray-900">Chefchaouen</td><td className="px-6 py-4 text-center text-emerald-600 font-semibold">65 km</td><td className="px-6 py-4 text-center text-teal-600 font-semibold">1h15</td><td className="px-6 py-4 text-center text-cyan-600 font-semibold">★★★★★</td><td className="px-6 py-4 text-center text-blue-600 font-semibold">SUV</td></tr>
                    <tr className="bg-emerald-50 hover:bg-emerald-100"><td className="px-6 py-4 font-medium text-gray-900">Ceuta (España)</td><td className="px-6 py-4 text-center text-emerald-600 font-semibold">40 km</td><td className="px-6 py-4 text-center text-teal-600 font-semibold">45 min</td><td className="px-6 py-4 text-center text-cyan-600 font-semibold">★★★★☆</td><td className="px-6 py-4 text-center text-blue-600 font-semibold">Todos</td></tr>
                    <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-medium text-gray-900">Cabo Negro</td><td className="px-6 py-4 text-center text-emerald-600 font-semibold">15 km</td><td className="px-6 py-4 text-center text-teal-600 font-semibold">20 min</td><td className="px-6 py-4 text-center text-cyan-600 font-semibold">★★★★☆</td><td className="px-6 py-4 text-center text-blue-600 font-semibold">Cabriolet</td></tr>
                    <tr className="bg-emerald-50 hover:bg-emerald-100"><td className="px-6 py-4 font-medium text-gray-900">Martil</td><td className="px-6 py-4 text-center text-emerald-600 font-semibold">10 km</td><td className="px-6 py-4 text-center text-teal-600 font-semibold">15 min</td><td className="px-6 py-4 text-center text-cyan-600 font-semibold">★★★☆☆</td><td className="px-6 py-4 text-center text-blue-600 font-semibold">Citadino</td></tr>
                    <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-medium text-gray-900">Tánger</td><td className="px-6 py-4 text-center text-emerald-600 font-semibold">60 km</td><td className="px-6 py-4 text-center text-teal-600 font-semibold">1h00</td><td className="px-6 py-4 text-center text-cyan-600 font-semibold">★★★★★</td><td className="px-6 py-4 text-center text-blue-600 font-semibold">Todos</td></tr>
                    <tr className="bg-emerald-50 hover:bg-emerald-100"><td className="px-6 py-4 font-medium text-gray-900">Ouezzane</td><td className="px-6 py-4 text-center text-emerald-600 font-semibold">45 km</td><td className="px-6 py-4 text-center text-teal-600 font-semibold">50 min</td><td className="px-6 py-4 text-center text-cyan-600 font-semibold">★★★☆☆</td><td className="px-6 py-4 text-center text-blue-600 font-semibold">SUV</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><Route className="h-6 w-6 text-blue-600 mr-2" />Circuitos recomendados</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div><h5 className="font-semibold text-gray-900 mb-3">Circuito Montaña (2-3 días)</h5><ul className="space-y-2 text-gray-600"><li>• <strong>Día 1</strong>: Tetuán → Chefchaouen (noche)</li><li>• <strong>Día 2</strong>: Chefchaouen → Akchour → Ouezzane</li><li>• <strong>Día 3</strong>: Ouezzane → Tetuán</li><li>• <strong>Vehículo</strong>: SUV recomendado</li></ul></div>
                  <div><h5 className="font-semibold text-gray-900 mb-3">Circuito Costa (1-2 días)</h5><ul className="space-y-2 text-gray-600"><li>• <strong>Mañana</strong>: Tetuán → Cabo Negro</li><li>• <strong>Mediodía</strong>: Cabo Negro → Martil</li><li>• <strong>Tarde</strong>: Martil → Tetuán</li><li>• <strong>Vehículo</strong>: Cabriolet ideal</li></ul></div>
                </div>
              </div>
            </article>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 rounded-2xl shadow-xl"><h3 className="text-2xl font-bold mb-4">¡Reserva ahora!</h3><p className="mb-6 text-emerald-100">Más de 50 vehículos disponibles, precios transparentes, servicios premium incluidos.</p><Link href="/es/fleet" className="block w-full bg-white text-emerald-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors">Ver la Flota</Link></div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"><h3 className="text-xl font-bold text-gray-900 mb-4">Categorías disponibles</h3><div className="space-y-3"><div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg"><span className="text-gray-700">Económico</span><span className="text-emerald-600 font-semibold">175 DH/d</span></div><div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><span className="text-gray-700">Compacto</span><span className="text-teal-600 font-semibold">200 DH/d</span></div><div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><span className="text-gray-700">Familiar</span><span className="text-purple-600 font-semibold">240 DH/d</span></div><div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><span className="text-gray-700">SUV</span><span className="text-pink-600 font-semibold">300 DH/d</span></div></div></div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"><h3 className="text-xl font-bold text-gray-900 mb-4">Modelos populares</h3><div className="space-y-3"><div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg"><span className="text-gray-700">Renault Clio</span><span className="text-blue-600 font-semibold">★★★★★</span></div><div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><span className="text-gray-700">Dacia Duster</span><span className="text-indigo-600 font-semibold">★★★★☆</span></div><div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><span className="text-gray-700">Peugeot 308</span><span className="text-purple-600 font-semibold">★★★★★</span></div><div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><span className="text-gray-700">BMW Serie 3</span><span className="text-pink-600 font-semibold">★★★★★</span></div></div></div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"><h3 className="text-xl font-bold text-gray-900 mb-4">Servicios incluidos</h3><div className="space-y-3"><div className="flex items-center p-3 bg-green-50 rounded-lg"><CheckCircle className="h-5 w-5 text-green-600 mr-3" /><span className="text-gray-700">Seguro completo</span></div><div className="flex items-center p-3 bg-green-50 rounded-lg"><CheckCircle className="h-5 w-5 text-green-600 mr-3" /><span className="text-gray-700">Kilometraje ilimitado</span></div><div className="flex items-center p-3 bg-green-50 rounded-lg"><CheckCircle className="h-5 w-5 text-green-600 mr-3" /><span className="text-gray-700">GPS gratuito</span></div><div className="flex items-center p-3 bg-green-50 rounded-lg"><CheckCircle className="h-5 w-5 text-green-600 mr-3" /><span className="text-gray-700">Asistencia 24/7</span></div></div></div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"><h3 className="text-xl font-bold text-gray-900 mb-4">Contacto Tetuán</h3><div className="space-y-4"><div className="flex items-center"><Phone className="h-5 w-5 text-emerald-600 mr-3" /><span className="text-gray-700">+212 631-630013</span></div><div className="flex items-center"><Mail className="h-5 w-5 text-emerald-600 mr-3" /><span className="text-gray-700">tetuan@nassouhcar.com</span></div><div className="flex items-start"><MapPin className="h-5 w-5 text-emerald-600 mr-3 mt-1" /><span className="text-gray-700">Avenida Mohammed V, Tetuán</span></div></div><div className="mt-4 p-3 bg-emerald-50 rounded-lg"><p className="text-sm text-emerald-800 font-semibold">🚗 Entrega gratuita en Tetuán</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
