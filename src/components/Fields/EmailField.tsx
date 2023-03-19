import { rem, Autocomplete } from '@mantine/core'
import { IconAt } from '@tabler/icons-react'
import type { Field } from '@prisma/client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

interface EmailFieldProps {
  field: Field
}
const providers = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com', 'icloud.com', 'mail.com']

export const EmailField = ({ field }: EmailFieldProps) => {
  const t = useTranslations('Settings.CustomFields.FieldsType')
  const [data, setData] = useState<string[]>([])
  const [value, setValue] = useState('')

  const handleChange = (value: string) => {
    setValue(value)
    setData([])
    if (value.trim().length === 0 || value.includes('@')) return
    setData(providers.map((provider) => `${value}@${provider}`))
  }

  return (
    <Autocomplete
      data={data}
      value={value}
      onChange={handleChange}
      type="email"
      placeholder={t('emailPlaceholder')}
      icon={<IconAt size={rem(14)} />}
      withinPortal
    />
  )
}
