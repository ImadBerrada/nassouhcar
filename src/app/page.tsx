'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Calendar, Car, ChevronDown, Shield, ArrowRight, ChevronLeft, ChevronRight, Users, Settings, Fuel } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { api } from '@/lib/api'
import StructuredData from '@/components/StructuredData'
import { useBooking } from '@/contexts/BookingContext'
import WhatsAppPopup from '@/components/WhatsAppPopup'
import GoogleReviews from '@/components/GoogleReviews'

// Move the Car interface to the top of the file
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
  description?: string
  features: string[]
  available: boolean
}

export default function Home() {
  const router = useRouter()
  const { bookingData, updateBookingData } = useBooking()
  const [isSearching, setIsSearching] = useState(false)
  const [cars, setCars] = useState<Car[]>([])  
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)


  // Fetch cars for fleet section
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.getCars({ available: true })
        setCars(response.cars || [])
      } catch (error) {
        console.error('Failed to fetch cars:', error)
      }
    }
    fetchCars()
  }, [])

  // Calculate slides for fleet carousel
  const carsPerSlide = 3
  const totalSlides = Math.ceil(cars.length / carsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }





  // Mouse drag handlers for fleet carousel
  const handleFleetMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0))
    setScrollLeft(sliderRef.current?.scrollLeft || 0)
  }

  const handleFleetMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    const newScrollLeft = scrollLeft - walk
    
    // Calculate which slide we should be on based on scroll position
    const slideWidth = sliderRef.current?.offsetWidth || 0
    const newSlide = Math.round(newScrollLeft / slideWidth)
    const clampedSlide = Math.max(0, Math.min(newSlide, totalSlides - 1))
    
    if (clampedSlide !== currentSlide) {
      setCurrentSlide(clampedSlide)
    }
  }

  const handleFleetMouseUp = () => {
    setIsDragging(false)
  }

  const handleFleetMouseLeave = () => {
    setIsDragging(false)
  }



  const locations = [
    { value: 'tangier-airport', label: 'Aéroport de Tanger Ibn Battouta' },
    { value: 'tangier-port', label: 'Port de Tanger Ville' },
    { value: 'tangier-med', label: 'Port Tanger Med' },
    { value: 'tangier-train', label: 'Gare de Tanger' },
    { value: 'tetouan', label: 'Centre-ville de Tétouan' },
    { value: 'nassoh-agency', label: 'Agence Nassoh Car' },
    { value: 'hotel-delivery', label: "Livraison à l'hôtel" },
    { value: 'fes-airport', label: 'Aéroport de Fès' },
    { value: 'marrakech-airport', label: 'Aéroport de Marrakech' },
    { value: 'rabat-sale-airport', label: 'Aéroport de Rabat-Salé' },
    { value: 'casablanca-airport', label: 'Aéroport de Casablanca' },
    { value: 'agadir-airport', label: "Aéroport d'Agadir" }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    updateBookingData({ [name]: value })
  }

  const handleBookingSearch = () => {
    // Validate form
    if (!bookingData.pickupLocation || !bookingData.startDate || !bookingData.endDate) {
      alert('Veuillez remplir tous les champs obligatoires')
      return
    }

    if (new Date(bookingData.startDate) >= new Date(bookingData.endDate)) {
      alert("La date de fin doit être après la date de début")
      return
    }

    setIsSearching(true)
    
    // Redirect to fleet page with search parameters
    const searchParams = new URLSearchParams({
      pickup: bookingData.pickupLocation,
      dropoff: bookingData.dropoffLocation || bookingData.pickupLocation,
      startDate: bookingData.startDate,
      endDate: bookingData.endDate
    })
    
    router.push(`/fleet?${searchParams.toString()}`)
  }

  const articles = [
    {
      title: "Tangier Car Rental: 5 Hidden Gems You Can Drive To in 2025",
      date: "August 23, 2025",
      excerpt: "Introduction Tangier car rental is the best way to...",
      image: "/tangier.webp",
      citySlug: "tangier"
    },
    {
      title: "Location Voiture Tanger Port - Service Économique 24h/24",
      date: "December 15, 2024",
      excerpt: "Service de location de voiture au port de Tanger avec livraison gratuite. Flotte moderne, tarifs transparents et assistance 24h/24 pour vos déplacements depuis le port.",
      image: "/tanger port.webp",
      citySlug: "location-voiture-tanger-port"
    },
    {
      title: "Location Voiture Tétouan Aéroport - Service Express",
      date: "December 8, 2024",
      excerpt: "Service de location de voiture à l'aéroport de Tétouan avec récupération express. Flotte moderne, formalités simplifiées et départ immédiat vers votre destination.",
      image: "/Aeroport-de-Tetouan.webp",
      citySlug: "location-voiture-tetouan-aeroport"
    },
    {
      title: "Location Voiture Pas Cher Tanger - Meilleurs Prix 2024",
      date: "December 13, 2024",
      excerpt: "Trouvez les meilleures offres de location de voiture à Tanger. Comparaison des prix, véhicules économiques et promotions exclusives pour économiser sur votre location.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      citySlug: "location-voiture-pas-cher-tanger"
    }
  ];

  return (
    <div className="relative">
      {/* Structured Data for SEO */}
      <StructuredData type="LocalBusiness" countryTarget="MA" language="fr" />
      <StructuredData type="AutoRental" countryTarget="MA" language="fr" />
      <StructuredData type="Service" countryTarget="MA" language="fr" />

      {/* Hero Section with Booking Form */}
      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner" aria-label="Car rental booking hero section">
        {/* Voiture Économique Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Location de voiture économique Tanger aéroport Ibn Battouta - Service de location abordable Morocco - Nassoh Car"
            fill
            className="object-cover object-center scale-110"
            priority
            fetchPriority="high"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/40"></div>
        </div>
        
        {/* Enhanced Visual Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-transparent to-amber-400/5 animate-pulse"></div>
        
        {/* Dynamic Light Effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-radial from-yellow-400/15 via-orange-500/10 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Enhanced Main Heading - SEO Optimized */}
          <div className="text-center mb-12 animate-float">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
              <span className="text-white drop-shadow-2xl">LOCATION VOITURE TANGER</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent animate-pulse">
                NASSOH CAR - TANGER
              </span>
              {/* Glowing effect behind text */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-yellow-300/20 to-amber-400/20 blur-3xl -z-10 animate-pulse"></div>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6 opacity-90">
              <strong>Location voiture Tanger</strong> – Service 24h/24, Livraison Gratuite.
            </p>
          </div>
          
          {/* Formulaire de Réservation Économique */}
          <div className="max-w-4xl mx-auto relative">
            {/* Form glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-yellow-400/5 to-amber-400/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/10 backdrop-blur-md border border-amber-400/30 rounded-3xl p-8 shadow-2xl hover:shadow-amber-400/20 transition-all duration-500">
              {/* Form Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
                {/* Pick-up Location */}
                <div className="sm:col-span-2 lg:col-span-1">
                  <label htmlFor="pickupLocation" className="block text-white font-medium mb-2 text-sm lg:text-base">
                    Lieu de Prise en Charge *
                  </label>
                  <div className="relative">
                    <select 
                      id="pickupLocation"
                      name="pickupLocation"
                      value={bookingData.pickupLocation}
                    onChange={handleInputChange}
                      className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-amber-400 focus:outline-none focus:border-amber-400 appearance-none text-sm lg:text-base min-h-[44px]"
                      required
                    >
                      <option value="" className="bg-slate-800">Sélectionner un lieu</option>
                      {locations.map(location => (
                        <option key={location.value} value={location.value} className="bg-slate-800">
                          {location.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-amber-400 pointer-events-none" />
                  </div>
                </div>
                
                {/* Start Date */}
                <div>
                  <label htmlFor="startDate" className="block text-white font-medium mb-2 text-sm lg:text-base">
                    Date de Début *
                  </label>
                  <input 
                    type="date" 
                    id="startDate"
                    name="startDate"
                    value={bookingData.startDate}
                  onChange={handleInputChange}
                    lang="fr"
                    placeholder="dd/mm/yyyy"
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-gray-900 focus:outline-none focus:border-amber-400 text-sm lg:text-base min-h-[44px]"
                    required
                  />
                </div>
                
                {/* End Date */}
                <div>
                  <label htmlFor="endDate" className="block text-white font-medium mb-2 text-sm lg:text-base">
                    Date de Fin *
                  </label>
                  <input 
                    type="date" 
                    id="endDate"
                    name="endDate"
                    value={bookingData.endDate}
                  onChange={handleInputChange}
                  lang="fr"
                  placeholder="dd/mm/yyyy"
                  min={bookingData.startDate || new Date().toISOString().split('T')[0]}
                    className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-gray-900 focus:outline-none focus:border-amber-400 text-sm lg:text-base min-h-[44px]"
                    required
                  />
                </div>
                
                {/* Drop-off Location */}
                <div className="sm:col-span-2 lg:col-span-1">
                  <label htmlFor="dropoffLocation" className="block text-white font-medium mb-2 text-sm lg:text-base">
                    Lieu de Retour
                  </label>
                  <div className="relative">
                    <select 
                      id="dropoffLocation"
                      name="dropoffLocation"
                      value={bookingData.dropoffLocation}
                    onChange={handleInputChange}
                      className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-amber-400 focus:outline-none focus:border-amber-400 appearance-none text-sm lg:text-base min-h-[44px]"
                    >
                      <option value="" className="bg-slate-800">Même lieu que la prise en charge</option>
                      {locations.map(location => (
                        <option key={location.value} value={location.value} className="bg-slate-800">
                          {location.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-amber-400 pointer-events-none" />
                  </div>
                </div>
              </div>
              
              {/* Book Button - Separate row for better alignment */}
              <div className="flex justify-center">
                <button 
                  onClick={handleBookingSearch}
                  disabled={isSearching}
                  className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-3 px-8 lg:px-12 rounded-xl hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base min-w-[200px]"
                >
                  {isSearching ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                      RECHERCHE...
                    </div>
                  ) : (
                     'RÉSERVER UNE VOITURE'
                   )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Fleet Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black" aria-label="Our vehicle fleet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Notre Flotte de <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Voitures</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              <Link href="/fleet" className="text-amber-400 hover:text-amber-300 underline font-medium"><strong>Flotte de voitures de location à Tanger</strong></Link> - véhicules économiques, prix compétitifs, service 24h/24.
            </p>
          </header>

        {cars.length > 0 ? (
          <div className="relative">
            {/* Navigation Arrows */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  aria-label="Voiture précédente"
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-amber-400/20 hover:bg-amber-400/30 backdrop-blur-md border border-amber-400/30 rounded-full p-3 transition-all duration-300 group"
                >
                  <ChevronLeft className="h-6 w-6 text-amber-400 group-hover:text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Voiture suivante"
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-amber-400/20 hover:bg-amber-400/30 backdrop-blur-md border border-amber-400/30 rounded-full p-3 transition-all duration-300 group"
                >
                  <ChevronRight className="h-6 w-6 text-amber-400 group-hover:text-white" />
                </button>
              </>
            )}

            {/* Cars Slider */}
            <div className="overflow-hidden mx-12">
              <div 
                ref={sliderRef}
                className={`flex transition-transform duration-500 ease-in-out select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onMouseDown={handleFleetMouseDown}
                onMouseMove={handleFleetMouseMove}
                onMouseUp={handleFleetMouseUp}
                onMouseLeave={handleFleetMouseLeave}
                draggable={false}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {cars
                        .slice(slideIndex * carsPerSlide, (slideIndex + 1) * carsPerSlide)
                        .map((car) => (
                          <div key={car.id} className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                            {/* Car Image */}
                            <div className="relative h-48 overflow-hidden">
                              <Image
                                src={car.image || '/placeholder-car.png'}
                                alt={`Location de voiture ${car.brand} ${car.model} au Maroc - Car rental ${car.brand} ${car.model} in Morocco`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                loading="lazy"
                                placeholder={car.image?.startsWith('data:') ? undefined : "blur"}
                                blurDataURL={car.image?.startsWith('data:') ? undefined : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="}
                                unoptimized={car.image?.startsWith('data:')}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                              <div className="absolute top-4 right-4 bg-amber-400/90 text-black px-3 py-1 rounded-full text-sm font-bold">
                                à partir de €{car.pricePerDay.toFixed(2)}/jour
                              </div>
                            </div>

                            {/* Car Details */}
                            <div className="p-6">
                              <div className="mb-4">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                                  {car.name}
                                </h3>
                                <p className="text-amber-400 text-sm">{car.brand} {car.model} • {car.year}</p>
                              </div>

                              {/* Car Features */}
                              <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="flex items-center text-gray-300">
                                  <Users className="h-4 w-4 mr-2 text-amber-400" />
                                  <span className="text-sm">{car.seats} places</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                  <Settings className="h-4 w-4 mr-2 text-amber-400" />
                                  <span className="text-sm">{car.transmission === 'Manual' ? 'Manuelle' : car.transmission}</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                  <Fuel className="h-4 w-4 mr-2 text-amber-400" />
                                  <span className="text-sm">{car.fuelType === 'Diesel' ? 'Diesel' : car.fuelType}</span>
                                </div>
                              </div>

                              {/* Book Button */}
                              <button 
                                onClick={() => router.push(`/fleet?car=${car.id}`)}
                                className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-3 px-6 rounded-xl hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
                              >
                                Réserver
                              </button>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            {totalSlides > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Aller à la voiture ${index + 1}`}
                    className={`w-8 h-8 rounded-full transition-all duration-300 p-1 ${
                      index === currentSlide 
                        ? 'bg-amber-400 scale-110' 
                        : 'bg-amber-400/30 hover:bg-amber-400/50'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* View All Fleet Button */}
            <div className="text-center mt-12">
              <button 
                onClick={() => router.push('/fleet')}
                className="bg-white/10 backdrop-blur-md border border-amber-400/30 text-white font-bold py-4 px-8 rounded-xl hover:bg-amber-400/20 hover:border-amber-400 transition-all duration-300 flex items-center mx-auto"
              >
                Voir Toute la Flotte
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400 mx-auto mb-4"></div>
            <p className="text-gray-300">Loading our amazing fleet...</p>
          </div>
        )}
        </div>
      </section>

      {/* Blog Section - SEO Optimized */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Guide <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Location Voiture Tanger</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              <strong>Guides location voiture Tanger</strong> et conseils d&apos;experts pour votre voyage au Maroc.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog 1 - Location Voiture Tanger */}
            <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
              <div className="relative h-48">
                <Image
                  src="/tangier.webp"
                  alt="Location de voiture Tanger - Guide complet Nassoh Car"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <p className="text-amber-400 text-sm mb-2">Guide Expert</p>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  Location de Voiture Tanger - Guide Complet 2025
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Tout ce que vous devez savoir pour louer une voiture à Tanger : prix, documents, conseils pratiques et meilleures offres.
                </p>
                <Link href="/blog/location-voiture-tanger" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">
                  Lire le Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>

            {/* Blog 2 - Location Voiture Tanger Aéroport */}
            <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
              <div className="relative h-48">
                <Image
                  src="/tanger.webp"
                  alt="Location de voiture Tanger aéroport Ibn Battouta - Service 24h/24"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <p className="text-amber-400 text-sm mb-2">Aéroport</p>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  Location Voiture Tanger Aéroport - Service Express
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Service de location à l&apos;aéroport Ibn Battouta 24h/24. Récupération rapide dès votre arrivée à Tanger.
                </p>
                <Link href="/blog/location-voiture-tanger-aeroport" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">
                  Découvrir le Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>

            {/* Blog 3 - Location Voiture Tanger Port Med */}
            <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
              <div className="relative h-48">
                <Image
                  src="/tanger port.webp"
                  alt="Location de voiture Tanger Port Med - Accueil ferry Europe"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <p className="text-amber-400 text-sm mb-2">Port Med</p>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  Location Voiture Tanger Port Med - Accueil Ferry
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Service spécialisé au port Tanger Med. Récupération coordonnée avec les horaires des ferries depuis l&apos;Europe.
                </p>
                <Link href="/blog/location-voiture-tanger-port-med" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">
                  En Savoir Plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>

            
          </div>

            {/* Featured Travel Guides */}
          <div className="mt-16 pt-16 border-t border-amber-400/20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Guides de Voyage <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Exclusifs</span>
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Découvrez les destinations les plus populaires du Maroc avec nos guides détaillés
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tanger Attractions Guide */}
              <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48">
                  <Image
                    src="/tangier.webp"
                    alt="Guide complet des attractions de Tanger avec location de voiture"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-5">
                  <p className="text-amber-400 text-xs mb-2">Guide Complet</p>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
                    Guide Tanger 2025: Top Attractions
                  </h4>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    Explorez Tanger avec votre voiture de location - itinéraires optimisés
                  </p>
                  <Link href="/blog/guide-tanger-attractions" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center text-sm">
                    Découvrir Tanger
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </article>

              {/* Guide Complet Tanger */}
              <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48">
                  <Image
                    src="/tanger.webp"
                    alt="Guide complet de Tanger: attractions, restaurants et conseils"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-5">
                  <p className="text-amber-400 text-xs mb-2">Guide Ville</p>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
                    Guide Complet Tanger: Itinéraires et Conseils
                  </h4>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    Découvrez Tanger: médina, Cap Spartel, grottes d'Hercule et bons plans.
                  </p>
                  <Link href="/guides/guide-tanger-complet" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center text-sm">
                    Lire le Guide
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </article>

              {/* Conduire au Maroc */}
              <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48">
                  <Image
                    src="/maroc.png"
                    alt="Conduire au Maroc: code de la route et conseils"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-5">
                  <p className="text-amber-400 text-xs mb-2">Conseils Conduite</p>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
                    Conduire au Maroc: Guide Pratique
                  </h4>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    Code de la route, péages, stations-service et sécurité routière.
                  </p>
                  <Link href="/guides/conduire-maroc-guide" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center text-sm">
                    Voir les Conseils
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </article>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Link 
              href="/guides" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              Tous les Guides
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - SEO Optimized */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Nos <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              <strong>Location de voiture à Tanger</strong> - Aéroport Ibn Battouta, Port Tanger Med et centre-ville.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Link href="/economy-cars" className="group">
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300">
                  <Car className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  location de voiture Tanger pas cher
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Véhicules économiques parfaits pour la ville et les budgets serrés. Meilleurs prix à Tanger.
                </p>
                <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="font-semibold">En Savoir Plus</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>
            
            <Link href="/airport-car-rental" className="group">
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300">
                  <MapPin className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  Location Voiture Tanger Aéroport
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Service aéroport Tanger Ibn Battouta et Tétouan. Prise en charge dès votre arrivée.
                </p>
                <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="font-semibold">En Savoir Plus</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>

            <Link href="/location-voiture-tanger-port" className="group">
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300">
                  <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  Location Voiture Port Med
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Location de voiture au Port Tanger Med. Service rapide et efficace pour vos déplacements depuis le port.
                </p>
                <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="font-semibold">En Savoir Plus</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>

            <Link href="/location-voiture-tetouan" className="group">
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300">
                  <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  location voiture tetouan
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Louez une voiture à Tétouan au meilleur prix. Prise en charge flexible.
                </p>
                <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="font-semibold">En Savoir Plus</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section - SEO Optimized */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Pourquoi Choisir <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Nassoh Car</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              <strong>NASSOH CAR</strong> - Location de voiture fiable au Maroc. Large sélection de véhicules, livraison rapide, excellent service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Car className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Kilométrage Illimité</h3>
              <p className="text-gray-300">Voyagez librement à travers le Maroc sans vous soucier des limites de distance. Profitez d&apos;un voyage sans stress sans frais de kilométrage supplémentaires!</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Réservation et Paiement Faciles</h3>
              <p className="text-gray-300">Notre processus de réservation simple et sans tracas vous permet de réserver une voiture en quelques clics. Nous offrons plusieurs options de paiement pour votre commodité.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Plusieurs Lieux de Retour Aéroport</h3>
              <p className="text-gray-300">Nous sommes disponibles pour le retour à l&apos;aéroport de Tanger Ibn Battouta et Tétouan Sania R&apos;mel</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Voitures Bien Entretenues</h3>
              <p className="text-gray-300">Notre flotte est régulièrement entretenue et maintenue en parfait état pour assurer une expérience de conduite sûre, confortable et fiable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles & Tips Section - SEO Optimized */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Articles & <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Conseils</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Découvrez nos guides de voyage et conseils pour la location de voiture à Tanger et au Maroc. Explorez les meilleures destinations avec Nassoh Car.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={index === 0 ? "Beautiful view of Tangier Morocco coastline and hidden gems for car rental exploration" : 
                         index === 1 ? "Tanger Port Morocco car rental service with modern fleet and économique assistance" :
                         index === 2 ? "Tétouan Airport Morocco express car rental service with quick pickup" :
                         "Tanger Morocco affordable car rental deals and budget-friendly vehicle options"}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <p className="text-amber-400 text-sm mb-2">{article.date}</p>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{article.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{article.excerpt}</p>
                  <Link href={`/blog/${article.citySlug}`} className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">
                    Lire Plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* FAQ Section - SEO Optimized */}
        <section className="py-20 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                FAQ <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Location Voiture Tanger</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-6">
                Questions fréquentes sur la <strong>location de voiture à Tanger</strong>. 
                <strong>Car rental FAQ Tangier Morocco</strong>.
              </p>
              <div className="text-gray-400 text-base max-w-3xl mx-auto">
                <p>
                  Infos clés sur nos services à l’<strong>aéroport de Tanger</strong>, 
                  <strong>port Tanger Med</strong>, tarifs, assurance et conditions.
                </p>
              </div>
            </header>
            
            <div className="space-y-6">
              {[
                {
                  question: "Où puis-je louer une voiture à Tanger avec Nassoh Car ?",
                  answer: "Vous pouvez louer une voiture avec Nassoh Car au centre-ville de Tanger, à l'aéroport de Tanger-Ibn Battouta, au port Tanger-Med, à la gare de Tanger Ville, et même dans des villes voisines comme Tétouan. Nous proposons également la livraison du véhicule à votre hôtel ou à l'adresse de votre choix à Tanger."
                },
                {
                  question: "Comment réserver une location de voiture à l'aéroport de Tanger ou au port Tanger-Med ?",
                  answer: "La réservation est simple. Vous pouvez réserver en ligne sur notre site web, par WhatsApp ou par téléphone. Nous assurons un service \"meet-and-greet\" à l'aéroport de Tanger-Ibn Battouta, au port Tanger-Med et à l'aéroport de Tétouan, afin que vous puissiez récupérer votre véhicule dès votre arrivée."
                },
                {
                  question: "Quels sont les meilleurs tarifs de location de voiture à Tanger ?",
                  answer: "Nous proposons des locations de voiture abordables à Tanger, à partir de 200 MAD (~20€) par jour pour des modèles compacts comme la Dacia Logan ou la Peugeot 208. Pour les locations mensuelles, nous offrons des tarifs préférentiels et des prix compétitifs pour les véhicules neufs, SUV ou voitures haut de gamme."
                },
                {
                  question: "Puis-je trouver une location de voiture pas chère à l'aéroport de Tanger sans dépôt de garantie ?",
                  answer: "Pour des raisons de sécurité, nous demandons un dépôt de garantie remboursable de 5 000 MAD, payable en espèces ou bloqué sur carte bancaire. Cette politique nous permet de maintenir des prix compétitifs. Nous faisons partie des agences de location les mieux notées à l'aéroport de Tanger pour notre transparence et qualité de service."
                },
                {
                  question: "Proposez-vous des locations de voiture longue durée à Tanger ou à Tétouan ?",
                  answer: "Oui. Nous sommes spécialisés dans la location longue durée à Tanger, Tétouan et dans la zone du port Tanger-Med. De nombreux expatriés et professionnels des zones industrielles de Tanger choisissent nos formules mensuelles pour des véhicules tels que la Dacia Logan, la Toyota Yaris, la Peugeot 208, et des SUV."
                },
                {
                  question: "Quels documents sont nécessaires pour louer une voiture à Tanger ?",
                  answer: "Vous devez présenter un permis de conduire valide, un passeport (ou une carte d'identité nationale pour les Marocains) ainsi qu'une carte bancaire. Les visiteurs étrangers sont encouragés à se munir d'un permis de conduire international (IDP) en complément de leur permis national."
                },
                {
                  question: "Quel est l'âge minimum requis pour louer une voiture au Maroc ?",
                  answer: "L'âge minimum est de 21 ans."
                },
                {
                  question: "L'assurance est-elle incluse dans les locations Nassoh Car ?",
                  answer: "Oui. Toutes nos locations incluent une assurance de base. Un dépôt de garantie remboursable de 500 € (ou équivalent en MAD) est requis au début de la location. L'assurance couvre uniquement les dommages résultant d'une collision entre deux véhicules et au-delà du seuil de 500 €. Les dommages causés à des objets fixes (comme un mur ou un poteau) ne sont pas couverts. Des options d'assurance complémentaire sont disponibles pour une protection accrue."
                },
                {
                  question: "Comment puis-je louer une voiture à Tétouan ou à l'aéroport de Tétouan ?",
                  answer: "Nous proposons la livraison directe des véhicules à Tétouan, que ce soit en centre-ville ou à l'aéroport de Tétouan, sur simple demande. Ce service est particulièrement apprécié par les voyageurs arrivant dans le nord du Maroc via Ryanair ou Air Arabia."
                },
                {
                  question: "Pourquoi choisir Nassoh Car pour votre location de voiture à Tanger ?",
                  answer: "Nassoh Car est reconnue comme l'une des meilleures agences de location de voiture à Tanger, grâce à ses tarifs transparents, ses véhicules bien entretenus, sa livraison rapide à l'aéroport et son service client réactif et convivial."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            {/* FAQ Structured Data - SEO Optimized */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Quels documents sont nécessaires pour louer une voiture à Tanger avec Nassoh Car?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Permis de conduire valide, pièce d’identité (passeport ou CIN) et carte bancaire. PCI recommandé pour visiteurs internationaux."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Proposez-vous la location de voiture à l&apos;aéroport Ibn Battouta Tanger?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, prise en charge et retour 24/7 à l’aéroport Ibn Battouta. Livraison directe et accueil sur place."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Offrez-vous la location au port Tanger Med?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, livraison directe au port Tanger Med et coordination avec les ferries."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Quels sont les prix de location de voiture à Tanger?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tarifs dès 200 DH/jour (économique). Assurance de base et kilométrage illimité inclus."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "L&apos;assurance est-elle incluse dans la location de voiture Tanger Nassoh Car?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, assurance de base incluse. Options tous risques et assistance 24/7 disponibles."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Proposez-vous la livraison gratuite de voiture à Tanger centre-ville?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, livraison gratuite au centre-ville, port Tanger Med et aéroport Ibn Battouta."
                      }
                    }
                  ]
                })
              }}
            />
          </div>
        </section>


      {/* Google Reviews Section - SEO Optimized */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Avis <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Clients Nassoh Car</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-6">
              Lisez les <strong>avis clients location voiture Tanger</strong>. 
              <strong>Customer reviews car rental Tangier</strong>.
            </p>
            <div className="text-gray-400 text-base max-w-3xl mx-auto">
              <p>
                Témoignages sur nos services à l’<strong>aéroport</strong> et au <strong>port Tanger Med</strong>.
              </p>
            </div>
          </div>
          
          <GoogleReviews placeId="ChIJN1t_tDeuEmsRUsoyG83frY4" />
        </div>
      </section>

      </main>
      
      {/* Structured Data for SEO */}
      <StructuredData type="LocalBusiness" countryTarget="MA" language="fr" />
      
      {/* WhatsApp Popup */}
      <WhatsAppPopup 
        phoneNumber="212631630013" 
        message="Hello! I'm interested in renting a car from NassohCar. Can you help me?"
        delay={3000}
      />
    </div>
  );
}
