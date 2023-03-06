import { Grid, LoadingOverlay } from '@mantine/core'
import { api } from 'utils/api'
import { Description } from './Description'
import { Instructions } from './Instructions'
import { MapsFields } from './MapFields'

export const AlignFields = () => {
  const { isLoading } = api.contact.createBatch.useMutation()

  return (
    <>
      <LoadingOverlay visible={isLoading} overlayBlur={2} />
      <Grid>
        <Grid.Col span={5}>
          <Description />
          <MapsFields />
        </Grid.Col>

        <Grid.Col span={5} offset={2}>
          <Instructions />
        </Grid.Col>
      </Grid>
    </>
  )
}
