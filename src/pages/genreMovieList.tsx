import { Header } from '@/components/home/header.tsx'
import { useQuery } from '@tanstack/react-query'
import { getMoviesByGenre } from '@/api/get-movies-by-genre.ts'
import { MovieCard } from '@/components/movieCard.tsx'
import { useParams } from 'react-router-dom'

export function GenreMovieList() {
  const { id } = useParams() as { id: string }
  const { data: movies } = useQuery({
    queryKey: [id],
    queryFn: () => getMoviesByGenre(Number(id)),
  })

  if (!movies) return <></>

  return (
    <>
      <Header />
      <div className={`max-w-grid-width m-auto`}>
        <div
          className={'-mt-8  gap-y-24 flex-wrap flex justify-between flex-row '}
        >
          {movies.map((movie) => {
            return (
              <div key={movie.id} className={'w-1/4'}>
                <MovieCard movie={movie} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
