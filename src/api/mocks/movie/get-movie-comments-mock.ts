import { http, HttpResponse } from 'msw'

export const getMovieCommentsMock = http.get(
  '/movies/comment/*',
  async ({ params }) => {
    const id = params[0]

    if (!id) {
      return new HttpResponse('ID não fornecido', {
        status: 400,
      })
    }

    return HttpResponse.json<IGetMovieCommentsResponse>(
      {
        comments: [
          {
            id: 1,
            created_at: 'Há 1 hora',
            comment: 'Bom demais!',
            user: {
              rating: 5,
              name: 'Miguel',
            },
          },
          {
            id: 2,
            created_at: 'Há 1 hora',
            comment: 'Quero muito ver, estou ansioso!',
            user: {
              rating: null,
              name: 'Fábio',
            },
          },
        ],
      },
      {
        status: 200,
      },
    )
  },
)
