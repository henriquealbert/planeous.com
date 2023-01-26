import type { ButtonProps } from '@mantine/core'
import { Button } from '@mantine/core'
import { GithubIcon } from '@mantine/ds'

export function GithubButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      variant="default"
      color="gray"
      leftIcon={<GithubIcon size={16} />}
    />
  )
}
