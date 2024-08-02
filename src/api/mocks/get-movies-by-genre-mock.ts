import { http, HttpResponse } from 'msw'
import { IMovie } from '@/@types/IMovie.ts'
import { MOVIES } from '@/api/mocks/objects/movie-mock.ts'

export const getMoviesByGenreMock = http.get(
  '/movies/random/*',
  async ({ params }) => {
    const genre = params[0]

    if (!genre) {
      return new HttpResponse('Gênero não fornecido', {
        status: 400,
      })
    }

    return HttpResponse.json<IMovie[]>(MOVIES[genre] as IMovie[], {
      status: 200,
    })
  },
)
