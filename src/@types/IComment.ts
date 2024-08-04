export interface IComment {
  id: number
  created_at: string
  comment: string
  user: {
    rating: number | null
    name: string
  }
}
