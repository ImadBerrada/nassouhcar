const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function seedCars() {
  try {
    // Check if cars already exist
    const existingCars = await prisma.car.count()
    
    if (existingCars > 0) {
      console.log(`${existingCars} cars already exist in the database.`)
      console.log('Skipping seeding to avoid duplicates.')
      return
    }

    const cars = [
      {
        name: 'DACIA SANDERO STEPWAY',
        brand: 'Dacia',
        model: 'Sandero Stepway',
        year: 2023,
        category: 'SUV',
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        seats: 5,
        pricePerDay: 35.00,
        image: '/cars/DACIA SANDERO STEPWAY.avif',
        description: 'A versatile and reliable SUV perfect for city driving and weekend adventures.',
        features: [
          'Air Conditioning',
          'Bluetooth Connectivity',
          'USB Ports',
          'Electric Windows',
          'Central Locking',
          'ABS Brakes',
          'Airbags',
          'GPS Navigation'
        ],
        available: true
      },
      {
        name: 'PEUGEOT 208',
        brand: 'Peugeot',
        model: '208',
        year: 2022,
        category: 'Sport',
        transmission: 'Manual',
        fuelType: 'Diesel',
        seats: 5,
        pricePerDay: 30.00,
        image: '/cars/peugeot.png',
        description: 'A stylish and efficient compact car with excellent fuel economy.',
        features: [
          'Air Conditioning',
          'Bluetooth',
          'USB Connectivity',
          'Electric Windows',
          'Central Locking',
          'ABS',
          'Multiple Airbags',
          'Cruise Control'
        ],
        available: true
      },
      {
        name: 'DACIA LOGAN',
        brand: 'Dacia',
        model: 'Logan',
        year: 2023,
        category: 'Sedan',
        transmission: 'Manual',
        fuelType: 'Diesel',
        seats: 5,
        pricePerDay: 30.00,
        image: '/cars/DACIA LOGAN.png',
        description: 'A practical and economical sedan ideal for long-distance travel.',
        features: [
          'Air Conditioning',
          'Radio/CD Player',
          'Electric Windows',
          'Central Locking',
          'ABS Brakes',
          'Driver Airbag',
          'Large Trunk Space',
          'Fuel Efficient'
        ],
        available: true
      },
      {
        name: 'TOYOTA YARIS',
        brand: 'Toyota',
        model: 'Yaris',
        year: 2023,
        category: 'Compact',
        transmission: 'Manual',
        fuelType: 'Gasoline',
        seats: 5,
        pricePerDay: 25.00,
        image: '/cars/TOYOTA YARIS.avif',
        description: 'A reliable and fuel-efficient compact car perfect for city driving.',
        features: [
          'Air Conditioning',
          'Bluetooth Connectivity',
          'USB Ports',
          'Electric Windows',
          'Central Locking',
          'ABS Brakes',
          'Multiple Airbags',
          'Toyota Safety Sense'
        ],
        available: true
      },
      {
        name: 'PREMIUM SEDAN',
        brand: 'Mercedes',
        model: 'C-Class',
        year: 2023,
        category: 'Luxury',
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        seats: 5,
        pricePerDay: 65.00,
        image: '/cars/ade6c485-540a-48b3-8192-5938e9146e61.jpg',
        description: 'A luxury sedan offering premium comfort and advanced features.',
        features: [
          'Leather Seats',
          'Climate Control',
          'Premium Sound System',
          'Navigation System',
          'Sunroof',
          'Heated Seats',
          'Advanced Safety Features',
          'Wireless Charging'
        ],
        available: true
      }
    ]

    console.log('Starting to seed cars...')
    
    for (const carData of cars) {
      const car = await prisma.car.create({
        data: carData
      })
      console.log(`✅ Created car: ${car.name} (${car.brand} ${car.model})`)
    }

    console.log(`\n🎉 Successfully seeded ${cars.length} cars!`)
    console.log('Cars are now available in your fleet.')
    
  } catch (error) {
    console.error('❌ Error seeding cars:', error)
  } finally {
    await prisma.$disconnect()
  }
}

seedCars()