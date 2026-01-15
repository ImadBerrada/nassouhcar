'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { routeMappings, type RouteMapping } from '@/lib/route-mappings';

type Language = 'fr' | 'en' | 'es';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine current language based on path
  const getCurrentLang = (): Language => {
    if (pathname?.startsWith('/en')) return 'en';
    if (pathname?.startsWith('/es')) return 'es';
    return 'fr';
  };

  const currentLang = getCurrentLang();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (targetLang: Language) => {
    if (targetLang === currentLang) {
      setIsOpen(false);
      return;
    }

    let targetPath = '';
    const currentPath = pathname || '/';

    // 1. Try to find an exact match in our mappings
    const mapping = routeMappings.find(m => m[currentLang] === currentPath);

    if (mapping) {
      targetPath = mapping[targetLang];
    } else {
      // 2. If no mapping found, try heuristic replacement
      // This is a fallback and might redirect to 404 if the page doesn't exist in the target language
      // But it's better than always going to home.
      
      if (currentLang === 'fr') {
        // FR -> EN/ES
        if (targetLang === 'en') targetPath = `/en${currentPath === '/' ? '' : currentPath}`;
        if (targetLang === 'es') targetPath = `/es${currentPath === '/' ? '' : currentPath}`;
      } else if (currentLang === 'en') {
        // EN -> FR/ES
        const pathWithoutLang = currentPath.replace(/^\/en/, '') || '/';
        if (targetLang === 'fr') targetPath = pathWithoutLang;
        if (targetLang === 'es') targetPath = `/es${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
      } else if (currentLang === 'es') {
        // ES -> FR/EN
        const pathWithoutLang = currentPath.replace(/^\/es/, '') || '/';
        if (targetLang === 'fr') targetPath = pathWithoutLang;
        if (targetLang === 'en') targetPath = `/en${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
      }
    }

    setIsOpen(false);
    // Set cookie for language preference (expires in 365 days)
    document.cookie = `NEXT_LOCALE=${targetLang}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
    router.push(targetPath);
  };

  const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/10 backdrop-blur-md text-gray-200 px-3 py-2 rounded-full shadow-lg border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 group"
      >
        <Globe className="h-4 w-4 text-amber-400 group-hover:text-amber-300 transition-colors" />
        <span className="font-medium uppercase text-sm">{currentLang}</span>
        <ChevronDown className={`h-3 w-3 text-amber-200/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-amber-400/20 overflow-hidden transform origin-top-right animate-in fade-in slide-in-from-top-2 z-[100]">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code as Language)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-white/10 transition-colors ${
                  currentLang === lang.code ? 'bg-amber-400/10 text-amber-400' : 'text-gray-200'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-base">{lang.flag}</span>
                  <span className="font-medium text-sm">{lang.label}</span>
                </div>
                {currentLang === lang.code && (
                  <Check className="h-3 w-3 text-amber-400" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
