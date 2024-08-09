import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Navlink } from '@/components/global/navbar/navlink.tsx'
import { useContext } from 'react'
import { MovieContext } from '@/contexts/movie-context.tsx'

export function NavGenresDropdown() {
  const { genreList } = useContext(MovieContext)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} className={'text-background'}>
          Categorias
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={'bg-semiDarkBlue border-0 flex-col flex'}>
        {genreList &&
          genreList.map((genre) => {
            return (
              <Navlink key={genre.id} to={`/movie/${genre.id}`}>
                {genre.name}
              </Navlink>
            )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
