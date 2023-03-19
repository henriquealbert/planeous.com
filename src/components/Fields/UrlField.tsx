import { Anchor, Flex, rem, TextInput } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons-react'
import type { Field } from '@prisma/client'
import { useState } from 'react'

interface FiedProps extends Field {
  disabled: boolean
}
interface UrlFieldProps {
  field: FiedProps
}
export const UrlField = ({ field }: UrlFieldProps) => {
  const [value, setValue] = useState<string>('')

  const formatUrl = (url: string) => {
    if (!url) return ''
    if (!url.startsWith('http')) return `https://${url}`
    return url
  }
  return (
    <Flex w="100%" pos="relative">
      <Anchor
        href={formatUrl(value)}
        target="_blank"
        rel="noopener noreferrer"
        sx={(theme) => ({
          color: theme.colors.dark[0],
          cursor: 'pointer',
          zIndex: 1,
          width: 36,
          height: 36,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': {
            color: 'rgba(255, 255, 255,0.5)'
          }
        })}
        pos="absolute"
      >
        <IconExternalLink size={rem(14)} />
      </Anchor>
      <TextInput
        placeholder="https://planeous.com"
        w="100%"
        icon={<></>}
        value={value}
        onBlur={() => setValue(formatUrl(value))}
        onChange={(e) => setValue(e.currentTarget.value)}
        disabled={field.disabled}
      />
    </Flex>
  )
}
