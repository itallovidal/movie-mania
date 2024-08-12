import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel.tsx'
import { MovieCard } from '@/components/movie-card/movie-card.tsx'

interface ISectionCarrousel {
  movies: IMovie[]
  queryKeys: never[]
}

const carrouselConfig = {
  align: 'start',
  loop: true,
} as const

export function MovieSectionCarrousel({
  movies,
  queryKeys,
}: ISectionCarrousel) {
  return (
    <Carousel opts={carrouselConfig}>
      <CarouselContent>
        {movies &&
          movies.map((movie) => (
            <CarouselItem
              key={`${queryKeys[0]}-${movie.id}`}
              className="basis-1/4"
            >
              <MovieCard movie={movie} queryKeys={queryKeys} />
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  )
}
