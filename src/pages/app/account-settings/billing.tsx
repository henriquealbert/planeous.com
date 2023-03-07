import { Flex, Title } from '@mantine/core'
import { PrivateRouteAccountSettings } from 'components/Layouts/PrivateRoute/PrivateRouteAccountSettings'
import type { GetStaticProps } from 'next'
import { type NextPage } from 'next'
import { getServerTranslation } from 'utils/serverTranslation'

const BillingPage: NextPage = () => {
  return (
    <PrivateRouteAccountSettings pageTitle="Billing">
      <Flex direction="column">
        <Title order={1}>Billing</Title>
      </Flex>
    </PrivateRouteAccountSettings>
  )
}

export default BillingPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: await getServerTranslation(locale ?? 'en')
    }
  }
}
