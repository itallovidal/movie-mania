import { useQuery } from '@tanstack/react-query'
import { getMoviesByGenre } from '@/api/get-movies-by-genre.ts'
import { MovieSectionHeader } from '@/components/movie-section/movie-section-header.tsx'
import { MovieSectionCarrousel } from '@/components/movie-section/movie-section-carrousel.tsx'

interface ISectionProps {
  section: {
    id: number
    name: string
  }
}

export function MovieSection({ section: { name, id } }: ISectionProps) {
  const { data: movies } = useQuery({
    queryKey: [`${name}`, id],
    queryFn: () => getMoviesByGenre(id),
    staleTime: Infinity,
  })

  if (!movies || movies.length === 0) return <></>

  return (
    <div className={'w-[90%] max-w-grid-width m-auto'}>
      <MovieSectionHeader data={{ name, id }} />
      <MovieSectionCarrousel movies={movies} sectionId={id} />
    </div>
  )
}
