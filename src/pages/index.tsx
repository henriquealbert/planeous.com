import { Flex, Title } from '@mantine/core'
import { PublicRoute } from 'components/Layouts/PublicRoute/PublicRoute'
import type { GetStaticProps, NextPage } from 'next'
import { getServerTranslation } from 'utils/serverTranslation'
import { useTranslations } from 'next-intl'

const HomePage: NextPage = () => {
  const t = useTranslations('Home')
  return (
    <PublicRoute>
      <Flex direction="column" justify="center" align="center" h="100vh">
        <Title order={1}>{t('title')}</Title>
      </Flex>
    </PublicRoute>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: await getServerTranslation(locale ?? 'en')
    }
  }
}
