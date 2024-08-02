import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface IGlobalContextProps {
  userToken: string | null
  handleSetToken: ({ token: string }) => void
  handleNavigate: (route: string) => void
  handleLogOut: () => void
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

  function handleNavigate(route: string) {
    navigate(route)
  }
  function handleLogOut() {
    localStorage.clear()
    setToken(null)
    navigate('/')
  }

  function handleSetToken({ token }: { token: string }) {
    localStorage.setItem('user-token', JSON.stringify(token))
    setToken(token)
  }

  return (
    <GlobalContext.Provider
      value={{ userToken, handleSetToken, handleNavigate, handleLogOut }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
