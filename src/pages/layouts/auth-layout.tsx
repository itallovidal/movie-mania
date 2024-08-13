import { Outlet } from 'react-router-dom'
import poster from '../../assets/auth/authBackdroop.png'

export function AuthLayout() {
  return (
    <main className={'h-screen grid grid-cols-2'}>
      <picture className={'animate-showing-opacity col-start-1 overflow-hidden'}>
        <img className={'h-full w-full object-cover'} src={poster} alt="" />
      </picture>

      <Outlet />
    </main>
  )
}
