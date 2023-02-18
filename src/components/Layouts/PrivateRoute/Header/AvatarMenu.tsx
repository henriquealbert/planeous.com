import { Avatar, Group, Menu, Text, UnstyledButton } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import { useAuth } from 'contexts/AuthContext'
import { MenuDropdown } from './MenuDropdown'

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
      <MenuDropdown />
    </Menu>
  )
}
