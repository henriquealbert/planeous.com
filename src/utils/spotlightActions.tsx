import type { SpotlightAction, SpotlightProviderProps } from '@mantine/spotlight'
import { IconFileText, IconHome, IconSearch } from '@tabler/icons-react'
import Router from 'next/router'

const actions: SpotlightAction[] = [
  {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => void Router.push('/app/'),
    icon: <IconHome size={18} />
  },
  {
    title: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onTrigger: () => console.log('Documentation'),
    icon: <IconFileText size={18} />
  }
]

export const spotlightArgs: SpotlightProviderProps = {
  actions,
  nothingFoundMessage: 'Nothing found...',
  highlightQuery: true,
  searchPlaceholder: 'Search...',
  searchIcon: <IconSearch size={18} />,
  cleanQueryOnClose: true
}
