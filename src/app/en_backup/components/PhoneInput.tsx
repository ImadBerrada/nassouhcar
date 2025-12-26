"use client"

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Phone } from 'lucide-react'

interface Country { code: string; name: string; dialCode: string; flag: string }
interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  className?: string
  id?: string
  name?: string
}

const countries: Country[] = [
  { code: 'MA', name: 'Morocco', dialCode: '+212', flag: '🇲🇦' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
  { code: 'BE', name: 'Belgium', dialCode: '+32', flag: '🇧🇪' },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱' },
  { code: 'CH', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭' },
  { code: 'AT', name: 'Austria', dialCode: '+43', flag: '🇦🇹' },
  { code: 'PT', name: 'Portugal', dialCode: '+351', flag: '🇵🇹' },
  { code: 'DZ', name: 'Algeria', dialCode: '+213', flag: '🇩🇿' },
  { code: 'TN', name: 'Tunisia', dialCode: '+216', flag: '🇹🇳' },
  { code: 'EG', name: 'Egypt', dialCode: '+20', flag: '🇪🇬' },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦' },
  { code: 'AE', name: 'UAE', dialCode: '+971', flag: '🇦🇪' },
]

export default function PhoneInput({ value, onChange, placeholder = 'Enter your phone number', required = false, className = '', id, name }: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (value) {
      const matchingCountry = countries.find(country => value.startsWith(country.dialCode))
      if (matchingCountry) {
        setSelectedCountry(matchingCountry)
        setPhoneNumber(value.substring(matchingCountry.dialCode.length))
      } else {
        setPhoneNumber(value)
      }
    }
  }, [value])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => { document.removeEventListener('mousedown', handleClickOutside) }
  }, [])

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country)
    setIsDropdownOpen(false)
    const fullNumber = country.dialCode + phoneNumber
    onChange(fullNumber)
  }

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = e.target.value.replace(/[^\d\s\-\(\)]/g, '')
    setPhoneNumber(newPhoneNumber)
    const fullNumber = selectedCountry.dialCode + newPhoneNumber
    onChange(fullNumber)
  }

  return (
    <div className={`relative ${className}`}>
      <div className="flex">
        <div className="relative" ref={dropdownRef}>
          <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center px-3 py-2 sm:py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors">
            <span className="text-lg mr-2">{selectedCountry.flag}</span>
            <span className="text-sm font-medium text-gray-700 mr-1">{selectedCountry.dialCode}</span>
            <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              {countries.map((country) => (
                <button key={country.code} type="button" onClick={() => handleCountrySelect(country)} className="w-full flex items-center px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none text-left">
                  <span className="text-lg mr-3">{country.flag}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{country.name}</div>
                    <div className="text-xs text-gray-500">{country.dialCode}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Phone className="h-4 w-4 text-gray-400" /></div>
          <input type="tel" id={id} name={name} value={phoneNumber} onChange={handlePhoneNumberChange} placeholder={placeholder} required={required} className="block w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-base text-gray-900" />
        </div>
      </div>
    </div>
  )
}
