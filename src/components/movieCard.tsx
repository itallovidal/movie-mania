import { Stars } from '@/components/Stars.tsx'
import { DialogTrigger } from '@/components/ui/dialog.tsx'
import { ImageCover } from '@/components/imageCover.tsx'
import { IMovie } from '@/@types/IMovie.ts'

export function MovieCard({ movie }: { movie: IMovie }) {
  return (
    <DialogTrigger asChild>
      <div>
        <ImageCover cover={movie.poster_path} />

        <p className={'mt-4 min-h-[4ch] font-bold font-josefin text-2xl'}>{movie.title}</p>

        <Stars rating={Math.round(movie.vote_average / 2)} />
      </div>
    </DialogTrigger>
  )
}
