import { Stars } from '@/components/Stars.tsx'
import { ImageCover } from '@/components/imageCover.tsx'
import { DialogContent } from '@/components/ui/dialog.tsx'
import { PostedComment } from '@/components/postedComment.tsx'
import { ScrollArea } from '@/components/ui/scroll-area.tsx'
import { CommentBox } from '@/components/commentBox.tsx'

export function MovieDetails() {
  return (
    <DialogContent
      className={
        'bg-darkBlue min-w-grid-width p-0 overflow-hidden border-0 outline-0'
      }
    >
      <ScrollArea className={'max-h-[800px]'}>
        <div className={'relative backdropLowOpacity'}>
          <div
            className={
              'w-full bg-[url(https://image.tmdb.org/t/p/w500/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg)] bg-no-repeat bg-cover text-white'
            }
          >
            <div
              className={
                'relative z-10 grid grid-cols-8 justify-items-end gap-4 min-h-[410px] pt-8'
              }
            >
              <div className={'col-start-2 col-end-5'}>
                <ImageCover />
              </div>
              <div className={'col-start-5 col-span-3'}>
                <h1 className={'text-4xl font-josefin'}>Frozen</h1>
                <p>
                  Elsa, Anna, Kristoff, Olaf e Sven se aventuram na floresta
                  encantada e nos mares escuros além de Arendelle – onde Elsa
                  descobre não apenas a verdade sobre seu passado, mas uma
                  ameaça ao seu reino.
                </p>
                <Stars rating={4} />

                <p> drama / suspense </p>
                <p> 02/01/2020 </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            'mt-12 px-24 max-h-[450px] overflow-y-scroll no-scrollbar mb-12'
          }
        >
          <PostedComment />
          <PostedComment />
          <PostedComment />
          <PostedComment />
          <PostedComment />
          <PostedComment />
          <PostedComment />
        </div>

        <CommentBox />
        <div
          className={
            'text-white flex justify-center flex-col items-center mb-16'
          }
        >
          <h1 className={'text-2xl'}>Minha Avaliação</h1>
          <Stars rating={4} />
        </div>
      </ScrollArea>
    </DialogContent>
  )
}
