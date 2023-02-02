import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store'
import Authentication from '@/components/Auth/Authentication'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Authentication />
      <Component {...pageProps} />
    </Provider>
  )
}
