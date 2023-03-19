import { SegmentedControl } from '@mantine/core'
import type { Field } from '@prisma/client'
import { generateId } from 'utils/generateId'

interface FieldProps extends Field {
  options: { data?: { value: string }[] }
}
interface SegmentedControlFieldProps {
  field: FieldProps
}
export const SegmentedControlField = ({ field }: SegmentedControlFieldProps) => {
  const data =
    field.options.data?.map((option) => ({
      value: option.value || generateId(),
      label: option.value
    })) || []
  return (
    <div>
      <SegmentedControl data={data} />
    </div>
  )
}
