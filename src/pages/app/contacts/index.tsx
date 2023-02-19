import { Flex, Title } from '@mantine/core'
import { TableSort } from 'components/contacts/ContactsList'
import { mockData } from 'components/contacts/mockData'
import { ProtectedRoute } from 'components/Layouts/PrivateRoute/PrivateRoute'
import { type NextPage } from 'next'

const ContactsPage: NextPage = () => {
  return (
    <ProtectedRoute>
      <Flex direction="column">
        <Title order={1}>Contacts</Title>
        <TableSort data={mockData} />
      </Flex>
    </ProtectedRoute>
  )
}

export default ContactsPage
