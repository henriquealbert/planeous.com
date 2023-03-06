import { Box, Button, Card, Grid, Text, Title } from '@mantine/core'
import { MIME_TYPES } from '@mantine/dropzone'
import { DropzoneFileInput } from 'components/Inputs/DropzoneFileInput'
import { useStore } from 'contexts/store'
import { useTranslations } from 'next-intl'
import { Instructions } from './Instructions'

export const ImportFile = () => {
  const t = useTranslations('ImportContacts')
  const { isLoading, onDrop } = useStore((state) => state.importContact)

  return (
    <Grid grow>
      <Grid.Col span={6}>
        <Box mb="xl" pb="xl">
          <Text mb="xl">{t('description')}</Text>
          <Title order={3} fw="normal" mb="md" pt="xl">
            {t('titleRunImport')}
          </Title>
          <DropzoneFileInput
            loading={isLoading}
            onDrop={(files) => onDrop(files, t('AlignFields.description'))}
            accept={[MIME_TYPES.csv]}
            multiple={false}
          />
        </Box>

        <Box pt="xl">
          <Title order={3} fw="normal" mb="md" pt="xl">
            {t('ImportingHelp.title')}
          </Title>
          <Card p="xl">
            <Text mb="xl">{t('ImportingHelp.description')}</Text>
            <Button variant="light" onClick={() => alert('Call support')}>
              {t('ImportingHelp.button')}
            </Button>
          </Card>
        </Box>
      </Grid.Col>

      <Grid.Col span={5} offset={1}>
        <Instructions />
      </Grid.Col>
    </Grid>
  )
}
