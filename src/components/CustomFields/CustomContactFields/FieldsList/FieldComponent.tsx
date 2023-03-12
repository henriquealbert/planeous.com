import { Input, NumberInput, Textarea } from '@mantine/core'
import type { Field } from '@prisma/client'
import { FieldsType } from '@prisma/client'

interface FieldComponentProps {
  field: Field
}

export const FieldComponent = ({ field }: FieldComponentProps) => {
  return (
    <Input.Wrapper label={field.name} withAsterisk={field.required}>
      {getField(field)}
    </Input.Wrapper>
  )
}

const getField = (field: Field) => {
  switch (field.type) {
    case FieldsType.TEXT:
      return <Input disabled />
    case FieldsType.NUMBER:
      return <NumberInput />
    case FieldsType.TEXTAREA:
      return <Textarea />
    default:
      return <Input disabled />
  }
}
