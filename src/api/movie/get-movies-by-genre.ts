import { api } from '@/lib/axios.config.ts'

export async function getMoviesByGenre(
  genre: string,
): Promise<IGetMoviesByGenreResponse> {
  const response = await api.get(`movie/random/${genre}`)

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
