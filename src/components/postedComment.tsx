import { Stars } from '@/components/Stars.tsx'

export function PostedComment() {
  return (
    <div className={'flex flex-col gap-4 text-white'}>
      <div className={'flex gap-4 items-end'}>
        <span className={'text-1xl'}>Josinete</span>
        <Stars rating={3} />
      </div>
      <p className={'p-4 bg-blue-950 rounded-md'}>
        "Frozen II" não apenas mantém o charme e o humor que encantaram os fãs
        do primeiro filme, mas também mergulha mais fundo na mitologia e na
        história de seus personagens, oferecendo uma narrativa rica em camadas e
        surpresas emocionantes.
      </p>
      <span className={'self-end'}>16/17/24</span>
    </div>
  )
}
