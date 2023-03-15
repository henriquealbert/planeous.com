import { FileInput, rem } from '@mantine/core'
import { IconUpload } from '@tabler/icons-react'
import type { Field } from '@prisma/client'

interface FileFieldProps {
  field: Field
}
export const FileField = ({ field }: FileFieldProps) => {
  return <FileInput placeholder="Upload file" icon={<IconUpload size={rem(14)} />} />
}
