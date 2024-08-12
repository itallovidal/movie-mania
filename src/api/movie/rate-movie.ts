import { api } from '@/lib/axios.config.ts'

export interface IPostRating {
  token: string
  movieId: number
  rating: number
}

export async function rateMovie({
  movieId,
  token,
  rating,
}: IPostRating): Promise<IRateMovieResponse> {
  const response = await api.post(
    `movie/rating/${movieId}`,
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
