import type { Metadata } from 'next'
import { generateHreflangLinks } from '@/lib/hreflang-utils'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Alquiler de coches económicos | Nassoh Car - Mejores precios en Marruecos',
  description: 'Alquiler de coches económicos en Marruecos con Nassoh Car. Coches asequibles en Tánger, Tetuán, Casablanca. ¡Reserva tu coche barato ahora!',
  keywords: [ 'alquiler coches económicos', 'alquiler barato', 'coche económico Tánger', 'coche económico Tetuán', 'alquiler barato Marruecos' ].join(', '),
  openGraph: {
    title: 'Alquiler de coches económicos | Nassoh Car - Mejores precios',
    description: 'Alquiler de coches económicos en Marruecos con Nassoh Car. Coches asequibles en Tánger, Tetuán, Casablanca.',
    url: 'https://www.nassohcar.com/es/coches-economicos',
    images: [{ url: '/cars/DACIA LOGAN.png', width: 1200, height: 630, alt: 'Alquiler de coches económicos Marruecos - Nassoh Car' }],
  },
  alternates: { canonical: 'https://www.nassohcar.com/es/coches-economicos', languages: generateHreflangLinks('/es/coches-economicos') },
}

export default function EconomyCarsPageES() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Alquiler de coches económicos en Marruecos</h1>
            <p className="text-xl md:text-2xl mb-8">Coches económicos y de bajo presupuesto con Nassoh Car – Calidad garantizada al mejor precio</p>
            <div className="flex flex-wrap justify-center gap-4 text-lg"><span className="bg-white/20 px-4 py-2 rounded-full">✓ Desde 200 DH/día</span><span className="bg-white/20 px-4 py-2 rounded-full">✓ Seguro incluido</span><span className="bg-white/20 px-4 py-2 rounded-full">✓ Kilometraje ilimitado</span></div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Por qué elegir un coche económico?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div><h3 className="text-xl font-semibold text-green-600 mb-3">Alquiler asequible</h3><p className="text-gray-600 mb-4">Nuestros coches económicos ofrecen la mejor relación calidad-precio para tu alquiler en Marruecos. Ideales para presupuestos ajustados sin comprometer la calidad y seguridad.</p></div>
                <div><h3 className="text-xl font-semibold text-green-600 mb-3">Eficiencia de combustible</h3><p className="text-gray-600 mb-4">Los vehículos económicos consumen menos combustible, ayudándote a ahorrar durante tus viajes en Tánger, Tetuán y todo Marruecos.</p></div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra flota económica</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md"><div className="mb-4"><Image src="/cars/DACIA LOGAN.png" alt="Dacia Logan - coche económico" width={300} height={200} className="w-full h-40 object-cover rounded" /></div><h3 className="text-lg font-semibold text-green-600 mb-2">Dacia Logan</h3><ul className="text-sm text-gray-600 space-y-1"><li>• 5 plazas</li><li>• Aire acondicionado</li><li>• Consumo: 6L/100km</li><li>• Desde 200 DH/día</li></ul></div>
                <div className="bg-white p-6 rounded-lg shadow-md"><div className="mb-4"><Image src="/cars/DACIA SANDERO STEPWAY.avif" alt="Dacia Sandero - coche económico" width={300} height={200} className="w-full h-40 object-cover rounded" /></div><h3 className="text-lg font-semibold text-green-600 mb-2">Dacia Sandero Stepway</h3><ul className="text-sm text-gray-600 space-y-1"><li>• 5 plazas</li><li>• Aire acondicionado</li><li>• Consumo: 6.5L/100km</li><li>• Desde 220 DH/día</li></ul></div>
                <div className="bg-white p-6 rounded-lg shadow-md"><div className="mb-4"><Image src="/cars/TOYOTA YARIS.avif" alt="Toyota Yaris - coche económico" width={300} height={200} className="w-full h-40 object-cover rounded" /></div><h3 className="text-lg font-semibold text-green-600 mb-2">Toyota Yaris</h3><ul className="text-sm text-gray-600 space-y-1"><li>• 5 plazas</li><li>• Aire acondicionado</li><li>• Consumo: 5.5L/100km</li><li>• Desde 250 DH/día</li></ul></div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Beneficios de nuestros coches económicos</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div><h3 className="text-lg font-semibold text-green-600 mb-3">Incluido en tu alquiler</h3><ul className="space-y-2 text-gray-600"><li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Seguro a todo riesgo</li><li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Kilometraje ilimitado</li><li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Asistencia 24/7</li><li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Segundo conductor gratis</li></ul></div>
                  <div><h3 className="text-lg font-semibold text-green-600 mb-3">Servicios adicionales</h3><ul className="space-y-2 text-gray-600"><li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Entrega gratuita en hotel</li><li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Recogida en aeropuerto</li><li className="flex items-center"><span className="text-green-600 mr-2">✓</span>GPS disponible</li><li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Asiento de bebé bajo solicitud</li></ul></div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Disponible en todas nuestras agencias</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md"><h3 className="text-lg font-semibold text-green-600 mb-3">Coche económico en Tánger</h3><p className="text-gray-600 mb-3">Alquiler de coches económicos en Tánger con recogida en el Aeropuerto Ibn Battouta o nuestra agencia en el centro.</p><Link href="/es/flota" className="text-green-600 hover:underline">Saber más →</Link></div>
                <div className="bg-white p-6 rounded-lg shadow-md"><h3 className="text-lg font-semibold text-green-600 mb-3">Coche económico en Tetuán</h3><p className="text-gray-600 mb-3">Alquila un coche económico en Tetuán para explorar la región del Rif y playas de la costa mediterránea.</p><Link href="/es/flota" className="text-green-600 hover:underline">Saber más →</Link></div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Preguntas frecuentes – Coches económicos</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md"><h3 className="text-lg font-semibold text-green-600 mb-2">¿Cuál es el precio del alquiler?</h3><p className="text-gray-600">Nuestros coches económicos empiezan desde 200 DH por día, con seguro y kilometraje ilimitado incluidos.</p></div>
                <div className="bg-white p-6 rounded-lg shadow-md"><h3 className="text-lg font-semibold text-green-600 mb-2">¿Cuál es el consumo de combustible?</h3><p className="text-gray-600">Nuestros coches económicos consumen entre 5.5L y 6.5L por 100km, ayudándote a ahorrar en combustible.</p></div>
              </div>
            </div>

            <div className="bg-green-600 text-white p-8 rounded-lg text-center"><h2 className="text-2xl font-bold mb-4">Reserva tu coche económico ahora</h2><p className="text-lg mb-6">Alquiler barato en Marruecos – Reserva online simple y rápida</p><Link href="/es#booking" className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Reservar un coche económico</Link></div>
          </div>
        </div>
      </section>
    </div>
  )
}
