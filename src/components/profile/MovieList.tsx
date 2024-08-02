import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel.tsx'
import { MovieCard } from '@/components/movieCard.tsx'
import { useQuery } from '@tanstack/react-query'
import { getMovieList } from '@/api/get-movie-list.ts'
import { useContext } from 'react'
import { GlobalContext } from '@/components/globalContext.tsx'

interface IMovieListProps {
  id: number
  name: string
}

export function MovieList({ name, id }: IMovieListProps) {
  const { userToken } = useContext(GlobalContext)

  const { data: list } = useQuery({
    queryKey: [`${name}`],
    queryFn: () => {
      if (userToken) return getMovieList(userToken, id)
    },
    staleTime: Infinity,
    enabled: !!userToken,
  })

  if (!list || list.movies.length === 0) return <></>

  return (
    <div className={'max-w-grid-width m-auto '}>
      <div className={'flex justify-between'}>
        <h1 className={'text-4xl font-josefin font-bold tracking-tight mb-4'}>
          {name}
        </h1>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className={'min-w-grid-width'}>
          {list.movies.map((movie, i) => {
            return (
              <CarouselItem key={i} className="max-w-fit ">
                <MovieCard movie={movie} />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
