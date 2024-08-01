import { http, HttpResponse } from 'msw'
import { ISignInSchema } from '@/pages/signIn.tsx'

export const signInMock = http.post<never, ISignInSchema>(
  'users/login',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'admin@gmail.com') {
      return new HttpResponse(
        JSON.stringify({
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        }),
        {
          status: 200,
        },
      )
    }

    return HttpResponse.json(
      {
        description: 'user not found',
        code: 404,
        error: 'Not Found',
      },
      {
        status: 404,
      },
    )
  },
)
