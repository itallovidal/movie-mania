import { Stars } from '@/components/Stars.tsx'
import { DialogTrigger } from '@/components/ui/dialog.tsx'
import { ImageCover } from '@/components/imageCover.tsx'
import { IMovie } from '@/@types/IMovie.ts'
import { Dialog } from '@radix-ui/react-dialog'
import { MovieModal } from '@/components/movie-modal/MovieModal.tsx'
import { createContext, useState } from 'react'

interface ICardContext {
  isDialogOpen: boolean
  movie: IMovie
}
export const CardContext = createContext({} as ICardContext)

export function MovieCard({ movie }: { movie: IMovie }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <CardContext.Provider value={{ isDialogOpen, movie }}>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <div>
            <ImageCover cover={movie.poster_path} />
            <p className={'mt-4 min-h-[4ch] font-bold font-josefin text-2xl'}>
              {movie.title}
            </p>
            <Stars rating={Math.round(movie.vote_average / 2)} />
          </div>
        </DialogTrigger>
        <MovieModal />
      </Dialog>
    </CardContext.Provider>
  )
}
