import { Input } from '@/components/ui/input.tsx'
import { Search } from 'lucide-react'
import * as colors from 'tailwindcss/colors'
import { z } from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { Button } from '@/components/ui/button.tsx'

const searchInputSchema = z.object({
  title: z.string().min(4),
})

export interface ISearchInputSchema extends z.infer<typeof searchInputSchema> {}

export function HeaderSearch() {
  const { handleNavigate } = useContext(GlobalContext)
  const { handleSubmit, control } = useForm<ISearchInputSchema>({
    resolver: zodResolver(searchInputSchema),
  })

  async function handleSearchMovie({ title }: ISearchInputSchema) {
    handleNavigate(`/search?title=${title}`)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchMovie)}
      className={'mt-4 max-w-96 flex items-center bg-white rounded-md pl-2'}
    >
      <Button type={'submit'} variant={'ghost'}>
        <Search color={colors.black} />
      </Button>
      <Controller
        control={control}
        render={({ field: { name, value, onChange, onBlur } }) => {
          return (
            <Input
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className={'border-0 text-black w-full flex flex-1 '}
            />
          )
        }}
        name={'title'}
      />
    </form>
  )
}
