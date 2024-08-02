import { Stars } from '@/components/Stars.tsx'
import { IComment } from '@/@types/IComment.ts'

export function PostedComment({ comment }: { comment: IComment }) {
  return (
    <div className={'flex flex-col gap-4 text-white'}>
      <div className={'flex gap-4 items-end'}>
        <span className={'text-1xl'}>{comment.name}</span>
        <Stars rating={comment.rating} />
      </div>
      <p className={'p-4 bg-blue-950 rounded-md'}>{comment.text}</p>
      <span className={'self-end'}>{comment.created_at}</span>
    </div>
  )
}
