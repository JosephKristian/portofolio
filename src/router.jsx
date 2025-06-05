import { createRoutesFromElements, Route } from 'react-router-dom'
import { Suspense } from 'react'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/Home/HomePage'
import SkeletonHomePage from './components/Skeletons/SkeletonHomePage'
import SkeletonProjectsPage from './components/Skeletons/SkeletonProjectsPage'
import SkeletonContactPage from './components/Skeletons/SkeletonContactPage'
import ProjectsPage from './pages/Project/ProjectPages'
import ContactPage from './pages/Contact/ContactPage'
import NotFoundPage from './pages/NotFound/NotFoundPage'

export const routes = createRoutesFromElements(
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
)