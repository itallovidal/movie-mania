import { useQuery } from '@tanstack/react-query'
import { getUserCustomMovieList } from '@/api/list/get-user-custom-movie-list.ts'
import { useContext, useMemo } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { MovieSection } from '@/components/movie-section'

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

  console.log('listas customizadas:')
  console.log(customLists)

  const filteredMovies = useMemo(() => {
    if (customLists) {
      return customLists?.movies.filter((movie: IMovie) => {
        const r = movie.lists.findIndex((el) => el.id === id)
        return r > -1
      })
    }

    return undefined
  }, [customLists])

  console.log('listas filtradas:')
  console.log(filteredMovies)

  if (!filteredMovies || filteredMovies.length === 0) return <></>

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
