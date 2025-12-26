import { Crown, Car, MapPin, CreditCard, Users, Phone, Mail, CheckCircle, Award } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Nassoh Car - Alquiler de Coches Premium Marruecos',
  description: 'Conozca Nassoh Car, su socio de confianza para el alquiler de coches en Marruecos. Vehículos premium, excelente servicio y precios competitivos en Tánger, Tetuán y todo Marruecos.',
  keywords: 'sobre nassoh car, alquiler coches marruecos, empresa alquiler coches tánger, alquiler coches tetuán, alquiler coches premium marruecos, agencia alquiler coches marruecos'
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-amber-400/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Crown className="h-12 w-12 text-amber-400" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Sobre NASSOH CAR
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Alquiler de Coches en Tánger y Tetuán - Su socio de confianza para el alquiler de vehículos premium
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Introduction */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-16 border border-amber-400/20">
            <h2 className="text-3xl font-bold text-amber-400 mb-6">Sobre NASSOH CAR</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              NASSOH CAR es una agencia de alquiler de coches marroquí fiable que ofrece una amplia selección de vehículos para uso personal y profesional.
              Ya sea que visite Tánger por turismo, negocios o viaje familiar, proporcionamos el coche adecuado para cada necesidad,
              con entrega rápida y excelente servicio.
            </p>
          </div>

          {/* Fleet Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <Car className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white mb-4">🚗 Un Vehículo para Cada Necesidad: Desde Compactos hasta 7 Plazas</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Coches Compactos", desc: "Ideal para conducir en ciudad y trayectos diarios", icon: "🚗" },
                { title: "Sedanes Económicos", desc: "Opciones asequibles y eficientes en combustible", icon: "🚙" },
                { title: "SUVs y 4x4s", desc: "Genial para viajes por carretera y largas distancias", icon: "🚐" },
                { title: "Vehículos de 7 Plazas", desc: "Perfecto para familias y viajes en grupo", icon: "🚌" },
                { title: "Coches Premium", desc: "Para uso ejecutivo o experiencias premium", icon: "🏎️" }
              ].map((vehicle, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300">
                  <div className="text-4xl mb-4">{vehicle.icon}</div>
                  <h3 className="text-xl font-bold text-amber-400 mb-3">{vehicle.title}</h3>
                  <p className="text-gray-300">{vehicle.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-amber-400/10 rounded-2xl p-6 mt-8">
              <p className="text-gray-300 text-center">
                Todos nuestros coches están bien mantenidos, con aire acondicionado y asegurados.
              </p>
            </div>
          </div>

          {/* Security Deposit */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-16 border border-amber-400/20">
            <div className="flex items-center mb-6">
              <CreditCard className="h-8 w-8 text-amber-400 mr-4" />
              <h2 className="text-3xl font-bold text-amber-400">💳 Depósito de Seguridad Requerido</h2>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              Se requiere un depósito reembolsable de <span className="text-amber-400 font-bold">5,000 EUR</span> para cada alquiler.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-amber-400/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Opciones de Pago:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-amber-400 mr-2" />En efectivo a la entrega del vehículo</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-amber-400 mr-2" />Bloqueado en una tarjeta de crédito válida (no cobrado, solo retenido temporalmente)</li>
                </ul>
              </div>
              <div className="bg-green-400/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Devolución del Depósito:</h3>
                <p className="text-gray-300">El depósito se devuelve al finalizar el alquiler, siempre que el vehículo se devuelva en buenas condiciones.</p>
              </div>
            </div>
          </div>

          {/* Free Delivery */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <MapPin className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white mb-4">📍 Entrega Gratuita en Ubicaciones Clave</h2>
              <p className="text-lg text-gray-300">Entregamos coches directamente en las ubicaciones más convenientes:</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Aeropuerto de Tánger Ibn Battouta",
                "Puerto Tanger Med",
                "Puerto de Tánger Ville",
                "Estación de Tren de Tánger",
                "Centro de Tetuán"
              ].map((location, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-amber-400/20 text-center">
                  <MapPin className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white">{location}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Traveler Types */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-16 border border-amber-400/20">
            <div className="flex items-center mb-8">
              <Users className="h-8 w-8 text-amber-400 mr-4" />
              <h2 className="text-3xl font-bold text-amber-400">💼 Diseñado para Todo Tipo de Viajeros</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { type: "Turista", desc: "Necesitando un SUV o coche compacto desde el aeropuerto", icon: "🏖️" },
                { type: "Profesional de Negocios", desc: "En viaje de negocios en Tánger", icon: "💼" },
                { type: "Familia", desc: "Necesitando un vehículo espacioso de 7 plazas", icon: "👨‍👩‍👧‍👦" },
                { type: "Alquiler a Largo Plazo", desc: "Buscando un alquiler mensual al mejor precio", icon: "📅" }
              ].map((traveler, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-amber-400/5 rounded-xl">
                  <div className="text-3xl">{traveler.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{traveler.type}</h3>
                    <p className="text-gray-300">{traveler.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg text-amber-400 font-semibold">NASSOH CAR tiene la solución para usted.</p>
              <p className="text-gray-300 mt-2">👉 Vea nuestra flota completa y reserve online en: <span className="text-amber-400">nassohcar.com</span></p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center mb-12">
            <Award className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-8">✅ ¿Por Qué Elegir NASSOH CAR?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Precios asequibles diarios, semanales y mensuales",
              "Seguro incluido en todos los alquileres",
              "Sin tarifas ocultas — contratos claros y transparentes",
              "Soporte en Árabe, Francés e Inglés (y Español)",
              "Reserva rápida vía WhatsApp, teléfono o sitio web"
            ].map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-amber-400/20">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-3xl p-8 md:p-12 mt-16 text-center border border-amber-400/30">
            <h2 className="text-3xl font-bold text-white mb-6">¿Listo para Reservar su Coche Perfecto?</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-amber-400" />
                <span className="text-lg text-gray-300">+212 631-630013</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-amber-400" />
                <span className="text-lg text-gray-300">admin@nassohcar.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
