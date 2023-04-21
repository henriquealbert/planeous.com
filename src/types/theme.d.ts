import type { DefaultMantineColor } from '@mantine/core'
import type { Tuple } from '@mantine/core'

type ExtendedCustomColors = 'brand' | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }
}
