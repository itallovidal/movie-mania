import { IMovie } from '@/@types/IMovie.ts'
import { IList } from '@/@types/IList.ts'

export interface IMovieList extends IList {
  movies: IMovie[]
}
