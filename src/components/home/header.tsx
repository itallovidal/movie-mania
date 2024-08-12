import { SearchMovieInput } from '@/components/home/search-movie-input.tsx'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'

export function Header() {
  const { profile } = useContext(GlobalContext)
  return (
    <div
      className={
        'bg-home-background min-h-[400px] flex items-center justify-start p-2'
      }
    >
      <div className={'max-w-grid-width m-auto w-full  p-2'}>
        <h1 className={'text-6xl font-josefin tracking-tighter'}>
          Bem Vindo, <span className={'text-yellow-500'}>{profile?.name}</span>
        </h1>
        <p className={'font-roboto'}>
          Diversos filmes, diversos filmes diversos
        </p>

        <SearchMovieInput />
      </div>
    </div>
  )
}
