import { Anchor, Box, Button, Card, createStyles, rem, Stack, Text, Title } from '@mantine/core'
import { IconFileCheck } from '@tabler/icons-react'
import { useStore } from 'contexts/store'
import { useRouter } from 'next/router'

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60vh',
    width: '700px',
    margin: '0 auto',
    gap: rem(16)
  }
}))

export const SuccessScreen = () => {
  const { csvData, resetImport } = useStore((state) => state.importContact)
  const { classes, theme } = useStyles()
  const { push } = useRouter()
  return (
    <Box className={classes.container}>
      <Title order={1} ff="'IBM Plex Serif', serif" fw="300" align="center">
        Your import is complete!
      </Title>
      <Box>
        <IconFileCheck size={60} color={theme.colors.green[8]} />
      </Box>
      <Text align="center">
        You imported <strong>{csvData?.data.length}</strong> contacts from the file{' '}
        <i>{csvData?.filename}</i>
      </Text>
      <Text align="center">
        From here, you can review the contacts that were imported to make sure they look correct and
        perform bulk actions on them, such as adding them to a group or even undoing the import if
        something is wrong.
      </Text>
      <Card mt="xl">
        <Stack spacing="xs" mb="xl">
          <Anchor>TODO: Attach a note to each of these contacts</Anchor>
          <Anchor>TODO: Attach a group to each of these contacts</Anchor>
          <Anchor>TODO: Undo this import (delete all imported contacts)</Anchor>
        </Stack>

        <Stack spacing="xs">
          <Button
            w="100%"
            onClick={async () => {
              await push('/app/contacts')
              resetImport()
            }}
          >
            Got to your Workspace
          </Button>

          <Button variant="light" onClick={resetImport}>
            Import more records
          </Button>
        </Stack>
      </Card>
    </Box>
  )
}
