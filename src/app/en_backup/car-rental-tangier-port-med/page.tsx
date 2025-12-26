'use client'

import { useState, useEffect } from 'react'
import { Ship, Anchor, MapPin, Star, Users, Settings, Fuel, Car as CarIcon, Clock } from 'lucide-react'
import Image from 'next/image'
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

export default function CarRentalTangierPortMedPage() {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await api.getCars({ available: true })
        const carsArray: unknown = Array.isArray(data) ? data : (data as any)?.cars ?? (data as any)?.data ?? []
        const safeCars: Car[] = Array.isArray(carsArray) ? (carsArray as Car[]).filter((car) => car && (car as any).available !== false) : []
        setCars(safeCars)
      } catch {
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
      <div className="relative bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6"><div className="bg-white/10 backdrop-blur-sm p-4 rounded-full"><Ship className="h-12 w-12 text-white" /></div></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Car Rental Tangier Port Med<span className="block text-2xl md:text-3xl text-teal-200 mt-2"></span></h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Car rental service at Tanger Med Port. Arriving by ferry from Europe? Pick up your vehicle right at the port and continue your journey across Morocco. Nassoh Car coordinates with ferry schedules.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"><Anchor className="h-8 w-8 text-teal-200 mx-auto mb-3" /><h3 className="text-white font-semibold mb-2">Ferry Welcome</h3><p className="text-teal-100 text-sm">Service at ferry arrival</p></div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"><Clock className="h-8 w-8 text-teal-200 mx-auto mb-3" /><h3 className="text-white font-semibold mb-2">Available 24/7</h3><p className="text-teal-100 text-sm">Aligned with ferry schedules</p></div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"><Star className="h-8 w-8 text-teal-200 mx-auto mb-3" /><h3 className="text-white font-semibold mb-2">Great Value</h3><p className="text-teal-100 text-sm">Special rates for Tanger Med</p></div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">Vehicles Available at the Port</h2><p className="text-gray-600">Our economy fleet awaits you at Tanger Med to continue your journey.</p></div>
          {loading ? (
            <div className="text-center py-12"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div><p className="text-gray-600">Loading available vehicles...</p></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.slice(0, 6).map((car) => (
                <div key={car.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image src={car.image || '/placeholder-car.png'} alt={`${car.brand} ${car.model}`} fill className="object-cover" unoptimized={car.image?.startsWith('data:')} />
                    <div className="absolute top-4 left-4"><span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{car.category}</span></div>
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
                    <div className="flex items-center justify-between"><div><span className="text-2xl font-bold text-gray-900">from €{car.pricePerDay.toFixed(2)}</span><span className="text-gray-500 text-sm">/day</span></div><button onClick={() => handleBookNow(car)} className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors font-semibold">Book Now</button></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {selectedCar && (<BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} car={selectedCar} />)}
    </div>
  )
}
