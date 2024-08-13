import { useQuery } from '@tanstack/react-query'
import { getUserCustomMovieList } from '@/api/list/get-user-custom-movie-list.ts'
import { useContext, useMemo } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { MovieSection } from '@/components/movie-section'
import { CatalogueSkeleton } from '@/components/skeletons/catalogue-skeleton.tsx'

interface IUserCustomListProps {
  list: IListSummary
}

export function UserCustomList({ list: { name, id } }: IUserCustomListProps) {
  const { userToken } = useContext(GlobalContext)

  const { data: customLists } = useQuery({
    queryKey: [`${name}`, id],
    queryFn: () => {
      if (userToken) return getUserCustomMovieList(userToken, id)
    },
    enabled: !!userToken,
  })

  const filteredMovies = useMemo(() => {
    if (customLists) {
      return customLists?.movies.filter((movie: IMovie) => {
        const r = movie.lists.findIndex((el) => el.id === id)
        return r > -1
      })
    }

    return undefined
  }, [customLists])

  if (!filteredMovies || filteredMovies.length === 0)
    return <CatalogueSkeleton />

  return (
    <MovieSection.Root>
      <MovieSection.Header>
        <MovieSection.Title>{name}</MovieSection.Title>
      </MovieSection.Header>
      <MovieSection.Carrousel
        movies={filteredMovies}
        queryKeys={[`${name}`, id]}
      />
    </MovieSection.Root>
  )
}
