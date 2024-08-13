import { ISignInSchema } from '@/pages/signIn.tsx'
import { api } from '@/lib/axios.config.ts'

export async function signIn(data: ISignInSchema) {
  const response = await api.post('user/login', data)

  if (response.status !== 200) {
    console.log(response)
    throw new Error(response.data.message)
  }

  return response.data
}
