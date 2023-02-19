import { IconHome2, IconSettings, IconAddressBook, IconLogout } from '@tabler/icons-react'
import { signOut } from 'next-auth/react'

export const topLinksData = [
  { icon: <IconHome2 />, label: 'Home', href: '/app' },
  { icon: <IconAddressBook />, label: 'Contacts', href: '/app/contacts' },
  { icon: <IconSettings />, label: 'Account Settings', href: '/app/account-settings' }
]

export const bottomLinksData = [
  { icon: <IconLogout />, label: 'Logout', onClick: () => void signOut(), href: '' }
]
