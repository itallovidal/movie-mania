import { DialogContent, DialogTitle } from '@/components/ui/dialog.tsx'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx'
import { ModalCommentSection } from '@/components/movie-modal/comment-section/modal-comment-section.tsx'
import { ModalDetailsSection } from '@/components/movie-modal/movie-details/modal-details-section.tsx'

interface IMovieModalProps {
  movie: IMovie & { sectionId: number }
  isDialogOpen: boolean
  userRating: IRating | undefined
}

export function MovieModal({
  movie,
  isDialogOpen,
  userRating,
}: IMovieModalProps) {
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
          <ModalDetailsSection movie={movie} userRating={userRating} />
        </TabsContent>
        <TabsContent value="commentList">
          <ModalCommentSection movieId={movie.id} isDialogOpen={isDialogOpen} />
        </TabsContent>
      </Tabs>
    </DialogContent>
  )
}
