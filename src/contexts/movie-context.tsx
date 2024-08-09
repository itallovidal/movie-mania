import { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getGenres } from '@/api/movie/get-genres.ts'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { getUserLists } from '@/api/list/get-user-lists.ts'

interface IMovieContextProps {
  genreList: IGenre[] | undefined
}

export const MovieContext = createContext({} as IMovieContextProps)

export function MovieContextProvider({ children }) {

  const { data: genreListResponse } = useQuery({
    queryKey: ['lists'],
    queryFn: getGenres,
  })

  return (
    <MovieContext.Provider
      value={{
        genreList: genreListResponse?.genreList,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}
