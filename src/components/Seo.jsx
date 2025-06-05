// components/Seo.jsx
import { useEffect } from 'react'
import { useDarkMode } from '../context/DarkModeContext'

const Seo = ({
  title = "Salsabila's Portfolio",
  description = "Welcome to Salsabila's web developer portfolio, specializing in React, UI/UX, and modern frontend technologies.",
  keywords = "Frontend Developer, React Developer, Web Portfolio, UI Engineer, Salsabila, Programmer, JavaScript, Web Developer",
  image = "https://yourdomain.com/og-image.jpg", // Ganti dengan URL og:image
  url = typeof window !== 'undefined' ? window.location.href : 'https://yourdomain.com',
}) => {
  const { isDark } = useDarkMode()

  useEffect(() => {
    const themeColor = isDark ? '#1f2937' : '#ffffff'
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', themeColor)

    const canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      const link = document.createElement('link')
      link.rel = 'canonical'
      link.href = url
      document.head.appendChild(link)
    }
  }, [isDark, url])

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content={isDark ? '#1f2937' : '#ffffff'} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Optional: JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Salsabila",
          url,
          sameAs: [
            "https://github.com/salsabila", // ganti dengan profil sosial sebenarnya
            "https://linkedin.com/in/salsabila"
          ],
          jobTitle: "Frontend Developer",
          worksFor: {
            "@type": "Organization",
            name: "Freelance / Open Source",
          },
          description,
        })}
      </script>
    </>
  )
}

export default Seo
