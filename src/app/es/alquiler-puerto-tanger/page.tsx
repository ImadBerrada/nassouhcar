import Link from 'next/link'

export default function AlquilerPuertoTangierES() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Alquiler en Puerto de Tánger Ville</h1>
        <p className="text-gray-700 mb-6">Alquiler de coches en el puerto de Tánger Ville. Coordinación con horarios de ferry.</p>
        <Link href="/es/flota" className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600">Reservar ahora</Link>
      </div>
    </div>
  )
}
