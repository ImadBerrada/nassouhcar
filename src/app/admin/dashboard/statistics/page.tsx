'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { 
  ArrowLeft,
  BarChart3,
  PieChart,
  TrendingUp,
  Activity
} from 'lucide-react'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

interface AnalyticsData {
  monthlyRevenue: Array<{
    month: string
    revenue: number
    bookings: number
  }>
  popularCars: Array<{
    id: string
    brand: string
    model: string
    year: number
    bookingCount: number
    totalRevenue: number
  }>
  statusDistribution: Array<{
    status: string
    count: number
  }>
  userTypeDistribution: {
    guest: number
    registered: number
  }
  topCustomers: Array<{
    id: string
    name: string
    email: string
    bookingCount: number
    totalSpent: number
  }>
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export default function AdminStatisticsPage() {
  const { isAuthenticated, isAdmin, isLoading } = useAuth()
  const router = useRouter()
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [loadingAnalytics, setLoadingAnalytics] = useState(true)

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !isAdmin)) {
      router.push('/admin/login')
    }
  }, [isAuthenticated, isAdmin, isLoading, router])

  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      fetchAnalytics()
    }
  }, [isAuthenticated, isAdmin])

  const fetchAnalytics = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/admin/dashboard/analytics', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setAnalytics(data.analytics)
      }
    } catch (error) {
      console.error('Failed to fetch analytics:', error)
    } finally {
      setLoadingAnalytics(false)
    }
  }

  if (isLoading || loadingAnalytics) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!isAuthenticated || !isAdmin) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <button
                onClick={() => router.push('/admin/dashboard')}
                className="mr-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Statistiques Détaillées</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {analytics && (
          <div className="space-y-8">
            {/* Revenue and Booking Trends */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  Tendances des Revenus Mensuels
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={analytics.monthlyRevenue}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [
                      name === 'revenue' ? `${value} EUR` : value,
                      name === 'revenue' ? 'Revenus' : 'Réservations'
                    ]} />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stackId="1"
                      stroke="#8884d8"
                      fill="#8884d8"
                      name="Revenus (EUR)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-green-600" />
                  Tendances des Réservations Mensuelles
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={analytics.monthlyRevenue}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="bookings"
                      stroke="#82ca9d"
                      strokeWidth={3}
                      name="Réservations"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Status Distribution and User Types */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <PieChart className="h-5 w-5 mr-2 text-purple-600" />
                  Distribution des Statuts de Réservation
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={analytics.statusDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ status, percent }) => `${status} ${percent ? (percent * 100).toFixed(0) : 0}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {analytics.statusDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <PieChart className="h-5 w-5 mr-2 text-orange-600" />
                  Distribution des Types d&apos;Utilisateurs
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={[
                        { name: 'Invités', value: analytics.userTypeDistribution.guest },
                        { name: 'Utilisateurs Enregistrés', value: analytics.userTypeDistribution.registered }
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      <Cell fill="#0088FE" />
                      <Cell fill="#00C49F" />
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Popular Cars */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Voitures les Plus Populaires</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={analytics.popularCars}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="model" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [
                    name === 'totalRevenue' ? `${value} EUR` : value,
                    name === 'totalRevenue' ? 'Revenus Totaux' : 'Nombre de Réservations'
                  ]} />
                  <Legend />
                  <Bar dataKey="bookingCount" fill="#8884d8" name="Réservations" />
                  <Bar dataKey="totalRevenue" fill="#82ca9d" name="Revenus (EUR)" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Top Customers */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Meilleurs Clients</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Client
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Réservations
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total Dépensé
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {analytics.topCustomers.map((customer) => (
                      <tr key={customer.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {customer.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {customer.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {customer.bookingCount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {customer.totalSpent.toLocaleString()} EUR
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}