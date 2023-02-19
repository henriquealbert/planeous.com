import { type AppType } from 'next/app'
import { type Session } from 'next-auth'

import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { SessionProvider } from 'next-auth/react'
import type { AbstractIntlMessages } from 'next-intl'
import { NextIntlProvider } from 'next-intl'

import { api } from '../utils/api'
import { mantineTheme } from '../styles/mantineTheme'
import { AuthProvider } from 'contexts/AuthContext'

const MyApp: AppType<{
  session: Session | null
  messages: AbstractIntlMessages
}> = ({ Component, pageProps: { session, messages, ...pageProps } }) => {
  return (
    <>
      <Head>
        <title>Planeous</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="The missing toolkit for your Travel Agency." />
      </Head>

      <NextIntlProvider messages={messages}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
          <SessionProvider session={session}>
            <AuthProvider>
              <Component {...pageProps} />
            </AuthProvider>
          </SessionProvider>
        </MantineProvider>
      </NextIntlProvider>
    </>
  )
}

export default api.withTRPC(MyApp)
