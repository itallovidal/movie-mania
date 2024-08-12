import { api } from '@/lib/axios.config.ts'
import { IListSchema } from '@/components/movie-modal/movie-details/custom-list-visualizer.tsx'

interface IRemoveMovieFromList {
  list: IListSchema
  movieId: number
  token: string
}

export async function removeMovieFromList({
  token,
  list,
  movieId,
}: IRemoveMovieFromList): Promise<IRemoveMovieFromListResponse> {
  const response = await api.post(
    '/list/movie/remove',
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
