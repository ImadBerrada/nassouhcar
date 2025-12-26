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

export default function Home() {
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
    { value: 'tangier-airport', label: 'Aéroport Tanger Ibn Battouta' },
    { value: 'tangier-port', label: 'Port de Tanger Ville' },
    { value: 'tangier-med', label: 'Port Tanger Med' },
    { value: 'tangier-train', label: 'Gare de Tanger' },
    { value: 'tetouan', label: 'Centre-ville de Tétouan' },
    { value: 'nassoh-agency', label: 'Agence Nassoh Car' },
    { value: 'hotel-delivery', label: 'Livraison à l’Hôtel' },
    { value: 'fes-airport', label: 'Aéroport de Fès' },
    { value: 'marrakech-airport', label: 'Aéroport de Marrakech' },
    { value: 'rabat-sale-airport', label: 'Aéroport de Rabat–Salé' },
    { value: 'casablanca-airport', label: 'Aéroport de Casablanca' },
    { value: 'agadir-airport', label: 'Aéroport d’Agadir' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { const { name, value } = e.target; updateBookingData({ [name]: value }) }

  const handleBookingSearch = () => {
    if (!bookingData.pickupLocation || !bookingData.startDate || !bookingData.endDate) { alert('Veuillez remplir tous les champs obligatoires'); return }
    if (new Date(bookingData.startDate) >= new Date(bookingData.endDate)) { alert('La date de fin doit être après la date de début'); return }
    setIsSearching(true)
    const searchParams = new URLSearchParams({ pickup: bookingData.pickupLocation, dropoff: bookingData.dropoffLocation || bookingData.pickupLocation, startDate: bookingData.startDate, endDate: bookingData.endDate })
    router.push(`/fleet?${searchParams.toString()}`)
  }

  const articles = [
    { title: 'Location Voiture Tanger : 5 Joyaux Cachés à Découvrir en 2025', date: '23 août 2025', excerpt: 'La location de voiture à Tanger est le meilleur moyen d’explorer la région. Découvrez des routes panoramiques, des villes côtières et des plages cachées.', image: '/tangier.webp', citySlug: 'location-voiture-tanger' },
    { title: 'Location Voiture Aéroport Tanger – Service Express', date: '15 décembre 2024', excerpt: 'Location de voiture à l’Aéroport Tanger Ibn Battouta avec livraison gratuite. Flotte moderne, tarifs transparents, assistance 24/7.', image: '/tangier.webp', citySlug: 'location-voiture-aeroport-tanger' },
    { title: 'Location Voiture Port Tanger Med – Récupération Ferry', date: '8 décembre 2024', excerpt: 'Service spécialisé au Port Tanger Med. Récupération coordonnée avec les horaires des ferries depuis l’Europe.', image: '/tanger port.webp', citySlug: 'location-voiture-au-port-de-tanger-med' },
    { title: 'Location Voiture Pas Cher Tanger – Meilleurs Prix 2024', date: '13 décembre 2024', excerpt: 'Trouvez les meilleures offres de location de voiture à Tanger. Véhicules économiques et promos exclusives pour économiser plus.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop', citySlug: 'location-voiture-pas-cher-tanger' }
  ]

  return (
    <div className="relative">
      <StructuredData type="LocalBusiness" countryTarget="MA" language="fr" />
      <StructuredData type="AutoRental" countryTarget="MA" language="fr" />
      <StructuredData type="Service" countryTarget="MA" language="fr" />

      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner" aria-label="Section de réservation de location de voiture">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" alt="Location voiture économique aéroport Tanger Ibn Battouta - Location abordable Maroc - Nassoh Car" fill className="object-cover object-center scale-110" priority fetchPriority="high" />
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
                <span className="text-white drop-shadow-2xl">LOCATION VOITURE TANGER</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">NASSOH CAR – TANGER</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-yellow-300/20 to-amber-400/20 blur-3xl -z-10"></div>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6">Location voiture à Tanger – Service 24h/24, Livraison Gratuite.</p>
            </div>

            <div className="max-w-4xl mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-yellow-400/5 to-amber-400/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-amber-400/30 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
                  <div className="sm:col-span-2 lg:col-span-1">
                    <label htmlFor="pickupLocation" className="block text-white font-medium mb-2 text-sm lg:text-base">Lieu de prise en charge *</label>
                    <div className="relative">
                      <select id="pickupLocation" name="pickupLocation" value={bookingData.pickupLocation} onChange={handleInputChange} className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-amber-400 focus:outline-none focus:border-amber-400 appearance-none text-sm lg:text-base min-h-[44px]" required>
                        <option value="" className="bg-slate-800">Sélectionner un lieu</option>
                        {locations.map(location => (<option key={location.value} value={location.value} className="bg-slate-800">{location.label}</option>))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-amber-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="startDate" className="block text-white font-medium mb-2 text-sm lg:text-base">Date de début *</label>
                    <input type="date" id="startDate" name="startDate" value={bookingData.startDate} onChange={handleInputChange} lang="fr" placeholder="jj/mm/aaaa" min={new Date().toISOString().split('T')[0]} className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-gray-900 focus:outline-none focus:border-amber-400 text-sm lg:text-base min-h-[44px]" required />
                  </div>
                  <div>
                    <label htmlFor="endDate" className="block text-white font-medium mb-2 text-sm lg:text-base">Date de fin *</label>
                    <input type="date" id="endDate" name="endDate" value={bookingData.endDate} onChange={handleInputChange} lang="fr" placeholder="jj/mm/aaaa" min={bookingData.startDate || new Date().toISOString().split('T')[0]} className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-gray-900 focus:outline-none focus:border-amber-400 text-sm lg:text-base min-h-[44px]" required />
                  </div>
                  <div className="sm:col-span-2 lg:col-span-1">
                    <label htmlFor="dropoffLocation" className="block text-white font-medium mb-2 text-sm lg:text-base">Lieu de retour</label>
                    <div className="relative">
                      <select id="dropoffLocation" name="dropoffLocation" value={bookingData.dropoffLocation} onChange={handleInputChange} className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-amber-400 focus:outline-none focus:border-amber-400 appearance-none text-sm lg:text-base min-h-[44px]">
                        <option value="" className="bg-slate-800">Même que le départ</option>
                        {locations.map(location => (<option key={location.value} value={location.value} className="bg-slate-800">{location.label}</option>))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-amber-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button onClick={handleBookingSearch} disabled={isSearching} className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-3 px-8 lg:px-12 rounded-xl hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base min-w-[200px]">
                    {isSearching ? (<div className="flex items-center justify-center"><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>RECHERCHE...</div>) : ('RÉSERVER')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-slate-900 to-black" aria-label="Notre flotte de véhicules">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Notre <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Flotte</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"><Link href="/fleet" className="text-amber-400 hover:text-amber-300 underline font-medium"><strong>Flotte de location à Tanger</strong></Link> – véhicules économiques, prix compétitifs, service 24h/24.</p>
            </header>

            {cars.length > 0 ? (
              <div className="relative">
                {totalSlides > 1 && (<><button onClick={prevSlide} aria-label="Véhicule précédent" className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-amber-400/20 hover:bg-amber-400/30 backdrop-blur-md border border-amber-400/30 rounded-full p-3 transition-all duration-300 group"><ChevronLeft className="h-6 w-6 text-amber-400 group-hover:text-white" /></button><button onClick={nextSlide} aria-label="Véhicule suivant" className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-amber-400/20 hover:bg-amber-400/30 backdrop-blur-md border border-amber-400/30 rounded-full p-3 transition-all duration-300 group"><ChevronRight className="h-6 w-6 text-amber-400 group-hover:text-white" /></button></>)}

                <div className="overflow-hidden mx-12">
                  <div ref={sliderRef} className={`flex transition-transform duration-500 ease-in-out select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`} style={{ transform: `translateX(-${currentSlide * 100}%)` }} onMouseDown={handleFleetMouseDown} onMouseMove={handleFleetMouseMove} onMouseUp={handleFleetMouseUp} onMouseLeave={handleFleetMouseLeave} draggable={false}>
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {cars.slice(slideIndex * carsPerSlide, (slideIndex + 1) * carsPerSlide).map((car) => (
                            <div key={car.id} className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                              <div className="relative h-48 overflow-hidden">
                                <Image src={car.image || '/placeholder-car.png'} alt={`Location voiture ${car.brand} ${car.model} au Maroc`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" unoptimized={car.image?.startsWith('data:')} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-amber-400/90 text-black px-3 py-1 rounded-full text-sm font-bold">dès {car.pricePerDay.toFixed(0)}€/jour</div>
                              </div>
                              <div className="p-6">
                                <div className="mb-4">
                                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{car.name}</h3>
                                  <p className="text-amber-400 text-sm">{car.brand} {car.model} • {car.year}</p>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                  <div className="flex items-center text-gray-300"><Users className="h-4 w-4 mr-2 text-amber-400" /><span className="text-sm">{car.seats} places</span></div>
                                  <div className="flex items-center text-gray-300"><Settings className="h-4 w-4 mr-2 text-amber-400" /><span className="text-sm">{car.transmission}</span></div>
                                  <div className="flex items-center text-gray-300"><Fuel className="h-4 w-4 mr-2 text-amber-400" /><span className="text-sm">{car.fuelType}</span></div>
                                </div>
                                <button onClick={() => router.push(`/fleet?car=${car.id}`)} className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-3 px-6 rounded-xl hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105">Réserver</button>
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
                      <button key={index} onClick={() => setCurrentSlide(index)} aria-label={`Aller au véhicule ${index + 1}`} className={`w-8 h-8 rounded-full transition-all duration-300 p-1 ${index === currentSlide ? 'bg-amber-400 scale-110' : 'bg-amber-400/30 hover:bg-amber-400/50'}`} />
                    ))}
                  </div>
                )}

                <div className="text-center mt-12">
                  <button onClick={() => router.push('/fleet')} className="bg-white/10 backdrop-blur-md border border-amber-400/30 text-white font-bold py-4 px-8 rounded-xl hover:bg-amber-400/20 hover:border-amber-400 transition-all duration-300 flex items-center mx-auto">Voir toute la flotte<ArrowRight className="ml-2 h-5 w-5" /></button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400 mx-auto mb-4"></div>
                <p className="text-gray-300">Chargement de la flotte...</p>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Nos <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Services</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"><strong>Location voiture Tanger</strong> – Aéroport Ibn Battouta, Port Tanger Med et centre-ville.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Link href="/economy-cars" className="group">
                <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300">
                    <Car className="h-8 w-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">Location Pas Cher Tanger</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">Véhicules économiques parfaits pour la ville et les petits budgets. Meilleurs prix à Tanger.</p>
                  <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="font-semibold">En savoir plus</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </Link>
              <Link href="/airport-car-rental" className="group">
                <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300">
                    <MapPin className="h-8 w-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">Location Aéroport Tanger</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">Récupération et retour express à l’Aéroport Tanger Ibn Battouta. Arrivées et départs simplifiés.</p>
                  <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="font-semibold">En savoir plus</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </Link>
              <Link href="/location-voiture-au-port-de-tanger-med" className="group">
                <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300">
                    <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">Location Port Tanger Med</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">Location au Port Tanger Med. Service rapide et efficace pour vos voyages depuis le port.</p>
                  <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="font-semibold">En savoir plus</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </Link>
              <Link href="/car-rental-tetouan" className="group">
                <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-amber-400/30 transition-all duration-300">
                    <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">Location Voiture Tétouan</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">Louez une voiture à Tétouan au meilleur prix. Livraison et récupération flexibles.</p>
                  <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="font-semibold">En savoir plus</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Guide Location Voiture Tanger</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"><strong>Guides de location Tanger</strong> et conseils d’experts pour votre voyage au Maroc.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48"><Image src="/tangier.webp" alt="Location voiture Tanger – Guide complet" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div></div>
                <div className="p-6"><p className="text-amber-400 text-sm mb-2">Guide Expert</p><h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Location Voiture Tanger – Guide Complet 2025</h3><p className="text-gray-300 text-sm mb-4">Tout ce qu’il faut savoir pour louer une voiture à Tanger : prix, documents, conseils pratiques et meilleures offres.</p><Link href="/blog/location-voiture-tanger" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">Lire le Guide<ArrowRight className="ml-2 h-4 w-4" /></Link></div>
              </article>
              <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48"><Image src="/tangier.webp" alt="Location voiture aéroport Tanger Ibn Battouta – Express" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div></div>
                <div className="p-6"><p className="text-amber-400 text-sm mb-2">Aéroport</p><h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Location Aéroport Tanger – Service Express</h3><p className="text-gray-300 text-sm mb-4">Location 24/7 à l’Aéroport Ibn Battouta. Prise en charge rapide dès votre arrivée à Tanger.</p><Link href="/blog/location-voiture-aeroport-tanger" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">Découvrir le Service<ArrowRight className="ml-2 h-4 w-4" /></Link></div>
              </article>
              <article className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48"><Image src="/tanger port.webp" alt="Location voiture Port Tanger Med – Récupération ferry" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div></div>
                <div className="p-6"><p className="text-amber-400 text-sm mb-2">Tanger Med</p><h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Location Port Tanger Med – Récupération Ferry</h3><p className="text-gray-300 text-sm mb-4">Service spécialisé au Port Tanger Med. Récupération coordonnée avec les horaires des ferries.</p><Link href="/blog/location-voiture-au-port-de-tanger-med" className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">En savoir plus<ArrowRight className="ml-2 h-4 w-4" /></Link></div>
              </article>
            </div>


          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Pourquoi Choisir <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Nassoh Car</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"><strong>NASSOH CAR</strong> – Location fiable au Maroc. Large choix, livraison rapide, service d’excellence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300"><div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center"><Car className="h-8 w-8 text-amber-400" /></div><h3 className="text-xl font-bold text-white mb-4">Kilométrage Illimité</h3><p className="text-gray-300">Voyagez librement à travers le Maroc sans limite de distance. Profitez de vos trajets sans frais supplémentaires.</p></div>
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300"><div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center"><Calendar className="h-8 w-8 text-amber-400" /></div><h3 className="text-xl font-bold text-white mb-4">Réservation Facile</h3><p className="text-gray-300">Réservez en quelques clics. Processus simple et options de paiement multiples pour votre confort.</p></div>
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300"><div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center"><MapPin className="h-8 w-8 text-amber-400" /></div><h3 className="text-xl font-bold text-white mb-4">Multiples Points de Retour</h3><p className="text-gray-300">Disponible pour retour à l’Aéroport Tanger Ibn Battouta et Tétouan Sania R’mel.</p></div>
              <div className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300"><div className="bg-amber-400/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center"><Shield className="h-8 w-8 text-amber-400" /></div><h3 className="text-xl font-bold text-white mb-4">Véhicules Bien Entretenus</h3><p className="text-gray-300">Notre flotte est régulièrement révisée pour garantir une conduite sûre, confortable et fiable.</p></div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Articles & <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Conseils</span></h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">Explorez nos guides et conseils pour la location à Tanger et au Maroc. Découvrez les meilleures destinations avec Nassoh Car.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {articles.map((article, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                  <div className="relative h-48"><Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" loading="lazy" /></div>
                  <div className="p-6"><p className="text-amber-400 text-sm mb-2">{article.date}</p><h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{article.title}</h3><p className="text-gray-300 text-sm mb-4">{article.excerpt}</p><Link href={`/blog/${article.citySlug}`} className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center">Lire la suite<ArrowRight className="ml-2 h-4 w-4" /></Link></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">FAQ <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Location Voiture Tanger</span></h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-6">Questions fréquentes sur la <strong>location de voiture à Tanger</strong>. <strong>FAQ location Tanger Maroc</strong>.</p>
              <div className="text-gray-400 text-base max-w-3xl mx-auto"><p>Infos clés sur nos services à l’<strong>Aéroport de Tanger</strong>, au <strong>Port Tanger Med</strong>, tarifs, assurance et conditions.</p></div>
            </header>
            <div className="space-y-6">
              {[
                { question: 'Où puis-je louer une voiture à Tanger avec Nassoh Car ?', answer: 'Vous pouvez louer une voiture avec Nassoh Car au centre-ville de Tanger, à l’Aéroport Tanger Ibn Battouta, au Port Tanger Med, à la gare de Tanger Ville et dans les villes voisines comme Tétouan. Nous livrons aussi directement à votre hôtel.' },
                { question: 'Comment réserver à l’Aéroport de Tanger ou au Port Tanger Med ?', answer: 'La réservation est simple. En ligne, via WhatsApp ou par téléphone. Nous assurons un accueil personnalisé à l’aéroport et au port pour que vous puissiez récupérer votre véhicule dès votre arrivée.' },
                { question: 'Quels sont les meilleurs prix de location à Tanger ?', answer: 'Nous proposons des locations abordables dès 200 MAD (~20€) par jour pour des modèles compacts. Des tarifs préférentiels sont disponibles pour les locations mensuelles.' },
                { question: 'Puis-je louer une voiture à l’Aéroport de Tanger sans caution ?', answer: 'Pour des raisons de sécurité, nous demandons une caution remboursable de 5 000 MAD (en espèces ou empreinte carte). Cela nous permet de maintenir des prix compétitifs et une qualité de service optimale.' },
                { question: 'Proposez-vous des locations longue durée à Tanger ou Tétouan ?', answer: 'Oui. Nous sommes spécialisés dans la location longue durée à Tanger, Tétouan et la zone Tanger Med. De nombreux expatriés et professionnels choisissent nos forfaits mensuels.' },
                { question: 'Quels documents sont nécessaires pour louer une voiture à Tanger ?', answer: 'Un permis de conduire valide, un passeport (ou CNI pour les Marocains) et une carte bancaire. Les visiteurs étrangers sont encouragés à avoir un permis de conduire international.' },
                { question: 'Quel est l’âge minimum pour louer une voiture au Maroc ?', answer: 'L’âge minimum est de 21 ans.' },
                { question: 'L’assurance est-elle incluse dans les locations Nassoh Car ?', answer: 'Oui. Toutes les locations incluent une assurance de base. Une caution remboursable de 500€ (ou équivalent MAD) est requise. L’assurance couvre les collisions entre deux véhicules au-delà de la franchise. Les dommages aux objets fixes ne sont pas couverts.' },
              ].map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center"><span className="text-amber-400 mr-3">?</span>{faq.question}</h3>
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
                Avis <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Clients Nassoh Car</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-6">
                Découvrez les <strong>avis de nos clients sur la location de voiture à Tanger</strong>.
              </p>
              <div className="text-gray-400 text-base max-w-3xl mx-auto">
                <p>
                  Témoignages sur nos services à l&apos;<strong>aéroport</strong> et au <strong>port Tanger Med</strong>.
                </p>
              </div>
            </div>
            
            <GoogleReviews placeId="ChIJN1t_tDeuEmsRUsoyG83frY4" />
          </div>
        </section>
      </main>

      <WhatsAppPopup phoneNumber="212631630013" message="Bonjour! Je suis intéressé par la location d'une voiture. Pouvez-vous m'aider?" delay={3000} />
    </div>
  )
}
