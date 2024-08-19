import { DialogContent, DialogTitle } from '@/components/ui/dialog.tsx'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx'
import { ModalCommentSection } from '@/components/movie-modal/comment-section/modal-comment-section.tsx'
import { ModalDetailsSection } from '@/components/movie-modal/movie-details/modal-details-section.tsx'
import { useContext, useEffect } from 'react'
import { MovieCardContext } from '@/components/movie-card/movie-card.tsx'
import { queryClient } from '@/lib/reactQuery.ts'

export function MovieModal() {
  const { movie } = useContext(MovieCardContext)

  return (
    <DialogContent
      title={`${movie.title} Details`}
      className={
        'bg-transparent p-0 w-full lg:min-w-grid-width overflow-hidden border-0 outline-0 max-h-[800px] overflow-y-scroll lg:overflow-y-auto'
      }
    >
      <DialogTitle className={'hidden'}>`${movie.title} Details`</DialogTitle>
      <Tabs defaultValue="details" className="w-full min-h-[70vh] ">
        <TabsList className={'w-full bg-darkBlue'}>
          <TabsTrigger value="details">Detalhes do Filme</TabsTrigger>
          <TabsTrigger value="commentList">Lista de Comentários</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <ModalDetailsSection />
        </TabsContent>
        <TabsContent value="commentList">
          <ModalCommentSection />
        </TabsContent>
      </Tabs>
    </DialogContent>
  )
}
