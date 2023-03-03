import { Box, Grid, Text, Title } from '@mantine/core'
import { MIME_TYPES } from '@mantine/dropzone'
import { DropzoneFileInput } from 'components/Inputs/DropzoneFileInput'
import { useStore } from 'contexts/store'
import { useTranslations } from 'next-intl'

export const ImportContact = () => {
  const t = useTranslations('ImportContacts')
  const { isLoading, onDrop, onReject } = useStore((state) => state.importContact)

  return (
    <Box>
      <Grid grow>
        <Grid.Col span={4}>
          <Text mb="xl">{t('description')}</Text>
          <DropzoneFileInput
            loading={isLoading}
            onDrop={onDrop}
            accept={[MIME_TYPES.csv]}
            onReject={onReject}
          />
        </Grid.Col>
        <Grid.Col span={4} offset={4}>
          <Title order={3}>Intructions:</Title>
          <Text>1. Drop your .CSV file to the dragndrop</Text>
          <Text>1. Drop your .CSV file to the dragndrop</Text>
          <Text>1. Drop your .CSV file to the dragndrop</Text>
          <Text>1. Drop your .CSV file to the dragndrop</Text>
          <Text>1. Drop your .CSV file to the dragndrop</Text>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
