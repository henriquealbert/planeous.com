import { Box, Button, Flex, Stack, Text, TextInput } from '@mantine/core'
import { IconAt, IconCheck, IconPlus, IconUserPlus, IconX } from '@tabler/icons-react'
import { useAuth } from 'contexts/AuthContext'
import { useStore } from 'contexts/store'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import { useFieldArray, useForm } from 'react-hook-form'
import { api } from 'utils/api'
import type { InviteMembersFormType } from './validation'
import { showNotification } from '@mantine/notifications'

interface InviteMembersProps {
  showCancelBtn?: boolean
}

export const InviteMembers = ({ showCancelBtn }: InviteMembersProps) => {
  const { push } = useRouter()
  const { user } = useAuth()
  const t = useTranslations('Organizations.InviteMembers')
  const { closeModal } = useStore((state) => state.inviteMembersModal)
  const createMemberAndInvite = api.user.createMemberAndInvite.useMutation()

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<InviteMembersFormType>({
    defaultValues: {
      members: [{ email: '' }],
      organizationId: user?.organizationId || ''
    }
  })
  const { fields, append } = useFieldArray({
    control,
    name: 'members'
  })

  const onSubmit = handleSubmit(async (formData) => {
    await createMemberAndInvite.mutateAsync(formData, {
      onSuccess: () => {
        showNotification({
          title: 'Member invited!',
          message: 'We have sent an email invitation to the member(s).',
          color: 'teal',
          icon: <IconCheck size={18} />,
          autoClose: 5000
        })
        setValue('members', [{ email: '' }])
      },
      onError: (error) => {
        let errorMessage = 'Something went wrong. Please try again later.'
        if (error.message.includes('Unique constraint failed on the fields: (`email`)')) {
          errorMessage = 'Email already exists'
        }
        showNotification({
          title: 'Ooops!',
          message: `${errorMessage}`,
          color: 'red',
          autoClose: 5000
        })
      }
    })
  })

  return (
    <>
      <Text>{t('description')}</Text>
      <Box component="form" onSubmit={onSubmit}>
        <Stack spacing="md" mt="xl">
          {fields.map((field, index) => (
            <TextInput
              key={field.id}
              label={t('email')}
              placeholder={t('emailPlaceholder')}
              rightSection={<IconAt size={14} />}
              {...register(`members.${index}.email`)}
              error={errors.members?.[index]?.email?.message}
            />
          ))}
          {fields.length <= 4 ? (
            <Button
              onClick={() => append({ email: '' })}
              leftIcon={<IconPlus size={14} />}
              sx={(theme) => ({
                background: 'none',
                border: 'none',
                width: 'fit-content',
                height: 'fit-content',
                marginTop: theme.spacing.xs,
                marginBottom: theme.spacing.lg,
                color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[7],
                '&:hover': {
                  background: 'none',
                  textDecoration: 'underline',
                  color: theme.colors.gray[6]
                }
              })}
            >
              {t('addAnother')}
            </Button>
          ) : (
            <Text color="gray.7">{t('maxAllowed')}</Text>
          )}
        </Stack>

        <Flex justify={showCancelBtn ? 'space-between' : 'flex-end'} mt="xl">
          {showCancelBtn && (
            <Button
              variant="default"
              onClick={() => {
                closeModal()
                void push('/app', {
                  query: {}
                })
              }}
            >
              {t('skipBtn')}
            </Button>
          )}
          <Button leftIcon={<IconUserPlus size={16} />} type="submit">
            {t('submitBtn')}
          </Button>
        </Flex>
      </Box>
    </>
  )
}
