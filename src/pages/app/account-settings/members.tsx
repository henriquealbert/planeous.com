import { Flex } from '@mantine/core'
import { ProtectedRoute } from 'components/Layouts/PrivateRoute/PrivateRoute'
import { InviteMembers } from 'components/Organization/InviteMembers/InviteMembers'
import type { GetStaticProps } from 'next'
import { type NextPage } from 'next'
import { getServerTranslation } from 'utils/serverTranslation'

const InviteMembersPage: NextPage = () => {
  return (
    <ProtectedRoute pageTitle="Invite Members">
      <Flex direction="column" maw="400px">
        <InviteMembers />
      </Flex>
    </ProtectedRoute>
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
