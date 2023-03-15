import { rem, TextInput } from '@mantine/core'
import { IconTypography } from '@tabler/icons-react'
import type { Field } from '@prisma/client'

interface TextFieldProps {
  field: Field
}
export const TextField = ({ field }: TextFieldProps) => {
  return <TextInput placeholder="Single line text" icon={<IconTypography size={rem(14)} />} />
}
