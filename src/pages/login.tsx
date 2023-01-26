import { Flex } from '@mantine/core'
import { AuthForm } from 'components/AuthForm/AuthForm'
import { type NextPage } from 'next'

const LoginPage: NextPage = () => {
  return (
    <Flex direction="column" justify="center" align="center" h="100vh">
      <AuthForm type="login" />
    </Flex>
  )
}

export default LoginPage
