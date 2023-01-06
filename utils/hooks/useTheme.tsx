import { useEffect, useState } from 'react'

interface AppState {
  theme: string | undefined
}

const defaultTheme = 'light'

export const useTheme = () => {
  const [theme, setTheme] = useState<AppState['theme']>()

  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem('theme') || undefined

    if (localStorageTheme) {
      setTheme(localStorageTheme)
    } else {
      setTheme(defaultTheme)
    }
  }, [])

  useEffect(() => {
    if (theme) {
      document.body.dataset.theme = theme
      window.localStorage.setItem('theme', theme)
    }
  }, [theme])

  return { theme, setTheme }
}
