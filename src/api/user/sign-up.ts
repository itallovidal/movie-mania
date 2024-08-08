import { api } from '@/lib/axios.config.ts'
import { ISignUpSchema } from '@/pages/signUp.tsx'

export async function signUp(data: ISignUpSchema) {
  const response = await api.post('users/sign-up', data)

  if (response.status !== 201) {
    console.log(response.data)
    throw new Error(response.data.description)
  }

  return response.data
}
