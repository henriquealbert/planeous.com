import { Center } from '@mantine/core'
import { AuthForm } from 'components/AuthForm/AuthForm'
import { PublicRoute } from 'components/Layouts/PublicRoute/PublicRoute'
import type { GetStaticProps } from 'next'
import { type NextPage } from 'next'
import { getServerTranslation } from 'utils/serverTranslation'

const LoginPage: NextPage = () => {
  return (
    <PublicRoute>
      <Center mt={220}>
        <AuthForm type="login" />
      </Center>
    </PublicRoute>
  )
}

export default LoginPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: await getServerTranslation(locale ?? 'en')
    }
  }
}
