import { Flex, Title } from '@mantine/core'
import { ProtectedRoute } from 'components/Layouts/PrivateRoute/PrivateRoute'
import { PublicRoute } from 'components/Layouts/PublicRoute/PublicRoute'
import { useAuth } from 'contexts/AuthContext'
import { type NextPage } from 'next'

const DashboardPage: NextPage = () => {
  return (
    <ProtectedRoute>
      <Flex direction="column">
        <Title order={1}>DashboardPage</Title>
      </Flex>
    </ProtectedRoute>
  )
}

const HomePage: NextPage = () => {
  return (
    <PublicRoute>
      <Flex direction="column" justify="center" align="center" h="100vh">
        <Title order={1}>Welcome to Planeous</Title>
      </Flex>
    </PublicRoute>
  )
}

const IndexPage: NextPage = () => {
  const { status } = useAuth()

  if (status === 'unauthenticated') {
    return <HomePage />
  }
  return <DashboardPage />
}

export default IndexPage
