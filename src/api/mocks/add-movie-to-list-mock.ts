import { http, HttpResponse } from 'msw'
import { IListSchema } from '@/components/movie-modal/add-to-list.tsx'

interface IAddMovieToListRequest {
  list: IListSchema
  movieId: number
}

export const addMovieToListMock = http.post<never, IAddMovieToListRequest>(
  '/lists/movies/add',
  async ({ request }) => {
    const token = request.headers.get('Authorization')
    const payload = await request.json()

    console.log(payload)

    if (!token) {
      return new HttpResponse('Token inválido ou inexistente.', {
        status: 401,
      })
    }

    return new HttpResponse(
      JSON.stringify({
        listAdded: {
          id: payload.list.id === null ? 3 : payload.list.id,
          name: payload.list.name,
        },
      }),
      {
        status: 201,
      },
    )
  },
)
