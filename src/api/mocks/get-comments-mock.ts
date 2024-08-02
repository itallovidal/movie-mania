import { http, HttpResponse } from 'msw'
import { IComment } from '@/@types/IComment.ts'

export const getCommentsMock = http.get(
  '/movies/comments/*',
  async ({ params }) => {
    const id = params[0]

    if (!id) {
      return new HttpResponse('ID não fornecido', {
        status: 400,
      })
    }

    return HttpResponse.json<IComment[]>(
      [
        {
          id: 1,
          created_at: '21/05/10',
          text: 'Bom demais esse filme!',
          rating: 4,
          name: 'Thaissa',
        },
        {
          id: 2,
          created_at: '22/06/10',
          text: 'Achei meio chato..',
          rating: 2,
          name: 'Pedro',
        },
      ],
      {
        status: 200,
      },
    )
  },
)
