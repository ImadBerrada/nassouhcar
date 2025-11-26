const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function createAdmin() {
  try {
    // Check if admin already exists
    const existingAdmin = await prisma.user.findFirst({
      where: {
        role: 'ADMIN'
      }
    })

    if (existingAdmin) {
      console.log('Admin user already exists:', existingAdmin.email)
      return
    }

    // Create admin user
    const adminEmail = 'contact@nassohcar.com'
    const adminPassword = 'nassouh2025tangier'
    const hashedPassword = await bcrypt.hash(adminPassword, 10)

    const admin = await prisma.user.create({
      data: {
        email: adminEmail,
        name: 'Admin User',
        password: hashedPassword,
        role: 'ADMIN',
        phone: '+1234567890'
      }
    })

    console.log('Admin user created successfully!')
    console.log('Email:', admin.email)
    console.log('Password:', adminPassword)
    console.log('Please change the password after first login!')
    
  } catch (error) {
    console.error('Error creating admin user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createAdmin()