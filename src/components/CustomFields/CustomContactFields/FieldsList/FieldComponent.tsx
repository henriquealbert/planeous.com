import { Input } from '@mantine/core'
import type { Field } from '@prisma/client'
import { FieldsType } from '@prisma/client'

import {
  CheckboxField,
  ContactLinkField,
  CurrencyField,
  DatetimeField,
  EmailField,
  FileField,
  MultiSelectField,
  NumberField,
  PhoneField,
  RatingField,
  SegmentedControlField,
  SelectField,
  TextAreaField,
  TextField,
  UrlField
} from 'components/Fields'

interface FieldComponentProps {
  field: Field
}

export const FieldComponent = ({ field }: FieldComponentProps) => {
  return (
    <Input.Wrapper label={field.name || ''} withAsterisk={field.required}>
      {getField(field)}
    </Input.Wrapper>
  )
}

interface FieldProps extends Field {
  options: Record<string, never>
}

const getField = (_field: Field) => {
  const field = _field as FieldProps // Prisma doesn't allow to add custom fields to the model

  switch (field.type) {
    case FieldsType.TEXT:
      return <TextField field={field} />
    case FieldsType.NUMBER:
      return <NumberField field={field} />
    case FieldsType.TEXTAREA:
      return <TextAreaField field={field} />
    case FieldsType.CURRENCY:
      return <CurrencyField field={field} />
    case FieldsType.DATETIME:
      return <DatetimeField field={field} />
    case FieldsType.SELECT:
      return <SelectField field={field} />
    case FieldsType.MULTI_SELECT:
      return <MultiSelectField field={field} />
    case FieldsType.CHECKBOX:
      return <CheckboxField field={field} />
    case FieldsType.CONTACT_LINK:
      return <ContactLinkField field={field} />
    case FieldsType.SEGMENTED_CONTROL:
      return <SegmentedControlField field={field} />
    case FieldsType.EMAIL:
      return <EmailField field={field} />
    case FieldsType.PHONE:
      return <PhoneField field={field} />
    case FieldsType.URL:
      return <UrlField field={field} />
    case FieldsType.FILE:
      return <FileField field={field} />
    case FieldsType.RATING:
      return <RatingField field={field} />
  }
}
