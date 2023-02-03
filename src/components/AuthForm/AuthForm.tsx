import { upperFirst } from '@mantine/hooks'
import { Anchor, Flex, Paper, Text, Title } from '@mantine/core'
import { GoogleButton } from 'components/SocialButtons/GoogleButton'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

type AuthFormProps = {
  type: 'login' | 'signup'
}
export const AuthForm = ({ type }: AuthFormProps) => {
  return (
    <>
      <Title order={1}>This is the {upperFirst(type)} page</Title>
      <Text>Choose your provider to {upperFirst(type)}:</Text>

      <Paper radius="md" p="xl" withBorder mt="xl" w={350}>
        <Flex direction="column" gap={16} mb="md">
          <GoogleButton size="md" onClick={() => void signIn('google')}>
            Connect with Google
          </GoogleButton>
        </Flex>

        {type === 'signup' && (
          <Text size="xs" w="300px" align="center" mx="auto">
            By clicking continue, you agree to our Terms of Service and Privacy Policy.
          </Text>
        )}

        <Flex justify="center">
          <Link href={type === 'login' ? '/signup' : '/login'}>
            <Anchor component="button" type="button" color="dimmed" size="xs">
              {type === 'signup'
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>
          </Link>
        </Flex>
      </Paper>
    </>
  )
}
