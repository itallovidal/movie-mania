import { http, HttpResponse } from 'msw'

export const rateMovieMock = http.post(
  'movie/rate/*',
  async ({ request, params }) => {
    const token = request.headers.get('Authorization')
    const payload = (await request.json()) as { rating: number }
    const movieId = Number(params[0])

    if (!token) {
      return new HttpResponse('Token inválido ou inexistente.', {
        status: 401,
      })
    }

    return new HttpResponse(
      JSON.stringify({
        created: {
          id: Math.random(),
          rating: payload.rating,
          movieId,
        },
      }),
      {
        status: 201,
      },
    )
  },
)
