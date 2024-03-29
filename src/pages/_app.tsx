import { type AppType } from 'next/app'
import { type Session } from 'next-auth'

import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import type { AbstractIntlMessages } from 'next-intl'
import { NextIntlProvider } from 'next-intl'

import { api } from 'utils/api'
import { AuthProvider } from 'contexts/AuthContext'
import { UIProvider } from 'styles/UIProvider'

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

        <link rel="icon" type="image/ico" href="favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <NextIntlProvider messages={messages}>
        <UIProvider>
          <SessionProvider session={session}>
            <AuthProvider>
              <Component {...pageProps} />
            </AuthProvider>
          </SessionProvider>
        </UIProvider>
      </NextIntlProvider>
    </>
  )
}

export default api.withTRPC(MyApp)
