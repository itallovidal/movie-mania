import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '@/components/ui/button.tsx'
import { MovieSectionTitle } from '@/components/movie-section/movie-section-title.tsx'
interface ICategorySelectionProps {
  genres: IGenre[] | undefined
}

interface ICategoryCardProps {
  genre: IGenre
}

function CategoryCard({ genre }: ICategoryCardProps) {
  return (
    <div
      className={
        'cursor-pointer bg-home-background bg-center h-[100px] w-[calc(33%-theme(gap.1))] p-2 rounded-md grid place-content-center'
      }
    >
      <Link className={'font-josefin'} to={`/movies/${genre.id}`}>
        {genre.name}
      </Link>
    </div>
  )
}

function CategorySelectionContent({
  genres,
  isOpen,
}: ICategorySelectionProps & { isOpen: boolean }) {
  return (
    <div
      className={
        'w-[90%] my-12 max-w-grid-width mx-auto flex flex-wrap gap-2  mb-12'
      }
    >
      {genres &&
        genres.map((genre, index) => {
          if (!isOpen && index > 5) {
            return <></>
          }

          return <CategoryCard genre={genre} />
        })}
    </div>
  )
}

export function CategorySelection({ genres }: ICategorySelectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={'w-[90%] max-w-grid-width mx-auto flex flex-col mb-24'}>
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
  )
}
