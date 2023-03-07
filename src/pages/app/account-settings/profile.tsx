import { Flex, Title } from '@mantine/core'
import { PrivateRouteAccountSettings } from 'components/Layouts/PrivateRoute/PrivateRouteAccountSettings'
import type { GetStaticProps } from 'next'
import { type NextPage } from 'next'
import { getServerTranslation } from 'utils/serverTranslation'

const ProfilePage: NextPage = () => {
  return (
    <PrivateRouteAccountSettings pageTitle="Profile">
      <Flex direction="column">
        <Title order={1}>Profile</Title>
      </Flex>
    </PrivateRouteAccountSettings>
  )
}

export default ProfilePage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: await getServerTranslation(locale ?? 'en')
    }
  }
}
