import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Navlink } from '@/components/navlink.tsx'
import { GENRES } from '@/@types/genres.ts'

export function GenresDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} className={'text-background'}>
          Categorias
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={'bg-primary border-0 flex-col flex'}>
        {GENRES.map((genre) => {
          return <Navlink to={`/more/${genre.id}`}>{genre.name}</Navlink>
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
