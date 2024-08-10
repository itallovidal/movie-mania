import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { App } from './app.tsx'
import { setupMSW } from '@/api/mocks'

setupMSW().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
})
