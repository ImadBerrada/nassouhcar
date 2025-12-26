'use client'

import { useState, useEffect } from 'react'
import { Car as CarIcon, MapPin, Star, Users, Settings, Fuel, Navigation } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import BookingModal from '../components/BookingModal'
import { api } from '@/lib/api'

interface Car {
  id: string
  name: string
  brand: string
  model: string
  year: number
  category: string
  transmission: string
  fuelType: string
  seats: number
  pricePerDay: number
  quantity: number
  availableQuantity?: number
  image?: string
  description?: string
  features: string[]
  available: boolean
  rating?: number
}

export default function CarRentalTetouanClient() {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.getCars()
        if (response.cars && Array.isArray(response.cars)) {
          setCars(response.cars.filter((car: Car) => car.available))
        } else {
          setCars([])
        }
      } catch (error) {
        setCars([])
      } finally {
        setLoading(false)
      }
    }
    fetchCars()
  }, [])

  const handleBookNow = (car: Car) => {
    setSelectedCar(car)
    setIsBookingModalOpen(true)
  }

  const closeBookingModal = () => {
    setIsBookingModalOpen(false)
    setSelectedCar(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Alquiler de Coches en Tetuán
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Descubra la Paloma Blanca y la Costa Mediterránea con Nassoh Car
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">✓ Aeropuerto Sania Ramel</span>
              <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">✓ Centro Ciudad</span>
              <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">✓ Martil y Cabo Negro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Flota en Tetuán</h2>
            <p className="text-gray-600">Vehículos modernos y confortables para explorar el norte de Marruecos.</p>
          </div>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Cargando vehículos disponibles...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.slice(0, 6).map((car) => (
                <div key={car.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image src={car.image || '/placeholder-car.png'} alt={`${car.brand} ${car.model}`} fill className="object-cover" unoptimized={car.image?.startsWith('data:')} />
                    <div className="absolute top-4 left-4">
                      <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{car.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                    <p className="text-gray-600 mb-4">{car.brand} {car.model} ({car.year})</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center"><Users className="h-4 w-4 text-gray-400 mr-2" /><span className="text-sm text-gray-600">{car.seats} asientos</span></div>
                      <div className="flex items-center"><Settings className="h-4 w-4 text-gray-400 mr-2" /><span className="text-sm text-gray-600">{car.transmission}</span></div>
                      <div className="flex items-center"><Fuel className="h-4 w-4 text-gray-400 mr-2" /><span className="text-sm text-gray-600">{car.fuelType}</span></div>
                      <div className="flex items-center"><CarIcon className="h-4 w-4 text-gray-400 mr-2" /><span className="text-sm text-gray-600">{car.category}</span></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">desde €{car.pricePerDay.toFixed(2)}</span>
                        <span className="text-gray-500 text-sm">/día</span>
                      </div>
                      <button onClick={() => handleBookNow(car)} className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors font-semibold">Reservar</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link href="/es/flota" className="inline-block bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors font-semibold">
              Ver Toda la Flota
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Explore Tetuán y sus Alrededores
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Tetuán, conocida como la "Paloma Blanca", es el punto de partida ideal para explorar el norte de Marruecos. Con un coche de alquiler de Nassoh Car, podrá visitar fácilmente la medina (Patrimonio de la Humanidad por la UNESCO), las playas cercanas y las montañas del Rif.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-teal-600 mb-3 flex items-center">
                    <CarIcon className="w-5 h-5 mr-2" /> Libertad de Movimiento
                  </h3>
                  <p className="text-gray-600">
                    Visite Chefchaouen, la Perla Azul, a su propio ritmo. Conduzca hasta las playas de Martil, M'diq y Fnideq sin depender del transporte público.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-teal-600 mb-3 flex items-center">
                    <Navigation className="w-5 h-5 mr-2" /> Servicio en el Aeropuerto
                  </h3>
                  <p className="text-gray-600">
                    Recogida gratuita en el Aeropuerto de Tetuán Sania Ramel. Nuestro agente le esperará a su llegada para entregarle el vehículo.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Nuestros Puntos de Entrega en Tetuán
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Navigation className="h-6 w-6 text-teal-600" />
                  </div>
                  <strong className="block text-gray-900 text-lg mb-2">Aeropuerto Sania Ramel</strong>
                  <p className="text-gray-600 text-sm">Servicio de bienvenida y entrega inmediata a la salida de su vuelo.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <strong className="block text-gray-900 text-lg mb-2">Centro de Tetuán</strong>
                  <p className="text-gray-600 text-sm">Entrega en su hotel o en un punto céntrico de la ciudad.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-teal-600" />
                  </div>
                  <strong className="block text-gray-900 text-lg mb-2">Costa de Tetuán</strong>
                  <p className="text-gray-600 text-sm">Servicio disponible en los hoteles de Martil, Cabo Negro, M'diq y Fnideq.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {selectedCar && (
        <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} car={selectedCar} />
      )}
    </div>
  )
}
