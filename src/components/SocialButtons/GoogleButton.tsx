import type { ButtonProps } from '@mantine/core'
import { Button } from '@mantine/core'
import { GoogleIcon } from './GoogleIcon'

export function GoogleButton(props: ButtonProps & { onClick?: () => void }) {
  return (
    <Button
      leftIcon={<GoogleIcon />}
      variant="default"
      color="gray"
      {...props}
    />
  )
}
