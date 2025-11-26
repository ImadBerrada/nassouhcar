'use client'

import { useState, useEffect } from 'react'
import { Plane, Clock, MapPin, Star, Users, Settings, Fuel, Car as CarIcon } from 'lucide-react'
import Image from 'next/image'
import BookingModal from '@/components/BookingModal'
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

export default function LocationVoitureTangerAeroport() {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.getCars()
        const carsResponse = (response && Array.isArray(response.cars))
          ? response.cars
          : Array.isArray(response)
            ? response
            : []
        setCars(carsResponse.filter((car: Car) => car.available))
      } catch (error) {
        console.error('Error fetching cars:', error)
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
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
              <Plane className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Location Voiture Tanger Aéroport
            <span className="block text-2xl md:text-3xl text-blue-200 mt-2">
              Ibn Battouta Airport
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Service location voiture Tanger aéroport. 
            Récupérez votre véhicule directement à l'arrivée et explorez le Maroc en toute liberté. 
            Nassoh Car vous offre les meilleurs tarifs et un service économique 24h/7j.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Clock className="h-8 w-8 text-blue-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Service 24h/7j</h3>
              <p className="text-blue-100 text-sm">Disponible à tous les vols</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <MapPin className="h-8 w-8 text-blue-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Récupération Rapide</h3>
              <p className="text-blue-100 text-sm">Directement au terminal</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Star className="h-8 w-8 text-blue-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Meilleurs Prix</h3>
              <p className="text-blue-100 text-sm">location voiture pas cher</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cars Section (moved above) */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Flotte Disponible à l'Aéroport
            </h2>
            <p className="text-gray-600">
              Choisissez parmi notre sélection de véhicules économiques disponibles pour récupération à l'aéroport Ibn Battouta.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Chargement des véhicules disponibles...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.slice(0, 6).map((car) => (
                <div key={car.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={car.image || '/placeholder-car.png'}
                      alt={`${car.brand} ${car.model}`}
                      fill
                      className="object-cover"
                      unoptimized={car.image?.startsWith('data:')}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {car.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                    <p className="text-gray-600 mb-4">{car.brand} {car.model} ({car.year})</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{car.seats} places</span>
                      </div>
                      <div className="flex items-center">
                        <Settings className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{car.transmission}</span>
                      </div>
                      <div className="flex items-center">
                        <Fuel className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{car.fuelType}</span>
                      </div>
                      <div className="flex items-center">
                        <CarIcon className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{car.category}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">à partir de €{car.pricePerDay.toFixed(2)}</span>
                        <span className="text-gray-500 text-sm">/jour</span>
                      </div>
                      <button
                        onClick={() => handleBookNow(car)}
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                      >
                        Réserver
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Airport Services Section (moved below) */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Nassoh Car à l'Aéroport de Tanger ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre service location voiture Tanger aéroport vous garantit une expérience sans stress dès votre arrivée à Tanger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Plane className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Accueil Aéroport</h3>
              <p className="text-gray-600 text-sm">Notre équipe vous accueille directement à la sortie du terminal</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Remise Rapide</h3>
              <p className="text-gray-600 text-sm">Procédure de remise en moins de 10 minutes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Parking Gratuit</h3>
              <p className="text-gray-600 text-sm">Stationnement gratuit pendant la durée de location</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Service Économique</h3>
                <p className="text-gray-600 text-sm">Véhicules économiques nettoyés et désinfectés</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Informations Aéroport Ibn Battouta</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Adresse</h3>
              <p className="text-blue-200">Aéroport Ibn Battouta, Tanger, Maroc</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Horaires</h3>
              <p className="text-blue-200">24h/24 - 7j/7</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <p className="text-blue-200">+212 631-630013</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingModalOpen && selectedCar && (
        <BookingModal
          car={selectedCar}
          isOpen={isBookingModalOpen}
          onClose={closeBookingModal}
        />
      )}
    </div>
  )
}