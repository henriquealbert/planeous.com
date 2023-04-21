import { Container } from '@mantine/core'
import type { ReactNode } from 'react'

export const PublicRoute = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <Container h="100%" w="100%" fluid>
      <Container size="xl" mih="100vh">
        {children}
      </Container>
    </Container>
  )
}
