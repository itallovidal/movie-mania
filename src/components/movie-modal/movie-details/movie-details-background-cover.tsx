import backdropPlaceholder from '@/assets/home/headerBackdrop.png'

interface IBackgroundCover {
  backdrop_path: string
}

export function MovieDetailsBackgroundCover({
  backdrop_path,
}: IBackgroundCover) {
  return (
    <picture className={'absolute top-0 left-0 w-full h-full'}>
      <img
        className={'w-full h-full object-cover'}
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
            : backdropPlaceholder
        }
        alt=""
      />
    </picture>
  )
}
