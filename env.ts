import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['test', 'development']),
  VITE_API_URL: z.string(),
  VITE_API_DELAY: z.string().transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)
