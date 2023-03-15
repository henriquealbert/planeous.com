import { Rating } from '@mantine/core'
import type { Field } from '@prisma/client'

interface RatingFieldProps {
  field: Field
}

export const RatingField = ({ field }: RatingFieldProps) => {
  return <Rating value={3.5} fractions={2} readOnly {...field} />
}
