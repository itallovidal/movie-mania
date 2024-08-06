import { Card, CardContent, CardTitle } from '@/components/ui/card.tsx'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { Badge } from '@/components/ui/badge.tsx'
import { Button } from '@/components/ui/button.tsx'
import { useContext } from 'react'
import { getProfile } from '@/api/get-profile.ts'
import { GlobalContext } from '@/components/global-context.tsx'
import { useQuery } from '@tanstack/react-query'
import { getLists } from '@/api/get-lists.ts'
import { MovieList } from '@/components/profile/movie-list.tsx'

export function Profile() {
  const { userToken } = useContext(GlobalContext)
  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: () => {
      if (userToken) return getProfile(userToken)
    },
    enabled: !!userToken,
  })

  const { data: lists } = useQuery({
    queryKey: ['lists'],
    queryFn: () => {
      if (userToken) return getLists(userToken)
    },
    enabled: !!userToken,
  })

  console.log(lists)

  return (
    <main
      className={`m-auto gap-4 relative grid grid-cols-[200px_944px] justify-center`}
    >
      {profile && (
        <Card className={'p-4 col-start-1 h-fit sticky top-8'}>
          <CardTitle className={'mb-4'}>{profile.name}</CardTitle>
          <Separator />
          <CardContent className={'p-0 space-y-4'}>
            <div className={'w-full flex gap-2 justify-start'}>
              <Badge>{profile.favoriteGenres[0]}</Badge>
              <Badge>{profile.favoriteGenres[1]}</Badge>
            </div>

            <Button variant={'outline'}>Atualizar Perfil</Button>
          </CardContent>
        </Card>
      )}

      {lists && (
        <div className={'col-start-2  flex flex-col gap-12'}>
          {lists?.map((list) => {
            return <MovieList key={list.id} id={list.id} name={list.name} />
          })}
        </div>
      )}
    </main>
  )
}
