import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Anchor, Navigation, Zap, Award, Ship, Luggage, Timer, Compass, Waves, Globe } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alquiler de Coche en Tanger Med 2025 - Puerto y Ferry | Entrega Gratis | Nassoh Car',
  description: 'Alquiler de coche en Tanger Med ✓ Puerto y ferry ✓ Entrega gratuita ✓ Servicio coordinado ✓ Flota moderna ✓ Reserva online ✓ Asistencia 24/7.',
  keywords: 'alquiler coche tanger med, alquiler coche med, car rental tangier med, alquiler auto tanger med, coche alquiler med',
  alternates: { canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-tanger-med' },
  openGraph: {
    title: 'Alquiler de Coche en Tanger Med 2025 - Puerto y Ferry | Entrega Gratis | Nassoh Car',
    description: 'Alquiler coche Tanger Med ✓ Puerto y ferry ✓ Entrega gratuita ✓ Servicio coordinado.',
    images: ['/tangier-med-blog.jpg']
  }
}

export default function BlogAlquilerCochesTangierMedES() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <div className="relative bg-gradient-to-r from-cyan-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Anchor className="h-6 w-6 text-cyan-400 mr-2" /><span className="text-cyan-400 font-semibold text-lg">Puerto Tanger Med</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Alquiler de Coche en Tanger Med</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Alquiler de coche en Tanger Med - Puerto y ferry. Entrega gratuita en el puerto, servicio especializado en ferry y flota adaptada. ¡Tu movilidad desde la llegada!</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8"><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Actualizado el 15 Enero 2025</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>7 min de lectura</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Puerto y Ferry</span></div></div>
            <Link href="/es/fleet" className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">Reservar para Tanger Med<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">Servicio especializado Tanger Med</h2><p className="text-xl text-gray-600">Tu socio de movilidad en el mayor puerto de África</p></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-cyan-600 mb-2">24/7</div><div className="text-gray-600 font-medium">Servicio ferry</div></div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-blue-600 mb-2">15min</div><div className="text-gray-600 font-medium">Entrega en el puerto</div></div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-amber-600 mb-2">100+</div><div className="text-gray-600 font-medium">Vehículos disponibles</div></div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-purple-600 mb-2">3000+</div><div className="text-gray-600 font-medium">Clientes ferry/año</div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Ship className="h-8 w-8 text-cyan-600 mr-3" />Alquiler en Tanger Med: tu movilidad en el puerto</h2>
              <p className="text-gray-700 leading-relaxed mb-6"><strong>Tanger Med</strong> es el mayor puerto de África y la principal puerta marítima de Marruecos. Nuestro servicio de <strong>alquiler en Tanger Med</strong> te permite recoger tu vehículo directamente en el puerto, tanto si llegas en ferry desde España como si transitas por esta zona estratégica.</p>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Award className="h-6 w-6 text-cyan-600 mr-2" />¿Por qué elegir nuestro servicio en Tanger Med?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Especialización ferry</strong>: Servicio adaptado a horarios de ferry</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Entrega en el puerto</strong>: Recogida directa en Tanger Med</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Disponibilidad 24/7</strong>: Servicio continuo para todos los ferries</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Flota adaptada</strong>: Vehículos para todas las necesidades y presupuestos</span></li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><Waves className="h-6 w-6 text-cyan-600 mr-2" />Servicio ferry - Horarios y coordinación</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Nuestro <strong>alquiler en Tanger Med</strong> se adapta perfectamente a horarios de ferries desde España:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Ship className="h-5 w-5 text-cyan-600 mr-2" />Ferries desde España</h4><ul className="text-gray-600 space-y-2 mb-4"><li>• <strong>Algeciras - Tanger Med</strong>: 1h30 de travesía</li><li>• <strong>Tarifa - Tanger Med</strong>: 1h de travesía</li><li>• <strong>Barcelona - Tanger Med</strong>: 30h de travesía</li><li>• <strong>Motril - Tanger Med</strong>: 7h de travesía</li></ul><div className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Coordinación perfecta</div></div>
                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Timer className="h-5 w-5 text-blue-600 mr-2" />Nuestro servicio</h4><ul className="text-gray-600 space-y-2 mb-4"><li>• <strong>Seguimiento de ferries</strong>: Horarios en tiempo real</li><li>• <strong>Espera garantizada</strong>: Incluso en caso de retraso</li><li>• <strong>Entrega rápida</strong>: 15 min tras desembarcar</li><li>• <strong>Servicio nocturno</strong>: Disponible 24/7</li></ul><div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Fiabilidad total</div></div>
                <div className="bg-white border-2 border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><MapPin className="h-5 w-5 text-green-600 mr-2" />Puntos de entrega</h4><ul className="text-gray-600 space-y-2 mb-4"><li>• <strong>Terminal de pasajeros</strong>: Salida principal</li><li>• <strong>Parking visitantes</strong>: Zona dedicada</li><li>• <strong>Hoteles cercanos</strong>: Entrega posible</li><li>• <strong>Zona comercial</strong>: Tanger Med Zones</li></ul><div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Máxima flexibilidad</div></div>
                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Globe className="h-5 w-5 text-amber-600 mr-2" />Destinos populares</h4><ul className="text-gray-600 space-y-2 mb-4"><li>• <strong>Tánger centro</strong>: 45 min</li><li>• <strong>Tetuán</strong>: 30 min</li><li>• <strong>Chefchaouen</strong>: 1h30</li><li>• <strong>Rabat</strong>: 2h30</li></ul><div className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Acceso facilitado</div></div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8"><h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Zap className="h-6 w-6 text-blue-600 mr-2" />Proceso de recogida en Tanger Med</h3><p className="text-gray-700 mb-4">Nuestro proceso de <strong>alquiler en Tanger Med</strong> está optimizado para viajeros de ferry:</p><div className="grid md:grid-cols-1 gap-4"><div className="flex items-start"><div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div><div><h5 className="font-semibold text-gray-900 mb-2">Reserva con horario de ferry</h5><p className="text-gray-600 text-sm">Indica tu ferry y hora de llegada al reservar</p></div></div><div className="flex items-start"><div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div><div><h5 className="font-semibold text-gray-900 mb-2">Seguimiento en tiempo real</h5><p className="text-gray-600 text-sm">Seguimos tu ferry y nos adaptamos en caso de retraso</p></div></div><div className="flex items-start"><div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div><div><h5 className="font-semibold text-gray-900 mb-2">Recepción en el desembarque</h5><p className="text-gray-600 text-sm">Nuestro equipo te espera con un cartel con tu nombre</p></div></div><div className="flex items-start"><div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div><div><h5 className="font-semibold text-gray-900 mb-2">Formalidades exprés</h5><p className="text-gray-600 text-sm">Verificación rápida de documentos y firma del contrato</p></div></div><div className="flex items-start"><div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div><div><h5 className="font-semibold text-gray-900 mb-2">Salida inmediata</h5><p className="text-gray-600 text-sm">Tu vehículo te espera, GPS programado para tu destino</p></div></div></div></div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><Car className="h-6 w-6 text-cyan-600 mr-2" />Flota adaptada al puerto Tanger Med</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Nuestro <strong>alquiler en Tanger Med</strong> ofrece una flota adaptada a necesidades de viajeros:</p>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl mb-8"><div className="grid md:grid-cols-2 gap-4"><ul className="space-y-3"><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-500 mr-3" /><span><strong>Vehículos espaciosos</strong>: Para equipaje de ferry</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-500 mr-3" /><span><strong>GPS Marruecos</strong>: Navegación completa</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-500 mr-3" /><span><strong>Aire acondicionado</strong>: Confort garantizado</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-500 mr-3" /><span><strong>Depósito lleno</strong>: Listo para salir</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-500 mr-3" /><span><strong>Seguro completo</strong>: Todo riesgo incluido</span></li></ul><ul className="space-y-3"><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-500 mr-3" /><span><strong>Vehículos recientes</strong>: Menos de 3 años</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-500 mr-3" /><span><strong>Mantenimiento regular</strong>: Máxima fiabilidad</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-500 mr-3" /><span><strong>Limpieza completa</strong>: Higiene perfecta</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-500 mr-3" /><span><strong>Asistencia 24/7</strong>: En todo Marruecos</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-500 mr-3" /><span><strong>Kilometraje ilimitado</strong>: Libertad total</span></li></ul></div></div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Compass className="h-6 w-6 text-cyan-600 mr-2" />Consejos para tu llegada a Tanger Med</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Optimiza tu experiencia de <strong>alquiler en Tanger Med</strong> con estos consejos:</p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8"><h4 className="text-xl font-bold text-gray-900 mb-4">Consejos prácticos</h4><div className="grid md:grid-cols-2 gap-6"><div><h5 className="font-semibold text-gray-900 mb-3">Antes del embarque</h5><ul className="space-y-2 text-gray-600"><li>• <strong>Reserva con antelación</strong>: Garantía de disponibilidad</li><li>• <strong>Comunica tu ferry</strong>: Seguimiento personalizado</li><li>• <strong>Prepara documentos</strong>: Permiso + pasaporte</li><li>• <strong>WhatsApp</strong>: Comunicación directa</li></ul></div><div><h5 className="font-semibold text-gray-900 mb-3">A la llegada</h5><ul className="space-y-2 text-gray-600"><li>• <strong>Busca nuestro cartel</strong>: "Nassoh Car + tu nombre"</li><li>• <strong>Revisa tu teléfono</strong>: Mensajes de bienvenida</li><li>• <strong>Verifica el vehículo</strong>: Estado y combustible</li><li>• <strong>Briefing de ruta</strong>: Consejos y puntos clave</li></ul></div></div></div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
