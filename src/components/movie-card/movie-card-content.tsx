import { ImageCover } from '@/components/image-cover.tsx'
import { Stars } from '@/components/stars.tsx'
import { useContext } from 'react'
import { CardContext } from '@/components/movie-card/movie-card.tsx'
import { Badge } from '@/components/ui/badge.tsx'

interface ICardContentProps {
  movie: {
    poster_path: string
    title: string
    rating: {
      average: number
    }
  }
}

export function CardContent() {
  const {
    movie: { poster_path, title, rating },
    userRating,
  } = useContext(CardContext)

  return (
    <div>
      <Badge className={'my-4'}>
        {rating.average} de {rating.ratingsCount} avalições
      </Badge>
      <ImageCover cover={poster_path} />

      <p
        className={
          'mt-4 line-clamp-2 text-left min-h-[4ch] font-bold font-josefin text-2xl'
        }
      >
        {title}
      </p>

      {userRating && userRating.rating && <Stars rating={userRating.rating} />}
    </div>
  )
}
