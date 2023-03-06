import { Box, Text, Anchor } from '@mantine/core'
import { useStore } from 'contexts/store'
import { useTranslations } from 'next-intl'

export const Description = () => {
  const t = useTranslations('ImportContacts.AlignFields')
  const { csvData, handleStepBack } = useStore((state) => state.importContact)

  return (
    <Box pb="xl">
      <Text>
        {t('importingFile')}
        <Text fs="italic" component="span">
          {` "${csvData?.filename || 'unknow file.csv'}" `}
        </Text>
        - <Anchor onClick={handleStepBack}>{t('cancelButton')}</Anchor>
      </Text>
    </Box>
  )
}
