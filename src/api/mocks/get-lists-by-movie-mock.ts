import { http, HttpResponse } from 'msw'

export const getListsByMovieMock = http.get(
  '/movie/lists/*',
  async ({ request }) => {
    const token = request.headers.get('Authorization')

    if (!token) {
      return new HttpResponse('Token inválido ou inexistente.', {
        status: 401,
      })
    }

    return new HttpResponse(
      JSON.stringify([
        {
          name: 'Filmes divertidos',
          id: 1,
        },
        {
          name: 'Filmes que eu quero ver',
          id: 2,
        },
      ]),
    )
  },
)
