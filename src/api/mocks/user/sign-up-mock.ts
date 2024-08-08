import { http, HttpResponse } from 'msw'
import { ISignUpSchema } from '@/pages/signUp.tsx'

export const signUpMock = http.post<never, ISignUpSchema>(
  'users/sign-up',
  async ({ request }) => {
    const { email, username } = await request.json()

    if (email === 'admin@gmail.com' && username === 'admin') {
      return new HttpResponse(null, {
        status: 201,
      })
    }

    return HttpResponse.json(
      {
        description: 'Usuário não pôde ser criado.',
        code: 500,
        error: 'Internal Server Error',
      },
      {
        status: 500,
      },
    )
  },
)
