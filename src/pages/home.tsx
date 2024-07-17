import { Header } from '@/components/home/header.tsx'
import { MoviesSection } from '@/components/MoviesSection.tsx'
import { Dialog, DialogContent } from '@/components/ui/dialog.tsx'

export function Home() {
  return (
    <>
      <Header />
      <Dialog>
        <div className={'-mt-8  flex flex-col gap-12'}>
          <MoviesSection />
          <MoviesSection />
          <MoviesSection />
          <MoviesSection />
        </div>

        <DialogContent>
          <h1>Focofocofoco</h1>
        </DialogContent>
      </Dialog>
    </>
  )
}
