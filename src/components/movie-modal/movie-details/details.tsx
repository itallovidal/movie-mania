import { Badge } from '@/components/ui/badge.tsx'

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
        <div className={'flex justify-between items-center'}>
          <h1 className={'text-4xl w-1/2 font-josefin'}>{title}</h1>
          <span
            className={
              'text-darkBlue bg-white px-4 py-2 gap content-center rounded-l-md h-fit '
            }
          >
            Média de {rating.average}
          </span>
        </div>
        <p className={'leading-7 w-9/12'}>
          {overview || 'Sem resumos disponíveis.'}
        </p>
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
