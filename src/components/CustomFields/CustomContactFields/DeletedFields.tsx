import { Anchor, Box, Card, Flex, Stack, Text, Title } from '@mantine/core'
import type { Field } from '@prisma/client'
import dayjs from 'dayjs'
import { useTranslations } from 'next-intl'
import { api } from 'utils/api'

export const DeletedFields = () => {
  const t = useTranslations('Settings.CustomFields.DeletedFields')
  const { data } = api.field.listAllDeleted.useQuery()

  return (
    <div>
      <Title mb="xs" mt="xl" fw="normal" order={3}>
        {t('title')}
      </Title>
      <Card w="850px" p="xl" withBorder shadow="sm">
        <Text>{t('note')}</Text>

        {data?.fields.length === 0 ? (
          <Text mt="xl" color="dimmed" fz="sm">
            {t('noData')}
          </Text>
        ) : (
          <Stack mt="xl">
            {data?.fields.map((field) => (
              <FieldItem field={field} key={field.id} />
            ))}
          </Stack>
        )}
      </Card>
    </div>
  )
}

const FieldItem = ({ field }: { field: Field }) => {
  const t = useTranslations('Settings.CustomFields')
  const { mutateAsync: restoreField } = api.field.restore.useMutation()
  const utils = api.useContext()

  const handleRestore = async () => {
    await restoreField({ id: field.id })
    await utils.field.invalidate()
  }

  return (
    <Box>
      <Text fw="bold" fz="sm">
        {field.name}
      </Text>
      <Flex gap={6} align="center">
        <Text fz="xs" color="dimmed">
          {t('DeletedFields.deletedOn', {
            fieldType: t(`FieldsType.${field.type}`),
            date: dayjs(field.updatedAt).format('DD MMMM YYYY'),
            time: dayjs(field.updatedAt).format('HH:mm')
          })}
        </Text>

        <Anchor component="button" fz="xs" onClick={handleRestore}>
          {t('DeletedFields.restore')}
        </Anchor>
      </Flex>
    </Box>
  )
}
