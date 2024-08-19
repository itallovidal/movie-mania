import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { MovieCard } from '@/components/movie-card/movie-card.tsx'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { CatalogueSkeleton } from '@/components/skeletons/catalogue-skeleton.tsx'
import { searchMovie } from '@/api/movie/search-movie.ts'
import { Header } from '@/components/global/header'

export function Search() {
  const { pathname, search } = useLocation()
  const { handleNavigate } = useContext(GlobalContext)
  const [title, setTitle] = useState<undefined | string>(undefined)

  useEffect(() => {
    const title = new URLSearchParams(search).get('title')

    if (pathname === '/search' && !title) {
      handleNavigate('/')
    }

    if (title) {
      console.log(`Mudou a pesquisa`)
      setTitle(title)
    }
  }, [pathname, title, window.location.href])
  const { userToken } = useContext(GlobalContext)

  const { data: moviesSearched, isPending } = useQuery({
    queryKey: [`search-result`, title],
    queryFn: () => {
      if (title)
        return searchMovie({
          title,
          token: userToken,
        })
    },
    enabled: !!title,
  })

  console.log(moviesSearched)

  if (isPending) return <CatalogueSkeleton />

  if (title && moviesSearched && moviesSearched.movies) {
    return (
      <>
        <Header.Wrapper>
          <Header.Result query={title} />
          <Header.Search />
        </Header.Wrapper>

        <div
          className={`animate-showing-opacity w-[90%] max-w-grid-width m-auto`}
        >
          <div
            className={
              'gap-y-2 lg:gap-x-2 lg:gap-y-24 flex-wrap flex justify-start flex-row'
            }
          >
            {moviesSearched.movies.map((movie) => {
              return (
                <MovieCard key={movie.id} movie={movie} queryKeys={[title]} />
              )
            })}
          </div>
        </div>
      </>
    )
  }

  return <></>
}
