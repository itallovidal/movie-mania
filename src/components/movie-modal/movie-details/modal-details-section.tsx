import { useContext, useMemo } from 'react'
import { ImageCover } from '@/components/image-cover.tsx'
import { RateMovie } from '@/components/movie-modal/movie-details/rate-movie.tsx'
import { Details } from '@/components/movie-modal/movie-details/details.tsx'
import { Stars } from '@/components/stars.tsx'
import { MovieDetailsBackgroundCover } from '@/components/movie-modal/movie-details/movie-details-background-cover.tsx'
import { CustomListVisualizer } from '@/components/movie-modal/movie-details/custom-list-visualizer.tsx'
import { MovieCardContext } from '@/components/movie-card/movie-card.tsx'

export function ModalDetailsSection() {
  const { movie, userRating } = useContext(MovieCardContext)

  const ratingState = useMemo(() => {
    if (userRating && userRating.rating) {
      return <Stars rating={userRating.rating} />
    }

    return <RateMovie movieId={movie.id} />
  }, [userRating?.rating, userRating])

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
          <Details details={movie} />
          {ratingState}
          <CustomListVisualizer />
        </div>
      </div>
    </div>
  )
}
