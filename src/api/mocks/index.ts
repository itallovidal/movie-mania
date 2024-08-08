import { setupWorker } from 'msw/browser'
import { env } from '../../../env.ts'
import { signInMock } from '@/api/mocks/user/sign-in-mock.ts'
import { getProfileMock } from '@/api/mocks/get-profile-mock.ts'
import { getMoviesByGenreMock } from '@/api/mocks/movie/get-movies-by-genre-mock.ts'
import { signUpMock } from '@/api/mocks/user/sign-up-mock.ts'
import { getCommentsMock } from '@/api/mocks/get-comments-mock.ts'
import { getListsMock } from '@/api/mocks/get-lists-mock.ts'
import { getMovieList } from '@/api/mocks/get-movie-list.ts'
import { postCommentMock } from '@/api/mocks/post-comment-mock.ts'
import { postRatingMock } from '@/api/mocks/post-rating-mock.ts'
import { getMovieRatingByIdMock } from '@/api/mocks/get-movie-rating-by-id-mock.ts'
import { getListsByMovieMock } from '@/api/mocks/get-lists-by-movie-mock.ts'
import { addMovieToListMock } from '@/api/mocks/add-movie-to-list-mock.ts'
import { removeMovieFromListMock } from '@/api/mocks/remove-movie-from-list-mock.ts'
import { getGenres } from '@/api/mocks/movie/get-genres.ts'

export const worker = setupWorker(
  signInMock,
  getProfileMock,
  getMoviesByGenreMock,
  signUpMock,
  getCommentsMock,
  getListsMock,
  getMovieList,
  postCommentMock,
  postRatingMock,
  getMovieRatingByIdMock,
  getListsByMovieMock,
  addMovieToListMock,
  removeMovieFromListMock,
  getGenres,
)

export async function setupMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
