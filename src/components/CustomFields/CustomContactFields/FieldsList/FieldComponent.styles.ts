import { createStyles } from '@mantine/core'

interface FieldComponentStyles {
  hover: boolean
}
export const useStyles = createStyles((theme, { hover }: FieldComponentStyles) => ({
  input: {
    pointerEvents: hover ? 'none' : 'initial'
  },
  wrapper: {
    position: 'relative'
  },
  hoverComponent: {
    display: hover ? 'flex' : 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.dark[5],
    borderRadius: theme.radius.sm,
    inset: '0px',
    border: `2px dashed ${theme.colors.gray[1]}`,
    width: '100%',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.md
  },
  dragIcon: {
    cursor: 'grab',
    '&:active': {
      cursor: 'grabbing'
    },
    color: theme.colors.brand[5],
    '&:hover': {
      backgroundColor: theme.colors.dark[4]
    }
  }
}))
