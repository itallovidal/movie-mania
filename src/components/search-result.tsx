import { Clapperboard } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'

export function SearchResult({ name }: { name: string }) {
  return (
    <Button
      variant={'ghost'}
      className={'flex w-full gap-2 py-2 justify-between flex-wrap h-fit'}
    >
      <Clapperboard className={'w-8'} />
      <span className={'flex-1  text-left leading-loose text-pretty'}>
        {name}
      </span>
    </Button>
  )
}
