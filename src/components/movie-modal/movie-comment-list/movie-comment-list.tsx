import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getMovieComments } from '@/api/get-movie-comments.ts'
import { PostedComment } from '@/components/movie-modal/movie-comment-list/posted-comment.tsx'
import { CommentBox } from '@/components/movie-modal/movie-comment-list/comment-box.tsx'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { CardContext } from '@/components/movie-card/movie-card.tsx'

export function MovieCommentList() {
  const { userToken } = useContext(GlobalContext)
  const { movie, isDialogOpen } = useContext(CardContext)
  const { data: comments } = useQuery({
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
        {comments?.length &&
          comments.map((comment) => {
            return <PostedComment key={comment.id} comment={comment} />
          })}
      </div>
      {userToken && <CommentBox />}
    </div>
  )
}
