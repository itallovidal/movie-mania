import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/navbar.tsx'

export function AppLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <h1>footer</h1>
    </div>
  )
}
