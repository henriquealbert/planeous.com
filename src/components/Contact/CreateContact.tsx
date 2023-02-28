import { Button } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'

export const CreateContact = () => {
  const t = useTranslations('Contacts')

  const handleCreateNewContact = () => {
    prompt('Create new contact modal')
  }

  return (
    <Button
      leftIcon={<IconPlus size={14} stroke={4} />}
      size="sm"
      mb="xl"
      onClick={handleCreateNewContact}
    >
      {t('createContact')}
    </Button>
  )
}
