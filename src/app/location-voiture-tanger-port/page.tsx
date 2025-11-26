'use client'

import { useState, useEffect } from 'react'
import { Ship, Anchor, MapPin, Star, Users, Settings, Fuel, Car as CarIcon, Clock } from 'lucide-react'
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

export default function LocationVoitureTangerPort() {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  useEffect(() => {
    const fetchCars = async () => {
      try {
        // Request only available cars when supported by the API
        const data = await api.getCars({ available: true })

        // Normalize various possible response shapes (array, {cars: [...]}, {data: [...]})
        const carsArray: unknown = Array.isArray(data)
          ? data
          : (data as any)?.cars ?? (data as any)?.data ?? []

        const safeCars: Car[] = Array.isArray(carsArray)
          ? (carsArray as Car[]).filter((car) => car && (car as any).available !== false)
          : []

        setCars(safeCars)
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
      <div className="relative bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
              <Ship className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Location Voiture Tanger Port Med
            <span className="block text-2xl md:text-3xl text-teal-200 mt-2">
            </span>
          </h1>
          
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Service de location de voiture au Port Tanger Med. 
            Arrivée en ferry depuis l'Espagne ? Récupérez votre véhicule directement au port 
            et continuez votre voyage au Maroc. Nassoh Car vous facilite la transition.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Anchor className="h-8 w-8 text-teal-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Accueil Ferry</h3>
              <p className="text-teal-100 text-sm">Service à l'arrivée des ferries</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Clock className="h-8 w-8 text-teal-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Disponible 24h/7j</h3>
              <p className="text-teal-100 text-sm">Selon horaires des ferries</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Star className="h-8 w-8 text-teal-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Location voiture pas cher </h3>
              <p className="text-teal-100 text-sm">Prix spéciaux port Tanger Med</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cars Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Véhicules Disponibles au Port
            </h2>
            <p className="text-gray-600">
              Notre flotte économique vous attend au Port Tanger Med pour continuer votre voyage au Maroc.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div>
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
                      <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                        className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors font-semibold"
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

      {/* Ferry Routes Section */}
      <div className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Liaisons Ferry Desservies
            </h2>
            <p className="text-gray-600">
              Nous accueillons les passagers de toutes les liaisons ferry arrivant au Port Tanger Med.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">🇪🇸 Depuis l'Espagne</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Algésiras - Tanger Med</li>
                <li>• Tarifa - Tanger Med</li>
                <li>• Motril - Tanger Med</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">🇫🇷 Depuis la France</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Sète - Tanger Med</li>
                <li>• Marseille - Tanger Med</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">🇮🇹 Depuis l'Italie</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Gênes - Tanger Med</li>
                <li>• Civitavecchia - Tanger Med</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Port Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Location au Port Tanger Med
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre service spécialisé au port Tanger Med vous permet de récupérer votre véhicule 
              dès votre arrivée en ferry depuis l'Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Ship className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Accueil Ferry</h3>
              <p className="text-gray-600 text-sm">Notre équipe vous attend à la sortie du terminal ferry</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Localisation Facile</h3>
              <p className="text-gray-600 text-sm">Point de rencontre clairement indiqué</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Remise Rapide</h3>
              <p className="text-gray-600 text-sm">Procédure simplifiée en moins de 15 minutes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Service Multilingue</h3>
              <p className="text-gray-600 text-sm">Équipe parlant français, espagnol, anglais</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-16 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Informations Port Tanger Med</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Localisation</h3>
              <p className="text-teal-200">Terminal Ferry, Port Tanger Med, Maroc</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Horaires Ferry</h3>
              <p className="text-teal-200">Selon planning des compagnies</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact Port</h3>
              <p className="text-teal-200">+212 631-630013</p>
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