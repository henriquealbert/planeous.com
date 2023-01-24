import { Flex, Text, Title } from '@mantine/core'
import { type NextPage } from 'next'

const LoginPage: NextPage = () => {
  return (
    <Flex direction="column" justify="center" align="center" h="100vh">
      <Title order={1}>This is the Login page</Title>
      <Text>Choose your provider to Login:</Text>
    </Flex>
  )
}

export default LoginPage
