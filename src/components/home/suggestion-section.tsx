import { useQuery } from '@tanstack/react-query'
import { getMoviesByGenre } from '@/api/movie/get-movies-by-genre.ts'
import { MovieSection } from '@/components/movie-section'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { MovieSectionSkeleton } from '@/components/skeletons/movie-section-skeleton.tsx'

interface ISuggestionSectionProps {
  genre: IGenre
}

export function SuggestionSection({
  genre: { id, name },
}: ISuggestionSectionProps) {
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
