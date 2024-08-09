import { api } from '@/lib/axios.config.ts'

export async function getUserCustomMovieList(
  token: string,
  listId: number,
): Promise<IGetCustomMovieListResponse> {
  const response = await api.get(`/list/me/${listId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
