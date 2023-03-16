import { FieldsType } from '@prisma/client'
import { z } from 'zod'

export const createFieldValidation = z.object({
  name: z.string().min(1),
  type: z.nativeEnum(FieldsType),
  required: z.boolean(),
  options: z.record(z.any())
})

export type FieldValidation = z.infer<typeof createFieldValidation>

export const showRequired = (type: FieldsType) => {
  switch (type) {
    case FieldsType.TEXTAREA:
      return false
    case FieldsType.CHECKBOX:
      return false
    case FieldsType.RATING:
      return false
    case FieldsType.SEGMENTED_CONTROL:
      return false

    default:
      return true
  }
}

export const showOptions = (type: FieldsType) => {
  switch (type) {
    case FieldsType.CHECKBOX:
      return true
    case FieldsType.SELECT:
      return true
    case FieldsType.MULTI_SELECT:
      return true
    case FieldsType.CURRENCY:
      return true
    case FieldsType.SEGMENTED_CONTROL:
      return true

    default:
      return false
  }
}
