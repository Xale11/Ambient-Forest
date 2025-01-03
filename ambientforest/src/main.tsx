import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from './components/ui/provider.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ContextProvider from './context/ContextProvider.tsx'

const router = createBrowserRouter(routes)

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Provider>
          <RouterProvider router={router}/>
        </Provider>
      </ContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
