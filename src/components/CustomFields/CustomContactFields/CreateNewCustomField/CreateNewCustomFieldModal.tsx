import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Input,
  Modal,
  NumberInput,
  Stack,
  Text
} from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { FieldsType } from '@prisma/client'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'

import { api } from 'utils/api'
import type { FieldValidation } from './utils'
import { showOptions, showRequired, createFieldValidation } from './utils'
import { SelectFieldType } from './SelectFieldType'
import { CustomFieldWithOptions } from './CustomFieldWithOptions'

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
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<FieldValidation>({
    defaultValues: {
      name: '',
      type: FieldsType.TEXT,
      required: false,
      options: {
        data: [{ value: '' }, { value: '' }, { value: '' }]
      }
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
        await utils.field.listAllActive.refetch()
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
    <Modal
      opened={opened}
      onClose={handleClose}
      title={
        <Text fz="xl" fw="bold">
          {t('createModalTitle')}
        </Text>
      }
      padding="xl"
      size="lg"
    >
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
            {type.includes(FieldsType.NUMBER) && (
              <>
                <Checkbox
                  size="xs"
                  label={t('NumberOptions.negativeNumbers')}
                  onChange={(e) =>
                    setValue('options', {
                      ...watch('options'),
                      negative: e.currentTarget.checked
                    })
                  }
                />
                <Checkbox
                  size="xs"
                  label={t('NumberOptions.decimalNumbers')}
                  onChange={(e) =>
                    setValue('options', {
                      ...watch('options'),
                      decimal: e.currentTarget.checked
                    })
                  }
                />
              </>
            )}

            {showOptions(type) && <CustomFieldWithOptions control={control} register={register} />}
            {type.includes(FieldsType.CURRENCY) && (
              <Checkbox
                size="xs"
                mt="md"
                label={t('CurrencyOptions.format')}
                onChange={(e) =>
                  setValue('options', {
                    ...watch('options'),
                    europeanFormat: e.currentTarget.checked
                  })
                }
              />
            )}

            {type.includes(FieldsType.RATING) && (
              <>
                <Input.Wrapper label={t('RatingOptions.starCount')} mb="sm">
                  <NumberInput
                    min={1}
                    max={10}
                    w="100px"
                    defaultValue={5}
                    disabled={watch('options').isNPS as boolean}
                    onChange={(value) =>
                      setValue('options', {
                        ...watch('options'),
                        ratingCount: Number(value)
                      })
                    }
                  />
                </Input.Wrapper>
                <Checkbox
                  size="xs"
                  label={t('RatingOptions.isNps')}
                  onChange={(e) =>
                    setValue('options', {
                      ...watch('options'),
                      isNPS: e.currentTarget.checked
                    })
                  }
                />
              </>
            )}

            {type.includes(FieldsType.DATETIME) && (
              <>
                <Checkbox
                  size="xs"
                  mt="md"
                  label={t('DateOptions.format')}
                  onChange={(e) =>
                    setValue('options', {
                      ...watch('options'),
                      europeanFormat: e.currentTarget.checked
                    })
                  }
                />
                <Checkbox
                  size="xs"
                  label={t('DateOptions.withRange')}
                  onChange={(e) =>
                    setValue('options', {
                      ...watch('options'),
                      withRange: e.currentTarget.checked
                    })
                  }
                  disabled={watch('options').withTimePicker as boolean}
                />
                <Checkbox
                  size="xs"
                  label={t('DateOptions.includeTime')}
                  onChange={(e) =>
                    setValue('options', {
                      ...watch('options'),
                      withTimePicker: e.currentTarget.checked
                    })
                  }
                  disabled={watch('options').withRange as boolean}
                />

                {watch('options').withTimePicker && (
                  <Checkbox
                    size="xs"
                    label={t('DateOptions.withSeconds')}
                    onChange={(e) =>
                      setValue('options', {
                        ...watch('options'),
                        withSeconds: e.currentTarget.checked
                      })
                    }
                  />
                )}
              </>
            )}

            {showRequired(type) && (
              <Checkbox {...register('required')} size="xs" label={t('markAsRequired')} />
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
