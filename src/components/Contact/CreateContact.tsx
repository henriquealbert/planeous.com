import { useTranslations } from 'next-intl'
import { Button, Menu } from '@mantine/core'
import { IconChevronDown, IconPlus, IconUpload } from '@tabler/icons-react'
import { useStore } from 'contexts/store'

export const CreateContact = () => {
  const t = useTranslations('Contacts')
  const { handleCreateSingleContact, handleImportCSV } = useStore((state) => state.createContact)

  return (
    <Menu withinPortal position="bottom-start">
      <Menu.Target>
        <Button size="sm" mb="xl" rightIcon={<IconChevronDown size="1rem" stroke={1.5} />}>
          {t('createContact')}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item icon={<IconPlus size="1rem" stroke={1.5} />} onClick={handleCreateSingleContact}>
          {t('createASingleContact')}
        </Menu.Item>
        <Menu.Item icon={<IconUpload size="1rem" stroke={1.5} />} onClick={handleImportCSV}>
          {t('importCsv')}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
