import { api } from '@/lib/axios.config.ts'

export async function getUserRatingByMovieId(
  token: string,
  movieId: number,
): Promise<IGetUserRatingByMovieIdResponse> {
  const response = await api.get(`movie/rate/${movieId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
