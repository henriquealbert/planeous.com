import { NumberInput, rem } from '@mantine/core'
import { Icon123 } from '@tabler/icons-react'
import type { Field } from '@prisma/client'

interface FieldProps extends Field {
  options: { decimal?: boolean; negative?: boolean }
}
interface NumberFieldProps {
  field: FieldProps
}
export const NumberField = ({ field }: NumberFieldProps) => {
  return (
    <NumberInput
      precision={field.options?.decimal ? 2 : 0}
      min={field.options?.negative ? undefined : 0}
      placeholder="1234567890"
      icon={<Icon123 size={rem(18)} />}
    />
  )
}
