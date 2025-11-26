'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import UserDetailModal from '@/components/UserDetailModal'
import CreateUserModal from '@/components/CreateUserModal'
import { 
  Users, 
  Search,
  ArrowLeft,
  Eye,
  Trash2,
  Edit,
  X
} from 'lucide-react'

interface User {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
  createdAt: string;
  phone?: string;

  _count?: {
    bookings: number;
  };
}

interface NewUserData {
  name: string;
  email: string;
  password?: string;
  role: 'USER' | 'ADMIN';
}



export default function AdminUsersPage() {
  const { isAuthenticated, isAdmin, isLoading } = useAuth();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState<'' | 'USER' | 'ADMIN'>('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isCreatingUser, setIsCreatingUser] = useState(false);

  const handleCreateUser = async (userData: NewUserData) => {
    setIsCreatingUser(true);
    try {
      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Échec de création de l\'utilisateur');
      }
      setIsCreateModalOpen(false);
      fetchUsers();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsCreatingUser(false);
    }
  };

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !isAdmin)) {
      router.push('/admin/login')
    }
  }, [isAuthenticated, isAdmin, isLoading, router])

  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      fetchUsers()
    }
  }, [isAuthenticated, isAdmin])

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/admin/users', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Échec de récupération des utilisateurs');
      }
      const data = await response.json();
      setUsers(data.users || []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };



  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      return;
    }
    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Échec de suppression de l\'utilisateur');
      }
      fetchUsers();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

  const handleViewUser = (user: User) => {
    setSelectedUser(user)
  }

  const handleCloseModal = () => {
    setSelectedUser(null)
    setIsCreateModalOpen(false)
  }



  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = !filterRole || user.role === filterRole
    return matchesSearch && matchesRole
  })

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
                className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Gestion des Utilisateurs</h1>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Ajouter un Utilisateur
            </button>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Erreur:</strong>
            <span className="block sm:inline"> {error}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <X onClick={() => setError(null)} className="h-6 w-6 text-red-500 cursor-pointer" />
            </span>
          </div>
        )}
        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm border mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher des utilisateurs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="md:w-48">
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value as '' | 'USER' | 'ADMIN')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Tous les Rôles</option>
                <option value="USER">Utilisateur</option>
                <option value="ADMIN">Administrateur</option>
              </select>
            </div>
          </div>
        </div>

        {/* Users Table */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      Aucun utilisateur trouvé.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleViewUser(user)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => {
                        // Placeholder for edit functionality
                        alert('Fonctionnalité de modification pas encore implémentée');
                      }}
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                    >
                      <Edit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            </div>
          </div>
        )}

        {selectedUser && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Détails de l'Utilisateur</h2>
                <button onClick={() => setSelectedUser(null)} className="text-gray-500 hover:text-gray-700">
                  <X className="h-6 w-6" />
                </button>
              </div>
              {selectedUser && (
                <div className="space-y-3">
                  <p className="text-gray-700"><span className="font-semibold">Nom:</span> {selectedUser.name}</p>
                  <p className="text-gray-700"><span className="font-semibold">Email:</span> {selectedUser.email}</p>
                  <p className="text-gray-700"><span className="font-semibold">Rôle:</span> {selectedUser.role}</p>
                  <p className="text-gray-700"><span className="font-semibold">Membre depuis:</span> {new Date(selectedUser.createdAt).toLocaleDateString()}</p>
                  <p className="text-gray-700"><span className="font-semibold">Réservations:</span> {selectedUser._count?.bookings || 0}</p>
                </div>
              )}
            </div>
          </div>
        )}


      </div>
      <UserDetailModal user={selectedUser} onClose={handleCloseModal} />
      <CreateUserModal
        isOpen={isCreateModalOpen}
        onClose={handleCloseModal}
        onCreateUser={handleCreateUser}
        isLoading={isCreatingUser}
      />
    </div>
  )
}