import { Header } from '@/components/home/header.tsx'
import { MovieSection } from '@/components/movie-section/movie-section.tsx'
import { GENRES } from '@/@types/genres.ts'

function HomeMain() {
  return (
    <div className={'-mt-8  flex flex-col gap-12 '}>
      {GENRES.map((genre) => (
        <MovieSection key={genre.id} section={genre} />
      ))}
    </div>
  )
}

export function Home() {
  return (
    <>
      <Header />
      <HomeMain />
    </>
  )
}
