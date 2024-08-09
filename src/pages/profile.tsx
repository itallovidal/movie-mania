import { useContext } from 'react'

// import { MovieList } from '@/components/profile/movie-list.tsx'
import { AccountData } from '@/components/profile/account-data.tsx'
import { MovieContext } from '@/contexts/movie-context.tsx'
import { UserCustomList } from '@/components/profile/user-custom-list.tsx'

export function Profile() {
  const { userLists } = useContext(MovieContext)

  if (!userLists) return <></>

  return (
    <main
      className={`m-auto gap-4 relative grid grid-cols-[200px_944px] justify-center`}
    >
      <AccountData />

      <div className={'bg-yellow-300'}>
        {userLists &&
          userLists?.map((list) => {
            return <UserCustomList key={list.id} list={list} />
          })}
      </div>
    </main>
  )
}
