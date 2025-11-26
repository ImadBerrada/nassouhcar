'use client'

import { useEffect, useState, useRef } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { 
  Car, 
  Search,
  ArrowLeft,
  Edit,
  Trash2,
  Plus,
  Image as ImageIcon,
  Calendar
} from 'lucide-react'
import PriceCalendar from '@/components/admin/PriceCalendar'

interface CarData {
  id: string
  name: string
  brand: string
  model: string
  year: number
  category: string
  transmission: string
  fuelType: string
  seats: number
  pricePerDay: number
  shortTermPricePerDay?: number | null
  quantity: number
  image?: string
  description?: string
  features: string[]
  available: boolean
}

export default function AdminCarsPage() {
  const { isAuthenticated, isAdmin, isLoading } = useAuth()
  const router = useRouter()
  const [cars, setCars] = useState<CarData[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('')
  const [filterAvailability, setFilterAvailability] = useState('')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editingCar, setEditingCar] = useState<CarData | null>(null)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [activeTab, setActiveTab] = useState<'details' | 'pricing'>('details')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [newCar, setNewCar] = useState({
    name: '',
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    category: '',
    transmission: 'Manuelle',
    fuelType: 'Petrol',
    seats: 5,
    pricePerDay: 0,
    shortTermPricePerDay: undefined as number | undefined,
    quantity: 1,
    image: '',
    description: '',
    features: [] as string[],
    available: true
  })

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !isAdmin)) {
      router.push('/admin/login')
    }
  }, [isAuthenticated, isAdmin, isLoading, router])

  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      fetchCars()
    }
  }, [isAuthenticated, isAdmin])

  const fetchCars = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/admin/cars', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setCars(data.cars)
      }
    } catch (error) {
      console.error('Failed to fetch cars:', error)
    } finally {
      setLoading(false)
    }
  }

  // Image upload functions
  const handleImageUpload = async (file: File) => {
    if (!file) return

    setUploadingImage(true)
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()
      
      if (result.success) {
        setNewCar({...newCar, image: result.imageUrl})
      } else {
        alert(result.error || 'Échec du téléchargement')
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert('Échec du téléchargement. Veuillez réessayer.')
    } finally {
      setUploadingImage(false)
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleImageUpload(e.target.files[0])
    }
  }



  const createCar = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/admin/cars', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCar)
      })
      
      if (response.ok) {
        const createdCar = await response.json()
        await fetchCars()
        setShowCreateModal(false)
        // Switch to edit mode and pricing tab
        setEditingCar(createdCar.car)
        setNewCar(createdCar.car)
        setActiveTab('pricing')
      }
    } catch (error) {
      console.error('Failed to create car:', error)
    }
  }

  const updateCar = async () => {
    if (!editingCar) return
    
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/admin/cars/${editingCar.id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCar)
      })
      
      if (response.ok) {
        await fetchCars()
        setEditingCar(null)
        resetForm()
      }
    } catch (error) {
      console.error('Failed to update car:', error)
    }
  }

  const deleteCar = async (carId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette voiture ?')) return
    
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/admin/cars/${carId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        await fetchCars()
      }
    } catch (error) {
      console.error('Failed to delete car:', error)
    }
  }

  const resetForm = () => {
    setNewCar({
      name: '',
      brand: '',
      model: '',
      year: new Date().getFullYear(),
      category: '',
      transmission: 'Manuelle',
      fuelType: 'Petrol',
      seats: 5,
      pricePerDay: 0,
      shortTermPricePerDay: undefined,
      quantity: 1,
      image: '',
      description: '',
      features: [],
      available: true
    })
    setActiveTab('details')
  }

  const startEdit = (car: CarData) => {
    setEditingCar(car)
    setNewCar({
      name: car.name,
      brand: car.brand,
      model: car.model,
      year: car.year,
      category: car.category,
      transmission: car.transmission,
      fuelType: car.fuelType,
      seats: car.seats,
      pricePerDay: car.pricePerDay,
      shortTermPricePerDay: car.shortTermPricePerDay ?? undefined,
      quantity: car.quantity || 1,
      image: car.image || '',
      description: car.description || '',
      features: car.features,
      available: car.available
    })
  }

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.model.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !filterCategory || car.category === filterCategory
    const matchesAvailability = !filterAvailability || 
                               (filterAvailability === 'available' && car.available) ||
                               (filterAvailability === 'unavailable' && !car.available)
    return matchesSearch && matchesCategory && matchesAvailability
  })

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-32 w-32 border-4 border-transparent bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
          <div className="absolute inset-2 bg-slate-900 rounded-full"></div>
          <div className="absolute inset-4 animate-pulse bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20"></div>
        </div>
      </div>
    )
  }

  if (!isAuthenticated || !isAdmin) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-bounce opacity-30 animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-20 w-1 h-1 bg-purple-300 rounded-full animate-ping opacity-60 animation-delay-2000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSI+PC9jaXJjbGU+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      </div>

      {/* Header */}
      <div className="relative backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-8">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => router.push('/admin/dashboard')}
                className="group flex items-center text-white/80 hover:text-white transition-all duration-300 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20"
              >
                <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-medium">Retour au Tableau de Bord</span>
              </button>
              <div className="relative">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse-glow">
                  Gestion des Voitures
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-20 animate-pulse"></div>
              </div>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-cyan-400 hover:to-purple-500 flex items-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl transform hover:scale-105 border border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <Plus className="h-5 w-5 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
              <span className="relative z-10 font-semibold">Ajouter une Voiture</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl p-8 mb-8 border border-white/20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl"></div>
          <div className="relative flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 h-5 w-5 group-hover:text-cyan-300 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Rechercher des voitures par nom, marque ou modèle..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 text-gray-900 placeholder-gray-600 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
            <div className="flex gap-4">
               <div className="relative group">
                 <select
                   value={filterCategory}
                   onChange={(e) => setFilterCategory(e.target.value)}
                   className="appearance-none px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 text-gray-900 transition-all duration-300 hover:bg-white/10 focus:bg-white/10 cursor-pointer min-w-[140px]"
                 >
                   <option value="" className="bg-slate-800 text-white">Toutes les Catégories</option>
                   <option value="Economy" className="bg-slate-800 text-white">Économique</option>
                   <option value="Compact" className="bg-slate-800 text-white">Compacte</option>
                   <option value="SUV" className="bg-slate-800 text-white">SUV</option>
                   <option value="Luxury" className="bg-slate-800 text-white">Luxe</option>
                   <option value="Sports" className="bg-slate-800 text-white">Sport</option>
                 </select>
                 <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
               </div>
               <div className="relative group">
                 <select
                   value={filterAvailability}
                   onChange={(e) => setFilterAvailability(e.target.value)}
                   className="appearance-none px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400/50 text-white transition-all duration-300 hover:bg-white/10 focus:bg-white/10 cursor-pointer min-w-[120px]"
                 >
                   <option value="" className="bg-slate-800 text-white">Tous les Statuts</option>
                   <option value="available" className="bg-slate-800 text-white">Disponible</option>
                   <option value="unavailable" className="bg-slate-800 text-white">Indisponible</option>
                 </select>
                 <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-cyan-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
               </div>
             </div>
          </div>
        </div>

        {/* Cars Grid */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-transparent bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
              <div className="absolute inset-2 bg-slate-900 rounded-full"></div>
              <div className="absolute inset-4 animate-pulse bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div key={car.id} className="group relative backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:shadow-cyan-500/25">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="relative h-56 overflow-hidden rounded-t-2xl">
                    <Image
                      src={car.image || '/cars/default.jpg'}
                      alt={car.name}
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized={car.image?.startsWith('data:')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-sm border transition-all duration-300 ${
                        car.available 
                          ? 'bg-green-500/20 text-green-300 border-green-400/30 shadow-green-400/20' 
                          : 'bg-red-500/20 text-red-300 border-red-400/30 shadow-red-400/20'
                      } shadow-lg`}>
                        {car.available ? 'Disponible' : 'Indisponible'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">{car.name}</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm text-white/80 mb-6">
                      <div className="space-y-2">
                        <p><span className="text-cyan-400 font-medium">Marque:</span> {car.brand}</p>
                        <p><span className="text-cyan-400 font-medium">Modèle:</span> {car.model}</p>
                        <p><span className="text-cyan-400 font-medium">Année:</span> {car.year}</p>
                        <p><span className="text-cyan-400 font-medium">Catégorie:</span> {car.category}</p>
                      </div>
                      <div className="space-y-2">
                        <p><span className="text-purple-400 font-medium">Transmission:</span> {car.transmission}</p>
                        <p><span className="text-purple-400 font-medium">Carburant:</span> {car.fuelType}</p>
                        <p><span className="text-purple-400 font-medium">Places:</span> {car.seats}</p>
                        <p><span className="text-purple-400 font-medium">Quantité:</span> {car.quantity}</p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center mb-6">
                      <div className="relative">
                        <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          €{car.pricePerDay}
                        </span>
                        <span className="text-white/60 text-lg ml-1">/jour</span>
                        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => startEdit(car)}
                        className="group/btn flex-1 relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-xl hover:from-cyan-400 hover:to-blue-500 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 border border-white/20"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300"></div>
                        <Edit className="h-4 w-4 mr-2 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span className="relative z-10 font-semibold">Modifier</span>
                      </button>
                      <button
                        onClick={() => deleteCar(car.id)}
                        className="group/btn flex-1 relative bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-3 rounded-xl hover:from-red-400 hover:to-pink-500 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-red-500/25 transform hover:scale-105 border border-white/20"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-500 rounded-xl blur opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300"></div>
                        <Trash2 className="h-4 w-4 mr-2 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span className="relative z-10 font-semibold">Supprimer</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredCars.length === 0 && !loading && (
          <div className="text-center py-16">
            <div className="relative inline-block">
              <Car className="h-10 w-10 text-cyan-400 mx-auto mb-6 animate-pulse" />
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Aucune voiture trouvée</h3>
            <p className="text-white/60 text-lg">Essayez d'ajuster votre recherche ou vos filtres.</p>
          </div>
        )}
      </div>

      {/* Create/Edit Car Modal */}
      {(showCreateModal || editingCar) && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="relative backdrop-blur-2xl bg-white/10 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"></div>
            <div className="relative p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="relative">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {editingCar ? 'Modifier la Voiture' : 'Ajouter une Nouvelle Voiture'}
                  </h3>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-20 animate-pulse"></div>
                </div>
                <button
                  onClick={() => {
                    setShowCreateModal(false)
                    setEditingCar(null)
                    resetForm()
                  }}
                  className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-8 bg-white/5 rounded-xl p-1 backdrop-blur-sm border border-white/10">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'details'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Car className="w-5 h-5 mr-2" />
                  Détails de la Voiture
                </button>
                <button
                  onClick={() => setActiveTab('pricing')}
                  className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'pricing'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                  disabled={!editingCar}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Tarification
                  {!editingCar && (
                    <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                      Créer d'abord
                    </span>
                  )}
                </button>
              </div>
              {/* Tab Content */}
              {activeTab === 'details' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-cyan-300 mb-3">Nom</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={newCar.name}
                      onChange={(e) => setNewCar({...newCar, name: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 text-white placeholder-white/60 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                      placeholder="Entrez le nom de la voiture"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-purple-300 mb-3">Marque</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={newCar.brand}
                      onChange={(e) => setNewCar({...newCar, brand: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 text-white placeholder-white/60 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                      placeholder="Entrez le nom de la marque"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-cyan-300 mb-3">Modèle</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={newCar.model}
                      onChange={(e) => setNewCar({...newCar, model: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 text-white placeholder-white/60 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                      placeholder="Entrez le nom du modèle"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-pink-300 mb-3">Année</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={newCar.year || ''}
                      onChange={(e) => setNewCar({...newCar, year: parseInt(e.target.value) || new Date().getFullYear()})}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400/50 text-white placeholder-white/60 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                      placeholder="Entrez l'année"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-cyan-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-purple-300 mb-3">Catégorie</label>
                  <div className="relative">
                    <select
                      value={newCar.category}
                      onChange={(e) => setNewCar({...newCar, category: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 text-white transition-all duration-300 hover:bg-white/10 focus:bg-white/10 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-slate-800 text-white">Sélectionner une Catégorie</option>
                      <option value="Economy" className="bg-slate-800 text-white">Économique</option>
                      <option value="Compact" className="bg-slate-800 text-white">Compacte</option>
                      <option value="SUV" className="bg-slate-800 text-white">SUV</option>
                      <option value="Luxury" className="bg-slate-800 text-white">Luxe</option>
                      <option value="Sports" className="bg-slate-800 text-white">Sport</option>
                    </select>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-cyan-300 mb-3">Transmission</label>
                  <div className="relative">
                    <select
                      value={newCar.transmission}
                      onChange={(e) => setNewCar({...newCar, transmission: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 text-white transition-all duration-300 hover:bg-white/10 focus:bg-white/10 appearance-none cursor-pointer"
                    >
                      <option value="Manual" className="bg-slate-800 text-white">Manuelle</option>
                      <option value="Automatic" className="bg-slate-800 text-white">Automatique</option>
                    </select>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-purple-300 mb-3">Type de Carburant</label>
                  <div className="relative">
                    <select
                      value={newCar.fuelType}
                      onChange={(e) => setNewCar({...newCar, fuelType: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 text-white transition-all duration-300 hover:bg-white/10 focus:bg-white/10 appearance-none cursor-pointer"
                    >
                      <option value="Petrol" className="bg-slate-800 text-white">Essence</option>
                      <option value="Diesel" className="bg-slate-800 text-white">Diesel</option>
                      <option value="Electric" className="bg-slate-800 text-white">Électrique</option>
                      <option value="Hybrid" className="bg-slate-800 text-white">Hybride</option>
                    </select>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-pink-300 mb-3">Places</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={newCar.seats || ''}
                      onChange={(e) => setNewCar({...newCar, seats: parseInt(e.target.value) || 5})}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400/50 text-white placeholder-white/60 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                      placeholder="Nombre de places"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-cyan-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-cyan-300 mb-3">Prix par Jour (€)</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={newCar.pricePerDay || ''}
                      onChange={(e) => setNewCar({...newCar, pricePerDay: parseFloat(e.target.value) || 0})}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 text-white placeholder-white/60 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                      placeholder="Entrez le prix par jour"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-purple-300 mb-3">Prix court séjour par jour (&lt; 3 jours) (€)</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={newCar.shortTermPricePerDay ?? ''}
                      onChange={(e) => setNewCar({...newCar, shortTermPricePerDay: e.target.value === '' ? undefined : parseFloat(e.target.value)})}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 text-white placeholder-white/60 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                      placeholder="Tarif par jour pour réservations < 3 jours (optionnel)"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-purple-300 mb-3">Quantité Disponible</label>
                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      value={newCar.quantity || ''}
                      onChange={(e) => setNewCar({...newCar, quantity: parseInt(e.target.value) || 1})}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 text-white placeholder-white/60 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                      placeholder="Nombre de voitures disponibles"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-pink-300 mb-3">URL de l'Image</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={newCar.image}
                      onChange={(e) => setNewCar({...newCar, image: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400/50 text-white placeholder-white/60 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                      placeholder="Entrez l'URL de l'image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-cyan-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="md:col-span-2 group">
                  <label className="block text-sm font-semibold text-cyan-300 mb-3">Description</label>
                  <div className="relative">
                    <textarea
                      value={newCar.description}
                      onChange={(e) => setNewCar({...newCar, description: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 text-white placeholder-white/60 transition-all duration-300 hover:bg-white/10 focus:bg-white/10 resize-none"
                      placeholder="Entrez la description de la voiture..."
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="md:col-span-2 group">
                  <label className="block text-sm font-semibold text-purple-300 mb-3">Caractéristiques (séparées par des virgules)</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={newCar.features.join(', ')}
                      onChange={(e) => setNewCar({...newCar, features: e.target.value.split(',').map(f => f.trim()).filter(f => f)})}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 text-white placeholder-white/60 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                      placeholder="Climatisation, GPS, Bluetooth, etc."
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="flex items-center group cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newCar.available}
                      onChange={(e) => setNewCar({...newCar, available: e.target.checked})}
                      className="mr-3 w-5 h-5 text-cyan-400 bg-white/5 border-white/20 rounded focus:ring-cyan-400/50 focus:ring-2 transition-all duration-300"
                    />
                    <span className="text-sm font-semibold text-pink-300 group-hover:text-pink-200 transition-colors duration-300">Disponible pour la réservation</span>
                  </label>
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-cyan-300 mb-3">Image de la Voiture</label>
                  <div
                    className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 backdrop-blur-sm ${
                      dragActive 
                        ? 'border-cyan-400 bg-cyan-400/10' 
                        : 'border-white/20 hover:border-white/30 bg-white/5 hover:bg-white/10'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    
                    {uploadingImage ? (
                      <div className="flex flex-col items-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-2 border-transparent bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-3"></div>
                        <div className="absolute inset-2 bg-slate-900 rounded-full"></div>
                        <p className="text-sm text-cyan-300 font-medium">Téléchargement...</p>
                      </div>
                    ) : newCar.image ? (
                      <div className="flex flex-col items-center">
                        <Image
                          src={newCar.image}
                          alt="Aperçu de la voiture"
                          width={96}
                          height={64}
                          className="w-24 h-16 object-cover rounded-lg border border-white/20 mb-3"
                        />
                        <p className="text-sm text-green-400 mb-3 font-medium">Image téléchargée avec succès !</p>
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-300"
                        >
                          Changer l'Image
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <ImageIcon className="h-12 w-12 text-purple-400 mb-3" />
                        <p className="text-sm text-white/80 mb-2">
                          Glissez et déposez une image ici, ou{' '}
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
                          >
                            cliquez pour sélectionner
                          </button>
                        </p>
                        <p className="text-xs text-white/60">
                          PNG, JPG, WebP jusqu'à 5MB
                        </p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
            </div>
              ) : (
                /* Pricing Tab */
                <div className="h-96">
                  {editingCar ? (
                    <PriceCalendar carId={editingCar.id} />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <Calendar className="w-16 h-16 text-white/40 mx-auto mb-4" />
                        <p className="text-white/60 text-lg mb-2">Tarification Calendaire</p>
                        <p className="text-white/40 text-sm">
                          Créez d'abord la voiture pour configurer les prix
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    setShowCreateModal(false)
                    setEditingCar(null)
                    resetForm()
                  }}
                  className="group relative px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300 font-semibold backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 to-gray-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Annuler</span>
                </button>
                {activeTab === 'details' && (
                  <button
                    onClick={editingCar ? updateCar : createCar}
                    className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 border border-white/20 font-semibold"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <span className="relative z-10">{editingCar ? 'Modifier la Voiture' : 'Créer une Voiture'}</span>
                  </button>
                )}
                {activeTab === 'pricing' && editingCar && (
                  <button
                    onClick={() => setActiveTab('details')}
                    className="group relative bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-xl hover:from-purple-400 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 border border-white/20 font-semibold"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <span className="relative z-10">Retour aux Détails</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.6), 0 0 60px rgba(147, 51, 234, 0.3); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
        }
      `}</style>
    </div>
  )
}
