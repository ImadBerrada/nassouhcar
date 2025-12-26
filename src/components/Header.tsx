'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, isAdmin, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  // Determine the correct dashboard URL based on user role
  const dashboardUrl = isAdmin ? '/admin/dashboard' : '/dashboard';

  return (
    <header className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 shadow-2xl sticky top-0 z-50 backdrop-blur-md border-b border-gold-200/20">
      {/* Top Bar - Contact Info */}
      <div className="hidden sm:block border-b border-amber-400/10 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+212631630013" className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors text-xs font-medium group">
              <Phone className="h-3.5 w-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>+212 631-630013</span>
            </a>
            <a href="mailto:contact@nassohcar.com" className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors text-xs font-medium group">
              <Mail className="h-3.5 w-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>contact@nassohcar.com</span>
            </a>
          </div>
          <div className="text-xs text-amber-200/60 font-medium">
            Location de voitures à Tanger
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-0 sm:pl-0 sm:pr-6 lg:pr-8">
        <div className="flex flex-wrap items-center justify-between h-16">
          {/* Luxury Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0 cursor-pointer pl-2">
            <div className="relative">
              <Image 
                src="/nassouh.png" 
                alt="Nassoh Car Logo" 
                width={104} 
                height={48} 
                className="drop-shadow-lg" 
                priority
              />
              <div className="absolute inset-0 w-[104px] h-[48px] bg-amber-400/20 rounded-lg blur-xl"></div>
            </div>
          </Link>

          {/* Luxury Desktop Navigation */}
          <nav className="hidden lg:flex flex-grow justify-center items-center">
            <div className="flex flex-wrap justify-center gap-x-4 xl:gap-x-8">
              <Link href="/" className="text-gray-200 hover:text-amber-400 transition-all duration-300 font-medium text-lg tracking-wide relative group whitespace-nowrap px-3 py-2 flex-shrink-0">
                <span className="notranslate">Accueil</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/fleet" className="text-gray-200 hover:text-amber-400 transition-all duration-300 font-medium text-lg tracking-wide relative group whitespace-nowrap px-3 py-2 flex-shrink-0">
                <span className="notranslate">Notre Flotte</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/blog" className="text-gray-200 hover:text-amber-400 transition-all duration-300 font-medium text-lg tracking-wide relative group whitespace-nowrap px-3 py-2 flex-shrink-0">
                <span className="notranslate">Blog</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </nav>

          {/* Right Section - Auth and Actions */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 justify-end flex-shrink-0">
            {isAuthenticated ? (
              <>
                {/* User Info */}
                <div className="hidden sm:flex items-center space-x-2 text-sm text-amber-200/90 bg-white/5 px-3 py-2 rounded-full backdrop-blur-sm border border-amber-400/20">
                  <User className="h-4 w-4 text-amber-400" />
                  <span className="font-medium">{user?.name}</span>
                  {isAdmin && (
                    <span className="text-xs bg-amber-400 text-slate-900 px-2 py-0.5 rounded-full font-semibold">
                      ADMIN
                    </span>
                  )}
                </div>
                
                {/* Dashboard Button - Updated to use dynamic URL */}
                <Link
                  href={dashboardUrl}
                  className="text-gray-200 hover:text-amber-400 transition-all duration-300 font-medium text-sm tracking-wide bg-white/5 px-3 py-2 rounded-full backdrop-blur-sm border border-amber-400/20 hover:border-amber-400/40 whitespace-nowrap min-w-[100px] text-center"
                >
                  <span className="notranslate">Tableau de bord</span>
                </Link>
                
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-200 hover:text-red-400 transition-all duration-300 font-medium text-sm tracking-wide bg-white/5 px-3 py-2 rounded-full backdrop-blur-sm border border-amber-400/20 hover:border-red-400/40 min-w-[40px] justify-center"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden xl:inline notranslate">Déconnexion</span>
                </button>
              </>
            ) : (
              <>
                {/* Auth Buttons */}
                <div className="flex items-center space-x-3">
                  <Link
                    href="/login"
                    className="text-gray-200 hover:text-amber-400 transition-all duration-300 font-medium text-sm tracking-wide bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-amber-400/20 hover:border-amber-400/40 whitespace-nowrap min-w-[80px] text-center"
                  >
                    <span className="notranslate">Connexion</span>
                  </Link>
                  <Link
                    href="/register"
                    className="text-slate-900 bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 transition-all duration-300 font-medium text-sm tracking-wide px-4 py-2 rounded-full shadow-lg hover:shadow-amber-400/25 whitespace-nowrap min-w-[80px] text-center"
                  >
                    <span className="notranslate">S'inscrire</span>
                  </Link>
                </div>
              </>
            )}
            
            {/* Language Switcher */}
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="lg:hidden p-3 rounded-full text-amber-200 hover:text-amber-400 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-amber-400/20 ml-auto"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-4 pb-6 space-y-2 bg-gradient-to-b from-slate-900/95 to-gray-900/95 backdrop-blur-md border-t border-amber-400/20 rounded-b-2xl">
              <Link
                href="/"
                className="block px-4 py-3 text-gray-200 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
                onClick={toggleMenu}
              >
                <span className="notranslate">Accueil</span>
              </Link>
              <Link
                href="/fleet"
                className="block px-4 py-3 text-gray-200 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
                onClick={toggleMenu}
              >
                <span className="notranslate">Notre Flotte</span>
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-3 text-gray-200 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
                onClick={toggleMenu}
              >
                <span className="notranslate">Blog</span>
              </Link>
              
              {/* Mobile Language Switcher */}
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Langue</span>
                <LanguageSwitcher />
              </div>
              
              {/* Mobile Auth Section */}
              <div className="px-4 py-3 border-t border-amber-400/20 mt-4 space-y-3">
                {isAuthenticated ? (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-amber-200/90">
                      <User className="h-4 w-4 text-amber-400" />
                      <span>Bienvenue, {user?.name}</span>
                      {isAdmin && (
                        <span className="text-xs bg-amber-400 text-slate-900 px-2 py-0.5 rounded-full font-semibold">
                          ADMIN
                        </span>
                      )}
                    </div>
                    {/* Mobile Dashboard Button - Updated to use dynamic URL */}
                    <Link
                      href={dashboardUrl}
                      className="block px-4 py-2 text-gray-200 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium text-center bg-white/5 border border-amber-400/20 min-h-[40px] flex items-center justify-center"
                      onClick={toggleMenu}
                    >
                      <span className="notranslate">Tableau de bord</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-gray-200 hover:text-red-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium bg-white/5 border border-amber-400/20 hover:border-red-400/40 min-h-[40px]"
                    >
                      <LogOut className="h-4 w-4" />
                      <span className="notranslate">Déconnexion</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-gray-200 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium text-center bg-white/5 border border-amber-400/20 min-h-[40px] flex items-center justify-center"
                      onClick={toggleMenu}
                    >
                      <span className="notranslate">Connexion</span>
                    </Link>
                    <Link
                      href="/register"
                      className="block px-4 py-2 text-slate-900 bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 transition-all duration-300 font-medium text-center rounded-xl shadow-lg min-h-[40px] flex items-center justify-center"
                      onClick={toggleMenu}
                    >
                      <span className="notranslate">S'inscrire</span>
                    </Link>
                  </div>
                )}
                
                {/* Contact Info - Always show in mobile */}
                <div className="space-y-2 pt-3 border-t border-amber-400/20">
                  <div className="flex items-center space-x-2 text-sm text-amber-200/90">
                    <Phone className="h-4 w-4 text-amber-400" />
                    <span>+212 631-630013</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-amber-200/90">
                    <Mail className="h-4 w-4 text-amber-400" />
                    <span>contact@nassohcar.com</span>
                  </div>
                </div>
                

              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;