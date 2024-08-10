import { api } from '@/lib/axios.config.ts'

export async function getProfile(
  token: string,
): Promise<IGetUserProfileResponse> {
  const response = await api.get('user/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
