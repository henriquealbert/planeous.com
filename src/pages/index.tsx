import { ProtectedRoute } from 'components/Layouts/PrivateRoute/PrivateRoute'
import { InviteMembersModal } from 'components/Organization/InviteMembers/InviteMembersModal'
import type { GetStaticProps, NextPage } from 'next'
import { getServerTranslation } from 'utils/serverTranslation'

const DashboardPage: NextPage = () => {
  return (
    <ProtectedRoute pageTitle="Dashboard">
      Content
      <InviteMembersModal />
    </ProtectedRoute>
  )
}

export default DashboardPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: await getServerTranslation(locale ?? 'en')
    }
  }
}
