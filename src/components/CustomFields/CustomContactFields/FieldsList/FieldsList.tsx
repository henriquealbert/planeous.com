import { Avatar, Card, Divider, Flex, Grid, Input, Text } from '@mantine/core'
import { useTranslations } from 'next-intl'
import { api } from 'utils/api'
import { FieldComponent } from './FieldComponent'

export const FieldsList = () => {
  const t = useTranslations('Settings.CustomFields.Contacts.FieldsList')
  const { data } = api.field.listAllActive.useQuery()

  return (
    <Card withBorder p="xl" maw="850px" shadow="sm">
      <Grid grow gutter="xl">
        <Grid.Col span={12}>
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
          <Divider mt="xl" />
        </Grid.Col>

        {data?.fields.map((field) => (
          <Grid.Col span={6} key={field.id}>
            <FieldComponent field={field} />
          </Grid.Col>
        ))}
      </Grid>
    </Card>
  )
}
