import { prisma } from './db'

export interface PriceRule {
  id: string
  carId: string
  startDate: Date
  endDate: Date
  pricePerDay: number
  createdAt: Date
  updatedAt: Date
}

// Check if we're running on the client side
const isClient = typeof window !== 'undefined'

// Fetch price rules overlapping a given range for a car
export async function fetchPriceRulesForRange(carId: string, start: Date, end: Date): Promise<PriceRule[]> {
  try {
    if (isClient) {
      // Client-side: use API endpoint
      const startStr = start.toISOString().split('T')[0]
      const endStr = end.toISOString().split('T')[0]
      const response = await fetch(`/api/price-rules?carId=${carId}&start=${startStr}&end=${endStr}`)
      
      if (!response.ok) {
        console.error('Failed to fetch price rules:', response.statusText)
        return []
      }
      
      const rules = await response.json()
      return rules.map((rule: {
        id: string
        carId: string
        startDate: string
        endDate: string
        pricePerDay: number
        createdAt: string
        updatedAt: string
      }) => ({
        ...rule,
        startDate: new Date(rule.startDate),
        endDate: new Date(rule.endDate),
        createdAt: new Date(rule.createdAt),
        updatedAt: new Date(rule.updatedAt)
      }))
    } else {
      // Server-side: use direct database access
      const rules = await prisma.priceRule.findMany({
        where: {
          carId,
          startDate: { lte: end },
          endDate: { gte: start }
        },
        orderBy: { createdAt: 'desc' }
      })
      return rules as unknown as PriceRule[]
    }
  } catch (e) {
    console.error('Error fetching price rules:', e)
    // Fallback if table not migrated yet or API error
    return [] as PriceRule[]
  }
}

// Calculate total price for a date range using rules when available
export async function calculateTotalPriceForRange(
  carId: string,
  start: Date,
  end: Date,
  fallbackPricePerDay: number,
  shortTermPricePerDay?: number | null
) {
  console.log('calculateTotalPriceForRange called with:', { carId, start, end, fallbackPricePerDay })
  
  const rules = await fetchPriceRulesForRange(carId, start, end)
  console.log('Fetched price rules:', rules)
  
  const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  if (days <= 0) return 0

  // Short-term pricing override for bookings less than 3 days
  if (days < 3 && shortTermPricePerDay && shortTermPricePerDay > 0) {
    return days * shortTermPricePerDay
  }

  // If no rules, fallback
  if (rules.length === 0) {
    console.log('No price rules found, using fallback price:', fallbackPricePerDay)
    return days * fallbackPricePerDay
  }

  // Build a map of date -> pricePerDay
  const dailyPrices: number[] = []
  for (let i = 0; i < days; i++) {
    const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i)
    const applicable = rules.filter((r: PriceRule) => d >= r.startDate && d <= r.endDate)
    if (applicable.length === 0) {
      dailyPrices.push(fallbackPricePerDay)
    } else {
      // If multiple rules overlap, choose the most recently created
      const chosen = applicable.sort((a: PriceRule, b: PriceRule) => b.createdAt.getTime() - a.createdAt.getTime())[0]
      console.log(`Day ${d.toISOString().split('T')[0]}: using price rule ${chosen.pricePerDay} (rule ID: ${chosen.id})`)
      dailyPrices.push(chosen.pricePerDay)
    }
  }

  const total = dailyPrices.reduce((sum, p) => sum + p, 0)
  console.log('Daily prices:', dailyPrices, 'Total:', total)
  return total
}
