import { api } from '@/lib/axios.config.ts'

export async function getGenres(): Promise<IGenre[]> {
  const response = await api.get('/movie/genres')

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
