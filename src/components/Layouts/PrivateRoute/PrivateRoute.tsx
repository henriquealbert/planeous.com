import { Loader, Center, AppShell } from '@mantine/core'
import { Navbar } from 'components/Layouts/PrivateRoute/Navbar/Navbar'
import { useAuth } from 'contexts/AuthContext'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { Header } from './Header/Header'

export const ProtectedRoute = ({ children }: { children: ReactNode }): JSX.Element => {
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
    <AppShell padding="xl" navbar={<Navbar />} header={<Header />}>
      {children}
    </AppShell>
  )
}
