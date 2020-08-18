import React, { useState } from 'react'
import { MdHome, MdBookmark, MdStorage } from 'react-icons/md'
import { BrowserRouter as Router } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { Flex } from '../../atoms/Flex'
import { Avatar } from '../../atoms/Avatar'
import { Text } from '../../atoms/Text'

export default {
  component: Sidebar,
  title: 'molecules/Sidebar',
  decorators: [withKnobs]
}

const sidebarData = {
  user: {
    name: 'juliano',
    email: 'test@aiqfome.com'
  },
  itens: [
    {
      icon: <MdHome size={18} />,
      name: 'dashboard',
      href: '/dashboard',
      badge: 1
    },
    {
      icon: <MdBookmark size={18} />,
      name: 'bookmark',
      href: '/pedidos'
    },
    {
      icon: <MdStorage size={18} />,
      name: 'store',
      itens: [
        {
          name: 'Sub Item',
          href: '/subItem'
        },
        {
          name: 'Sub Item',
          href: '/subItem'
        },
        {
          name: 'Sub Item',
          href: '/subItem',
          badge: 18
        }
      ]
    },
    // {
    //   icon: <MdStorage size={18} />,
    //   name: 'itens',
    //   itens: [
    //     {
    //       name: 'Sub Item',
    //       href: '/subItem'
    //     },
    //     {
    //       name: 'Sub Item',
    //       href: '/subItem'
    //     },
    //     {
    //       name: 'Sub Item',
    //       href: '/subItem'
    //     },
    //     {
    //       name: 'Sub Item',
    //       href: '/subItem'
    //     },
    //     {
    //       name: 'Sub Item',
    //       href: '/subItem'
    //     },
    //     {
    //       name: 'Sub Item',
    //       href: '/subItem'
    //     }
    //   ]
    // },
    {
      icon: <MdBookmark size={18} />,
      name: 'aiqfome',
      href: 'https://aiqfome.com/',
      type: 'external'
    }
  ]
}

const Header = () => {
  const user = sidebarData.user
  return (
    <Flex
      style={{
        overflowX: 'hidden'
      }}
      padding='24px'
      alignItems='center'
    >
      <Avatar alt={user.name} mx='12px' />
      <Flex flexDirection='column'>
        <Text color='almostBlack' fontWeight='semiBold'>
          {user.name}
        </Text>
        <Text color='darkGrey' fontSize='xsmall'>
          {user.email}
        </Text>
      </Flex>
    </Flex>
  )
}

export const Basic: React.FC = () => {
  return (
    <Router>
      <Flex justifyContent='row'>
        <Sidebar
          header={<Header />}
          opened={boolean('opened', true)}
          data={sidebarData}
        />
        <h1>teste</h1>
      </Flex>
    </Router>
  )
}
