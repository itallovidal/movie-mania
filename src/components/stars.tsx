import { Star } from 'lucide-react'
import * as colors from 'tailwindcss/colors'

export function Stars({ rating }: { rating: number }) {
  return (
    <div className={'flex my-2'}>
      {Array.from({ length: 5 }, (_, i) => {
        if (rating >= i + 1) {
          return (
            <Star
              key={i}
              color={colors.yellow['500']}
              fill={colors.yellow['500']}
            />
          )
        }

        return <Star key={i} color={colors.yellow['500']} />
      })}
    </div>
  )
}
