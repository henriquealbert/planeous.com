import { Flex } from '@mantine/core'
import { PrivateRouteSettings } from 'components/Layouts/PrivateRoute/PrivateRouteSettings'
import { InviteMembers } from 'components/Organization/InviteMembers/InviteMembers'
import type { GetStaticProps } from 'next'
import { type NextPage } from 'next'
import { getServerTranslation } from 'utils/serverTranslation'

const InviteMembersPage: NextPage = () => {
  return (
    <PrivateRouteSettings pageTitle="Members">
      <Flex direction="column" maw="400px">
        <InviteMembers />
      </Flex>
    </PrivateRouteSettings>
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
