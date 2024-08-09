import { api } from '@/lib/axios.config.ts'

interface IPostComment {
  token: string
  movieId: number
  comment: string
}

export async function postComment({
  movieId,
  token,
  comment,
}: IPostComment): Promise<IPostCommentResponse> {
  const response = await api.post(
    `movie/comment/${movieId}`,
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
