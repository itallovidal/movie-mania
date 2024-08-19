import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'

export function HeaderTitle() {
  const { profile } = useContext(GlobalContext)

  return (
    <>
      <h1 className={'text-6xl font-josefin tracking-tighter'}>
        Bem Vindo, <span className={'text-yellow-500'}>{profile?.name}</span>
      </h1>
      <p className={'font-roboto'}>Diversos filmes, diversos filmes diversos</p>
    </>
  )
}
