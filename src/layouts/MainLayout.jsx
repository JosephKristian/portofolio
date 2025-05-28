// MainLayout.jsx
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation/index'
import Seo from '../components/Seo'

import { useDarkMode } from '../context/DarkModeContext'

export default function MainLayout() {
  const { isDark } = useDarkMode()

  return (
    <div className="relative min-h-screen">

      {/* Overlay gelap untuk efek depth */}
      <div className="fixed inset-0 -z-10 bg-black/30 backdrop-blur-sm"></div>

      {/* Konten Utama */}
      <div className="relative z-10">
        <Seo
          title="Joseph's Portfolio"
          description="This is the main layout of the application."
          keywords="main, layout, react, router"
        />
        <Navigation />

        <main className="pt-20 min-h-screen bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <Outlet />
        </main>

        {/* Footer jika ada */}
      </div>
    </div>
  )
}