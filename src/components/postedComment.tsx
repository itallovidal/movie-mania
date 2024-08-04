import { Stars } from '@/components/Stars.tsx'
import { IComment } from '@/@types/IComment.ts'

export function PostedComment({ comment }: { comment: IComment }) {
  if (!comment) return <></>

  return (
    <div className={'flex flex-col gap-4 text-white'}>
      <div className={'flex items-end'}>
        <span className={'text-1xl mr-2'}>{comment.user.name}</span>
        {comment.user.rating ? (
          <Stars rating={comment.user.rating} />
        ) : (
          <span className={'text-1xl  opacity-55'}>
            | O usuário ainda não avaliou.
          </span>
        )}
      </div>
      <p className={'p-4 bg-semiDarkBlue rounded-md'}>{comment.comment}</p>
      <span className={'self-end'}>{comment.created_at}</span>
    </div>
  )
}
