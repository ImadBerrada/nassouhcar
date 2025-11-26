'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface BookingData {
  pickupLocation: string
  dropoffLocation: string
  startDate: string
  endDate: string
}

interface BookingContextType {
  bookingData: BookingData
  updateBookingData: (data: Partial<BookingData>) => void
  clearBookingData: () => void
  hasBookingData: boolean
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

const STORAGE_KEY = 'nassohcar_booking_data'

const initialBookingData: BookingData = {
  pickupLocation: '',
  dropoffLocation: '',
  startDate: '',
  endDate: ''
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingData, setBookingData] = useState<BookingData>(initialBookingData)

  // Load data from sessionStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = sessionStorage.getItem(STORAGE_KEY)
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData)
          setBookingData(parsedData)
        } catch (error) {
          console.error('Error parsing saved booking data:', error)
        }
      }
    }
  }, [])

  // Save data to sessionStorage whenever bookingData changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(bookingData))
    }
  }, [bookingData])

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...data }))
  }

  const clearBookingData = () => {
    setBookingData(initialBookingData)
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(STORAGE_KEY)
    }
  }

  const hasBookingData = Boolean(
    bookingData.pickupLocation || 
    bookingData.startDate || 
    bookingData.endDate
  )

  return (
    <BookingContext.Provider value={{
      bookingData,
      updateBookingData,
      clearBookingData,
      hasBookingData
    }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}