import { useState } from 'react'
import { Flex } from '@mantine/core'
import { NavbarLink } from './NavbarLink'
import { useRouter } from 'next/router'
import { IconAddressBook, IconAdjustments, IconHome2 } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'

export function Navbar() {
  const t = useTranslations('Header.Navbar')
  const { pathname } = useRouter()
  const [active, setActive] = useState(pathname)

  const topLinksData = [
    { icon: <IconHome2 size={24} />, label: t('home'), href: '/' },
    { icon: <IconAddressBook size={24} />, label: t('contacts'), href: '/contacts' },
    { icon: <IconAdjustments size={24} />, label: t('settings'), href: '/settings/profile' }
  ]

  return (
    <Flex gap="sm">
      {topLinksData.map((link) => (
        <NavbarLink
          {...link}
          key={link.label}
          active={link.href === active}
          onClick={() => setActive(link.href)}
        />
      ))}
    </Flex>
  )
}
