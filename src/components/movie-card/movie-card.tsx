import React, { useContext } from 'react'
import { Card } from '@/components/movie-card/index.tsx'
import { ImageCover } from '@/components/image-cover.tsx'
import { useQuery } from '@tanstack/react-query'
import { getUserRatingByMovieId } from '@/api/movie/get-user-rating-by-movie-id.ts'
import { GlobalContext } from '@/contexts/global-context.tsx'

export function MovieCard({
  movie,
}: {
  movie: IMovie & { sectionId: number }
}) {
  const { userToken } = useContext(GlobalContext)

  const { data: user } = useQuery({
    queryKey: ['user-movie-rating', movie.id],
    queryFn: () => {
      return getUserRatingByMovieId(userToken, movie.id)
    },
    enabled: !!userToken,
  })

  return (
    <Card.Wrapper movie={movie} userRating={user?.rating}>
      <Card.Header>
        {`${movie.rating.average} de ${movie.rating.ratingsCount} avaliações`}
      </Card.Header>
      <ImageCover cover={movie.poster_path} />
      <Card.Summary stars={user?.rating.rating}>{movie.title}</Card.Summary>
    </Card.Wrapper>
  )
}
