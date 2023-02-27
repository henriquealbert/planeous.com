import { Button, Flex } from '@mantine/core'
import { IconDownload } from '@tabler/icons-react'
import type { MRT_ColumnDef, MRT_Row, MRT_TableInstance } from 'mantine-react-table'
import type { Contact } from './ContactList'
import { ExportToCsv } from 'export-to-csv'
import { omit } from 'utils/omit'
import { useTranslations } from 'next-intl'

interface ExportDataProps {
  table: MRT_TableInstance<Contact>
  columns: MRT_ColumnDef<Contact>[]
  data: Contact[]
}

const csvExporter = (columns: MRT_ColumnDef<Contact>[]) => {
  const csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: columns.map((c) => c.header),
    filename: `contacts-${new Date().toISOString()}`
  }

  return new ExportToCsv(csvOptions)
}

export const ExportData = ({ table, columns, data }: ExportDataProps) => {
  const t = useTranslations('Contacts')

  const handleExportSelectedRows = (rows: MRT_Row<Contact>[]) => {
    csvExporter(columns).generateCsv(rows.map((row) => omit(row.original, 'avatar')))
  }

  const handleExportData = () => {
    csvExporter(columns).generateCsv(data.map((d) => omit(d, 'avatar')))
  }

  return (
    <Flex gap="md">
      <Button
        leftIcon={<IconDownload size={16} />}
        size="sm"
        variant="light"
        color="gray"
        onClick={handleExportData}
      >
        {t('exportAllData')}
      </Button>
      <Button
        leftIcon={<IconDownload size={16} />}
        size="sm"
        variant="light"
        color="gray"
        disabled={!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
        onClick={() => handleExportSelectedRows(table.getSelectedRowModel().rows)}
      >
        {t('exportSelectedData')}
      </Button>
    </Flex>
  )
}
