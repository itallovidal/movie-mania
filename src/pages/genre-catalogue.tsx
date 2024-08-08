import { Header } from '@/components/home/header.tsx'
import { useQuery } from '@tanstack/react-query'
import { getMoviesByGenre } from '@/api/movie/get-movies-by-genre.ts'
import { MovieCard } from '@/components/movie-card/movie-card.tsx'
import { useParams } from 'react-router-dom'

export function GenreCatalogue() {
  const { id } = useParams() as { id: string }
  const { data: catalogue } = useQuery({
    queryKey: [id],
    queryFn: () => getMoviesByGenre(Number(id)),
  })

  if (!catalogue) return <></>

  return (
    <>
      <div className={`max-w-grid-width m-auto`}>
        <div className={'gap-y-24 flex-wrap flex justify-start flex-row '}>
          {catalogue.movies.map((movie) => {
            return (
              <div key={movie.id} className={'w-1/4'}>
                <MovieCard movie={movie} sectionId={0} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
