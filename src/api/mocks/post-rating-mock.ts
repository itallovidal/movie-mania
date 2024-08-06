import { http, HttpResponse } from 'msw'
import { IPostRating } from '@/api/rate-movie.ts'

export const postRatingMock = http.post(
  'movies/rate/*',
  async ({ request }) => {
    const token = request.headers.get('Authorization')
    const payload = (await request.json()) as IPostRating

    if (!token) {
      return new HttpResponse('Token inválido ou inexistente.', {
        status: 401,
      })
    }

    return new HttpResponse(
      JSON.stringify({
        created: {
          id: payload.movieId,
          rating: payload.rating,
        },
      }),
      {
        status: 201,
      },
    )
  },
)
