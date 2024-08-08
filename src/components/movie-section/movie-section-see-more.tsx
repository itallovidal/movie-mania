import { Button } from '@/components/ui/button.tsx'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function MovieSectionSeeMore({ id }: { id: number }) {
  return (
    <Link to={`/movie/${id}`}>
      <Button variant={'ghost'}>
        Ver mais <ChevronRight />
      </Button>
    </Link>
  )
}
