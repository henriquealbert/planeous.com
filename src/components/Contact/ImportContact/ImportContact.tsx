import { Box } from '@mantine/core'
import { useStore } from 'contexts/store'
import { AlignFields } from './AlignFields'
import { ImportFile } from './ImportFile'
import { SuccessScreen } from './SuccessScreen'

export const ImportContact = () => {
  const { step } = useStore((state) => state.importContact)

  return (
    <Box>
      {step === 1 && <ImportFile />}
      {step === 2 && <AlignFields />}
      {step === 3 && <SuccessScreen />}
    </Box>
  )
}
