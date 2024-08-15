import { Badge } from '@/components/ui/badge.tsx'
import { ScrollArea } from '@/components/ui/scroll-area.tsx'
import { X } from 'lucide-react'
import { DialogClose } from '@/components/ui/dialog.tsx'

interface IDetailsProps {
  details: Pick<
    IMovie,
    'title' | 'rating' | 'genres' | 'release_date' | 'overview'
  >
}

export function Details({
  details: { release_date, title, genres, rating, overview },
}: IDetailsProps) {
  return (
    <>
      <div className={'space-y-2  w-full'}>
        <div
          className={
            'flex justify-between items-center flex-col-reverse lg:flex-row'
          }
        >
          <h1 className={'text-2xl lg:text-4xl w-full lg:w-1/2 font-josefin'}>
            {title}
          </h1>
          <span
            className={
              'hidden lg:block text-darkBlue bg-white px-4 py-2 gap content-center rounded-md rounded-r-none h-fit lg:w-fit w-full mb-4'
            }
          >
            Média de {rating.average}
          </span>

          <DialogClose className={'-mt-4 lg:hidden my-4'}>
            <X />
          </DialogClose>
        </div>
        <ScrollArea className={'lg:max-h-48 h-28'}>
          <p className={'leading-7 w-full lg:w-9/12'}>
            {overview || 'Sem resumos disponíveis.'}
          </p>
        </ScrollArea>
      </div>
      <div className={'flex gap-2 mt-4 mb-2'}>
        {genres.map((genre) => {
          return (
            <Badge variant={'secondary'} key={genre.id}>
              {genre.name}
            </Badge>
          )
        })}
      </div>
      <Badge variant={'secondary'}>{release_date}</Badge>
    </>
  )
}
