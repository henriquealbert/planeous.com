import { Box, createStyles, Divider, Flex, Header as MantineHeader } from '@mantine/core'
import { AvatarMenu } from './AvatarMenu'
import { useSpotlight } from '@mantine/spotlight'
import { Navbar } from '../Navbar/Navbar'
import { PlaneousLogo } from 'components/PlaneousLogo'
import NextLink from 'next/link'
import { ColorSchemeControl } from 'components/ColorSchemeControl'
import { SearchControl } from 'components/SearchControl'

const useStyles = createStyles((theme) => ({
  header: {
    padding: theme.spacing.xs,
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  rightContainer: {
    justifyContent: 'flex-end',
    width: '100%',
    marginRight: theme.spacing.sm
  },
  headerControls: {
    marginRight: theme.spacing.md,
    gap: theme.spacing.sm
  },
  logo: {
    width: '100%',
    marginLeft: '6px'
  },
  colorSchemeControl: {
    svg: {
      color: theme.colorScheme === 'dark' ? theme.colors.yellow[5] : theme.colors.brand[8]
    }
  }
}))

export const Header = () => {
  const { classes } = useStyles()
  const spotlight = useSpotlight()

  return (
    <MantineHeader height={60} className={classes.header}>
      <Flex className={classes.logo}>
        <NextLink href="/" passHref style={{ height: 0 }}>
          <PlaneousLogo size={34} />
        </NextLink>
        <Divider mx="md" size="sm" orientation="vertical" />
        <Navbar />
      </Flex>

      <Flex className={classes.rightContainer}>
        <Flex className={classes.headerControls}>
          <SearchControl onClick={() => spotlight.openSpotlight()} />

          <Box className={classes.colorSchemeControl}>
            <ColorSchemeControl />
          </Box>

          <Divider size="sm" orientation="vertical" />
        </Flex>

        <AvatarMenu />
      </Flex>
    </MantineHeader>
  )
}
