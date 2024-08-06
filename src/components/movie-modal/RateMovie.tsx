import { Button } from '@/components/ui/button.tsx'
import { Star } from 'lucide-react'
import * as colors from 'tailwindcss/colors'
import { useState } from 'react'

export function RateMovie() {
  const [rating, setRating] = useState(0)

  function handleSubmitRating() {}

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
        onClick={() => handleSubmitRating()}
        variant={'outline'}
        className={'text-black'}
      >
        Avaliar
      </Button>
    </div>
  )
}
