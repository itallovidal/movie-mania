export function HeaderSearchResult({ query }: { query: string | undefined }) {
  if (!query) return <></>
  return (
    <>
      <h1 className={'text-6xl font-josefin tracking-tighter'}>
        Você pesquisou por <span className={'text-yellow-500'}>{query}</span>
      </h1>
    </>
  )
}
