import { ISignInSchema } from '@/pages/signIn.tsx'
import { api } from '@/lib/axios.config.ts'

export async function signIn(data: ISignInSchema) {
  const response = await api.post('users/login', data)

  if (response.status === 404) {
    console.log(response.data)
    throw new Error(response.data.description)
  }

  return response.data
}
