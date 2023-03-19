import { rem, Select } from '@mantine/core'
import { IconList } from '@tabler/icons-react'
import type { Field } from '@prisma/client'

interface FieldProps extends Field {
  options: { data?: { value: string }[] }
}
interface SelectFieldProps {
  field: FieldProps
}
export const SelectField = ({ field }: SelectFieldProps) => {
  const data =
    field.options.data?.map((option) => ({
      value: option.value,
      label: option.value
    })) || []
  return <Select data={data} withinPortal clearable searchable icon={<IconList size={rem(16)} />} />
}
