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
      className={`w-[225px] h-[360px] bg-yellow-400 ${display} rounded-md overflow-hidden`}
    >
      <img
        className={`${display === 'block' ? 'object-cover' : 'object-contain'} block w-full h-full`}
        src={cover ? `https://image.tmdb.org/t/p/w500${cover}` : placeholder}
        alt=""
      />
    </picture>
  )
}
