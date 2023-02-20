import { Loader, Center, AppShell, Title } from '@mantine/core'
import { useAuth } from 'contexts/AuthContext'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { Header } from './Header/Header'

interface ProtectedRouteProps {
  children: ReactNode
  pageTitle?: string
}

export const ProtectedRoute = ({ children, pageTitle }: ProtectedRouteProps): JSX.Element => {
  const { status } = useAuth()
  const { push } = useRouter()

  if (status === 'unauthenticated') {
    void push('/login')
    return (
      <Center h="100vh">
        <Loader size="xl" />
      </Center>
    )
  }

  if (status === 'loading') {
    return (
      <Center h="100vh">
        <Loader size="xl" />
      </Center>
    )
  }

  return (
    <AppShell padding="xl" header={<Header />}>
      {pageTitle && (
        <Title order={1} mb="xl" ff="'IBM Plex Serif', serif" fw="300">
          {pageTitle}
        </Title>
      )}
      {children}
    </AppShell>
  )
}
