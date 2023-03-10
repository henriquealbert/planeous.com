import { Button } from '@mantine/core'
import { useTranslations } from 'next-intl'

export const CreateNewCustomField = () => {
  const t = useTranslations('Settings.CustomFields.Contacts')
  return (
    <div>
      <Button>{t('createNewCustomField')}</Button>
    </div>
  )
}
