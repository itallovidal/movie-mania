import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/global/navbar/navbar.tsx'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'

export function AppLayout() {
  const { pathname } = useLocation()
  const { handleNavigate, userToken } = useContext(GlobalContext)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    if (pathname === '/profile' && !userToken) {
      handleNavigate('/')
    }
  }, [pathname])

  return (
    <div className={'text-white bg-darkBlue min-h-screen pb-24'}>
      <Navbar />
      <Outlet />
    </div>
  )
}
