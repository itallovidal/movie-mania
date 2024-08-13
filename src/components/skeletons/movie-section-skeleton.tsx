import { Skeleton } from '@/components/ui/skeleton.tsx'
import { MovieCardSkeleton } from '@/components/skeletons/movie-card-skeleton.tsx'

export function MovieSectionSkeleton() {
  return (
    <div
      className={'animate-showing-up w-[100%] max-w-grid-width m-auto mb-12'}
    >
      <div className={'flex justify-between mb-4'}>
        <Skeleton className={'h-[24px] w-[150px]'} />
        <Skeleton className={'size-[20px] '} />
      </div>
      <div className={'flex justify-between'}>
        <MovieCardSkeleton />
        <MovieCardSkeleton />
        <MovieCardSkeleton />
        <MovieCardSkeleton />
      </div>
    </div>
  )
}
