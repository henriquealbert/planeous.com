import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useTranslations } from 'next-intl'
import { CreateNewCustomFieldModal } from './CreateNewCustomFieldModal'

export const CreateNewCustomField = () => {
  const t = useTranslations('Settings.CustomFields.Contacts')
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <div>
      <Button onClick={open}>{t('createNewCustomFieldBtn')}</Button>
      <CreateNewCustomFieldModal opened={opened} close={close} />
    </div>
  )
}
