import type { SpotlightAction, SpotlightProviderProps } from '@mantine/spotlight'
import {
  IconAddressBook,
  IconFileText,
  IconHome,
  IconMoonStars,
  IconSearch
} from '@tabler/icons-react'
import Router from 'next/router'

const actions: SpotlightAction[] = [
  {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => void Router.push('/app/'),
    icon: <IconHome size={18} />
  },
  {
    title: 'Contacts',
    description: 'Get to contacts page',
    onTrigger: () => void Router.push('/app/contacts'),
    icon: <IconAddressBook size={18} />
  },
  {
    title: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onTrigger: () => console.log('Documentation'),
    icon: <IconFileText size={18} />
  },
  {
    title: 'Dark Mode',
    description: 'Enable dark mode',
    onTrigger: () => void Router.push('/app/contacts'),
    icon: <IconMoonStars size={18} />
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
