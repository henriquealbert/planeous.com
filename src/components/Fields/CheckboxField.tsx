import { Checkbox, Group } from '@mantine/core'
import type { Field } from '@prisma/client'

interface CheckboxFieldProps {
  field: Field
}
export const CheckboxField = ({ field }: CheckboxFieldProps) => {
  const options = field.options as { data?: { value: string }[] }
  const data = options.data?.map((option) => option.value) ?? []

  return (
    <Checkbox.Group>
      <Group mt="xs">
        {data.map((option) => (
          <Checkbox key={option} value={option} label={option} />
        ))}
        {data.length === 0 && 'No options'}
      </Group>
    </Checkbox.Group>
  )
}
