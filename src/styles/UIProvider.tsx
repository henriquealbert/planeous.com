import type { ColorScheme } from '@mantine/core'
import { MantineProvider } from '@mantine/core'
import { ColorSchemeProvider } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { SpotlightProvider } from '@mantine/spotlight'
import { spotlightArgs } from 'utils/spotlightActions'
import { mantineTheme } from './mantineTheme'

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true
  })
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme, ...mantineTheme }}>
        <SpotlightProvider {...spotlightArgs}>{children}</SpotlightProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
