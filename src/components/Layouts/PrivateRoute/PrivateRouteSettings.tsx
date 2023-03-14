import { createStyles, Divider, Flex, Navbar, rem, Title } from '@mantine/core'
import { ProtectedRoute } from 'components/Layouts/PrivateRoute/PrivateRoute'
import { useTranslations } from 'next-intl'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'

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
  activeLink: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color
    }
  },
  navbar: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing.xl
  }
}))

interface PrivateRouteSettingsProps {
  children: ReactNode
  pageTitle: string
  rightAction?: ReactNode
}

export const PrivateRouteSettings = ({
  children,
  pageTitle,
  rightAction
}: PrivateRouteSettingsProps) => {
  const { pathname } = useRouter()
  const { classes, theme, cx } = useStyles()
  const t = useTranslations('Settings')

  const NAV_ITEMS = [
    {
      title: t('SidebarNav.profile'),
      href: '/app/settings/profile'
    },
    {
      title: t('SidebarNav.members'),
      href: '/app/settings/members'
    },
    {
      title: t('SidebarNav.billing'),
      href: '/app/settings/billing'
    },
    {
      title: t('SidebarNav.customFields'),
      href: '/app/settings/fields'
    }
  ]
  return (
    <ProtectedRoute
      navbar={
        <Navbar zIndex={20} width={{ sm: 180 }} className={classes.navbar}>
          {NAV_ITEMS.map((item) => (
            <NextLink
              href={item.href}
              key={item.href}
              className={cx(classes.navLink, {
                [classes.activeLink]: pathname.includes(item.href)
              })}
            >
              {item.title}
            </NextLink>
          ))}
        </Navbar>
      }
    >
      <Title
        order={5}
        fw="normal"
        mb="md"
        italic
        color={theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7]}
      >
        {t('title')}
      </Title>

      <Flex justify="space-between" align="center">
        <Title order={1} mb="xl" ff="'IBM Plex Serif', serif" fw="300">
          {pageTitle}
        </Title>
        {rightAction && rightAction}
      </Flex>

      <Divider mb="xl" />
      {children}
    </ProtectedRoute>
  )
}
