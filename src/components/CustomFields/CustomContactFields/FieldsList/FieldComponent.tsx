import { Anchor, Box, Input, Text } from '@mantine/core'
import type { Field } from '@prisma/client'
import { modals } from '@mantine/modals'

import { useState } from 'react'
import { useStyles } from './FieldComponent.styles'
import { api } from 'utils/api'
import { getField } from './utils'
import { useTranslations } from 'next-intl'

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

  return (
    <Box
      className={classes.wrapper}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Input.Wrapper
        label={field.name || ''}
        withAsterisk={field.required}
        className={classes.input}
      >
        {getField(field)}
      </Input.Wrapper>
      <Box className={classes.hoverComponent}>
        <Anchor mr="xl" component="button">
          {t('HoverActions.edit')}
        </Anchor>
        <Anchor component="button" onClick={deleteFieldModal}>
          {t('HoverActions.delete')}
        </Anchor>
      </Box>
    </Box>
  )
}
