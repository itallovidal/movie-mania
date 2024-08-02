import { http, HttpResponse } from 'msw'
import { IMovieList } from '@/IMovieList.ts'

export const getMovieList = http.get('/lists/*', async ({ params }) => {
  const id = params[0]

  console.log('list id:')
  console.log(id)

  if (!id) {
    return new HttpResponse('ID não fornecido', {
      status: 400,
    })
  }

  return HttpResponse.json<IMovieList>(
    {
      name: 'Filmes para ver dormindo',
      id: 10,
      movies: [
        {
          release_date: '2024-06-03',
          poster_path: '/mlgAkeiFetX7EQJzpgl2fQ19JEa.jpg',
          vote_average: 10,
          id: 1323050,
          title: 'Winner Takes All',
          overview:
            'Two childhood friends grow up in a life of crime. After a foiled robbery one is jailed, the other joins the army and becomes a narc agent. A corrupt drug agent plots an assassination for a Mafia boss that jeopardizes the two friends lives.',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
          ],
          backdrop_path: '/a0e91RD8tDuDQCff1CzgiLqhd24.jpg',
        },
        {
          adult: false,
          backdrop_path: '/xYcgR0NV2DSA6HVVB4HwMRMjsEt.jpg',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
          ],
          id: 801228,
          original_language: 'en',
          original_title: 'La Capital',
          overview: '',
          popularity: 0.073,
          poster_path: '/lYkKgjnTU8rjzW3vATozgVVwqA9.jpg',
          release_date: '2021-02-14',
          title: 'La Capital',
          video: false,
          vote_average: 10.0,
          vote_count: 1,
        },
      ],
    },
    {
      status: 200,
    },
  )
})
