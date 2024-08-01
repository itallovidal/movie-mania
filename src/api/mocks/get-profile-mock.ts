import { http, HttpResponse } from 'msw'
import { IProfile } from '@/@types/IProfile.ts'

export const getProfileMock = http.get('users/profile', async ({ request }) => {
  const token = request.headers.get('Authorization')

  if (!token) {
    return new HttpResponse('Token inválido ou inexistente.', {
      status: 401,
    })
  }

  return HttpResponse.json<IProfile>(
    {
      name: 'Itallo Vidal',
      favoriteGenres: ['Ação', 'Aventura'],
    },
    {
      status: 200,
    },
  )
})
