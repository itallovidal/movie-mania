import { api } from '@/lib/axios.config.ts'
import { IProfile } from '@/@types/IProfile.ts'

export async function getProfile(token: string): Promise<IProfile> {
  const response = await api.get('users/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
