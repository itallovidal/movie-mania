import { Dialog, DialogTrigger } from '@/components/ui/dialog.tsx'

import { MovieModal } from '@/components/movie-modal/movie-modal.tsx'
import { ReactNode, useContext } from 'react'
import { MovieCardContext } from '@/components/movie-card/movie-card.tsx'

interface IMovieCardWrapper {
  children: ReactNode
}

export function MovieCardWrapper({ children }: IMovieCardWrapper) {
  const { isDialogOpen, changeDialogState } = useContext(MovieCardContext)

  return (
    <Dialog open={isDialogOpen} onOpenChange={changeDialogState}>
      <DialogTrigger asChild>
        <div
          className={
            'cursor-pointer w-full lg:max-w-[225px]  flex flex-col items-center justify-center relative mt-10'
          }
        >
          {children}
        </div>
      </DialogTrigger>
      <MovieModal />
    </Dialog>
  )
}
