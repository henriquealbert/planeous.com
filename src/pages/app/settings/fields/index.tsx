import { Button, Text, Title } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'
import { PrivateRouteAccountSettings } from 'components/Layouts/PrivateRoute/PrivateRouteAccountSettings'
import type { GetStaticProps } from 'next'
import { type NextPage } from 'next'
import { useTranslations } from 'next-intl'
import { getServerTranslation } from 'utils/serverTranslation'
import NextLink from 'next/link'

const FieldsPage: NextPage = () => {
  const t = useTranslations('Settings.CustomFields')

  const primaryRecords = [
    { title: t('contacts'), href: '/app/settings/fields/contacts' },
    { title: t('companies'), href: '/app/settings/fields/companies' }
  ]
  return (
    <PrivateRouteAccountSettings pageTitle={t('title')}>
      <Text mb="xl">{t('description')}</Text>
      <Title order={3} fw="normal" mb="md">
        {t('primaryRecords')}
      </Title>

      <Button.Group orientation="vertical" w="400px">
        {primaryRecords.map((record) => (
          <Button
            component={NextLink}
            key={record.href}
            href={record.href}
            variant="default"
            rightIcon={<IconChevronRight />}
            radius="md"
            h="50px"
            sx={{
              fontWeight: 'normal',
              '.mantine-Button-rightIcon': {
                marginLeft: 'auto'
              }
            }}
          >
            {record.title}
          </Button>
        ))}
      </Button.Group>
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
