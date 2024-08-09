import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { useQuery } from '@tanstack/react-query'
import { getUserLists } from '@/api/list/get-user-lists.ts'
// import { MovieList } from '@/components/profile/movie-list.tsx'
import { AccountData } from '@/components/profile/account-data.tsx'

export function Profile() {
  const { userToken } = useContext(GlobalContext)

  const { data: userLists } = useQuery({
    queryKey: ['user-lists'],
    queryFn: () => {
      if (userToken) return getUserLists(userToken)
    },
    enabled: !!userToken,
  })

  if (!userLists) return <></>

  return (
    <main
      className={`m-auto gap-4 relative grid grid-cols-[200px_944px] justify-center`}
    >
      <AccountData />

      {/* {lists && ( */}
      {/*  <div className={'col-start-2 flex flex-col gap-12'}> */}
      {/*    {lists?.map((list) => { */}
      {/*      return <MovieList key={list.id} id={list.id} name={list.name} /> */}
      {/*    })} */}
      {/*  </div> */}
      {/* )} */}
    </main>
  )
}
