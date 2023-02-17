import { useState } from 'react'
import {
  Navbar as MantineNavbar,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack
} from '@mantine/core'
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal
} from '@tabler/icons-react'
import { signOut } from 'next-auth/react'

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0]
    }
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color
    }
  }
}))

interface NavbarLinkProps {
  icon: JSX.Element
  label: string
  active?: boolean
  onClick?(): void
}

function NavbarLink({ icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles()
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        {icon}
      </UnstyledButton>
    </Tooltip>
  )
}

const mockdata = [
  { icon: <IconHome2 />, label: 'Home' },
  { icon: <IconGauge />, label: 'Dashboard' },
  { icon: <IconDeviceDesktopAnalytics />, label: 'Analytics' },
  { icon: <IconCalendarStats />, label: 'Releases' },
  { icon: <IconUser />, label: 'Account' },
  { icon: <IconFingerprint />, label: 'Security' },
  { icon: <IconSettings />, label: 'Settings' }
]

export function Navbar() {
  const [active, setActive] = useState(2)

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ))

  return (
    <MantineNavbar width={{ base: 80 }} p="xs">
      <MantineNavbar.Section grow>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={<IconSwitchHorizontal />} label="Change account" />
          <NavbarLink icon={<IconLogout />} label="Logout" onClick={() => void signOut()} />
        </Stack>
      </MantineNavbar.Section>
    </MantineNavbar>
  )
}
