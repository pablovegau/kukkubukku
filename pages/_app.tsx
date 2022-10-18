import type { AppProps } from 'next/app'
import { AppLayout } from 'components/AppLayout'
import { GlobalStyles } from '../styles/globalStyles'
import { useTheme } from 'utils/hooks/useTheme';

// TODO: Move this to a separate file
export const THEMES = {
  LIGHT: "light",
  DARK: "dark"
};

function MyApp({ Component, pageProps }: AppProps) {
  useTheme()

  return (
    <>
      <GlobalStyles />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}

export default MyApp
