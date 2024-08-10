import { api } from '@/lib/axios.config.ts'
import { IListSchema } from '@/components/movie-modal/movie-details/custom-list-visualizer.tsx'

interface IAddMovieToListRequest {
  list: IListSchema
  movieId: number
  token: string
}

export async function addMovieToList({
  token,
  list,
  movieId,
}: IAddMovieToListRequest): Promise<IAddMovieToListResponse> {
  const response = await api.post(
    '/list/movie/add',
    {
      list,
      movieId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
