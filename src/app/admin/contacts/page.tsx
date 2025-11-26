'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { 
  MessageSquare, 
  Search,
  ArrowLeft,
  Eye,
  Trash2,
  Mail,
  Phone,
  Calendar
} from 'lucide-react'

interface ContactMessage {
  id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  createdAt: string
}

export default function AdminContactsPage() {
  const { isAuthenticated, isAdmin, isLoading } = useAuth()
  const router = useRouter()
  const [contacts, setContacts] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedContact, setSelectedContact] = useState<ContactMessage | null>(null)

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !isAdmin)) {
      router.push('/admin/login')
    }
  }, [isAuthenticated, isAdmin, isLoading, router])

  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      fetchContacts()
    }
  }, [isAuthenticated, isAdmin])

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/admin/contacts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setContacts(data.contacts)
      }
    } catch (error) {
      console.error('Échec de récupération des contacts:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteContact = async (contactId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce message de contact ?')) return
    
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/admin/contacts/${contactId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        setContacts(contacts.filter(contact => contact.id !== contactId))
      }
    } catch (error) {
      console.error('Échec de suppression du contact:', error)
    }
  }

  const filteredContacts = contacts.filter(contact => {
    const searchLower = searchTerm.toLowerCase()
    return contact.name.toLowerCase().includes(searchLower) ||
           contact.email.toLowerCase().includes(searchLower) ||
           contact.subject.toLowerCase().includes(searchLower)
  })

  if (isLoading) {
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
                className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <MessageSquare className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Messages de Contact</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="bg-white p-6 rounded-xl shadow-sm border mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher des contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Contacts Table */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sujet
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredContacts.map((contact) => (
                    <tr key={contact.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <Mail className="h-3 w-3 mr-1" />
                            {contact.email}
                          </div>
                          {contact.phone && (
                            <div className="text-sm text-gray-500 flex items-center">
                              <Phone className="h-3 w-3 mr-1" />
                              {contact.phone}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">{contact.subject}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedContact(contact)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => deleteContact(contact.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {filteredContacts.length === 0 && !loading && (
          <div className="text-center py-12">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun message de contact trouvé</h3>
            <p className="text-gray-500">Essayez d'ajuster votre recherche.</p>
          </div>
        )}
      </div>

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-900">Détails du Message de Contact</h3>
              <button
                onClick={() => setSelectedContact(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <p className="text-sm text-gray-900">{selectedContact.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <p className="text-sm text-gray-900">{selectedContact.email}</p>
              </div>
              {selectedContact.phone && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <p className="text-sm text-gray-900">{selectedContact.phone}</p>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <p className="text-sm text-gray-900">{selectedContact.subject}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedContact.message}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <p className="text-sm text-gray-900">{new Date(selectedContact.createdAt).toLocaleString()}</p>
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setSelectedContact(null)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Fermer
              </button>
              <a
                href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject}`}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-flex items-center"
              >
                <Mail className="h-4 w-4 mr-2" />
                Répondre
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}