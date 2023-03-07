import { Flex, Title } from '@mantine/core'
import { PrivateRouteAccountSettings } from 'components/Layouts/PrivateRoute/PrivateRouteAccountSettings'
import type { GetStaticProps } from 'next'
import { type NextPage } from 'next'
import { getServerTranslation } from 'utils/serverTranslation'

const FieldsPage: NextPage = () => {
  return (
    <PrivateRouteAccountSettings pageTitle="Custom Fields">
      <Flex direction="column">
        <Title order={1}>Custom Fields</Title>
      </Flex>
    </PrivateRouteAccountSettings>
  )
}

export default FieldsPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: await getServerTranslation(locale ?? 'en')
    }
  }
}
