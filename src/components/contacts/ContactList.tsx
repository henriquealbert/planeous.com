import { Group, Text } from '@mantine/core'
import { Avatar } from 'components/Avatar/Avatar'
import type { MRT_ColumnDef } from 'mantine-react-table'
import { MantineReactTable } from 'mantine-react-table'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
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
  const t = useTranslations('Contacts.Table')

  const columns = useMemo<MRT_ColumnDef<Contact>[]>(
    () => [
      {
        accessorKey: 'name',
        header: t('name'),
        Cell: ({
          cell: {
            getValue,
            row: { original }
          }
        }) => (
          <Group spacing="sm">
            <Avatar size={26} src={original.avatar} name={getValue<string>()} />
            <Text size="sm" weight={500}>
              {getValue<string>()}
            </Text>
          </Group>
        )
      },
      {
        accessorKey: 'email',
        header: t('email')
      },
      {
        accessorKey: 'company',
        header: t('company')
      }
    ],
    [t]
  )

  return (
    <MantineReactTable
      data={data}
      columns={columns}
      enableColumnOrdering
      enableStickyHeader
      enableRowSelection
      initialState={{
        pagination: {
          pageSize: 20,
          pageIndex: 0
        },
        density: 'sm',
        sorting: [{ desc: false, id: 'name' }]
      }}
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
