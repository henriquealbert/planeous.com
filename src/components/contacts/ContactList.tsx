import { Avatar, Group, Text } from '@mantine/core'
import type { MRT_ColumnDef } from 'mantine-react-table'
import { MantineReactTable } from 'mantine-react-table'
import { useMemo } from 'react'
import { getNamesInitials } from 'utils/getNamesInitials'
import { getRandomColorFromString } from 'utils/getRandomColorFromString'
import { CreateContact } from './CreateContact'
import { ExportData } from './ExportData'

export interface Contact {
  name: string
  email: string
  company: string
  avatar: string
}

interface ContactListProps {
  data: Contact[]
}

export const ContactList = ({ data }: ContactListProps) => {
  const columns = useMemo<MRT_ColumnDef<Contact>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        Cell: ({
          cell: {
            getValue,
            row: { original }
          }
        }) => (
          <Group spacing="sm">
            <Avatar
              size={26}
              src={original.avatar}
              radius="xl"
              sx={{ background: getRandomColorFromString(getValue<string>()) }}
            >
              {getNamesInitials(getValue<string>())}
            </Avatar>
            <Text size="sm" weight={500}>
              {getValue<string>()}
            </Text>
          </Group>
        )
      },
      {
        accessorKey: 'email',
        header: 'Email'
      },
      {
        accessorKey: 'company',
        header: 'Company'
      }
    ],
    []
  )

  return (
    <MantineReactTable
      data={data}
      columns={columns}
      enableColumnOrdering
      enableStickyHeader
      enableRowSelection
      renderTopToolbarCustomActions={() => <CreateContact />}
      renderBottomToolbarCustomActions={({ table }) => (
        <ExportData table={table} columns={columns} data={data} />
      )}
      mantineSelectCheckboxProps={{ size: 'xs' }}
      mantineSelectAllCheckboxProps={{ size: 'xs' }}
      layoutMode="semantic"
      mantinePaperProps={{
        shadow: 'none',
        withBorder: false,
        width: '100%'
      }}
      mantineTableProps={{
        striped: true,
        withBorder: true
      }}
    />
  )
}
