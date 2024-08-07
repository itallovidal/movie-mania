import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel.tsx'
import { MovieCard } from '@/components/movie-card.tsx'
import { IMovie } from '@/@types/IMovie.ts'

interface ISectionCarrousel {
  movies: IMovie[]
}

const carrouselConfig = {
  align: 'start',
  loop: true,
}

export function MovieSectionCarrousel({ movies }: ISectionCarrousel) {
  return (
    <Carousel opts={carrouselConfig}>
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem key={movie.id} className="basis-1/4">
            <MovieCard movie={movie} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
