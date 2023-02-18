import { Flex, Title } from '@mantine/core'
import { ProtectedRoute } from 'components/Layouts/PrivateRoute/PrivateRoute'
import type { GetServerSideProps } from 'next'
import { type NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['contacts']))
  }
})
