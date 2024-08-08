import { http, HttpResponse } from 'msw'

export const getMoviesByGenreMock = http.get(
  '/movies/random/*',
  async ({ params }) => {
    const genre = params[0]

    if (!genre) {
      return new HttpResponse('Gênero não fornecido', {
        status: 400,
      })
    }

    return HttpResponse.json<IGetMoviesByGenreResponse[]>(
      {
        movies: [
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
            lists: [
              {
                id: 1,
              },
            ],
          },
          {
            backdrop_path: '/8rft8A9nH43IReybFtYt21ezfMK.jpg',
            id: 899082,
            overview:
              'Uma encantadora história de making-of contada por meio de novas entrevistas em profundidade e conversas com o elenco, convidando os fãs a uma jornada mágica em primeira pessoa através de uma das franquias de filmes mais amadas de todos os tempos.',
            poster_path: '/bhY813zHKJStgUwl9kfBA3WDDPS.jpg',
            title:
              'Comemoração de 20 anos de Harry Potter: De Volta a Hogwarts',
            rating: {
              average: 7.4,
              user: null,
              ratingsCount: 7.034,
            },
            release_date: '01/01/2022',
            genres: [
              {
                id: 99,
                name: 'Documentário',
              },
            ],
            lists: [],
          },
        ],
      },
      {
        status: 200,
      },
    )
  },
)
