import type { DragEndEvent } from '@dnd-kit/core'
import { closestCenter } from '@dnd-kit/core'
import { DndContext } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Avatar, Card, Divider, Flex, Grid, Input, Text } from '@mantine/core'
import { useTranslations } from 'next-intl'
import { api } from 'utils/api'
import { FieldComponent } from './FieldComponent'

export const FieldsList = () => {
  const t = useTranslations('Settings.CustomFields.Contacts.FieldsList')
  const { data, isLoading } = api.field.listAllActive.useQuery()
  const { mutateAsync: orderField } = api.field.orderField.useMutation()
  const utils = api.useContext()

  const hasData = !isLoading && !!data?.fields?.length

  const handleDragEnd = async ({ active, over }: DragEndEvent) => {
    console.log('passo')
    if (!hasData) return
    const next = data.fields.find((f) => f.id === active.id)
    const prevId = data.fields.find((f) => f.id === over?.id)

    if (!next || !prevId) return

    await orderField({
      nextId: next.id,
      nextOrder: next.order,
      prevId: prevId.id,
      prevOrder: prevId.order
    })
    await utils.field.listAllActive.refetch()
  }

  return (
    <Card withBorder p="xl" maw="850px" shadow="sm">
      <Text color="dimmed" fz="xs" mb="md">
        {t('note')}
      </Text>
      <Flex gap="md" align="center">
        <Avatar radius="lg" variant="filled" alt="Avatar Url" size="lg" />
        <Input.Wrapper label="Salutation" maw="70px">
          <Input disabled />
        </Input.Wrapper>

        <Input.Wrapper label="First Name" required>
          <Input disabled />
        </Input.Wrapper>

        <Input.Wrapper label="Middle Name">
          <Input disabled />
        </Input.Wrapper>

        <Input.Wrapper label="Last Name">
          <Input disabled />
        </Input.Wrapper>

        <Input.Wrapper label="Suffix" maw="70px">
          <Input disabled />
        </Input.Wrapper>
      </Flex>
      <Divider my="xl" />

      {hasData && (
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
          <SortableContext
            items={data.fields.map((f) => f.id)}
            strategy={verticalListSortingStrategy}
          >
            <Grid grow gutter="xl">
              {data?.fields.map((field) => (
                <Grid.Col span={6} order={field.order || undefined} key={field.id}>
                  <FieldComponent field={field} />
                </Grid.Col>
              ))}
            </Grid>
          </SortableContext>
        </DndContext>
      )}
    </Card>
  )
}
