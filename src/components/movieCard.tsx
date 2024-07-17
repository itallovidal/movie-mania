import { Stars } from '@/components/Stars.tsx'
import { DialogTrigger } from '@/components/ui/dialog.tsx'
import { ImageCover } from '@/components/imageCover.tsx'

export function MovieCard() {
  return (
    <DialogTrigger asChild>
      <div>
        <ImageCover />

        <p className={'mt-4 font-bold font-josefin text-2xl'}>Frozen</p>

        <Stars rating={4} />
      </div>
    </DialogTrigger>
  )
}
