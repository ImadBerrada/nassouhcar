'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Car, Shield, Star, CheckCircle, Globe, X } from 'lucide-react'
import { api } from '@/lib/api'
import PhoneInput from '@/app/es/components/PhoneInput'
import StructuredData from '@/app/es/components/StructuredData'

export default function ContactoPageES() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: value })) }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setIsSubmitting(true); setSubmitStatus(null)
    try {
      const response = await api.sendContactMessage(formData)
      if (response.error) { setSubmitStatus({ type: 'error', message: response.error }) }
      else { setSubmitStatus({ type: 'success', message: '¡Mensaje enviado con éxito! Te responderemos en menos de 2 horas.' }); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }) }
    } catch { setSubmitStatus({ type: 'error', message: 'Error al enviar el mensaje. Inténtalo de nuevo.' }) } finally { setIsSubmitting(false) }
  }

  const contactMethods = [
    { icon: Phone, title: 'Llámanos 24/7', description: 'Habla con nuestros expertos en Tánger', contact: '+212 631-630013', action: 'tel:+212631630013', available: 'Soporte 24/7', color: 'from-green-400 to-emerald-500' },
    { icon: Mail, title: 'Soporte por Email', description: 'Respuesta detallada en menos de 2 horas', contact: 'contact@nassohcar.com', action: 'mailto:contact@nassohcar.com', available: 'Respuesta en 2h', color: 'from-blue-400 to-cyan-500' },
    { icon: MessageCircle, title: 'Chat por WhatsApp', description: 'Mensajería instantánea para preguntas rápidas', contact: '+212 631-630013', action: 'https://wa.me/212631630013', available: 'Respuesta inmediata', color: 'from-green-500 to-green-600' },
    { icon: MapPin, title: 'Visita nuestra oficina', description: 'Encuéntranos en Tánger', contact: 'Tánger, Marruecos', action: '#location', available: 'Lun–Dom 8am–10pm', color: 'from-purple-400 to-purple-600' }
  ]

  const officeLocations = [
    { city: 'Centro de Tánger', address: '127 Av. Hafid Ibn Abdelbar, Tánger 90100, Marruecos', phone: '+212 631-630013', email: 'contact@nassohcar.com', hours: 'Disponible 24/7', services: ['Recogida de vehículos', 'Transfer aeropuerto', 'Entrega en la ciudad', 'Soporte 24/7'] },
    { city: 'Aeropuerto de Tánger Ibn Battouta', address: 'Aeropuerto Ibn Battouta, Tánger, Marruecos', phone: '+212 631-630013', email: 'contact@nassohcar.com', hours: 'Disponible 24/7', services: ['Recogida en aeropuerto', 'Check‑in exprés', 'Servicio exprés', 'Sala VIP'] },
    { city: 'Puerto Tanger Med', address: 'Puerto Tanger Med, Tánger, Marruecos', phone: '+212 631-630013', email: 'contact@nassohcar.com', hours: 'Disponible 24/7', services: ['Recogida en puerto', 'Coordinación ferry', 'Soporte aduanas', 'Procesamiento exprés'] }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8"><div className="bg-gradient-to-r from-yellow-400/30 to-amber-500/30 p-6 rounded-3xl backdrop-blur-sm border border-yellow-400/40 shadow-2xl"><Phone className="h-8 w-8 text-yellow-400 drop-shadow-lg" /></div></div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">Contacto<span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl"> Nassoh Car</span></h1>
          <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">Contacto de alquiler de coches económicos en Tánger</p>
          <div className="flex items-center justify-center space-x-8 text-yellow-400"><div className="flex items-center space-x-2"><Clock className="h-6 w-6" /><span className="text-xl font-bold">Soporte 24/7</span></div><div className="flex items-center space-x-2"><Shield className="h-6 w-6" /><span className="text-xl font-bold">Respuesta inmediata</span></div><div className="flex items-center space-x-2"><Star className="h-6 w-6 fill-current" /><span className="text-xl font-bold">Servicio 5‑estrellas</span></div></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactMethods.map((method, index) => { const IconComponent = method.icon; return (
            <a key={index} href={method.action} className="group block bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 overflow-hidden">
              <div className={`bg-gradient-to-r ${method.color} p-8 text-white relative overflow-hidden`}><div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-xl"></div><div className="relative"><IconComponent className="h-12 w-12 mb-4" /><h3 className="text-xl font-bold mb-2">{method.title}</h3><p className="text-white/90 text-sm">{method.description}</p></div></div>
              <div className="p-6"><p className="font-bold text-slate-800 text-lg mb-2">{method.contact}</p><div className="flex items-center justify-between"><span className="text-sm text-slate-600">{method.available}</span><div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div></div></div>
            </a>) })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-200">
            <div className="text-center mb-8"><div className="bg-gradient-to-r from-yellow-400 to-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"><Send className="h-8 w-8 text-black" /></div><h2 className="text-3xl font-bold text-slate-800 mb-4">Envíanos un mensaje</h2><p className="text-slate-600 text-lg">Recibe una respuesta personalizada en menos de 2 horas</p></div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus && (<div className={`p-4 rounded-xl border-2 ${submitStatus.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}><div className="flex items-center space-x-2">{submitStatus.type === 'success' ? (<CheckCircle className="h-5 w-5" />) : (<X className="h-5 w-5" />)}<span className="font-medium">{submitStatus.message}</span></div></div>)}
              <div><label className="block text-sm font-bold text-slate-700 mb-2">Nombre completo *</label><input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 text-gray-900" placeholder="Tu nombre completo" /></div>
              <div><label className="block text-sm font-bold text-slate-700 mb-2">Correo electrónico *</label><input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 text-gray-900" placeholder="tu.email@ejemplo.com" /></div>
              <div><label className="block text-sm font-bold text-slate-700 mb-2">Número de teléfono</label><PhoneInput name="phone" value={formData.phone} onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))} placeholder="Introduce tu número de teléfono" className="w-full" /></div>
              <div><label className="block text-sm font-bold text-slate-700 mb-2">Asunto *</label><select name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 text-gray-900"><option value="">Selecciona un asunto</option><option value="booking">Consulta de reserva</option><option value="support">Soporte al cliente</option><option value="pricing">Información de precios</option><option value="partnership">Colaboración empresarial</option><option value="feedback">Comentarios y sugerencias</option><option value="other">Otro</option></select></div>
              <div><label className="block text-sm font-bold text-slate-700 mb-2">Mensaje *</label><textarea name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 resize-none text-gray-900" placeholder="Cuéntanos cómo podemos ayudarte..."></textarea></div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">{isSubmitting ? (<><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div><span>Enviando...</span></>) : (<><Send className="h-6 w-6" /><span>Enviar mensaje</span></>)}</button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl shadow-2xl p-8 text-black"><h3 className="text-2xl font-bold mb-6 flex items-center"><Car className="h-8 w-8 mr-3" />Contacto rápido</h3><div className="space-y-4"><div className="flex items-center space-x-4"><div className="bg-black/20 p-3 rounded-xl"><Phone className="h-6 w-6" /></div><div><p className="font-bold">Línea 24/7</p><p className="text-black/80">+212 631-630013</p></div></div><div className="flex items-center space-x-4"><div className="bg-black/20 p-3 rounded-xl"><Mail className="h-6 w-6" /></div><div><p className="font-bold">Soporte por Email</p><p className="text-black/80">contact@nassohcar.com</p></div></div><div className="flex items-center space-x-4"><div className="bg-black/20 p-3 rounded-xl"><Clock className="h-6 w-6" /></div><div><p className="font-bold">Tiempo de respuesta</p><p className="text-black/80">Menos de 2 horas</p></div></div><div className="flex items-center space-x-4"><div className="bg-black/20 p-3 rounded-xl"><Globe className="h-6 w-6" /></div><div><p className="font-bold">Idiomas</p><p className="text-black/80">Árabe, Francés, Inglés</p></div></div></div></div>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"><div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 text-white"><h3 className="text-xl font-bold flex items-center"><MapPin className="h-6 w-6 mr-3 text-yellow-400" />Nuestras ubicaciones</h3></div><div className="p-6"><div className="rounded-xl h-64 overflow-hidden mb-6"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.2775851845356!2d-5.8134612!3d35.7698499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf28576c3%3A0x76ef9e82a6f8e3d9!2s127%20Av.%20Hafid%20Ibn%20Abdelbar%2C%20Tanger%2090100%2C%20Morocco!5e0!3m2!1sen!2sus!4v1698765432109!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div><div className="grid grid-cols-1 gap-4"><div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg"><div className="w-3 h-3 bg-green-500 rounded-full"></div><div><p className="font-semibold text-slate-800">Centro</p><p className="text-sm text-slate-600">Oficina principal y showroom</p></div></div><div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg"><div className="w-3 h-3 bg-blue-500 rounded-full"></div><div><p className="font-semibold text-slate-800">Aeropuerto</p><p className="text-sm text-slate-600">Aeropuerto Ibn Battouta</p></div></div><div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg"><div className="w-3 h-3 bg-purple-500 rounded-full"></div><div><p className="font-semibold text-slate-800">Puerto</p><p className="text-sm text-slate-600">Puerto Tanger Med</p></div></div></div></div></div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-600 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-4 text-white"><Phone className="h-8 w-8 animate-pulse" /><div><h3 className="text-2xl font-bold">Soporte de emergencia 24/7</h3><p className="text-red-100">Para asistencia urgente, llámanos al <span className="font-bold">+212 631-630013</span></p></div></div>
          </div>
        </div>

        <StructuredData type="LocalBusiness" countryTarget="MA" language="es" />
      </div>
    </div>
  )
}
