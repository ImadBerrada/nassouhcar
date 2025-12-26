"use client"

import { useState, useEffect } from 'react'
import { X, Car, Calendar, MapPin, User, Users, Settings, Fuel } from 'lucide-react'
import Image from 'next/image'
import { api, getAuthToken } from '@/lib/api'
import { useAuth } from '@/contexts/AuthContext'
import { useBooking } from '@/contexts/BookingContext'
import BookingConfirmationPopup from '@/app/en/components/BookingConfirmationPopup'
import PhoneInput from '@/app/en/components/PhoneInput'
import { calculateTotalPriceForRange } from '@/lib/pricing'

interface Car {
  id: string
  name: string
  brand: string
  model: string
  pricePerDay: number
  shortTermPricePerDay?: number | null
  category: string
  transmission: string
  fuelType: string
  seats: number
  image?: string
}

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  car: Car | null
}

export default function BookingModal({ isOpen, onClose, car }: BookingModalProps) {
  const { user } = useAuth()
  const { bookingData } = useBooking()
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    startDate: '',
    endDate: '',
    additionalNotes: '',
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    childSeat: false
  })
  const [bookingMode, setBookingMode] = useState<'auth' | 'guest'>('auth')

  useEffect(() => {
    if (bookingData.pickupLocation || bookingData.startDate || bookingData.endDate) {
      setFormData(prev => ({
        ...prev,
        pickupLocation: bookingData.pickupLocation || prev.pickupLocation,
        dropoffLocation: bookingData.dropoffLocation || prev.dropoffLocation,
        startDate: bookingData.startDate || prev.startDate,
        endDate: bookingData.endDate || prev.endDate
      }))
    }
  }, [bookingData])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false)
  const [confirmationData, setConfirmationData] = useState<{ bookingId: string; totalPrice: number } | null>(null)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const calculateTotalPrice = async () => {
    if (!car || !formData.startDate || !formData.endDate) return 0
    const start = new Date(formData.startDate)
    const end = new Date(formData.endDate)
    if (start >= end) return 0
    try {
      const total = await calculateTotalPriceForRange(
        car.id,
        start,
        end,
        car.pricePerDay,
        car.shortTermPricePerDay ?? undefined
      )
      return total
    } catch (error) {
      const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
      return days * car.pricePerDay
    }
  }

  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => { (async () => setTotalPrice(await calculateTotalPrice()))() }, [formData.startDate, formData.endDate, car])

  const selectedDays = (() => {
    if (!formData.startDate || !formData.endDate) return 0
    const start = new Date(formData.startDate)
    const end = new Date(formData.endDate)
    if (start >= end) return 0
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  })()

  const effectivePricePerDay = (() => {
    if (selectedDays > 0 && totalPrice > 0) {
      return Math.round((totalPrice / selectedDays) * 100) / 100
    }
    return car?.pricePerDay ?? 0
  })()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user && bookingMode === 'auth') {
      setSubmitStatus({ type: 'error', message: 'Please log in to complete a booking.' })
      return
    }

    if (!user && bookingMode === 'guest') {
      if (!formData.guestName || !formData.guestEmail || !formData.guestPhone) {
        setSubmitStatus({ type: 'error', message: 'Please fill in all guest information fields.' })
        return
      }
    }

    if (!car) {
      setSubmitStatus({ type: 'error', message: 'Car information is missing.' })
      return
    }

    if (!formData.startDate || !formData.endDate) {
      setSubmitStatus({ type: 'error', message: 'Please select start and end dates.' })
      return
    }
    const start = new Date(formData.startDate)
    const end = new Date(formData.endDate)
    if (start >= end) {
      setSubmitStatus({ type: 'error', message: 'End date must be after start date.' })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      let response
      if (user) {
        const token = getAuthToken()
        if (!token) {
          setSubmitStatus({ type: 'error', message: 'Authentication required. Please sign in again.' })
          return
        }

        const combinedNotes = [
          formData.additionalNotes?.trim() || '',
          formData.childSeat ? 'Child/baby seat requested' : ''
        ].filter(Boolean).join(' | ')

        const bookingData = {
          carId: car.id,
          startDate: formData.startDate,
          endDate: formData.endDate,
          pickupLocation: formData.pickupLocation,
          dropoffLocation: formData.dropoffLocation || formData.pickupLocation,
          additionalNotes: combinedNotes || undefined
        }

        response = await api.createBooking(bookingData, token)
      } else {
        const combinedGuestNotes = [
          formData.additionalNotes?.trim() || '',
          formData.childSeat ? 'Child/baby seat requested' : ''
        ].filter(Boolean).join(' | ')

        const guestBookingData = {
          carId: car.id,
          startDate: formData.startDate,
          endDate: formData.endDate,
          pickupLocation: formData.pickupLocation,
          dropoffLocation: formData.dropoffLocation || formData.pickupLocation,
          additionalNotes: combinedGuestNotes || undefined,
          guestName: formData.guestName,
          guestEmail: formData.guestEmail,
          guestPhone: formData.guestPhone
        }

        response = await api.createGuestBooking(guestBookingData)
      }

      if (response.error) {
        setSubmitStatus({ type: 'error', message: response.error })
      } else {
        setConfirmationData({ bookingId: response.id, totalPrice: response.totalPrice })
        setShowConfirmationPopup(true)
        setSubmitStatus(null)
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Booking failed. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleConfirmationClose = () => {
    setShowConfirmationPopup(false)
    setConfirmationData(null)
    setFormData({ pickupLocation: '', dropoffLocation: '', startDate: '', endDate: '', additionalNotes: '', guestName: '', guestEmail: '', guestPhone: '', childSeat: false })
    setBookingMode('auth')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8" style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] sm:max-h-[95vh] h-[90vh] sm:h-auto overflow-hidden sm:overflow-y-auto transform transition-all duration-300 scale-100 opacity-100 flex flex-col sm:block">
        <div className="flex items-center justify-between p-5 sm:p-8 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white sticky top-0 z-10 sm:static sm:top-auto">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-3 sm:p-4 rounded-xl shadow-md">
              <Car className="h-6 w-6 sm:h-7 sm:w-7 text-black" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Book Your Car</h2>
              <p className="text-sm sm:text-base text-gray-600">Complete your booking details</p>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close" className="p-3 sm:p-3 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="overflow-y-auto overflow-x-hidden">
          {car && (
            <div className="p-6 sm:p-8 bg-gradient-to-br from-yellow-50 to-amber-50 border-b border-gray-100">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                  {car.image ? (
                    <Image src={car.image} alt={car.name} width={112} height={112} className="rounded-2xl object-cover" />
                  ) : (
                    <Car className="h-12 w-12 text-yellow-600" />
                  )}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{car.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">{car.brand} {car.model}</p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 text-sm text-gray-700">
                    <span className="flex items-center"><Car className="h-4 w-4 mr-1 text-yellow-600" /> {car.category}</span>
                    <span className="flex items-center"><Users className="h-4 w-4 mr-1 text-yellow-600" /> {car.seats} seats</span>
                    <span className="flex items-center"><Settings className="h-4 w-4 mr-1 text-yellow-600" /> Transmission: {car.transmission}</span>
                    <span className="flex items-center"><Fuel className="h-4 w-4 mr-1 text-yellow-600" /> {car.fuelType}</span>
                  </div>
                </div>
                <div className="text-center sm:text-right mt-4 sm:mt-0">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                    {selectedDays > 0 ? (
                      <>€{effectivePricePerDay.toFixed(2)}</>
                    ) : (
                      <>from €{car.pricePerDay.toFixed(2)}</>
                    )}
                  </div>
                  <div className="text-base text-gray-600">per day</div>
                </div>
              </div>
              {totalPrice > 0 && (
                <div className="mt-6 p-4 sm:p-5 bg-white rounded-xl border border-yellow-200 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-lg sm:text-xl text-gray-700 font-semibold">Estimated Total:</span>
                    <span className="text-2xl sm:text-3xl font-bold text-green-600">€{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="p-6 sm:p-8">
            {!user && bookingMode === 'auth' ? (
              <div className="text-center py-8 sm:py-12">
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 sm:p-8 shadow-inner">
                  <User className="h-14 w-14 sm:h-16 sm:w-16 text-yellow-600 mx-auto mb-6" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Choose your booking option</h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-6">Log in for faster bookings or continue as a guest.</p>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
                      <a href="/login" className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-3 px-8 rounded-xl shadow-lg hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105">Login</a>
                      <a href="/register" className="bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-xl hover:bg-gray-300 transition-all duration-300">Register</a>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300" /></div>
                      <div className="relative flex justify-center text-sm"><span className="px-2 bg-yellow-50 text-gray-500">or</span></div>
                    </div>
                    <button onClick={() => setBookingMode('guest')} className="w-full bg-white border-2 border-yellow-400 text-yellow-600 font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105">Continue as guest</button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label htmlFor="startDate" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">Pickup Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleInputChange} lang="en" placeholder="yyyy-mm-dd" required className="mt-1 block w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-base text-gray-900" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="endDate" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">Return Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleInputChange} lang="en" placeholder="yyyy-mm-dd" required className="mt-1 block w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-base text-gray-900" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label htmlFor="pickupLocation" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">Pickup Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select id="pickupLocation" name="pickupLocation" value={formData.pickupLocation} onChange={handleInputChange} required className="mt-1 block w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-base text-gray-900">
                        <option value="">Select a location</option>
                        {locations.map(loc => (<option key={loc.value} value={loc.value}>{loc.label}</option>))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="dropoffLocation" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">Return Location (Optional)</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select id="dropoffLocation" name="dropoffLocation" value={formData.dropoffLocation} onChange={handleInputChange} className="mt-1 block w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-base text-gray-900">
                        <option value="">Same as pickup</option>
                        {locations.map(loc => (<option key={loc.value} value={loc.value}>{loc.label}</option>))}
                      </select>
                    </div>
                  </div>
                </div>

                {!user && bookingMode === 'guest' && (
                  <div className="space-y-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">Guest Information</h4>
                      <button type="button" onClick={() => setBookingMode('auth')} className="text-sm text-yellow-600 hover:text-yellow-700 font-medium">← Back to login options</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="guestName" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input type="text" id="guestName" name="guestName" value={formData.guestName} onChange={handleInputChange} required className="mt-1 block w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-base text-gray-900" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="guestEmail" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">Email Address</label>
                        <input type="email" id="guestEmail" name="guestEmail" value={formData.guestEmail} onChange={handleInputChange} required className="mt-1 block w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-base" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="guestPhone" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">Phone Number</label>
                      <PhoneInput id="guestPhone" name="guestPhone" value={formData.guestPhone} onChange={(value) => setFormData(prev => ({ ...prev, guestPhone: value }))} placeholder="Enter your phone number" required className="mt-1" />
                    </div>
                  </div>
                )}

                <div className="p-4 sm:p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Options</h4>
                  <label className="flex items-center space-x-3 cursor-pointer select-none">
                    <input type="checkbox" name="childSeat" checked={formData.childSeat} onChange={(e) => setFormData(prev => ({ ...prev, childSeat: e.target.checked }))} className="h-5 w-5 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500" />
                    <span className="text-gray-800">Child / baby seat</span>
                  </label>
                </div>

                <div>
                  <label htmlFor="additionalNotes" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">Additional Notes (Optional)</label>
                  <textarea id="additionalNotes" name="additionalNotes" value={formData.additionalNotes} onChange={handleInputChange} rows={4} className="mt-1 block w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-base resize-y"></textarea>
                </div>

                {submitStatus && (
                  <div className={`mb-4 p-4 sm:p-5 rounded-xl shadow-md ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
                    <p className="text-sm sm:text-base font-medium">{submitStatus.message}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row-reverse justify-end space-y-3 sm:space-y-0 sm:space-x-3 sm:space-x-reverse pt-4 sm:pt-6 border-t border-gray-100 mt-6 sm:mt-8 sticky bottom-0 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 p-4 sm:static sm:bg-transparent sm:p-0">
                  <button type="button" onClick={onClose} className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-xl shadow-sm text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200">Cancel</button>
                  <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-6 py-3 border border-transparent rounded-xl shadow-lg text-base font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105">
                    {isSubmitting ? 'Confirming...' : `Confirm Booking • €${totalPrice.toFixed(2)}`}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {confirmationData && (
        <BookingConfirmationPopup isOpen={showConfirmationPopup} onClose={handleConfirmationClose} bookingId={confirmationData.bookingId} totalPrice={confirmationData.totalPrice} />
      )}
    </div>
  )
}
