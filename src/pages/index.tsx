import { Flex, Title } from '@mantine/core'
import { PublicRoute } from 'components/Layouts/PublicRoute/PublicRoute'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <PublicRoute>
      <Flex direction="column" justify="center" align="center" h="100vh">
        <Title order={1}>Home</Title>
      </Flex>
    </PublicRoute>
  )
}

export default HomePage
