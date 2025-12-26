import { Metadata } from 'next'
import { Shield, Phone, Mail, Eye, Lock, Database, CheckCircle, AlertTriangle, Info, UserCheck, Trash2, Globe, Clock, Users, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Nassoh Car - Protección de Datos',
  description: "Lea la política de privacidad de Nassoh Car para entender cómo recopilamos, usamos y protegemos su información personal. Su privacidad y seguridad de datos son nuestras prioridades.",
  keywords: 'política privacidad nassoh car, protección datos, información personal, derechos privacidad, seguridad datos, privacidad alquiler coches marruecos',
  alternates: { canonical: 'https://www.nassohcar.com/es/privacidad' },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30">
      <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8"><div className="bg-gradient-to-br from-blue-400/20 to-cyan-500/20 p-8 rounded-3xl backdrop-blur-sm border border-blue-400/30 shadow-2xl"><Shield className="h-10 w-10 text-blue-400 mx-auto" /></div></div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight">Política de <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Privacidad</span></h1>
          <div className="mt-12 flex justify-center"><div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/20 rounded-2xl px-8 py-4"><div className="flex items-center justify-center space-x-3 text-blue-300"><Clock className="h-6 w-6" /><span className="font-medium text-lg">Última actualización: 26 de Julio, 2025</span></div></div></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50">
          <div className="flex items-center mb-8"><div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-4 rounded-2xl mr-6 shadow-lg"><Eye className="h-8 w-8 text-white" /></div><h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Nuestro Compromiso</h2></div>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200/50"><p className="text-gray-700 text-lg leading-relaxed">En <span className="font-semibold text-blue-700">Nassoh Car S.A.R.L</span>, valoramos su privacidad y estamos comprometidos a proteger sus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos su información cuando utiliza nuestro sitio web o servicios.</p></div>
        </div>

        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50">
          <div className="flex items-center mb-8"><div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-2xl mr-6 shadow-lg"><Database className="h-8 w-8 text-white" /></div><h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">1. Información que Recopilamos</h2></div>
          <div className="space-y-4">
            {[
              { title: 'Información personal:', content: "Nombre, número de teléfono, dirección de correo electrónico, fecha de nacimiento, licencia de conducir, pasaporte o número de CIN.", color: 'emerald' },
              { title: 'Detalles de la reserva:', content: 'Fechas de alquiler, tipo de coche, lugar de recogida/devolución.', color: 'blue' },
              { title: 'Información de pago:', content: 'IBAN, tarjeta de crédito (para bloqueo de fianza), o registros de transacciones en efectivo.', color: 'amber' },
              { title: 'Datos de ubicación (opcional):', content: 'Si se utiliza seguimiento GPS en el vehículo.', color: 'purple' },
              { title: 'Información del dispositivo y uso:', content: 'Dirección IP, tipo de navegador y páginas visitadas.', color: 'indigo' },
            ].map((item, index) => (
              <div key={index} className={`flex items-start bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 hover:border-${item.color}-300 transition-all duration-300`}>
                <div className={`bg-${item.color}-100 p-2 rounded-lg mr-4 mt-1`}><CheckCircle className={`h-5 w-5 text-${item.color}-600`} /></div>
                <div><span className="font-semibold text-gray-900">{item.title}</span><span className="text-gray-700 ml-1">{item.content}</span></div>
              </div>
            ))}
          </div>
        </div>

        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-green-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50">
          <div className="flex items-center mb-8"><div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-2xl mr-6 shadow-lg"><Users className="h-8 w-8 text-white" /></div><h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">2. Cómo Utilizamos su Información</h2></div>
          <div className="space-y-4">
            {[
              'Confirmar y gestionar sus reservas de alquiler de coches.',
              'Proporcionar servicio al cliente (entrega, recogida, devolución de fianzas).',
              'Cumplir con obligaciones legales (verificación de identidad para las autoridades).',
              'Procesar pagos y gestionar fianzas.',
              'Mejorar nuestros servicios y la funcionalidad del sitio web.',
              'Enviarle confirmaciones de reserva y actualizaciones importantes.',
            ].map((item, index) => (
              <div key={index} className="flex items-start bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 hover:border-green-300 transition-all duration-300"><div className="bg-green-100 p-2 rounded-lg mr-4 mt-1"><CheckCircle className="h-4 w-4 text-green-600" /></div><p className="text-gray-700 leading-relaxed">{item}</p></div>
            ))}
          </div>
        </div>

        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-orange-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50">
          <div className="flex items-center mb-8"><div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-2xl mr-6 shadow-lg"><Globe className="h-8 w-8 text-white" /></div><h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">3. Intercambio de Información</h2></div>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-200/50 mb-6"><p className="text-gray-700 text-lg leading-relaxed">Nosotros <span className="font-semibold text-orange-700">no vendemos, comercializamos ni alquilamos</span> su información personal a terceros.</p></div>
          <div className="space-y-4">
            {[
              'Con las autoridades marroquíes si así lo requiere la ley (infracciones de tráfico, investigaciones legales).',
              'Con proveedores de servicios de confianza que ayudan a operar nuestro negocio (procesadores de pagos).',
              'En caso de transferencia de negocio o fusión (con previo aviso).',
            ].map((item, index) => (
              <div key={index} className="flex items-start bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 hover:border-orange-300 transition-all duration-300"><div className="bg-orange-100 p-2 rounded-lg mr-4 mt-1"><AlertTriangle className="h-4 w-4 text-orange-600" /></div><p className="text-gray-700 leading-relaxed">{item}</p></div>
            ))}
          </div>
        </div>

        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-purple-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50">
          <div className="flex items-center mb-8"><div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-2xl mr-6 shadow-lg"><Lock className="h-8 w-8 text-white" /></div><h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">4. Almacenamiento y Seguridad de Datos</h2></div>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl border border-purple-200/50"><h3 className="text-xl font-semibold text-purple-800 mb-3">Ubicación de Almacenamiento</h3><p className="text-gray-700">Sus datos se almacenan de forma segura en Marruecos y cumplen con las regulaciones locales.</p></div>
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-2xl border border-indigo-200/50"><h3 className="text-xl font-semibold text-indigo-800 mb-3">Medidas de Seguridad</h3><p className="text-gray-700">Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción.</p></div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200/50"><h3 className="text-xl font-semibold text-blue-800 mb-3">Periodo de Retención</h3><p className="text-gray-700">Retenemos sus datos personales solo el tiempo necesario para cumplir con los fines descritos en esta política o según lo requiera la ley.</p></div>
          </div>
        </div>

        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-cyan-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50">
          <div className="flex items-center mb-8"><div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-2xl mr-6 shadow-lg"><UserCheck className="h-8 w-8 text-white" /></div><h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">5. Sus Derechos</h2></div>
          <div className="space-y-4">
            {[
              { title: 'Acceso:', content: 'Solicitar una copia de los datos personales que tenemos sobre usted.', icon: Eye },
              { title: 'Corrección:', content: 'Solicitar la corrección de datos inexactos o incompletos.', icon: FileText },
              { title: 'Eliminación:', content: 'Solicitar la eliminación de sus datos personales (sujeto a obligaciones legales).', icon: Trash2 },
              { title: 'Portabilidad:', content: 'Solicitar la transferencia de sus datos a otro proveedor.', icon: Globe },
              { title: 'Objeción:', content: 'Oponerse al procesamiento en ciertas circunstancias.', icon: Shield },
            ].map((item, index) => {
              const IconComponent = item.icon as any
              return (
                <div key={index} className="flex items-start bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 hover:border-cyan-300 transition-all duration-300"><div className="bg-cyan-100 p-3 rounded-lg mr-4 mt-1"><IconComponent className="h-5 w-5 text-cyan-600" /></div><div><span className="font-semibold text-gray-900 text-lg">{item.title}</span><p className="text-gray-700 leading-relaxed mt-1">{item.content}</p></div></div>
              )
            })}
          </div>
        </div>

        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-amber-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50">
          <div className="flex items-center mb-8"><div className="bg-gradient-to-br from-amber-500 to-orange-600 p-4 rounded-2xl mr-6 shadow-lg"><Globe className="h-8 w-8 text-white" /></div><h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">6. Cookies y Rastreo</h2></div>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200/50"><p className="text-gray-700 text-lg leading-relaxed">Nuestro sitio web puede utilizar cookies para mejorar su experiencia de navegación. Puede controlar la configuración de cookies a través de las preferencias de su navegador.</p></div>
        </div>

        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-indigo-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50">
          <div className="flex items-center mb-8"><div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl mr-6 shadow-lg"><Globe className="h-8 w-8 text-white" /></div><h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">7. Transferencias Internacionales de Datos</h2></div>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-200/50"><p className="text-gray-700 text-lg leading-relaxed">Sus datos personales se procesan principalmente en Marruecos. Si necesitamos transferir datos internacionalmente, aseguramos que existan las salvaguardias adecuadas.</p></div>
        </div>

        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-rose-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50">
          <div className="flex items-center mb-8"><div className="bg-gradient-to-br from-rose-500 to-pink-600 p-4 rounded-2xl mr-6 shadow-lg"><Info className="h-8 w-8 text-white" /></div><h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">8. Cambios en esta Política</h2></div>
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-2xl border border-rose-200/50"><p className="text-gray-700 text-lg leading-relaxed">Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos de cambios significativos publicando la nueva política en nuestro sitio web con una fecha de vigencia actualizada.</p></div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-3xl p-12 mt-16 shadow-2xl border border-blue-300/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
          <div className="relative">
            <h3 className="text-4xl font-bold text-white mb-8 text-center">¿Preguntas sobre Privacidad?</h3>
            <p className="text-blue-100 text-center mb-8 text-lg max-w-2xl mx-auto">Si tiene alguna pregunta sobre esta Política de Privacidad o cómo manejamos sus datos, contáctenos</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <div className="group flex items-center bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30"><div className="bg-white/20 p-3 rounded-xl mr-4"><Phone className="h-7 w-7 text-white" /></div><span className="text-xl font-semibold text-white">+212 631-630013</span></div>
              <div className="group flex items-center bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30"><div className="bg-white/20 p-3 rounded-xl mr-4"><Mail className="h-7 w-7 text-white" /></div><span className="text-xl font-semibold text-white">contact@nassohcar.com</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
