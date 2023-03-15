import { MultiSelect, rem } from '@mantine/core'
import { IconPlaylistAdd } from '@tabler/icons-react'
import type { Field } from '@prisma/client'

interface MultiSelectFieldProps {
  field: Field
}
export const MultiSelectField = ({ field }: MultiSelectFieldProps) => {
  return (
    <MultiSelect
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
      icon={<IconPlaylistAdd size={rem(16)} />}
    />
  )
}
