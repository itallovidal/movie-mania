import { api } from '@/lib/axios.config.ts'
import { IComment } from '@/@types/IComment.ts'

interface IPostComment {
  token: string
  movieId: number
  comment: string
}

export async function postComment({
  movieId,
  token,
  comment,
}: IPostComment): Promise<IComment> {

  const response = await api.post(
    `movies/comment/${movieId}`,
    {
      text: comment,
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
