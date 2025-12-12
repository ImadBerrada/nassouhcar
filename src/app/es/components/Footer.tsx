import { Phone, Mail, Facebook } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-amber-400/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-2 xl:col-span-2">
            <div className="bg-gradient-to-br from-amber-400/10 to-amber-400/5 rounded-2xl p-6 border border-amber-400/20">
              <h3 className="text-2xl font-bold mb-6 text-amber-400 tracking-wide flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-yellow-500 rounded-full mr-3"></div>
                Soporte al Cliente
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <div className="p-3 bg-amber-400/20 rounded-xl group-hover:bg-amber-400/30 transition-all duration-300 group-hover:scale-110">
                    <Phone className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-gray-300 text-lg font-medium">+212 631-630013</span>
                    <p className="text-gray-400 text-sm">Disponible 24/7</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="p-3 bg-amber-400/20 rounded-xl group-hover:bg-amber-400/30 transition-all duration-300 group-hover:scale-110">
                    <Mail className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-gray-300 text-lg font-medium">contact@nassohcar.com</span>
                    <p className="text-gray-400 text-sm">Respuesta rápida</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-amber-400 tracking-wide relative">
              Servicios
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/es/coches-economicos" className="text-gray-300 hover:text-amber-400 transition-all duration-300 text-base hover:translate-x-2 block group">
                  <span className="group-hover:text-white">Coches Económicos</span>
                </a>
              </li>
              <li>
                <a href="/es/alquiler-aeropuerto" className="text-gray-300 hover:text-amber-400 transition-all duration-300 text-base hover:translate-x-2 block group">
                  <span className="group-hover:text-white">Alquiler en Aeropuerto</span>
                </a>
              </li>
              <li>
                <a href="/es/flota" className="text-gray-300 hover:text-amber-400 transition-all duration-300 text-base hover:translate-x-2 block group">
                  <span className="group-hover:text-white">Nuestra Flota</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="xl:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-amber-400 tracking-wide relative">
              Internacional
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/es/alquiler-francia" className="text-gray-300 hover:text-amber-400 transition-all duration-300 text-base hover:translate-x-2 block group">
                  <span className="group-hover:text-white">Francia</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="xl:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-amber-400 tracking-wide relative">
              Blog
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/es/blog" className="text-gray-300 hover:text-amber-400 transition-all duration-300 text-base hover:translate-x-2 block group">
                  <span className="group-hover:text-white">Todos los Artículos</span>
                </Link>
              </li>
              <li>
                <Link href="/es/blog/alquiler-economico-tanger" className="text-gray-300 hover:text-amber-400 transition-all duration-300 text-base hover:translate-x-2 block group">
                  <span className="group-hover:text-white">Alquiler Económico</span>
                </Link>
              </li>
              <li>
                <Link href="/es/blog/alquiler-aeropuerto-tanger" className="text-gray-300 hover:text-amber-400 transition-all duration-300 text-base hover:translate-x-2 block group">
                  <span className="group-hover:text-white">Alquiler en Aeropuerto</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="xl:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-amber-400 tracking-wide relative">
              Empresa
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/es/sobre-nosotros" className="text-gray-300 hover:text-amber-400 transition-all duration-300 text-base hover:translate-x-2 block group">
                  <span className="group-hover:text-white">Sobre Nosotros</span>
                </a>
              </li>
              <li>
                <a href="/es/preguntas-frecuentes" className="text-gray-300 hover:text-amber-400 transition-all duration-300 text-base hover:translate-x-2 block group">
                  <span className="group-hover:text-white">FAQ</span>
                </a>
              </li>
              <li>
                <a href="/es/privacidad" className="text-gray-300 hover:text-amber-400 transition-all duration-300 text-base hover:translate-x-2 block group">
                  <span className="group-hover:text-white">Privacidad</span>
                </a>
              </li>
              <li>
                <a href="/es/terminos" className="text-gray-300 hover:text-amber-400 transition-all duration-300 text-base hover:translate-x-2 block group">
                  <span className="group-hover:text-white">Términos</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-amber-400/20 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6 text-amber-400 tracking-wide">Síguenos</h3>
              <div className="flex justify-center lg:justify-start">
                <a href="https://www.facebook.com/share/1BDzzQnwWM/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Facebook" className="group bg-gradient-to-br from-amber-400/10 to-amber-400/5 p-4 rounded-2xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 transform hover:scale-110 hover:rotate-3">
                  <Facebook className="h-8 w-8 text-amber-400 group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <h3 className="text-2xl font-bold mb-6 text-amber-400 tracking-wide">Enlaces Rápidos</h3>
              <div className="flex flex-wrap justify-center lg:justify-end gap-4">
                <a href="/es/flota" className="bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-400 px-4 py-2 rounded-full hover:from-amber-400/30 hover:to-yellow-500/30 transition-all duration-300 text-sm font-medium">Reservar Ahora</a>
                <a href="/es/contacto" className="bg-gradient-to-r from-gray-400/20 to-gray-500/20 text-gray-300 px-4 py-2 rounded-full hover:from-gray-400/30 hover:to-gray-500/30 hover:text-white transition-all duration-300 text-sm font-medium">Contáctanos</a>
                <a href="/es/sobre-nosotros" className="bg-gradient-to-r from-gray-400/20 to-gray-500/20 text-gray-300 px-4 py-2 rounded-full hover:from-gray-400/30 hover:to-gray-500/30 hover:text-white transition-all duration-300 text-sm font-medium">Saber Más</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-400/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-lg font-medium">© 2025 <span className="text-amber-400 font-bold">nassohcar.com</span></p>
              <p className="text-gray-500 text-sm mt-1">Todos los derechos reservados</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">Diseño y Desarrollo por <span className="text-amber-400 font-semibold ml-1">TatweerX</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
