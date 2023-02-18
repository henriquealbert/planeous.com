import { Fragment } from 'react'
import { menuLinksData } from './menuLinksData'
import NextLink from 'next/link'
import { Menu } from '@mantine/core'

export const MenuDropdown = () => (
  <Menu.Dropdown>
    {menuLinksData.map((menuItem, index) => (
      <Fragment key={menuItem.label}>
        {menuItem.label && <Menu.Label>{menuItem.label}</Menu.Label>}

        {menuItem.linksData.map((link) => (
          <NextLink href={link.href} key={link.label} style={{ textDecoration: 'none' }}>
            <Menu.Item onClick={link.onClick} color={link.color} icon={link.icon}>
              {link.label}
            </Menu.Item>
          </NextLink>
        ))}
        {menuLinksData.length - index >= menuLinksData.length && <Menu.Divider />}
      </Fragment>
    ))}
  </Menu.Dropdown>
)
