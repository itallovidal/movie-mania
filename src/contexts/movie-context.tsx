import { createContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getGenres } from '@/api/movie/get-genres.ts'

interface IMovieContextProps {
  genreList: IGenre[] | undefined
}

export const MovieContext = createContext({} as IMovieContextProps)

export function MovieContextProvider({ children }) {
  const { data: genreList } = useQuery({
    queryKey: ['lists'],
    queryFn: getGenres,
  })

  return (
    <MovieContext.Provider value={{ genreList }}>
      {children}
    </MovieContext.Provider>
  )
}
