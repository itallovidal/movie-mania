import { Stars } from '@/components/stars.tsx'

export function CommentCard({ comment }: { comment: IComment }) {
  if (!comment) return <></>

  return (
    <div className={'animate-showing-opacity flex flex-col gap-2 my-4 text-white'}>
      <div className={'flex items-center'}>
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
