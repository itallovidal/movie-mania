import { setupWorker } from 'msw/browser'
import { env } from '../../../env.ts'
import { signInMock } from '@/api/mocks/user/sign-in-mock.ts'
import { getProfileMock } from '@/api/mocks/user/get-profile-mock.ts'
import { getMoviesByGenreMock } from '@/api/mocks/movie/get-movies-by-genre-mock.ts'
import { signUpMock } from '@/api/mocks/user/sign-up-mock.ts'
import { getMovieCommentsMock } from '@/api/mocks/movie/get-movie-comments-mock.ts'
import { getListsMock, getUserLists } from '@/api/mocks/list/get-lists-mock.ts'
import { getUserCustomMovieListMock } from '@/api/mocks/list/get-user-custom-movie-list-mock.ts'
import { postCommentMock } from '@/api/mocks/movie/post-comment-mock.ts'
import { rateMovieMock } from '@/api/mocks/movie/rate-movie-mock.ts'
import { getUserRatingByMovieIdMock } from '@/api/mocks/movie/get-user-rating-by-movie-id-mock.ts'
import { getListsByMovieMock } from '@/api/mocks/get-lists-by-movie-mock.ts'
import { addMovieToListMock } from '@/api/mocks/add-movie-to-list-mock.ts'
import { removeMovieFromListMock } from '@/api/mocks/remove-movie-from-list-mock.ts'
import { getGenres } from '@/api/mocks/movie/get-genres.ts'

export const worker = setupWorker(
  signInMock,
  getProfileMock,
  getMoviesByGenreMock,
  signUpMock,
  getMovieCommentsMock,
  getUserLists,
  getUserCustomMovieListMock,
  postCommentMock,
  rateMovieMock,
  getUserRatingByMovieIdMock,
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
