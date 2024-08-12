import { api } from '@/lib/axios.config.ts'

export async function getUserRatingByMovieId(
  token: string | null,
  movieId: number,
): Promise<IGetUserRatingByMovieIdResponse> {
  if (!token) throw new Error('Token não inválido.')

  const response = await api.get(`movie/rating/${movieId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
