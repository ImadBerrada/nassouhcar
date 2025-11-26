'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Car, User, MapPin, Clock, Euro, Phone, Mail, Eye, Filter, RefreshCw } from 'lucide-react'

interface Booking {
  id: string
  startDate: string
  endDate: string
  totalPrice: number
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED'
  pickupLocation: string
  dropoffLocation?: string
  additionalNotes?: string
  guestName?: string
  guestEmail?: string
  guestPhone?: string
  user?: {
    id: string
    name: string
    email: string
    phone?: string
  }
  car: {
    id: string
    brand: string
    model: string
    year: number
    image?: string
    category: string
    name?: string
  }
  createdAt: string
  updatedAt: string
}

interface BookingCalendarProps {
  onBookingClick?: (booking: Booking) => void
  className?: string
}

const MONTHS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
]

const DAYS = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']

const STATUS_COLORS = {
  PENDING: 'bg-yellow-500/20 border-yellow-500/40 text-yellow-300',
  CONFIRMED: 'bg-green-500/20 border-green-500/40 text-green-300',
  CANCELLED: 'bg-red-500/20 border-red-500/40 text-red-300',
  COMPLETED: 'bg-blue-500/20 border-blue-500/40 text-blue-300'
}

const STATUS_DOTS = {
  PENDING: 'bg-yellow-400',
  CONFIRMED: 'bg-green-400',
  CANCELLED: 'bg-red-400',
  COMPLETED: 'bg-blue-400'
}

// Libellés français pour les statuts
const STATUS_LABELS_FR: Record<Booking['status'], string> = {
  PENDING: 'En Attente',
  CONFIRMED: 'Confirmé',
  CANCELLED: 'Annulé',
  COMPLETED: 'Terminé'
}

// Formatage en EUR avec locale française
const formatEuro = (value: number) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value)

// Generate unique colors for each booking
const generateBookingColor = (bookingId: string) => {
  // Create a hash from the booking ID
  let hash = 0
  for (let i = 0; i < bookingId.length; i++) {
    const char = bookingId.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  
  // Generate HSL values for better color distribution
  const hue = Math.abs(hash) % 360
  const saturation = 60 + (Math.abs(hash) % 30) // 60-90%
  const lightness = 45 + (Math.abs(hash) % 20) // 45-65%
  
  return {
    background: `hsl(${hue}, ${saturation}%, ${lightness}%, 0.2)`,
    border: `hsl(${hue}, ${saturation}%, ${lightness}%, 0.6)`,
    text: `hsl(${hue}, ${saturation}%, ${Math.min(lightness + 30, 85)}%)`,
    dot: `hsl(${hue}, ${saturation}%, ${Math.min(lightness + 20, 75)}%)`
  }
}

export default function BookingCalendar({ onBookingClick, className = '' }: BookingCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [statusFilter, setStatusFilter] = useState<string>('ALL')
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month')
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hoveredBooking, setHoveredBooking] = useState<string | null>(null)
  const [tooltip, setTooltip] = useState<{ show: boolean; content: string; x: number; y: number }>({
    show: false,
    content: '',
    x: 0,
    y: 0
  })

  // Fetch bookings from API
  const fetchBookings = async () => {
    try {
      setLoading(true)
      setError(null)
      const token = localStorage.getItem('token')
      
      if (!token) {
        throw new Error('No authentication token found')
      }

      const response = await fetch('/api/admin/bookings?limit=1000', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch bookings')
      }
      
      const data = await response.json()
      setBookings(data.bookings || [])
    } catch (err) {
      console.error('Error fetching bookings:', err)
      setError(err instanceof Error ? err.message : 'Failed to load bookings')
    } finally {
      setLoading(false)
    }
  }

  // Fetch bookings on component mount
  useEffect(() => {
    fetchBookings()
  }, [])

  const today = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  // Get first day of the month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0)
  const firstDayWeekday = firstDayOfMonth.getDay()
  const daysInMonth = lastDayOfMonth.getDate()

  // Generate calendar days - only current month
  const calendarDays = []

  // Current month days only
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day)
    calendarDays.push({
      date,
      isCurrentMonth: true,
      isToday: date.toDateString() === today.toDateString()
    })
  }

  // Filter bookings by status
  const filteredBookings = statusFilter === 'ALL' 
    ? bookings 
    : bookings.filter(booking => booking.status === statusFilter)

  // Get bookings for a specific date
  const getBookingsForDate = (date: Date) => {
    return filteredBookings.filter(booking => {
      const startDate = new Date(booking.startDate)
      const endDate = new Date(booking.endDate)
      const checkDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
      const bookingStart = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())
      const bookingEnd = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate())
      
      return checkDate >= bookingStart && checkDate <= bookingEnd
    })
  }

  // Navigation functions
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
  }

  const goToToday = () => {
    setCurrentDate(new Date())
    setSelectedDate(new Date())
  }

  // Handle date click
  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
    const dayBookings = getBookingsForDate(date)
    if (dayBookings.length === 1) {
      setSelectedBooking(dayBookings[0])
    } else {
      setSelectedBooking(null)
    }
  }

  // Handle booking click
  const handleBookingClick = (booking: Booking) => {
    setSelectedBooking(booking)
    if (onBookingClick) {
      onBookingClick(booking)
    }
  }

  // Handle booking hover for tooltips
  const handleBookingHover = (booking: Booking, event: React.MouseEvent) => {
    setHoveredBooking(booking.id)
    const rect = event.currentTarget.getBoundingClientRect()
    const customerName = booking.user?.name || booking.guestName || 'Unknown'
    const tooltipContent = `${booking.car.brand} ${booking.car.model} - ${customerName} - €${booking.totalPrice}`
    
    setTooltip({
      show: true,
      content: tooltipContent,
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    })
  }

  const handleBookingLeave = () => {
    setHoveredBooking(null)
    setTooltip({ show: false, content: '', x: 0, y: 0 })
  }

  // Get booking statistics
  const getBookingStats = () => {
    const stats = {
      total: filteredBookings.length,
      pending: filteredBookings.filter(b => b.status === 'PENDING').length,
      confirmed: filteredBookings.filter(b => b.status === 'CONFIRMED').length,
      completed: filteredBookings.filter(b => b.status === 'COMPLETED').length,
      cancelled: filteredBookings.filter(b => b.status === 'CANCELLED').length,
    }
    return stats
  }

  const stats = getBookingStats()

  // Loading state
  if (loading) {
    return (
      <div className={`bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl ${className}`}>
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-75"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                <CalendarIcon className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Calendrier des Réservations
              </h2>
              <p className="text-white/60 text-sm">Loading bookings...</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-12">
          <div className="flex flex-col items-center space-y-4">
            <RefreshCw className="h-8 w-8 text-blue-400 animate-spin" />
            <p className="text-white/60">Loading booking data...</p>
          </div>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className={`bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl ${className}`}>
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-75"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                <CalendarIcon className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Calendrier des Réservations
              </h2>
              <p className="text-red-400 text-sm">Erreur de chargement des réservations</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-red-400 text-center">
              <p className="text-lg font-semibold">Échec du chargement des réservations</p>
              <p className="text-sm text-white/60 mt-2">{error}</p>
            </div>
            <button
              onClick={fetchBookings}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Réessayer</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl ${className}`}>
      {/* Calendar Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-75"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-2 sm:p-2.5 rounded-xl">
                <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Calendrier des Réservations
              </h2>
              <p className="text-white/60 text-xs">Gérez et consultez toutes les réservations</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Refresh Button */}
            <button
              onClick={fetchBookings}
              disabled={loading}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-white text-xs sm:text-sm transition-all duration-300 flex items-center space-x-1 sm:space-x-2 disabled:opacity-50"
            >
              <RefreshCw className={`h-3 w-3 sm:h-4 sm:w-4 ${loading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Actualiser</span>
            </button>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              <option value="ALL" className="bg-slate-800">Tous les Statuts</option>
              <option value="PENDING" className="bg-slate-800">En Attente</option>
              <option value="CONFIRMED" className="bg-slate-800">Confirmé</option>
              <option value="COMPLETED" className="bg-slate-800">Terminé</option>
              <option value="CANCELLED" className="bg-slate-800">Annulé</option>
            </select>

            {/* Today Button */}
            <button
              onClick={goToToday}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-lg px-2 sm:px-4 py-1.5 sm:py-2 text-white text-xs sm:text-sm transition-all duration-300"
            >
              Aujourd'hui
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mt-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10">
            <div className="text-white/60 text-xs uppercase tracking-wide">Total</div>
            <div className="text-white text-lg font-bold">{stats.total}</div>
          </div>
          <div className="bg-yellow-500/10 backdrop-blur-sm rounded-lg p-2 border border-yellow-500/20">
            <div className="text-yellow-300/80 text-xs uppercase tracking-wide">En Attente</div>
            <div className="text-yellow-300 text-lg font-bold">{stats.pending}</div>
          </div>
          <div className="bg-green-500/10 backdrop-blur-sm rounded-lg p-2 border border-green-500/20">
            <div className="text-green-300/80 text-xs uppercase tracking-wide">Confirmé</div>
            <div className="text-green-300 text-lg font-bold">{stats.confirmed}</div>
          </div>
          <div className="bg-blue-500/10 backdrop-blur-sm rounded-lg p-2 border border-blue-500/20">
            <div className="text-blue-300/80 text-xs uppercase tracking-wide">Terminé</div>
            <div className="text-blue-300 text-lg font-bold">{stats.completed}</div>
          </div>
          <div className="bg-red-500/10 backdrop-blur-sm rounded-lg p-2 border border-red-500/20">
            <div className="text-red-300/80 text-xs uppercase tracking-wide">Annulé</div>
            <div className="text-red-300 text-lg font-bold">{stats.cancelled}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {/* Calendar Grid */}
        <div className="flex-1 p-4">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={goToPreviousMonth}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 group"
            >
              <ChevronLeft className="h-5 w-5 text-white group-hover:text-blue-300" />
            </button>
            
            <h3 className="text-lg font-bold text-white">
              {MONTHS[currentMonth]} {currentYear}
            </h3>
            
            <button
              onClick={goToNextMonth}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 group"
            >
              <ChevronRight className="h-5 w-5 text-white group-hover:text-blue-300" />
            </button>
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            {DAYS.map(day => (
              <div key={day} className="p-2 text-center text-white/60 text-xs font-medium">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
            {/* Empty cells for days before the first day of the month */}
            {Array.from({ length: firstDayWeekday }, (_, index) => (
              <div key={`empty-${index}`} className="min-h-[40px] sm:min-h-[60px]"></div>
            ))}
            
            {/* Current month days */}
            {calendarDays.map((day, index) => {
              const dayBookings = getBookingsForDate(day.date)
              const isSelected = selectedDate?.toDateString() === day.date.toDateString()
              
              return (
                <div
                  key={index}
                  onClick={() => handleDateClick(day.date)}
                  className={`
                    relative min-h-[40px] sm:min-h-[60px] p-1 sm:p-1.5 rounded-lg cursor-pointer transition-all duration-300 border
                    bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20
                    ${day.isToday ? 'ring-2 ring-blue-500/50 bg-blue-500/10' : ''}
                    ${isSelected ? 'ring-2 ring-purple-500/50 bg-purple-500/10' : ''}
                  `}
                >
                  <div className="text-xs font-medium text-white">
                    {day.date.getDate()}
                  </div>
                  
                  {/* Booking indicators */}
                  {dayBookings.length > 0 && (
                    <div className="mt-0.5 space-y-0.5">
                      {/* Show only 1 booking on mobile, 2 on desktop */}
                      <div className="sm:hidden">
                        {dayBookings.slice(0, 1).map((booking, idx) => {
                          const bookingColors = generateBookingColor(booking.id)
                          return (
                            <div
                              key={booking.id}
                              onClick={(e) => {
                                e.stopPropagation()
                                handleBookingClick(booking)
                              }}
                              onMouseEnter={(e) => handleBookingHover(booking, e)}
                              onMouseLeave={handleBookingLeave}
                              className={`
                                text-xs px-1 py-0.5 rounded border cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg
                                ${hoveredBooking === booking.id ? 'ring-2 ring-white/30 transform scale-105' : ''}
                              `}
                              style={{
                                backgroundColor: bookingColors.background,
                                borderColor: bookingColors.border,
                                color: bookingColors.text
                              }}
                            >
                              <div className="flex items-center space-x-1">
                                <div 
                                  className="w-1 h-1 rounded-full"
                                  style={{ backgroundColor: bookingColors.dot }}
                                ></div>
                                <span className="truncate text-xs">
                                  {booking.car.brand.charAt(0)}{booking.car.model.charAt(0)}
                                </span>
                              </div>
                            </div>
                          )
                        })}
                        {dayBookings.length > 1 && (
                          <div className="text-xs text-white/60 px-1">
                            +{dayBookings.length - 1} more
                          </div>
                        )}
                      </div>
                      
                      {/* Desktop view */}
                      <div className="hidden sm:block">
                        {dayBookings.slice(0, 2).map((booking, idx) => {
                          const bookingColors = generateBookingColor(booking.id)
                          return (
                            <div
                              key={booking.id}
                              onClick={(e) => {
                                e.stopPropagation()
                                handleBookingClick(booking)
                              }}
                              onMouseEnter={(e) => handleBookingHover(booking, e)}
                              onMouseLeave={handleBookingLeave}
                              className={`
                                text-xs px-1.5 py-0.5 rounded border cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg
                                ${hoveredBooking === booking.id ? 'ring-2 ring-white/30 transform scale-105' : ''}
                              `}
                              style={{
                                backgroundColor: bookingColors.background,
                                borderColor: bookingColors.border,
                                color: bookingColors.text
                              }}
                            >
                              <div className="flex items-center space-x-1">
                                <div 
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ backgroundColor: bookingColors.dot }}
                                ></div>
                                <span className="truncate text-xs">
                                  {booking.car.brand} {booking.car.model}
                                </span>
                              </div>
                            </div>
                          )
                        })}
                        {dayBookings.length > 2 && (
                          <div className="text-xs text-white/60 px-1.5">
                            +{dayBookings.length - 2} de plus
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Booking Details Sidebar */}
        {selectedDate && (
          <div className="w-full border-t lg:border-t-0 lg:border-l border-white/10 p-4 lg:p-6">
            <div className="mb-4">
              <h4 className="text-lg font-bold text-white mb-2">
                {selectedDate.toLocaleDateString('fr-FR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h4>
              <div className="text-white/60 text-sm">
                {(() => { const count = getBookingsForDate(selectedDate).length; return `${count} réservation${count > 1 ? 's' : ''}` })()}
              </div>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
              {getBookingsForDate(selectedDate).map(booking => {
                const bookingColors = generateBookingColor(booking.id)
                return (
                  <div
                    key={booking.id}
                    onClick={() => handleBookingClick(booking)}
                    onMouseEnter={(e) => handleBookingHover(booking, e)}
                    onMouseLeave={handleBookingLeave}
                    className={`
                      p-4 rounded-lg border cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl
                      hover:bg-opacity-30
                      ${hoveredBooking === booking.id ? 'ring-2 ring-white/30 transform scale-105' : ''}
                    `}
                    style={{
                      backgroundColor: bookingColors.background,
                      borderColor: bookingColors.border,
                      color: bookingColors.text
                    }}
                  >
                  <div className="flex items-start space-x-3 mb-2">
                    {/* Car Image */}
                    <div className="flex-shrink-0">
                      {booking.car.image ? (
                        <img
                          src={booking.car.image}
                          alt={`${booking.car.brand} ${booking.car.model}`}
                          className="w-12 h-8 object-cover rounded border border-white/20"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <div className={`w-12 h-8 bg-white/10 rounded border border-white/20 flex items-center justify-center ${booking.car.image ? 'hidden' : ''}`}>
                        <Car className="h-4 w-4 text-white/60" />
                      </div>
                    </div>
                    
                    {/* Car Info and Status */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm truncate">
                          {booking.car.brand} {booking.car.model}
                        </span>
                        <div className="flex items-center space-x-1">
                          {(() => {
                            // Check if we have a selected date and if it matches the booking's start or end date
                            if (!selectedDate) return null;
                            
                            const startDate = new Date(booking.startDate);
                            const endDate = new Date(booking.endDate);
                            
                            // Normalize dates to compare only the date part (ignore time)
                            const selectedDateStr = selectedDate.getFullYear() + '-' + 
                              String(selectedDate.getMonth() + 1).padStart(2, '0') + '-' + 
                              String(selectedDate.getDate()).padStart(2, '0');
                            
                            const startDateStr = startDate.getFullYear() + '-' + 
                              String(startDate.getMonth() + 1).padStart(2, '0') + '-' + 
                              String(startDate.getDate()).padStart(2, '0');
                            
                            const endDateStr = endDate.getFullYear() + '-' + 
                              String(endDate.getMonth() + 1).padStart(2, '0') + '-' + 
                              String(endDate.getDate()).padStart(2, '0');
                            
                            // Check if the selected day is the pickup or return day for this booking
                            const isPickupDay = selectedDateStr === startDateStr;
                            const isReturnDay = selectedDateStr === endDateStr;
                            
                            const indicators = [];
                            
                            if (isPickupDay) {
                              indicators.push(
                                <span key="pickup" className="text-xs px-2 py-1 rounded bg-green-500/40 border border-green-400 text-green-200 flex-shrink-0 animate-pulse font-medium">
                                  🚗 Jour de Prise en Charge
                                </span>
                              );
                            }
                            
                            if (isReturnDay) {
                              indicators.push(
                                <span key="return" className="text-xs px-2 py-1 rounded bg-orange-500/40 border border-orange-400 text-orange-200 flex-shrink-0 animate-pulse font-medium">
                                  🚗 Jour de Retour
                                </span>
                              );
                            }
                            
                            return indicators.length > 0 ? indicators : null;
                          })()}
                          <span className="text-xs px-2 py-1 rounded bg-black/20 flex-shrink-0">
                            {STATUS_LABELS_FR[booking.status]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center space-x-2">
                      <User className="h-3 w-3" />
                      <span>{booking.user?.name || booking.guestName}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-3 w-3" />
                      <span className="truncate">{booking.pickupLocation}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Euro className="h-3 w-3" />
                      <span>{formatEuro(booking.totalPrice)}</span>
                    </div>
                  </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Booking Detail Modal */}
      {selectedBooking && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBooking(null)}
        >
          <div 
            className="bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-white/10">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Booking Details</h3>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${STATUS_COLORS[selectedBooking.status]}`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${STATUS_DOTS[selectedBooking.status]}`}></div>
                    {selectedBooking.status}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <Eye className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Customer Info */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h4 className="text-white font-medium mb-3 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Informations Client
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-white/60">Nom:</span>
                    <div className="text-white font-medium">{selectedBooking.user?.name || selectedBooking.guestName}</div>
                  </div>
                  <div>
                    <span className="text-white/60">Email:</span>
                    <div className="text-white font-medium">{selectedBooking.user?.email || selectedBooking.guestEmail}</div>
                  </div>
                  {(selectedBooking.user?.phone || selectedBooking.guestPhone) && (
                    <div>
                      <span className="text-white/60">Téléphone:</span>
                      <div className="text-white font-medium">{selectedBooking.user?.phone || selectedBooking.guestPhone}</div>
                    </div>
                  )}
                  <div>
                    <span className="text-white/60">Type:</span>
                    <div className="text-white font-medium">{selectedBooking.user ? 'Utilisateur Enregistré' : 'Invité'}</div>
                  </div>
                </div>
              </div>

              {/* Car Info */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h4 className="text-white font-medium mb-3 flex items-center">
                  <Car className="h-4 w-4 mr-2" />
                  Vehicle Information
                </h4>
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Car Image */}
                  <div className="flex-shrink-0">
                    {selectedBooking.car.image ? (
                      <img
                        src={selectedBooking.car.image}
                        alt={`${selectedBooking.car.brand} ${selectedBooking.car.model}`}
                        className="w-full lg:w-48 h-32 object-cover rounded-lg border border-white/20"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <div className={`w-full lg:w-48 h-32 bg-white/10 rounded-lg border border-white/20 flex items-center justify-center ${selectedBooking.car.image ? 'hidden' : ''}`}>
                      <div className="text-center">
                        <Car className="h-8 w-8 text-white/60 mx-auto mb-2" />
                        <span className="text-white/60 text-sm">No Image Available</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Car Details */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-white/60">Vehicle:</span>
                      <div className="text-white font-medium">{selectedBooking.car.brand} {selectedBooking.car.model}</div>
                    </div>
                    <div>
                      <span className="text-white/60">Année:</span>
                      <div className="text-white font-medium">{selectedBooking.car.year}</div>
                    </div>
                    <div>
                      <span className="text-white/60">Catégorie:</span>
                      <div className="text-white font-medium">{selectedBooking.car.category}</div>
                    </div>
                    <div>
                      <span className="text-white/60">Prix Total:</span>
                      <div className="text-white font-medium">{formatEuro(selectedBooking.totalPrice)}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Info */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h4 className="text-white font-medium mb-3 flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Informations de Réservation
                </h4>
                
                {/* Return Car Day Indicator */}
                {(() => {
                  const today = new Date();
                  const endDate = new Date(selectedBooking.endDate);
                  const isReturnDay = today.toDateString() === endDate.toDateString();
                  
                  if (isReturnDay) {
                    return (
                      <div className="mb-4 p-3 bg-orange-500/20 border border-orange-500/40 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 animate-pulse"></div>
                          <span className="text-orange-300 font-medium text-sm">
                            🚗 Jour de Retour - Aujourd'hui est la date de retour prévue
                          </span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })()}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                      <span className="text-white/60">Date de Prise en Charge:</span>
                    <div className="text-white font-medium">{new Date(selectedBooking.startDate).toLocaleDateString()}</div>
                  </div>
                  <div>
                      <span className="text-white/60">Date de Retour:</span>
                    <div className="text-white font-medium">{new Date(selectedBooking.endDate).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <span className="text-white/60">Lieu de Prise en Charge:</span>
                    <div className="text-white font-medium">{selectedBooking.pickupLocation}</div>
                  </div>
                  <div>
                    <span className="text-white/60">Lieu de Retour:</span>
                    <div className="text-white font-medium">{selectedBooking.dropoffLocation || selectedBooking.pickupLocation}</div>
                  </div>
                </div>
                {selectedBooking.additionalNotes && (
                  <div className="mt-4">
                    <span className="text-white/60">Notes:</span>
                    <div className="text-white font-medium mt-1">{selectedBooking.additionalNotes}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tooltip */}
      {tooltip.show && (
        <div
          className="fixed z-50 bg-slate-900/95 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white text-sm shadow-2xl pointer-events-none transform -translate-x-1/2 -translate-y-full"
          style={{
            left: tooltip.x,
            top: tooltip.y,
          }}
        >
          <div className="relative">
            {tooltip.content}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900/95"></div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(59, 130, 246, 0.5) rgba(255, 255, 255, 0.1);
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  )
}