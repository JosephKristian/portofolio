import { createContext, useContext, useState, useLayoutEffect, useMemo } from 'react'

const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)

  // Gunakan layout effect untuk menghindari flickering saat halaman dimuat
  useLayoutEffect(() => {
    const savedMode = localStorage.getItem('darkMode')

    if (savedMode !== null) {
      setIsDark(savedMode === 'true')
      updateHtmlClass(savedMode === 'true')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDark)
      updateHtmlClass(prefersDark)
    }
  }, [])

  const updateHtmlClass = (dark) => {
    const html = document.documentElement
    if (dark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  const toggleDarkMode = () => {
    const newMode = !isDark
    setIsDark(newMode)
    localStorage.setItem('darkMode', newMode)
    updateHtmlClass(newMode)
  }

  const value = useMemo(() => ({ isDark, toggleDarkMode }), [isDark])

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}
