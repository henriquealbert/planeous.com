import { Button, Flex, Text, Title } from '@mantine/core'
import { type NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const HomePage: NextPage = () => {
  const { data: sessionData } = useSession()
  console.log('sessionData', sessionData)
  return (
    <Flex direction="column" justify="center" align="center" h="100vh">
      <Title order={1}>Welcome to My SaaS</Title>
      {sessionData && <Text mb="lg">Hello, {sessionData?.user?.name}</Text>}
      <div>
        {sessionData ? (
          <Button onClick={() => void signOut()}>Sign out</Button>
        ) : (
          <Link href="/login">
            <Button>Go to Login Page</Button>
          </Link>
        )}
      </div>
    </Flex>
  )
}

export default HomePage
