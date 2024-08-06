import './tailwind/global.css'
import { AppRoutes } from '@/pages/app-routes.tsx'
import { Toaster } from 'sonner'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/reactQuery.ts'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <AppRoutes />
    </QueryClientProvider>
  )
}
