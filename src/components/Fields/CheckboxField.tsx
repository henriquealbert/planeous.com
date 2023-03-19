import { Checkbox, Group } from '@mantine/core'
import type { Field } from '@prisma/client'
import { generateId } from 'utils/generateId'

interface FieldProps extends Field {
  options: {
    data?: { value: string }[]
  }
}
interface CheckboxFieldProps {
  field: FieldProps
}
export const CheckboxField = ({ field }: CheckboxFieldProps) => {
  const data =
    field.options.data?.map((option) => ({
      value: option.value,
      id: generateId()
    })) ?? []

  return (
    <Checkbox.Group>
      <Group mt="xs">
        {data.map((option) => (
          <Checkbox key={option.id} value={option.value} label={option.value} />
        ))}
        {data.length === 0 && 'No options'}
      </Group>
    </Checkbox.Group>
  )
}
