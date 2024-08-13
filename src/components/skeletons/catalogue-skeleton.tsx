import { MovieCardSkeleton } from '@/components/skeletons/movie-card-skeleton.tsx'

export function CatalogueSkeleton() {
  return (
    <div className={`animate-showing-up w-[90%] max-w-grid-width m-auto`}>
      <div className={'gap-y-24 flex-wrap flex justify-start flex-row'}>
        {Array.from({ length: 10 }, (index: number) => {
          return <MovieCardSkeleton key={index} />
        })}
      </div>
    </div>
  )
}
