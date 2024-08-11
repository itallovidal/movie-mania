import { http, HttpResponse } from 'msw'

export const getUserLists = http.get('/list', async ({ request }) => {
  const token = request.headers.get('Authorization')

  if (!token) {
    return new HttpResponse('Token inválido ou inexistente.', {
      status: 401,
    })
  }

  return HttpResponse.json<IGetUserMovieListsResponse>(
    {
      userLists: [
        {
          name: 'Filmes para ver dormindo.',
          id: 1,
        },
      ],
    },
    {
      status: 200,
    },
  )
})
