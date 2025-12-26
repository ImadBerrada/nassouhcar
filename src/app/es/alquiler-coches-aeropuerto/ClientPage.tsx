'use client'

import { useState, useEffect } from 'react'
import { Car as CarIcon, MapPin, Star, Users, Settings, Fuel, Clock, Navigation, CheckCircle, Plane, FileText, Key, Shield, Info } from 'lucide-react'
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

export default function AirportCarRentalClient() {
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
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Alquiler de Coches en el Aeropuerto en Marruecos
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Servicio de recogida directamente en el aeropuerto - Tánger, Tetuán, Casablanca
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">✓ Recogida gratuita</span>
              <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">✓ Servicio 24h/24</span>
              <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">✓ Reserva online</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vehículos Disponibles en Aeropuertos</h2>
            <p className="text-gray-600">Reserve su coche ahora y recójalo a su llegada.</p>
          </div>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Cargando vehículos disponibles...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.slice(0, 6).map((car) => (
                <div key={car.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image src={car.image || '/placeholder-car.png'} alt={`${car.brand} ${car.model}`} fill className="object-cover" unoptimized={car.image?.startsWith('data:')} />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{car.category}</span>
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
                      <button onClick={() => handleBookNow(car)} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold">Reservar</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link href="/es/flota" className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
              Ver Toda la Flota
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Nuestros Servicios Aeroportuarios
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="text-4xl text-blue-600 mb-4 flex justify-center"><Plane className="h-12 w-12" /></div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    Recogida en Aeropuerto
                  </h3>
                  <p className="text-gray-600">
                    Nuestro equipo le recibe directamente en el aeropuerto con su vehículo listo.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="text-4xl text-blue-600 mb-4 flex justify-center"><CarIcon className="h-12 w-12" /></div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    Vehículo Listo
                  </h3>
                  <p className="text-gray-600">
                    Su coche está limpio, revisado y listo para partir desde su llegada.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="text-4xl text-blue-600 mb-4 flex justify-center"><Clock className="h-12 w-12" /></div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    Trámites Rápidos
                  </h3>
                  <p className="text-gray-600">
                    Procedimiento de recogida simplificado para ahorrar tiempo.
                  </p>
                </div>
              </div>
            </div>

            {/* Airport Locations */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Aeropuertos Atendidos
              </h2>
              
              <div className="grid gap-6">
                {/* Tanger Airport */}
                <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                        Aeropuerto Tánger Ibn Battouta (TNG)
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Alquiler de coches en el aeropuerto de Tánger con servicio de recogida gratuito. 
                        Nuestro equipo le espera en el hall de llegadas con su vehículo.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-600 mr-2" /> Recogida gratuita 24h/24</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-600 mr-2" /> Punto de encuentro: Hall de llegadas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tetouan Airport */}
                <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                        Aeropuerto Tetuán Sania Ramel (TTU)
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Servicio de alquiler de coches en el aeropuerto de Tetuán para explorar el Rif y 
                        las playas mediterráneas desde su llegada.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-600 mr-2" /> Servicio disponible todos los días</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-600 mr-2" /> Entrega directa en el aeropuerto</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Casablanca Airport */}
                <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                        Aeropuerto Casablanca Mohammed V (CMN)
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Alquiler de coches en el aeropuerto de Casablanca, el aeropuerto más grande de Marruecos. 
                        Servicio económico para viajeros de negocios y ocio.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-600 mr-2" /> Terminal 1 y Terminal 2</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-600 mr-2" /> Flota económica y familiar</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                ¿Cómo Funciona?
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Reserve</h3>
                  <p className="text-gray-600 text-sm">
                    Reserve su coche online indicando su vuelo de llegada
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Aterrice</h3>
                  <p className="text-gray-600 text-sm">
                    A su llegada, nuestro equipo le espera en el hall
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Firme</h3>
                  <p className="text-gray-600 text-sm">
                    Trámites rápidos y firma del contrato de alquiler
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Parta</h3>
                  <p className="text-gray-600 text-sm">
                    Recoja su coche y comience su viaje
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Ventajas del Servicio Aeroportuario
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center">
                      <Clock className="w-5 h-5 mr-2" /> Ahorro de Tiempo
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                        Sin traslados a la agencia
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                        Trámites simplificados
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                        Salida inmediata
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center">
                      <Shield className="w-5 h-5 mr-2" /> Confort y Seguridad
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                        Vehículo limpio y desinfectado
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                        Control técnico al día
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                        Asistencia 24h/24
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Preguntas Frecuentes
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2 flex items-center">
                    <Info className="w-5 h-5 mr-2" /> ¿La recogida en el aeropuerto es gratuita?
                  </h3>
                  <p className="text-gray-600 ml-7">
                    Sí, la recogida en el aeropuerto es totalmente gratuita para todos nuestros alquileres.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2 flex items-center">
                    <Clock className="w-5 h-5 mr-2" /> ¿Cuánto tiempo debo esperar?
                  </h3>
                  <p className="text-gray-600 ml-7">
                    Nuestro equipo le espera máximo 15 minutos después de su salida del hall de llegadas.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2 flex items-center">
                    <Plane className="w-5 h-5 mr-2" /> ¿Qué pasa si mi vuelo se retrasa?
                  </h3>
                  <p className="text-gray-600 ml-7">
                    Seguimos los horarios de vuelo en tiempo real. Nuestro equipo se adapta automáticamente a los retrasos.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 text-white p-8 rounded-xl text-center shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Reserve su Alquiler en el Aeropuerto
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Servicio de recogida gratuito - Disponible 24h/24 en todos nuestros aeropuertos
              </p>
              <Link 
                href="/es#booking" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md"
              >
                Reservar Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {selectedCar && (
        <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} car={selectedCar} />
      )}
    </div>
  )
}
