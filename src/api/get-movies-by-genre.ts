import { api } from '@/lib/axios.config.ts'
import { IMovie } from '@/@types/IMovie.ts'

export async function getMoviesByGenre(genre: number): Promise<IMovie[]> {
  const response = await api.get(`movies/random/${genre}`)

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
