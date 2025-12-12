"use client"

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Calendar, Car, ChevronDown, Shield, ArrowRight, ChevronLeft, ChevronRight, Users, Settings, Fuel } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { api } from '@/lib/api'
import StructuredData from '@/app/es/components/StructuredData'
import { useBooking } from '@/contexts/BookingContext'
import WhatsAppPopup from '@/app/es/components/WhatsAppPopup'
import GoogleReviews from '@/app/es/components/GoogleReviews'

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

export default function HomeES() {
  const router = useRouter()
  const { bookingData, updateBookingData } = useBooking()
  const [isSearching, setIsSearching] = useState(false)
  const [cars, setCars] = useState<Car[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.getCars({ available: true })
        setCars(response.cars || [])
      } catch {}
    }
    fetchCars()
  }, [])

  const carsPerSlide = 3
  const totalSlides = Math.ceil(cars.length / carsPerSlide)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)

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
    const slideWidth = sliderRef.current?.offsetWidth || 0
    const newSlide = Math.round(newScrollLeft / slideWidth)
    const clampedSlide = Math.max(0, Math.min(newSlide, totalSlides - 1))
    if (clampedSlide !== currentSlide) setCurrentSlide(clampedSlide)
  }
  const handleFleetMouseUp = () => setIsDragging(false)
  const handleFleetMouseLeave = () => setIsDragging(false)

  const locations = [
    { value: 'tangier-airport', label: 'Aeropuerto de Tánger Ibn Battouta' },
    { value: 'tangier-port', label: 'Puerto de Tánger' },
    { value: 'tangier-med', label: 'Puerto Tanger Med' },
    { value: 'tangier-train', label: 'Estación de tren de Tánger' },
    { value: 'tetouan', label: 'Centro de Tetuán' },
    { value: 'nassoh-agency', label: 'Agencia Nassoh Car' },
    { value: 'hotel-delivery', label: 'Entrega en hotel' },
    { value: 'fes-airport', label: 'Aeropuerto de Fez' },
    { value: 'marrakech-airport', label: 'Aeropuerto de Marrakech' },
    { value: 'rabat-sale-airport', label: 'Aeropuerto Rabat-Salé' },
    { value: 'casablanca-airport', label: 'Aeropuerto de Casablanca' },
    { value: 'agadir-airport', label: 'Aeropuerto de Agadir' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    updateBookingData({ [name]: value })
  }

  const handleBookingSearch = () => {
    if (!bookingData.pickupLocation || !bookingData.startDate || !bookingData.endDate) {
      alert('Por favor, completa todos los campos obligatorios')
      return
    }
    if (new Date(bookingData.startDate) >= new Date(bookingData.endDate)) {
      alert('La fecha de fin debe ser posterior a la fecha de inicio')
      return
    }
    setIsSearching(true)
    const searchParams = new URLSearchParams({
      pickup: bookingData.pickupLocation,
      dropoff: bookingData.dropoffLocation || bookingData.pickupLocation,
      startDate: bookingData.startDate,
      endDate: bookingData.endDate
    })
    router.push(`/es/flota?${searchParams.toString()}`)
  }

  const articles = [
    {
      title: 'Alquiler de coches en Tánger: 5 lugares ocultos para visitar en 2025',
      date: '23 agosto, 2025',
      excerpt: 'El alquiler de coche en Tánger es la mejor forma de explorar...',
      image: '/tangier.webp',
      citySlug: 'alquiler-coches-tanger'
    },
    {
      title: 'Alquiler de coche en el Puerto de Tánger - Servicio económico 24/7',
      date: '15 diciembre, 2024',
      excerpt: 'Servicio de alquiler de coche en el puerto de Tánger con entrega gratuita. Flota moderna y precios transparentes.',
      image: '/tanger port.webp',
      citySlug: 'alquiler-coches-puerto-tanger'
    },
    {
      title: 'Alquiler de coche en el Aeropuerto de Tetuán - Servicio Express',
      date: '8 diciembre, 2024',
      excerpt: 'Servicio de alquiler de coche en el aeropuerto de Tetuán con recogida rápida y formalidades sencillas.',
      image: '/Aeroport-de-Tetouan.webp',
      citySlug: 'alquiler-aeropuerto-tetuan'
    },
    {
      title: 'Alquiler de coche barato en Tánger - Mejores precios 2024',
      date: '13 diciembre, 2024',
      excerpt: 'Encuentra las mejores ofertas de alquiler de coche en Tánger. Coches económicos y promociones exclusivas.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      citySlug: 'alquiler-economico-tanger'
    }
  ]

  return (
    <div className="relative">
      <StructuredData type="LocalBusiness" countryTarget="MA" language="es" />
      <StructuredData type="AutoRental" countryTarget="MA" language="es" />
      <StructuredData type="Service" countryTarget="MA" language="es" />

      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner" aria-label="Sección de reserva de coche">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Alquiler de coche económico en Tánger aeropuerto Ibn Battouta - Nassoh Car"
              fill
              className="object-cover object-center scale-110"
              priority
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/40"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-transparent to-amber-400/5 animate-pulse"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
                <span className="text-white drop-shadow-2xl">ALQUILER DE COCHES EN TÁNGER</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">NASSOH CAR - TÁNGER</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-yellow-300/20 to-amber-400/20 blur-3xl -z-10"></div>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6">Servicio 24/7 con entrega gratuita. Reserva tu coche al mejor precio.</p>
            </div>

            <div className="max-w-4xl mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-yellow-400/5 to-amber-400/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-amber-400/30 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
                  <div className="sm:col-span-2 lg:col-span-1">
                    <label htmlFor="pickupLocation" className="block text-white font-medium mb-2 text-sm lg:text-base">Lugar de recogida *</label>
                    <div className="relative">
                      <select
                        id="pickupLocation"
                        name="pickupLocation"
                        value={bookingData.pickupLocation}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-amber-400 focus:outline-none focus:border-amber-400 appearance-none text-sm lg:text-base min-h-[44px]"
                        required
                      >
                        <option value="" className="bg-slate-800">Seleccionar lugar</option>
                        {locations.map(location => (
                          <option key={location.value} value={location.value} className="bg-slate-800">{location.label}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-amber-400" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="startDate" className="block text-white font-medium mb-2 text-sm lg:text-base">Fecha de inicio *</label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={bookingData.startDate}
                      onChange={handleInputChange}
                      lang="es"
                      placeholder="dd/mm/yyyy"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-gray-900 focus:outline-none focus:border-amber-400 text-sm lg:text-base min-h-[44px]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="endDate" className="block text-white font-medium mb-2 text-sm lg:text-base">Fecha de fin *</label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      value={bookingData.endDate}
                      onChange={handleInputChange}
                      lang="es"
                      placeholder="dd/mm/yyyy"
                      min={bookingData.startDate || new Date().toISOString().split('T')[0]}
                      className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-gray-900 focus:outline-none focus:border-amber-400 text-sm lg:text-base min-h-[44px]"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1">
                    <label htmlFor="dropoffLocation" className="block text-white font-medium mb-2 text-sm lg:text-base">Lugar de devolución</label>
                    <div className="relative">
                      <select
                        id="dropoffLocation"
                        name="dropoffLocation"
                        value={bookingData.dropoffLocation}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-amber-400 focus:outline-none focus:border-amber-400 appearance-none text-sm lg:text-base min-h-[44px]"
                      >
                        <option value="" className="bg-slate-800">Mismo lugar que recogida</option>
                        {locations.map(location => (
                          <option key={location.value} value={location.value} className="bg-slate-800">{location.label}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-amber-400" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={handleBookingSearch}
                    disabled={isSearching}
                    className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-3 px-8 lg:px-12 rounded-xl hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base min-w-[200px]"
                  >
                    {isSearching ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                        BUSCANDO...
                      </div>
                    ) : (
                      'RESERVAR UN COCHE'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-slate-900 to-black" aria-label="Nuestra flota de vehículos">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Nuestra <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Flota</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"><Link href="/es/flota" className="text-amber-400 hover:text-amber-300 underline font-medium"><strong>Flota de alquiler en Tánger</strong></Link> - vehículos económicos, precios competitivos y servicio 24/7.</p>
            </div>

            {cars.length > 0 ? (
              <div className="relative">
                {totalSlides > 1 && (
                  <>
                    <button onClick={prevSlide} aria-label="Coche anterior" className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-amber-400/20 hover:bg-amber-400/30 backdrop-blur-md border border-amber-400/30 rounded-full p-3 transition-all duration-300 group">
                      <ChevronLeft className="h-6 w-6 text-amber-400 group-hover:text-white" />
                    </button>
                    <button onClick={nextSlide} aria-label="Siguiente coche" className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-amber-400/20 hover:bg-amber-400/30 backdrop-blur-md border border-amber-400/30 rounded-full p-3 transition-all duration-300 group">
                      <ChevronRight className="h-6 w-6 text-amber-400 group-hover:text-white" />
                    </button>
                  </>
                )}

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
                                <div className="relative h-48 overflow-hidden">
                                  <Image
                                    src={car.image || '/placeholder-car.png'}
                                    alt={`Alquiler de coche ${car.brand} ${car.model} en Marruecos`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    loading="lazy"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                  <div className="absolute top-4 right-4 bg-amber-400/90 text-black px-3 py-1 rounded-full text-sm font-bold">desde €{car.pricePerDay.toFixed(2)}/día</div>
                                </div>
                                <div className="p-6">
                                  <div className="mb-4">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{car.name}</h3>
                                    <p className="text-amber-400 text-sm">{car.brand} {car.model} • {car.year}</p>
                                  </div>
                                  <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="flex items-center text-gray-300"><Users className="h-4 w-4 mr-2 text-amber-400" /><span className="text-sm">{car.seats} plazas</span></div>
                                    <div className="flex items-center text-gray-300"><Settings className="h-4 w-4 mr-2 text-amber-400" /><span className="text-sm">{car.transmission === 'Manual' ? 'Manual' : car.transmission}</span></div>
                                    <div className="flex items-center text-gray-300"><Fuel className="h-4 w-4 mr-2 text-amber-400" /><span className="text-sm">{car.fuelType}</span></div>
                                  </div>
                                  <button onClick={() => router.push(`/es/flota?car=${car.id}`)} className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-3 px-6 rounded-xl hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105">Reservar</button>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {totalSlides > 1 && (
                  <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <button key={index} onClick={() => setCurrentSlide(index)} aria-label={`Ir al coche ${index + 1}`} className={`w-8 h-8 rounded-full transition-all duration-300 p-1 ${index === currentSlide ? 'bg-amber-400 scale-110' : 'bg-amber-400/30 hover:bg-amber-400/50'}`} />
                    ))}
                  </div>
                )}

                <div className="text-center mt-12">
                  <button onClick={() => router.push('/es/flota')} className="bg-white/10 backdrop-blur-md border border-amber-400/30 text-white font-bold py-4 px-8 rounded-xl hover:bg-amber-400/20 hover:border-amber-400 transition-all duration-300 flex items-center mx-auto">
                    Ver toda la flota
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400 mx-auto mb-4"></div>
                <p className="text-gray-300">Cargando nuestra increíble flota...</p>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Guía <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Alquiler de Coches Tánger</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"><strong>Guías de alquiler en Tánger</strong> y consejos de expertos para tu viaje a Marruecos.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48">
                  <Image src="/tangier.webp" alt="Alquiler de coches en Tánger - Guía completa Nassoh Car" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <p className="text-amber-400 text-sm mb-2">Guía Experta</p>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Alquiler de Coches en Tánger - Guía 2025</h3>
                  <p className="text-gray-300 text-sm mb-4">Todo lo que necesitas saber para alquilar un coche en Tánger: precios, documentos y consejos.</p>
                  <Link href="/es/blog/alquiler-coches-tanger" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">Leer la guía<ArrowRight className="ml-2 h-4 w-4" /></Link>
                </div>
              </article>

              <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48">
                  <Image src="/tangier.webp" alt="Alquiler de coche en el aeropuerto de Tánger Ibn Battouta - Servicio 24/7" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <p className="text-amber-400 text-sm mb-2">Aeropuerto</p>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Alquiler de coche en el Aeropuerto de Tánger - Servicio Express</h3>
                  <p className="text-gray-300 text-sm mb-4">Servicio en el aeropuerto Ibn Battouta 24/7. Recogida rápida al llegar a Tánger.</p>
                  <Link href="/es/blog/alquiler-aeropuerto-tanger" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">Descubrir<ArrowRight className="ml-2 h-4 w-4" /></Link>
                </div>
              </article>

              <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48">
                  <Image src="/tanger port.webp" alt="Alquiler de coche en Puerto Tanger Med - Recepción ferry Europa" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <p className="text-amber-400 text-sm mb-2">Puerto Med</p>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Alquiler de coche en Puerto Tanger Med - Recepción Ferry</h3>
                  <p className="text-gray-300 text-sm mb-4">Servicio especializado en el puerto Tanger Med. Coordinado con horarios de ferries desde Europa.</p>
                  <Link href="/es/blog/alquiler-coches-puerto-tanger-med" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">Más información<ArrowRight className="ml-2 h-4 w-4" /></Link>
                </div>
              </article>
            </div>

            <div className="mt-16 pt-16 border-t border-amber-400/20">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Guías de Viaje <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Exclusivas</span></h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">Descubre destinos populares de Marruecos con nuestras guías detalladas</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                  <div className="relative h-48">
                    <Image src="/tangier.webp" alt="Guía de atracciones de Tánger con coche de alquiler" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-5">
                    <p className="text-amber-400 text-xs mb-2">Guía Completa</p>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Guía Tánger 2025: Atracciones principales</h4>
                    <p className="text-gray-300 text-sm mb-3">Explora Tánger con tu coche de alquiler - itinerarios optimizados</p>
                    <Link href="/es/blog/guia-atracciones-tanger" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center text-sm">Descubrir Tánger<ArrowRight className="ml-1 h-3 w-3" /></Link>
                  </div>
                </article>

                <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                  <div className="relative h-48">
                    <Image src="/tangier.webp" alt="Guía completa de Tánger: atracciones, restaurantes y consejos" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-5">
                    <p className="text-amber-400 text-xs mb-2">Guía de Ciudad</p>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Guía Completa de Tánger: Itinerarios y Consejos</h4>
                    <p className="text-gray-300 text-sm mb-3">Descubre Tánger: medina, Cap Spartel, Cuevas de Hércules y más.</p>
                    <Link href="/es/guides/guide-tanger-complet" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center text-sm">Leer la guía<ArrowRight className="ml-1 h-3 w-3" /></Link>
                  </div>
                </article>

                <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                  <div className="relative h-48">
                    <Image src="/maroc.png" alt="Conducir en Marruecos: normas y consejos" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-5">
                    <p className="text-amber-400 text-xs mb-2">Consejos de Conducción</p>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Conducir en Marruecos: Guía Práctica</h4>
                    <p className="text-gray-300 text-sm mb-3">Normas de tráfico, peajes, gasolineras y seguridad vial.</p>
                    <Link href="/es/guides/conduire-maroc-guide" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center text-sm">Ver consejos<ArrowRight className="ml-1 h-3 w-3" /></Link>
                  </div>
                </article>
              </div>

              <div className="text-center mt-12"><Link href="/es/guides" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105">Todos los Guías<ArrowRight className="ml-2 h-5 w-5" /></Link></div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Nuestros <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Servicios</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"><strong>Alquiler de coche en Tánger</strong> - Aeropuerto Ibn Battouta, Puerto Tanger Med y centro.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Link href="/es/coches-economicos" className="group">
                <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300"><Car className="h-8 w-8 text-amber-400" /></div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">Coches económicos en Tánger</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">Vehículos perfectos para la ciudad y presupuestos ajustados. Mejores precios en Tánger.</p>
                  <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300"><span className="font-semibold">Más información</span><ArrowRight className="ml-2 h-5 w-5" /></div>
                </div>
              </Link>

              <Link href="/es/alquiler-aeropuerto-tanger" className="group">
                <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300"><MapPin className="h-8 w-8 text-amber-400" /></div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">Alquiler en Aeropuerto de Tánger</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">Servicio en los aeropuertos de Tánger y Tetuán. Recogida al llegar.</p>
                  <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300"><span className="font-semibold">Más información</span><ArrowRight className="ml-2 h-5 w-5" /></div>
                </div>
              </Link>

              <Link href="/es/alquiler-puerto-tanger-med" className="group">
                <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300"><svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">Alquiler en Puerto Tanger Med</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">Alquiler de coche en Puerto Tanger Med. Servicio rápido y eficiente.</p>
                  <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300"><span className="font-semibold">Más información</span><ArrowRight className="ml-2 h-5 w-5" /></div>
                </div>
              </Link>

              <Link href="/es/alquiler-tetuan" className="group">
                <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300"><svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">Alquiler de coche en Tetuán</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">Alquila un coche en Tetuán al mejor precio. Recogida flexible.</p>
                  <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300"><span className="font-semibold">Más información</span><ArrowRight className="ml-2 h-5 w-5" /></div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Por qué elegir <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Nassoh Car</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"><strong>NASSOH CAR</strong> - Alquiler fiable en Marruecos. Amplia selección de vehículos, entrega rápida y excelente servicio.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center"><Car className="h-8 w-8 text-amber-400" /></div>
                <h3 className="text-xl font-bold text-white mb-4">Kilometraje ilimitado</h3>
                <p className="text-gray-300">Viaja por Marruecos sin preocuparte por límites de distancia. Sin costes adicionales.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center"><Calendar className="h-8 w-8 text-amber-400" /></div>
                <h3 className="text-xl font-bold text-white mb-4">Reserva y pago fáciles</h3>
                <p className="text-gray-300">Proceso simple para reservar en pocos clics. Varias opciones de pago disponibles.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center"><MapPin className="h-8 w-8 text-amber-400" /></div>
                <h3 className="text-xl font-bold text-white mb-4">Varios lugares de devolución</h3>
                <p className="text-gray-300">Disponibles en el aeropuerto de Tánger Ibn Battouta y Tetuán Sania R'mel.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center"><Shield className="h-8 w-8 text-amber-400" /></div>
                <h3 className="text-xl font-bold text-white mb-4">Coches bien mantenidos</h3>
                <p className="text-gray-300">Nuestra flota se mantiene regularmente para garantizar seguridad y confort.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Artículos y <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Consejos</span></h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">Explora nuestros guías y consejos para el alquiler de coche en Tánger y Marruecos.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {articles.map((article, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                  <div className="relative h-48">
                    <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <p className="text-amber-400 text-sm mb-2">{article.date}</p>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{article.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{article.excerpt}</p>
                    <Link href={`/es/blog/${article.citySlug}`} className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">Leer más<ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Opiniones <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">de Clientes</span></h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-6">Lee las <strong>opiniones de alquiler de coche en Tánger</strong>.</p>
              <div className="text-gray-400 text-base max-w-3xl mx-auto"><p>Testimonios de nuestros servicios en el <strong>aeropuerto</strong> y <strong>Puerto Tanger Med</strong>.</p></div>
            </div>
            <GoogleReviews placeId="ChIJN1t_tDeuEmsRUsoyG83frY4" language="es" />
          </div>
        </section>
      </main>

      <StructuredData type="LocalBusiness" countryTarget="MA" language="es" />

      <WhatsAppPopup phoneNumber="212631630013" message="¡Hola! Estoy interesado en alquilar un coche con Nassoh Car. ¿Puedes ayudarme?" delay={3000} />
    </div>
  )
}
