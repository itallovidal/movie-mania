export interface IMovie {
  release_date: string
  poster_path: string
  vote_average: number
  id: number
  title: string
  overview: string
  genres: {
    id: number
    name: string
  }[]
  backdrop_path: string
}
