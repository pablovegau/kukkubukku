import type { AppProps } from 'next/app'
import { AuthProvider } from '../services/auth/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
