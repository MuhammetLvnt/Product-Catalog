export interface Category {
  id: number
  name: string
  created_at?: string
}

export interface Product {
  author: string
  cover: string
  created_at: string
  description: string
  id: number
  name: string
  price: number
  sales: number
  slug: string
  likes_aggregate?: LikeAggregate
}

export interface LikeAggregate {
  aggregate?: Aggregate
}

export interface Aggregate {
  count?: number
}
