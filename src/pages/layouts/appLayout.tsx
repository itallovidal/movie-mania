import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <h1>navbar</h1>
      <Outlet />
      <h1>footer</h1>
    </div>
  )
}
