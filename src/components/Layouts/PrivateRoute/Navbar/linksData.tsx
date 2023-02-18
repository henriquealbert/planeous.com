import { IconHome2, IconSettings, IconAddressBook, IconLogout } from '@tabler/icons-react'
import { signOut } from 'next-auth/react'

export const topLinksData = [
  { icon: <IconHome2 />, label: 'Home', href: '/' },
  { icon: <IconAddressBook />, label: 'Contacts', href: '/contacts' },
  { icon: <IconSettings />, label: 'Account Settings', href: '/account-settings' }
]

export const bottomLinksData = [
  { icon: <IconLogout />, label: 'Logout', onClick: () => void signOut(), href: '' }
]
