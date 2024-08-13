import { MessageSquareMore } from 'lucide-react'

export function CommentEmpty() {
  return (
    <div
      className={
        'h-32 p-24 w-full space-y-6 flex flex-col justify-center items-center '
      }
    >
      <MessageSquareMore />
      <span className={'text-white'}>Sem comentários no momento.</span>
    </div>
  )
}
