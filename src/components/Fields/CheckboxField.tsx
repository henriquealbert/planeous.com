import { Checkbox, Group } from '@mantine/core'
import type { Field } from '@prisma/client'

interface CheckboxFieldProps {
  field: Field
}
export const CheckboxField = ({ field }: CheckboxFieldProps) => {
  return (
    <Checkbox.Group defaultValue={['react']}>
      <Group mt="xs">
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  )
}
