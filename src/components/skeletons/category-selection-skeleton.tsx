import { Skeleton } from '@/components/ui/skeleton.tsx'

export function CategorySelectionSkeleton() {
  return (
    <div
      className={
        'w-[90%] my-12 max-w-grid-width mx-auto flex flex-wrap gap-2  mb-12 animate-showing-up'
      }
    >
      {Array.from({ length: 6 }, (_, index) => {
        return (
          <Skeleton
            key={index}
            className={
              'cursor-pointer h-[100px] w-[calc(33%-theme(gap.1))]  rounded-md'
            }
          />
        )
      })}
    </div>
  )
}
