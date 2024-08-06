import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Navlink } from '@/components/navlink.tsx'
import { useContext } from 'react'
import { GlobalContext } from '@/components/global-context.tsx'

export function ProfileDropdown() {
  const { handleLogOut } = useContext(GlobalContext)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} className={'text-background'}>
          Conta
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={'bg-semiDarkBlue border-0'}>
        <DropdownMenuLabel>
          <Navlink to={'/profile'}>Meu perfil</Navlink>
        </DropdownMenuLabel>
        <DropdownMenuLabel>
          <Button
            variant={'ghost'}
            className={'text-background'}
            onClick={() => handleLogOut()}
          >
            Sair
          </Button>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
