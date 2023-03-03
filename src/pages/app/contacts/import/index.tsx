import type { GetStaticProps } from 'next'
import { type NextPage } from 'next'
import { getServerTranslation } from 'utils/serverTranslation'
import { useTranslations } from 'next-intl'
import { ProtectedRoute } from 'components/Layouts/PrivateRoute/PrivateRoute'
import { ImportContact } from 'components/Contact/ImportContact/ImportContact'

const ImportContactsPage: NextPage = () => {
  const t = useTranslations('ImportContacts')
  return (
    <ProtectedRoute pageTitle={t('title')}>
      <ImportContact />
    </ProtectedRoute>
  )
}

export default ImportContactsPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: await getServerTranslation(locale ?? 'en')
    }
  }
}
