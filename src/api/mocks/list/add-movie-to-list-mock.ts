import { http, HttpResponse } from 'msw'
import { IListSchema } from '@/components/movie-modal/movie-details/custom-list-visualizer.tsx'

interface IAddMovieToListRequest {
  list: IListSchema
  movieId: number
}

export const addMovieToListMock = http.post<never, IAddMovieToListRequest>(
  '/list/movie/add',
  async ({ request }) => {
    const token = request.headers.get('Authorization')
    const payload = await request.json()

    if (!token) {
      return new HttpResponse('Token inválido ou inexistente.', {
        status: 401,
      })
    }

    return HttpResponse.json<IAddMovieToListResponse>(
      {
        listAdded: {
          id: payload.list.id === null ? Math.random() * 100 : payload.list.id,
          name: payload.list.name,
        },
        movieAdded: payload.movieId,
      },
      {
        status: 201,
      },
    )
  },
)
