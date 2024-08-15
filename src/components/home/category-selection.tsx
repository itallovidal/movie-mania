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
  type GenreID =
    | 28 // Ação
    | 12 // Aventura
    | 16 // Animação
    | 35 // Comédia
    | 80 // Crime
    | 99 // Documentário
    | 18 // Drama
    | 10751 // Família
    | 14 // Fantasia
    | 36 // História
    | 27 // Terror
    | 10402 // Música
    | 9648 // Mistério
    | 10749 // Romance
    | 878 // Ficção científica
    | 10770 // Cinema TV
    | 53 // Thriller
    | 10752 // Guerra
    | 37 // Faroeste

  const genreImagePaths: Record<GenreID, string> = {
    28: 'bg-category-action',
    12: 'bg-category-adventure',
    16: 'bg-category-animation',
    35: 'bg-category-comedy',
    80: 'bg-category-crime',
    99: 'bg-category-documentary',
    18: 'bg-category-drama',
    10751: 'bg-category-family',
    14: 'bg-category-fantasy',
    36: 'bg-category-history',
    27: 'bg-category-horror',
    10402: 'bg-category-musical',
    9648: 'bg-category-mistery',
    10749: 'bg-category-romance',
    878: 'bg-category-cience-fiction',
    10770: 'home-background',
    53: 'bg-category-thriller',
    10752: 'bg-category-war',
    37: 'bg-category-bangbang',
  }

  return (
    <Link
      className={`w-full backdropLowOpacity animate-showing-up bg-h cursor-pointer ${genreImagePaths[genre.id as GenreID]} bg-contain bg-center h-[100px] sm:w-[calc(33%-theme(gap.1))] p-2 rounded-md grid place-content-center`}
      to={`/movie/${genre.id}`}
    >
      <span className={'font-josefin z-20'}>{genre.name}</span>
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
