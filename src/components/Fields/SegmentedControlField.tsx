import { SegmentedControl } from '@mantine/core'
import type { Field } from '@prisma/client'

interface SegmentedControlFieldProps {
  field: Field
}
export const SegmentedControlField = ({ field }: SegmentedControlFieldProps) => {
  return (
    <div>
      <SegmentedControl
        data={[
          { label: 'React', value: 'react' },
          { label: 'Angular', value: 'ng' },
          { label: 'Vue', value: 'vue' },
          { label: 'Svelte', value: 'svelte' }
        ]}
      />
    </div>
  )
}
