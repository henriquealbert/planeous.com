import { Flex } from '@mantine/core'
import { PrivateRouteSettings } from 'components/Layouts/PrivateRoute/PrivateRouteSettings'
import type { GetStaticProps } from 'next'
import { type NextPage } from 'next'
import { getServerTranslation } from 'utils/serverTranslation'

const BillingPage: NextPage = () => {
  return (
    <PrivateRouteSettings pageTitle="Billing">
      <Flex direction="column">content</Flex>
    </PrivateRouteSettings>
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
