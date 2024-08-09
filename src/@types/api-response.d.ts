interface IGetGenreListResponse {
  genreList: IGenre[]
}

interface IGetMoviesByGenreResponse {
  movies: IMovie[]
}

interface IGetUserMovieListsResponse {
  userLists: IListSummary[]
}

interface IGetCustomMovieListResponse {
  movies: IMovie[]
  name: string
  id: number
}
