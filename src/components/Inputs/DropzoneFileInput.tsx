import { useRef } from 'react'
import { Text, Group, Button, createStyles, rem } from '@mantine/core'
import type { DropzoneProps } from '@mantine/dropzone'
import { Dropzone } from '@mantine/dropzone'
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    marginBottom: rem(30)
  },

  dropzone: {
    borderWidth: rem(1),
    paddingBottom: rem(50)
  },

  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]
  },

  control: {
    position: 'absolute',
    width: rem(250),
    left: `calc(50% - ${rem(125)})`,
    bottom: rem(-20)
  }
}))

type DropzoneFileInputProps = Omit<DropzoneProps, 'children'> & {
  loading?: boolean
}

export const DropzoneFileInput = (props: DropzoneFileInputProps) => {
  const t = useTranslations('DropzoneFileInput')
  const { classes, theme } = useStyles()
  const openRef = useRef<() => void>(null)

  return (
    <div className={classes.wrapper}>
      <Dropzone
        openRef={openRef}
        className={classes.dropzone}
        radius="md"
        maxSize={30 * 1024 ** 2}
        {...props}
      >
        <div style={{ pointerEvents: 'none' }}>
          <Group position="center">
            <Dropzone.Accept>
              <IconDownload size={rem(50)} color={theme.colors.blue[6]} stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={rem(50)} color={theme.colors.red[6]} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload
                size={rem(50)}
                color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black}
                stroke={1.5}
              />
            </Dropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="lg" mt="xl">
            <Dropzone.Accept>{t('accept')}</Dropzone.Accept>
            <Dropzone.Reject>{t('reject')}</Dropzone.Reject>
            <Dropzone.Idle>{t('idle')}</Dropzone.Idle>
          </Text>
          <Text ta="center" fz="sm" mt="xs" c="dimmed">
            {t('placeholder')}
          </Text>
        </div>
      </Dropzone>

      {!props.loading && (
        <Button
          className={classes.control}
          size="md"
          radius="md"
          onClick={() => openRef.current?.()}
        >
          {t('button')}
        </Button>
      )}
    </div>
  )
}
