import { Link, LinkProps } from 'react-router-dom'
import { Button } from '@/components/ui/button.tsx'

interface INavLinkProps extends LinkProps {}

export function Navlink({ children, to }: INavLinkProps) {
  return (
    <Link to={to}>
      <Button variant={'ghost'} size={'sm'} className={'text-background'}>
        {children}
      </Button>
    </Link>
  )
}
