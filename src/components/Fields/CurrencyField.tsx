import { Flex, NativeSelect, NumberInput, rem } from '@mantine/core'
import type { Field } from '@prisma/client'

interface CurrencyFieldProps {
  field: Field
}

const defaultOptions = [
  { value: 'eur', label: '🇪🇺 EUR' },
  { value: 'usd', label: '🇺🇸 USD' },
  { value: 'cad', label: '🇨🇦 CAD' },
  { value: 'gbp', label: '🇬🇧 GBP' },
  { value: 'aud', label: '🇦🇺 AUD' }
]

export const CurrencyField = ({ field }: CurrencyFieldProps) => {
  // TODO: Update placeholder according to selected currency format
  // TODO: Update formatter according to selected currency format
  // TODO: Update parser according to selected currency format
  return (
    <Flex w="100%">
      <NativeSelect
        data={defaultOptions}
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
}
