import { Card, Text } from '@mantine/core'
import { useTranslations } from 'next-intl'

export const DeletedFields = () => {
  const t = useTranslations('Settings.CustomFields.Contacts.DeletedFields')

  return (
    <Card w="850px" p="xl" withBorder shadow="sm">
      <Text>{t('note')}</Text>

      <Text mt="xl" color="dimmed" fz="sm">
        {t('noData')}
      </Text>
    </Card>
  )
}
