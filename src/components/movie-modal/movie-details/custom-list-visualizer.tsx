import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from '@/components/ui/command.tsx'
import { ScrollArea } from '@/components/ui/scroll-area.tsx'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { addMovieToList } from '@/api/list/add-movie-to-list.ts'
import { toast } from 'sonner'
import { MovieContext } from '@/contexts/movie-context.tsx'
import { queryClient } from '@/lib/reactQuery.ts'
import { removeMovieFromList } from '@/api/list/remove-movie-from-list.ts'
import { Check } from 'lucide-react'
import { MovieCardContext } from '@/components/movie-card/movie-card.tsx'

const listSchema = z.object({
  name: z.string().min(3),
  id: z.number().or(z.null()).default(null),
})

export interface IListSchema extends z.infer<typeof listSchema> {}

export function CustomListVisualizer() {
  const { userLists } = useContext(MovieContext)
  const { userToken } = useContext(GlobalContext)
  const { movie, queryKeys } = useContext(MovieCardContext)

  console.log('Filme em questão:')
  console.log(movie)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IListSchema>({
    resolver: zodResolver(listSchema),
  })

  const { mutateAsync: addMovieToListMutation } = useMutation({
    mutationFn: addMovieToList,
    onSuccess: (data) => {
      if (
        !userLists?.some((list) => list.id === data.listAdded.id) &&
        userLists
      ) {
        console.log('Lista nova criada!')

        const updatedLists = [...userLists, data.listAdded]
        queryClient.setQueryData(['user-lists'], {
          userLists: updatedLists,
        })
      }

      const cached = queryClient.getQueryData(queryKeys)

      if (!cached) return

      const updatedMovies = cached.movies.map((cachedMovie) => {
        if (cachedMovie.id === data.movieAdded) {
          const newList = [...cachedMovie.lists, data.listAdded]

          return {
            ...cachedMovie,
            lists: newList,
          }
        }

        return cachedMovie
      })

      queryClient.setQueryData(queryKeys, {
        movies: updatedMovies,
      })
    },
  })

  const { mutateAsync: removeMovieFromListMutation } = useMutation({
    mutationFn: removeMovieFromList,
    onSuccess: (data) => {
      const moviesCached = queryClient.getQueryData(queryKeys)

      if (!moviesCached) return

      const updatedMovies = moviesCached.movies.map((movieCached) => {
        if (movieCached.id === data.movieRemoved) {
          const lists = movie.lists.filter(
            (list) => list.id !== data.selectedList.id,
          )

          return {
            ...movieCached,
            lists,
          }
        }

        return movieCached
      })

      queryClient.setQueryData<{
        movies: IMovie[]
      }>(queryKeys, {
        movies: updatedMovies,
      })
    },
  })

  async function handleAddToPlaylist(selectedList: IListSchema) {
    if (!userToken) return

    try {
      await addMovieToListMutation({
        list: selectedList,
        token: userToken!,
        movieId: movie.id,
      })

      toast.success('Filme adicionado à lista com sucesso!')
    } catch (e) {
      toast.error('Não foi possível adicionar o filme à lista.')
    }
  }

  async function selectList(selectedList: IListSummary) {
    const isMovieInTheList = movie.lists.some(
      (userList) => userList.id === selectedList.id,
    )

    if (!isMovieInTheList) {
      await handleAddToPlaylist(selectedList)
      return
    }

    console.log('removendo..')
    await removeMovieFromListMutation({
      list: selectedList,
      token: userToken!,
      movieId: movie.id,
    })

    toast.success('Filme Removido da lista com sucesso!')
  }

  return (
    <form onSubmit={handleSubmit(handleAddToPlaylist)}>
      <Command
        className={`w-[80%] mt-4 h-fit ${errors.name ? 'border-rose-600' : 'border-transparent'} border-2`}
      >
        <CommandInput
          // disabled={isPending}
          className={'mb-2'}
          handleClick={handleSubmit(handleAddToPlaylist)}
          {...register('name')}
          placeholder="Crie uma playlist"
        />
        <CommandList>
          <span className={'p-2 text-xs font-bold'}>
            Ou adicione à uma já existente
          </span>

          {!userLists || userLists.length === 0 ? (
            <CommandEmpty>Sem listas para mostrar.</CommandEmpty>
          ) : (
            <ScrollArea className={'h-[100px]'}>
              {userLists?.map((list) => {
                const isMovieInTheList = movie.lists.some(
                  (userList) => userList.id === list.id,
                )

                return (
                  <button
                    // disabled={isPending}
                    type={'button'}
                    onClick={() => selectList(list)}
                    key={list.id}
                    className={
                      'w-full disabled:cursor-not-allowed disabled:opacity-15 cursor-pointer flex justify-between p-2 hover:opacity-55  h-[50px]'
                    }
                  >
                    <span>{list.name}</span>

                    {isMovieInTheList && (
                      <Check className={'p-1 rounded bg-green-500'} />
                    )}
                  </button>
                )
              })}
            </ScrollArea>
          )}
        </CommandList>
      </Command>
    </form>
  )
}
