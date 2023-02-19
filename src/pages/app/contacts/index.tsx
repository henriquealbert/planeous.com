import { Flex, Title } from '@mantine/core'
import { ProtectedRoute } from 'components/Layouts/PrivateRoute/PrivateRoute'
import { type NextPage } from 'next'

const ContactsPage: NextPage = () => {
  return (
    <ProtectedRoute>
      <Flex direction="column">
        <Title order={1}>Contacts</Title>
      </Flex>
    </ProtectedRoute>
  )
}

export default ContactsPage
