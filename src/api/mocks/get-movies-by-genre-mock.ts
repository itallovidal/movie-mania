import { http, HttpResponse } from 'msw'
import { IMovie } from '@/@types/IMovie.ts'

export const getMoviesByGenreMock = http.get(
  '/movies/random/*',
  async ({ params }) => {
    const genre = params[0]

    if (!genre) {
      return new HttpResponse('Gênero não fornecido', {
        status: 400,
      })
    }

    return HttpResponse.json<IMovie[]>(
      [
        {
          backdrop_path: '/tU3mnpFLOAp2Ia6vHvGIw8ewJQb.jpg',
          id: 1041513,
          overview:
            'Entre na Casa Madrigal com as vozes originais de "Encanto", da Disney Animations. Stephanie Beatriz, Adassa, Carolina Gaitán, Jessica Darrow, Diane Guerrero, Mauro Castillo, Angie Cepeda, Olga Merediz, e a superestrela colombiana Carlos Vives, se reúnem em um espetáculo musical que celebra o fenômeno global.',
          poster_path: '/kWoWvS7qQpgRUe6op45a1FbkO8g.jpg',
          title: 'Encanto no Hollywood Bowl',
          rating: {
            average: 7.4,
            user: null,
            ratingsCount: 7.034,
          },
          release_date: '28/12/2022',
          genres: [
            {
              id: 99,
              name: 'Documentário',
            },
            {
              id: 10402,
              name: 'Música',
            },
          ],
        },
        {
          backdrop_path: '/tU3mnpFLOAp2Ia6vHvGIw8ewJQb.jpg',
          id: 1041513,
          overview:
            'Entre na Casa Madrigal com as vozes originais de "Encanto", da Disney Animations. Stephanie Beatriz, Adassa, Carolina Gaitán, Jessica Darrow, Diane Guerrero, Mauro Castillo, Angie Cepeda, Olga Merediz, e a superestrela colombiana Carlos Vives, se reúnem em um espetáculo musical que celebra o fenômeno global.',
          poster_path: '/kWoWvS7qQpgRUe6op45a1FbkO8g.jpg',
          title: 'Encanto no Hollywood Bowl',
          rating: {
            average: 7.4,
            user: null,
            ratingsCount: 7.034,
          },
          release_date: '28/12/2022',
          genres: [
            {
              id: 99,
              name: 'Documentário',
            },
            {
              id: 10402,
              name: 'Música',
            },
          ],
        },
      ],
      {
        status: 200,
      },
    )
  },
)
