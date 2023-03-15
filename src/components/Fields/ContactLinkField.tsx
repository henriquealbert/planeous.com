import { Autocomplete } from '@mantine/core'
import type { Field } from '@prisma/client'

interface ContactLinkFieldProps {
  field: Field
}
export const ContactLinkField = ({ field }: ContactLinkFieldProps) => {
  return <Autocomplete data={[]} />
}
