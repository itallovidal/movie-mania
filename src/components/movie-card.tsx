import { Stars } from '@/components/stars.tsx'
import { DialogTrigger } from '@/components/ui/dialog.tsx'
import { ImageCover } from '@/components/image-cover.tsx'
import { IMovie } from '@/@types/IMovie.ts'
import { Dialog } from '@radix-ui/react-dialog'
import { MovieModal } from '@/components/movie-modal/movie-modal.tsx'
import { createContext, useContext, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { GlobalContext } from '@/components/global-context.tsx'
import { getMovieRatingById } from '@/api/get-movie-rating-by-id.ts'

interface ICardContext {
  isDialogOpen: boolean
  movie: IMovie
  rating: IRating
}
export const CardContext = createContext({} as ICardContext)

export function MovieCard({ movie }: { movie: IMovie }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { userToken } = useContext(GlobalContext)

  const { data: rating } = useQuery({
    queryKey: ['movieRating'],
    queryFn: () => {
      if (userToken) return getMovieRatingById(userToken, movie.id)
    },
    enabled: !!userToken,
  })

  return (
    <CardContext.Provider value={{ isDialogOpen, movie, rating }}>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <div>
            <ImageCover cover={movie.poster_path} />
            <p className={'mt-4 min-h-[4ch] font-bold font-josefin text-2xl'}>
              {movie.title}
            </p>
            <Stars rating={Math.round(movie.rating.average / 2)} />
          </div>
        </DialogTrigger>
        <MovieModal />
      </Dialog>
    </CardContext.Provider>
  )
}
