import { http, HttpResponse } from 'msw'
import { IMovieList } from '@/@types/IMovieList.ts'

export const getMovieList = http.get('/lists/1041513', async ({ params }) => {
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
          release_date: '14/02/2024',
          poster_path: '/lYkKgjnTU8rjzW3vATozgVVwqA9.jpg',
          vote_average: 10,
          id: 801228,
          title: 'La Capital',
          overview: '',
          genres: [
            {
              id: 28,
              name: 'Ação',
            },
          ],
          backdrop_path: '/xYcgR0NV2DSA6HVVB4HwMRMjsEt.jpg',
          rating: {
            user: null,
            average: 10,
            ratingsCount: 298,
          },
        },
      ],
    },
    {
      status: 200,
    },
  )
})

// {
//   adult: false,

//     original_language: 'en',
//     original_title: 'La Capital',
//     overview: '',
//     popularity: 0.073,
//     poster_path: '/lYkKgjnTU8rjzW3vATozgVVwqA9.jpg',
//     release_date: '2021-02-14',
//     title: 'La Capital',
//     video: false,
//     rating: {
//   ratingsCount: 9,
//       average: 9,
//       user: null,
// },
// },
