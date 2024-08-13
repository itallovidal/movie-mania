import { createContext, useContext, useState } from 'react'
import { Card } from '@/components/movie-card/index.tsx'
import { ImageCover } from '@/components/image-cover.tsx'
import { useQuery } from '@tanstack/react-query'
import { getUserRatingByMovieId } from '@/api/movie/get-user-rating-by-movie-id.ts'
import { GlobalContext } from '@/contexts/global-context.tsx'

interface IMovieCardContextProps {
  movie: IMovie
  userRating: IRating | undefined
  queryKeys: never[]
  isDialogOpen: boolean
  changeDialogState: () => void
}
export const MovieCardContext = createContext({} as IMovieCardContextProps)

export function MovieCard({
  movie,
  queryKeys,
}: {
  movie: IMovie
  queryKeys: never[]
}) {
  const { userToken } = useContext(GlobalContext)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  function changeDialogState() {
    setIsDialogOpen((prev) => !prev)
  }

  const { data: user } = useQuery({
    queryKey: ['user-movie-rating', movie.id],
    queryFn: () => {
      return getUserRatingByMovieId(userToken, movie.id)
    },
    enabled: !!userToken,
    staleTime: Infinity,
  })

  return (
    <MovieCardContext.Provider
      value={{
        movie,
        userRating: user?.rating,
        queryKeys,
        isDialogOpen,
        changeDialogState,
      }}
    >
      <Card.Wrapper>
        <Card.Header>
          {`${movie.rating.average} de ${movie.rating.ratingsCount} avaliações`}
        </Card.Header>
        <ImageCover cover={movie.poster_path} />
        <Card.Summary stars={user?.rating.rating}>{movie.title}</Card.Summary>
      </Card.Wrapper>
    </MovieCardContext.Provider>
  )
}
