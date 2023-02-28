import { Button } from '@mantine/core'
import { ProtectedRoute } from 'components/Layouts/PrivateRoute/PrivateRoute'
import type { GetStaticProps } from 'next'
import { type NextPage } from 'next'
import { getServerTranslation } from 'utils/serverTranslation'
import NextLink from 'next/link'

const AccountSettingsPage: NextPage = () => {
  return (
    <ProtectedRoute pageTitle="Account Settings">
      <NextLink href="/app/account-settings/members">
        <Button>Invite Members</Button>
      </NextLink>
    </ProtectedRoute>
  )
}

export default AccountSettingsPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: await getServerTranslation(locale ?? 'en')
    }
  }
}
