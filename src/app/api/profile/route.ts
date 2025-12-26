import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { verifyToken, hashPassword, verifyPassword } from '@/lib/auth'

export async function PUT(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '')

    if (!token) {
      return NextResponse.json(
        { message: 'Non autorisé' },
        { status: 401 }
      )
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json(
        { message: 'Session invalide' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { name, phone, currentPassword, newPassword } = body

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId }
    })

    if (!user) {
      return NextResponse.json(
        { message: 'Utilisateur non trouvé' },
        { status: 404 }
      )
    }

    // Prepare update data
    const updateData: any = {
      name,
      phone
    }

    // Handle password change if requested
    if (newPassword) {
      if (!currentPassword) {
        return NextResponse.json(
          { message: 'Le mot de passe actuel est requis pour changer de mot de passe' },
          { status: 400 }
        )
      }

      const isValidPassword = await verifyPassword(currentPassword, user.password)
      if (!isValidPassword) {
        return NextResponse.json(
          { message: 'Mot de passe actuel incorrect' },
          { status: 400 }
        )
      }

      updateData.password = await hashPassword(newPassword)
    }

    // Update user
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true
      }
    })

    return NextResponse.json({
      message: 'Profil mis à jour avec succès',
      user: updatedUser
    })

  } catch (error) {
    console.error('Profile update error:', error)
    return NextResponse.json(
      { message: 'Une erreur est survenue lors de la mise à jour du profil' },
      { status: 500 }
    )
  }
}
