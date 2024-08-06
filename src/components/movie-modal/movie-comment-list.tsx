import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getMovieComments } from '@/api/get-movie-comments.ts'
import { PostedComment } from '@/components/postedComment.tsx'
import { CommentBox } from '@/components/commentBox.tsx'
import { GlobalContext } from '@/components/globalContext.tsx'
import { CardContext } from '@/components/movieCard.tsx'

export function MovieCommentList() {
  const { userToken } = useContext(GlobalContext)
  const { movie } = useContext(CardContext)
  const { data: comments } = useQuery({
    queryKey: ['comments'],
    queryFn: () => getMovieComments(movie.id),
    enabled: false,
  })

  return (
    <div>
      {userToken && <CommentBox />}

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
    </div>
  )
}
