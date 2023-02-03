import { Button, Flex, Text, Title } from '@mantine/core'
import { ProtectedRoute } from 'components/PrivateRoute/PrivateRoute'
import { useAuth } from 'contexts/AuthContext'
import { type NextPage } from 'next'
import { signOut } from 'next-auth/react'

const HomePage: NextPage = () => {
  const { sessionData } = useAuth()

  return (
    <ProtectedRoute>
      <Flex direction="column" justify="center" align="center" h="100vh">
        <Title order={1}>Welcome to My SaaS</Title>
        <Text mb="lg">Hello, {sessionData?.user?.name}</Text>
        <div>
          <Button onClick={() => void signOut()}>Sign out</Button>
        </div>
      </Flex>
    </ProtectedRoute>
  )
}

export default HomePage
