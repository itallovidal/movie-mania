import { Stars } from '@/components/Stars.tsx'
import { ImageCover } from '@/components/imageCover.tsx'
import { DialogContent } from '@/components/ui/dialog.tsx'
import { PostedComment } from '@/components/postedComment.tsx'
import { ScrollArea } from '@/components/ui/scroll-area.tsx'
import { CommentBox } from '@/components/commentBox.tsx'
import { IMovie } from '@/@types/IMovie.ts'
import { Badge } from '@/components/ui/badge.tsx'
import backdropPlaceholder from '../assets/home/headerBackdrop.png'
import { useQuery } from '@tanstack/react-query'
import { getMovieComments } from '@/api/get-movie-comments.ts'

export function MovieDetails({
  movie,
  isEnabled,
}: {
  movie: IMovie
  isEnabled: boolean
}) {
  const { data: comments } = useQuery({
    queryKey: ['comments'],
    queryFn: () => getMovieComments(movie.id),
    enabled: isEnabled,
  })

  return (
    <DialogContent
      className={
        'bg-darkBlue min-w-grid-width p-0 overflow-hidden border-0 outline-0'
      }
    >
      <ScrollArea className={'max-h-[800px]'}>
        <div className={'relative backdropLowOpacity'}>
          <picture className={'absolute top-0 left-0  w-full h-full'}>
            <img
              className={'w-full h-full object-cover'}
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                  : backdropPlaceholder
              }
              alt=""
            />
          </picture>
          <div className={`w-full  bg-yellow-400  text-white`}>
            <div
              className={
                'relative z-10 grid grid-cols-8 gap-4 min-h-[410px] py-8 '
              }
            >
              <div className={'col-start-3 col-span-2 row-start-1'}>
                <ImageCover display={'initial'} cover={movie.poster_path} />
              </div>
              <div className={'col-start-5 row-start-1 col-span-2'}>
                <h1 className={'text-4xl font-josefin'}>Frozen</h1>
                <p>{movie.overview || 'Sem resumos disponíveis.'}</p>
                <Stars rating={movie.vote_average} />

                {movie.genres.map((genre) => {
                  return <Badge>{genre.name}</Badge>
                })}
                <p> {movie.release_date} </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            'mt-12 px-24 max-h-[450px] overflow-y-scroll no-scrollbar mb-12'
          }
        >
          {comments &&
            comments.map((comment) => {
              return <PostedComment comment={comment} />
            })}
        </div>

        <CommentBox />
        <div
          className={
            'text-white flex justify-center flex-col items-center mb-16'
          }
        >
          <h1 className={'text-2xl'}>Minha Avaliação</h1>
          <Stars rating={4} />
        </div>
      </ScrollArea>
    </DialogContent>
  )
}
