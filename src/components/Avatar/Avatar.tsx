import type { AvatarProps as MantineAvatarProps } from '@mantine/core'
import { Avatar as MantineAvatar } from '@mantine/core'
import { getNamesInitials } from 'utils/getNamesInitials'
import { getRandomColorFromString } from 'utils/getRandomColorFromString'

interface AvatarProps extends MantineAvatarProps {
  name: string
}

export const Avatar = ({ name, ...props }: AvatarProps) => {
  return (
    <MantineAvatar radius="xl" sx={{ background: getRandomColorFromString(name) }} {...props}>
      {getNamesInitials(name)}
    </MantineAvatar>
  )
}
