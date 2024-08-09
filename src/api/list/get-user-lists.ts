import { api } from '@/lib/axios.config.ts'

export async function getUserLists(
  token: string,
): Promise<IGetUserMovieListsResponse> {
  const response = await api.get('/list', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
