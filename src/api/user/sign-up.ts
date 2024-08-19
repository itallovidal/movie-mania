import { api } from '@/lib/axios.config.ts'
import { ISignUpSchema } from '@/pages/signUp.tsx'

export async function signUp(data: ISignUpSchema) {
  const response = await api.post('user/sign-up', data)

  if (response.status !== 201) {
    throw new Error(response.data.message)
  }

  return response.data
}
