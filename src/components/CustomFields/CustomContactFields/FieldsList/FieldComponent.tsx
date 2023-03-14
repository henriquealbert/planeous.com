import {
  Autocomplete,
  Checkbox,
  FileInput,
  Flex,
  Group,
  Input,
  MultiSelect,
  NativeSelect,
  NumberInput,
  Rating,
  rem,
  SegmentedControl,
  Select,
  Textarea,
  TextInput,
  UnstyledButton
} from '@mantine/core'
import type { Field } from '@prisma/client'
import { FieldsType } from '@prisma/client'
import {
  Icon123,
  IconAt,
  IconCalendar,
  IconExternalLink,
  IconForms,
  IconList,
  IconPhone,
  IconPlaylistAdd,
  IconTypography,
  IconUpload
} from '@tabler/icons-react'
import { DateTimePicker } from '@mantine/dates'

interface FieldComponentProps {
  field: Field
}

export const FieldComponent = ({ field }: FieldComponentProps) => {
  return (
    <Input.Wrapper label={field.name} withAsterisk={field.required}>
      {getField(field)}
    </Input.Wrapper>
  )
}

const getField = (field: Field) => {
  switch (field.type) {
    case FieldsType.TEXT:
      return <TextInput placeholder="Single line text" icon={<IconTypography size={rem(14)} />} />
    case FieldsType.NUMBER:
      return <NumberInput placeholder="1234567890" icon={<Icon123 size={rem(18)} />} />
    case FieldsType.TEXTAREA:
      return (
        <Textarea
          placeholder="Multi line text"
          icon={<IconForms style={{ marginBottom: 'auto', marginTop: rem(14) }} size={rem(14)} />}
          minRows={2}
          maxRows={4}
          autosize
        />
      )
    case FieldsType.CURRENCY:
      return (
        <Flex w="100%">
          <NativeSelect
            data={[
              { value: 'eur', label: '🇪🇺 EUR' },
              { value: 'usd', label: '🇺🇸 USD' },
              { value: 'cad', label: '🇨🇦 CAD' },
              { value: 'gbp', label: '🇬🇧 GBP' },
              { value: 'aud', label: '🇦🇺 AUD' }
            ]}
            styles={{
              input: {
                fontWeight: 500,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                width: rem(100)
              }
            }}
          />
          <NumberInput
            w="100%"
            hideControls
            placeholder="1,000.00"
            precision={2}
            formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            styles={{
              input: {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0
              }
            }}
          />
        </Flex>
      )
    case FieldsType.DATETIME:
      return (
        <DateTimePicker
          icon={<IconCalendar size={rem(14)} />}
          placeholder="dd/mm/yyyy"
          clearable
          defaultValue={new Date()}
        />
      )
    case FieldsType.SELECT:
      return (
        <Select
          data={[
            { value: 'react', label: 'React' },
            { value: 'ng', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' },
            { value: 'vue', label: 'Vue' },
            { value: 'riot', label: 'Riot' },
            { value: 'next', label: 'Next.js' },
            { value: 'blitz', label: 'Blitz.js' }
          ]}
          clearable
          searchable
          icon={<IconList size={rem(16)} />}
        />
      )
    case FieldsType.MULTI_SELECT:
      return (
        <MultiSelect
          data={[
            { value: 'react', label: 'React' },
            { value: 'ng', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' },
            { value: 'vue', label: 'Vue' },
            { value: 'riot', label: 'Riot' },
            { value: 'next', label: 'Next.js' },
            { value: 'blitz', label: 'Blitz.js' }
          ]}
          clearable
          searchable
          icon={<IconPlaylistAdd size={rem(16)} />}
        />
      )
    case FieldsType.CHECKBOX:
      return (
        <Checkbox.Group defaultValue={['react']}>
          <Group mt="xs">
            <Checkbox value="react" label="React" />
            <Checkbox value="svelte" label="Svelte" />
            <Checkbox value="ng" label="Angular" />
            <Checkbox value="vue" label="Vue" />
          </Group>
        </Checkbox.Group>
      )
    case FieldsType.CONTACT_LINK:
      return <Autocomplete data={[]} />
    case FieldsType.SEGMENTED_CONTROL:
      return (
        <div>
          <SegmentedControl
            data={[
              { label: 'React', value: 'react' },
              { label: 'Angular', value: 'ng' },
              { label: 'Vue', value: 'vue' },
              { label: 'Svelte', value: 'svelte' }
            ]}
          />
        </div>
      )
    case FieldsType.EMAIL:
      return <TextInput type="email" placeholder="Your email" icon={<IconAt size={rem(14)} />} />
    case FieldsType.PHONE:
      return <TextInput icon={<IconPhone size={rem(14)} />} />
    case FieldsType.URL:
      return (
        <Flex w="100%" pos="relative">
          <UnstyledButton
            sx={{
              cursor: 'pointer',
              zIndex: 99,
              width: 36,
              height: 36,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '&:hover': {
                color: 'rgba(255, 255, 255,0.5)'
              }
            }}
            pos="absolute"
          >
            <IconExternalLink size={rem(14)} />
          </UnstyledButton>
          <TextInput placeholder="https://www.planeous.com" w="100%" icon={<></>} />
        </Flex>
      )
    case FieldsType.FILE:
      return <FileInput placeholder="Upload file" icon={<IconUpload size={rem(14)} />} />
    case FieldsType.RATING:
      return <Rating value={3.5} fractions={2} readOnly />
    default:
      return <Input />
  }
}
