import { Stack, Text, Title, Image, Anchor } from '@mantine/core'
import { useTranslations } from 'next-intl'

export const Instructions = () => {
  const t = useTranslations('ImportContacts.Instructions')
  return (
    <div>
      <Title order={2} fw="normal" mb="xl">
        {t('title')}
      </Title>
      <Stack>
        <Title order={4}>{t('step1')}</Title>
        <Text>{t('step1_1')}</Text>
        <Anchor href={t('step1_2_link')} target="_blank" rel="noopener noreferrer">
          {t('step1_2')}
        </Anchor>
        <Text>{t('step1_3')}</Text>
        <Text dangerouslySetInnerHTML={{ __html: t.raw('step1_4') as string }} />
        <Image
          src="/images/spreadsheet_example.png"
          alt="Spreadsheet Example"
          withPlaceholder
          radius="md"
          height={166}
          width={400}
        />
        <Title order={4} mt="xl">
          {t('step2')}
        </Title>
        <Text>{t('step2_1')}</Text>
      </Stack>
    </div>
  )
}
