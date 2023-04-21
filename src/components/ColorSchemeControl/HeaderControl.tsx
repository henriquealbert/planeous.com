/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { DefaultProps } from '@mantine/core'
import { rem } from '@mantine/core'
import { createStyles } from '@mantine/core'
import { UnstyledButton, Tooltip } from '@mantine/core'
import { createPolymorphicComponent } from '@mantine/utils'

export interface HeaderControlProps extends DefaultProps {
  tooltip: string
  children: React.ReactNode
}

const useStyles = createStyles((theme) => ({
  control: {
    ...theme.fn.focusStyles(),
    width: rem(34),
    height: rem(34),
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${
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
  }
}))

const _HeaderControl = ({ tooltip, className, ...others }: HeaderControlProps) => {
  const { classes, cx } = useStyles()
  return (
    <Tooltip label={tooltip}>
      <UnstyledButton className={cx(classes.control, className)} {...others} />
    </Tooltip>
  )
}

export const HeaderControl = createPolymorphicComponent<'button', HeaderControlProps>(
  _HeaderControl
)
