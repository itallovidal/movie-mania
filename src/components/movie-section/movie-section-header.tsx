import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.tsx'
import { ChevronRight } from 'lucide-react'

interface ISectionHeaderProps {
  data: {
    name: string
    id: string
  }
}

export function MovieSectionHeader({
  data: { name, id },
}: ISectionHeaderProps) {
  return (
    <div className={'flex justify-between'}>
      <h1 className={'text-4xl font-josefin font-bold tracking-tight mb-4'}>
        {name}
      </h1>

      <Link to={`/movies/${id}`}>
        <Button variant={'ghost'}>
          Ver mais <ChevronRight />
        </Button>
      </Link>
    </div>
  )
}
