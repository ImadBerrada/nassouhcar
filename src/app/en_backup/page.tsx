'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Calendar, Car, ChevronDown, Shield, ArrowRight, ChevronLeft, ChevronRight, Users, Settings, Fuel } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { api } from '@/lib/api'
import StructuredData from '@/app/en/components/StructuredData'
import { useBooking } from '@/contexts/BookingContext'
import WhatsAppPopup from '@/app/en/components/WhatsAppPopup'
import GoogleReviews from '@/app/en/components/GoogleReviews'

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

export default function HomeEN() {
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
    { value: 'tangier-airport', label: 'Tangier Ibn Battouta Airport' },
    { value: 'tangier-port', label: 'Tangier City Port' },
    { value: 'tangier-med', label: 'Tanger Med Port' },
    { value: 'tangier-train', label: 'Tangier Train Station' },
    { value: 'tetouan', label: 'Tetouan City Center' },
    { value: 'nassoh-agency', label: 'Nassoh Car Agency' },
    { value: 'hotel-delivery', label: 'Hotel Delivery' },
    { value: 'fes-airport', label: 'Fes Airport' },
    { value: 'marrakech-airport', label: 'Marrakesh Airport' },
    { value: 'rabat-sale-airport', label: 'Rabat–Salé Airport' },
    { value: 'casablanca-airport', label: 'Casablanca Airport' },
    { value: 'agadir-airport', label: 'Agadir Airport' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { const { name, value } = e.target; updateBookingData({ [name]: value }) }

  const handleBookingSearch = () => {
    if (!bookingData.pickupLocation || !bookingData.startDate || !bookingData.endDate) { alert('Please fill in all required fields'); return }
    if (new Date(bookingData.startDate) >= new Date(bookingData.endDate)) { alert('End date must be after start date'); return }
    setIsSearching(true)
    const searchParams = new URLSearchParams({ pickup: bookingData.pickupLocation, dropoff: bookingData.dropoffLocation || bookingData.pickupLocation, startDate: bookingData.startDate, endDate: bookingData.endDate })
    router.push(`/en/fleet?${searchParams.toString()}`)
  }

  const articles = [
    { title: 'Tangier Car Rental: 5 Hidden Gems You Can Drive To in 2025', date: 'August 23, 2025', excerpt: 'Tangier car rental is the best way to explore the region. Discover scenic routes, coastal towns, and hidden beaches.', image: '/tangier.webp', citySlug: 'car-rental-tangier' },
    { title: 'Car Rental Tangier Airport – Express Service', date: 'December 15, 2024', excerpt: 'Car rental at Tangier Ibn Battouta Airport with free delivery. Modern fleet, transparent pricing, 24/7 assistance.', image: '/tangier.webp', citySlug: 'car-rental-tangier-airport' },
    { title: 'Car Rental Tangier Med Port – Ferry Pickup', date: 'December 8, 2024', excerpt: 'Specialized service at Tanger Med Port. Coordinated pickup with ferry schedules from Europe.', image: '/tanger port.webp', citySlug: 'car-rental-tangier-port-med' },
    { title: 'Cheap Car Rental Tangier – Best Prices 2024', date: 'December 13, 2024', excerpt: 'Find the best car rental offers in Tangier. Budget vehicles and exclusive promos to save more.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop', citySlug: 'cheap-car-rental-tangier' }
  ]

  return (
    <div className="relative">
      <StructuredData type="LocalBusiness" countryTarget="MA" language="en" />
      <StructuredData type="AutoRental" countryTarget="MA" language="en" />
      <StructuredData type="Service" countryTarget="MA" language="en" />

      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner" aria-label="Car rental booking hero section">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" alt="Economy car rental Tangier airport Ibn Battouta - Affordable Morocco car hire - Nassoh Car" fill className="object-cover object-center scale-110" priority fetchPriority="high" />
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
                <span className="text-white drop-shadow-2xl">CAR RENTAL TANGIER</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">NASSOH CAR – TANGIER</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-yellow-300/20 to-amber-400/20 blur-3xl -z-10"></div>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6">Car rental in Tangier – 24/7 service, free delivery.</p>
            </div>

            <div className="max-w-4xl mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-yellow-400/5 to-amber-400/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-amber-400/30 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
                  <div className="sm:col-span-2 lg:col-span-1">
                    <label htmlFor="pickupLocation" className="block text-white font-medium mb-2 text-sm lg:text-base">Pickup Location *</label>
                    <div className="relative">
                      <select id="pickupLocation" name="pickupLocation" value={bookingData.pickupLocation} onChange={handleInputChange} className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-amber-400 focus:outline-none focus:border-amber-400 appearance-none text-sm lg:text-base min-h-[44px]" required>
                        <option value="" className="bg-slate-800">Select a location</option>
                        {locations.map(location => (<option key={location.value} value={location.value} className="bg-slate-800">{location.label}</option>))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-amber-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="startDate" className="block text-white font-medium mb-2 text-sm lg:text-base">Start Date *</label>
                    <input type="date" id="startDate" name="startDate" value={bookingData.startDate} onChange={handleInputChange} lang="en" placeholder="yyyy-mm-dd" min={new Date().toISOString().split('T')[0]} className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-gray-900 focus:outline-none focus:border-amber-400 text-sm lg:text-base min-h-[44px]" required />
                  </div>
                  <div>
                    <label htmlFor="endDate" className="block text-white font-medium mb-2 text-sm lg:text-base">End Date *</label>
                    <input type="date" id="endDate" name="endDate" value={bookingData.endDate} onChange={handleInputChange} lang="en" placeholder="yyyy-mm-dd" min={bookingData.startDate || new Date().toISOString().split('T')[0]} className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-gray-900 focus:outline-none focus:border-amber-400 text-sm lg:text-base min-h-[44px]" required />
                  </div>
                  <div className="sm:col-span-2 lg:col-span-1">
                    <label htmlFor="dropoffLocation" className="block text-white font-medium mb-2 text-sm lg:text-base">Drop-off Location</label>
                    <div className="relative">
                      <select id="dropoffLocation" name="dropoffLocation" value={bookingData.dropoffLocation} onChange={handleInputChange} className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-amber-400 focus:outline-none focus:border-amber-400 appearance-none text-sm lg:text-base min-h-[44px]">
                        <option value="" className="bg-slate-800">Same as pickup</option>
                        {locations.map(location => (<option key={location.value} value={location.value} className="bg-slate-800">{location.label}</option>))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-amber-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button onClick={handleBookingSearch} disabled={isSearching} className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-3 px-8 lg:px-12 rounded-xl hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base min-w-[200px]">
                    {isSearching ? (<div className="flex items-center justify-center"><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>SEARCHING...</div>) : ('BOOK A CAR')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-slate-900 to-black" aria-label="Our vehicle fleet">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Car Fleet</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"><Link href="/en/fleet" className="text-amber-400 hover:text-amber-300 underline font-medium"><strong>Car rental fleet in Tangier</strong></Link> – economy vehicles, competitive prices, 24/7 service.</p>
            </header>

            {cars.length > 0 ? (
              <div className="relative">
                {totalSlides > 1 && (<><button onClick={prevSlide} aria-label="Previous vehicle" className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-amber-400/20 hover:bg-amber-400/30 backdrop-blur-md border border-amber-400/30 rounded-full p-3 transition-all duration-300 group"><ChevronLeft className="h-6 w-6 text-amber-400 group-hover:text-white" /></button><button onClick={nextSlide} aria-label="Next vehicle" className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-amber-400/20 hover:bg-amber-400/30 backdrop-blur-md border border-amber-400/30 rounded-full p-3 transition-all duration-300 group"><ChevronRight className="h-6 w-6 text-amber-400 group-hover:text-white" /></button></>)}

                <div className="overflow-hidden mx-12">
                  <div ref={sliderRef} className={`flex transition-transform duration-500 ease-in-out select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`} style={{ transform: `translateX(-${currentSlide * 100}%)` }} onMouseDown={handleFleetMouseDown} onMouseMove={handleFleetMouseMove} onMouseUp={handleFleetMouseUp} onMouseLeave={handleFleetMouseLeave} draggable={false}>
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {cars.slice(slideIndex * carsPerSlide, (slideIndex + 1) * carsPerSlide).map((car) => (
                            <div key={car.id} className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                              <div className="relative h-48 overflow-hidden">
                                <Image src={car.image || '/placeholder-car.png'} alt={`Car rental ${car.brand} ${car.model} in Morocco`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" unoptimized={car.image?.startsWith('data:')} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-amber-400/90 text-black px-3 py-1 rounded-full text-sm font-bold">from €{car.pricePerDay.toFixed(2)}/day</div>
                              </div>
                              <div className="p-6">
                                <div className="mb-4">
                                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{car.name}</h3>
                                  <p className="text-amber-400 text-sm">{car.brand} {car.model} • {car.year}</p>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                  <div className="flex items-center text-gray-300"><Users className="h-4 w-4 mr-2 text-amber-400" /><span className="text-sm">{car.seats} seats</span></div>
                                  <div className="flex items-center text-gray-300"><Settings className="h-4 w-4 mr-2 text-amber-400" /><span className="text-sm">{car.transmission}</span></div>
                                  <div className="flex items-center text-gray-300"><Fuel className="h-4 w-4 mr-2 text-amber-400" /><span className="text-sm">{car.fuelType}</span></div>
                                </div>
                                <button onClick={() => router.push(`/en/fleet?car=${car.id}`)} className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-3 px-6 rounded-xl hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105">Book Now</button>
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
                      <button key={index} onClick={() => setCurrentSlide(index)} aria-label={`Go to vehicle ${index + 1}`} className={`w-8 h-8 rounded-full transition-all duration-300 p-1 ${index === currentSlide ? 'bg-amber-400 scale-110' : 'bg-amber-400/30 hover:bg-amber-400/50'}`} />
                    ))}
                  </div>
                )}

                <div className="text-center mt-12">
                  <button onClick={() => router.push('/en/fleet')} className="bg-white/10 backdrop-blur-md border border-amber-400/30 text-white font-bold py-4 px-8 rounded-xl hover:bg-amber-400/20 hover:border-amber-400 transition-all duration-300 flex items-center mx-auto">View Full Fleet<ArrowRight className="ml-2 h-5 w-5" /></button>
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

        <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Tangier Car Rental Guide</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"><strong>Car rental Tangier guides</strong> and expert tips for your Morocco trip.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48"><Image src="/tangier.webp" alt="Car rental Tangier – Complete guide" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div></div>
                <div className="p-6"><p className="text-amber-400 text-sm mb-2">Expert Guide</p><h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Car Rental Tangier – Complete Guide 2025</h3><p className="text-gray-300 text-sm mb-4">Everything you need to know to rent a car in Tangier: prices, documents, practical tips and best offers.</p><Link href="/en/blog/car-rental-tangier" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">Read the Guide<ArrowRight className="ml-2 h-4 w-4" /></Link></div>
              </article>
              <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48"><Image src="/tangier.webp" alt="Car rental Tangier airport Ibn Battouta – Express" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div></div>
                <div className="p-6"><p className="text-amber-400 text-sm mb-2">Airport</p><h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Car Rental Tangier Airport – Express Service</h3><p className="text-gray-300 text-sm mb-4">24/7 car rental at Ibn Battouta Airport. Fast pickup as soon as you arrive in Tangier.</p><Link href="/en/blog/car-rental-tangier-airport" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">Discover the Service<ArrowRight className="ml-2 h-4 w-4" /></Link></div>
              </article>
              <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48"><Image src="/tanger port.webp" alt="Car rental Tangier Med Port – Ferry pickup" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div></div>
                <div className="p-6"><p className="text-amber-400 text-sm mb-2">Tanger Med</p><h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Car Rental Tangier Med Port – Ferry Pickup</h3><p className="text-gray-300 text-sm mb-4">Specialized service at Tanger Med Port. Coordinated pickup with ferry schedules from Europe.</p><Link href="/en/blog/car-rental-tangier-port-med" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">Learn More<ArrowRight className="ml-2 h-4 w-4" /></Link></div>
              </article>
            </div>


          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Services</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"><strong>Car rental in Tangier</strong> – Ibn Battouta Airport, Tanger Med Port and city center.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Link href="/en/fleet" className="group"><div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full"><div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300"><Car className="h-8 w-8 text-amber-400" /></div><h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">Cheap Car Rental Tangier</h3><p className="text-gray-300 leading-relaxed mb-6">Economy vehicles perfect for city driving and tight budgets. Best prices in Tangier.</p><div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300"><span className="font-semibold">Learn More</span><ArrowRight className="ml-2 h-5 w-5" /></div></div></Link>
              <Link href="/en/fleet" className="group"><div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full"><div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300"><Calendar className="h-8 w-8 text-amber-400" /></div><h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">Airport Car Rental</h3><p className="text-gray-300 leading-relaxed mb-6">Express pickup and return at Tangier Ibn Battouta Airport. Seamless arrivals and departures.</p><div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300"><span className="font-semibold">Discover</span><ArrowRight className="ml-2 h-5 w-5" /></div></div></Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Why Choose <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Nassoh Car</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"><strong>NASSOH CAR</strong> – Reliable car rental in Morocco. Wide vehicle selection, fast delivery, great service.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300"><div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center"><Car className="h-8 w-8 text-amber-400" /></div><h3 className="text-xl font-bold text-white mb-4">Unlimited Mileage</h3><p className="text-gray-300">Travel freely across Morocco without worrying about distance limits. Enjoy stress-free trips with no extra mileage fees.</p></div>
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300"><div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center"><Calendar className="h-8 w-8 text-amber-400" /></div><h3 className="text-xl font-bold text-white mb-4">Easy Booking & Payment</h3><p className="text-gray-300">Simple, hassle-free booking lets you reserve a car in a few clicks. Multiple payment options available.</p></div>
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300"><div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center"><MapPin className="h-8 w-8 text-amber-400" /></div><h3 className="text-xl font-bold text-white mb-4">Multiple Airport Return Locations</h3><p className="text-gray-300">Available for return at Tangier Ibn Battouta Airport and Tetouan Sania R’mel.</p></div>
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300"><div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center"><Shield className="h-8 w-8 text-amber-400" /></div><h3 className="text-xl font-bold text-white mb-4">Well-Maintained Cars</h3><p className="text-gray-300">Our fleet is regularly serviced and kept in top condition for a safe, comfortable, and reliable driving experience.</p></div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">FAQ <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Car Rental Tangier</span></h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-6">Frequently asked questions about <strong>car rental in Tangier</strong>. <strong>Car rental FAQ Tangier Morocco</strong>.</p>
              <div className="text-gray-400 text-base max-w-3xl mx-auto"><p>Key info about our services at <strong>Tangier Airport</strong>, <strong>Tanger Med Port</strong>, pricing, insurance and terms.</p></div>
            </header>
            <div className="space-y-6">
              {[
                { question: 'Where can I rent a car in Tangier with Nassoh Car?', answer: 'You can rent a car with Nassoh Car in Tangier city center, Tangier Ibn Battouta Airport, Tanger Med Port, Tangier Ville train station, and nearby cities like Tetouan. We also deliver vehicles directly to your hotel or address in Tangier.' },
                { question: 'How do I book a car at Tangier Airport or Tanger Med Port?', answer: 'Booking is easy. Reserve online, via WhatsApp or by phone. We provide meet-and-greet service at Tangier Airport, Tanger Med Port and Tetouan Airport so you can pick up your vehicle upon arrival.' },
                { question: 'What are the best car rental prices in Tangier?', answer: 'We offer affordable rentals starting from 200 MAD (~€20) per day for compact models like Dacia Logan or Peugeot 208. Monthly rentals are available with preferential rates for new vehicles, SUVs or premium cars.' },
                { question: 'Can I rent a car at Tangier Airport without a deposit?', answer: 'For security reasons, we require a refundable deposit of 5,000 MAD, in cash or card hold. This helps us maintain competitive prices. We are among the top-rated agencies at Tangier Airport for transparency and service quality.' },
                { question: 'Do you offer long-term rentals in Tangier or Tetouan?', answer: 'Yes. We specialize in long-term rentals in Tangier, Tetouan and the Tanger Med port area. Many expats and professionals choose our monthly plans for vehicles like Dacia Logan, Toyota Yaris, Peugeot 208 and SUVs.' },
                { question: 'What documents are required to rent a car in Tangier?', answer: 'A valid driver’s license, passport (or national ID for Moroccans) and a bank card. Foreign visitors are encouraged to also carry an International Driving Permit (IDP).' },
                { question: 'What is the minimum age to rent a car in Morocco?', answer: 'Minimum age is 21 years.' },
                { question: 'Is insurance included in Nassoh Car rentals?', answer: 'Yes. All rentals include basic insurance. A refundable deposit of €500 (or MAD equivalent) is required at the start. Insurance covers collisions between two vehicles above the €500 threshold. Damage to fixed objects (like a wall or pole) is not covered. Additional insurance options are available.' },
                { question: 'Can I rent a car in Tetouan or at Tetouan Airport?', answer: 'We deliver vehicles directly to Tetouan, both city center and Tetouan Airport, upon request. Popular with travelers arriving in northern Morocco via Ryanair or Air Arabia.' },
                { question: 'Why choose Nassoh Car for car rental in Tangier?', answer: 'Nassoh Car is recognized as one of the best car rental agencies in Tangier, thanks to transparent pricing, well-maintained vehicles, fast airport delivery and responsive customer service.' }
              ].map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-xl p-6"><h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3><p className="text-gray-300 leading-relaxed">{faq.answer}</p></div>
              ))}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [ { '@type': 'Question', 'name': 'What documents are required to rent a car in Tangier with Nassoh Car?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Valid driver’s license, ID (passport or CIN) and bank card. IDP recommended for international visitors.' } }, { '@type': 'Question', 'name': 'Do you offer car rental at Tangier Ibn Battouta Airport?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, pickup and return 24/7 at Ibn Battouta Airport. Direct delivery and on-site meet-and-greet.' } }, { '@type': 'Question', 'name': 'Do you provide rental at Tanger Med Port?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, direct delivery at Tanger Med Port and coordination with ferry schedules.' } }, { '@type': 'Question', 'name': 'What are car rental prices in Tangier?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Rates from 200 MAD/day (economy). Basic insurance and unlimited mileage included.' } }, { '@type': 'Question', 'name': 'Is insurance included with Nassoh Car Tangier?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, basic insurance included. Full coverage options and 24/7 assistance available.' } }, { '@type': 'Question', 'name': 'Do you offer free car delivery in Tangier city center?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, free delivery in city center, Tanger Med Port and Ibn Battouta Airport.' } } ] }) }} />
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Nassoh Car <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Customer Reviews</span></h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-6">Read <strong>car rental reviews in Tangier</strong>. <strong>Customer reviews car rental Tangier</strong>.</p>
              <div className="text-gray-400 text-base max-w-3xl mx-auto"><p>Testimonials about our services at the <strong>airport</strong> and <strong>Tanger Med Port</strong>.</p></div>
            </div>
            <GoogleReviews placeId="ChIJN1t_tDeuEmsRUsoyG83frY4" />
          </div>
        </section>

      </main>

      <StructuredData type="LocalBusiness" countryTarget="MA" language="en" />
      <WhatsAppPopup phoneNumber="212631630013" message="Hello! I'm interested in renting a car from NassohCar. Can you help me?" />
    </div>
  )
}
