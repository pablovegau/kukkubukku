import { useEffect, useState } from 'react'

interface AppState {
  theme: string
}

const defaultTheme = 'light'

export const useTheme = () => {
  const [theme, setTheme] = useState<AppState['theme']>(defaultTheme)

  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem('theme') || undefined

    if (localStorageTheme) {
      document.body.dataset.theme = localStorageTheme
      setTheme(localStorageTheme)
    } else {
      setTheme(defaultTheme)
    }
  }, [])

  useEffect(() => {
    document.body.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, setTheme }
}
