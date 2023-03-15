import { rem, TextInput } from '@mantine/core'
import { IconPhone } from '@tabler/icons-react'
import type { Field } from '@prisma/client'

interface PhoneFieldProps {
  field: Field
}
export const PhoneField = ({ field }: PhoneFieldProps) => {
  return <TextInput icon={<IconPhone size={rem(14)} />} />
}
