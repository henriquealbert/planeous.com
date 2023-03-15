import { Flex, rem, TextInput, UnstyledButton } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons-react'
import type { Field } from '@prisma/client'

interface UrlFieldProps {
  field: Field
}
export const UrlField = ({ field }: UrlFieldProps) => {
  return (
    <Flex w="100%" pos="relative">
      <UnstyledButton
        sx={{
          cursor: 'pointer',
          zIndex: 99,
          width: 36,
          height: 36,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': {
            color: 'rgba(255, 255, 255,0.5)'
          }
        }}
        pos="absolute"
      >
        <IconExternalLink size={rem(14)} />
      </UnstyledButton>
      <TextInput placeholder="https://www.planeous.com" w="100%" icon={<></>} />
    </Flex>
  )
}
