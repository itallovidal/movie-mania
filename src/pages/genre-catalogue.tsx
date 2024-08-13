import { useQuery } from '@tanstack/react-query'
import { getMoviesByGenre } from '@/api/movie/get-movies-by-genre.ts'
import { useParams } from 'react-router-dom'
import { MovieCard } from '@/components/movie-card/movie-card.tsx'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { CatalogueSkeleton } from '@/components/skeletons/catalogue-skeleton.tsx'

export function GenreCatalogue() {
  const { id } = useParams() as { id: string }
  const { userToken } = useContext(GlobalContext)
  const { data: catalogue } = useQuery({
    queryKey: [id],
    queryFn: () => getMoviesByGenre(id, userToken),
  })

  if (!catalogue) return <CatalogueSkeleton />

  return (
    <>
      <div className={`animate-showing-opacity max-w-grid-width m-auto`}>
        <div className={'gap-y-24 flex-wrap flex justify-start flex-row '}>
          {catalogue.movies.map((movie) => {
            return (
              <div key={movie.id} className={'w-1/4'}>
                <MovieCard movie={movie} queryKeys={[id]} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
