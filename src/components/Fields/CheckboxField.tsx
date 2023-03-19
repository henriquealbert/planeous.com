import { Checkbox, Group } from '@mantine/core'
import type { Field } from '@prisma/client'

interface FieldProps extends Field {
  options: {
    data?: { value: string }[]
  }
}
interface CheckboxFieldProps {
  field: FieldProps
}
export const CheckboxField = ({ field }: CheckboxFieldProps) => {
  const data = field.options.data?.map((option) => option.value) ?? []

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
