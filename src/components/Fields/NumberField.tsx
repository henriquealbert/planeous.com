import { NumberInput, rem } from '@mantine/core'
import { Icon123 } from '@tabler/icons-react'
import type { Field } from '@prisma/client'

interface NumberFieldProps {
  field: Field
}
export const NumberField = ({ field }: NumberFieldProps) => {
  return <NumberInput placeholder="1234567890" icon={<Icon123 size={rem(18)} />} />
}
