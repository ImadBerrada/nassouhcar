'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Calendar, Car, ChevronDown, Shield, ArrowRight, Clock, ChevronLeft, ChevronRight, Users, Settings, Fuel } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { api } from '@/lib/api'
import StructuredData from '@/app/es/components/StructuredData'
import { useBooking } from '@/contexts/BookingContext'
import WhatsAppPopup from '@/app/es/components/WhatsAppPopup'
import GoogleReviews from '@/app/es/components/GoogleReviews'

interface CarType {
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
  const [cars, setCars] = useState<CarType[]>([])  
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

  const handleFleetMouseDown = (e: React.MouseEvent) => { setIsDragging(true); setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0)); setScrollLeft(sliderRef.current?.scrollLeft || 0) }
  const handleFleetMouseMove = (e: React.MouseEvent) => { if (!isDragging) return; e.preventDefault(); const x = e.pageX - (sliderRef.current?.offsetLeft || 0); const walk = (x - startX) * 2; const newScrollLeft = scrollLeft - walk; const slideWidth = sliderRef.current?.offsetWidth || 0; const newSlide = Math.round(newScrollLeft / slideWidth); const clampedSlide = Math.max(0, Math.min(newSlide, totalSlides - 1)); if (clampedSlide !== currentSlide) { setCurrentSlide(clampedSlide) } }
  const handleFleetMouseUp = () => setIsDragging(false)
  const handleFleetMouseLeave = () => setIsDragging(false)

  const locations = [
    { value: 'tangier-airport', label: 'Aeropuerto de Tánger Ibn Battouta' },
    { value: 'tangier-port', label: 'Puerto de Tánger Ville' },
    { value: 'tangier-med', label: 'Puerto Tanger Med' },
    { value: 'tangier-train', label: 'Estación de tren de Tánger' },
    { value: 'tetouan', label: 'Centro de la ciudad de Tetuán' },
    { value: 'nassoh-agency', label: 'Agencia Nassoh Car' },
    { value: 'hotel-delivery', label: "Entrega en el hotel" },
    { value: 'fes-airport', label: 'Aeropuerto de Fez' },
    { value: 'marrakech-airport', label: 'Aeropuerto de Marrakech' },
    { value: 'rabat-sale-airport', label: 'Aeropuerto de Rabat-Salé' },
    { value: 'casablanca-airport', label: 'Aeropuerto de Casablanca' },
    { value: 'agadir-airport', label: "Aeropuerto de Agadir" }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { const { name, value } = e.target; updateBookingData({ [name]: value }) }

  const handleBookingSearch = () => {
    if (!bookingData.pickupLocation || !bookingData.startDate || !bookingData.endDate) { alert('Por favor complete todos los campos obligatorios'); return }
    if (new Date(bookingData.startDate) >= new Date(bookingData.endDate)) { alert("La fecha de finalización debe ser posterior a la fecha de inicio"); return }
    setIsSearching(true)
    const searchParams = new URLSearchParams({ pickup: bookingData.pickupLocation, dropoff: bookingData.dropoffLocation || bookingData.pickupLocation, startDate: bookingData.startDate, endDate: bookingData.endDate })
    router.push(`/es/flota?${searchParams.toString()}`)
  }

  const articles = [
    { title: "Alquiler de Coches en Tánger: 5 Joyas Ocultas para Visitar en 2025", date: "23 de Agosto, 2025", excerpt: "El alquiler de coches en Tánger es la mejor manera de explorar la región. Descubra rutas panorámicas, ciudades costeras y playas escondidas.", image: "/tangier.webp", citySlug: "blog/guia-atracciones-tanger" },
    { title: "Alquiler de Coches Aeropuerto de Tánger – Servicio Exprés", date: "15 de Diciembre, 2024", excerpt: "Alquiler de coches en el Aeropuerto Tánger Ibn Battouta con entrega gratuita. Flota moderna, precios transparentes, asistencia 24/7.", image: "/tangier.webp", citySlug: "blog/alquiler-coches-aeropuerto-tanger" },
    { title: "Alquiler de Coches Puerto Tánger Med – Recepción Ferry", date: "8 de Diciembre, 2024", excerpt: "Servicio especializado en el Puerto Tánger Med. Recogida coordinada con los horarios de los ferries desde Europa.", image: "/tanger port.webp", citySlug: "blog/alquiler-coches-puerto-tanger-med" },
    { title: "Alquiler de Coches Baratos en Tánger – Mejores Precios 2024", date: "13 de Diciembre, 2024", excerpt: "Encuentre las mejores ofertas de alquiler de coches en Tánger. Vehículos económicos y promociones exclusivas para ahorrar más.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop", citySlug: "blog/alquiler-coches-baratos-tanger" }
  ];

  return (
    <div className="relative">
      <StructuredData type="LocalBusiness" countryTarget="MA" language="es" />
      <StructuredData type="AutoRental" countryTarget="MA" language="es" />
      <StructuredData type="Service" countryTarget="MA" language="es" />

      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner" aria-label="Sección principal de reserva de alquiler de coches">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" alt="Alquiler de coches económicos Aeropuerto Tánger Ibn Battouta - Servicio de alquiler asequible Marruecos - Nassoh Car" fill className="object-cover object-center scale-110" priority fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/40"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-transparent to-amber-400/5 animate-pulse"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-radial from-yellow-400/15 via-orange-500/10 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
                <span className="text-white drop-shadow-2xl">ALQUILER COCHE TÁNGER</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">NASSOH CAR – TÁNGER</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-yellow-300/20 to-amber-400/20 blur-3xl -z-10"></div>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6">Alquiler de coches en Tánger – Servicio 24/7, entrega gratuita.</p>
            </div>

            <div className="max-w-4xl mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-yellow-400/5 to-amber-400/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-amber-400/30 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
                  <div className="sm:col-span-2 lg:col-span-1">
                    <label htmlFor="pickupLocation" className="block text-white font-medium mb-2 text-sm lg:text-base">Lugar de Recogida *</label>
                    <div className="relative">
                      <select id="pickupLocation" name="pickupLocation" value={bookingData.pickupLocation} onChange={handleInputChange} className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-amber-400 focus:outline-none focus:border-amber-400 appearance-none text-sm lg:text-base min-h-[44px]" required>
                        <option value="" className="bg-slate-800">Seleccionar lugar</option>
                        {locations.map(location => (<option key={location.value} value={location.value} className="bg-slate-800">{location.label}</option>))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-amber-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="startDate" className="block text-white font-medium mb-2 text-sm lg:text-base">Fecha de Inicio *</label>
                    <input type="date" id="startDate" name="startDate" value={bookingData.startDate} onChange={handleInputChange} lang="es" placeholder="dd/mm/yyyy" min={new Date().toISOString().split('T')[0]} className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-gray-900 focus:outline-none focus:border-amber-400 text-sm lg:text-base min-h-[44px]" required />
                  </div>
                  <div>
                    <label htmlFor="endDate" className="block text-white font-medium mb-2 text-sm lg:text-base">Fecha de Fin *</label>
                    <input type="date" id="endDate" name="endDate" value={bookingData.endDate} onChange={handleInputChange} lang="es" placeholder="dd/mm/yyyy" min={bookingData.startDate || new Date().toISOString().split('T')[0]} className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-gray-900 focus:outline-none focus:border-amber-400 text-sm lg:text-base min-h-[44px]" required />
                  </div>
                  <div className="sm:col-span-2 lg:col-span-1">
                    <label htmlFor="dropoffLocation" className="block text-white font-medium mb-2 text-sm lg:text-base">Lugar de Devolución</label>
                    <div className="relative">
                      <select id="dropoffLocation" name="dropoffLocation" value={bookingData.dropoffLocation} onChange={handleInputChange} className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-amber-400 focus:outline-none focus:border-amber-400 appearance-none text-sm lg:text-base min-h-[44px]">
                        <option value="" className="bg-slate-800">Mismo lugar que la recogida</option>
                        {locations.map(location => (<option key={location.value} value={location.value} className="bg-slate-800">{location.label}</option>))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-amber-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button onClick={handleBookingSearch} disabled={isSearching} className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-3 px-8 lg:px-12 rounded-xl hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base min-w-[200px]">
                    {isSearching ? (<div className="flex items-center justify-center"><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>BUSCANDO...</div>) : ('RESERVAR UN COCHE')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Car Fleet Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black" aria-label="Nuestra flota de vehículos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Nuestra Flota de <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Vehículos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              <Link href="/es/flota" className="text-amber-400 hover:text-amber-300 underline font-medium"><strong>Flota de coches de alquiler en Tánger</strong></Link> - vehículos económicos, precios competitivos, servicio 24/7.
            </p>
          </header>

        {cars.length > 0 ? (
          <div className="relative">
            {/* Navigation Arrows */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  aria-label="Coche anterior"
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-amber-400/20 hover:bg-amber-400/30 backdrop-blur-md border border-amber-400/30 rounded-full p-3 transition-all duration-300 group"
                >
                  <ChevronLeft className="h-6 w-6 text-amber-400 group-hover:text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Siguiente coche"
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
                        {cars.slice(slideIndex * carsPerSlide, (slideIndex + 1) * carsPerSlide).map((car) => (
                          <div key={car.id} className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                            <div className="relative h-48 overflow-hidden">
                              <Image src={car.image || '/placeholder-car.png'} alt={`Alquiler de coche ${car.brand} ${car.model} en Marruecos`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" unoptimized={car.image?.startsWith('data:')} />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                              <div className="absolute top-4 right-4 bg-amber-400/90 text-black px-3 py-1 rounded-full text-sm font-bold">desde {car.pricePerDay.toFixed(2)}€/día</div>
                            </div>
                            <div className="p-6">
                              <div className="mb-4">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{car.name}</h3>
                                <p className="text-amber-400 text-sm">{car.brand} {car.model} • {car.year}</p>
                              </div>
                              <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="flex items-center text-gray-300"><Users className="h-4 w-4 mr-2 text-amber-400" /><span className="text-sm">{car.seats} plazas</span></div>
                                <div className="flex items-center text-gray-300"><Settings className="h-4 w-4 mr-2 text-amber-400" /><span className="text-sm">{car.transmission}</span></div>
                                <div className="flex items-center text-gray-300"><Fuel className="h-4 w-4 mr-2 text-amber-400" /><span className="text-sm">{car.fuelType}</span></div>
                              </div>
                              <button onClick={() => router.push(`/es/flota?car=${car.id}`)} className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-3 px-6 rounded-xl hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105">Reservar Ahora</button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-400 py-12">
            <p>Cargando vehículos disponibles...</p>
          </div>
        )}

        {/* Slide Indicators */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ir al coche ${index + 1}`}
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
            onClick={() => router.push('/es/flota')}
            className="bg-white/10 backdrop-blur-md border border-amber-400/30 text-white font-bold py-4 px-8 rounded-xl hover:bg-amber-400/20 hover:border-amber-400 transition-all duration-300 flex items-center mx-auto"
          >
            Ver Toda la Flota
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Nuestros <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Servicios</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"><strong>Alquiler de coches en Tánger</strong> – Aeropuerto Ibn Battouta, Puerto Tanger Med y centro de la ciudad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Link href="/es/alquiler-coches-baratos-tanger" className="group">
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300">
                  <Car className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">Alquiler Coches Baratos Tánger</h3>
                <p className="text-gray-300 leading-relaxed mb-6">Vehículos económicos perfectos para la ciudad y presupuestos ajustados. Mejores precios en Tánger.</p>
                <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="font-semibold">Saber más</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>
            <Link href="/es/alquiler-coches-aeropuerto-tanger" className="group">
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300">
                  <MapPin className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">Alquiler Coches Aeropuerto</h3>
                <p className="text-gray-300 leading-relaxed mb-6">Recogida y devolución exprés en el Aeropuerto de Tánger Ibn Battouta. Llegadas y salidas sin esperas.</p>
                <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="font-semibold">Saber más</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>
            <Link href="/es/alquiler-coches-puerto-tanger-med" className="group">
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300">
                  <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">Alquiler Coches Puerto Tanger Med</h3>
                <p className="text-gray-300 leading-relaxed mb-6">Alquiler de coches en el Puerto Tanger Med. Servicio rápido y eficiente para sus viajes desde el puerto.</p>
                <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="font-semibold">Saber más</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>
            <Link href="/es/alquiler-coches-tetuan" className="group">
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300">
                  <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">Alquiler de Coches en Tetuán</h3>
                <p className="text-gray-300 leading-relaxed mb-6">Alquile un coche en Tetuán al mejor precio. Recogida y entrega flexible.</p>
                <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="font-semibold">Saber más</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Guía Alquiler Coches Tánger</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"><strong>Guías de alquiler de coches en Tánger</strong> y consejos de expertos para su viaje a Marruecos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
              <div className="relative h-48"><Image src="/tangier.webp" alt="Alquiler de coches Tánger – Guía completa" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div></div>
              <div className="p-6"><p className="text-amber-400 text-sm mb-2">Guía Experta</p><h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Alquiler Coches Tánger – Guía Completa 2025</h3><p className="text-gray-300 text-sm mb-4">Todo lo que necesita saber para alquilar un coche en Tánger: precios, documentos, consejos prácticos y mejores ofertas.</p><Link href="/es/blog/alquiler-coches-tanger" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">Leer la Guía<ArrowRight className="ml-2 h-4 w-4" /></Link></div>
            </article>
            <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
              <div className="relative h-48"><Image src="/tangier.webp" alt="Alquiler coches Tánger aeropuerto Ibn Battouta – Exprés" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div></div>
              <div className="p-6"><p className="text-amber-400 text-sm mb-2">Aeropuerto</p><h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Alquiler Coches Aeropuerto Tánger – Servicio Exprés</h3><p className="text-gray-300 text-sm mb-4">Servicio 24/7 en el Aeropuerto Ibn Battouta. Recogida rápida nada más llegar a Tánger.</p><Link href="/es/blog/alquiler-coches-aeropuerto-tanger" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">Descubrir el Servicio<ArrowRight className="ml-2 h-4 w-4" /></Link></div>
            </article>
            <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
              <div className="relative h-48"><Image src="/tanger port.webp" alt="Alquiler coches Puerto Tánger Med – Recepción ferry" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div></div>
              <div className="p-6"><p className="text-amber-400 text-sm mb-2">Tánger Med</p><h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Alquiler Coches Puerto Tánger Med – Recepción Ferry</h3><p className="text-gray-300 text-sm mb-4">Servicio especializado en el Puerto Tánger Med. Recogida coordinada con los ferries desde Europa.</p><Link href="/es/blog/alquiler-coches-puerto-tanger-med" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">Saber Más<ArrowRight className="ml-2 h-4 w-4" /></Link></div>
            </article>
          </div>

          <div className="mt-16 pt-16 border-t border-amber-400/20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Guías de Viaje <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Exclusivas</span></h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">Descubra los destinos más populares de Marruecos con nuestras guías detalladas</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48"><Image src="/tangier.webp" alt="Guía atracciones Tánger" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div></div>
                <div className="p-5"><p className="text-amber-400 text-xs mb-2">Guía Completa</p><h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">Guía Tánger 2025: Mejores Atracciones</h4><p className="text-gray-300 text-sm mb-3 line-clamp-2">Explore Tánger en coche de alquiler – itinerarios optimizados</p><Link href="/es/guias/guia-tanger-completa" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center text-sm">Descubrir Tánger<ArrowRight className="ml-1 h-3 w-3" /></Link></div>
              </article>
              <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48"><Image src="/tanger.webp" alt="Guía completa Tánger" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div></div>
                <div className="p-5"><p className="text-amber-400 text-xs mb-2">Guía de Ciudad</p><h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">Guía Completa Tánger: Itinerarios y Consejos</h4><p className="text-gray-300 text-sm mb-3 line-clamp-2">Descubra Tánger: medina, Cap Spartel, Grutas de Hércules y mejores sitios.</p><Link href="/es/guias/guia-tanger-completa" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center text-sm">Leer la Guía<ArrowRight className="ml-1 h-3 w-3" /></Link></div>
              </article>
              <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48"><Image src="/maroc.png" alt="Conducir en Marruecos – guía práctica" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div></div>
                <div className="p-5"><p className="text-amber-400 text-xs mb-2">Consejos de Conducción</p><h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">Conducir en Marruecos: Guía Práctica</h4><p className="text-gray-300 text-sm mb-3 line-clamp-2">Reglas de tráfico, peajes, gasolineras y seguridad vial.</p><Link href="/es/blog" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center text-sm">Ver Consejos<ArrowRight className="ml-1 h-3 w-3" /></Link></div>
              </article>
            </div>
            <div className="text-center mt-12"><Link href="/es/guias" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105">Todas las Guías<ArrowRight className="ml-2 h-5 w-5" /></Link></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Por qué Elegir <span className="text-amber-400">Nassouh Car</span>?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Su socio de confianza para el alquiler de coches en Tánger. Calidad, seguridad y los mejores precios.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Entrega Gratuita", desc: "Entrega y recogida gratuita en el Aeropuerto de Tánger, Puerto y Hoteles.", icon: MapPin },
              { title: "Sin Cargos Ocultos", desc: "Precios transparentes con seguro a todo riesgo incluido. Sin sorpresas al pagar.", icon: Shield },
              { title: "Soporte 24/7", desc: "Asistencia en carretera y atención al cliente disponible las 24 horas del día.", icon: Clock }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-amber-400/50 transition-all duration-300 group">
                <div className="bg-amber-400/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles & Tips Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Artículos y <span className="text-amber-400">Consejos</span></h2>
              <p className="text-gray-400">Prepare su viaje a Marruecos con nuestros mejores consejos</p>
            </div>
            <Link href="/es/blog" className="hidden md:flex items-center text-amber-400 hover:text-amber-300 font-semibold transition-colors">
              Ver todos los artículos <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article, idx) => (
              <article key={idx} className="bg-black/40 border border-white/10 rounded-3xl overflow-hidden hover:border-amber-400/30 transition-all duration-300 flex flex-col h-full group">
                <div className="relative h-56 overflow-hidden">
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full">{article.date}</div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-gray-400 mb-6 line-clamp-3">{article.excerpt}</p>
                  <Link href={`/es/${article.citySlug}`} className="mt-auto flex items-center text-amber-400 font-semibold group/link">
                    Leer más <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link href="/es/blog" className="inline-flex items-center text-amber-400 font-semibold">
              Ver todos los artículos <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                FAQ <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Alquiler Coche Tánger</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-6">
                Preguntas frecuentes sobre el <strong>alquiler de coches en Tánger</strong>.
              </p>
              <div className="text-gray-400 text-base max-w-3xl mx-auto">
                <p>
                  Información clave sobre nuestros servicios en el <strong>aeropuerto de Tánger</strong>, 
                  <strong>puerto Tánger Med</strong>, tarifas, seguros y condiciones.
                </p>
              </div>
            </header>
            
            <div className="space-y-6">
              {[
                {
                  question: "¿Dónde puedo alquilar un coche en Tánger con Nassoh Car?",
                  answer: "Puede alquilar un coche con Nassoh Car en el centro de Tánger, en el aeropuerto de Tánger-Ibn Battouta, en el puerto Tánger-Med, en la estación de tren de Tánger Ville, e incluso en ciudades vecinas como Tetuán. También ofrecemos entrega del vehículo en su hotel o en la dirección que elija en Tánger."
                },
                {
                  question: "¿Cómo reservar un alquiler de coche en el aeropuerto de Tánger o puerto Tánger-Med?",
                  answer: "La reserva es sencilla. Puede reservar en línea en nuestro sitio web, por WhatsApp o por teléfono. Aseguramos un servicio de bienvenida en el aeropuerto de Tánger-Ibn Battouta, en el puerto Tánger-Med y en el aeropuerto de Tetuán, para que pueda recoger su vehículo nada más llegar."
                },
                {
                  question: "¿Cuáles son las mejores tarifas de alquiler de coches en Tánger?",
                  answer: "Ofrecemos alquileres de coches asequibles en Tánger, desde 200 MAD (~20€) al día para modelos compactos como el Dacia Logan o Peugeot 208. Para alquileres mensuales, ofrecemos tarifas preferenciales y precios competitivos para vehículos nuevos, SUV o coches de gama alta."
                },
                {
                  question: "¿Puedo encontrar un alquiler de coche barato en el aeropuerto de Tánger sin fianza?",
                  answer: "Por razones de seguridad, solicitamos una fianza reembolsable de 5.000 MAD, pagadera en efectivo o bloqueada en tarjeta bancaria. Esta política nos permite mantener precios competitivos. Somos una de las agencias de alquiler mejor valoradas en el aeropuerto de Tánger por nuestra transparencia y calidad de servicio."
                },
                {
                  question: "¿Ofrecen alquiler de coches a largo plazo en Tánger o Tetuán?",
                  answer: "Sí. Estamos especializados en el alquiler a largo plazo en Tánger, Tetuán y en la zona del puerto Tánger-Med. Muchos expatriados y profesionales de las zonas industriales de Tánger eligen nuestras fórmulas mensuales para vehículos como el Dacia Logan, Toyota Yaris, Peugeot 208 y SUV."
                },
                {
                  question: "¿Qué documentos son necesarios para alquilar un coche en Tánger?",
                  answer: "Debe presentar un permiso de conducir válido, un pasaporte (o documento de identidad nacional para marroquíes) y una tarjeta bancaria. Se recomienda a los visitantes extranjeros llevar un permiso de conducir internacional (IDP) además de su permiso nacional."
                },
                {
                  question: "¿Cuál es la edad mínima para alquilar un coche en Marruecos?",
                  answer: "La edad mínima es de 21 años."
                },
                {
                  question: "¿Está incluido el seguro en los alquileres de Nassoh Car?",
                  answer: "Sí. Todos nuestros alquileres incluyen un seguro básico. Se requiere una fianza reembolsable de 500 € (o equivalente en MAD) al inicio del alquiler. El seguro cubre únicamente los daños resultantes de una colisión entre dos vehículos y por encima del umbral de 500 €. Los daños causados a objetos fijos (como un muro o poste) no están cubiertos. Disponemos de opciones de seguro complementario para una mayor protección."
                },
                {
                  question: "¿Cómo puedo alquilar un coche en Tetuán o en el aeropuerto de Tetuán?",
                  answer: "Ofrecemos entrega directa de vehículos en Tetuán, ya sea en el centro de la ciudad o en el aeropuerto de Tetuán, bajo petición. Este servicio es especialmente apreciado por los viajeros que llegan al norte de Marruecos vía Ryanair o Air Arabia."
                },
                {
                  question: "¿Por qué elegir Nassoh Car para su alquiler de coche en Tánger?",
                  answer: "Nassoh Car es reconocida como una de las mejores agencias de alquiler de coches en Tánger, gracias a sus tarifas transparentes, vehículos bien mantenidos, entrega rápida en el aeropuerto y servicio al cliente receptivo y amable."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Opiniones <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Clientes Nassoh Car</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-6">
              Lea las <strong>opiniones de clientes sobre alquiler de coches en Tánger</strong>.
            </p>
            <div className="text-gray-400 text-base max-w-3xl mx-auto">
              <p>
                Testimonios sobre nuestros servicios en el <strong>aeropuerto</strong> y en el <strong>puerto Tánger Med</strong>.
              </p>
            </div>
          </div>
          
          <GoogleReviews placeId="ChIJN1t_tDeuEmsRUsoyG83frY4" />
        </div>
      </section>

      </main>
      
      {/* WhatsApp Popup */}
      <WhatsAppPopup 
        phoneNumber="212631630013" 
        message="¡Hola! Me interesa alquilar un coche con NassohCar. ¿Pueden ayudarme?"
        delay={3000}
      />
    </div>
  )
}
