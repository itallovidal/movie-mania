import { Stars } from '@/components/stars.tsx'

interface IMovieCardSummaryProps {
  stars: number | null | undefined
}

export function MovieCardSummary({ stars }: IMovieCardSummaryProps) {
  if (!stars) return <></>

  return (
    <div
      className={
        'rounded-md bg-white w-fit p-2 flex justify-center top-[-10%] absolute z-40 shadow-2xl animate-showing-up'
      }
    >
      <Stars rating={stars} />
    </div>
  )
}
