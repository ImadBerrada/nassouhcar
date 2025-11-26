'use client'

import { useState, useEffect } from 'react'
import { Car as CarIcon, MapPin, Star, Users, Settings, Fuel, Clock, Navigation, Phone, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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

export default function LocationVoitureTanger() {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.getCars()
        // The API returns { cars } not { data }
        if (response.cars && Array.isArray(response.cars)) {
          setCars(response.cars.filter((car: Car) => car.available))
        } else {
          console.error('Invalid response format:', response)
          setCars([])
        }
      } catch (error) {
        console.error('Error fetching cars:', error)
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
      {/* Hero Section */}
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
            Location Voiture Tanger
            <span className="block text-2xl md:text-3xl text-orange-200 mt-2">
              Aéroport, Port & Centre-Ville
            </span>
          </h1>
          
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Louez votre voiture à Tanger avec Nassoh Car. Service 24h/24 à l'aéroport Ibn Battouta, 
            au port Tanger Med et en centre-ville. Découvrez le Maroc en toute liberté avec notre 
            flotte moderne et nos tarifs compétitifs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <MapPin className="h-8 w-8 text-orange-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">3 Emplacements</h3>
              <p className="text-orange-100 text-sm">Aéroport, Port Med & Centre-ville</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Clock className="h-8 w-8 text-orange-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Service 24h/24</h3>
              <p className="text-orange-100 text-sm">Disponible jour et nuit</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Star className="h-8 w-8 text-orange-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Meilleur Service</h3>
              <p className="text-orange-100 text-sm">Noté 4.8/5 par nos clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cars Section (moved before Locations) */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Flotte à Tanger
            </h2>
            <p className="text-gray-600">
              Choisissez parmi notre large gamme de véhicules adaptés à tous vos besoins.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
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
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                        className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                      >
                        Réserver
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link 
              href="/fleet" 
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              Voir Toute Notre Flotte
            </Link>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Emplacements à Tanger
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choisissez l'emplacement le plus pratique pour récupérer votre véhicule de location à Tanger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/location-voiture-tanger-aeroport" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="bg-blue-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Navigation className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Aéroport Ibn Battouta</h3>
                <p className="text-gray-600 text-center mb-4">
                  Service Meet & Greet 24h/24. Récupération dès votre arrivée à l'aéroport de Tanger.
                </p>
                <div className="text-center">
                  <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                    En savoir plus →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/location-voiture-tanger-port" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="bg-green-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Port Tanger Med</h3>
                <p className="text-gray-600 text-center mb-4">
                  Accueil ferry coordonné. Service spécialisé pour les voyageurs venant d'Europe.
                </p>
                <div className="text-center">
                  <span className="text-green-600 font-semibold group-hover:text-green-700">
                    En savoir plus →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/location-voiture-tanger-centre-ville" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="bg-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <CarIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Centre-Ville</h3>
                <p className="text-gray-600 text-center mb-4">
                  Au cœur de Tanger, proche de la médina et des principales attractions touristiques.
                </p>
                <div className="text-center">
                  <span className="text-orange-600 font-semibold group-hover:text-orange-700">
                    En savoir plus →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Nassoh Car à Tanger ?
            </h2>
            <p className="text-gray-600">
              Votre partenaire de confiance pour la location de voiture à Tanger depuis plus de 10 ans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Service 24h/24</h3>
              <p className="text-gray-600 text-sm">Disponible à toute heure pour vos besoins</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Véhicules Récents</h3>
              <p className="text-gray-600 text-sm">Flotte moderne et bien entretenue</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Kilométrage Illimité</h3>
              <p className="text-gray-600 text-sm">Explorez le Maroc sans limite</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Support Local</h3>
              <p className="text-gray-600 text-sm">Équipe locale experte et réactive</p>
            </div>
          </div>
        </div>
      </div>

      

      {/* Blog Posts Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Guides et Conseils Tanger</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos guides complets et conseils d'experts pour votre location de voiture à Tanger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/location-voiture-tanger-pas-cher" className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <CarIcon className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-green-600 font-medium">Prix Économiques</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location Pas Cher Tanger</h3>
              <p className="text-gray-600 text-sm">Tarifs imbattables dès 170 DH/jour avec véhicules fiables et service complet.</p>
            </Link>

            <Link href="/blog/location-voiture-aeroport-tanger" className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Navigation className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm text-blue-600 font-medium">Aéroport</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location à l'Aéroport</h3>
              <p className="text-gray-600 text-sm">Service express à l'aéroport de Tanger avec livraison immédiate et formalités simplifiées.</p>
            </Link>

            <Link href="/blog/location-voiture-tanger-med" className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <MapPin className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-sm text-purple-600 font-medium">Port Tanger Med</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location Tanger Med</h3>
              <p className="text-gray-600 text-sm">Service spécialisé au complexe portuaire avec coordination ferry et assistance multilingue.</p>
            </Link>

            <Link href="/blog/location-voiture-au-port-de-tanger" className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Clock className="h-5 w-5 text-orange-600 mr-2" />
                <span className="text-sm text-orange-600 font-medium">Port Express</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location au Port</h3>
              <p className="text-gray-600 text-sm">Service express au port de Tanger avec livraison gratuite et formalités simplifiées.</p>
            </Link>

            <Link href="/blog/location-voiture-tanger-boukhalef" className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Navigation className="h-5 w-5 text-teal-600 mr-2" />
                <span className="text-sm text-teal-600 font-medium">Aéroport Ibn Battuta</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location Boukhalef</h3>
              <p className="text-gray-600 text-sm">Service à l'aéroport Ibn Battuta avec véhicules récents et assistance dédiée.</p>
            </Link>

            <Link href="/blog/location-voiture-tetouan" className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Star className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-sm text-indigo-600 font-medium">Région du Rif</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location Tétouan</h3>
              <p className="text-gray-600 text-sm">Service économique à Tétouan dès 175 DH/jour pour explorer la région du Rif.</p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/blog" 
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              Voir Tous les Guides
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contactez-Nous</h2>
            <p className="text-orange-200 max-w-2xl mx-auto">
              Notre équipe est disponible 24h/24 pour répondre à vos questions et vous accompagner 
              dans votre location de voiture à Tanger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-orange-200" />
              </div>
              <h3 className="font-semibold mb-2">Téléphone</h3>
              <p className="text-orange-200">+212 631-630013</p>
              <p className="text-orange-300 text-sm mt-1">Disponible 24h/24</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-8 w-8 text-orange-200" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-orange-200">info@nassohcar.com</p>
              <p className="text-orange-300 text-sm mt-1">Réponse sous 2h</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-orange-200" />
              </div>
              <h3 className="font-semibold mb-2">Emplacements</h3>
              <p className="text-orange-200">Aéroport, Port Med, Centre-ville</p>
              <p className="text-orange-300 text-sm mt-1">3 points de retrait</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-orange-900 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
            >
              Nous Contacter
            </Link>
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