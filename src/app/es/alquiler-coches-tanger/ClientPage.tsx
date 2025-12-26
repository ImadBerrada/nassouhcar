'use client'

import { useState, useEffect } from 'react'
import { Car as CarIcon, MapPin, Star, Users, Settings, Fuel, Clock, Navigation } from 'lucide-react'
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

export default function CarRentalTangierClient() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="relative bg-gradient-to-r from-orange-900 via-orange-800 to-orange-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
              <CarIcon className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Alquiler de Coches en Tánger
            <span className="block text-2xl md:text-3xl text-orange-200 mt-2">
              Aeropuerto, Puerto y Centro de la Ciudad
            </span>
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Alquile un coche en Tánger con Nassoh Car. Servicio 24/7 en el Aeropuerto Ibn Battouta,
            Puerto Tanger Med y centro de la ciudad. Explore Marruecos libremente con nuestra flota moderna
            y tarifas competitivas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <MapPin className="h-8 w-8 text-orange-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">3 Ubicaciones</h3>
              <p className="text-orange-100 text-sm">Aeropuerto, Puerto Med y Centro</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Clock className="h-8 w-8 text-orange-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Servicio 24/7</h3>
              <p className="text-orange-100 text-sm">Disponible día y noche</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Star className="h-8 w-8 text-orange-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Mejor Valorado</h3>
              <p className="text-orange-100 text-sm">Valorado 4.8/5 por nuestros clientes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Flota en Tánger</h2>
            <p className="text-gray-600">Elija entre nuestra amplia gama de vehículos para cada necesidad.</p>
          </div>
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Cargando vehículos disponibles...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.slice(0, 6).map((car) => (
                <div key={car.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image src={car.image || '/placeholder-car.png'} alt={`${car.brand} ${car.model}`} fill className="object-cover" unoptimized={car.image?.startsWith('data:')} />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{car.category}</span>
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
                      <button onClick={() => handleBookNow(car)} className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold">Reservar Ahora</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="text-center mt-12">
            <Link href="/es/flota" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">Ver Toda Nuestra Flota</Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestras Ubicaciones en Tánger</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Elija la ubicación más conveniente para recoger su coche de alquiler en Tánger.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/es/alquiler-coches-aeropuerto-tanger" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="bg-blue-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center"><Navigation className="h-8 w-8 text-white" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Aeropuerto Ibn Battouta</h3>
                <p className="text-gray-600 text-center mb-4">Meet & Greet 24/7. Recogida justo a la llegada.</p>
                <div className="text-center"><span className="text-blue-600 font-semibold group-hover:text-blue-700">Saber más →</span></div>
              </div>
            </Link>
            <Link href="/es/alquiler-coches-puerto-tanger-med" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="bg-green-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center"><MapPin className="h-8 w-8 text-white" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Puerto Tanger Med</h3>
                <p className="text-gray-600 text-center mb-4">Coordinación con llegada de ferry. Entrega fluida en el puerto.</p>
                <div className="text-center"><span className="text-green-600 font-semibold group-hover:text-green-700">Saber más →</span></div>
              </div>
            </Link>
            <Link href="/es/alquiler-coches-tanger-centro" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="bg-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center"><CarIcon className="h-8 w-8 text-white" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Centro de la Ciudad</h3>
                <p className="text-gray-600 text-center mb-4">En el corazón de Tánger, cerca de la medina y lugares clave.</p>
                <div className="text-center"><span className="text-orange-600 font-semibold group-hover:text-orange-700">Saber más →</span></div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegir Nassoh Car en Tánger?</h2>
            <p className="text-gray-600">Su socio de confianza para el alquiler de coches en Tánger desde hace más de 10 años.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center"><div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"><Clock className="h-8 w-8 text-blue-600" /></div><h3 className="font-semibold text-gray-900 mb-2">Servicio 24/7</h3><p className="text-gray-600 text-sm">Disponible en cualquier momento</p></div>
            <div className="text-center"><div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"><Star className="h-8 w-8 text-green-600" /></div><h3 className="font-semibold text-gray-900 mb-2">Vehículos Recientes</h3><p className="text-gray-600 text-sm">Flota moderna y bien mantenida</p></div>
            <div className="text-center"><div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"><CarIcon className="h-8 w-8 text-orange-600" /></div><h3 className="font-semibold text-gray-900 mb-2">Amplia Selección</h3><p className="text-gray-600 text-sm">Coches económicos a premium</p></div>
            <div className="text-center"><div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"><MapPin className="h-8 w-8 text-purple-600" /></div><h3 className="font-semibold text-gray-900 mb-2">Recogida Conveniente</h3><p className="text-gray-600 text-sm">Aeropuerto, puerto o centro</p></div>
          </div>
        </div>
      </div>

      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} car={selectedCar} />
    </div>
  )
}
