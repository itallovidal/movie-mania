import { http, HttpResponse } from 'msw'
import { IComment } from '@/@types/IComment.ts'
import { ICommentSchema } from '@/components/commentBox.tsx'

export const postCommentMock = http.post<never, ICommentSchema>(
  'movies/comment/*',
  async ({ request }) => {
    const { text } = await request.json()
    console.log('Comentário:')
    console.log(text)
    const token = request.headers.get('Authorization')

    if (!token) {
      return new HttpResponse('Token inválido ou inexistente.', {
        status: 401,
      })
    }

    return HttpResponse.json<IComment>(
      {
        id: 4,
        created_at: 'Há 1 hora.',
        comment: text,
        user: {
          rating: 4,
          name: 'admin',
        },
      },
      {
        status: 200,
      },
    )
  },
)