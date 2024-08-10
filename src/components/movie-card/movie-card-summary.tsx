import { Stars } from '@/components/stars.tsx'

interface IMovieCardSummaryProps {
  children: string
  stars: number | null | undefined
}

export function MovieCardSummary({ children, stars }: IMovieCardSummaryProps) {
  return (
    <div>
      <p
        className={
          'mt-4 line-clamp-2 text-left min-h-[4ch] font-bold font-josefin text-2xl'
        }
      >
        {children}
      </p>

      {stars && <Stars rating={stars} />}
    </div>
  )
}
