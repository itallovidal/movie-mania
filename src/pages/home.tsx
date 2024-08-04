import { Header } from '@/components/home/header.tsx'
import { MoviesSection } from '@/components/MoviesSection.tsx'
import { GENRES } from '@/@types/genres.ts'

export function Home() {
  return (
    <>
      <Header />
      <div className={'-mt-8  flex flex-col gap-12'}>
        {GENRES.map((genre) => {
          return (
            <MoviesSection key={genre.id} name={genre.name} id={genre.id} />
          )
        })}
      </div>
    </>
  )
}
