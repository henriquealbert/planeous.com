import { Avatar, Group, Menu, Text, UnstyledButton } from '@mantine/core'
import { IconChevronDown, IconLogout, IconSettings } from '@tabler/icons-react'
import { useAuth } from 'contexts/AuthContext'
import { signOut } from 'next-auth/react'

export const AvatarMenu = () => {
  const { sessionData } = useAuth()
  return (
    <Menu position="bottom-end" transition="pop-top-right">
      <Menu.Target>
        <UnstyledButton>
          <Group spacing={7}>
            <Avatar
              src={sessionData?.user?.image}
              alt={sessionData?.user?.name || 'User avatar'}
              radius="xl"
              size={32}
            />
            <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
              {sessionData?.user?.name}
            </Text>
            <IconChevronDown size={12} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Settings</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>Account settings</Menu.Item>
        <Menu.Item onClick={() => void signOut()} icon={<IconLogout size={14} stroke={1.5} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
