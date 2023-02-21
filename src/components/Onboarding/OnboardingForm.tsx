import { Button, Select, Stack, Text, TextInput, Title } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import { useAuth } from 'contexts/AuthContext'
import { useTranslations } from 'next-intl'
import type { ChangeEvent } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { OnboardingFormType } from './validation'
import { onboardingFormSchema } from './validation'
import { api } from 'utils/api'
import { useRouter } from 'next/router'

export const OnboardingForm = () => {
  const t = useTranslations('OnboardingForm')
  const { user, refetchUser } = useAuth()
  const { push } = useRouter()
  const createOrgMutation = api.organization.create.useMutation()

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm<OnboardingFormType>({
    defaultValues: {
      user: {
        name: user?.name || '',
        terms: true
      },
      organization: {
        name: '',
        slug: '',
        size: ''
      }
    },
    resolver: zodResolver(onboardingFormSchema)
  })
  const onSubmit = handleSubmit(async (formData) => {
    await createOrgMutation.mutateAsync(formData, {
      onSuccess: async (data) => {
        await refetchUser()
        void push({
          pathname: '/app',
          // If the organization is SOLO, we don't want to show the invite members modal
          query: { inviteMembers: data?.organization?.size !== 'solo' }
        })
      },
      onError: (error) => {
        alert(error)
      }
    })
  })

  return (
    <form onSubmit={onSubmit}>
      <Title>{t('title')}</Title>
      <Text mb="xl">{t('description')}</Text>
      <Stack>
        <TextInput
          placeholder={t('fullNamePlaceholder')}
          label={t('fullName')}
          radius="md"
          withAsterisk
          {...register('user.name')}
          error={errors.user?.name?.message && t('fullNameError')}
        />
        <TextInput
          placeholder={t('organizationNamePlaceholder')}
          label={t('organizationName')}
          radius="md"
          withAsterisk
          {...register('organization.name', {
            onChange(event: ChangeEvent<HTMLInputElement>) {
              setValue('organization.slug', event.target.value)
            }
          })}
          error={
            (errors.organization?.name?.message || errors.organization?.slug?.message) &&
            t('organizationNameError')
          }
        />

        <Controller
          name="organization.size"
          control={control}
          render={({ field }) => (
            <Select
              label={t('companySize')}
              placeholder={t('companySizePlaceholder')}
              data={[
                { value: 'solo', label: t('companySizeOptions.solo') },
                { value: 'small', label: t('companySizeOptions.small') },
                { value: 'medium', label: t('companySizeOptions.medium') },
                { value: 'large', label: t('companySizeOptions.large') },
                { value: 'enterprise', label: t('companySizeOptions.enterprise') }
              ]}
              withAsterisk
              {...field}
              error={errors.organization?.size?.message && t('companySizeError')}
            />
          )}
        />

        <Text size="xs" w="300px" align="center">
          {t('terms')}
        </Text>
        <input type="hidden" {...register('user.terms')} />

        <Button
          type="submit"
          mt="md"
          rightIcon={<IconArrowRight size={14} />}
          loading={createOrgMutation.isLoading}
        >
          {t('submitBtn')}
        </Button>
      </Stack>
    </form>
  )
}
