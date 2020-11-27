import Head from 'next/head'

import Header from '../components/header/header.component'
import ErrorBoundary from '../components/error-boundary/error-boundary.component'

import UserProvider from '../providers/user/user.provider'
import CartProvider from '../providers/cart/cart.provider'
import CollectionsProvider from '../providers/collections/collections.provider'

import { GlobalStyle } from '../styles/global.styles'

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>CRWN Clothing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartProvider>
        <UserProvider>
          <CollectionsProvider>
            <ErrorBoundary>
              <Header />
              <Component {...pageProps} />
            </ErrorBoundary>
          </CollectionsProvider>
        </UserProvider>
      </CartProvider>
    </>
  )
}
