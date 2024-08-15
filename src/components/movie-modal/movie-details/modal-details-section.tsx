import { useContext, useMemo } from 'react'
import { ImageCover } from '@/components/image-cover.tsx'
import { RateMovie } from '@/components/movie-modal/movie-details/rate-movie.tsx'
import { Details } from '@/components/movie-modal/movie-details/details.tsx'
import { Stars } from '@/components/stars.tsx'
import { MovieDetailsBackgroundCover } from '@/components/movie-modal/movie-details/movie-details-background-cover.tsx'
import { CustomListVisualizer } from '@/components/movie-modal/movie-details/custom-list-visualizer.tsx'
import { MovieCardContext } from '@/components/movie-card/movie-card.tsx'
import { GlobalContext } from '@/contexts/global-context.tsx'

export function ModalDetailsSection() {
  const { movie, userRating } = useContext(MovieCardContext)
  const { userToken } = useContext(GlobalContext)

  const ratingState = useMemo(() => {
    if (userRating && userRating.rating) {
      return <Stars rating={userRating.rating} />
    }

    return <RateMovie movieId={movie.id} />
  }, [userRating?.rating, userRating])

  return (
    <div
      className={
        'relative backdropLowOpacity h-[90vh] lg:h-full rounded-md overflow-hidden px-4 lg:p-0'
      }
    >
      <MovieDetailsBackgroundCover backdrop_path={movie.backdrop_path} />
      <div
        className={
          'relative z-10 grid-cols-1 grid sm:grid-cols-12 gap-4 min-h-[410px] py-8 text-white'
        }
      >
        <div className={'col-start-2 col-span-4 row-start-1 lg:block hidden'}>
          <ImageCover display={'initial'} cover={movie.poster_path} />
        </div>
        <div className={'lg:col-start-6 lg:row-start-1 lg:col-span-7'}>
          <Details details={movie} />

          {userToken && (
            <>
              {ratingState}
              <CustomListVisualizer />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
