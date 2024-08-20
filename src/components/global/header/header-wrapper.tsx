import { ReactNode } from 'react'

export function HeaderWrapper({ children }: { children: ReactNode }) {
  return (
    <div className={'bg-home-background min-h-[400px] flex mb-12 '}>
      <div
        className={
          'max-w-grid-width mx-auto flex flex-col justify-center w-full  animate-showing-up'
        }
      >
        {children}
      </div>
    </div>
  )
}
