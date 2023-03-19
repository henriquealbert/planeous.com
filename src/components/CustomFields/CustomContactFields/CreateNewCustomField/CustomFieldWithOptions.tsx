import { DndContext, closestCenter } from '@dnd-kit/core'
import type { DragEndEvent } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable'

import { ActionIcon, Anchor, Card, Flex, rem, Stack, Text, TextInput, Tooltip } from '@mantine/core'
import { IconMenuOrder, IconX } from '@tabler/icons-react'
import type { Control, UseFieldArrayRemove, UseFormRegister } from 'react-hook-form'
import { useFieldArray } from 'react-hook-form'

import type { FieldValidation } from './utils'
import { useTranslations } from 'next-intl'

interface CustomFieldWithOptionsProps {
  control: Control<FieldValidation>
  register: UseFormRegister<FieldValidation>
}
export const CustomFieldWithOptions = ({ control, register }: CustomFieldWithOptionsProps) => {
  const t = useTranslations(
    'Settings.CustomFields.Contacts.CreateNewCustomField.CustomFieldWithOptions'
  )
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'options.data'
  })

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    move(active.id as number, over?.id as number)
  }

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
      <Card withBorder>
        <Text>{t('options')}</Text>
        <Text size="xs" color="dimmed">
          {t('note')}
        </Text>
        <Text size="xs" color="dimmed">
          {t('noteDragndrop')}
        </Text>
        <Stack spacing="xs" mt="md">
          <SortableContext
            items={fields.map((_, index: number) => index)}
            strategy={verticalListSortingStrategy}
          >
            {fields.map((field, index) => (
              <Draggable
                field={field}
                key={field.id}
                index={index}
                register={register}
                remove={remove}
              />
            ))}
          </SortableContext>
          <Anchor
            w="fit-content"
            component="button"
            type="button"
            size="xs"
            onClick={() => append('')}
          >
            {t('addAnother')}
          </Anchor>
        </Stack>
      </Card>
    </DndContext>
  )
}
interface DraggableProps {
  field: Record<'id', string>
  register: UseFormRegister<FieldValidation>
  remove: UseFieldArrayRemove
  index: number
}
const Draggable = ({ field, register, remove, index }: DraggableProps) => {
  const t = useTranslations(
    'Settings.CustomFields.Contacts.CreateNewCustomField.CustomFieldWithOptions'
  )
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: index,
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
    <Flex align="center" key={field.id} gap={rem(4)} ref={setNodeRef} style={style} {...attributes}>
      <TextInput
        w="100%"
        {...register(`options.data.${index}.value`)}
        placeholder={`${t('optionPlaceholder')} ${index + 1}`}
      />
      <Tooltip label={t('delete')} withArrow withinPortal>
        <ActionIcon onClick={() => remove(index)}>
          <IconX size={rem(14)} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label={t('dragme')} withArrow withinPortal>
        <ActionIcon
          id={field.id}
          sx={{
            cursor: 'grab',
            '&:active': {
              cursor: 'grabbing'
            }
          }}
          {...listeners}
        >
          <IconMenuOrder size={rem(14)} />
        </ActionIcon>
      </Tooltip>
    </Flex>
  )
}
