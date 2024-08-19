import { useContext, useMemo } from 'react'
import { MovieContext } from '@/contexts/movie-context.tsx'
import { SuggestionSection } from '@/components/home/suggestion-section/suggestion-section.tsx'
import { CategorySelection } from '@/components/home/category-selection.tsx'
import { ForYouSection } from '@/components/home/for-you-section/for-you-section.tsx'
import { Header } from '@/components/global/header'

export function Home() {
  const { genreList } = useContext(MovieContext)

  const randomGenres = useMemo(() => {
    if (genreList) {
      const randomIndexList: number[] = []
      while (randomIndexList.length < 2) {
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
      <Header.Wrapper>
        <Header.Title />
        <Header.Search />
      </Header.Wrapper>
      <SuggestionSection randomGenres={randomGenres} />
      <ForYouSection />
      <CategorySelection genres={genreList} />
    </>
  )
}
