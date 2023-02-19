import type { TextInputProps } from '@mantine/core'
import { TextInput, Tooltip, UnstyledButton } from '@mantine/core'
import { IconSearch, IconX } from '@tabler/icons-react'

interface SearchInputProps extends TextInputProps {
  search: string
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ search, handleSearchChange, ...props }: SearchInputProps) => {
  return (
    <TextInput
      radius="md"
      icon={<IconSearch size={14} stroke={1.5} />}
      rightSectionWidth={30}
      rightSection={
        search ? (
          <Tooltip label="Clear search">
            <UnstyledButton
              onClick={() =>
                handleSearchChange({
                  currentTarget: { value: '' }
                } as React.ChangeEvent<HTMLInputElement>)
              }
              sx={(theme) => ({
                ':hover': {
                  color: theme.colors.red[4]
                }
              })}
            >
              <IconX size={12} stroke={1.5} />
            </UnstyledButton>
          </Tooltip>
        ) : (
          ''
        )
      }
      value={search}
      onChange={handleSearchChange}
      {...props}
    />
  )
}
