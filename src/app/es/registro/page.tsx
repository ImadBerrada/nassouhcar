'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { Eye, EyeOff, Mail, Lock, User, Car } from 'lucide-react'
import PhoneInput from '@/app/en/components/PhoneInput'

export default function RegisterPageES() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { register } = useAuth()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, [e.target.name]: e.target.value }); setError('') }
  const validateForm = () => { if (formData.password !== formData.confirmPassword) { setError('Las contraseñas no coinciden'); return false } if (formData.password.length < 6) { setError('La contraseña debe tener al menos 6 caracteres'); return false } return true }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setIsLoading(true); setError('')
    if (!validateForm()) { setIsLoading(false); return }
    try {
      await register({ name: formData.name, email: formData.email, phone: formData.phone, password: formData.password })
      router.push('/es/panel')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error en el registro. Por favor inténtelo de nuevo.')
    } finally { setIsLoading(false) }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center"><div className="bg-blue-600 p-3 rounded-full"><Car className="h-8 w-8 text-white" /></div></div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Crea tu cuenta</h2>
          <p className="mt-2 text-sm text-gray-600">O <Link href="/es/iniciar-sesion" className="font-medium text-blue-600 hover:text-blue-500">inicia sesión en tu cuenta existente</Link></p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            {error && (<div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">{error}</div>)}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><User className="h-5 w-5 text-gray-400" /></div>
                <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" placeholder="Introduce tu nombre completo" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Mail className="h-5 w-5 text-gray-400" /></div>
                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Introduce tu correo" />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Número de Teléfono</label>
              <PhoneInput id="phone" name="phone" value={formData.phone} onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))} placeholder="Introduce tu número de teléfono" required className="w-full" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Lock className="h-5 w-5 text-gray-400" /></div>
                <input id="password" name="password" type={showPassword ? 'text' : 'password'} required value={formData.password} onChange={handleChange} className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" placeholder="Crea una contraseña" />
                <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>{showPassword ? (<EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />) : (<Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />)}</button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">Confirmar Contraseña</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Lock className="h-5 w-5 text-gray-400" /></div>
                <input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} required value={formData.confirmPassword} onChange={handleChange} className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Confirma tu contraseña" />
                <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? (<EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />) : (<Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />)}</button>
              </div>
            </div>

            <div className="flex items-center">
              <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">Acepto los <Link href="/es/terminos" className="text-blue-600 hover:text-blue-500">Términos y Condiciones</Link> y la <Link href="/es/privacidad" className="text-blue-600 hover:text-blue-500">Política de Privacidad</Link></label>
            </div>

            <button type="submit" disabled={isLoading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
              {isLoading ? (<div className="flex items-center"><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>Creando cuenta...</div>) : ('Crear cuenta')}
            </button>
          </div>
        </form>
        <div className="text-center"><p className="text-sm text-gray-600">¿Ya tienes una cuenta? <Link href="/es/iniciar-sesion" className="font-medium text-blue-600 hover:text-blue-500">Inicia sesión aquí</Link></p></div>
      </div>
    </div>
  )
}
