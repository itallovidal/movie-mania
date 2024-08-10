import { useQuery } from '@tanstack/react-query'
import { getMoviesByGenre } from '@/api/movie/get-movies-by-genre.ts'
import { MovieSection } from '@/components/movie-section'

interface ISuggestionSectionProps {
  genre: IGenre
}

export function SuggestionSection({
  genre: { id, name },
}: ISuggestionSectionProps) {
  console.log('idsecao')
  console.log(id)

  const { data: moviesByGenreList } = useQuery({
    queryKey: ['home-suggestion-movies', id],
    queryFn: () => getMoviesByGenre(id),
    staleTime: Infinity,
  })

  return (
    <MovieSection.Root>
      <MovieSection.Header>
        <MovieSection.Title>{name}</MovieSection.Title>
        <MovieSection.SeeMore id={id} />
      </MovieSection.Header>
      <MovieSection.Carrousel
        movies={moviesByGenreList?.movies}
        sectionId={id}
      />
    </MovieSection.Root>
  )
}
