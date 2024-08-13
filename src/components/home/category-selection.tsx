import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '@/components/ui/button.tsx'
import { MovieSectionTitle } from '@/components/movie-section/movie-section-title.tsx'
import { CategorySelectionSkeleton } from '@/components/skeletons/category-selection-skeleton.tsx'
interface ICategorySelectionProps {
  genres: IGenre[] | undefined
}

interface ICategoryCardProps {
  genre: IGenre
}

function CategoryCard({ genre }: ICategoryCardProps) {
  return (
    <Link
      className={
        'w-full animate-showing-up cursor-pointer bg-home-background bg-center h-[100px] sm:w-[calc(33%-theme(gap.1))] p-2 rounded-md grid place-content-center'
      }
      to={`/movie/${genre.id}`}
    >
      <span className={'font-josefin'}>{genre.name}</span>
    </Link>
  )
}

function CategorySelectionContent({
  genres,
  isOpen,
}: ICategorySelectionProps & { isOpen: boolean }) {
  if (!genres) return <CategorySelectionSkeleton />

  return (
    <div
      className={
        'w-[90%] animate-showing-opacity my-12 max-w-grid-width mx-auto flex flex-wrap gap-2  mb-12'
      }
    >
      {genres &&
        genres.map((genre, index) => {
          if (!isOpen && index > 5) {
            return <></>
          }

          return <CategoryCard key={`${genre.id - index}`} genre={genre} />
        })}
    </div>
  )
}

export function CategorySelection({ genres }: ICategorySelectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={'bg-white/5 pb-4'}>
      <div
        className={'w-[90%] py-12 max-w-grid-width mx-auto flex flex-col mb-24'}
      >
        <MovieSectionTitle>Categorias</MovieSectionTitle>
        <CategorySelectionContent genres={genres} isOpen={isOpen} />
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          className={'mx-auto mt-4'}
          variant={'secondary'}
        >
          {!isOpen ? 'Ver todas Categorias' : 'Ocultar'}
        </Button>
      </div>
    </div>
  )
}
