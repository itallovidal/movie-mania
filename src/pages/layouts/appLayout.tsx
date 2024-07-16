import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/navbar.tsx'

export function AppLayout() {
  return (
    <div className={'text-white bg-darkBlue h-screen'}>
      <Navbar />
      <Outlet />
    </div>
  )
}
