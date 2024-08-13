import { ReactNode } from 'react'

export function MovieSectionRoot({ children }: { children: ReactNode }) {
  return (
    <div
      className={
        'animate-showing-opacity w-[90%] max-w-grid-width m-auto mb-12'
      }
    >
      {children}
    </div>
  )
}
