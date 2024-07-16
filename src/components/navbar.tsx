import { Navlink } from '@/components/navlink.tsx'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx'
import { Button } from '@/components/ui/button.tsx'

export function Navbar() {
  return (
    <div className={'w-full blue bg-primary'}>
      <div
        className={
          'w-full max-w-[1200px] flex justify-between items-center m-auto p-2'
        }
      >
        <Navlink to={'/'}>MovieMania</Navlink>
        <nav>
          <Navlink to={'/profile'}>Perfil</Navlink>
          <Navlink to={'/#all'}>Todos</Navlink>
          <Navlink to={'/#foryou'}>Para você</Navlink>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={'ghost'} className={'text-background'}>
                Categorias
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={'bg-primary'}>
              <DropdownMenuLabel>
                <Navlink to={'/#comedy'}>Comédia</Navlink>
              </DropdownMenuLabel>
              <DropdownMenuLabel>
                <Navlink to={'/#crime'}>Crime</Navlink>
              </DropdownMenuLabel>
              <DropdownMenuLabel>
                <Navlink to={'/#action'}>Ação</Navlink>
              </DropdownMenuLabel>
              <DropdownMenuLabel>
                <Navlink to={'/#documentary'}>Documentário</Navlink>
              </DropdownMenuLabel>
              <DropdownMenuLabel>
                <Navlink to={'/#drama'}>Drama</Navlink>
              </DropdownMenuLabel>
              <DropdownMenuLabel>
                <Navlink to={'/#adventure'}>Aventura</Navlink>
              </DropdownMenuLabel>
              <DropdownMenuLabel>
                <Navlink to={'/#animation'}>Animação</Navlink>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </div>
  )
}
