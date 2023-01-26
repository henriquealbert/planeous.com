import { Flex } from '@mantine/core'
import { AuthForm } from 'components/AuthForm/AuthForm'
import { type NextPage } from 'next'

const SignUpPage: NextPage = () => {
  return (
    <Flex direction="column" justify="center" align="center" h="100vh">
      <Flex direction="column" justify="center" align="center" h="100vh">
        <AuthForm type="signup" />
      </Flex>
    </Flex>
  )
}

export default SignUpPage
