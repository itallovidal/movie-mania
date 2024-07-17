export function ImageCover() {
  return (
    <picture className={'w-[225px] block rounded-md overflow-hidden'}>
      <img
        className={'object-cover block w-full h-full max-w-max max-h-max'}
        src="https://image.tmdb.org/t/p/w500/hOZKUJGN0m717LRSQDxhgABqWrf.jpg"
        alt=""
      />
    </picture>
  )
}
