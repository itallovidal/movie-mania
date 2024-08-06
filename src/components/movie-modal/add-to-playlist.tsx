import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command.tsx'
import { ScrollArea } from '@/components/ui/scroll-area.tsx'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
const playlistSchema = z.object({
  name: z.string().min(3),
})

interface IPlaylistSchema extends z.infer<typeof playlistSchema> {}

export function AddToPlaylist() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IPlaylistSchema>({
    resolver: zodResolver(playlistSchema),
  })

  function handleAddToPlaylist(data: IPlaylistSchema) {
    console.log(data)
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(handleAddToPlaylist)}>
      <Command
        className={`w-[80%] mt-4 h-fit ${errors.name ? 'border-rose-600' : 'border-transparent'} border-2`}
      >
        <CommandInput
          handleClick={handleSubmit(handleAddToPlaylist)}
          {...register('name')}
          placeholder="Crie uma playlist"
        />
        <CommandList>
          <ScrollArea className={'h-[100px]'}>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Suas listas">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
              <CommandItem>Calculator</CommandItem>
              <CommandItem>Calculator</CommandItem>
              <CommandItem>Calculator</CommandItem>
              <CommandItem>Calculator</CommandItem>
              <CommandItem>Calculator</CommandItem>
              <CommandItem>Calculator</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
          </ScrollArea>
        </CommandList>
      </Command>
    </form>
  )
}
