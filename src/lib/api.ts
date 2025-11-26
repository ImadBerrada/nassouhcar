const API_BASE_URL = '/api'

// API utility functions
export const api = {
  // Authentication
  register: async (userData: { name: string; email: string; phone?: string; password: string }) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
    return response.json()
  },

  login: async (credentials: { email: string; password: string }) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    })
    return response.json()
  },

  // Cars
  getCars: async (filters?: { category?: string; available?: boolean; minPrice?: number; maxPrice?: number }) => {
    const params = new URLSearchParams()
    if (filters?.category) params.append('category', filters.category)
    if (filters?.available !== undefined) params.append('available', filters.available.toString())
    if (filters?.minPrice) params.append('minPrice', filters.minPrice.toString())
    if (filters?.maxPrice) params.append('maxPrice', filters.maxPrice.toString())
    
    const response = await fetch(`${API_BASE_URL}/cars?${params}`)
    return response.json()
  },

  // Bookings
  createBooking: async (bookingData: {
    carId: string;
    startDate: string;
    endDate: string;
    pickupLocation: string;
    dropoffLocation?: string;
    additionalNotes?: string;
  }, token: string) => {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(bookingData)
    })
    return response.json()
  },

  getBookings: async (token: string) => {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.json()
  },

  createGuestBooking: async (bookingData: {
    carId: string;
    startDate: string;
    endDate: string;
    pickupLocation: string;
    dropoffLocation?: string
    additionalNotes?: string;
    guestName: string;
    guestEmail: string;
    guestPhone: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/bookings/guest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })
    return response.json()
  },

  // Contact
  sendContactMessage: async (messageData: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(messageData)
    })
    return response.json()
  },

  updateUser: async (userId: string, userData: { name?: string; email?: string; phone?: string }, token: string) => {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(userData)
    })
    return response.json()
  }
}

// Helper function to get auth token from localStorage
export const getAuthToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token')  // Changed from 'authToken' to 'token'
  }
  return null
}

// Helper function to set auth token
export const setAuthToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token)  // Changed from 'authToken' to 'token'
  }
}

// Helper function to remove auth token
export const removeAuthToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token')  // Changed from 'authToken' to 'token'
  }
}