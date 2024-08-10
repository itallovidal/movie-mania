import { createContext, useContext, useState } from 'react'

interface ICardContext {
  isDialogOpen: boolean
  movie: IMovie
  userRating: IRating | undefined
}
export const CardContext = createContext({} as ICardContext)

export function MovieCardContent({ movie }: { movie: IMovie }) {
  return <></>
}
