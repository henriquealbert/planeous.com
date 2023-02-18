import { Center } from '@mantine/core'
import { AuthForm } from 'components/AuthForm/AuthForm'
import { PublicRoute } from 'components/Layouts/PublicRoute/PublicRoute'
import { type NextPage } from 'next'

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
