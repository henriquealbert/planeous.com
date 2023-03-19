import type { MantineTheme } from '@mantine/core'
import { Rating, rem, useMantineTheme } from '@mantine/core'
import type { Field } from '@prisma/client'
import {
  IconMoodCrazyHappy,
  IconMoodCry,
  IconMoodEmpty,
  IconMoodHappy,
  IconMoodSad,
  IconMoodSmile
} from '@tabler/icons-react'

interface FieldProps extends Field {
  options: { ratingCount?: number; isNPS?: boolean }
}
interface RatingFieldProps {
  field: FieldProps
}

export const RatingField = ({ field }: RatingFieldProps) => {
  const isNPS = field.options?.isNPS
  const count = field.options?.ratingCount || 5
  const theme = useMantineTheme()

  return (
    <>
      {isNPS ? (
        <Rating
          emptySymbol={EmptyIcon}
          fullSymbol={(val) => FullIcon(val, theme)}
          highlightSelectedOnly
          size="md"
        />
      ) : (
        <Rating value={3.5} fractions={2} count={count} size="lg" />
      )}
    </>
  )
}

const EmptyIcon = (value: number) => {
  const defaultProps = { size: rem(28), color: 'gray', stroke: 1.5 }
  switch (value) {
    case 1:
      return <IconMoodCry {...defaultProps} />
    case 2:
      return <IconMoodSad {...defaultProps} />
    case 3:
      return <IconMoodSmile {...defaultProps} />
    case 4:
      return <IconMoodHappy {...defaultProps} />
    case 5:
      return <IconMoodCrazyHappy {...defaultProps} />
    default:
      return <IconMoodEmpty {...defaultProps} />
  }
}

const FullIcon = (value: number, theme: MantineTheme) => {
  const defaultProps = { size: rem(28), stroke: 1.5 }

  switch (value) {
    case 1:
      return <IconMoodCry {...defaultProps} color={theme.colors.red[7]} />
    case 2:
      return <IconMoodSad {...defaultProps} color={theme.colors.orange[7]} />
    case 3:
      return <IconMoodSmile {...defaultProps} color={theme.colors.yellow[7]} />
    case 4:
      return <IconMoodHappy {...defaultProps} color={theme.colors.lime[7]} />
    case 5:
      return <IconMoodCrazyHappy {...defaultProps} color={theme.colors.green[7]} />
    default:
      return <IconMoodEmpty {...defaultProps} />
  }
}
