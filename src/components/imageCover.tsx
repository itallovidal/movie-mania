import placeholder from '../assets/404.jpg'

export function ImageCover({
  cover,
  display = 'block',
}: {
  cover: string
  display?: 'block' | 'initial'
}) {
  return (
    <picture
      className={`w-[225px] h-[360px] ${display} rounded-md overflow-hidden`}
    >
      <img
        className={'object-cover block w-full h-full max-w-max max-h-max'}
        src={cover ? `https://image.tmdb.org/t/p/w500${cover}` : placeholder}
        alt=""
      />
    </picture>
  )
}
