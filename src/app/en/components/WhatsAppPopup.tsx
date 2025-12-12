"use client"

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

interface WhatsAppPopupProps {
  phoneNumber?: string
  message?: string
}

export default function WhatsAppPopup({ phoneNumber = '212631630013', message = "Hello! I'm interested in renting a car from NassohCar. Can you help me?" }: WhatsAppPopupProps) {
  const [isVisible] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message || '')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsExpanded(false)
  }

  const handleClose = () => {
    setIsExpanded(false)
  }

  const handleTogglePopup = () => {
    setIsExpanded(!isExpanded)
  }

  const handleMinimize = () => {
    setIsExpanded(false)
  }

  if (!isVisible) return null

  return (
    <>
      {!isExpanded && (
        <div className="fixed bottom-6 right-6 z-50">
          <button onClick={handleTogglePopup} className="bg-green-700 hover:bg-green-800 text-white px-6 py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center space-x-3 animate-heartbeat">
            <MessageCircle className="h-6 w-6" />
            <span className="text-base font-semibold text-white">Chat with us</span>
          </button>
        </div>
      )}

      {isExpanded && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-up">
            <div className="bg-green-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-white">Chat with us on WhatsApp</h3>
                  <p className="text-xs text-green-100">We are online now!</p>
                </div>
              </div>
              <div className="flex space-x-1">
                <button onClick={handleMinimize} className="text-white/80 hover:text-white p-1 rounded transition-colors">
                  <div className="w-3 h-0.5 bg-current"></div>
                </button>
                <button onClick={handleClose} className="text-white/80 hover:text-white p-1 rounded transition-colors">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="bg-gray-100 rounded-lg p-3 mb-3">
                  <p className="text-sm text-gray-700">👋 Hi! Need help with car rental? We're here to assist!</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm text-gray-700">Get instant quotes, check availability, or ask any questions about our vehicles.</p>
                </div>
              </div>

              <button onClick={handleWhatsAppClick} className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                <MessageCircle className="h-5 w-5" />
                <span>Start WhatsApp Chat</span>
              </button>

              <p className="text-xs text-gray-500 text-center mt-2">Click to open WhatsApp and start chatting</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes heartbeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.1); }
          28% { transform: scale(1); }
          42% { transform: scale(1.1); }
          70% { transform: scale(1); }
        }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
        .animate-heartbeat { animation: heartbeat 2s ease-in-out infinite; }
      `}</style>
    </>
  )
}
