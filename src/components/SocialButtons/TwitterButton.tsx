import type { ButtonProps } from '@mantine/core'
import { Button } from '@mantine/core'
import { TwitterIcon } from '@mantine/ds'

export function TwitterButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<'a'>
) {
  return (
    <Button
      component="a"
      leftIcon={<TwitterIcon size={16} color="#00ACEE" />}
      variant="default"
      {...props}
    />
  )
}
