import { useContext } from 'react'
import { CardContext } from '@/components/movie-card/movie-card.tsx'
import { Badge } from '@/components/ui/badge.tsx'
export function Details() {
  const { movie } = useContext(CardContext)
  return (
    <>
      <div className={'space-y-2  w-full'}>
        <div className={'flex justify-between items-center'}>
          <h1 className={'text-4xl w-1/2 font-josefin'}>{movie.title}</h1>
          <span
            className={
              'text-darkBlue bg-white px-4 py-2 gap content-center rounded-l-md h-fit '
            }
          >
            Média de {movie.rating.average}
          </span>
        </div>
        <p className={'leading-7 w-9/12'}>
          {movie.overview || 'Sem resumos disponíveis.'}
        </p>
      </div>
      <div className={'flex gap-2 mt-4 mb-2'}>
        {movie.genres.map((genre) => {
          return (
            <Badge variant={'secondary'} key={genre.id}>
              {genre.name}
            </Badge>
          )
        })}
      </div>
      <Badge variant={'secondary'}>{movie.release_date}</Badge>
    </>
  )
}
