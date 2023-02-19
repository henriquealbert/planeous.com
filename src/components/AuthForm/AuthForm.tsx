import { upperFirst } from '@mantine/hooks'
import { Anchor, Box, Center, Flex, Paper, Text, Title } from '@mantine/core'
import { GoogleButton } from 'components/SocialButtons/GoogleButton'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

type AuthFormProps = {
  type: 'login' | 'signup'
}
export const AuthForm = ({ type }: AuthFormProps) => {
  return (
    <Box>
      <Title align="center" order={1}>
        {type === 'signup' ? 'Welcome to Planeous!' : 'Welcome again to Planeous!'}
      </Title>
      <Text align="center">Choose your provider to {upperFirst(type)}:</Text>

      <Center>
        <Paper radius="md" p="xl" withBorder mt="xs" w={350}>
          <Flex direction="column" gap={16} mb="md">
            <GoogleButton size="md" onClick={() => void signIn('google', { callbackUrl: '/app' })}>
              Connect with Google
            </GoogleButton>
          </Flex>

          {type === 'signup' && (
            <Text size="xs" w="300px" align="center" mx="auto">
              By clicking continue, you agree to our Terms of Service and Privacy Policy.
            </Text>
          )}

          <Flex justify="center" mt="xl">
            <Link href={type === 'login' ? '/signup' : '/login'}>
              <Anchor component="button" type="button" color="dimmed" size="xs">
                {type === 'signup'
                  ? 'Already have an account? Login'
                  : "Don't have an account? Register"}
              </Anchor>
            </Link>
          </Flex>
        </Paper>
      </Center>
    </Box>
  )
}
