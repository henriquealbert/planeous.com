import type { GetStaticProps } from 'next'
import { type NextPage } from 'next'
import { getServerTranslation } from 'utils/serverTranslation'
import { useTranslations } from 'next-intl'
import { ProtectedRoute } from 'components/Layouts/PrivateRoute/PrivateRoute'
import { ImportContact } from 'components/Contact/ImportContact/ImportContact'
import { useStore } from 'contexts/store'

const ImportContactsPage: NextPage = () => {
  const t = useTranslations('ImportContacts')
  const { showPageTitle } = useStore((state) => state.importContact)

  const handlePageTitle = () => {
    if (!showPageTitle && typeof showPageTitle === 'string') {
      return t('title')
    }
    if (showPageTitle) {
      return showPageTitle
    }

    return
  }
  return (
    <ProtectedRoute pageTitle={handlePageTitle()}>
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
