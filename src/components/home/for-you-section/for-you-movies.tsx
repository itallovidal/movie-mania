import { useQuery } from '@tanstack/react-query'
import { getMoviesByGenre } from '@/api/movie/get-movies-by-genre.ts'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { MovieSectionSkeleton } from '@/components/skeletons/movie-section-skeleton.tsx'
import { MovieSection } from '@/components/movie-section'

export function ForYouMovies({ genre }: { genre: IGenre }) {
  const { userToken, profile } = useContext(GlobalContext)

  const { data: forYouMovies, isPending } = useQuery({
    queryKey: ['for-you', genre.id],
    queryFn: () => getMoviesByGenre(genre.id, userToken),
    enabled: !!profile,
  })

  if (isPending) return <MovieSectionSkeleton />

  return (
    <MovieSection.Root>
      <MovieSection.Header></MovieSection.Header>
      <MovieSection.Carrousel
        movies={forYouMovies?.movies}
        queryKeys={['for-you', genre.id]}
      />
    </MovieSection.Root>
  )
}
