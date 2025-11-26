'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Car, Shield, Star, CheckCircle, Globe, X } from 'lucide-react'
import { api } from '@/lib/api'
import PhoneInput from '@/components/PhoneInput'
import StructuredData from '@/components/StructuredData'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await api.sendContactMessage(formData)
      
      if (response.error) {
        setSubmitStatus({ type: 'error', message: response.error })
      } else {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you within 2 hours.' })
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Appelez-nous 24/7",
      description: "Parlez directement avec nos experts location Tanger",
      contact: "+212 631-630013",
      action: "tel:+212631630013",
      available: "Support 24/7",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Support Email",
      description: "Réponse détaillée sous 2 heures",
      contact: "contact@nassohcar.com",
      action: "mailto:contact@nassohcar.com",
      available: "Réponse en 2h",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "Chat WhatsApp",
      description: "Messagerie instantanée pour questions rapides",
      contact: "+212 631-630013",
      action: "https://wa.me/212631630013",
      available: "Réponse Immédiate",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Visitez Notre Bureau",
      description: "Rencontrez-nous en personne à Tanger",
      contact: "Tanger, Maroc",
      action: "#location",
      available: "Lun-Dim 8h-22h",
      color: "from-purple-400 to-purple-600"
    }
  ]

  const officeLocations = [
    {
      city: "Tanger Centre-Ville",
      address: "127 Av. Hafid Ibn Abdelbar, Tanger 90100, Maroc",
      phone: "+212 631-630013",
      email: "contact@nassohcar.com",
      hours: "Disponible 24/7",
      services: ["Récupération Voiture", "Transfert Aéroport", "Livraison Ville", "Support 24/7"]
    },
    {
      city: "Aéroport Tanger Ibn Battouta",
      address: "Aéroport Ibn Battouta, Tanger, Maroc",
      phone: "+212 631-630013",
      email: "contact@nassohcar.com",
      hours: "Disponible 24/7",
      services: ["Récupération Aéroport", "Check-in Rapide", "Service Express", "Salon VIP"]
    },
    {
      city: "Port Tanger Med",
      address: "Port Tanger Med, Tanger, Maroc",
      phone: "+212 631-630013",
      email: "contact@nassohcar.com",
      hours: "Disponible 24/7",
      services: ["Récupération Port", "Coordination Ferry", "Support Douanes", "Traitement Express"]
    }
  ];

  const faqs = [
    {
      question: "Combien de temps pour obtenir une voiture ?",
      answer: "Nous offrons une réservation instantanée avec des voitures disponibles sous 30 minutes dans le centre-ville de Tanger, et 1 heure pour les récupérations aéroport/port."
    },
    {
      question: "Proposez-vous un support 24/7 ?",
      answer: "Oui ! Notre équipe de support client est disponible 24/7 par téléphone, WhatsApp et email pour vous aider avec toutes questions ou urgences."
    },
    {
      question: "Quels documents ai-je besoin ?",
      answer: "Vous avez besoin d'un permis de conduire valide, passeport et carte de crédit. Les permis de conduire internationaux sont acceptés pour les visiteurs étrangers."
    },
    {
      question: "Pouvez-vous livrer la voiture à mon emplacement ?",
      answer: "Absolument ! Nous offrons une livraison gratuite dans la ville de Tanger, aéroport et port. Autres emplacements disponibles avec frais de livraison minimaux."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-yellow-400/30 to-amber-500/30 p-6 rounded-3xl backdrop-blur-sm border border-yellow-400/40 shadow-2xl">
              <Phone className="h-8 w-8 text-yellow-400 drop-shadow-lg" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            Contactez 
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">
              {" "}Nassoh Car
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Contactez le Service de Location de Voiture Économique du Maroc à Tanger
          </p>
          <div className="flex items-center justify-center space-x-8 text-yellow-400">
            <div className="flex items-center space-x-2">
              <Clock className="h-6 w-6" />
              <span className="text-xl font-bold">Support 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6" />
              <span className="text-xl font-bold">Réponse Immédiate</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 fill-current" />
              <span className="text-xl font-bold">Service 5 Étoiles</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <a
                key={index}
                href={method.action}
                className="group block bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${method.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                  <div className="relative">
                    <IconComponent className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-white/90 text-sm">{method.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-bold text-slate-800 text-lg mb-2">{method.contact}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">{method.available}</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-200">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Send Us a Message</h2>
              <p className="text-slate-600 text-lg">Get a personalized response within 2 hours</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Message */}
              {submitStatus && (
                <div className={`p-4 rounded-xl border-2 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border-green-200 text-green-800' 
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}>
                  <div className="flex items-center space-x-2">
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <X className="h-5 w-5" />
                    )}
                    <span className="font-medium">{submitStatus.message}</span>
                  </div>
                </div>
              )}
            
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 text-gray-900"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 text-gray-900"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Numéro de téléphone</label>
                <PhoneInput
                  name="phone"
                  value={formData.phone}
                  onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
                  placeholder="Entrez votre numéro de téléphone"
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 text-gray-900"
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Car Booking Inquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="pricing">Pricing Information</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 resize-none text-gray-900"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-6 w-6" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Quick Info & Map */}
          <div className="space-y-8">
            {/* Quick Contact Info */}
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl shadow-2xl p-8 text-black">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Car className="h-8 w-8 mr-3" />
                Quick Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-black/20 p-3 rounded-xl">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold">24/7 Hotline</p>
                    <p className="text-black/80">+212 631-630013</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-black/20 p-3 rounded-xl">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold">Email Support</p>
                    <p className="text-black/80">contact@nassohcar.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-black/20 p-3 rounded-xl">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold">Response Time</p>
                    <p className="text-black/80">Within 2 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-black/20 p-3 rounded-xl">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold">Languages</p>
                    <p className="text-black/80">Arabic, French, English</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 text-white">
                <h3 className="text-xl font-bold flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-yellow-400" />
                  Our Locations
                </h3>
              </div>
              <div className="p-6">
                <div className="rounded-xl h-64 overflow-hidden mb-6">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.2775851845356!2d-5.8134612!3d35.7698499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf28576c3%3A0x76ef9e82a6f8e3d9!2s127%20Av.%20Hafid%20Ibn%20Abdelbar%2C%20Tanger%2090100%2C%20Morocco!5e0!3m2!1sen!2sus!4v1698765432109!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-slate-800">City Center</p>
                      <p className="text-sm text-slate-600">Main Office & Showroom</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-slate-800">Airport</p>
                      <p className="text-sm text-slate-600">Ibn Battouta Airport</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-slate-800">Port</p>
                      <p className="text-sm text-slate-600">Tangier Med Port</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Office Locations</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Visit us at any of our convenient locations across Tangier
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 overflow-hidden">
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <MapPin className="h-6 w-6 mr-3 text-yellow-400" />
                    {location.city}
                  </h3>
                  <p className="text-slate-300 text-sm">{location.address}</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-yellow-500" />
                      <span className="text-slate-700">{location.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-yellow-500" />
                      <span className="text-slate-700">{location.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-yellow-500" />
                      <span className="text-slate-700">{location.hours}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-800 mb-3">Services Available:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {location.services.map((service, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-slate-600">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-200">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6 border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold text-slate-800 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 text-white">
            <Phone className="h-8 w-8 animate-pulse" />
            <div>
              <h3 className="text-2xl font-bold">Emergency 24/7 Support</h3>
              <p className="text-red-100">For urgent assistance, call us immediately at <span className="font-bold">+212 631-630013</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <StructuredData type="LocalBusiness" countryTarget="MA" language="fr" />
    </div>
  );
}