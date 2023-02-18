import { Flex, Title } from '@mantine/core'
import { PublicRoute } from 'components/Layouts/PublicRoute/PublicRoute'
import type { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const HomePage: NextPage = () => {
  const { t } = useTranslation('home')
  return (
    <PublicRoute>
      <Flex direction="column" justify="center" align="center" h="100vh">
        <Title order={1}>{t('welcome')}</Title>
      </Flex>
    </PublicRoute>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['home']))
  }
})
