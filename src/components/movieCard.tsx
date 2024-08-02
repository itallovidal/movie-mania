import { Stars } from '@/components/Stars.tsx'
import { DialogTrigger } from '@/components/ui/dialog.tsx'
import { ImageCover } from '@/components/imageCover.tsx'
import { IMovie } from '@/@types/IMovie.ts'
import { Dialog } from '@radix-ui/react-dialog'
import { MovieDetails } from '@/components/MovieDetails.tsx'
import { useState } from 'react'

export function MovieCard({ movie }: { movie: IMovie }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
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
      <MovieDetails movie={movie} isEnabled={isDialogOpen} />
    </Dialog>
  )
}
