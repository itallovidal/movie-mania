import { api } from '@/lib/axios.config.ts'
import { IComment } from '@/@types/IComment.ts'

export async function getMovieComments(movieId: number): Promise<IComment[]> {
  const response = await api.get(`movies/comments/${movieId}`)

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
