import { Avatar, Card, Divider, Flex, Grid, Input, Text } from '@mantine/core'
import { useTranslations } from 'next-intl'

export const FieldsList = () => {
  const t = useTranslations('Settings.CustomFields.Contacts.FieldsList')
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

        <Grid.Col span={6}>
          <Input.Wrapper label="Email">
            <Input type="email" disabled />
          </Input.Wrapper>
        </Grid.Col>

        <Grid.Col span={6}>
          <Input.Wrapper label="Company Name">
            <Input disabled />
          </Input.Wrapper>
        </Grid.Col>
      </Grid>
    </Card>
  )
}
