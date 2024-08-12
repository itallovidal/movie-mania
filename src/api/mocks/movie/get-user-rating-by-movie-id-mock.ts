import { http, HttpResponse } from 'msw'

export const getUserRatingByMovieIdMock = http.get(
  'movie/rating/*',
  async () => {
    return new HttpResponse<IGetUserRatingByMovieIdResponse>(
      JSON.stringify({
        rating: {
          id: 31203,
          movieId: 1,
          rating: 4,
        },
      }),
      {
        status: 200,
      },
    )
  },
)
