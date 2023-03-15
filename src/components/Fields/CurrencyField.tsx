import { Flex, NativeSelect, NumberInput } from '@mantine/core'
import type { Field } from '@prisma/client'

interface CurrencyFieldProps {
  field: Field
}

export const CurrencyField = ({ field }: CurrencyFieldProps) => {
  // TODO: Update placeholder according to selected currency format
  // TODO: Update formatter according to selected currency format
  // TODO: Update parser according to selected currency format
  const options = field?.options as { data?: { value: string }[] }
  const data =
    options.data?.map((option) => ({
      value: option.value,
      label: option.value
    })) || []

  return (
    <Flex w="100%">
      <NativeSelect
        data={data}
        styles={{
          input: {
            fontWeight: 500,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            width: 'fit-content'
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
}
