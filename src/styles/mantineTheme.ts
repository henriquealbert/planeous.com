import type { MantineThemeOverride } from '@mantine/core'

export const mantineTheme: MantineThemeOverride = {
  colors: {
    brand: [
      '#d1fae5',
      '#a7f3d0',
      '#6ee7b7',
      '#34d399',
      '#10b981',
      '#059669',
      '#047857',
      '#065f46',
      '#064e3b',
      '#022c22'
    ]
  },
  primaryColor: 'brand',
  primaryShade: { light: 5, dark: 7 }
}
