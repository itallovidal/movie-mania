import { Stars } from '@/components/Stars.tsx'
import { DialogTrigger } from '@/components/ui/dialog.tsx'

export function MovieCard() {
  return (
    <DialogTrigger asChild>
      <div>
        <picture className={'w-[225px] block rounded-md overflow-hidden'}>
          <img
            className={'object-cover block w-full h-full max-w-max max-h-max'}
            src="https://image.tmdb.org/t/p/w500/hOZKUJGN0m717LRSQDxhgABqWrf.jpg"
            alt=""
          />
        </picture>

        <p className={'mt-4 font-bold font-josefin text-2xl'}>Frozen</p>

        <Stars rating={4} />
      </div>
    </DialogTrigger>
  )
}
