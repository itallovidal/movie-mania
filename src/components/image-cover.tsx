import placeholder from '../assets/404.jpg'

export function ImageCover({
  cover,
  display = 'block',
}: {
  cover: string
  display?: 'block' | 'initial'
}) {
  return (
    <picture className={`h-[360px]  ${display} rounded-md overflow-hidden`}>
      <img
        className={`${display === 'block' ? 'object-cover' : 'object-contain'} block w-full h-full`}
        src={cover ? `https://image.tmdb.org/t/p/w500${cover}` : placeholder}
        alt=""
      />
    </picture>
  )
}
