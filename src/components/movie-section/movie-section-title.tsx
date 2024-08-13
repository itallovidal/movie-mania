export function MovieSectionTitle({
  children,
  style,
}: {
  children: string
  style?: string
}) {
  return (
    <h1
      className={`text-4xl font-josefin font-bold tracking-tight mb-4 ${style}`}
    >
      {children}
    </h1>
  )
}
