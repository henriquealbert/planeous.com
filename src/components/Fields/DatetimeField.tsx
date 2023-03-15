import { rem } from '@mantine/core'
import { DateTimePicker } from '@mantine/dates'
import { IconCalendar } from '@tabler/icons-react'
import type { Field } from '@prisma/client'

interface DatetimeFieldProps {
  field: Field
}
export const DatetimeField = ({ field }: DatetimeFieldProps) => {
  return (
    <DateTimePicker
      icon={<IconCalendar size={rem(14)} />}
      placeholder="dd/mm/yyyy"
      clearable
      defaultValue={new Date()}
    />
  )
}
