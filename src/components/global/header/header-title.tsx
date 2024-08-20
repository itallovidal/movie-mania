import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'

export function HeaderTitle() {
  const { profile } = useContext(GlobalContext)

  if (profile) {
    return (
      <div className="flex-1 flex flex-col justify-center">
        <h1 className={'text-6xl font-josefin tracking-tighter'}>
          Bem Vindo, <span className={'text-yellow-500'}>{profile.name}</span>
        </h1>
        <p className={'font-roboto text-2xl mb-6'}>
          Comente, crie listas, avalie, compartilhe suas experiências!
        </p>
      </div>
    )
  }

  return (
    <div className={'flex-1 flex flex-col justify-center'}>
      <h1 className={'italic text-5xl font-josefin tracking-tighter'}>
        " Cinema é a fraude mais bonita do mundo. "
      </h1>
      <p className={'font-roboto text-2xl mb-6 w-full text-right'}>
        Jean-Luc Godard
      </p>
    </div>
  )
}
