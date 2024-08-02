import { Header } from '@/components/home/header.tsx'
import { Dialog } from '@/components/ui/dialog.tsx'
import { MovieDetails } from '@/components/MovieDetails.tsx'
import { useQuery } from '@tanstack/react-query'
import { getMoviesByGenre } from '@/api/get-movies-by-genre.ts'
import { MovieCard } from '@/components/movieCard.tsx'
import { useParams } from 'react-router-dom'

export function GenreMovieList() {
  const { id } = useParams() as { id: string }
  const { data: movies } = useQuery({
    queryKey: [id],
    queryFn: () => getMoviesByGenre(Number(id)),
    staleTime: Infinity,
  })

  if (!movies) return <></>

  return (
    <>
      <Header />
      <Dialog>
        <div className={`max-w-grid-width m-auto`}>
          <div
            className={
              '-mt-8  gap-y-24 flex-wrap flex justify-between flex-row '
            }
          >
            {movies.map((movie) => {
              return (
                <div className={'w-1/4'}>
                  <MovieCard movie={movie} />
                </div>
              )
            })}
          </div>
        </div>

        <MovieDetails />
      </Dialog>
    </>
  )
}
