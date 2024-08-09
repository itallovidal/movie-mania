import { api } from '@/lib/axios.config.ts'

export async function getMovieComments(
  movieId: number,
): Promise<IGetMovieCommentsResponse> {
  const response = await api.get(`movies/comment/${movieId}`)

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
