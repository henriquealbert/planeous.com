import { NumberInput, rem } from '@mantine/core'
import { Icon123 } from '@tabler/icons-react'
import type { Field } from '@prisma/client'

interface NumberFieldProps {
  field: Field
}
export const NumberField = ({ field }: NumberFieldProps) => {
  const options = field?.options as { decimal?: boolean; negative?: boolean }
  return (
    <NumberInput
      precision={options?.decimal ? 2 : 0}
      min={options?.negative ? undefined : 0}
      placeholder="1234567890"
      icon={<Icon123 size={rem(18)} />}
    />
  )
}
