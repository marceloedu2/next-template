import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import apolloClient from '@/configs/apolloApi'
import { ApolloProvider } from '@apollo/client'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>projeto fabrica front</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="" />
      </Head>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  )
}

export default App
