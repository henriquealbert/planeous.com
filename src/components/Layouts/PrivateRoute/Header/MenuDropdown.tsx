import { Fragment } from 'react'
import NextLink from 'next/link'
import { Menu } from '@mantine/core'
import { useTranslations } from 'next-intl'
import { IconLogout, IconReceipt, IconAdjustments } from '@tabler/icons-react'
import { signOut } from 'next-auth/react'

export const MenuDropdown = () => {
  const t = useTranslations('Header.AvatarMenu')
  const menuLinksData = [
    {
      label: t('settings'),
      linksData: [
        {
          icon: <IconReceipt size={14} stroke={1.5} />,
          label: t('billing'),
          href: '/app/settings/billing',
          onClick: () => undefined,
          color: ''
        },
        {
          icon: <IconAdjustments size={14} stroke={1.5} />,
          label: t('accountSettings'),
          href: '/app/settings/profile',
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
          label: t('logout'),
          href: '',
          onClick: () => void signOut(),
          color: 'brand.4'
        }
      ]
    }
  ]

  return (
    <Menu.Dropdown>
      {menuLinksData.map((menuItem, index) => (
        <Fragment key={menuItem.label}>
          {menuItem.label && <Menu.Label>{menuItem.label}</Menu.Label>}

          {menuItem.linksData.map((link) => (
            <NextLink href={link.href} key={link.label} style={{ textDecoration: 'none' }}>
              <Menu.Item onClick={link.onClick} color={link.color} icon={link.icon}>
                {link.label}
              </Menu.Item>
            </NextLink>
          ))}
          {menuLinksData.length - index >= menuLinksData.length && <Menu.Divider />}
        </Fragment>
      ))}
    </Menu.Dropdown>
  )
}
