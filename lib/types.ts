export interface PG {
  id: string
  name: string
  city: string
  area: string
  image: string
  price: number
  rating: number
  reviewCount: number
  roomType: 'Single' | 'Double sharing' | 'Studio' | 'Co-living'
  gender: 'Any' | 'Men' | 'Women'
  amenities: string[]
  verified: boolean
}

export interface Review {
  id: string
  name: string
  location: string
  rating: number
  text: string
  initials: string
}
