import { ImageCover } from '@/components/image-cover.tsx'
import { Stars } from '@/components/stars.tsx'

interface ICardContentProps {
  movie: {
    poster_path: string
    title: string
    rating: {
      average: number
    }
  }
}

export function CardContent({
  movie: { poster_path, rating, title },
}: ICardContentProps) {
  return (
    <div>
      <ImageCover cover={poster_path} />
      <p
        className={
          'mt-4 line-clamp-2 text-left min-h-[4ch] font-bold font-josefin text-2xl'
        }
      >
        {title}
      </p>
      <Stars rating={Math.round(rating.average / 2)} />
    </div>
  )
}
