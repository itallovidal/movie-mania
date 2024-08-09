import { DialogTrigger } from '@/components/ui/dialog.tsx'
import { Dialog } from '@radix-ui/react-dialog'
import { MovieModal } from '@/components/movie-modal/movie-modal.tsx'
import { createContext, useContext, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { getUserRatingByMovieId } from '@/api/movie/get-user-rating-by-movie-id.ts'
import { CardContent } from '@/components/movie-card/movie-card-content.tsx'

interface ICardContext {
  isDialogOpen: boolean
  movie: IMovie
  userRating: IRating | undefined
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

  const { data: userRating } = useQuery({
    queryKey: ['user-movie-rating', movie.id],
    queryFn: () => {
      if (userToken) return getUserRatingByMovieId(userToken, movie.id)
    },
    enabled: !!userToken,
  })

  return (
    <CardContext.Provider
      value={{ isDialogOpen, movie, userRating: userRating?.rating, sectionId }}
    >
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger>
          <CardContent/>
        </DialogTrigger>
        <MovieModal />
      </Dialog>
    </CardContext.Provider>
  )
}
