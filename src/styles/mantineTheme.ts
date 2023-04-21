import type { MantineThemeOverride } from '@mantine/core'

export const mantineTheme: MantineThemeOverride = {
  colors: {
    brand: [
      '#d1fae5', // 0
      '#a7f3d0', // 1
      '#6ee7b7', // 2
      '#34d399', // 3
      '#10b981', // 4
      '#059669', // 5
      '#047857', // 6
      '#065f46', // 7
      '#064e3b', // 8
      '#022c22' // 9
    ]
  },
  primaryColor: 'brand',
  primaryShade: { light: 5, dark: 7 }
}
