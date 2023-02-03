import { type AppType } from 'next/app'
import { type Session } from 'next-auth'

import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { SessionProvider } from 'next-auth/react'

import { api } from '../utils/api'
import { mantineTheme } from '../styles/mantineTheme'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <>
      <Head>
        <title>Planeous</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="The missing toolkit for your Travel Agency."
        />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </MantineProvider>
    </>
  )
}

export default api.withTRPC(MyApp)
