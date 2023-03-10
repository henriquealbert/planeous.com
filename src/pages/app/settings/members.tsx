import { Flex } from '@mantine/core'
import { PrivateRouteAccountSettings } from 'components/Layouts/PrivateRoute/PrivateRouteAccountSettings'
import { InviteMembers } from 'components/Organization/InviteMembers/InviteMembers'
import type { GetStaticProps } from 'next'
import { type NextPage } from 'next'
import { getServerTranslation } from 'utils/serverTranslation'

const InviteMembersPage: NextPage = () => {
  return (
    <PrivateRouteAccountSettings pageTitle="Members">
      <Flex direction="column" maw="400px">
        <InviteMembers />
      </Flex>
    </PrivateRouteAccountSettings>
  )
}

export default InviteMembersPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: await getServerTranslation(locale ?? 'en')
    }
  }
}
