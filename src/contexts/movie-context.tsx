import { createContext, ReactNode, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getGenres } from '@/api/movie/get-genres.ts'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { getUserLists } from '@/api/list/get-user-lists.ts'

interface IMovieContextProps {
  genreList: IGenre[] | undefined
  userLists: IListSummary[] | undefined
}

export const MovieContext = createContext({} as IMovieContextProps)

export function MovieContextProvider({ children }: { children: ReactNode }) {
  const { userToken } = useContext(GlobalContext)

  const { data: genreListResponse } = useQuery({
    queryKey: ['lists'],
    queryFn: getGenres,
  })

  const { data: userLists } = useQuery({
    queryKey: ['user-lists'],
    queryFn: () => {
      if (userToken) return getUserLists(userToken)
    },
    enabled: !!userToken,
  })

  return (
    <MovieContext.Provider
      value={{
        genreList: genreListResponse?.genreList,
        userLists: userLists?.userLists,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}
