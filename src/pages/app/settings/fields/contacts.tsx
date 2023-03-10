import { Button, Text } from '@mantine/core'
import { PrivateRouteAccountSettings } from 'components/Layouts/PrivateRoute/PrivateRouteAccountSettings'
import type { GetStaticProps } from 'next'
import { type NextPage } from 'next'
import { useTranslations } from 'next-intl'
import { getServerTranslation } from 'utils/serverTranslation'
import NextLink from 'next/link'
import { CustomContactFields } from 'components/CustomFields/CustomContactFields'

const FieldsPage: NextPage = () => {
  const t = useTranslations('Settings.CustomFields.Contacts')

  return (
    <PrivateRouteAccountSettings
      pageTitle={t('title')}
      rightAction={
        <Button variant="default" compact component={NextLink} href="/app/settings/fields">
          {t('backBtn')}
        </Button>
      }
    >
      <Text mb="xl">{t('description')}</Text>
      <CustomContactFields />
    </PrivateRouteAccountSettings>
  )
}

export default FieldsPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: await getServerTranslation(locale ?? 'en')
    }
  }
}
