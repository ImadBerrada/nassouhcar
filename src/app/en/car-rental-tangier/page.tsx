'use client'

import { useState, useEffect } from 'react'
import { Car as CarIcon, MapPin, Star, Users, Settings, Fuel, Clock, Navigation } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import BookingModal from '@/app/en/components/BookingModal'
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

export default function CarRentalTangierPage() {
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
            Car Rental Tangier
            <span className="block text-2xl md:text-3xl text-orange-200 mt-2">
              Airport, Port & City Center
            </span>
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Rent a car in Tangier with Nassoh Car. 24/7 service at Ibn Battouta Airport,
            Tanger Med Port, and the city center. Explore Morocco freely with our modern fleet
            and competitive rates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <MapPin className="h-8 w-8 text-orange-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">3 Locations</h3>
              <p className="text-orange-100 text-sm">Airport, Port Med & City Center</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Clock className="h-8 w-8 text-orange-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">24/7 Service</h3>
              <p className="text-orange-100 text-sm">Available day and night</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Star className="h-8 w-8 text-orange-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Top Rated</h3>
              <p className="text-orange-100 text-sm">Rated 4.8/5 by our clients</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Fleet in Tangier</h2>
            <p className="text-gray-600">Choose from our wide range of vehicles for every need.</p>
          </div>
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading available vehicles...</p>
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
                      <div className="flex items-center"><Users className="h-4 w-4 text-gray-400 mr-2" /><span className="text-sm text-gray-600">{car.seats} seats</span></div>
                      <div className="flex items-center"><Settings className="h-4 w-4 text-gray-400 mr-2" /><span className="text-sm text-gray-600">{car.transmission}</span></div>
                      <div className="flex items-center"><Fuel className="h-4 w-4 text-gray-400 mr-2" /><span className="text-sm text-gray-600">{car.fuelType}</span></div>
                      <div className="flex items-center"><CarIcon className="h-4 w-4 text-gray-400 mr-2" /><span className="text-sm text-gray-600">{car.category}</span></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">from €{car.pricePerDay.toFixed(2)}</span>
                        <span className="text-gray-500 text-sm">/day</span>
                      </div>
                      <button onClick={() => handleBookNow(car)} className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold">Book Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="text-center mt-12">
            <Link href="/en/fleet" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">View All Our Fleet</Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Locations in Tangier</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose the most convenient location to pick up your rental car in Tangier.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/en/car-rental-tangier-airport" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="bg-blue-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center"><Navigation className="h-8 w-8 text-white" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Ibn Battouta Airport</h3>
                <p className="text-gray-600 text-center mb-4">Meet & Greet 24/7. Pick up right at arrival.</p>
                <div className="text-center"><span className="text-blue-600 font-semibold group-hover:text-blue-700">Learn more →</span></div>
              </div>
            </Link>
            <Link href="/en/car-rental-tangier-port-med" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="bg-green-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center"><MapPin className="h-8 w-8 text-white" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Tanger Med Port</h3>
                <p className="text-gray-600 text-center mb-4">Ferry arrival coordination. Seamless handover at the port.</p>
                <div className="text-center"><span className="text-green-600 font-semibold group-hover:text-green-700">Learn more →</span></div>
              </div>
            </Link>
            <Link href="/en/car-rental-tangier-city-center" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="bg-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center"><CarIcon className="h-8 w-8 text-white" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">City Center</h3>
                <p className="text-gray-600 text-center mb-4">In the heart of Tangier, close to the medina and key sights.</p>
                <div className="text-center"><span className="text-orange-600 font-semibold group-hover:text-orange-700">Learn more →</span></div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Nassoh Car in Tangier?</h2>
            <p className="text-gray-600">Your trusted partner for car rental in Tangier for over 10 years.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center"><div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"><Clock className="h-8 w-8 text-blue-600" /></div><h3 className="font-semibold text-gray-900 mb-2">24/7 Service</h3><p className="text-gray-600 text-sm">Available anytime for your needs</p></div>
            <div className="text-center"><div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"><Star className="h-8 w-8 text-green-600" /></div><h3 className="font-semibold text-gray-900 mb-2">Recent Vehicles</h3><p className="text-gray-600 text-sm">Modern, well-maintained fleet</p></div>
            <div className="text-center"><div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"><CarIcon className="h-8 w-8 text-orange-600" /></div><h3 className="font-semibold text-gray-900 mb-2">Wide Selection</h3><p className="text-gray-600 text-sm">Economy to premium cars</p></div>
            <div className="text-center"><div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"><MapPin className="h-8 w-8 text-purple-600" /></div><h3 className="font-semibold text-gray-900 mb-2">Convenient Pickup</h3><p className="text-gray-600 text-sm">Airport, port, or city center</p></div>
          </div>
        </div>
      </div>

      {selectedCar && (
        <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} car={selectedCar} />
      )}
    </div>
  )
}
