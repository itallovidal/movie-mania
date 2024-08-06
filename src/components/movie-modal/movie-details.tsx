import { useContext } from 'react'
import backdropPlaceholder from '@/assets/home/headerBackdrop.png'
import { ImageCover } from '@/components/imageCover.tsx'
import { Stars } from '@/components/Stars.tsx'
import { Badge } from '@/components/ui/badge.tsx'
import { CardContext } from '@/components/movieCard.tsx'

export function MovieDetails() {
  const { movie } = useContext(CardContext)
  return (
    <div
      className={
        'relative backdropLowOpacity h-full rounded-md overflow-hidden'
      }
    >
      <picture className={'absolute top-0 left-0 w-full h-full'}>
        <img
          className={'w-full h-full object-cover'}
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : backdropPlaceholder
          }
          alt=""
        />
      </picture>
      <div className={`w-full text-white`}>
        <div
          className={
            'relative z-10 grid grid-cols-12 gap-4 min-h-[410px] py-8 '
          }
        >
          <div className={'col-start-3 col-span-4 row-start-1'}>
            <ImageCover display={'initial'} cover={movie.poster_path} />
          </div>
          <div className={'col-start-7 space-y-4 row-start-1 col-span-4'}>
            <div className={'space-y-4'}>
              <h1 className={'text-4xl font-josefin'}>{movie.title}</h1>
              <p className={'leading-7'}>
                {movie.overview || 'Sem resumos disponíveis.'}
              </p>
            </div>

            <Stars rating={movie.vote_average} />

            {movie.genres.map((genre) => {
              return (
                <Badge variant={'secondary'} key={genre.id}>
                  {genre.name}
                </Badge>
              )
            })}
            <p> {movie.release_date} </p>

            <div className={'text-white flex flex-col mb-16'}>
              <h1 className={'text-2xl'}>Minha Avaliação</h1>
              <Stars rating={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
