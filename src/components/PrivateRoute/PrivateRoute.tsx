import { Loader, Center } from '@mantine/core'
import { useAuth } from 'contexts/AuthContext'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'

export const ProtectedRoute = ({ children }: { children: ReactNode }): JSX.Element => {
  const { status } = useAuth()
  const { push } = useRouter()

  if (status === 'unauthenticated') {
    void push('/login')
    return <></>
  }

  if (status === 'loading') {
    return (
      <Center h="100vh">
        <Loader size="xl" />
      </Center>
    )
  }

  return <>{children}</>
}
