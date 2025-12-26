'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, X, Mail, AlertTriangle } from 'lucide-react'

interface BookingConfirmationPopupProps {
  isOpen: boolean
  onClose: () => void
  bookingId: string
  totalPrice: number
}

export default function BookingConfirmationPopup({ 
  isOpen, 
  onClose, 
  bookingId, 
  totalPrice 
}: BookingConfirmationPopupProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 300) // Wait for animation to complete
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-2 sm:p-4">
      <div 
        className={`bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-sm sm:max-w-md w-full mx-2 sm:mx-4 max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 rounded-t-2xl sm:rounded-t-3xl p-4 sm:p-6 text-center">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="bg-white/20 rounded-full p-2 sm:p-3">
              <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
            Reservation Confirmed!
          </h2>
          
          <p className="text-green-100 text-sm sm:text-base">
            Booking ID: #{bookingId}
          </p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
          {/* Success Message */}
          <div className="text-center">
            <p className="text-gray-700 text-sm sm:text-base mb-2">
              Your reservation has been successfully confirmed!
            </p>
            <p className="text-xl sm:text-2xl font-bold text-gray-900">
              Total: €{totalPrice}
            </p>
          </div>

          {/* Email Notification */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl sm:rounded-2xl p-3 sm:p-4">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <div className="bg-blue-100 rounded-full p-1.5 sm:p-2 flex-shrink-0">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-blue-900 mb-1 text-sm sm:text-base">
                  Check Your Email
                </h3>
                <p className="text-blue-700 text-xs sm:text-sm">
                  You will receive a confirmation email with all the details of your reservation.
                </p>
              </div>
            </div>
          </div>

          {/* Spam Warning */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl sm:rounded-2xl p-3 sm:p-4">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <div className="bg-amber-100 rounded-full p-1.5 sm:p-2 flex-shrink-0">
                <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-amber-900 mb-1 text-sm sm:text-base">
                  Important Notice
                </h3>
                <p className="text-amber-700 text-xs sm:text-sm">
                  Please check your <strong>spam/junk folder</strong> if you don&apos;t receive the email within a few minutes.
                </p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center pt-2 sm:pt-3">
            <button
              onClick={handleClose}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}