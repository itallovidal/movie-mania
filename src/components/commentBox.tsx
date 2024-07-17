import { Textarea } from '@/components/ui/textarea.tsx'
import { Button } from '@/components/ui/button.tsx'

export function CommentBox() {
  return (
    <div className={'text-white px-24 my-12'}>
      <span>Nome</span>
      <Textarea />
      <div className={'flex justify-between mt-4'}>
        <span className={'text-muted-foreground'}>
          Ajude a tornar a área de comentários segura, seja gentil.
        </span>
        <Button variant={'ghost'}>Enviar.</Button>
      </div>
    </div>
  )
}
