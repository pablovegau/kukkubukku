import type { AppProps } from 'next/app'
import { AppLayout } from 'components/AppLayout'
import { GlobalStyles } from '../styles/globalStyles'
import { ThemeProvider } from "../styles/utils/ThemeProvider";

// TODO: Move this to a separate file
export const THEMES = {
  LIGHT: "light",
  DARK: "dark"
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider themes={THEMES} defaultTheme={THEMES.LIGHT}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
