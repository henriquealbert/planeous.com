import { Stack, Text, Title } from '@mantine/core'
import { useTranslations } from 'next-intl'

export const Instructions = () => {
  const t = useTranslations('ImportContacts.AlignFields.Instructions')

  return (
    <Stack>
      <Title order={2} fw="normal">
        {t('title')}
      </Title>
      <Text dangerouslySetInnerHTML={{ __html: t.raw('note1') as string }} />
      <div>
        <Text dangerouslySetInnerHTML={{ __html: t.raw('note2') as string }} />
        <Text dangerouslySetInnerHTML={{ __html: t.raw('note3') as string }} />
      </div>
    </Stack>
  )
}
