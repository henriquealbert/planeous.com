import { IconLogout, IconReceipt, IconSettings } from '@tabler/icons-react'
import { signOut } from 'next-auth/react'

export const menuLinksData = [
  {
    label: 'Settings',
    linksData: [
      {
        icon: <IconReceipt size={14} stroke={1.5} />,
        label: 'Billing',
        href: '/app/account-settings/billing',
        onClick: () => undefined
      },
      {
        icon: <IconSettings size={14} stroke={1.5} />,
        label: 'Account settings',
        href: '/app/account-settings',
        onClick: () => undefined,
        color: ''
      }
    ]
  },
  {
    label: '',
    linksData: [
      {
        icon: <IconLogout size={14} stroke={1.5} />,
        label: 'Logout',
        href: '',
        onClick: () => void signOut(),
        color: 'blue.2'
      }
    ]
  }
]
