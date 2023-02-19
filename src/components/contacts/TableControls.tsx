import { Flex } from '@mantine/core'
import { SearchInput } from 'components/Inputs/SearchInput'
import { CreateContact } from './CreateContact'

interface TableControlsProps {
  search: string
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TableControls = ({ search, handleSearchChange }: TableControlsProps) => {
  return (
    <Flex w="100%" justify="space-between" gap="sm" mt="xl" mb="md">
      <SearchInput
        search={search}
        handleSearchChange={handleSearchChange}
        placeholder="Search by any field"
        size="sm"
        w="100%"
        maw="300px"
      />
      <CreateContact />
    </Flex>
  )
}
