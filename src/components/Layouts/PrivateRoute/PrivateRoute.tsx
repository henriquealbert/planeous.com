import { Loader, Center, AppShell, Title } from '@mantine/core'
import { useAuth } from 'contexts/AuthContext'
import { useRouter } from 'next/router'
import type { JSXElementConstructor, ReactElement, ReactNode } from 'react'
import { Header } from './Header/Header'

interface ProtectedRouteProps {
  children: ReactNode
  pageTitle?: string
  navbar?: ReactElement<any, string | JSXElementConstructor<any>> | undefined
}

export const ProtectedRoute = ({
  children,
  pageTitle,
  navbar
}: ProtectedRouteProps): JSX.Element => {
  const { status, user } = useAuth()
  const { push, pathname } = useRouter()

  if (status === 'loading') {
    return (
      <Center h="100vh">
        <Loader size="xl" />
      </Center>
    )
  }

  if (status === 'unauthenticated') {
    void push('/login')
    return (
      <Center h="100vh">
        <Loader size="xl" />
      </Center>
    )
  }

  if (!user?.organizationId && !pathname.includes('onboarding')) {
    void push('/onboarding')
    return (
      <Center h="100vh">
        <Loader size="xl" />
      </Center>
    )
  }

  if (!user?.organizationId && pathname.includes('onboarding') && status === 'authenticated') {
    return <>{children}</>
  }

  return (
    <AppShell
      m="xl"
      header={<Header />}
      navbar={navbar}
      sx={{
        '.mantine-AppShell-main': {
          paddingTop: '60px',
          minHeight: 'calc(100vh - 60px)'
        }
      }}
    >
      {pageTitle && (
        <Title order={1} mb="xl" ff="'IBM Plex Serif', serif" fw="300">
          {pageTitle}
        </Title>
      )}
      {children}
    </AppShell>
  )
}
