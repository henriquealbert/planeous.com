import { Flex, Title } from '@mantine/core'
import { ProtectedRoute } from 'components/Layouts/PrivateRoute/PrivateRoute'
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const DashboardPage: NextPage = () => {
  const { t } = useTranslation('home')
  return (
    <ProtectedRoute>
      <Flex direction="column">
        <Title order={1}>DashboardPage</Title>
      </Flex>
    </ProtectedRoute>
  )
}

export default DashboardPage

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['home']))
  }
})
