import { Stack } from '@mantine/core'
import { CreateNewCustomField } from './CreateNewCustomField'
import { DeletedFields } from './DeletedFields'
import { FieldsList } from './FieldsList'

export const CustomContactFields = () => {
  return (
    <Stack spacing="xl">
      <CreateNewCustomField />
      <FieldsList />
      <DeletedFields />
    </Stack>
  )
}
