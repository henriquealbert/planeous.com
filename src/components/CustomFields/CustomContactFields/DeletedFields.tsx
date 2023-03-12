import { Card, Text, Title } from '@mantine/core'
import { useTranslations } from 'next-intl'

export const DeletedFields = () => {
  const t = useTranslations('Settings.CustomFields.Contacts.DeletedFields')

  return (
    <div>
      <Title mb="xs" mt="xl" fw="normal" order={3}>
        {t('title')}
      </Title>
      <Card w="850px" p="xl" withBorder shadow="sm">
        <Text>{t('note')}</Text>

        <Text mt="xl" color="dimmed" fz="sm">
          {t('noData')}
        </Text>
      </Card>
    </div>
  )
}
