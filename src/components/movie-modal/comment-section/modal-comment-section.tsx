import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getMovieComments } from '@/api/movie/get-movie-comments.ts'
import { CommentCard } from '@/components/movie-modal/comment-section/comment-card.tsx'
import { CommentForm } from '@/components/movie-modal/comment-section/comment-form.tsx'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { MovieCardContext } from '@/components/movie-card/movie-card.tsx'
import { CommentEmpty } from '@/components/movie-modal/comment-section/comment-empty.tsx'
import { CommentCardSkeleton } from '@/components/skeletons/comment-card-skeleton.tsx'

export function ModalCommentSection() {
  const { movie, isDialogOpen } = useContext(MovieCardContext)
  const { userToken } = useContext(GlobalContext)
  const { data: post, isPending } = useQuery({
    queryKey: ['comments'],
    queryFn: () => getMovieComments(movie.id),
    enabled: isDialogOpen,
  })

  return (
    <div className={'h-full rounded-md bg-darkBlue p-4'}>
      <div
        className={
          'mt-12 px-24 max-h-[450px] overflow-y-scroll no-scrollbar mb-12'
        }
      >
        {isPending && <CommentCardSkeleton />}
        {post && post.comments.length === 0 && <CommentEmpty />}
        {post &&
          post.comments.map((comment) => {
            return <CommentCard key={comment.id} comment={comment} />
          })}
      </div>
      {userToken && <CommentForm movieId={movie.id} />}
    </div>
  )
}
