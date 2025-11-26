'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Car } from 'lucide-react'
import { api, getAuthToken } from '@/lib/api'
import { useAuth } from '@/contexts/AuthContext'
import { useBooking } from '@/contexts/BookingContext'
import BookingConfirmationPopup from './BookingConfirmationPopup'

interface BookingFormProps {
  selectedCar?: {
    id: string
    name: string
    pricePerDay: number
  }
}

export default function BookingForm({ selectedCar }: BookingFormProps) {
  const { user } = useAuth()
  const { bookingData } = useBooking()
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    startDate: '',
    endDate: '',
    additionalNotes: ''
  })

  // Pre-fill form with saved booking data
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!user) {
      setSubmitStatus({ type: 'error', message: 'Veuillez vous connecter pour effectuer une réservation.' })
      return
    }

    if (!selectedCar) {
      setSubmitStatus({ type: 'error', message: 'Veuillez d\'abord sélectionner une voiture.' })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const token = getAuthToken()
      if (!token) {
        setSubmitStatus({ type: 'error', message: 'Authentification requise. Veuillez vous reconnecter.' })
        return
      }

      const bookingData = {
        carId: selectedCar.id,
        startDate: formData.startDate,
        endDate: formData.endDate,
        pickupLocation: formData.pickupLocation,
        dropoffLocation: formData.dropoffLocation || formData.pickupLocation,
        additionalNotes: formData.additionalNotes
      }

      const response = await api.createBooking(bookingData, token)
      
      if (response.error) {
        setSubmitStatus({ type: 'error', message: response.error })
      } else {
        // Show confirmation popup
        setConfirmationData({
          bookingId: response.id,
          totalPrice: response.totalPrice
        })
        setShowConfirmationPopup(true)
        setSubmitStatus(null)
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Échec de la réservation. Veuillez réessayer.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleConfirmationClose = () => {
    setShowConfirmationPopup(false)
    setConfirmationData(null)
    // Reset form after successful booking
    setFormData({
      pickupLocation: '',
      dropoffLocation: '',
      startDate: '',
      endDate: '',
      additionalNotes: ''
    })
  }

  return (
    <div className="bg-white/10 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8">
      {selectedCar && (
        <div className="mb-6 p-4 bg-amber-400/20 rounded-xl">
          <div className="flex items-center text-white">
            <Car className="h-5 w-5 mr-2" />
            <span className="font-semibold">{selectedCar.name}</span>
            <span className="ml-auto">{selectedCar.pricePerDay.toFixed(2)} EUR/jour</span>
          </div>
        </div>
      )}
      
      {submitStatus && (
        <div className={`mb-6 p-4 rounded-xl ${
          submitStatus.type === 'success' 
            ? 'bg-green-500/20 text-green-100 border border-green-400/30' 
            : 'bg-red-500/20 text-red-100 border border-red-400/30'
        }`}>
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
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
                value={formData.pickupLocation}
                onChange={handleInputChange}
                required
                className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-gray-900 focus:outline-none focus:border-amber-400 appearance-none text-sm lg:text-base min-h-[44px]"
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
            <label className="block text-white font-medium mb-2 text-sm lg:text-base">
              Date de Début *
            </label>
            <input 
              type="date" 
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              required
              lang="fr"
              placeholder="dd/mm/yyyy"
              min={new Date().toISOString().split('T')[0]}
              className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-gray-900 focus:outline-none focus:border-amber-400 text-sm lg:text-base min-h-[44px]"
            />
          </div>
          
          {/* End Date */}
          <div>
            <label className="block text-white font-medium mb-2 text-sm lg:text-base">
              Date de Fin *
            </label>
            <input 
              type="date" 
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              required
              lang="fr"
              placeholder="dd/mm/yyyy"
              min={formData.startDate || new Date().toISOString().split('T')[0]}
              className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-gray-900 focus:outline-none focus:border-amber-400 text-sm lg:text-base min-h-[44px]"
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
                value={formData.dropoffLocation}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-gray-900 focus:outline-none focus:border-amber-400 appearance-none text-sm lg:text-base min-h-[44px]"
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
        <div className="flex justify-center lg:justify-end mb-6">
          <button 
            type="submit"
            disabled={isSubmitting || !user}
            className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-3 px-8 lg:px-12 rounded-xl hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base min-w-[200px]"
          >
            {isSubmitting ? 'RÉSERVATION...' : 'RÉSERVER UNE VOITURE'}
          </button>
        </div>
        
        {/* Additional Fields */}
        {user && (
          <div>
            <label className="block text-white font-medium mb-2">Notes Supplémentaires</label>
            <textarea 
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleInputChange}
              rows={3}
              className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-amber-400 resize-none"
              placeholder="Demandes spéciales ou notes..."
            />
          </div>
        )}
        
        {!user && (
          <div className="text-center text-amber-200 mt-4">
            <p>Veuillez <a href="/login" className="text-amber-400 hover:underline">vous connecter</a> ou <a href="/register" className="text-amber-400 hover:underline">vous inscrire</a> pour finaliser votre réservation.</p>
          </div>
        )}
      </form>
      
      {/* Confirmation Popup */}
      {confirmationData && (
        <BookingConfirmationPopup
          isOpen={showConfirmationPopup}
          onClose={handleConfirmationClose}
          bookingId={confirmationData.bookingId}
          totalPrice={confirmationData.totalPrice}
        />
      )}
    </div>
  )
}