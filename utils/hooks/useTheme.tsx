import { useEffect, useState } from 'react'

interface AppState {
  theme: string
}

const defaultTheme = 'light'

export const useTheme = () => {
  const localStorageTheme = window.localStorage.getItem('theme') || defaultTheme
  const [theme, setTheme] = useState<AppState['theme']>(localStorageTheme)

  useEffect(() => {
    document.body.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, setTheme }
}
