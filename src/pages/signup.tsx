import { Center } from '@mantine/core'
import { AuthForm } from 'components/AuthForm/AuthForm'
import { PublicRoute } from 'components/Layouts/PublicRoute/PublicRoute'
import { type NextPage } from 'next'

const SignUpPage: NextPage = () => {
  return (
    <PublicRoute>
      <Center mt={220}>
        <AuthForm type="signup" />
      </Center>
    </PublicRoute>
  )
}

export default SignUpPage
