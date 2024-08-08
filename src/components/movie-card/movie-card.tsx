import { Stars } from '@/components/stars.tsx'
import { DialogTrigger } from '@/components/ui/dialog.tsx'
import { ImageCover } from '@/components/image-cover.tsx'
import { IMovie } from '@/@types/IMovie.ts'
import { Dialog } from '@radix-ui/react-dialog'
import { MovieModal } from '@/components/movie-modal/movie-modal.tsx'
import { createContext, useContext, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { getMovieRatingById } from '@/api/get-movie-rating-by-id.ts'
import { CardContent } from '@/components/movie-card/movie-card-content.tsx'

interface ICardContext {
  isDialogOpen: boolean
  movie: IMovie
  rating: IRating
  sectionId: number
}
export const CardContext = createContext({} as ICardContext)

export function MovieCard({
  movie,
  sectionId,
}: {
  movie: IMovie
  sectionId: number
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { userToken } = useContext(GlobalContext)

  const { data: rating } = useQuery({
    queryKey: ['movieRating', movie.id],
    queryFn: () => {
      if (userToken) return getMovieRatingById(userToken, movie.id)
    },
    enabled: !!userToken,
  })

  return (
    <CardContext.Provider value={{ isDialogOpen, movie, rating, sectionId }}>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger>
          <CardContent movie={movie} />
        </DialogTrigger>
        <MovieModal />
      </Dialog>
    </CardContext.Provider>
  )
}
