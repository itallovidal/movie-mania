import { http, HttpResponse } from 'msw'

export const getProfileMock = http.get('user/profile', async ({ request }) => {
  const token = request.headers.get('Authorization')

  if (!token) {
    return new HttpResponse('Token inválido ou inexistente.', {
      status: 401,
    })
  }

  return HttpResponse.json<IGetUserProfileResponse>(
    {
      profile: {
        name: 'Itallo Vidal',
        favoriteGenres: ['Ação', 'Aventura'],
      },
    },
    {
      status: 200,
    },
  )
})
