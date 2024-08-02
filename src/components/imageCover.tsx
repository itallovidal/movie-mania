import placeholder from '../assets/404.jpg'

export function ImageCover({ cover }: { cover: string }) {
  return (
    <picture className={'w-[225px] h-[360px] block rounded-md overflow-hidden'}>
      <img
        className={'object-cover block w-full h-full max-w-max max-h-max'}
        src={cover ? `https://image.tmdb.org/t/p/w500${cover}` : placeholder}
        alt=""
      />
    </picture>
  )
}
