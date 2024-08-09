import { useQuery } from '@tanstack/react-query'
import { getUserCustomMovieList } from '@/api/list/get-user-custom-movie-list.ts'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { MovieSection } from '@/components/movie-section'

interface IUserCustomListProps {
  list: IListSummary
}

export function UserCustomList({ list: { name, id } }: IUserCustomListProps) {
  const { userToken } = useContext(GlobalContext)

  const { data: customLists } = useQuery({
    queryKey: [`${name}`],
    queryFn: () => {
      if (userToken) return getUserCustomMovieList(userToken, id)
    },
    staleTime: Infinity,
    enabled: !!userToken,
  })

  if (!customLists || customLists.movies.length === 0) return <></>

  return (
    <MovieSection.Root>
      <MovieSection.Header>
        <MovieSection.Title>{name}</MovieSection.Title>
      </MovieSection.Header>
      <MovieSection.Carrousel movies={customLists?.movies} sectionId={id} />
    </MovieSection.Root>
  )
}
