import { setupWorker } from 'msw/browser'
import { env } from '../../../env.ts'
import { signInMock } from '@/api/mocks/sign-in-mock.ts'
import { getProfileMock } from '@/api/mocks/get-profile-mock.ts'
import { getMoviesByGenreMock } from '@/api/mocks/get-movies-by-genre-mock.ts'
import { signUpMock } from '@/api/mocks/sign-up-mock.ts'
import { getCommentsMock } from '@/api/mocks/get-comments-mock.ts'
import { getListsMock } from '@/api/mocks/get-lists-mock.ts'
import { getMovieList } from '@/api/mocks/get-movie-list.ts'

export const worker = setupWorker(
  signInMock,
  getProfileMock,
  getMoviesByGenreMock,
  signUpMock,
  getCommentsMock,
  getListsMock,
  getMovieList,
)

export async function setupMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
