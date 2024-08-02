import { setupWorker } from 'msw/browser'
import { env } from '../../../env.ts'
import { signInMock } from '@/api/mocks/sign-in-mock.ts'
import { getProfileMock } from '@/api/mocks/get-profile-mock.ts'
import { getMoviesByGenreMock } from '@/api/mocks/get-movies-by-genre-mock.ts'
import { signUpMock } from '@/api/mocks/sign-up-mock.ts'

export const worker = setupWorker(
  signInMock,
  getProfileMock,
  getMoviesByGenreMock,
  signUpMock,
)

export async function setupMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
