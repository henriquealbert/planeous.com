import { rem, Select } from '@mantine/core'
import { IconList } from '@tabler/icons-react'
import type { Field } from '@prisma/client'

interface SelectFieldProps {
  field: Field
}
export const SelectField = ({ field }: SelectFieldProps) => {
  return (
    <Select
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
        { value: 'riot', label: 'Riot' },
        { value: 'next', label: 'Next.js' },
        { value: 'blitz', label: 'Blitz.js' }
      ]}
      clearable
      searchable
      icon={<IconList size={rem(16)} />}
    />
  )
}
