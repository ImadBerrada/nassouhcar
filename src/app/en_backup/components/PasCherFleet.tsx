"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { api } from '@/lib/api'
import { Users, Settings, Fuel } from 'lucide-react'
import BookingModal from '@/app/en/components/BookingModal'

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
  image?: string
  available: boolean
}

export default function PasCherFleet() {
  const [cars, setCars] = useState<Car[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.getCars()
        const carsData = Array.isArray(response.cars) ? response.cars : []
        setCars(carsData.filter((car: Car) => car.available))
      } catch {}
    }
    fetchCars()
  }, [])

  const handleReserve = (car: Car) => { setSelectedCar(car); setIsModalOpen(true) }
  const handleCloseModal = () => { setSelectedCar(null); setIsModalOpen(false) }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.slice(0, 6).map((car) => (
          <div key={car.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <Image src={car.image || '/placeholder-car.png'} alt={`${car.brand} ${car.model}`} fill className="object-cover" unoptimized={car.image?.startsWith('data:')} />
              <div className="absolute top-4 left-4"><span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{car.category}</span></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
              <p className="text-gray-600 mb-4">{car.brand} {car.model} ({car.year})</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center"><Users className="h-4 w-4 text-gray-400 mr-2" /><span className="text-sm text-gray-600">{car.seats} seats</span></div>
                <div className="flex items-center"><Settings className="h-4 w-4 text-gray-400 mr-2" /><span className="text-sm text-gray-600">{car.transmission}</span></div>
                <div className="flex items-center"><Fuel className="h-4 w-4 text-gray-400 mr-2" /><span className="text-sm text-gray-600">{car.fuelType}</span></div>
              </div>
              <div className="flex items-center justify-between">
                <div><span className="text-2xl font-bold text-gray-900">from €{car.pricePerDay.toFixed(2)}</span><span className="text-gray-500 text-sm">/day</span></div>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold" onClick={() => handleReserve(car)}>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} car={selectedCar} />
    </>
  )
}
