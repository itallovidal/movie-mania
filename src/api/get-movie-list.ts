import { api } from '@/lib/axios.config.ts'
import { IMovieList } from '@/IMovieList.ts'

export async function getMovieList(
  token: string,
  listId: number,
): Promise<IMovieList> {
  const response = await api.get(`lists/${listId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
