import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getProfile } from '@/api/user/get-profile.ts'

interface IGlobalContextProps {
  userToken: string | null
  handleSetToken: ({ token: string }) => void
  handleNavigate: (route: string) => void
  handleLogOut: () => void
  profile: undefined | IProfile
}

export const GlobalContext = createContext({} as IGlobalContextProps)

export function GlobalContextProvider({ children }) {
  const [userToken, setToken] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('user-token')
    if (token) {
      setToken(token)
    }
  }, [])

  const { data: user } = useQuery({
    queryKey: ['profile', userToken],
    queryFn: () => {
      if (userToken) return getProfile(userToken)
    },
    enabled: !!userToken,
  })

  function handleNavigate(route: string) {
    navigate(route)
  }
  function handleLogOut() {
    localStorage.clear()
    setToken(null)
    navigate('/')
  }

  function handleSetToken({ token }: { token: string }) {
    localStorage.setItem('user-token', token)
    setToken(token)
  }

  return (
    <GlobalContext.Provider
      value={{
        userToken,
        handleSetToken,
        handleNavigate,
        handleLogOut,
        profile: user?.profile,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
