import { MovieSection } from '@/components/movie-section'
import { useQuery } from '@tanstack/react-query'
import { getMoviesByGenre } from '@/api/movie/get-movies-by-genre.ts'
import { MovieSectionSkeleton } from '@/components/skeletons/movie-section-skeleton.tsx'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'

interface ISuggestionMoviesProps {
  genre: IGenre
}

export function SuggestionMovies({
  genre: { id, name },
}: ISuggestionMoviesProps) {
  const { userToken } = useContext(GlobalContext)

  const { data: moviesByGenreList, isPending } = useQuery({
    queryKey: ['home-suggestion-movies', id],
    queryFn: () => getMoviesByGenre(id, userToken),
    staleTime: Infinity,
  })

  if (isPending) return <MovieSectionSkeleton />

  return (
    <MovieSection.Root>
      <MovieSection.Header>
        <MovieSection.Title>{name}</MovieSection.Title>
        <MovieSection.SeeMore id={id} />
      </MovieSection.Header>
      <MovieSection.Carrousel
        movies={moviesByGenreList?.movies}
        queryKeys={['home-suggestion-movies', id]}
      />
    </MovieSection.Root>
  )
}
