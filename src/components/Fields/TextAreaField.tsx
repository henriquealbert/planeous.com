import { rem, Textarea } from '@mantine/core'
import { IconForms } from '@tabler/icons-react'
import type { Field } from '@prisma/client'

interface TextAreaFieldProps {
  field: Field
}
export const TextAreaField = ({ field }: TextAreaFieldProps) => {
  return (
    <Textarea
      placeholder="Multi line text"
      icon={
        <IconForms
          style={{
            marginBottom: 'auto',
            marginTop: rem(14)
          }}
          size={rem(14)}
        />
      }
      minRows={2}
      maxRows={4}
      autosize
    />
  )
}
