import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DarkModeProvider } from './context/DarkModeContext'
import { routes } from './router'

const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true
  }
})

function App() {
  return (
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  )
}

export default App