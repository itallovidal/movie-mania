import { ReactNode } from 'react'

export function HeaderWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className={
        'bg-home-background min-h-[400px] flex items-center justify-start p-2'
      }
    >
      <div className={'max-w-grid-width m-auto w-full  p-2'}>{children}</div>
    </div>
  )
}
