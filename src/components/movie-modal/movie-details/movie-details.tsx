import { useContext } from 'react'
import { ImageCover } from '@/components/image-cover.tsx'
import { CardContext } from '@/components/movie-card/movie-card.tsx'
import { RateMovie } from '@/components/movie-modal/movie-details/rate-movie.tsx'
import { Details } from '@/components/movie-modal/movie-details/details.tsx'
import { AddToList } from '@/components/movie-modal/movie-details/add-to-list.tsx'
import { Stars } from '@/components/stars.tsx'
import { MovieDetailsBackgroundCover } from '@/components/movie-modal/movie-details/movie-details-background-cover.tsx'

export function MovieDetails() {
  const { movie, rating } = useContext(CardContext)
  const ratingState =
    rating && rating.rating ? <Stars rating={rating.rating} /> : <RateMovie />

  return (
    <div
      className={
        'relative backdropLowOpacity h-full rounded-md overflow-hidden'
      }
    >
      <MovieDetailsBackgroundCover backdrop_path={movie.backdrop_path} />
      <div
        className={
          'relative z-10 grid grid-cols-12 gap-4 min-h-[410px] py-8 text-white'
        }
      >
        <div className={'col-start-2 col-span-4 row-start-1'}>
          <ImageCover display={'initial'} cover={movie.poster_path} />
        </div>
        <div className={'col-start-6 row-start-1 col-span-7 '}>
          <Details />
          {ratingState}
          {/* <AddToList /> */}
        </div>
      </div>
    </div>
  )
}
