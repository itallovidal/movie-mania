import { ReactNode } from 'react'

export function MovieSectionRoot({ children }: { children: ReactNode }) {
  return (
    <div className={'w-[100%] max-w-grid-width m-auto mb-12'}>{children}</div>
  )
}
