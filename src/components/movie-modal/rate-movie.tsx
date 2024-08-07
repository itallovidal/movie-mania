import { Button } from '@/components/ui/button.tsx'
import { Star } from 'lucide-react'
import * as colors from 'tailwindcss/colors'
import { useContext, useState } from 'react'
import { postRating } from '@/api/rate-movie.ts'
import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'
import { CardContext } from '@/components/movie-card.tsx'
import { GlobalContext } from '@/components/global-context.tsx'
import { queryClient } from '@/lib/reactQuery.ts'

export function RateMovie() {
  const [rating, setRating] = useState(0)
  const { movie } = useContext(CardContext)
  const { userToken } = useContext(GlobalContext)

  const { mutateAsync: rateMovie } = useMutation({
    mutationFn: () =>
      postRating({
        movieId: movie.id,
        token: userToken,
        rating,
      }),
    onSuccess: (data) => {
      console.log(data.created)
      queryClient.setQueryData(['movieRating', movie.id], data.created)
    },
  })

  async function handleSubmitRating() {
    try {
      await rateMovie()
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
        disabled={!rating}
        onClick={() => handleSubmitRating()}
        variant={'outline'}
        className={'text-black'}
      >
        Avaliar
      </Button>
    </div>
  )
}
