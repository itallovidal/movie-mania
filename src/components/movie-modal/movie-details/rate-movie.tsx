import { Button } from '@/components/ui/button.tsx'
import { Star } from 'lucide-react'
import * as colors from 'tailwindcss/colors'
import { useContext, useState } from 'react'
import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { queryClient } from '@/lib/reactQuery.ts'
import { rateMovie } from '@/api/movie/rate-movie.ts'

export function RateMovie({ movieId }: { movieId: number }) {
  const [rating, setRating] = useState(0)
  const { userToken } = useContext(GlobalContext)

  const { mutateAsync: rateMovieMutation, isPending } = useMutation({
    mutationFn: rateMovie,
    onSuccess: (data) => {
      console.log('Filme Avaliado:')
      console.log(data)

      queryClient.setQueryData(['user-movie-rating', data.created.movieId], {
        rating: data.created,
      })
    },
  })

  async function handleSubmitRating() {
    if (!userToken) return
    try {
      await rateMovieMutation({
        movieId,
        token: userToken,
        rating,
      })
      toast.success('Filme Avaliado com sucesso!')
    } catch (e) {
      console.log(e)
      toast.error('Não foi possível avaliar o filme.')
    }
  }

  return (
    <div className={'flex bg-white my-4 p-2 rounded w-fit gap-4'}>
      <div className={'flex mt-2 cursor-pointer'}>
        {Array.from({ length: 5 }, (_, i) => {
          if (rating >= i + 1) {
            return (
              <Star
                onClick={() => setRating(i + 1)}
                key={i}
                color={colors.yellow['500']}
                fill={colors.yellow['500']}
              />
            )
          }

          return (
            <Star
              onClick={() => setRating(i + 1)}
              key={i}
              color={colors.yellow['500']}
            />
          )
        })}
      </div>
      <Button
        disabled={!rating || isPending}
        onClick={() => handleSubmitRating()}
        variant={'outline'}
        className={'text-black'}
      >
        Avaliar
      </Button>
    </div>
  )
}
