export interface IMovie {
  release_date: string
  poster_path: string
  id: number
  title: string
  overview: string
  genres: {
    id: number
    name: string
  }[]
  backdrop_path: string
  rating: {
    user: null | number
    average: number
    ratingsCount: number
  }
}
