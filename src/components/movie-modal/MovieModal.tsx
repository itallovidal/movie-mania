import { DialogContent, DialogTitle } from '@/components/ui/dialog.tsx'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx'
import { MovieCommentList } from '@/components/movie-modal/movie-comment-list.tsx'
import { MovieDetails } from '@/components/movie-modal/movie-details.tsx'
import { useContext } from 'react'
import { CardContext } from '@/components/movieCard.tsx'

export function MovieModal() {
  const { movie } = useContext(CardContext)

  return (
    <DialogContent
      title={`${movie.title} Details`}
      className={
        'bg-darkBlue min-w-grid-width p-0 overflow-hidden border-0 outline-0 max-h-[800px]'
      }
    >
      <DialogTitle>`${movie.title} Details`</DialogTitle>
      <Tabs defaultValue="details" className="w-full min-h-[70vh] ">
        <TabsList className={'w-full'}>
          <TabsTrigger value="details">Detalhes do Filme</TabsTrigger>
          <TabsTrigger value="commentList">Lista de Comentários</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <MovieDetails />
        </TabsContent>
        <TabsContent value="commentList">
          <MovieCommentList />
        </TabsContent>
      </Tabs>
    </DialogContent>
  )
}
