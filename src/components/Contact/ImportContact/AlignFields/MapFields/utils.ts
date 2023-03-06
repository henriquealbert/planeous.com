import type { UseFormSetError } from 'react-hook-form'
import { convertToCamelCase } from 'utils/convertToCamelCase'
import type { ParsedCsvResult } from 'utils/parseCsv'

export const DO_NOT_MAP_FIELD = 'DO_NOT_MAP_FIELD'

export const getDefautValues = (
  csvData: ParsedCsvResult | null,
  CONTACTS_FIELDS: Record<string, string>[]
) => {
  return csvData?.meta.fields?.reduce((acc: Record<string, string>, colHeader) => {
    const h = convertToCamelCase(colHeader)
    if (CONTACTS_FIELDS.find((c) => c.value === h)) {
      acc[h] = h
    } else {
      acc[h] = ''
    }

    return acc
  }, {})
}

interface CheckForFieldsParams {
  crmFields: Record<string, string>
  setError: UseFormSetError<{
    crmFields: Record<string, string> | undefined
  }>
  message: string
}
export const checkForUnmappedFields = ({ crmFields, setError, message }: CheckForFieldsParams) => {
  const notMappedFields = Object.entries(crmFields).filter(([, val]) => !val)
  if (notMappedFields.length > 0) {
    notMappedFields.forEach(([key]) => {
      setError(`crmFields.${convertToCamelCase(key)}`, {
        type: 'manual',
        message
      })
    })
    return
  }
}

export const checkForDuplicateFields = ({ crmFields, setError, message }: CheckForFieldsParams) => {
  const duplicatedFields = Object.values(crmFields).filter(
    (item, index, self) => self.indexOf(item) !== index
  )
  if (duplicatedFields.length > 0) {
    duplicatedFields.forEach((field) => {
      setError(`crmFields.${convertToCamelCase(field)}`, {
        type: 'manual',
        message
      })
    })
    return
  }
}

interface GetMappedDataParams {
  csvData: ParsedCsvResult
  crmFields: Record<string, string>
}
export const getMappedData = ({ csvData, crmFields }: GetMappedDataParams) => {
  const mappedData = csvData.data.map((row) => {
    const mappedRow = csvData.meta.fields!.map((colHeader) => {
      const h = convertToCamelCase(colHeader)
      const header = crmFields?.[h]
      if (!header || header === DO_NOT_MAP_FIELD) return {}

      return { [header]: row[colHeader] }
    })
    return mappedRow.reduce((acc, cur) => ({ ...acc, ...cur }), {})
  })

  return mappedData
}

// TODO: Generate this array from the Contact model, remember to add the custom fields created by the user
export const CONTACTS_FIELDS = [
  { value: 'firstName', label: 'First Name' },
  { value: 'lastName', label: 'Last name' },
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: DO_NOT_MAP_FIELD, label: '--' }
]
