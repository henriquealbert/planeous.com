import { Select } from '@mantine/core'
import { FieldsType } from '@prisma/client'
import { useTranslations } from 'next-intl'
import type { Control } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import type { FieldValidation } from './utils'

interface SelectFieldTypeProps {
  control: Control<FieldValidation>
}
export const SelectFieldType = ({ control }: SelectFieldTypeProps) => {
  const t = useTranslations('Settings.CustomFields.FieldsType')

  const FIELD_TYPE_DATA = Object.keys(FieldsType).map((key) => ({
    value: key,
    label: t(key as keyof typeof FieldsType)
  }))
  return (
    <Controller
      name="type"
      control={control}
      render={({ field }) => (
        <Select
          data={FIELD_TYPE_DATA}
          label={t('fieldType')}
          placeholder={t('fieldTypePlaceholder')}
          withinPortal
          withAsterisk
          searchable
          {...field}
        />
      )}
    />
  )
}
