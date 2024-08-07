import { http, HttpResponse } from 'msw'
import { IList } from '@/@types/IList.ts'

export const getListsMock = http.get('/lists/userId', async ({ request }) => {
  const token = request.headers.get('Authorization')

  if (!token) {
    return new HttpResponse('Token inválido ou inexistente.', {
      status: 401,
    })
  }

  return HttpResponse.json<IList[]>(
    [
      {
        name: 'Filmes para ver dormindo.',
        id: 1,
      },
      {
        name: 'Filmes Preferidos',
        id: 2,
      },
    ],
    {
      status: 200,
    },
  )
})
