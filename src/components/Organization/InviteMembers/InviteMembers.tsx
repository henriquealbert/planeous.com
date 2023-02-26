import { Box, Button, Flex, Stack, Text, TextInput } from '@mantine/core'
import { IconAt, IconPlus, IconUserPlus } from '@tabler/icons-react'
import { useStore } from 'contexts/store'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import { useFieldArray, useForm } from 'react-hook-form'

interface InviteMembersProps {
  showCancelBtn?: boolean
}

export const InviteMembers = ({ showCancelBtn }: InviteMembersProps) => {
  const t = useTranslations('Organizations.InviteMembers')
  const { push } = useRouter()
  const { closeModal } = useStore((state) => state.inviteMembersModal)
  const { register, control, watch } = useForm({
    defaultValues: {
      members: [{ email: '' }]
    }
  })
  const { fields, append } = useFieldArray({
    control,
    name: 'members'
  })

  console.log(watch())
  return (
    <>
      <Text>{t('description')}</Text>
      <Box component="form">
        <Stack spacing="md" mt="xl">
          {fields.map((field, index) => (
            <TextInput
              key={field.id}
              label={t('email')}
              placeholder={t('emailPlaceholder')}
              rightSection={<IconAt size={14} />}
              {...register(`members.${index}.email`)}
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
          <Button leftIcon={<IconUserPlus size={16} />}>{t('submitBtn')}</Button>
        </Flex>
      </Box>
    </>
  )
}
