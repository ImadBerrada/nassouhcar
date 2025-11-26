'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { 
  Car, 
  Users, 
  Calendar, 
  MessageSquare, 
  TrendingUp, 
  Shield,
  LogOut,
  Plus,
  Eye,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react'
import {
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
  ResponsiveContainer
} from 'recharts'
import BookingCalendar from '@/components/admin/BookingCalendar'

interface DashboardStats {
  totalCars: number
  totalUsers: number
  totalBookings: number
  totalRevenue: number
  activeBookings: number
  pendingBookings: number
  contactMessages: number
}

interface AnalyticsData {
  monthlyRevenue: Array<{
    month: string
    revenue: number
    bookings: number
  }>
  popularCars: Array<{
    id: string
    make: string
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

export default function AdminDashboardPage() {
  const { user, logout, isAuthenticated, isAdmin, isLoading } = useAuth()
  const router = useRouter()
  const [stats, setStats] = useState<DashboardStats>({
    totalCars: 0,
    totalUsers: 0,
    totalBookings: 0,
    totalRevenue: 0,
    activeBookings: 0,
    pendingBookings: 0,
    contactMessages: 0
  })
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [loadingStats, setLoadingStats] = useState(true)
  const [loadingAnalytics, setLoadingAnalytics] = useState(true)

  // Add custom CSS for enhanced visual effects
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .custom-scrollbar {
        scrollbar-width: thin;
        scrollbar-color: rgba(59, 130, 246, 0.5) rgba(255, 255, 255, 0.1);
      }
      
      .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
        border-radius: 3px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #2563eb, #7c3aed);
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
        50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
      }
      
      @keyframes pulse-glow {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-glow {
        animation: glow 3s ease-in-out infinite;
      }
      
      .animate-pulse-glow {
        animation: pulse-glow 2s ease-in-out infinite;
      }
      
      .glass-effect {
        backdrop-filter: blur(20px);
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .glass-effect:hover {
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
      
      .gradient-border {
        position: relative;
        background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent);
        background-size: 200% 200%;
        animation: gradient-shift 3s ease infinite;
      }
      
      @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      .neon-text {
        text-shadow: 0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4);
      }
      
      .holographic {
        background: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b);
        background-size: 300% 300%;
        animation: holographic-shift 4s ease infinite;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      @keyframes holographic-shift {
        0%, 100% { background-position: 0% 50%; }
        25% { background-position: 100% 50%; }
        50% { background-position: 100% 100%; }
        75% { background-position: 0% 100%; }
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !isAdmin)) {
      router.push('/admin/login')
    }
  }, [isAuthenticated, isAdmin, isLoading, router])

  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      fetchDashboardStats()
      fetchAnalytics()
    }
  }, [isAuthenticated, isAdmin])

  const fetchDashboardStats = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/admin/dashboard/stats', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setStats(data.stats)
      }
    } catch (error) {
      console.error('Failed to fetch dashboard stats:', error)
    } finally {
      setLoadingStats(false)
    }
  }

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

  const handleLogout = () => {
    logout()
    router.push('/admin/login')
  }

  if (isLoading || loadingStats || loadingAnalytics) {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      {/* Header */}
      <div className="relative backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-2xl z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-8">
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-75"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-3xl font-bold holographic animate-pulse-glow">
                  Tableau de Bord Admin
                </h1>
                <p className="text-blue-200/80 text-sm mt-1 neon-text">Analyses Avancées et Gestion</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <span className="text-sm">Bienvenue, </span>
                <span className="font-semibold">{user?.name}</span>
              </div>
              <button
                onClick={() => router.push('/admin/dashboard/statistics')}
                className="group relative flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <BarChart3 className="h-4 w-4 mr-2 relative z-10" />
                <span className="relative z-10">Statistiques</span>
              </button>
              <button
                onClick={handleLogout}
                className="group relative flex items-center px-6 py-3 text-sm font-medium text-white/90 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <LogOut className="h-4 w-4 mr-2" />
                <span>Déconnexion</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl blur opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-xl">
                    <Car className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-blue-200/80 font-medium">Total Voitures</p>
                  <p className="text-3xl font-bold text-white mt-1">
                    {loadingStats ? (
                      <span className="animate-pulse">...</span>
                    ) : (
                      <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                        {stats.totalCars}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl blur opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-emerald-500 to-green-500 p-4 rounded-xl">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-emerald-200/80 font-medium">Total Utilisateurs</p>
                  <p className="text-3xl font-bold text-white mt-1">
                    {loadingStats ? (
                      <span className="animate-pulse">...</span>
                    ) : (
                      <span className="bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                        {stats.totalUsers}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl blur opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-purple-200/80 font-medium">Total Réservations</p>
                  <p className="text-3xl font-bold text-white mt-1">
                    {loadingStats ? (
                      <span className="animate-pulse">...</span>
                    ) : (
                      <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                        {stats.totalBookings}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Analytics Charts */}
        {analytics && (
          <div className="mb-12">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
              <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent mb-2">Analyses et Insights</h2>
                <p className="text-white/70">Métriques de performance en temps réel et intelligence d'affaires</p>
              </div>
            </div>
            
            {/* Revenue and Bookings Trend */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Tendance du Chiffre d'Affaires Mensuel</h3>
                      <p className="text-emerald-200/80 text-sm">Suivez votre croissance financière</p>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl blur opacity-75"></div>
                      <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-xl">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={320}>
                    <AreaChart data={analytics.monthlyRevenue}>
                      <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                      <XAxis dataKey="month" stroke="#ffffff80" fontSize={12} />
                      <YAxis stroke="#ffffff80" fontSize={12} />
                      <Tooltip 
                        formatter={(value) => [`€${value}`, 'Chiffre d\'Affaires']} 
                        contentStyle={{
                          backgroundColor: 'rgba(0, 0, 0, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '12px',
                          color: 'white'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#10b981" 
                        strokeWidth={3}
                        fill="url(#revenueGradient)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Réservations Mensuelles</h3>
                      <p className="text-blue-200/80 text-sm">Surveillez le volume de réservations</p>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl blur opacity-75"></div>
                      <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={320}>
                    <BarChart data={analytics.monthlyRevenue}>
                      <defs>
                        <linearGradient id="bookingsGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={1}/>
                          <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.8}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                      <XAxis dataKey="month" stroke="#ffffff80" fontSize={12} />
                      <YAxis stroke="#ffffff80" fontSize={12} />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'rgba(0, 0, 0, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '12px',
                          color: 'white'
                        }}
                      />
                      <Bar 
                        dataKey="bookings" 
                        fill="url(#bookingsGradient)" 
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            {/* Status Distribution and User Types */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Répartition des Statuts de Réservation</h3>
                      <p className="text-purple-200/80 text-sm">Statuts de réservation actuels</p>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl blur opacity-75"></div>
                      <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                        <PieChart className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={320}>
                    <RechartsPieChart>
                      <Pie
                        data={analytics.statusDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={90}
                        innerRadius={40}
                        fill="#8884d8"
                        dataKey="count"
                        label={({ status, count }) => `${status}: ${count}`}
                        labelLine={false}
                      >
                        {analytics.statusDistribution.map((entry, index) => {
                          const colors = ['#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
                          return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        })}
                      </Pie>
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'rgba(0, 0, 0, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '12px',
                          color: 'white'
                        }}
                      />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Répartition des Types d'Utilisateurs</h3>
                      <p className="text-indigo-200/80 text-sm">Utilisateurs enregistrés vs invités</p>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-xl blur opacity-75"></div>
                      <div className="relative bg-gradient-to-r from-indigo-500 to-blue-500 p-3 rounded-xl">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={320}>
                    <RechartsPieChart>
                      <Pie
                        data={[
                          { name: 'Utilisateurs Enregistrés', value: analytics.userTypeDistribution.registered },
                          { name: 'Utilisateurs Invités', value: analytics.userTypeDistribution.guest }
                        ]}
                        cx="50%"
                        cy="50%"
                        outerRadius={90}
                        innerRadius={40}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}`}
                        labelLine={false}
                      >
                        <Cell fill="#3b82f6" />
                        <Cell fill="#f59e0b" />
                      </Pie>
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'rgba(0, 0, 0, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '12px',
                          color: 'white'
                        }}
                      />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            {/* Popular Cars and Top Customers */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Voitures les Plus Populaires</h3>
                      <p className="text-blue-200/80 text-sm">Véhicules les plus performants</p>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl blur opacity-75"></div>
                      <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl">
                        <Car className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar">
                    {analytics.popularCars.slice(0, 5).map((car, index) => (
                      <div key={car.id} className="group/item relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur opacity-75"></div>
                                <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold text-white mr-4">
                                  {index + 1}
                                </div>
                              </div>
                              <div>
                                <p className="font-semibold text-white">{car.make} {car.model}</p>
                                <p className="text-sm text-blue-200/70">{car.year}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-white">{car.bookingCount} réservations</p>
                              <p className="text-sm text-emerald-400">€{car.totalRevenue.toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Meilleurs Clients</h3>
                      <p className="text-emerald-200/80 text-sm">Clients les plus précieux</p>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl blur opacity-75"></div>
                      <div className="relative bg-gradient-to-r from-emerald-500 to-green-500 p-3 rounded-xl">
                        <Activity className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar">
                    {analytics.topCustomers.slice(0, 5).map((customer, index) => (
                      <div key={customer.id} className="group/item relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full blur opacity-75"></div>
                                <div className="relative bg-gradient-to-r from-emerald-500 to-green-500 rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold text-white mr-4">
                                  {index + 1}
                                </div>
                              </div>
                              <div>
                                <p className="font-semibold text-white">{customer.name}</p>
                                <p className="text-sm text-emerald-200/70">{customer.email}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-white">{customer.bookingCount} réservations</p>
                              <p className="text-sm text-emerald-400">€{customer.totalSpent.toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Booking Calendar */}
        <div className="mb-12">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
            <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent mb-2">Calendrier des Réservations</h2>
              <p className="text-white/70">Vue complète de toutes les réservations et leurs détails</p>
            </div>
          </div>
          
          <div className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 p-8">
              <BookingCalendar />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Management Links */}
          <div className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl opacity-50"></div>
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white ml-4">Gestion</h2>
              </div>
              <div className="space-y-4">
                <button
                  onClick={() => router.push('/admin/cars')}
                  className="group/btn w-full relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg blur opacity-75"></div>
                        <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                          <Car className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <span className="font-semibold text-white ml-4">Gérer les Voitures</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-cyan-300 font-medium">{stats.totalCars} voitures</span>
                      <Plus className="h-4 w-4 text-cyan-400 group-hover/btn:rotate-90 transition-transform duration-300" />
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => router.push('/admin/bookings')}
                  className="group/btn w-full relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-lg blur opacity-75"></div>
                        <div className="relative bg-gradient-to-r from-emerald-500 to-green-500 p-2 rounded-lg">
                          <Calendar className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <span className="font-semibold text-white ml-4">Gérer les Réservations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-emerald-300 font-medium">{stats.pendingBookings} pending</span>
                      <Eye className="h-4 w-4 text-emerald-400 group-hover/btn:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => router.push('/admin/users')}
                  className="group/btn w-full relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg blur opacity-75"></div>
                        <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <span className="font-semibold text-white ml-4">Gérer les Utilisateurs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-purple-300 font-medium">{stats.totalUsers} utilisateurs</span>
                      <Eye className="h-4 w-4 text-purple-400 group-hover/btn:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => router.push('/admin/contacts')}
                  className="group/btn w-full relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg blur opacity-75"></div>
                        <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                          <MessageSquare className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <span className="font-semibold text-white ml-4">Messages de Contact</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-orange-300 font-medium">{stats.contactMessages} messages</span>
                      <Eye className="h-4 w-4 text-orange-400 group-hover/btn:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl opacity-50"></div>
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-xl blur opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-emerald-500 to-blue-500 p-3 rounded-xl">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white ml-4">Quick Stats</h2>
              </div>
              <div className="space-y-6">
                <div className="group/stat relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg blur opacity-75"></div>
                          <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                            <TrendingUp className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <span className="font-semibold text-white ml-4">Active Bookings</span>
                      </div>
                      <span className="text-3xl font-bold text-cyan-400 group-hover/stat:scale-110 transition-transform duration-300">{stats.activeBookings}</span>
                    </div>
                  </div>
                </div>
                
                <div className="group/stat relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur opacity-75"></div>
                          <div className="relative bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg">
                            <Calendar className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <span className="font-semibold text-white ml-4">Pending Bookings</span>
                      </div>
                      <span className="text-3xl font-bold text-orange-400 group-hover/stat:scale-110 transition-transform duration-300">{stats.pendingBookings}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}