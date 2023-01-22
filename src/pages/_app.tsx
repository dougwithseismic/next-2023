import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SiteProvider } from '@context/siteContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteProvider>
      <Component {...pageProps} />
    </SiteProvider>
  )
}

export default MyApp
