import { http, HttpResponse } from 'msw'
import { IListSchema } from '@/components/movie-modal/movie-details/add-to-list.tsx'

interface IRemoveMovieFromListRequest {
  list: IListSchema
  movieId: number
}

export const removeMovieFromListMock = http.post<
  never,
  IRemoveMovieFromListRequest
>('/lists/movies/remove', async ({ request }) => {
  const token = request.headers.get('Authorization')
  const payload = await request.json()

  if (!token) {
    return new HttpResponse('Token inválido ou inexistente.', {
      status: 401,
    })
  }

  return new HttpResponse(
    JSON.stringify({
      listRemoved: {
        id: payload.list.id,
        name: payload.list.name,
      },
    }),
    {
      status: 201,
    },
  )
})
