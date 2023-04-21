import { ActionIcon, Anchor, Box, Input, Text, Tooltip } from '@mantine/core'
import type { Field } from '@prisma/client'
import { modals } from '@mantine/modals'

import { useState } from 'react'
import { useStyles } from './FieldComponent.styles'
import { api } from 'utils/api'
import { getField } from './utils'
import { useTranslations } from 'next-intl'
import { useSortable } from '@dnd-kit/sortable'
import { IconMenuOrder } from '@tabler/icons-react'
import { rem } from '@mantine/core'

interface FieldComponentProps {
  field: Field
}

export const FieldComponent = ({ field }: FieldComponentProps) => {
  const t = useTranslations('Settings.CustomFields.Contacts')
  const [hover, setHover] = useState<boolean>(false)
  const { classes } = useStyles({ hover })

  const { mutateAsync: deleteField } = api.field.delete.useMutation()
  const utils = api.useContext()

  const deleteFieldModal = () =>
    modals.openConfirmModal({
      title: t('DeleteFieldModal.title'),
      children: (
        <>
          <Text
            size="sm"
            dangerouslySetInnerHTML={{
              __html: t('DeleteFieldModal.description', {
                name: `<b>${field.name}</b>`
              })
            }}
          />
          <Text size="sm">{t('DeleteFieldModal.note')}</Text>
        </>
      ),
      labels: { confirm: t('DeleteFieldModal.yes'), cancel: t('DeleteFieldModal.no') },
      confirmProps: { color: 'red' },
      onConfirm: async () => {
        await deleteField({ id: field.id })
        await utils.field.invalidate()
      }
    })

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: field.id,
    transition: {
      duration: 150, // milliseconds
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
    }
  })
  const style = {
    transform: `translate3d(${transform?.x || 0}px, ${transform?.y || 0}px, 0)`,
    transition
  }

  return (
    <Box
      className={classes.wrapper}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <Box className={classes.wrapper}>
        <Input.Wrapper
          label={field.name || ''}
          withAsterisk={field.required}
          className={classes.input}
        >
          {getField(field)}
        </Input.Wrapper>
        <Box className={classes.hoverComponent}>
          <Anchor component="button">{t('HoverActions.edit')}</Anchor>
          <Anchor component="button" onClick={deleteFieldModal}>
            {t('HoverActions.delete')}
          </Anchor>

          <Tooltip label={t('HoverActions.dragme')} withArrow withinPortal>
            <ActionIcon id={field.id} className={classes.dragIcon} {...listeners}>
              <IconMenuOrder size={rem(14)} />
            </ActionIcon>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}
