import { http, HttpResponse } from 'msw'

export const getMovieRatingByIdMock = http.get('movies/rate/*', async () => {
  return HttpResponse.json<IRating>(
    {
      id: 31203,
      rating: null,
    },
    {
      status: 200,
    },
  )
})
