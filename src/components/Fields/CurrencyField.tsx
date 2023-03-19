import { Flex, NativeSelect, NumberInput } from '@mantine/core'
import type { Field } from '@prisma/client'
import { generateId } from 'utils/generateId'
import { currencyFormatter, currencyParser } from './utils'

interface FieldProps extends Field {
  options: {
    data?: { value: string }[]
    europeanFormat?: boolean
  }
}
interface CurrencyFieldProps {
  field: FieldProps
}

export const CurrencyField = ({ field }: CurrencyFieldProps) => {
  const data =
    field.options.data?.map((option) => ({
      value: option.value || generateId(),
      label: option.value
    })) || []
  const europeanFormat = !!field.options?.europeanFormat

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
        placeholder={europeanFormat ? '9.999,99' : '9,999.99'}
        precision={2}
        formatter={(value) => currencyFormatter(value, europeanFormat)}
        parser={currencyParser}
        decimalSeparator={europeanFormat ? ',' : '.'}
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
