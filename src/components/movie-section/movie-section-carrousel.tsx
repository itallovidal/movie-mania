import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel.tsx'
import { MovieCard } from '@/components/movie-card/movie-card.tsx'

interface ISectionCarrousel {
  movies: IMovie[] | undefined
  sectionId: number
}

const carrouselConfig = {
  align: 'start',
  loop: true,
} as const

export function MovieSectionCarrousel({
  movies,
  sectionId,
}: ISectionCarrousel) {
  return (
    <Carousel opts={carrouselConfig}>
      <CarouselContent>
        {movies &&
          movies.map((movie, index) => (
            <CarouselItem key={index} className="basis-1/4">
              <MovieCard movie={{ ...movie, sectionId }} />
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  )
}
