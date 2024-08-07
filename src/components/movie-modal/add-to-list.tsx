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
import { useQuery } from '@tanstack/react-query'
import { getListsByMovie } from '@/api/get-lists-by-movie.ts'
import { useContext } from 'react'
import { CardContext } from '@/components/movie-card.tsx'
import { GlobalContext } from '@/components/global-context.tsx'
import { Check, X } from 'lucide-react'
const listSchema = z.object({
  name: z.string().min(3),
})

interface IListSchema extends z.infer<typeof listSchema> {}

export function AddToList() {
  const { movie } = useContext(CardContext)
  const { userToken } = useContext(GlobalContext)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IListSchema>({
    resolver: zodResolver(listSchema),
  })

  const { data: lists } = useQuery({
    queryKey: ['movie-lists'],
    queryFn: () => getListsByMovie(userToken, movie.id),
    enabled: !!userToken,
  })

  function handleAddToPlaylist(data: IListSchema) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleAddToPlaylist)}>
      <Command
        className={`w-[80%] mt-4 h-fit ${errors.name ? 'border-rose-600' : 'border-transparent'} border-2`}
      >
        <CommandInput
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
                console.log('Verificando lista:')
                console.log(list.id)
                console.log(movie.lists)
                console.log(
                  movie.lists.some((userList) => userList.id === list.id),
                )

                return (
                  <div
                    key={list.id}
                    className={
                      'cursor-pointer flex justify-between p-2 hover:opacity-55  h-[50px]'
                    }
                  >
                    <span>{list.name}</span>

                    {movie.lists.some((userList) => userList.id === list.id) ? (
                      <Check className={'p-1 rounded bg-green-500'} />
                    ) : (
                      <></>
                    )}
                  </div>
                )
              })}
          </ScrollArea>
        </CommandList>
      </Command>
    </form>
  )
}
