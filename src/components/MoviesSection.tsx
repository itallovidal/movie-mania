import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel.tsx'
import { MovieCard } from '@/components/movieCard.tsx'
import { Button } from '@/components/ui/button.tsx'
import { ChevronRight } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getMoviesByGenre } from '@/api/get-movies-by-genre.ts'
import { Link } from 'react-router-dom'

interface IMovieSectionProps {
  id: number
  name: string
}

export function MoviesSection({ name, id }: IMovieSectionProps) {
  const { data: movies } = useQuery({
    queryKey: [`${name}`],
    queryFn: () => getMoviesByGenre(id),
    staleTime: Infinity,
  })

  if (!movies || movies.length === 0) return <></>

  return (
    <div className={'max-w-grid-width m-auto '}>
      <div className={'flex justify-between'}>
        <h1 className={'text-4xl font-josefin font-bold tracking-tight mb-4'}>
          {name}
        </h1>

        <Link to={`/more/${id}`}>
          <Button variant={'ghost'}>
            Ver mais <ChevronRight />
          </Button>
        </Link>
      </div>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {movies.map((movie, i) => {
            return (
              <CarouselItem key={i} className="basis-1/4">
                <MovieCard movie={movie} />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
