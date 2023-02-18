import { Container } from '@mantine/core'
import type { ReactNode } from 'react'
import { HeaderMegaMenu } from './Header/Header'

export const PublicRoute = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <Container h="100%" w="100%" fluid>
      <HeaderMegaMenu />
      <Container size="xl" mih="calc(100vh - 60px)">
        {children}
      </Container>
    </Container>
  )
}
