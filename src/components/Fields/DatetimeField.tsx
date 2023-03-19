import { rem } from '@mantine/core'
import { DateTimePicker, DatePickerInput } from '@mantine/dates'
import { IconCalendar, IconCalendarTime } from '@tabler/icons-react'
import type { Field } from '@prisma/client'

interface FieldProps extends Field {
  options: {
    europeanFormat?: boolean
    withRange?: boolean
    withTimePicker?: boolean
    withSeconds?: boolean
  }
}
interface DatetimeFieldProps {
  field: FieldProps
}
export const DatetimeField = ({ field }: DatetimeFieldProps) => {
  const getValueFormat = () => {
    const { europeanFormat, withSeconds, withTimePicker } = field.options
    const dateFormat = europeanFormat ? 'DD/MM/YYYY' : 'MM/DD/YYYY'
    const timeFormat = withSeconds ? 'hh:mm:ss' : 'hh:mm'

    if (!withTimePicker) return dateFormat
    return `${dateFormat} ${timeFormat}`
  }
  const valueFormat = getValueFormat()

  if (field.options.withTimePicker) {
    return (
      <DateTimePicker
        withSeconds={field.options.withSeconds}
        icon={<IconCalendarTime size={rem(14)} />}
        placeholder={valueFormat}
        clearable
        defaultValue={new Date()}
        valueFormat={valueFormat}
        locale="en-US"
      />
    )
  }

  return (
    <DatePickerInput
      icon={<IconCalendar size={rem(14)} />}
      placeholder={valueFormat}
      clearable
      defaultValue={new Date()}
      valueFormat={valueFormat}
      type={field.options.withRange ? 'range' : 'default'}
    />
  )
}
