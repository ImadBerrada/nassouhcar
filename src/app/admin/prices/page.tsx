'use client'

import { useEffect, useState } from 'react'
import PriceCalendar from '@/components/admin/PriceCalendar'
import { api } from '@/lib/api'

interface Car {
  id: string
  name: string
  brand: string
  model: string
}

export default function AdminPricesPage() {
  const [cars, setCars] = useState<Car[]>([])
  const [selectedCarId, setSelectedCarId] = useState<string>('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const response = await api.getCars()
        const list = response.cars || []
        setCars(list)
        if (list.length > 0) setSelectedCarId(list[0].id)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Gestion des Prix par Période</h1>
      <p className="text-white/60 mb-6">Sélectionnez une voiture et définissez des tarifs selon les périodes (mois, vacances, etc.).</p>

      <div className="mb-4">
        <label className="text-white/70 text-sm mr-2">Voiture</label>
        <select
          value={selectedCarId}
          onChange={(e) => setSelectedCarId(e.target.value)}
          className="bg-slate-800 text-white border border-white/20 rounded p-2 min-w-[240px]"
        >
          {cars.map(car => (
            <option key={car.id} value={car.id} className="bg-slate-800">
              {car.brand} {car.model} – {car.name}
            </option>
          ))}
        </select>
      </div>

      {loading && <div className="text-white/60">Chargement des voitures…</div>}

      {selectedCarId && (
        <PriceCalendar carId={selectedCarId} />
      )}
    </div>
  )
}