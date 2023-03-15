import { rem, TextInput } from '@mantine/core'
import { IconAt } from '@tabler/icons-react'
import type { Field } from '@prisma/client'

interface EmailFieldProps {
  field: Field
}
export const EmailField = ({ field }: EmailFieldProps) => {
  return <TextInput type="email" placeholder="Your email" icon={<IconAt size={rem(14)} />} />
}
