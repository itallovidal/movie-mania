import { MovieSectionSkeleton } from '@/components/skeletons/movie-section-skeleton.tsx'
import { SuggestionMovies } from '@/components/home/suggestion-section/suggestion-movies.tsx'

interface ISuggestionSectionProps {
  randomGenres: IGenre[]
}

function SuggestionSpan({ children }) {
  return (
    <span className={'font-josefin font-bold italic text-yellow-400 text-4xl'}>
      {children}
    </span>
  )
}

function randomPhrases(genres: IGenre[]) {
  if (!genres) return undefined

  const random = Math.round(Math.random() * 6)
  console.log(random)

  const h1Style =
    'mb-12 font-josefin w-[90%] font-bold italic max-w-grid-width mx-auto text-4xl'

  const phrases = {
    0: (
      <h1 className={h1Style}>
        Que tal um pouco de <SuggestionSpan>{genres[0].name}</SuggestionSpan>,
        ou quem sabe... <SuggestionSpan children={genres[1].name} /> ?
      </h1>
    ),
    1: (
      <h1 className={h1Style}>
        Já pensou em ver {<SuggestionSpan>{genres[0].name}</SuggestionSpan>}{' '}
        hoje?
      </h1>
    ),
    2: (
      <h1 className={h1Style}>
        E se a gente misturar um pouco de{' '}
        {<SuggestionSpan>{genres[0].name}</SuggestionSpan>} com{' '}
        {<SuggestionSpan>{genres[1].name}</SuggestionSpan>}, hein?
      </h1>
    ),
    3: (
      <h1 className={h1Style}>
        Não sei se recomendo {<SuggestionSpan>{genres[0].name}</SuggestionSpan>}{' '}
        ou {<SuggestionSpan>{genres[1].name}</SuggestionSpan>}, que tal os dois?
      </h1>
    ),
    4: (
      <h1 className={h1Style}>
        Entre {<SuggestionSpan>{genres[0].name}</SuggestionSpan>} e{' '}
        {<SuggestionSpan>{genres[1].name}</SuggestionSpan>}, eu vou de{' '}
        {<SuggestionSpan>{genres[0].name}</SuggestionSpan>}, e você?
      </h1>
    ),
    5: (
      <h1 className={h1Style}>
        Vamo de {<SuggestionSpan>{genres[0].name}</SuggestionSpan>} ou{' '}
        {<SuggestionSpan>{genres[1].name}</SuggestionSpan>}, hein?
      </h1>
    ),
  }

  return phrases[random]
}

export function SuggestionSection({ randomGenres }: ISuggestionSectionProps) {
  return (
    <div className={`py-12 -mt-24`}>
      {randomGenres && randomPhrases(randomGenres)}

      {randomGenres ? (
        randomGenres.map((genre, index) => (
          <SuggestionMovies key={genre.id} genre={genre} index={index} />
        ))
      ) : (
        <MovieSectionSkeleton />
      )}
    </div>
  )
}
