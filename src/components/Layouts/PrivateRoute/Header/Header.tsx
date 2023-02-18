import { Flex, Header as MantineHeader } from '@mantine/core'
import { MantineLogo } from '@mantine/ds'
import { AvatarMenu } from './AvatarMenu'

export const Header = () => {
  return (
    <MantineHeader height={52} p="xs" display="flex" w="100%">
      <Flex ml="6px">
        <MantineLogo type="mark" size={30} />
      </Flex>
      <Flex justify="flex-end" w="100%" mr="sm">
        <AvatarMenu />
      </Flex>
    </MantineHeader>
  )
}
