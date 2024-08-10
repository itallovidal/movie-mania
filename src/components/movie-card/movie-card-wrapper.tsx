import { Dialog, DialogTrigger } from '@/components/ui/dialog.tsx'

import { MovieModal } from '@/components/movie-modal/movie-modal.tsx'
import { ReactNode, useState } from 'react'

interface IMovieCardWrapper {
  children: ReactNode
  movie: IMovie & { sectionId: number }
  userRating: IRating | undefined
}

export function MovieCardWrapper({
  children,
  movie,
  userRating,
}: IMovieCardWrapper) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <MovieModal
        movie={movie}
        isDialogOpen={isDialogOpen}
        userRating={userRating}
      />
    </Dialog>
  )
}
