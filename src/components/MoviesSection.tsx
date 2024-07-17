import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel.tsx'
import { MovieCard } from '@/components/movieCard.tsx'
import { Button } from '@/components/ui/button.tsx'
import { ChevronRight } from 'lucide-react'

export function MoviesSection() {
  return (
    <div className={'max-w-grid-width m-auto '}>
      <div className={'flex justify-between'}>
        <h1 className={'text-4xl font-josefin font-bold tracking-tight mb-4'}>
          Nome da secão
        </h1>

        <Button variant={'ghost'}>
          Ver mais <ChevronRight />
        </Button>
      </div>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem className="basis-1/4">
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <MovieCard />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}
