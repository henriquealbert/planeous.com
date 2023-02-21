import { Center, Paper } from '@mantine/core'
import { ProtectedRoute } from 'components/Layouts/PrivateRoute/PrivateRoute'
import { OnboardingForm } from 'components/Onboarding/OnboardingForm'
import type { GetStaticProps } from 'next'
import { type NextPage } from 'next'
import { getServerTranslation } from 'utils/serverTranslation'

const OnboardingPage: NextPage = () => {
  return (
    <ProtectedRoute>
      <Center h="100vh">
        <Paper bg="gray.9" withBorder radius="lg" p="48px 96px">
          <OnboardingForm />
        </Paper>
      </Center>
    </ProtectedRoute>
  )
}

export default OnboardingPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: await getServerTranslation(locale ?? 'en')
    }
  }
}
