import { api } from '@/lib/axios.config.ts'

export interface ISearchMovieRequest {
  token: string
  title: number
}

export async function searchMovie({
  title,
  token,
}: ISearchMovieRequest): Promise<ISearchedMovieResponse> {
  const response = await api.get(`movie/search/${title}`, {
    headers: {
      Authorization: token && `Bearer ${token}`,
    },
  })

  if (response.status === 500) {
    throw new Error(response.data.message)
  }

  return response.data
}
