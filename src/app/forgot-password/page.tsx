'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  
  // const router = useRouter() // Removed - not used in this component

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setError('') // Clear error when user types
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to send reset email')
      }

      setIsSuccess(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to send reset email. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Check Your Email
              </h2>
              <p className="text-gray-600">
                We&apos;ve sent a password reset link to <strong>{email}</strong>
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                Didn&apos;t receive the email? Check your spam folder or try again.
              </p>
              
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setIsSuccess(false)
                    setEmail('')
                  }}
                  className="w-full py-3 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium transition-colors"
                >
                  Try Different Email
                </button>
                
                <Link 
                  href="/login"
                  className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors text-center block"
                >
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link 
            href="/login"
            className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Login
          </Link>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Forgot Password?
          </h2>
          <p className="text-gray-600">
            No worries! Enter your email address and we&apos;ll send you a link to reset your password.
          </p>
        </div>

        {/* Forgot Password Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !email.trim()}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending Reset Link...
                </div>
              ) : (
                'Send Reset Link'
              )}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Remember your password?{' '}
            <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in here
            </Link>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
              Create one here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}