import { Flex } from '@mantine/core'
import { ProtectedRoute } from 'components/Layouts/PrivateRoute/PrivateRoute'
import type { GetStaticProps } from 'next'
import { type NextPage } from 'next'
import { getServerTranslation } from 'utils/serverTranslation'
import { useTranslations } from 'next-intl'
import { mockData } from 'components/Contacts/mockData'
import { ContactList } from 'components/Contacts/ContactList'

const ContactsPage: NextPage = () => {
  const t = useTranslations('Contacts')
  return (
    <ProtectedRoute pageTitle={t('title')}>
      <Flex direction="column">
        <ContactList data={mockData} />
      </Flex>
    </ProtectedRoute>
  )
}

export default ContactsPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: await getServerTranslation(locale ?? 'en')
    }
  }
}
