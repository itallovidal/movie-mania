import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from '@/pages/signIn.tsx'
import { AuthLayout } from '@/pages/layouts/authLayout.tsx'
import { SignUp } from '@/pages/signUp.tsx'
import { Home } from '@/pages/home.tsx'
import { Profile } from '@/pages/profile.tsx'
import { AppLayout } from '@/pages/layouts/appLayout.tsx'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<AppLayout />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/profile'} element={<Profile />} />
        </Route>

        <Route path={'/'} element={<AuthLayout />}>
          <Route path={'/sign-in'} element={<SignIn />} />
          <Route path={'/sign-up'} element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
