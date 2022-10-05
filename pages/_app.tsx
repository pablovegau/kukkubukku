import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/globalStyles'
import { ThemeProvider } from "./ThemeProvider";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark"
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider themes={THEMES} defaultTheme={THEMES.LIGHT}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
