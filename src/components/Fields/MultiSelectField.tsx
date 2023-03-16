import { MultiSelect, rem } from '@mantine/core'
import { IconPlaylistAdd } from '@tabler/icons-react'
import type { Field } from '@prisma/client'

interface FieldProps extends Field {
  options: { data?: { value: string }[] }
}
interface MultiSelectFieldProps {
  field: FieldProps
}
export const MultiSelectField = ({ field }: MultiSelectFieldProps) => {
  const data =
    field.options.data?.map((option) => ({
      value: option.value,
      label: option.value
    })) || []
  return (
    <MultiSelect
      data={data}
      withinPortal
      clearable
      searchable
      icon={<IconPlaylistAdd size={rem(16)} />}
    />
  )
}
