import { api } from '@/lib/axios.config.ts'

export interface IGetListsByMovieResponse {
  name: string
  id: number
}

export async function getListsByMovie(
  token: string,
  movieId: number,
): Promise<IGetListsByMovieResponse[]> {
  const response = await api.get(`/movie/lists/${movieId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data as IGetListsByMovieResponse
}
