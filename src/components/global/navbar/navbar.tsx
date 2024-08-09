import { Navlink } from '@/components/global/navbar/navlink.tsx'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { NavGenresDropdown } from '@/components/global/navbar/nav-genres-dropdown.tsx'
import { ProfileDropdown } from '@/components/profile/profile-dropdown.tsx'

export function Navbar() {
  const { userToken } = useContext(GlobalContext)
  return (
    <div className={'w-full blue bg-darkBlue'}>
      <div
        className={
          'w-full max-w-grid-width flex justify-between items-center m-auto p-2'
        }
      >
        <Link className={'font-black font-josefin text-2xl'} to={'/'}>
          MovieMania
        </Link>
        <nav className={'space-x-2'}>
          <Navlink to={'/'}>Todos</Navlink>
          <Navlink to={'/#foryou'}>Para você</Navlink>
          <NavGenresDropdown />
          {userToken && <ProfileDropdown />}
          {!userToken && <Navlink to={'/sign-in'}>Entrar</Navlink>}
          {!userToken && <Navlink to={'/sign-up'}>Criar conta</Navlink>}
        </nav>
      </div>
    </div>
  )
}
