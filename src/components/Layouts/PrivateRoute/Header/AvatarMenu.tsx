import { createStyles, Group, Menu, Text, UnstyledButton } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import { Avatar } from 'components/Avatar/Avatar'
import { useAuth } from 'contexts/AuthContext'
import { MenuDropdown } from './MenuDropdown'

export const AvatarMenu = () => {
  const { sessionData } = useAuth()
  const { classes } = useStyles()
  return (
    <Menu position="bottom-end" transition="pop-top-right">
      <Menu.Target>
        <UnstyledButton className={classes.container}>
          <Group spacing={6}>
            <Avatar
              src={sessionData?.user?.image}
              alt={sessionData?.user?.name || 'User avatar'}
              size={32}
              mt={2.5}
              name={sessionData?.user?.name || 'Unnamed'}
            />
            <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
              {sessionData?.user?.name}
            </Text>
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
  }
}))
