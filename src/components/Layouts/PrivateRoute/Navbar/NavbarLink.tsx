import { createStyles, Tooltip, UnstyledButton } from '@mantine/core'
import NextLink from 'next/link'

interface NavbarLinkProps {
  icon: JSX.Element
  label: string
  active?: boolean
  onClick?(): void
  href: string
}

export const NavbarLink = ({ icon, label, active, onClick, href }: NavbarLinkProps) => {
  const { classes, cx } = useStyles()
  return (
    <NextLink href={href}>
      <Tooltip label={label} position="bottom">
        <UnstyledButton
          onClick={onClick}
          className={cx(classes.link, { [classes.active]: active })}
        >
          {icon}
        </UnstyledButton>
      </Tooltip>
    </NextLink>
  )
}

const useStyles = createStyles((theme) => ({
  link: {
    width: 34,
    height: 34,
    borderRadius: theme.radius.md,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[7],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,

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
