import { FieldsType } from '@prisma/client'
import { z } from 'zod'

export const createFieldValidation = z.object({
  name: z.string().min(1),
  type: z.nativeEnum(FieldsType),
  required: z.boolean(),
  options: z.object({})
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

    default:
      return true
  }
}
