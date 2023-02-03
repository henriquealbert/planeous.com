import { Flex, Title } from '@mantine/core'
import { type NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <Flex direction="column" justify="center" align="center" h="100vh">
      <Title order={1}>Welcome to Planeous</Title>
    </Flex>
  )
}

export default HomePage
