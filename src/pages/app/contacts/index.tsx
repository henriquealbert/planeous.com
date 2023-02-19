import { Flex, Title } from '@mantine/core'
import { mockData } from 'components/contacts/mockData'
import { ProtectedRoute } from 'components/Layouts/PrivateRoute/PrivateRoute'
import { type NextPage } from 'next'
import { ContactList } from 'components/contacts/ContactList'

const ContactsPage: NextPage = () => {
  return (
    <ProtectedRoute>
      <Flex direction="column">
        <Title order={1} mb="xl">
          Contacts
        </Title>

        <ContactList data={mockData} />
      </Flex>
    </ProtectedRoute>
  )
}

export default ContactsPage
