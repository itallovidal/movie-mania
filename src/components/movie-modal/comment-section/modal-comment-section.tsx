import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getMovieComments } from '@/api/movie/get-movie-comments.ts'
import { CommentCard } from '@/components/movie-modal/comment-section/comment-card.tsx'
import { CommentForm } from '@/components/movie-modal/comment-section/comment-form.tsx'
import { GlobalContext } from '@/contexts/global-context.tsx'

interface IModalCommentSection {
  movieId: number
  isDialogOpen: boolean
}

export function ModalCommentSection({
  movieId,
  isDialogOpen,
}: IModalCommentSection) {
  const { userToken } = useContext(GlobalContext)
  const { data: post } = useQuery({
    queryKey: ['comments'],
    queryFn: () => getMovieComments(movieId),
    enabled: isDialogOpen,
  })

  return (
    <div className={'h-full rounded-md bg-darkBlue p-4'}>
      <div
        className={
          'mt-12 px-24 max-h-[450px] overflow-y-scroll no-scrollbar mb-12'
        }
      >
        {post &&
          post.comments.map((comment) => {
            return <CommentCard key={comment.id} comment={comment} />
          })}
      </div>
      {userToken && <CommentForm movieId={movieId} />}
    </div>
  )
}
