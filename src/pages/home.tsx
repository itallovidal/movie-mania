import { Header } from '@/components/home/header.tsx'
import { MoviesSection } from '@/components/MoviesSection.tsx'
import { Dialog } from '@/components/ui/dialog.tsx'
import { MovieDetails } from '@/components/MovieDetails.tsx'

export function Home() {
  return (
    <>
      <Header />
      <Dialog>
        <div className={'-mt-8  flex flex-col gap-12'}>
          <MoviesSection />
          <MoviesSection />
          <MoviesSection />
          <MoviesSection />
        </div>

        <MovieDetails />
      </Dialog>
    </>
  )
}
