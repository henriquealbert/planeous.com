/* eslint-disable @typescript-eslint/ban-ts-comment */
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Checkbox, Divider, Flex, Input, Modal, Stack } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { FieldsType } from '@prisma/client'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { api } from 'utils/api'
import type { FieldValidation } from './utils'
import { showRequired } from './utils'
import { createFieldValidation } from './utils'
import { SelectFieldType } from './SelectFieldType'

interface CreateNewCustomFieldModalProps {
  opened: boolean
  close: () => void
}

export const CreateNewCustomFieldModal = ({ opened, close }: CreateNewCustomFieldModalProps) => {
  const t = useTranslations('Settings.CustomFields.Contacts.CreateNewCustomField')
  const { mutateAsync } = api.field.create.useMutation()
  const utils = api.useContext()

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<FieldValidation>({
    defaultValues: {
      name: '',
      type: FieldsType.TEXT,
      required: false,
      options: {}
    },
    resolver: zodResolver(createFieldValidation)
  })
  const type = watch('type')
  const handleClose = () => {
    reset()
    close()
  }
  const onSubmit = handleSubmit(async (formData) => {
    await mutateAsync(formData, {
      onError: (error) => {
        notifications.show({
          message: error.message,
          autoClose: true,
          color: 'red',
          title: t('createCustomFieldError')
        })
      },
      onSuccess: async () => {
        await utils.field.listAll.refetch()
        handleClose()
        notifications.show({
          message: t('createCustomFieldSuccess'),
          autoClose: true,
          color: 'teal',
          title: t('createCustomFieldSuccessTitle')
        })
      }
    })
  })

  return (
    <Modal opened={opened} onClose={handleClose} title={t('createModalTitle')} padding="xl">
      <form onSubmit={onSubmit}>
        <Stack spacing="lg">
          <Input.Wrapper
            label={t('fieldName')}
            withAsterisk
            error={errors.name?.message && t('fieldNameError')}
          >
            <Input placeholder={t('fieldNamePlaceholder')} {...register('name')} />
          </Input.Wrapper>

          <SelectFieldType control={control} />

          <Stack spacing="xs">
            {showRequired(type) ? (
              <Checkbox {...register('required')} size="xs" label={t('markAsRequired')} />
            ) : null}
            {type.includes(FieldsType.NUMBER) && (
              <Checkbox
                size="xs"
                label="Use European number format (9.999,99) instead of American (9,999.99)"
              />
            )}
          </Stack>
          <Divider />
          <Flex justify="flex-end">
            <Button onClick={handleClose} variant="default" mr="sm" disabled={isSubmitting}>
              {t('cancel')}
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {t('createCustomField')}
            </Button>
          </Flex>
        </Stack>
      </form>
    </Modal>
  )
}
