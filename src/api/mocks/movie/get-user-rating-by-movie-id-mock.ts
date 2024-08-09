import { http, HttpResponse } from 'msw'

export const getUserRatingByMovieIdMock = http.get('movie/rate/*', async () => {
  return HttpResponse.json<IGetUserRatingByMovieIdResponse>(
    {
      rating: {
        id: 31203,
        movieId: 1,
        rating: null,
      },
    },
    {
      status: 200,
    },
  )
})
