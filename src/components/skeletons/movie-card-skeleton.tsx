import { Skeleton } from '@/components/ui/skeleton.tsx'
import { Separator } from '@/components/ui/separator.tsx'

export function MovieCardSkeleton() {
  return (
    <div className={'flex-col w-full  lg:basis-1/4'}>
      <Skeleton className={'my-4 h-2 w-6 mx-auto'} />
      <Skeleton className={'lg:w-[225px] h-[360px] mb-4'} />
      <Skeleton className={'w-3/4 my-2 h-3'} />
      <Skeleton className={'w-2/4 my-2 h-3'} />
      <Skeleton className={'w-1/4 my-2 h-3'} />
    </div>
  )
}
