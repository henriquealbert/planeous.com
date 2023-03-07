import { createStyles, Navbar, rem } from '@mantine/core'
import { ProtectedRoute } from 'components/Layouts/PrivateRoute/PrivateRoute'
import NextLink from 'next/link'
import type { ReactNode } from 'react'

const NAV_ITEMS = [
  {
    title: 'Profile',
    href: '/app/account-settings/profile'
  },
  {
    title: 'Members',
    href: '/app/account-settings/members'
  },
  {
    title: 'Billing',
    href: '/app/account-settings/billing'
  },
  {
    title: 'Custom Fields',
    href: '/app/account-settings/fields'
  }
]

const useStyles = createStyles((theme) => ({
  navLink: {
    boxSizing: 'border-box',
    display: 'block',
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}`,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    height: rem(42),
    lineHeight: rem(42),

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black
    }
  },
  navbar: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing.xl
  }
}))

interface PrivateRouteAccountSettingsProps {
  children: ReactNode
  pageTitle?: string
}

export const PrivateRouteAccountSettings = ({
  children,
  pageTitle
}: PrivateRouteAccountSettingsProps) => {
  const { classes } = useStyles()
  return (
    <ProtectedRoute
      pageTitle={pageTitle}
      navbar={
        <Navbar zIndex={20} width={{ sm: 180 }} className={classes.navbar}>
          {NAV_ITEMS.map((item) => (
            <NextLink href={item.href} key={item.href} className={classes.navLink}>
              {item.title}
            </NextLink>
          ))}
        </Navbar>
      }
    >
      {children}
    </ProtectedRoute>
  )
}
