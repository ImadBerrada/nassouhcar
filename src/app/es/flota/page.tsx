"use client"

import { Suspense, useState, useEffect, useCallback } from 'react'
import { Search, Star, Users, Settings, Fuel, Car as CarIcon } from 'lucide-react'
import Image from 'next/image'
import BookingModal from '@/app/es/components/BookingModal'
import StructuredData from '@/app/es/components/StructuredData'
import Breadcrumb, { BreadcrumbStructuredData } from '@/app/es/components/Breadcrumb'
import { api } from '@/lib/api'
import { useSearchParams } from 'next/navigation'
import { useBooking } from '@/contexts/BookingContext'

export const dynamic = 'force-dynamic'

function SeedBookingFromParams() {
  const searchParams = useSearchParams()
  const { updateBookingData } = useBooking()

  useEffect(() => {
    const pickup = searchParams.get('pickup') || ''
    const dropoff = searchParams.get('dropoff') || ''
    const startDate = searchParams.get('startDate') || ''
    const endDate = searchParams.get('endDate') || ''

    if (pickup || startDate || endDate || dropoff) {
      updateBookingData({ pickupLocation: pickup, dropoffLocation: dropoff || pickup, startDate, endDate })
    }
  }, [searchParams, updateBookingData])

  return null
}

interface Car { id: string; name: string; brand: string; model: string; year: number; category: string; transmission: string; fuelType: string; seats: number; pricePerDay: number; quantity: number; availableQuantity?: number; bookedQuantity?: number; isAvailable?: boolean; image?: string; description?: string; features: string[]; available: boolean; rating?: number }

interface AvailabilityData { carId: string; availableQuantity: number; bookedQuantity: number; isAvailable: boolean }

export default function FleetPageES() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)
  const [cars, setCars] = useState<Car[]>([])
  const [filteredCars, setFilteredCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [viewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy] = useState('name')

  const fetchCars = useCallback(async () => {
    try {
      setLoading(true)
      const response = await api.getCars()
      const carsData = response.cars || []

      try {
        const availabilityResponse = await fetch('/api/cars/availability', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ startDate: new Date().toISOString(), endDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() }) })
        if (availabilityResponse.ok) {
          const availabilityData = await availabilityResponse.json()
          const carsWithAvailability = carsData.map((car: Car) => {
            const availability = availabilityData.availability?.find((a: AvailabilityData) => a.carId === car.id)
            return { ...car, availableQuantity: availability?.availableQuantity || car.quantity || 0, bookedQuantity: availability?.bookedQuantity || 0, isAvailable: (availability?.availableQuantity || car.quantity || 0) > 0 }
          })
          setCars(carsWithAvailability)
        } else {
          const carsWithFallback = carsData.map((car: Car) => ({ ...car, availableQuantity: car.quantity || 0, bookedQuantity: 0, isAvailable: (car.quantity || 0) > 0 }))
          setCars(carsWithFallback)
        }
      } catch {
        const carsWithFallback = carsData.map((car: Car) => ({ ...car, availableQuantity: car.quantity || 0, bookedQuantity: 0, isAvailable: (car.quantity || 0) > 0 }))
        setCars(carsWithFallback)
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al obtener los coches'
      setError(message)
    } finally { setLoading(false) }
  }, [])

  const applyFilters = useCallback(() => {
    let filtered = [...cars]
    filtered = filtered.filter(car => car.available)
    if (searchQuery) { filtered = filtered.filter(car => car.name.toLowerCase().includes(searchQuery.toLowerCase()) || car.brand.toLowerCase().includes(searchQuery.toLowerCase()) || car.model.toLowerCase().includes(searchQuery.toLowerCase()) || car.category.toLowerCase().includes(searchQuery.toLowerCase())) }
    filtered.sort((a, b) => { switch (sortBy) { case 'price-low': return a.pricePerDay - b.pricePerDay; case 'price-high': return b.pricePerDay - a.pricePerDay; case 'rating': return (b.rating || 0) - (a.rating || 0); case 'name': default: return a.name.localeCompare(b.name) } })
    setFilteredCars(filtered)
  }, [cars, searchQuery, sortBy])

  useEffect(() => { fetchCars() }, [fetchCars])
  useEffect(() => { applyFilters() }, [cars, searchQuery, sortBy, applyFilters])

  const handleBookNow = (car: Car) => { setSelectedCar(car); setIsBookingModalOpen(true) }
  const closeBookingModal = () => { setIsBookingModalOpen(false); setSelectedCar(null) }

  if (loading) {
    return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100"><div className="text-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500 mx-auto mb-4"></div><p className="text-slate-600 text-lg">Cargando nuestra flota en Tánger…</p></div></div>)
  }

  if (error) {
    return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100"><div className="text-center"><div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"><span className="text-red-600 text-2xl">⚠</span></div><p className="text-red-600 text-lg mb-4">{error}</p><button onClick={fetchCars} className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">Reintentar</button></div></div>)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Suspense fallback={null}><SeedBookingFromParams /></Suspense>
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4"><Star className="h-8 w-8 text-yellow-400 drop-shadow-lg" /></div>
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">Alquiler de coches en Tánger – Flota Económica</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">Descubre nuestra flota de vehículos económicos para alquilar en Tánger. Desde coches baratos hasta familiares, encuentra el coche perfecto para tu viaje por Marruecos con Nassoh Car.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-amber-400"><span className="bg-white/10 px-4 py-2 rounded-full">✓ Aeropuerto Ibn Battouta</span><span className="bg-white/10 px-4 py-2 rounded-full">✓ Puerto Tanger Med</span><span className="bg-white/10 px-4 py-2 rounded-full">✓ Centro de Tánger</span></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><Breadcrumb items={[{ label: 'Nuestra Flota', href: '/es/flota' }]} className="text-slate-600" /></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Vehículos disponibles en Tánger ({filteredCars.length})</h2>
          <p className="text-slate-600">{searchQuery ? `Resultados para "${searchQuery}"` : 'Todos los vehículos disponibles para alquiler en Tánger'}</p>
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-slate-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center"><Search className="h-12 w-12 text-slate-400" /></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">No se encontraron vehículos</h3>
            <p className="text-slate-600 mb-6">{searchQuery ? 'Intenta ajustar tus términos de búsqueda' : 'No hay vehículos disponibles actualmente'}</p>
            {searchQuery && (<button onClick={() => setSearchQuery('')} className="px-6 py-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-colors">Borrar búsqueda</button>)}
          </div>
        )}

        {filteredCars.length > 0 && (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {filteredCars.map((car) => (
              <div key={car.id} className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 group hover:scale-[1.03] hover:shadow-2xl hover:-translate-y-2 border border-gray-100 ${viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''}`}>
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-80 flex-shrink-0' : 'h-72'}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <Image src={car.image || '/placeholder-car.png'} alt={`${car.brand} ${car.model}`} width={viewMode === 'list' ? 300 : 400} height={viewMode === 'list' ? 200 : 280} className={`w-full object-cover ${viewMode === 'list' ? 'h-48 sm:h-full sm:w-72 rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none' : 'h-72 rounded-t-2xl'} transition-all duration-500 group-hover:scale-110`} unoptimized={car.image?.startsWith('data:')} />
                  <div className="absolute top-4 left-4 z-20"><span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">{car.category}</span></div>
                  <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                    {car.rating && (<div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center shadow-lg"><Star className="h-4 w-4 text-yellow-400 fill-current mr-1" /><span className="text-sm font-semibold text-gray-800">{car.rating}</span></div>)}
                    <div className={`px-3 py-2 rounded-full text-xs font-semibold shadow-lg ${(car.availableQuantity || car.quantity) > 0 ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>{(car.availableQuantity || car.quantity) > 0 ? `${car.availableQuantity || car.quantity} Disponible` : 'No disponible'}</div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-yellow-600 transition-colors duration-300">{car.name}</h3>
                    <p className="text-gray-600 text-lg font-medium">{car.brand} {car.model} ({car.year})</p>
                    {car.description && <p className="text-gray-500 text-sm mt-2 line-clamp-2">{car.description}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center"><div className="bg-gradient-to-br from-blue-100 to-blue-200 p-2 rounded-xl mr-3"><Users className="h-5 w-5 text-blue-600" /></div><div><span className="text-xs text-gray-500 block">Plazas</span><span className="text-sm text-gray-900 font-semibold">{car.seats}</span></div></div>
                    <div className="flex items-center"><div className="bg-gradient-to-br from-purple-100 to-purple-200 p-2 rounded-xl mr-3"><Settings className="h-5 w-5 text-purple-600" /></div><div><span className="text-xs text-gray-500 block">Transmisión</span><span className="text-sm text-gray-900 font-semibold">{car.transmission}</span></div></div>
                    <div className="flex items-center"><div className="bg-gradient-to-br from-green-100 to-green-200 p-2 rounded-xl mr-3"><Fuel className="h-5 w-5 text-green-600" /></div><div><span className="text-xs text-gray-500 block">Combustible</span><span className="text-sm text-gray-900 font-semibold">{car.fuelType}</span></div></div>
                    <div className="flex items-center"><div className="bg-gradient-to-br from-orange-100 to-orange-200 p-2 rounded-xl mr-3"><CarIcon className="h-5 w-5 text-orange-600" /></div><div><span className="text-xs text-gray-500 block">Categoría</span><span className="text-sm text-gray-900 font-semibold">{car.category}</span></div></div>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                    <div className="flex flex-col"><span className="text-3xl font-bold text-gray-900">desde €{car.pricePerDay.toFixed(2)}</span><span className="text-sm text-gray-500 font-medium">por día</span></div>
                    <button onClick={() => handleBookNow(car)} disabled={(car.availableQuantity || car.quantity) === 0} className={`px-6 py-2.5 rounded-lg font-medium transition-colors duration-200 text-sm ${(car.availableQuantity || car.quantity) > 0 ? 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>{(car.availableQuantity || car.quantity) > 0 ? 'Reservar ahora' : 'No disponible'}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isBookingModalOpen && selectedCar && (<BookingModal car={selectedCar} isOpen={isBookingModalOpen} onClose={closeBookingModal} />)}

      <StructuredData type="Fleet" data={{ numberOfItems: filteredCars.length }} countryTarget="MA" language="es" />
      <BreadcrumbStructuredData items={[{ label: 'Nuestra Flota', href: '/es/flota' }]} />
    </div>
  )
}
