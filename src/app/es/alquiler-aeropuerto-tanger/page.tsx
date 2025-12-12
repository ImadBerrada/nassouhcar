import Link from 'next/link'

export default function AlquilerAeropuertoTangierES() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Alquiler en Aeropuerto de Tánger</h1>
        <p className="text-gray-700 mb-6">Alquila tu coche en el Aeropuerto Ibn Battouta con entrega rápida y soporte 24/7.</p>
        <Link href="/es/flota" className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600">Ver vehículos disponibles</Link>
      </div>
    </div>
  )
}
