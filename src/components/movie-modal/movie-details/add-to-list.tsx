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
import { useQuery, useMutation } from '@tanstack/react-query'
import { getListsByMovie } from '@/api/get-lists-by-movie.ts'
import { useContext } from 'react'
import { CardContext } from '@/components/movie-card/movie-card.tsx'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { Check } from 'lucide-react'

import { addMovieToList } from '@/api/add-movie-to-list.ts'
import { toast } from 'sonner'
import { queryClient } from '@/lib/reactQuery.ts'
import { removeMovieFromList } from '@/api/remove-movie-from-list.ts'
import { GENRES } from '@/@types/genres.ts'
import { IMovie } from '@/@types/IMovie.ts'
const listSchema = z.object({
  name: z.string().min(3),
  id: z.number().or(z.null()).default(null),
})

export interface IListSchema extends z.infer<typeof listSchema> {}

export function AddToList() {
  const { movie, sectionId } = useContext(CardContext)
  const { userToken } = useContext(GlobalContext)

  console.log('filme:=>')
  console.log(movie)

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<IListSchema>({
    resolver: zodResolver(listSchema),
  })

  const { data: lists } = useQuery({
    queryKey: ['movie-lists'],
    queryFn: () => getListsByMovie(userToken, movie.id),
    enabled: !!userToken,
    staleTime: Infinity,
  })

  const { mutateAsync: addMovieToListMutation, isPending } = useMutation({
    mutationFn: addMovieToList,
    onSuccess: (data) => {
      if (lists) {
        console.log('Listas Salvas:')
        console.log(lists)
        console.log('Lista adicionada:')
        console.log(data.listAdded)

        if (!lists.some((list) => list.id === data.listAdded.id)) {
          const cached = queryClient.getQueryData(['movie-lists'])

          const createdList = data.listAdded as { id: number; name: string }
          const newList = [...cached, createdList]
          queryClient.setQueryData(['movie-lists'], newList)
        }

        const actualSection = GENRES.find((genre) => genre.id === sectionId)

        const moviesCached = queryClient.getQueryData([
          actualSection?.name,
          actualSection?.id,
        ]) as IMovie[]

        const updatedMovies = moviesCached.map((movieCached) => {
          if (movieCached.id === movie.id) {
            movie.lists.push({
              id: data.listAdded.id,
            })
          }

          return movieCached
        })

        queryClient.setQueryData(
          [actualSection?.name, actualSection?.id],
          updatedMovies,
        )
      }
    },
  })

  const { mutateAsync: removeMovieFromListMutation } = useMutation({
    mutationFn: removeMovieFromList,
    onSuccess: (data) => {
      const actualSection = GENRES.find((genre) => genre.id === sectionId)

      const moviesCached = queryClient.getQueryData([
        actualSection?.name,
        actualSection?.id,
      ]) as IMovie[]

      const updatedMovies = moviesCached.map((movieCached) => {
        if (movieCached.id === movie.id) {
          const lists = movie.lists.filter(
            (list) => list.id !== data.listRemoved.id,
          )

          return {
            ...movieCached,
            lists,
          }
        }

        return movieCached
      })

      queryClient.setQueryData(
        [actualSection?.name, actualSection?.id],
        updatedMovies,
      )
    },
  })

  async function handleAddToPlaylist(list: IListSchema) {
    try {
      await addMovieToListMutation({
        list,
        token: userToken,
        movieId: movie.id,
      })
      toast.success('Filme adicionado à lista com sucesso!')
    } catch (e) {
      toast.error('Não foi possível adicionar o filme à lista.')
    }
  }

  async function selectList(list: IListSchema, action: 'add' | 'remove') {
    console.log(action)

    if (action === 'add') {
      setValue('name', list.name)
      setValue('id', list.id)
    } else if (action === 'remove') {
      console.log('removendo..')
      await removeMovieFromListMutation({
        list,
        token: userToken,
        movieId: movie.id,
      })

      toast.success('Filme Removido da lista com sucesso!')
    }
  }

  return (
    <form onSubmit={handleSubmit(handleAddToPlaylist)}>
      <Command
        className={`w-[80%] mt-4 h-fit ${errors.name ? 'border-rose-600' : 'border-transparent'} border-2`}
      >
        <CommandInput
          disabled={isPending}
          className={'mb-2'}
          handleClick={handleSubmit(handleAddToPlaylist)}
          {...register('name')}
          placeholder="Crie uma playlist"
        />
        <CommandList>
          <span className={'p-2 text-xs font-bold'}>
            Ou adicione à uma já existente
          </span>

          <ScrollArea className={'h-[100px]'}>
            {!lists ||
              (lists.length === 0 && <CommandEmpty>Sem listas.</CommandEmpty>)}

            {lists &&
              lists?.map((list) => {
                const isMovieInTheList = movie.lists.some(
                  (userList) => userList.id === list.id,
                )

                return (
                  <button
                    disabled={isPending}
                    onClick={() =>
                      selectList(list, isMovieInTheList ? 'remove' : 'add')
                    }
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
        </CommandList>
      </Command>
    </form>
  )
}
