import { Header } from '@/components/home/header.tsx'
import { useContext, useMemo } from 'react'
import { MovieContext } from '@/contexts/movie-context.tsx'
import { SuggestionSection } from '@/components/home/suggestion-section.tsx'

export function Home() {
  const { genreList } = useContext(MovieContext)

  const randomGenres = useMemo(() => {
    if (genreList) {
      const randomIndexList = []
      while (randomIndexList.length < 3) {
        const randomIndex = Math.floor(Math.random() * genreList?.length)
        if (randomIndex !== randomIndexList.at(-1)) {
          randomIndexList.push(randomIndex)
        }
      }

      return randomIndexList.map(
        (indexList) => genreList[indexList],
      ) as IGenre[]
    }
  }, [genreList])

  return (
    <>
      <Header />
      {randomGenres &&
        randomGenres.map((genre) => (
          <SuggestionSection key={genre.id} genre={genre} />
        ))}
    </>
  )
}
