// src/App.jsx
import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { DarkModeProvider } from './context/DarkModeContext'

// Skeletons per halaman
import SkeletonHomePage from './components/Skeletons/SkeletonHomePage'
import SkeletonProjectsPage from './components/Skeletons/SkeletonProjectsPage'
import SkeletonContactPage from './components/Skeletons/SkeletonContactPage'

// Lazy-loaded pages
const HomePage = lazy(() => import('./pages/Home/HomePage'))
const ProjectsPage = lazy(() => import('./pages/Project/ProjectPages'))
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'))

function App() {
  return (
    <DarkModeProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<SkeletonHomePage />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="projects"
            element={
              <Suspense fallback={<SkeletonProjectsPage />}>
                <ProjectsPage />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<SkeletonContactPage />}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div className="p-6">Loading...</div>}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </DarkModeProvider>
  )
}

export default App
