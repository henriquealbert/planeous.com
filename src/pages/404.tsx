import { PublicRoute } from 'components/Layouts/PublicRoute/PublicRoute'
import type { GetStaticProps } from 'next'
import { type NextPage } from 'next'
import NextLink from 'next/link'
import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core'
import { getServerTranslation } from 'utils/serverTranslation'

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 220,
    paddingBottom: 80
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120
    }
  },

  title: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32
    }
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5
  }
}))

const Custom404Page: NextPage = () => {
  const { classes } = useStyles()
  return (
    <PublicRoute>
      <Container className={classes.root}>
        <div className={classes.label}>404</div>
        <Title className={classes.title}>You have found a secret place.</Title>
        <Text color="dimmed" size="lg" align="center" className={classes.description}>
          Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
          been moved to another URL. <br />
          If you think this is an error contact support.
        </Text>
        <Group position="center">
          <NextLink href="/">
            <Button variant="outline" size="md">
              Take me back to home page
            </Button>
          </NextLink>
        </Group>
      </Container>
    </PublicRoute>
  )
}

export default Custom404Page

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: await getServerTranslation(locale ?? 'en')
    }
  }
}
