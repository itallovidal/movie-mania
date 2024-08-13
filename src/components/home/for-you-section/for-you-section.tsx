import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { ForYouMovies } from '@/components/home/for-you-section/for-you-movies.tsx'

export function ForYouSection() {
  const { profile } = useContext(GlobalContext)

  return (
    <div className={`py-12 bg-gradient-principal`}>
      <h1
        className={
          'mb-12 font-josefin font-bold italic max-w-grid-width mx-auto text-4xl'
        }
      >
        Baseado em suas preferências:
      </h1>
      {profile?.name &&
        profile.favoriteGenres.map((genre) => {
          return <ForYouMovies key={genre.id} genre={genre} />
        })}
    </div>
  )
}
