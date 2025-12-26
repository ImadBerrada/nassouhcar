'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { Car, Calendar, User, Settings, CreditCard } from 'lucide-react'

interface Booking {
  id: string
  startDate: string
  endDate: string
  totalPrice: number
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED'
  pickupLocation: string
  dropoffLocation?: string
  car: {
    brand: string
    model: string
    year: number
  }
}

export default function DashboardPageES() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loadingBookings, setLoadingBookings] = useState(true)

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/es/iniciar-sesion')
    }
  }, [isAuthenticated, isLoading, router])

  useEffect(() => {
    if (isAuthenticated) {
      fetchBookings()
    }
  }, [isAuthenticated])

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/bookings', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setBookings(data || [])
      }
    } catch (error) {
      console.error('Failed to fetch bookings:', error)
    } finally {
      setLoadingBookings(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Page Title Section */}
      <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent mb-4">
              Bienvenido de nuevo, {user?.name} !
            </h1>
            <p className="text-xl text-gray-300">Gestiona tus reservas y explora nuestra flota económica</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-amber-400 to-yellow-300 p-3 rounded-lg shadow-lg">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600 font-medium">Reservas Totales</p>
                    <p className="text-2xl font-bold text-gray-900">{bookings.length}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-400 p-3 rounded-lg shadow-lg">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600 font-medium">Alquileres Activos</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {bookings.filter(b => b.status === 'CONFIRMED').length}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-400 p-3 rounded-lg shadow-lg">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600 font-medium">Total Gastado</p>
                    <p className="text-2xl font-bold text-gray-900">
                      €{bookings
                        .filter(b => b.status === 'CONFIRMED' || b.status === 'COMPLETED')
                        .reduce((sum, b) => sum + b.totalPrice, 0)
                        .toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">Reservas Recientes</h2>
              </div>
              <div className="p-6">
                {loadingBookings ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-400"></div>
                  </div>
                ) : bookings.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="bg-gradient-to-r from-amber-400 to-yellow-300 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Car className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-gray-600 text-lg mb-4">Aún no hay reservas</p>
                    <p className="text-gray-500 mb-6">¡Comienza tu viaje de alquiler de coches económico hoy!</p>
                    <button
                      onClick={() => router.push('/es/flota')}
                      className="px-8 py-3 bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-900 font-semibold rounded-lg hover:from-amber-300 hover:to-yellow-200 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Ver Nuestra Flota
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="border border-gray-200 rounded-lg p-6 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 hover:border-amber-200 transition-all duration-300 shadow-sm hover:shadow-md">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 text-lg mb-2">{booking.car.brand} {booking.car.model} ({booking.car.year})</h3>
                            <div className="space-y-1">
                              <p className="text-sm text-gray-600 flex items-center">
                                <Calendar className="h-4 w-4 mr-2 text-amber-500" />
                                {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                              </p>
                              <p className="text-sm text-gray-600">
                                📍 {booking.pickupLocation} → {booking.dropoffLocation}
                              </p>
                            </div>
                          </div>
                          <div className="text-right ml-6">
                            <p className="font-bold text-xl text-gray-900 mb-2">€{booking.totalPrice}</p>
                            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                              booking.status === 'CONFIRMED' ? 'bg-green-100 text-green-800 border border-green-200' :
                              booking.status === 'COMPLETED' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                              booking.status === 'PENDING' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                              'bg-gray-100 text-gray-800 border border-gray-200'
                            }`}>
                              {booking.status === 'CONFIRMED' ? 'Confirmado' :
                               booking.status === 'COMPLETED' ? 'Completado' :
                               booking.status === 'PENDING' ? 'Pendiente' :
                               booking.status === 'CANCELLED' ? 'Cancelado' :
                               booking.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-amber-400 to-yellow-300 p-4 rounded-full shadow-lg">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 text-lg">{user?.name}</h3>
                  <p className="text-sm text-gray-600">{user?.email}</p>
                  {user?.phone && (
                    <p className="text-sm text-gray-600">{user.phone}</p>
                  )}
                </div>
              </div>
              <button
                onClick={() => router.push('/es/panel/perfil')}
                className="w-full flex items-center justify-center px-4 py-3 border border-amber-200 rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 hover:border-amber-300 transition-all duration-300 font-medium text-gray-700"
              >
                <Settings className="h-4 w-4 mr-2" />
                Editar Perfil
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Acciones Rápidas</h3>
              <div className="space-y-3">
                <button
                  onClick={() => router.push('/es/flota')}
                  className="w-full text-left px-4 py-4 rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 transition-all duration-300 border border-gray-200 hover:border-amber-200 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-amber-400 to-yellow-300 p-2 rounded-lg mr-3">
                      <Car className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Reservar un Coche</span>
                      <p className="text-xs text-gray-600">Explora nuestra flota económica</p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => router.push('/es/contacto')}
                  className="w-full text-left px-4 py-4 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 border border-gray-200 hover:border-green-200 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-400 p-2 rounded-lg mr-3">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Contactar Soporte</span>
                      <p className="text-xs text-gray-600">Obtén ayuda cuando la necesites</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
