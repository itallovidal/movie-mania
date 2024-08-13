import { Skeleton } from '@/components/ui/skeleton.tsx'
import { Separator } from '@/components/ui/separator.tsx'

export function CommentCardSkeleton() {
  return (
    <div className={'animate-showing-up flex flex-col gap-2 my-4 text-white'}>
      <div className={'flex items-center space-x-4'}>
        <Skeleton className={'w-24 h-4'} />
        <Separator orientation={'vertical'} />
        <Skeleton className={'w-24 h-4'} />
      </div>
      <Skeleton className={'p-4 h-24 w-full'} />
      <Skeleton className={'self-end w-24 h-4'} />
    </div>
  )
}
