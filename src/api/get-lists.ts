import { api } from '@/lib/axios.config.ts'
import { IList } from '@/@types/IList.ts'

export async function getLists(token: string): Promise<IList[]> {
  const response = await api.get('/lists', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
