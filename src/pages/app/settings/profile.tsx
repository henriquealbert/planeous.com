import { Flex } from '@mantine/core'
import { PrivateRouteSettings } from 'components/Layouts/PrivateRoute/PrivateRouteSettings'
import type { GetStaticProps } from 'next'
import { type NextPage } from 'next'
import { getServerTranslation } from 'utils/serverTranslation'

const ProfilePage: NextPage = () => {
  return (
    <PrivateRouteSettings pageTitle="Profile">
      <Flex direction="column">content</Flex>
    </PrivateRouteSettings>
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
