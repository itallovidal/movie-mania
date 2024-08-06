import { api } from '@/lib/axios.config.ts'

export interface IPostRating {
  token: string
  movieId: number
  rating: number
}

export async function postRating({
  movieId,
  token,
  rating,
}: IPostRating): Promise<void> {
  const response = await api.post(
    `movies/rate/${movieId}`,
    {
      rating,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
