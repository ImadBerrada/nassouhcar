import React from 'react';
import { X, Mail, User, Calendar, Hash, Briefcase, Phone, Car } from 'lucide-react';

interface UserDetailModalProps {
  user: {
    id: string;
    name: string;
    email: string;
    role: 'USER' | 'ADMIN';
    createdAt: string;
    phone?: string;
    _count?: { bookings: number };
  } | null;
  onClose: () => void;
}

const UserDetailModal: React.FC<UserDetailModalProps> = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Détails de l'Utilisateur</h2>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <Hash className="h-5 w-5 text-gray-500 mr-3" />
            <p className="text-gray-700"><span className="font-semibold">ID:</span> {user.id}</p>
          </div>
          <div className="flex items-center">
            <User className="h-5 w-5 text-gray-500 mr-3" />
            <p className="text-gray-700"><span className="font-semibold">Nom:</span> {user.name}</p>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-gray-500 mr-3" />
            <p className="text-gray-700"><span className="font-semibold">Email:</span> {user.email}</p>
          </div>
          {user.phone && (
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-500 mr-3" />
              <p className="text-gray-700"><span className="font-semibold">Téléphone:</span> {user.phone}</p>
            </div>
          )}
          <div className="flex items-center">
            <Briefcase className="h-5 w-5 text-gray-500 mr-3" />
            <p className="text-gray-700"><span className="font-semibold">Rôle:</span> {user.role}</p>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-gray-500 mr-3" />
            <p className="text-gray-700"><span className="font-semibold">Créé le:</span> {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
          {user._count?.bookings !== undefined && (
            <div className="flex items-center">
              <Car className="h-5 w-5 text-gray-500 mr-3" />
              <p className="text-gray-700"><span className="font-semibold">Réservations:</span> {user._count.bookings}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetailModal;