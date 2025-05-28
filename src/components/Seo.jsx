// components/Seo.jsx
import { useEffect } from 'react'
import { useDarkMode } from '../context/DarkModeContext'

const Seo = ({ title, description }) => {
  const { isDark } = useDarkMode()

  useEffect(() => {
    const themeColor = isDark ? '#1f2937' : '#ffffff'
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor)

    const canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      const link = document.createElement('link')
      link.rel = 'canonical'
      link.href = window.location.href
      document.head.appendChild(link)
    }
  }, [isDark])

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Frontend Developer, React Developer, Web Portfolio, UI Engineer, Joseph Kristian, Programmer" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}

export default Seo
