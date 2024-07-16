import { Navlink } from '@/components/navlink.tsx'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <div className={'w-full blue bg-darkBlue'}>
      <div
        className={
          'w-full max-w-grid-width flex justify-between items-center m-auto p-2'
        }
      >
        <Link className={'font-black font-josefin text-2xl'} to={'/'}>MovieMania</Link>
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
