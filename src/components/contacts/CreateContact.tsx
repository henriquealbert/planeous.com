import { Button } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'

export const CreateContact = () => {
  const handleCreateNewContact = () => {
    prompt('Create new contact modal')
  }
  return (
    <Button
      leftIcon={<IconPlus size={14} stroke={4} />}
      size="sm"
      variant="outline"
      mb="xl"
      onClick={handleCreateNewContact}
      color="gray"
    >
      Create contact
    </Button>
  )
}
