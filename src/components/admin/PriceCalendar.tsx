'use client'

import { useEffect, useMemo, useState } from 'react'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react'

interface PriceRule {
  id: string
  carId: string
  startDate: string
  endDate: string
  pricePerDay: number
}

interface PriceCalendarProps {
  carId: string
}

const MONTHS = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']
const DAYS = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam']

export default function PriceCalendar({ carId }: PriceCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [rules, setRules] = useState<PriceRule[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [form, setForm] = useState<{ startDate: string; endDate: string; pricePerDay: string }>({
    startDate: '',
    endDate: '',
    pricePerDay: ''
  })

  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const monthStart = new Date(currentYear, currentMonth, 1)
  const monthEnd = new Date(currentYear, currentMonth + 1, 0)
  const firstDayWeekday = monthStart.getDay()
  const daysInMonth = monthEnd.getDate()

  const fetchRules = async () => {
    try {
      setLoading(true)
      setError(null)
      const start = monthStart.toISOString().slice(0,10)
      const end = new Date(currentYear, currentMonth + 1, 0).toISOString().slice(0,10)
      const res = await fetch(`/api/price-rules?carId=${carId}&start=${start}&end=${end}`)
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to fetch rules')
      setRules(data)
    } catch (e: unknown) {
      console.error('Error fetching rules:', e)
      setError(e instanceof Error ? e.message : 'Erreur lors du chargement des règles')
      setRules([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRules()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carId, currentMonth, currentYear])

  const dayPrice = (d: Date) => {
    const iso = d.toISOString()
    const match = rules.filter(r => new Date(r.startDate) <= d && new Date(r.endDate) >= d)
    if (match.length === 0) return null
    // Show price from most recently created rule (assumed first from API order)
    return match[0].pricePerDay
  }

  const goToPreviousMonth = () => setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  const goToNextMonth = () => setCurrentDate(new Date(currentYear, currentMonth + 1, 1))

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const submitRule = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      const payload = {
        carId,
        startDate: form.startDate,
        endDate: form.endDate,
        pricePerDay: parseFloat(form.pricePerDay)
      }
      const res = await fetch('/api/price-rules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to save rule')
      // Reset and refresh
      setForm({ startDate: '', endDate: '', pricePerDay: '' })
      await fetchRules()
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Erreur lors de la sauvegarde de la règle')
    } finally {
      setLoading(false)
    }
  }

  const deleteRule = async (id: string) => {
    try {
      setLoading(true)
      const res = await fetch(`/api/price-rules?id=${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Failed to delete rule')
      await fetchRules()
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Erreur lors de la suppression')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border border-white/10 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
            <CalendarIcon className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Calendrier des Prix</h2>
            <p className="text-white/60 text-xs">Définissez des tarifs par période</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={goToPreviousMonth} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20">
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <div className="text-white font-bold">{MONTHS[currentMonth]} {currentYear}</div>
          <button onClick={goToNextMonth} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20">
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-4">
        <div className="grid grid-cols-7 gap-1 mb-1">
          {DAYS.map(d => (
            <div key={d} className="text-center text-white/60 text-xs">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDayWeekday }, (_, i) => (
            <div key={`empty-${i}`} className="min-h-[64px]"></div>
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const date = new Date(currentYear, currentMonth, i + 1)
            const price = dayPrice(date)
            return (
              <div key={i} className="min-h-[64px] p-2 rounded-lg bg-white/5 border border-white/10">
                <div className="text-xs text-white/80 font-medium">{i + 1}</div>
                <div className="mt-1 text-sm font-bold text-amber-300">
                  {price != null ? `€${price}/jour` : <span className="text-white/40">—</span>}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Create Rule */}
      <div className="p-4 border-t border-white/10 bg-white/5">
        <h3 className="text-white font-semibold mb-3">Définir une nouvelle règle de prix</h3>
        {error && <div className="text-red-400 text-sm mb-2">{error}</div>}
        <form onSubmit={submitRule} className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div>
            <label className="text-white/70 text-xs">Date de début</label>
            <input type="date" name="startDate" value={form.startDate} onChange={handleFormChange}
              className="w-full mt-1 bg-slate-800 text-white border border-white/20 rounded p-2" required />
          </div>
          <div>
            <label className="text-white/70 text-xs">Date de fin</label>
            <input type="date" name="endDate" value={form.endDate} onChange={handleFormChange}
              className="w-full mt-1 bg-slate-800 text-white border border-white/20 rounded p-2" required />
          </div>
          <div>
            <label className="text-white/70 text-xs">Prix par jour (€)</label>
            <input type="number" min="0" step="0.01" name="pricePerDay" value={form.pricePerDay} onChange={handleFormChange}
              className="w-full mt-1 bg-slate-800 text-white border border-white/20 rounded p-2" required />
          </div>
          <div className="flex items-end">
            <button disabled={loading} type="submit" className="w-full bg-amber-400 text-black font-bold py-2 rounded hover:bg-amber-500">
              {loading ? 'Enregistrement...' : 'Enregistrer'}
            </button>
          </div>
        </form>

        {/* Existing rules list */}
        <div className="mt-4">
          <h4 className="text-white/80 text-sm mb-2">Règles existantes</h4>
          <div className="space-y-2">
            {rules.length === 0 && (
              <div className="text-white/50 text-sm">Aucune règle pour ce mois.</div>
            )}
            {rules.map(r => (
              <div key={r.id} className="flex items-center justify-between bg-white/5 border border-white/10 rounded p-2 text-sm">
                <div className="text-white/80">
                  {new Date(r.startDate).toLocaleDateString('fr-FR')} → {new Date(r.endDate).toLocaleDateString('fr-FR')} · <span className="text-amber-300 font-semibold">€{r.pricePerDay}/jour</span>
                </div>
                <button onClick={() => deleteRule(r.id)} className="text-red-300 hover:text-red-200">Supprimer</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}