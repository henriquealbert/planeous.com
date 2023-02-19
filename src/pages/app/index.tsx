import { Flex, Title } from '@mantine/core'
import { ProtectedRoute } from 'components/Layouts/PrivateRoute/PrivateRoute'
import type { NextPage } from 'next'

const DashboardPage: NextPage = () => {
  return (
    <ProtectedRoute>
      <Flex direction="column">
        <Title order={1}>DashboardPage</Title>
      </Flex>
    </ProtectedRoute>
  )
}

export default DashboardPage
