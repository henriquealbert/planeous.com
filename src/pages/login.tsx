import { Flex, Paper, Text, Title } from '@mantine/core'
import { GithubButton } from 'components/SocialButtons/GithubButton'
import { GoogleButton } from 'components/SocialButtons/GoogleButton'
import { TwitterButton } from 'components/SocialButtons/TwitterButton'
import { type NextPage } from 'next'

const LoginPage: NextPage = () => {
  return (
    <Flex direction="column" justify="center" align="center" h="100vh">
      <Title order={1}>This is the Login page</Title>
      <Text>Choose your provider to Login:</Text>
      <Paper radius="md" p="xl" withBorder mt="xl">
        <Flex direction="column" gap={16}>
          <TwitterButton>Login with Twitter</TwitterButton>
          <GoogleButton>Login with Google</GoogleButton>
          <GithubButton>Login with Github</GithubButton>
        </Flex>
      </Paper>
    </Flex>
  )
}

export default LoginPage
