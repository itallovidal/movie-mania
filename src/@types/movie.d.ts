interface IGenre {
  name: string
  id: number
}

interface IMovie {
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
    average: number
    ratingsCount: number
  }
  lists: {
    id: number
  }[]
}

interface IListSummary {
  name: string
  id: number
}

interface IComment {
  id: number
  created_at: string
  comment: string
  user: {
    rating: number | null
    name: string
  }
}

interface IRating {
  id: number
  movieId: number
  rating: number | null
}
