import { api } from '@/lib/axios.config.ts'

export async function getMovieRatingById(
  token: string,
  movieId: number,
): Promise<IRating> {
  const response = await api.get(`movies/rate/${movieId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
