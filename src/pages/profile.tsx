import { MoviesSection } from '@/components/MoviesSection.tsx'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card.tsx'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { Badge } from '@/components/ui/badge.tsx'
import { Dialog } from '@/components/ui/dialog.tsx'
import { MovieDetails } from '@/components/MovieDetails.tsx'
import { Button } from '@/components/ui/button.tsx'

export function Profile() {
  return (
    <main
      className={`m-auto gap-4 relative grid grid-cols-[200px_944px] justify-center`}
    >
      <Card className={'p-4 col-start-1 h-fit sticky top-8'}>
        <CardTitle className={'mb-4'}>Itallo Vidal</CardTitle>
        <Separator />
        <CardContent className={'p-0 space-y-4'}>
          <div className={'w-full flex gap-2 justify-start'}>
            <Badge>Drama</Badge>
            <Badge>Suspense</Badge>
          </div>

          <Button variant={'outline'}>Atualizar Perfil</Button>
        </CardContent>
      </Card>
      <Dialog>
        <div className={'col-start-2  flex flex-col gap-12'}>
          <MoviesSection />
          <MoviesSection />
          <MoviesSection />
          <MoviesSection />
        </div>

        <MovieDetails />
      </Dialog>
    </main>
  )
}
