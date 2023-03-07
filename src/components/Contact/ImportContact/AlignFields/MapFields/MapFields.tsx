import { Button, Flex, Select, Table, Text, Title } from '@mantine/core'
import { useStore } from 'contexts/store'
import { useTranslations } from 'next-intl'
import { Controller, useForm } from 'react-hook-form'
import { api } from 'utils/api'
import { convertToCamelCase } from 'utils/convertToCamelCase'
import {
  checkForDuplicateFields,
  checkForUnmappedFields,
  CONTACTS_FIELDS,
  getDefautValues,
  getMappedData
} from './utils'

export const MapsFields = () => {
  const t = useTranslations('ImportContacts.AlignFields.Table')
  const { csvData, handleStepForward, updatePageTitle } = useStore((state) => state.importContact)
  const { mutateAsync } = api.contact.createBatch.useMutation()

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      crmFields: getDefautValues(csvData, CONTACTS_FIELDS)
    }
  })

  const onSubmit = handleSubmit((formData) => {
    if (!formData.crmFields || !csvData?.data || !csvData.meta.fields) return

    checkForUnmappedFields({
      crmFields: formData.crmFields,
      setError,
      message: t('crmFieldErrorNotMapped')
    })

    checkForDuplicateFields({
      crmFields: formData.crmFields,
      setError,
      message: t('crmFieldErrorDuplicate')
    })

    const mappedData = getMappedData({ crmFields: formData.crmFields, csvData })

    // TODO: validate against Custom Fields types
    // example: if the user selects a custom field of type "number" and the csv data is a string, we should show an error

    // await mutateAsync(mappedData, {
    //   onSuccess: () => {
    //     handleStepForward()
    //     updatePageTitle(null)
    //   },
    //   onError: (e) => {
    //     alert(e.message)
    //   }
    // })
  })

  return (
    <>
      <Table withBorder withColumnBorders striped mt="xl">
        <thead>
          <tr>
            <th>
              <Title order={5}>{t('csvHeader')}</Title>
            </th>
            <th>
              <Title order={5}>{t('crmField')}</Title>
            </th>
          </tr>
        </thead>
        <tbody>
          {csvData?.meta.fields?.map((colHeader) => (
            <tr key={colHeader}>
              <td>
                <Text>{colHeader}</Text>
              </td>
              <td>
                <form id="mappedCrmFieldsForm" onSubmit={onSubmit}>
                  <Controller
                    name={`crmFields.${convertToCamelCase(colHeader)}`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        data={CONTACTS_FIELDS}
                        placeholder={t('crmFieldPlaceholder')}
                        error={
                          errors?.crmFields?.[convertToCamelCase(field.value)]?.message ||
                          errors?.crmFields?.[convertToCamelCase(colHeader)]?.message
                        }
                        {...field}
                      />
                    )}
                  />
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Flex justify="flex-end">
        <Button mt="xl" type="submit" form="mappedCrmFieldsForm">
          {t('button')}
        </Button>
      </Flex>
    </>
  )
}
