import { useState } from 'react'
import { Navbar as MantineNavbar, Stack } from '@mantine/core'
import { NavbarLink } from './NavbarLink'
import { bottomLinksData, topLinksData } from './linksData'
import { useRouter } from 'next/router'

export function Navbar() {
  const { pathname } = useRouter()
  const [active, setActive] = useState(pathname)

  return (
    <MantineNavbar width={{ base: 61 }} p="xs">
      <MantineNavbar.Section grow>
        <Stack justify="center" spacing={0}>
          {topLinksData.map((link) => (
            <NavbarLink
              {...link}
              key={link.label}
              active={link.href === active}
              onClick={() => setActive(link.href)}
            />
          ))}
        </Stack>
      </MantineNavbar.Section>

      <MantineNavbar.Section>
        <Stack justify="center" spacing={0}>
          {bottomLinksData.map((link) => (
            <NavbarLink {...link} key={link.label} />
          ))}
        </Stack>
      </MantineNavbar.Section>
    </MantineNavbar>
  )
}
