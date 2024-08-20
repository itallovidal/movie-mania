import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Menu, Popcorn } from 'lucide-react'
import { Separator } from '@/components/ui/separator.tsx'
import * as React from 'react'
import { Navlink } from '@/components/global/navbar/navlink.tsx'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { ProfileDropdown } from '@/components/profile/profile-dropdown.tsx'

export function MobileNavbar() {
  const { userToken } = useContext(GlobalContext)

  return (
    <Drawer direction={'left'}>
      <DrawerTrigger asChild className={'fixed top-4 right-4 z-30 sm:hidden'}>
        <Button>
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className={'h-screen w-[80%] bg-darkBlue'}>
        <DrawerHeader>
          <div className={'text-white flex w-full gap-4'}>
            <Popcorn className={'h-6 w-6'} />
            <Separator orientation={'vertical'} className={'h-6'} />
            <span>Movie Mania</span>
          </div>
        </DrawerHeader>
        <nav
          className={
            'p-4 gap-4 flex flex-col items-start justify-start space-y-2 '
          }
        >
          <DrawerClose asChild>
            <Navlink to={'/'}>Home</Navlink>
          </DrawerClose>
        </nav>
        <div className={'ml-auto flex items-center gap-2'}></div>

        <DrawerFooter className={'flex-row flex'}>
          <DrawerClose>
            {!userToken && <Navlink to={'/sign-in'}>Entrar</Navlink>}
            {!userToken && <Navlink to={'/sign-up'}>Criar conta</Navlink>}
            {userToken && <ProfileDropdown />}
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
