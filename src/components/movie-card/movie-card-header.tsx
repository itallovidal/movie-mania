import { Badge } from '@/components/ui/badge.tsx'

export function MovieCardHeader({ children }: { children: string }) {
  return <Badge className={'my-4'}>{children}</Badge>
}
