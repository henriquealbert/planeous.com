import { createStyles, Group, Menu, Stack, Text, UnstyledButton } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import { Avatar } from 'components/Avatar/Avatar'
import { useAuth } from 'contexts/AuthContext'
import { MenuDropdown } from './MenuDropdown'

export const AvatarMenu = () => {
  const { user } = useAuth()
  const { classes } = useStyles()
  return (
    <Menu
      position="bottom-end"
      transitionProps={{
        transition: 'pop-top-right'
      }}
    >
      <Menu.Target>
        <UnstyledButton className={classes.container}>
          <Group spacing={6} h={34}>
            <Avatar
              src={user?.image}
              alt={user?.name || 'User avatar'}
              size={32}
              mt={2.5}
              name={user?.name || 'Unnamed'}
            />
            <Stack spacing={0} mr="md">
              <Text className={classes.name} size="sm">
                {user?.name}
              </Text>
              <Text size="xs" className={classes.organization}>
                {user?.organization?.name}
              </Text>
            </Stack>
            <IconChevronDown size={14} stroke={3} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <MenuDropdown />
    </Menu>
  )
}

const useStyles = createStyles((theme) => ({
  container: {
    height: 34,
    padding: '2px 6px',
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      color: theme.colorScheme === 'light' ? theme.colors.dark[4] : theme.colors.gray[0]
    }
  },
  name: {
    fontWeight: 500
  },
  organization: {
    lineHeight: 1.2,
    fontWeight: 300,
    color: theme.colorScheme === 'light' ? theme.colors.dark[6] : theme.colors.gray[6]
  }
}))
