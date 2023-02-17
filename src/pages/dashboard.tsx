import { Flex, Title } from '@mantine/core'
import { ProtectedRoute } from 'components/PrivateRoute/PrivateRoute'
import { type NextPage } from 'next'

const DashboardPage: NextPage = () => {
  return (
    <ProtectedRoute>
      <Flex direction="column">
        <Title order={1}>This is the dashboard</Title>
      </Flex>
    </ProtectedRoute>
  )
}

export default DashboardPage
