import { useContext } from 'react'
import backdropPlaceholder from '@/assets/home/headerBackdrop.png'
import { ImageCover } from '@/components/image-cover.tsx'
import { CardContext } from '@/components/movie-card.tsx'
import { RateMovie } from '@/components/movie-modal/rate-movie.tsx'
import { Details } from '@/components/movie-modal/details.tsx'
import { AddToPlaylist } from '@/components/movie-modal/add-to-playlist.tsx'
import { Stars } from '@/components/stars.tsx'

export function MovieDetails() {
  const { movie, rating } = useContext(CardContext)
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
          <div className={'col-start-2 col-span-4 row-start-1'}>
            <ImageCover display={'initial'} cover={movie.poster_path} />
          </div>
          <div className={'col-start-6 row-start-1 col-span-7 '}>
            <Details />
            {rating && rating.rating ? (
              <Stars rating={rating.rating} />
            ) : (
              <RateMovie />
            )}
            <AddToPlaylist />
          </div>
        </div>
      </div>
    </div>
  )
}
