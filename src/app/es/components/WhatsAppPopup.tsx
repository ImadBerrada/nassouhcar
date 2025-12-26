'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

interface WhatsAppPopupProps {
  phoneNumber: string
  message?: string
  delay?: number // delay in milliseconds before showing popup
}

export default function WhatsAppPopup({ 
  phoneNumber, 
  message = "¡Hola! Estoy interesado en alquilar un coche."
}: WhatsAppPopupProps) {
  const [isVisible] = useState(true) // Always show the button
  const [isExpanded, setIsExpanded] = useState(false) // Track if popup is expanded

  // Remove the auto-show timer since we want manual control
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVisible(true)
  //   }, delay)

  //   return () => clearTimeout(timer)
  // }, [delay])

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsExpanded(false) // Close popup after clicking WhatsApp
  }

  const handleClose = () => {
    setIsExpanded(false) // Close the expanded popup
  }

  const handleTogglePopup = () => {
    setIsExpanded(!isExpanded) // Toggle between small button and full popup
  }

  const handleMinimize = () => {
    setIsExpanded(false) // Minimize the popup back to small button
  }

  if (!isVisible) return null

  return (
    <>
      {/* Small Chat Button (default state) */}
      {!isExpanded && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleTogglePopup}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center space-x-3 animate-heartbeat"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="text-base font-semibold text-white">Chatea con nosotros</span>
          </button>
        </div>
      )}

      {/* Full Popup */}
      {isExpanded && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="bg-green-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-white">Chatea con nosotros en WhatsApp</h3>
                  <p className="text-xs text-green-100">¡Estamos en línea ahora!</p>
                </div>
              </div>
              <div className="flex space-x-1">
                <button
                  onClick={handleMinimize}
                  className="text-white/80 hover:text-white p-1 rounded transition-colors"
                >
                  <div className="w-3 h-0.5 bg-current"></div>
                </button>
                <button
                  onClick={handleClose}
                  className="text-white/80 hover:text-white p-1 rounded transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="mb-4">
                <div className="bg-gray-100 rounded-lg p-3 mb-3">
                  <p className="text-sm text-gray-700">
                    👋 ¡Hola! ¿Necesitas ayuda con el alquiler de coches? ¡Estamos aquí para ayudarte!
                  </p>
                </div>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Iniciar Chat</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
