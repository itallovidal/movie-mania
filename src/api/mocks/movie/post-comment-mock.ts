import { http, HttpResponse } from 'msw'
import { ICommentSchema } from '@/components/movie-modal/comment-section/comment-form.tsx'

export const postCommentMock = http.post<never, ICommentSchema>(
  'movie/comment/*',
  async ({ request }) => {
    const { text } = await request.json()

    const token = request.headers.get('Authorization')

    if (!token) {
      return new HttpResponse('Token inválido ou inexistente.', {
        status: 401,
      })
    }

    return HttpResponse.json<IPostCommentResponse>(
      {
        commentCreated: {
          id: 4,
          created_at: 'Há 1 hora.',
          comment: text,
          user: {
            rating: 4,
            name: 'admin',
          },
        },
      },
      {
        status: 200,
      },
    )
  },
)
