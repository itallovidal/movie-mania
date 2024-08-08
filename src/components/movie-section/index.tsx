// export function Index() {
//   // const { data: movies } = useQuery({
//   //   queryKey: [`${name}`, id],
//   //   queryFn: () => getMoviesByGenre(id),
//   //   staleTime: Infinity,
//   // })
//   //
//   // if (!movies || movies.length === 0) return <></>
//
//   return (
//
//   )
// }

import { MovieSectionRoot } from '@/components/movie-section/movie-section-root.tsx'
import { MovieSectionSeeMore } from '@/components/movie-section/movie-section-see-more.tsx'
import { MovieSectionTitle } from '@/components/movie-section/movie-section-title.tsx'
import { MovieSectionHeader } from '@/components/movie-section/movie-section-header.tsx'
import { MovieSectionCarrousel } from '@/components/movie-section/movie-section-carrousel.tsx'

export const MovieSection = {
  Root: MovieSectionRoot,
  SeeMore: MovieSectionSeeMore,
  Title: MovieSectionTitle,
  Header: MovieSectionHeader,
  Carrousel: MovieSectionCarrousel,
}
