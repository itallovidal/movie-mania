import { DialogContent, DialogTitle } from '@/components/ui/dialog.tsx'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx'
import { ModalCommentSection } from '@/components/movie-modal/comment-section/modal-comment-section.tsx'
import { ModalDetails } from '@/components/movie-modal/movie-details/modal-details.tsx'
import { useContext } from 'react'
import { CardContext } from '@/components/movie-card/movie-card.tsx'

export function MovieModal() {
  const { movie } = useContext(CardContext)

  return (
    <DialogContent
      title={`${movie.title} Details`}
      className={
        'bg-transparent min-w-grid-width p-0 overflow-hidden border-0 outline-0 max-h-[800px]'
      }
    >
      <DialogTitle className={'hidden'}>`${movie.title} Details`</DialogTitle>
      <Tabs defaultValue="details" className="w-full min-h-[70vh] ">
        <TabsList className={'w-full bg-darkBlue'}>
          <TabsTrigger value="details">Detalhes do Filme</TabsTrigger>
          <TabsTrigger value="commentList">Lista de Comentários</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <ModalDetails />
        </TabsContent>
        <TabsContent value="commentList">
          <ModalCommentSection />
        </TabsContent>
      </Tabs>
    </DialogContent>
  )
}
