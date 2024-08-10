import { http, HttpResponse } from 'msw'
import { IListSchema } from '@/components/movie-modal/movie-details/custom-list-visualizer.tsx'

interface IRemoveMovieFromListRequest {
  list: IListSchema
  movieId: number
}

export const removeMovieFromListMock = http.post<
  never,
  IRemoveMovieFromListRequest
>('/list/movie/remove', async ({ request }) => {
  const token = request.headers.get('Authorization')
  const payload = await request.json()

  if (!token) {
    return new HttpResponse('Token inválido ou inexistente.', {
      status: 401,
    })
  }

  return HttpResponse.json<IRemoveMovieFromListResponse>(
    {
      selectedList: {
        id: payload.list.id!,
        name: payload.list.name,
      },
      movieRemoved: payload.movieId,
    },
    {
      status: 201,
    },
  )
})
